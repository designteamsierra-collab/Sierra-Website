import { z } from "zod";

export const cockpitFormSchema = z.object({
  firstName: z.string().min(1, "Required").max(80, "Too long"),
  lastName: z.string().min(1, "Required").max(80, "Too long"),
  email: z.string().min(1, "Required").max(254, "Too long").email("Enter a valid email"),
  company: z.string().min(1, "Required").max(120, "Too long"),
  jobTitle: z.string().min(1, "Required").max(120, "Too long"),
  website: z
    .string()
    .min(1, "Required")
    .max(254, "Too long")
    .refine(
      (v) => /^[a-z0-9.-]+\.[a-z]{2,}$/i.test(v) || /^https?:\/\//.test(v),
      "Enter a valid URL or domain",
    ),
  useCase: z.string().min(20, "Tell us a bit more — at least a sentence").max(2000, "Too long"),
  phone: z.string().max(40, "Too long").optional().or(z.literal("")),
  consent: z.literal(true, {
    error: "You must agree to be contacted.",
  }),
});

export type CockpitFormValues = z.infer<typeof cockpitFormSchema>;
