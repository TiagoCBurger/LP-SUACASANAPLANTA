const WHATSAPP_NUMBER = "555499637578";

export function whatsappUrl(message) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_LINKS = {
  default: whatsappUrl(),
  simulacao: whatsappUrl("Quero minha simulação gratuita"),
  terrenoConstrucao: whatsappUrl("Quero falar sobre terreno + construção"),
  apenasConstrucao: whatsappUrl("Já tenho meu terreno e quero apenas construir"),
};
