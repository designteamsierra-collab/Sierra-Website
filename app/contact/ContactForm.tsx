"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Field, Input, Textarea, Checkbox } from "@/components/ui/Field";
import { contactFormSchema, type ContactFormValues } from "@/lib/contact-form-schema";

interface ApiErrorDetail {
  path: string;
  message: string;
}
interface ApiResponse {
  ok: boolean;
  error?: string;
  message?: string;
  details?: ApiErrorDetail[];
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      jobTitle: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    setServerError(null);
    const utm: Record<string, string> = {};
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      for (const k of ["source", "medium", "campaign", "content", "term"] as const) {
        const v = params.get(`utm_${k}`);
        if (v) utm[k] = v;
      }
    }
    const res = await fetch("/api/lead/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...values,
        pageUrl: typeof window !== "undefined" ? window.location.href : undefined,
        utm: Object.keys(utm).length ? utm : undefined,
      }),
    });
    const json = (await res.json()) as ApiResponse;
    if (!json.ok) {
      if (json.error === "validation" && json.details) {
        for (const d of json.details) {
          setError(d.path as keyof ContactFormValues, { type: "server", message: d.message });
        }
      } else {
        setServerError(json.message ?? "Something went wrong. Please try again.");
      }
      return;
    }
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border-line rounded-2xl border bg-white p-8 text-center shadow-sm">
        <div className="bg-primary-50 text-primary-700 mx-auto mb-4 grid h-14 w-14 place-items-center rounded-2xl">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <h2 className="display-md text-ink">Message received</h2>
        <p className="text-ink-2 mx-auto mt-3 max-w-sm text-base">
          Thanks for reaching out. A member of our team will be in touch within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="First name" htmlFor="firstName" required error={errors.firstName?.message}>
          <Input id="firstName" autoComplete="given-name" {...register("firstName")} />
        </Field>
        <Field label="Last name" htmlFor="lastName" required error={errors.lastName?.message}>
          <Input id="lastName" autoComplete="family-name" {...register("lastName")} />
        </Field>
      </div>

      <Field label="Work email" htmlFor="email" required error={errors.email?.message}>
        <Input
          id="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          placeholder="you@yourcompany.com"
          {...register("email")}
        />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Company" htmlFor="company" required error={errors.company?.message}>
          <Input id="company" autoComplete="organization" {...register("company")} />
        </Field>
        <Field label="Job title" htmlFor="jobTitle" required error={errors.jobTitle?.message}>
          <Input id="jobTitle" autoComplete="organization-title" {...register("jobTitle")} />
        </Field>
      </div>

      <Field label="Phone" htmlFor="phone" error={errors.phone?.message}>
        <Input
          id="phone"
          type="tel"
          autoComplete="tel"
          placeholder="+1 555 555 5555"
          {...register("phone")}
        />
      </Field>

      <Field
        label="How can we help?"
        htmlFor="message"
        required
        error={errors.message?.message}
        hint="Briefly describe your SAP environment, project, or question."
      >
        <Textarea id="message" rows={5} {...register("message")} />
      </Field>

      <Checkbox
        id="consent"
        label={
          <>
            I agree that Sierra Digital may contact me about my inquiry and related services. See
            our{" "}
            <Link
              href="/privacy-policy/"
              className="text-primary-700 hover:text-accent-700 underline underline-offset-4"
            >
              privacy policy
            </Link>
            .
          </>
        }
        error={errors.consent?.message}
        {...register("consent")}
      />

      {serverError ? (
        <div className="border-error/30 bg-error/5 text-error rounded-lg border p-3 text-sm">
          {serverError}
        </div>
      ) : null}

      <Button type="submit" variant="primary" size="lg" disabled={isSubmitting}>
        {isSubmitting ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
