"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "sierra-cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem(STORAGE_KEY, "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Cookie preferences"
      className="fixed bottom-6 left-1/2 z-50 w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 rounded-2xl border border-line bg-canvas p-6 shadow-lg sm:bottom-8 sm:left-auto sm:right-8 sm:translate-x-0"
    >
      <h2 className="text-ink mb-2 text-base font-semibold tracking-tight">
        Do you accept optional cookies?
      </h2>
      <p className="text-ink-2 mb-3 text-sm leading-relaxed">
        These help us understand how visitors use our site, improve our product,
        and reach relevant audiences. We won&apos;t use them unless you&apos;d
        like us to.
      </p>
      <a
        href="/privacy-policy/"
        className="text-ink mb-5 inline-block text-sm underline underline-offset-4 hover:text-accent-700"
      >
        Learn more
      </a>
      <div className="flex gap-3">
        <button
          onClick={decline}
          className="flex-1 rounded-full border border-line-strong bg-canvas px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-ink"
        >
          Decline
        </button>
        <button
          onClick={accept}
          className="flex-1 rounded-full bg-ink px-4 py-2 text-sm font-medium text-canvas transition-colors hover:bg-ink-2"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
