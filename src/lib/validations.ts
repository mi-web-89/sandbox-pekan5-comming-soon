import { z } from "zod";

// mendefinisikan skema
export const waitlistSchema = z.object({
  email: z
    .string() // harus string
    .min(1, { message: "Email tidak boleh kosong" }) // aturan 1: email tidak kosong
    .email({ message: "Format email tidak valid" }), // aturan 2: format email
  terms: z.literal(true, { message: "syarat dan ketentuan harus dicentang" }),
});

// mendapatkan typescript dari schema
export type WaitlistFormValues = z.infer<typeof waitlistSchema>;
