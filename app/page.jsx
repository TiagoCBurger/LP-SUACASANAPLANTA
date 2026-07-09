import {
  Bank,
  CardShield,
  CheckCircle,
  CreditCard,
  HomeAltSlim,
  Map,
  SafeArrowRight,
  Truck,
  WarningTriangle,
} from "iconoir-react";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
export const metadata = {
  title: "LP | Sua Casa na Planta",
};

export default function HomePage() {
  return (
    <>
      <FloatingWhatsApp href="#formulario" />

      <main className="wireframe-shell">
        <section className="page-board main-lp" aria-labelledby="lp-title">
          <section className="section hero-section">
            <div className="hero-background" aria-hidden="true">
              <img src="/hero-bg.png" alt="" className="hero-background-image" width={1433} height={955} />
              <div className="hero-background-gradient" />
            </div>

            <div className="hero-inner">
              <div className="hero-logo">
                <img src="/Logo.png" alt="Sua Casa na Planta" className="hero-logo-image" width={220} height={67} />
              </div>

              <div className="hero-layout">
                <div className="hero-copy">
                  <h1 id="lp-title">Construa sua casa em Passo Fundo sem precisar ter toda a entrada à vista</h1>
                  <p>
                    Faça uma simulação gratuita e veja como construir no bairro que faz sentido para sua família, com apoio
                    na aprovação do financiamento, entrada parcelada e possibilidade de usar seu veículo como parte do
                    pagamento.
                  </p>

                  <div className="trust-grid" aria-label="Selos de confiança">
                    <div className="trust-item">
                      <Truck className="icon icon-car" aria-hidden="true" />
                      <strong>Aceitamos seu veículo como entrada</strong>
                    </div>
                    <div className="trust-item">
                      <CreditCard className="icon icon-card" aria-hidden="true" />
                      <strong>Parcelamos sua entrada em até 10x</strong>
                    </div>
                    <div className="trust-item">
                      <CardShield className="icon icon-shield" aria-hidden="true" />
                      <strong>Cuidamos de toda a aprovação do seu crédito</strong>
                    </div>
                  </div>

                  <p className="support-note">
                    Para quem quer terreno + construção ou já tem terreno e quer construir com acompanhamento profissional do
                    início à entrega.
                  </p>
                </div>

                <form className="lead-form hero-lead-form" id="formulario" aria-labelledby="form-title">
                  <h2 id="form-title">Solicite sua simulação gratuita</h2>
                  <p>
                    Preencha seus dados para receber uma orientação sobre financiamento, entrada e possibilidades para
                    construir sua casa.
                  </p>
                  <label>
                    <span>Nome</span>
                    <input type="text" name="nome" placeholder="Seu nome" />
                  </label>
                  <label>
                    <span>E-mail</span>
                    <input type="email" name="email" placeholder="voce@email.com" />
                  </label>
                  <label>
                    <span>Telefone/WhatsApp</span>
                    <input type="tel" name="telefone" placeholder="(54) 99999-9999" />
                  </label>
                  <label>
                    <span>Renda familiar</span>
                    <select name="renda_familiar" defaultValue="" required>
                      <option value="" disabled>
                        Selecione a faixa de renda
                      </option>
                      <option value="ate-3000">Até R$ 3.000</option>
                      <option value="3001-5000">De R$ 3.001 a R$ 5.000</option>
                      <option value="5001-8000">De R$ 5.001 a R$ 8.000</option>
                      <option value="8001-12000">De R$ 8.001 a R$ 12.000</option>
                      <option value="12001-20000">De R$ 12.001 a R$ 20.000</option>
                      <option value="acima-20000">Acima de R$ 20.000</option>
                    </select>
                  </label>
                  <fieldset>
                    <legend>Você já possui terreno?</legend>
                    <label className="radio-row">
                      <input type="radio" name="terreno" />
                      <span>Sim, já tenho meu terreno e quero apenas construir</span>
                    </label>
                    <label className="radio-row">
                      <input type="radio" name="terreno" />
                      <span>Não, quero a solução completa: terreno + construção</span>
                    </label>
                  </fieldset>
                  <button className="button hero-submit full" type="button">
                    Quero minha simulação gratuita
                  </button>
                  <p className="microcopy">
                    <SafeArrowRight className="icon icon-lock" aria-hidden="true" />
                    Seu cadastro será enviado para nossa equipe de atendimento.
                  </p>
                </form>
              </div>

              <p className="legal-note">
                Condições sujeitas à análise de crédito, disponibilidade, aprovação cadastral e regras vigentes de
                financiamento.
              </p>
            </div>
          </section>

          <section className="section">
            <header className="section-header">
              <h2>Escolha o melhor caminho para construir sua casa</h2>
              <p>
                A Sua Casa na Planta atende famílias em dois momentos: quem ainda precisa do terreno e quem já tem onde
                construir.
              </p>
            </header>
            <div className="two-card-grid">
              <article className="option-card">
                <span className="icon-badge">
                  <Map className="icon icon-map" aria-hidden="true" />
                </span>
                <h3>Quero terreno + construção</h3>
                <p>
                  Para quem quer sair do aluguel, mas ainda precisa encontrar um terreno viável. A equipe ajuda você a
                  avaliar possibilidades de terreno, financiamento e construção dentro da sua realidade.
                </p>
              </article>
              <article className="option-card">
                <span className="icon-badge">
                  <HomeAltSlim className="icon icon-bricks" aria-hidden="true" />
                </span>
                <h3>Já tenho terreno e quero construir</h3>
                <p>
                  Para quem já tem o lote e quer evitar dor de cabeça com pedreiros, compra de materiais, atrasos e
                  burocracias. Você conta com uma equipe especializada para planejar, executar e entregar sua casa pronta.
                </p>
              </article>
            </div>
            <div className="center-action">
              <a className="button primary compact" href="#formulario">
                Ver qual opção faz sentido para mim
              </a>
            </div>
          </section>

          <section className="section">
            <header className="section-header">
              <h2>As maiores travas para construir sua casa podem ter solução</h2>
            </header>
            <div className="three-card-grid">
              <article className="pain-card">
                <span className="icon-badge">
                  <Bank className="icon icon-bank" aria-hidden="true" />
                </span>
                <h3>“Tenho medo de o banco não aprovar meu financiamento.”</h3>
                <p>
                  Você recebe orientação para entender suas possibilidades de crédito, simular cenários e avançar com
                  mais segurança antes de tomar uma decisão.
                </p>
              </article>
              <article className="pain-card">
                <span className="icon-badge">
                  <CreditCard className="icon icon-money" aria-hidden="true" />
                </span>
                <h3>“Não tenho R$ 50 mil ou R$ 100 mil para dar de entrada.”</h3>
                <p>
                  A entrada pode ser facilitada com parcelamento em até 10x e possibilidade de usar seu veículo como
                  parte do pagamento, conforme análise e condições comerciais.
                </p>
              </article>
              <article className="pain-card">
                <span className="icon-badge">
                  <WarningTriangle className="icon icon-hardhat" aria-hidden="true" />
                </span>
                <h3>“Não quero lidar com pedreiro, material, atraso e burocracia.”</h3>
                <p>
                  A construtora acompanha o processo de ponta a ponta, ajudando no planejamento, documentação, obra e
                  entrega da casa pronta.
                </p>
              </article>
            </div>
            <div className="center-action">
              <a className="button primary compact" href="#formulario">
                Ver se consigo construir minha casa
              </a>
            </div>
          </section>

          <section className="section solution-section">
            <header className="section-header">
              <h2>Uma forma mais simples de sair do aluguel e construir com orientação</h2>
            </header>
            <div className="text-columns">
              <p>
                Comprar ou construir uma casa envolve terreno, entrada, financiamento, documentação, projeto e obra.
                Quando você tenta resolver tudo sozinho, o processo parece distante.
              </p>
              <p>
                A Sua Casa na Planta organiza esse caminho para famílias de Passo Fundo e região que querem construir
                com mais clareza, sem abrir mão de acabamento, localização e acompanhamento profissional.
              </p>
            </div>
            <ul className="icon-list two-columns">
              {[
                "Simulação gratuita de financiamento",
                "Análise conforme sua renda familiar",
                "Entrada parcelada em até 10x",
                "Possibilidade de usar veículo como entrada",
                "Acompanhamento na aprovação de crédito",
                "Orientação para terreno + construção ou construção no seu lote",
              ].map((item) => (
                <li key={item}>
                  <CheckCircle className="icon icon-check" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="legal-note inline">
              Uso de FGTS e condições de financiamento dependem das regras vigentes, perfil do comprador e análise de
              crédito.
            </p>
          </section>

          <section className="section product-section">
            <div className="product-visual" aria-label="Exemplo de casa entregue">
              <img src="/Object-1.png" alt="Casa moderna com fachada iluminada e jardim" width={502} height={538} />
            </div>
            <div className="product-copy">
              <h2>Casas com metragem inteligente, acabamento de alto padrão e possibilidade de expansão</h2>
              <p>
                A proposta da Sua Casa na Planta não é vender uma promessa fora da realidade. São projetos pensados para
                famílias que querem uma casa bonita, funcional, bem construída e compatível com a vida real.
              </p>
              <p>
                Os projetos embrião permitem começar com uma casa pronta para morar, com acabamento de qualidade, e
                manter a possibilidade de expansão futura conforme a família cresce e os planos avançam.
              </p>
              <ul className="icon-list">
                {[
                  "Projetos funcionais e bem aproveitados",
                  "Acabamento de alto padrão",
                  "Casas prontas para morar",
                  "Possibilidade de expansão futura",
                  "Construção pensada para a rotina da família",
                  "Atendimento em Passo Fundo e região",
                ].map((item) => (
                  <li key={item}>
                    <CheckCircle className="icon icon-check" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <a className="button primary compact" href="#formulario">
                Entender o projeto ideal para minha família
              </a>
            </div>
          </section>

          <section className="section">
            <header className="section-header">
              <h2>Veja quem já realizou esse sonho</h2>
              <p>
                Entregas reais, famílias reais e obras acompanhadas pela equipe da Sua Casa na Planta em Passo Fundo e
                região.
              </p>
            </header>
            <div className="video-grid">
              {[
                {
                  src: "/video1.MP4",
                  type: "video/mp4",
                },
                {
                  src: "/copy_42C0521F-9731-40E4-A04C-643BA0FADEF7.mov",
                  type: "video/quicktime",
                },
                {
                  src: "/ee04ab4c-ab2b-4669-8d26-6c38e4f9bfc4.mp4",
                  type: "video/mp4",
                },
              ].map((video) => (
                <article className="video-card" key={video.src}>
                  <video controls preload="metadata" playsInline>
                    <source src={video.src} type={video.type} />
                    Seu navegador não suporta a reprodução deste vídeo.
                  </video>
                </article>
              ))}
            </div>
            <p className="support-note centered">
              Assista aos vídeos e veja como outras famílias saíram da dúvida para a realização da casa própria com
              acompanhamento em cada etapa.
            </p>
            <div className="center-action">
              <a className="button primary compact" href="#formulario">
                Quero fazer minha simulação
              </a>
            </div>
          </section>

          <section className="section faq-section">
            <header className="section-header">
              <h2>Dúvidas frequentes</h2>
            </header>
            <details>
              <summary>Preciso já ter terreno para começar?</summary>
              <p>
                Não. Você pode simular a solução completa com terreno + construção ou, se já tiver um lote, pode solicitar
                apenas a construção.
              </p>
            </details>
            <details>
              <summary>Posso parcelar a entrada?</summary>
              <p>Sim. A entrada pode ser parcelada em até 10x, conforme análise e condições comerciais.</p>
            </details>
            <details>
              <summary>Posso usar meu carro como entrada?</summary>
              <p>Sim. A Sua Casa na Planta avalia a possibilidade de aceitar seu veículo como parte da entrada.</p>
            </details>
            <details>
              <summary>A equipe ajuda na aprovação do financiamento?</summary>
              <p>Sim. Você recebe orientação para entender suas possibilidades de crédito e seguir com mais segurança no processo.</p>
            </details>
            <details>
              <summary>As casas são prontas para morar?</summary>
              <p>
                Sim. A proposta é entregar uma casa funcional, bem acabada e pronta para morar, com possibilidade de
                expansão futura conforme o projeto.
              </p>
            </details>
            <details>
              <summary>A simulação é paga?</summary>
              <p>
                Não. A simulação é gratuita e serve para você entender o que pode fazer sentido para sua realidade antes de
                tomar uma decisão.
              </p>
            </details>
          </section>

          <section className="section final-section">
            <div className="final-visual" aria-label="Fachada de casa moderna">
              <img src="/image%2018.png" alt="Cliente em frente à casa moderna com portão e entrada pavimentada" width={528} height={521} />
            </div>
            <div className="final-copy">
              <h2>Sua casa pode estar mais perto do que parece</h2>
              <p>
                Faça uma simulação gratuita e descubra quais caminhos existem para construir sua casa em Passo Fundo sem
                precisar resolver financiamento, entrada e obra sozinho.
              </p>
              <a className="button primary compact" href="#formulario">
                Solicitar simulação gratuita
              </a>
            </div>
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
