"use client";

import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = {
      firstName: (form.elements.namedItem("fullName") as HTMLInputElement).value,
      lastName: "",
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      jobTitle: (form.elements.namedItem("phone") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      consent: true,
      pageUrl: typeof window !== "undefined" ? window.location.href : undefined,
    };
    try {
      await fetch("/api/lead/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } catch {}
    setSubmitting(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col gap-4 py-8 text-center">
        <p className="text-primary-700 text-2xl font-semibold">Thank you!</p>
        <p className="text-ink-2 text-sm leading-relaxed">
          We&apos;ve received your message and will be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {[
        { label: "Full Name", name: "fullName", type: "text", required: true },
        { label: "Company Name", name: "company", type: "text", required: true },
        { label: "Company Email", name: "email", type: "email", required: true },
        { label: "Phone Number", name: "phone", type: "tel", required: true },
      ].map((f) => (
        <div key={f.name} className="flex flex-col gap-1.5">
          <label htmlFor={f.name} className="text-ink text-sm font-medium">
            {f.label} {f.required && <span className="text-accent-500">*</span>}
          </label>
          <input
            id={f.name}
            name={f.name}
            type={f.type}
            required={f.required}
            placeholder={f.label}
            className="rounded-xl border border-primary-200 bg-white px-4 py-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-primary-400 transition"
          />
        </div>
      ))}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-ink text-sm font-medium">Message</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Your message"
          className="rounded-xl border border-primary-200 bg-white px-4 py-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-primary-400 transition resize-none"
        />
      </div>
      <p className="text-ink-2 text-xs leading-relaxed">
        By submitting this form, you agree to{" "}
        <a href="/terms-of-service/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">
          Sierra Digital&apos;s Terms of Use
        </a>{" "}
        &amp;{" "}
        <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">
          Privacy Policy
        </a>
        .
      </p>
      <button
        type="submit"
        disabled={submitting}
        className="inline-flex items-center justify-center rounded-xl bg-primary-500 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-primary-600 transition-colors disabled:opacity-60"
      >
        {submitting ? "Sending…" : "Submit"}
      </button>
    </form>
  );
}
