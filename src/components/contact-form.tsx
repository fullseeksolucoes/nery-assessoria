"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactFormData, contactSchema } from "@/lib/contact-schema";
import { useState } from "react";
import { Checkbox } from "./checkbox";
import { phoneMask } from "@/lib/phone-mask";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function ContactForm() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "loading">("idle");
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: ContactFormData) {
    if (!privacyAccepted) {
      toast.error("Você precisa aceitar a Política de Privacidade");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error();

      toast.success("Mensagem enviada com sucesso");

      reset();
      setPrivacyAccepted(false);
      setStatus("idle");

      setTimeout(() => {
        router.push("/obrigado");
      }, 1200);
    } catch {
      toast.error("Erro ao enviar. Tente novamente");
      setStatus("idle");
    }
  }

  const inputClasses =
    "block w-full rounded-lg border border-gray-200 bg-muted px-4 py-3 text-sm text-foreground placeholder:text-gray-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-colors";

  return (
    <div className="relative">
      {/* Blob decorativo */}
      <div className="absolute -top-10 -right-10 -z-10 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />

      <div className="rounded-2xl border border-foreground/5 bg-white p-6 shadow-xl lg:p-10">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Honeypot */}
          <input type="text" className="hidden" {...register("honeypot")} />

          {/* Nome + Email */}
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block space-y-1">
              <span className="text-sm font-semibold text-foreground">
                Nome completo
              </span>
              <input
                {...register("name")}
                placeholder="Seu nome"
                className={inputClasses}
              />
              <p className="text-xs text-red-500 min-h-4">
                {errors.name?.message ?? "\u00A0"}
              </p>
            </label>

            <label className="block space-y-1">
              <span className="text-sm font-semibold text-foreground">
                Email profissional
              </span>
              <input
                {...register("email")}
                placeholder="email@empresa.com"
                type="email"
                className={inputClasses}
              />
              <p className="text-xs text-red-500 min-h-4">
                {errors.email?.message ?? "\u00A0"}
              </p>
            </label>
          </div>

          {/* Empresa */}
          <label className="block space-y-1">
            <span className="text-sm font-semibold text-foreground">
              Empresa / Organização
            </span>
            <input
              {...register("company")}
              placeholder="Nome da sua empresa"
              className={inputClasses}
            />
            <p className="text-xs text-red-500 min-h-4">
              {errors.company?.message ?? "\u00A0"}
            </p>
          </label>

          {/* Telefone */}
          <label className="block space-y-1">
            <span className="text-sm font-semibold text-foreground">
              Telefone / WhatsApp
            </span>
            <input
              {...register("phone", {
                onChange: (e) => {
                  e.target.value = phoneMask(e.target.value);
                },
              })}
              placeholder="(31) 99999-9999"
              className={inputClasses}
            />
            <p className="text-xs text-red-500 min-h-4">
              {errors.phone?.message ?? "\u00A0"}
            </p>
          </label>

          {/* Mensagem */}
          <label className="block space-y-1">
            <span className="text-sm font-semibold text-foreground">
              Como podemos ajudar?
            </span>
            <textarea
              {...register("message")}
              rows={4}
              placeholder="Conte-nos sobre seus objetivos e desafios..."
              className={`${inputClasses} resize-none`}
            />
          </label>

          {/* Checkbox de privacidade */}
          <div className="flex items-start gap-3">
            <Checkbox
              id="privacy"
              checked={privacyAccepted}
              onChange={setPrivacyAccepted}
              label={
                <>
                  Ao enviar, você concorda com nossa{" "}
                  <a
                    href="/politica-de-privacidade"
                    className="text-primary font-semibold hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Política de Privacidade
                  </a>
                  .
                </>
              }
            />
          </div>

          {/* Botão */}
          <button
            type="submit"
            disabled={status === "loading" || !privacyAccepted}
            className="group flex w-full items-center justify-center gap-2 rounded-lg bg-accent py-4 text-sm font-bold text-white shadow-lg shadow-accent/25 transition-all hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
          >
            {status === "loading" ? "Enviando..." : "Enviar"}
          </button>

          <p className="text-center text-xs text-foreground/40 mt-4">
            Entraremos em contato em até 24 horas.
          </p>
        </form>
      </div>
    </div>
  );
}
