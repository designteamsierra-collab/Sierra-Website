import { clsx } from "@/lib/clsx";
import * as React from "react";

interface FieldProps {
  label: string;
  htmlFor: string;
  error?: string;
  hint?: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}

export function Field({ label, htmlFor, error, hint, required, className, children }: FieldProps) {
  return (
    <div className={clsx("flex flex-col gap-1.5", className)}>
      <label htmlFor={htmlFor} className="text-ink flex items-center gap-1 text-sm font-medium">
        <span>{label}</span>
        {required ? <span className="text-accent-700">*</span> : null}
        {!required ? <span className="text-muted text-xs font-normal">(optional)</span> : null}
      </label>
      {children}
      {error ? (
        <p className="text-error text-xs" role="alert">
          {error}
        </p>
      ) : hint ? (
        <p className="text-muted text-xs">{hint}</p>
      ) : null}
    </div>
  );
}

const inputBase =
  "w-full rounded-lg border border-line bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-muted-faint focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600/30 focus-visible:border-primary-600 transition-colors disabled:opacity-50 aria-[invalid=true]:border-error aria-[invalid=true]:ring-error/20";

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(function Input({ className, ...rest }, ref) {
  return <input ref={ref} className={clsx(inputBase, className)} {...rest} />;
});

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(function Textarea({ className, rows = 4, ...rest }, ref) {
  return (
    <textarea ref={ref} rows={rows} className={clsx(inputBase, "resize-y", className)} {...rest} />
  );
});

interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: React.ReactNode;
  error?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  { label, error, className, ...rest },
  ref,
) {
  return (
    <div className={clsx("flex flex-col gap-1.5", className)}>
      <label className="flex cursor-pointer items-start gap-3 text-sm">
        <input
          ref={ref}
          type="checkbox"
          className={clsx(
            "border-line text-primary-700 focus-visible:ring-primary-600/30 mt-0.5 h-4 w-4 rounded border-2 transition-colors focus-visible:ring-2 focus-visible:outline-none",
            "aria-[invalid=true]:border-error",
          )}
          aria-invalid={error ? "true" : undefined}
          {...rest}
        />
        <span className="text-ink-2 leading-snug">{label}</span>
      </label>
      {error ? (
        <p className="text-error pl-7 text-xs" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
});
