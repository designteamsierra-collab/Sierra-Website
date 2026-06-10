/**
 * Minimal className helper. Joins truthy values with single spaces.
 * No need for the full `clsx` package — we don't use object/array forms.
 */
export function clsx(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}
