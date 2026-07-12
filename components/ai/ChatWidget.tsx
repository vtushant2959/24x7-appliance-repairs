"use client";
import { Send, X } from "lucide-react";
import { useRef, useState } from "react";
import { site } from "@/lib/site";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export function ChatWidget({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content: `Hi! I'm the ${site.name} repair assistant. Describe your appliance problem — brand, appliance and what's happening — and I'll help you figure out what's likely wrong.`,
    },
  ]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const listRef = useRef<HTMLDivElement>(null);

  async function sendMessage() {
    const text = input.trim();
    if (!text || sending) return;
    setError("");
    const nextMessages: ChatMessage[] = [...messages, { role: "user", content: text }];
    setMessages(nextMessages);
    setInput("");
    setSending(true);

    try {
      const response = await fetch("/api/ai-assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });

      if (!response.ok || !response.body) {
        const data = await response.json().catch(() => null);
        setError(data?.error || "Something went wrong. Please call or WhatsApp us instead.");
        setSending(false);
        return;
      }

      setMessages((prev) => [...prev, { role: "assistant", content: "" }]);
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let accumulated = "";
      // eslint-disable-next-line no-constant-condition
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        accumulated += decoder.decode(value, { stream: true });
        setMessages((prev) => {
          const copy = [...prev];
          copy[copy.length - 1] = { role: "assistant", content: accumulated };
          return copy;
        });
        listRef.current?.scrollTo({ top: listRef.current.scrollHeight });
      }
    } catch {
      setError("Something went wrong. Please call or WhatsApp us instead.");
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 flex h-[32rem] w-[22rem] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-soft dark:border-slate-800 dark:bg-slate-950">
      <div className="flex items-center justify-between bg-brand-blue px-4 py-3 text-white">
        <p className="font-bold">AI Repair Assistant</p>
        <button aria-label="Close assistant" onClick={onClose} className="focus-ring rounded p-1">
          <X size={18} />
        </button>
      </div>
      <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto p-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={
              message.role === "user"
                ? "ml-auto max-w-[85%] rounded-lg bg-brand-orange px-3 py-2 text-sm text-white"
                : "mr-auto max-w-[85%] rounded-lg bg-slate-100 px-3 py-2 text-sm text-slate-800 dark:bg-slate-900 dark:text-slate-200"
            }
          >
            {message.content || (sending && index === messages.length - 1 ? "…" : "")}
          </div>
        ))}
        {error && <p className="text-xs text-red-600">{error}</p>}
      </div>
      <div className="flex gap-2 border-t border-slate-200 p-3 dark:border-slate-800">
        <input
          className="focus-ring flex-1 rounded-md border border-slate-200 px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-900"
          placeholder="Describe your appliance issue…"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              sendMessage();
            }
          }}
        />
        <button
          aria-label="Send"
          onClick={sendMessage}
          disabled={sending}
          className="focus-ring flex items-center justify-center rounded-md bg-brand-blue px-3 text-white disabled:opacity-60"
        >
          <Send size={16} />
        </button>
      </div>
    </div>
  );
}
