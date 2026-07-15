import { CheckCircle, Headset, HomeAltSlim, Map, Whatsapp } from "iconoir-react";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import { WHATSAPP_LINKS } from "../lib/whatsapp";

export const metadata = {
  title: "Obrigado | Sua Casa na Planta",
};

export default function ThankYouPage() {
  return (
    <>
      <FloatingWhatsApp />

      <main className="wireframe-shell typ-shell">
        <section className="page-board typ-page" aria-labelledby="typ-title">
          <section className="section typ-hero">
            <span className="success-icon">
              <CheckCircle className="icon icon-check-large" aria-hidden="true" />
            </span>
            <h1 id="typ-title">Recebemos sua solicitação de simulação</h1>
            <p>
              Nossa equipe vai analisar suas informações e entrar em contato para orientar você sobre o melhor caminho
              para construir sua casa.
            </p>
            <p className="typ-support">
              <CheckCircle className="icon icon-check" aria-hidden="true" />
              Enquanto isso, escolha abaixo qual caminho faz mais sentido para o seu momento.
            </p>
          </section>

          <section className="section typ-offers">
            <article className="offer-card">
              <span className="offer-icon">
                <Map className="icon icon-map" aria-hidden="true" />
              </span>
              <div>
                <h2>Quero a solução completa: Terreno + Construção</h2>
                <p>
                  Ideal para quem ainda não tem terreno e quer ajuda para encontrar uma alternativa viável, financiar e
                  construir com mais segurança.
                </p>
                <a
                  className="button whatsapp"
                  href={WHATSAPP_LINKS.terrenoConstrucao}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Falar sobre terreno + construção
                  <Whatsapp className="whatsapp-icon" aria-hidden="true" />
                </a>
              </div>
            </article>
            <article className="offer-card">
              <span className="offer-icon">
                <HomeAltSlim className="icon icon-bricks" aria-hidden="true" />
              </span>
              <div>
                <h2>Já tenho meu terreno e quero apenas construir</h2>
                <p>
                  Ideal para quem já possui o lote e quer uma equipe para conduzir projeto, obra e entrega da casa pronta,
                  sem precisar lidar sozinho com pedreiros, materiais e burocracias.
                </p>
                <a
                  className="button whatsapp"
                  href={WHATSAPP_LINKS.apenasConstrucao}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Falar sobre construção no meu terreno
                  <Whatsapp className="whatsapp-icon" aria-hidden="true" />
                </a>
              </div>
            </article>
          </section>

          <section className="section typ-final">
            <span className="icon-badge large">
              <Headset className="icon icon-hardhat" aria-hidden="true" />
            </span>
            <h2>Prefere adiantar o atendimento?</h2>
            <p>Chame nossa equipe direto no WhatsApp e envie a mensagem: “Quero minha simulação gratuita”.</p>
            <a
              className="button whatsapp final-whatsapp"
              href={WHATSAPP_LINKS.simulacao}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Whatsapp className="whatsapp-icon" aria-hidden="true" />
              Chamar no WhatsApp agora
            </a>
            <p className="legal-note">
              Condições sujeitas à análise de crédito, disponibilidade, aprovação cadastral e regras vigentes de
              financiamento.
            </p>
          </section>
        </section>
      </main>
    </>
  );
}
