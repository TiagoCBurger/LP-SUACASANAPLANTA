import { NextResponse } from "next/server";
import { buildLeadPayload, LEAD_WEBHOOK_URL } from "../../lib/lead";

export async function POST(request) {
  try {
    const body = await request.json();
    const payload = buildLeadPayload(body, {
      user_agent: request.headers.get("user-agent") || undefined,
      referer: request.headers.get("referer") || undefined,
    });

    if (!payload.nome || !payload.email || !payload.telefone || !payload.renda_familiar || !payload.terreno) {
      return NextResponse.json({ error: "Preencha todos os campos obrigatórios." }, { status: 400 });
    }

    const webhookResponse = await fetch(LEAD_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!webhookResponse.ok) {
      return NextResponse.json({ error: "Não foi possível enviar sua solicitação." }, { status: 502 });
    }

    return NextResponse.json({ ok: true, lead: payload });
  } catch {
    return NextResponse.json({ error: "Não foi possível processar sua solicitação." }, { status: 500 });
  }
}
