"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/Button";
import { Field, Input, Textarea, Checkbox } from "@/components/ui/Field";
import { cockpitFormSchema, type CockpitFormValues } from "@/lib/cockpit-form-schema";

interface ApiErrorDetail {
  path: string;
  message: string;
}

interface ApiErrorResponse {
  ok: false;
  error: "validation" | "email" | "crm" | "auth";
  message?: string;
  details?: ApiErrorDetail[];
}

interface ApiSuccessResponse {
  ok: true;
  created: boolean;
  next: string;
}

type ApiResponse = ApiErrorResponse | ApiSuccessResponse;

export function AccessForm() {
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<CockpitFormValues>({
    resolver: zodResolver(cockpitFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      jobTitle: "",
      website: "",
      useCase: "",
      phone: "",
    },
  });

  async function onSubmit(values: CockpitFormValues) {
    setServerError(null);
    const utm: Record<string, string> = {};
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      for (const k of ["source", "medium", "campaign", "content", "term"] as const) {
        const v = params.get(`utm_${k}`);
        if (v) utm[k] = v;
      }
    }
    const res = await fetch("/api/lead/cockpit", {
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
      if (json.error === "email") {
        setError("email", { type: "server", message: json.message });
      } else if (json.error === "validation" && json.details) {
        for (const d of json.details) {
          setError(d.path as keyof CockpitFormValues, { type: "server", message: d.message });
        }
      } else {
        setServerError(json.message ?? "Something went wrong. Please try again.");
      }
      return;
    }
    router.push(json.next);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="First name" htmlFor="firstName" required error={errors.firstName?.message}>
          <Input
            id="firstName"
            autoComplete="given-name"
            aria-invalid={errors.firstName ? "true" : undefined}
            {...register("firstName")}
          />
        </Field>
        <Field label="Last name" htmlFor="lastName" required error={errors.lastName?.message}>
          <Input
            id="lastName"
            autoComplete="family-name"
            aria-invalid={errors.lastName ? "true" : undefined}
            {...register("lastName")}
          />
        </Field>
      </div>

      <Field
        label="Company email"
        htmlFor="email"
        required
        error={errors.email?.message}
        hint="Use your work email — personal mailboxes (gmail, yahoo, outlook…) won't get through."
      >
        <Input
          id="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          placeholder="you@yourcompany.com"
          aria-invalid={errors.email ? "true" : undefined}
          {...register("email")}
        />
      </Field>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Company" htmlFor="company" required error={errors.company?.message}>
          <Input
            id="company"
            autoComplete="organization"
            aria-invalid={errors.company ? "true" : undefined}
            {...register("company")}
          />
        </Field>
        <Field label="Job title" htmlFor="jobTitle" required error={errors.jobTitle?.message}>
          <Input
            id="jobTitle"
            autoComplete="organization-title"
            aria-invalid={errors.jobTitle ? "true" : undefined}
            {...register("jobTitle")}
          />
        </Field>
      </div>

      <Field
        label="Company website"
        htmlFor="website"
        required
        error={errors.website?.message}
        hint="Domain or full URL. We use this to verify legitimacy."
      >
        <Input
          id="website"
          type="url"
          autoComplete="url"
          placeholder="yourcompany.com"
          aria-invalid={errors.website ? "true" : undefined}
          {...register("website")}
        />
      </Field>

      <Field
        label="What are you hoping to use the cockpit for?"
        htmlFor="useCase"
        required
        error={errors.useCase?.message}
        hint="A sentence or two about your SAP environment, current pain, or what you'd like to evaluate."
      >
        <Textarea
          id="useCase"
          rows={4}
          aria-invalid={errors.useCase ? "true" : undefined}
          {...register("useCase")}
        />
      </Field>

      <Field label="Phone" htmlFor="phone" error={errors.phone?.message}>
        <Input
          id="phone"
          type="tel"
          autoComplete="tel"
          placeholder="+1 555 555 5555"
          aria-invalid={errors.phone ? "true" : undefined}
          {...register("phone")}
        />
      </Field>

      <Checkbox
        id="consent"
        label={
          <>
            I agree that Sierra Digital may contact me about the AI Cockpit demo and related
            services. I can unsubscribe at any time. See our{" "}
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

      <div className="mt-2 flex flex-wrap items-center gap-4">
        <Button type="submit" variant="primary" size="lg" disabled={isSubmitting}>
          {isSubmitting ? "Submitting…" : "Request access"}
        </Button>
        <p className="text-muted text-xs">
          Already requested access?{" "}
          <Link
            href="/sign-in"
            className="text-primary-700 hover:text-accent-700 font-medium underline underline-offset-4"
          >
            Sign in
          </Link>
        </p>
      </div>
    </form>
  );
}
