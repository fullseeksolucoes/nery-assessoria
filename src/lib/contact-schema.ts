import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Informe seu nome"),
  email: z.email("Email inválido"),
  company: z.string().min(2, "Informe o nome da empresa"),
  phone: z.string().min(8, "Informe um telefone válido"),
  message: z.string().optional(),
  honeypot: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
