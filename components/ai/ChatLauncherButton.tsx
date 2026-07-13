"use client";
import dynamic from "next/dynamic";
import { Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { AI_ASSISTANT_OPEN_EVENT } from "@/components/ai/AiAssistantOpenButton";
import { trackAiAssistantOpen } from "@/lib/analytics";

// Lazy-loaded and only mounted after the launcher is clicked, so the chat
// widget's JS (and the fetch logic behind it) never ships in the initial
// page bundle - keeps this off the Core Web Vitals critical path.
const ChatWidget = dynamic(
  () => import("@/components/ai/ChatWidget").then((mod) => mod.ChatWidget),
  { ssr: false },
);

export function ChatLauncherButton() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handleOpen() {
      setOpen(true);
      trackAiAssistantOpen();
    }
    window.addEventListener(AI_ASSISTANT_OPEN_EVENT, handleOpen);
    return () => window.removeEventListener(AI_ASSISTANT_OPEN_EVENT, handleOpen);
  }, []);

  if (open) {
    return <ChatWidget onClose={() => setOpen(false)} />;
  }

  return (
    <button
      aria-label="Open AI repair assistant"
      onClick={() => {
        setOpen(true);
        trackAiAssistantOpen();
      }}
      className="focus-ring fixed bottom-4 left-4 z-50 rounded-full bg-brand-blue p-4 text-white shadow-soft"
    >
      <Sparkles />
    </button>
  );
}
