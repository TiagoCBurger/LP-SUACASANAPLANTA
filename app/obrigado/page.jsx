import FloatingWhatsApp from "../components/FloatingWhatsApp";

export const metadata = {
  title: "Obrigado | Sua Casa na Planta",
};

export default function ThankYouPage() {
  return (
    <>
      <FloatingWhatsApp />

      <main className="wireframe-shell typ-shell">
        <section className="page-board typ-page" aria-labelledby="typ-title">
          <div className="board-label">Página de Obrigado / TYP</div>

          <section className="section typ-hero">
            <div className="section-label">Hero TYP</div>
            <span className="success-icon">
              <span className="icon icon-check-large" aria-hidden="true" />
            </span>
            <h1 id="typ-title">Recebemos sua solicitação de simulação</h1>
            <p>
              Nossa equipe vai analisar suas informações e entrar em contato para orientar você sobre o melhor caminho
              para construir sua casa.
            </p>
            <p className="typ-support">
              <span className="icon icon-check" aria-hidden="true" />
              Enquanto isso, escolha abaixo qual caminho faz mais sentido para o seu momento.
            </p>
          </section>

          <section className="section typ-offers">
            <div className="section-label">Nossas Ofertas</div>
            <article className="offer-card">
              <span className="offer-icon">
                <span className="icon icon-home-large" aria-hidden="true" />
              </span>
              <div>
                <h2>Quero a solução completa: Terreno + Construção</h2>
                <p>
                  Ideal para quem ainda não tem terreno e quer ajuda para encontrar uma alternativa viável, financiar e
                  construir com mais segurança.
                </p>
                <a className="button whatsapp" href="#">
                  Falar sobre terreno + construção
                  <span className="icon icon-whatsapp" aria-hidden="true" />
                </a>
              </div>
            </article>
            <article className="offer-card">
              <span className="offer-icon">
                <span className="icon icon-bricks" aria-hidden="true" />
              </span>
              <div>
                <h2>Já tenho meu terreno e quero apenas construir</h2>
                <p>
                  Ideal para quem já possui o lote e quer uma equipe para conduzir projeto, obra e entrega da casa
                  pronta, sem precisar lidar sozinho com pedreiros, materiais e burocracias.
                </p>
                <a className="button whatsapp" href="#">
                  Falar sobre construção no meu terreno
                  <span className="icon icon-whatsapp" aria-hidden="true" />
                </a>
              </div>
            </article>
          </section>

          <section className="section typ-final">
            <div className="section-label">Bloco Final</div>
            <span className="icon-badge large">
              <span className="icon icon-headset" aria-hidden="true" />
            </span>
            <h2>Prefere adiantar o atendimento?</h2>
            <p>Chame nossa equipe direto no WhatsApp e envie a mensagem: “Quero minha simulação gratuita”.</p>
            <a className="button whatsapp final-whatsapp" href="#">
              <span className="icon icon-whatsapp" aria-hidden="true" />
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
