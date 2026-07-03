import FloatingWhatsApp from "./components/FloatingWhatsApp";
import ImagePlaceholder from "./components/ImagePlaceholder";

export const metadata = {
  title: "LP | Sua Casa na Planta",
};

export default function HomePage() {
  return (
    <>
      <FloatingWhatsApp href="#formulario" />

      <main className="wireframe-shell">
        <section className="page-board main-lp" aria-labelledby="lp-title">
          <div className="board-label">LP Principal</div>

          <section className="section hero-section">
            <div className="section-label">Dobra 1 - Hero</div>
            <div className="hero-copy">
              <h1 id="lp-title">Construa sua casa em Passo Fundo sem precisar ter toda a entrada à vista</h1>
              <p>
                Faça uma simulação gratuita e veja como construir no bairro que faz sentido para sua família, com apoio
                na aprovação do financiamento, entrada parcelada e possibilidade de usar seu veículo como parte do
                pagamento.
              </p>
              <div className="trust-grid" aria-label="Selos de confiança">
                <div className="trust-item">
                  <span className="icon icon-car" aria-hidden="true" />
                  <strong>Aceitamos seu veículo como entrada</strong>
                </div>
                <div className="trust-item">
                  <span className="icon icon-card" aria-hidden="true" />
                  <strong>Parcelamos sua entrada em até 10x</strong>
                </div>
                <div className="trust-item">
                  <span className="icon icon-shield" aria-hidden="true" />
                  <strong>Cuidamos de toda a aprovação do seu crédito</strong>
                </div>
              </div>
              <a className="button primary" href="#formulario">
                Simular minha casa gratuitamente
              </a>
              <p className="support-note">
                Para quem quer terreno + construção ou já tem terreno e quer construir com acompanhamento profissional do
                início à entrega.
              </p>
            </div>

            <div className="hero-visual" aria-label="Imagem real de casa ou projeto entregue">
              <ImagePlaceholder>Imagem real de casa/projeto entregue</ImagePlaceholder>
            </div>

            <form className="lead-form" id="formulario" aria-labelledby="form-title">
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
              <button className="button primary full" type="button">
                Quero minha simulação gratuita
              </button>
              <p className="microcopy">
                <span className="icon icon-lock" aria-hidden="true" />
                Seu cadastro será enviado para nossa equipe de atendimento.
              </p>
            </form>
            <p className="legal-note">
              Condições sujeitas à análise de crédito, disponibilidade, aprovação cadastral e regras vigentes de
              financiamento.
            </p>
          </section>

          <section className="section">
            <div className="section-label">Dobra 2 - O Caminho</div>
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
                  <span className="icon icon-map" aria-hidden="true" />
                </span>
                <h3>Quero terreno + construção</h3>
                <p>
                  Para quem quer sair do aluguel, mas ainda precisa encontrar um terreno viável. A equipe ajuda você a
                  avaliar possibilidades de terreno, financiamento e construção dentro da sua realidade.
                </p>
              </article>
              <article className="option-card">
                <span className="icon-badge">
                  <span className="icon icon-bricks" aria-hidden="true" />
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
            <div className="section-label">Dobra 3 - Dores</div>
            <header className="section-header">
              <h2>As maiores travas para construir sua casa podem ter solução</h2>
            </header>
            <div className="three-card-grid">
              <article className="pain-card">
                <span className="icon-badge">
                  <span className="icon icon-bank" aria-hidden="true" />
                </span>
                <h3>“Tenho medo de o banco não aprovar meu financiamento.”</h3>
                <p>
                  Você recebe orientação para entender suas possibilidades de crédito, simular cenários e avançar com
                  mais segurança antes de tomar uma decisão.
                </p>
              </article>
              <article className="pain-card">
                <span className="icon-badge">
                  <span className="icon icon-money" aria-hidden="true" />
                </span>
                <h3>“Não tenho R$ 50 mil ou R$ 100 mil para dar de entrada.”</h3>
                <p>
                  A entrada pode ser facilitada com parcelamento em até 10x e possibilidade de usar seu veículo como
                  parte do pagamento, conforme análise e condições comerciais.
                </p>
              </article>
              <article className="pain-card">
                <span className="icon-badge">
                  <span className="icon icon-hardhat" aria-hidden="true" />
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
            <div className="section-label">Dobra 4 - Solução</div>
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
              <li>
                <span className="icon icon-check" aria-hidden="true" />
                Simulação gratuita de financiamento
              </li>
              <li>
                <span className="icon icon-check" aria-hidden="true" />
                Análise conforme sua renda familiar
              </li>
              <li>
                <span className="icon icon-check" aria-hidden="true" />
                Entrada parcelada em até 10x
              </li>
              <li>
                <span className="icon icon-check" aria-hidden="true" />
                Possibilidade de usar veículo como entrada
              </li>
              <li>
                <span className="icon icon-check" aria-hidden="true" />
                Acompanhamento na aprovação de crédito
              </li>
              <li>
                <span className="icon icon-check" aria-hidden="true" />
                Orientação para terreno + construção ou construção no seu lote
              </li>
            </ul>
            <p className="legal-note inline">
              Uso de FGTS e condições de financiamento dependem das regras vigentes, perfil do comprador e análise de
              crédito.
            </p>
          </section>

          <section className="section product-section">
            <div className="section-label">Dobra 5 - Produto</div>
            <ImagePlaceholder className="product-visual">Imagem real da casa</ImagePlaceholder>
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
                <li>
                  <span className="icon icon-check" aria-hidden="true" />
                  Projetos funcionais e bem aproveitados
                </li>
                <li>
                  <span className="icon icon-check" aria-hidden="true" />
                  Acabamento de alto padrão
                </li>
                <li>
                  <span className="icon icon-check" aria-hidden="true" />
                  Casas prontas para morar
                </li>
                <li>
                  <span className="icon icon-check" aria-hidden="true" />
                  Possibilidade de expansão futura
                </li>
                <li>
                  <span className="icon icon-check" aria-hidden="true" />
                  Construção pensada para a rotina da família
                </li>
                <li>
                  <span className="icon icon-check" aria-hidden="true" />
                  Atendimento em Passo Fundo e região
                </li>
              </ul>
              <a className="button primary compact" href="#formulario">
                Entender o projeto ideal para minha família
              </a>
            </div>
          </section>

          <section className="section">
            <div className="section-label">Dobra 6 - Prova Social</div>
            <header className="section-header">
              <h2>Veja quem já realizou esse sonho</h2>
              <p>
                Entregas reais, famílias reais e obras acompanhadas pela equipe da Sua Casa na Planta em Passo Fundo e
                região.
              </p>
            </header>
            <div className="video-grid">
              <article className="video-card">
                <span className="icon icon-play" aria-hidden="true" />
                Entrega de chaves
              </article>
              <article className="video-card">
                <span className="icon icon-play" aria-hidden="true" />
                Depoimento de cliente
              </article>
              <article className="video-card">
                <span className="icon icon-play" aria-hidden="true" />
                Licença ou etapa de construção
              </article>
              <article className="video-card">
                <span className="icon icon-play" aria-hidden="true" />
                Casa pronta ou visita na obra
              </article>
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
            <div className="section-label">Dobra 7 - FAQ</div>
            <header className="section-header">
              <h2>Dúvidas frequentes</h2>
            </header>
            <details>
              <summary>Preciso já ter terreno para começar?</summary>
              <p>
                Não. Você pode simular a solução completa com terreno + construção ou, se já tiver um lote, pode
                solicitar apenas a construção.
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
              <p>
                Sim. Você recebe orientação para entender suas possibilidades de crédito e seguir com mais segurança no
                processo.
              </p>
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
                Não. A simulação é gratuita e serve para você entender o que pode fazer sentido para sua realidade antes
                de tomar uma decisão.
              </p>
            </details>
          </section>

          <section className="section final-section">
            <div className="section-label">Dobra Final</div>
            <ImagePlaceholder className="final-visual">Imagem real de fechamento</ImagePlaceholder>
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
