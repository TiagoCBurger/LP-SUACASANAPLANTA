export const GTM_ID = "GTM-K4ZKFMZL";

export function pushDataLayerEvent(event, payload = {}) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event,
    ...payload,
  });
}

export function pushLeadSubmitEvent(lead) {
  pushDataLayerEvent("lead_submit", {
    form_name: "simulacao_gratuita",
    terreno: lead.terreno,
    renda_familiar: lead.renda_familiar,
    utm_source: lead.utm_source,
    utm_medium: lead.utm_medium,
    utm_campaign: lead.utm_campaign,
  });
}
