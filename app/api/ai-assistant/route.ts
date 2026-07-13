import { NextResponse } from "next/server";
import { z } from "zod";
import { AI_ASSISTANT_AVAILABLE, AI_MODEL, getAnthropicClient } from "@/lib/ai/anthropic";
import { SYSTEM_PROMPT } from "@/lib/ai/systemPrompt";

export const runtime = "nodejs";

const messageSchema = z.object({
  role: z.enum(["user", "assistant"]),
  content: z.string().min(1).max(2000),
});
const requestSchema = z.object({
  messages: z.array(messageSchema).min(1).max(20),
});

// Minimal in-memory per-IP rate limit. Resets on cold start and doesn't
// share state across serverless instances - acceptable for launch, but the
// documented follow-up is @upstash/ratelimit + @upstash/redis once traffic
// justifies provisioning a shared store.
const RATE_LIMIT = 15;
const RATE_WINDOW_MS = 60_000;
const requestLog = new Map<string, number[]>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const timestamps = (requestLog.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS);
  timestamps.push(now);
  requestLog.set(ip, timestamps);
  return timestamps.length > RATE_LIMIT;
}

export async function POST(request: Request) {
  if (!AI_ASSISTANT_AVAILABLE) {
    return NextResponse.json(
      { error: "The AI assistant is temporarily unavailable. Please call or WhatsApp us instead." },
      { status: 503 },
    );
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please wait a moment and try again." },
      { status: 429 },
    );
  }

  const body = await request.json();
  const parsed = requestSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const client = getAnthropicClient();
  if (!client) {
    return NextResponse.json(
      { error: "The AI assistant is temporarily unavailable. Please call or WhatsApp us instead." },
      { status: 503 },
    );
  }

  try {
    const stream = client.messages.stream({
      model: AI_MODEL,
      max_tokens: 512,
      system: SYSTEM_PROMPT,
      messages: parsed.data.messages,
    });

    const encoder = new TextEncoder();
    const readable = new ReadableStream({
      async start(controller) {
        stream.on("text", (text) => {
          controller.enqueue(encoder.encode(text));
        });
        stream.on("end", () => controller.close());
        stream.on("error", (error) => {
          console.error("AI assistant stream error", error);
          controller.close();
        });
      },
    });

    return new Response(readable, {
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  } catch (error) {
    console.error("AI assistant error", error);
    return NextResponse.json(
      { error: "Something went wrong. Please call or WhatsApp us instead." },
      { status: 500 },
    );
  }
}
