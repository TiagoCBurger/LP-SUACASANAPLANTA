"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SafeArrowRight } from "iconoir-react";
import { buildLeadPayloadFromFormData, getUtmParams, RENDA_FAMILIAR_OPTIONS, TERRENO_OPTIONS } from "../lib/lead";
import { pushLeadSubmitEvent } from "../lib/gtm";

export default function LeadForm() {
  const router = useRouter();
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const utmParams = getUtmParams(new URLSearchParams(window.location.search));
    const payload = buildLeadPayloadFromFormData(formData, utmParams);

    if (!payload.nome || !payload.email || !payload.telefone || !payload.renda_familiar || !payload.terreno) {
      setStatus("error");
      setErrorMessage("Preencha todos os campos obrigatórios.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Não foi possível enviar sua solicitação.");
      }

      pushLeadSubmitEvent(result.lead || payload);
      router.push("/obrigado");
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Não foi possível enviar sua solicitação.");
    }
  }

  const isSubmitting = status === "submitting";

  return (
    <form
      className="lead-form hero-lead-form"
      id="formulario"
      aria-labelledby="form-title"
      onSubmit={handleSubmit}
      noValidate
    >
      <h2 id="form-title">Solicite sua simulação gratuita</h2>
      <p>
        Preencha seus dados para receber uma orientação sobre financiamento, entrada e possibilidades para construir sua
        casa.
      </p>
      <label>
        <span>Nome</span>
        <input type="text" name="nome" placeholder="Seu nome" required autoComplete="name" />
      </label>
      <label>
        <span>E-mail</span>
        <input type="email" name="email" placeholder="voce@email.com" required autoComplete="email" />
      </label>
      <label>
        <span>Telefone/WhatsApp</span>
        <input type="tel" name="telefone" placeholder="(54) 99999-9999" required autoComplete="tel" />
      </label>
      <label>
        <span>Renda familiar</span>
        <select name="renda_familiar" defaultValue="" required>
          <option value="" disabled>
            Selecione a faixa de renda
          </option>
          {RENDA_FAMILIAR_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
      <fieldset>
        <legend>Você já possui terreno?</legend>
        {TERRENO_OPTIONS.map((option) => (
          <label className="radio-row" key={option.value}>
            <input type="radio" name="terreno" value={option.value} required />
            <span>{option.label}</span>
          </label>
        ))}
      </fieldset>
      <button className="button hero-submit full" type="submit" disabled={isSubmitting} aria-busy={isSubmitting}>
        {isSubmitting ? "Enviando..." : "Quero minha simulação gratuita"}
      </button>
      {errorMessage ? (
        <p className="form-feedback error" role="alert">
          {errorMessage}
        </p>
      ) : null}
      <p className="microcopy">
        <SafeArrowRight className="icon icon-lock" aria-hidden="true" />
        Seu cadastro será enviado para nossa equipe de atendimento.
      </p>
    </form>
  );
}
