import { z } from "zod";

export const contactFormSchema = z.object({
  firstName: z.string().min(1, "Required").max(80, "Too long"),
  lastName: z.string().min(1, "Required").max(80, "Too long"),
  email: z.string().min(1, "Required").max(254, "Too long").email("Enter a valid email"),
  company: z.string().min(1, "Required").max(120, "Too long"),
  jobTitle: z.string().min(1, "Required").max(120, "Too long"),
  phone: z.string().max(40, "Too long").optional().or(z.literal("")),
  message: z.string().min(10, "Tell us a bit more — at least a sentence").max(2000, "Too long"),
  consent: z.literal(true, { error: "You must agree to be contacted." }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
