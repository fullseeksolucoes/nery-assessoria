"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactFormData, contactSchema } from "@/lib/contact-schema";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: ContactFormData) {
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error();

      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-lg">
      {/* Honeypot */}
      <input type="text" className="hidden" {...register("honeypot")} />

      <div>
        <input
          {...register("name")}
          placeholder="Seu nome"
          className="w-full rounded-lg border px-4 py-3"
        />
        {errors.name && (
          <p className="text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      <div>
        <input
          {...register("email")}
          placeholder="Seu email"
          className="w-full rounded-lg border px-4 py-3"
        />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div>
        <input
          {...register("company")}
          placeholder="Nome da empresa"
          className="w-full rounded-lg border px-4 py-3"
        />
        {errors.company && (
          <p className="text-sm text-red-500">{errors.company.message}</p>
        )}
      </div>

      <div>
        <input
          {...register("phone")}
          placeholder="Telefone / WhatsApp"
          className="w-full rounded-lg border px-4 py-3"
        />
        {errors.phone && (
          <p className="text-sm text-red-500">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <textarea
          {...register("message")}
          placeholder="Mensagem (opcional)"
          rows={4}
          className="w-full rounded-lg border px-4 py-3"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-lg bg-primary text-white py-3 font-medium disabled:opacity-60"
      >
        {status === "loading" ? "Enviando..." : "Enviar mensagem"}
      </button>

      {status === "success" && (
        <p className="text-green-600 text-sm">Mensagem enviada com sucesso.</p>
      )}

      {status === "error" && (
        <p className="text-red-600 text-sm">Erro ao enviar. Tente novamente.</p>
      )}
    </form>
  );
}
