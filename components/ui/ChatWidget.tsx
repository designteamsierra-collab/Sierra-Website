"use client";

import { useEffect, useRef, useState } from "react";
import { clsx } from "@/lib/clsx";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const SUGGESTIONS = [
  "How fast can Sierra migrate ECC to S/4HANA?",
  "What is RISE with SAP?",
  "How does Sierra's AI reduce risk?",
  "Can I see a live demo?",
];

const GREETING: Message = {
  role: "assistant",
  content:
    "Hi! I'm Sierra's AI assistant. Ask me about SAP RISE migration, timelines, or how to access our AI Cockpit demo.",
};

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [input, setInput] = useState("");
  const [streaming, setStreaming] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  async function send(text: string) {
    if (!text.trim() || streaming) return;

    const userMsg: Message = { role: "user", content: text.trim() };
    const history = [...messages, userMsg];
    setMessages(history);
    setInput("");
    setStreaming(true);

    // Placeholder for the streaming assistant reply
    setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

    const controller = new AbortController();
    abortRef.current = controller;

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: history.map(({ role, content }) => ({ role, content })),
        }),
        signal: controller.signal,
      });

      if (!res.ok || !res.body) {
        const json = (await res.json().catch(() => ({}))) as { error?: string };
        setMessages((prev) => [
          ...prev.slice(0, -1),
          { role: "assistant", content: json.error ?? "Something went wrong. Please try again." },
        ]);
        return;
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buf = "";
      let accumulated = "";

      outer: while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        buf += decoder.decode(value, { stream: true });
        const lines = buf.split("\n");
        buf = lines.pop() ?? "";

        for (const line of lines) {
          if (!line.startsWith("data: ")) continue;
          const data = line.slice(6).trim();
          if (data === "[DONE]") break outer;
          try {
            const chunk = JSON.parse(data) as {
              choices?: Array<{ delta?: { content?: string } }>;
            };
            const token = chunk.choices?.[0]?.delta?.content ?? "";
            if (token) {
              const next = accumulated + token;
              accumulated = next;
              setMessages((prev) => [
                ...prev.slice(0, -1),
                { role: "assistant", content: next },
              ]);
            }
          } catch {
            // skip malformed SSE chunks
          }
        }
      }

      // Flush any trailing content
      if (!accumulated) {
        setMessages((prev) => [
          ...prev.slice(0, -1),
          { role: "assistant", content: "No response received. Please try again." },
        ]);
      }
    } catch (err) {
      if ((err as Error)?.name !== "AbortError") {
        setMessages((prev) => [
          ...prev.slice(0, -1),
          { role: "assistant", content: "Connection interrupted. Please try again." },
        ]);
      }
    } finally {
      setStreaming(false);
      abortRef.current = null;
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    void send(input);
  }

  const showSuggestions = messages.length === 1;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Chat panel */}
      {open && (
        <div
          className="border-line bg-canvas flex h-[520px] w-[360px] flex-col overflow-hidden rounded-2xl border shadow-2xl"
          role="dialog"
          aria-label="Sierra AI Chat"
        >
          {/* Header */}
          <div className="bg-primary-800 flex flex-shrink-0 items-center gap-3 px-4 py-3">
            <div className="bg-primary-600 grid h-8 w-8 flex-shrink-0 place-items-center rounded-full">
              <span className="text-canvas font-display text-sm font-bold">S</span>
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-canvas text-sm font-semibold">Sierra AI</p>
              <p className="text-primary-200 truncate text-xs">SAP RISE migration expert</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="text-primary-200 hover:text-canvas flex-shrink-0 transition-colors"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Message list */}
          <div className="flex flex-1 flex-col gap-3 overflow-y-auto p-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={clsx(
                  "max-w-[85%] rounded-xl px-3.5 py-2.5 text-sm leading-relaxed",
                  m.role === "user"
                    ? "bg-primary-700 text-white self-end"
                    : "bg-canvas-2 text-ink self-start",
                )}
              >
                {m.content || (
                  <span className="inline-flex items-center gap-1">
                    <span className="bg-muted-faint inline-block h-1.5 w-1.5 animate-bounce rounded-full [animation-delay:0ms]" />
                    <span className="bg-muted-faint inline-block h-1.5 w-1.5 animate-bounce rounded-full [animation-delay:150ms]" />
                    <span className="bg-muted-faint inline-block h-1.5 w-1.5 animate-bounce rounded-full [animation-delay:300ms]" />
                  </span>
                )}
              </div>
            ))}

            {/* Quick-start suggestion chips */}
            {showSuggestions && (
              <div className="mt-1 flex flex-wrap gap-2">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => void send(s)}
                    className="border-line text-ink-2 hover:border-primary-400 hover:text-primary-700 rounded-full border bg-white px-3 py-1 text-xs transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Input bar */}
          <form
            onSubmit={handleSubmit}
            className="border-line flex flex-shrink-0 items-center gap-2 border-t px-3 py-3"
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about SAP RISE migration…"
              disabled={streaming}
              className="text-ink placeholder:text-muted-faint ring-line focus:ring-primary-400 min-w-0 flex-1 rounded-lg bg-white px-3 py-2 text-sm outline-none ring-1 transition-shadow disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={!input.trim() || streaming}
              aria-label="Send message"
              className="bg-primary-700 hover:bg-primary-800 grid h-9 w-9 flex-shrink-0 place-items-center rounded-lg text-white transition-colors disabled:pointer-events-none disabled:opacity-40"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
            </button>
          </form>
        </div>
      )}

      {/* Floating toggle button */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close Sierra AI chat" : "Open Sierra AI chat"}
        aria-expanded={open}
        className="bg-primary-700 hover:bg-primary-800 grid h-14 w-14 place-items-center rounded-full text-white shadow-xl transition-all hover:scale-105 active:scale-95"
      >
        {open ? (
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        ) : (
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </button>
    </div>
  );
}
