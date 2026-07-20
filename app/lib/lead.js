export const LEAD_WEBHOOK_URL =
  process.env.LEAD_WEBHOOK_URL ||
  "https://api.apresenta.me/webhook/integration/6050/1801c1333d45247c6fd869469adcfe67";

export const RENDA_FAMILIAR_OPTIONS = [
  { value: "ate-3000", label: "Até R$ 3.000" },
  { value: "3001-5000", label: "De R$ 3.001 a R$ 5.000" },
  { value: "5001-8000", label: "De R$ 5.001 a R$ 8.000" },
  { value: "8001-12000", label: "De R$ 8.001 a R$ 12.000" },
  { value: "12001-20000", label: "De R$ 12.001 a R$ 20.000" },
  { value: "acima-20000", label: "Acima de R$ 20.000" },
];

export const TERRENO_OPTIONS = [
  {
    value: "sim",
    label: "Sim, já tenho meu terreno e quero apenas construir",
  },
  {
    value: "nao",
    label: "Não, quero a solução completa: terreno + construção",
  },
];

export function getRendaLabel(value) {
  return RENDA_FAMILIAR_OPTIONS.find((option) => option.value === value)?.label || value;
}

export function getTerrenoLabel(value) {
  return TERRENO_OPTIONS.find((option) => option.value === value)?.label || value;
}

export function getUtmParams(searchParams) {
  const utmKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];
  return utmKeys.reduce((params, key) => {
    const value = searchParams.get(key);
    if (value) params[key] = value;
    return params;
  }, {});
}

export function buildLeadPayload(fields, extras = {}) {
  const rendaFamiliar = fields.renda_familiar;
  const terreno = fields.terreno;

  return {
    nome: String(fields.nome || "").trim(),
    email: String(fields.email || "").trim(),
    telefone: String(fields.telefone || "").trim(),
    renda_familiar: rendaFamiliar,
    renda_familiar_label: getRendaLabel(rendaFamiliar),
    terreno,
    terreno_label: getTerrenoLabel(terreno),
    origem: "lp-sua-casa-na-planta",
    pagina: "/",
    submitted_at: new Date().toISOString(),
    ...extras,
  };
}

export function buildLeadPayloadFromFormData(formData, extras = {}) {
  return buildLeadPayload(
    {
      nome: formData.get("nome"),
      email: formData.get("email"),
      telefone: formData.get("telefone"),
      renda_familiar: formData.get("renda_familiar"),
      terreno: formData.get("terreno"),
    },
    extras,
  );
}
