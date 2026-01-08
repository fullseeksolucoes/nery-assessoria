"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactFormData, contactSchema } from "@/lib/contact-schema";
import { useId, useState } from "react";
import { Checkbox } from "./checkbox";
import { phoneMask } from "@/lib/phone-mask";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function ContactForm() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "loading">("idle");
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const formId = useId();

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

  const errorInputClasses =
    "block w-full rounded-lg border border-red-300 bg-red-50/50 px-4 py-3 text-sm text-foreground placeholder:text-gray-400 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-200 transition-colors";

  return (
    <div className="relative">
      {/* Blob decorativo */}
      <div
        className="absolute -top-10 -right-10 -z-10 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="rounded-2xl border border-foreground/5 bg-white p-6 shadow-xl lg:p-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
          aria-label="Formulário de contato"
          noValidate
        >
          {/* Honeypot - campo invisível para bots */}
          <input
            type="text"
            className="hidden"
            {...register("honeypot")}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          {/* Nome + Email */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1">
              <label
                htmlFor={`${formId}-name`}
                className="text-sm font-semibold text-foreground"
              >
                Nome completo <span className="text-xs text-red-500">*</span>
              </label>
              <input
                id={`${formId}-name`}
                {...register("name")}
                placeholder="Seu nome"
                className={errors.name ? errorInputClasses : inputClasses}
                aria-required="true"
                aria-invalid={errors.name ? "true" : "false"}
                aria-describedby={
                  errors.name ? `${formId}-name-error` : undefined
                }
                autoComplete="name"
              />
              <p
                id={`${formId}-name-error`}
                className="text-xs text-red-500 min-h-4"
                role="alert"
                aria-live="polite"
              >
                {errors.name?.message ?? "\u00A0"}
              </p>
            </div>

            <div className="space-y-1">
              <label
                htmlFor={`${formId}-email`}
                className="text-sm font-semibold text-foreground"
              >
                Email profissional{" "}
                <span className="text-xs text-red-500">*</span>
              </label>
              <input
                id={`${formId}-email`}
                {...register("email")}
                placeholder="email@empresa.com"
                type="email"
                className={errors.email ? errorInputClasses : inputClasses}
                aria-required="true"
                aria-invalid={errors.email ? "true" : "false"}
                aria-describedby={
                  errors.email ? `${formId}-email-error` : undefined
                }
                autoComplete="email"
              />
              <p
                id={`${formId}-email-error`}
                className="text-xs text-red-500 min-h-4"
                role="alert"
                aria-live="polite"
              >
                {errors.email?.message ?? "\u00A0"}
              </p>
            </div>
          </div>

          {/* Empresa */}
          <div className="space-y-1">
            <label
              htmlFor={`${formId}-company`}
              className="text-sm font-semibold text-foreground"
            >
              Empresa / Organização{" "}
              <span className="text-xs text-red-500">*</span>
            </label>
            <input
              id={`${formId}-company`}
              {...register("company")}
              placeholder="Nome da sua empresa"
              className={errors.company ? errorInputClasses : inputClasses}
              aria-invalid={errors.company ? "true" : "false"}
              aria-describedby={
                errors.company ? `${formId}-company-error` : undefined
              }
              autoComplete="organization"
            />
            <p
              id={`${formId}-company-error`}
              className="text-xs text-red-500 min-h-4"
              role="alert"
              aria-live="polite"
            >
              {errors.company?.message ?? "\u00A0"}
            </p>
          </div>

          {/* Telefone */}
          <div className="space-y-1">
            <label
              htmlFor={`${formId}-phone`}
              className="text-sm font-semibold text-foreground"
            >
              Telefone / WhatsApp{" "}
              <span className="text-xs text-red-500">*</span>
            </label>
            <input
              id={`${formId}-phone`}
              {...register("phone", {
                onChange: (e) => {
                  e.target.value = phoneMask(e.target.value);
                },
              })}
              placeholder="(31) 99999-9999"
              className={errors.phone ? errorInputClasses : inputClasses}
              aria-required="true"
              aria-invalid={errors.phone ? "true" : "false"}
              aria-describedby={
                errors.phone ? `${formId}-phone-error` : undefined
              }
              autoComplete="tel"
              inputMode="tel"
            />
            <p
              id={`${formId}-phone-error`}
              className="text-xs text-red-500 min-h-4"
              role="alert"
              aria-live="polite"
            >
              {errors.phone?.message ?? "\u00A0"}
            </p>
          </div>

          {/* Mensagem */}
          <div className="space-y-1">
            <label
              htmlFor={`${formId}-message`}
              className="text-sm font-semibold text-foreground"
            >
              Como podemos ajudar?
            </label>
            <textarea
              id={`${formId}-message`}
              {...register("message")}
              rows={4}
              placeholder="Conte-nos sobre seus objetivos e desafios..."
              className={`${inputClasses} resize-none`}
            />
          </div>

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
                    className="text-primary font-semibold hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-sm"
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
            aria-disabled={status === "loading" || !privacyAccepted}
            className="group flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-4 text-sm font-bold text-white shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary disabled:opacity-80 disabled:cursor-not-allowed disabled:hover:translate-y-0"
          >
            {status === "loading" ? (
              <>
                <span
                  className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"
                  aria-hidden="true"
                />
                <span>Enviando...</span>
              </>
            ) : (
              "Enviar mensagem"
            )}
          </button>

          <p
            className="text-center text-xs text-foreground/40 mt-4"
            aria-live="polite"
          >
            Entraremos em contato em até 24 horas.
          </p>
        </form>
      </div>
    </div>
  );
}
