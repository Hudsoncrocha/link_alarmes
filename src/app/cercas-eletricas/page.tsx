"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function CercasEletricasSuperpage() {
  const whatsappUrl = "/whatsapp?origin=cercas-eletricas";

  // Configurator State
  const [prefFios, setPrefFios] = useState<string>("");
  const [prefPagamento, setPrefPagamento] = useState<string>("");

  // Handler to construct dynamic WhatsApp link
  const getDynamicWhatsappUrl = () => {
    const baseMessage = "Olá! Tenho interesse em um projeto de cerca elétrica em São Paulo.";
    let prefText = "";
    if (prefFios) {
      prefText += `\n- Preferência de fios: ${prefFios}`;
    }
    if (prefPagamento) {
      prefText += `\n- Forma de pagamento ideal: ${prefPagamento}`;
    }
    
    // Fallback or UTMs
    const metadados = `\n\n[Ref: cerca-eletrica-superpage]`;
    const finalMessage = encodeURIComponent(baseMessage + prefText + metadados);
    const wppNumber = "5511910984454";
    return `https://wa.me/${wppNumber}?text=${finalMessage}`;
  };

  const dores = [
    {
      titulo: "Privacidade e Invasão",
      de: "O medo constante de ter a privacidade violada e o lar invadido.",
      para: "A cerca elétrica cria uma barreira psicológica e física imediata. O invasor desiste ao notar a alta tensão e escolhe alvos mais fáceis, devolvendo o controle e a paz de espírito para a rotina familiar.",
      icon: "🏠"
    },
    {
      titulo: "Custos e Economia",
      de: "O estresse com contas de luz altas e mensalidades abusivas de segurança.",
      para: "A cerca elétrica moderna quebra essa preocupação: seu consumo de energia equivale ao de uma pequena lâmpada LED. Sem taxas mensais obrigatórias e com um dos menores custos por metro linear do mercado.",
      icon: "💰"
    },
    {
      titulo: "Impotência e Resposta",
      de: "A ansiedade de que ocorra uma invasão silenciosa sem ninguém perceber.",
      para: "Caso o sistema seja cortado ou burlado, o alarme dispara instantaneamente, alertando a vizinhança ou a empresa de monitoramento. Isso corta o tempo de ação do invasor e evita prejuízos.",
      icon: "🚨"
    },
    {
      titulo: "Valorização Patrimonial",
      de: "Ver o imóvel perder valor no mercado imobiliário por falta de segurança.",
      para: "Propriedades protegidas e preparadas valorizam de imediato. Atraem compradores e inquilinos que priorizam o bem-estar e agilizam vendas ou locações na competitiva capital paulista.",
      icon: "📈"
    }
  ];

  return (
    <div className="flex flex-col w-full bg-slate-950 text-slate-100 overflow-x-hidden font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative py-20 lg:py-32 border-b border-slate-900 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-950/20 via-slate-950 to-slate-950">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Text */}
            <div className="lg:col-span-7 text-left flex flex-col items-start">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-950/20 border border-cyan-500/10 px-3.5 py-1.5 rounded-full mb-6">
                A melhor cerca elétrica de São Paulo
              </span>
              <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-tight">
                Proteja Seu Lar. Devolva a{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 text-neon-cyan">
                  Tranquilidade
                </span>{" "}
                para a Família.
              </h1>
              <p className="mt-6 text-base text-slate-400 md:text-lg leading-relaxed max-w-2xl">
                Morar em São Paulo exige equilibrar o dinamismo da rotina paulistana com a busca por sossego. Adquirir uma cerca elétrica transforma as principais preocupações dos moradores em alívio e segurança real para o patrimônio.
              </p>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <a
                  href="#configurador"
                  className="btn-neon-blue text-sm px-8 py-4 flex gap-2 items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-500 border-none shadow-[0_0_15px_rgba(6,182,212,0.2)]"
                >
                  Obter um orçamento
                </a>
              </div>
            </div>

            {/* Hero Image Component */}
            <div className="lg:col-span-5 relative w-full flex justify-center lg:justify-end">
              <div className="relative p-1.5 rounded-2xl bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-slate-900 border border-slate-800 shadow-[0_0_50px_rgba(6,182,212,0.05)] group overflow-hidden max-w-[420px] w-full">
                <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden">
                  <Image
                    src="/cerca-eletrica-hero.png"
                    alt="Cerca Elétrica Premium instalada em muro de concreto escuro"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
                </div>
                <div className="mt-4 p-4 border-t border-slate-900 flex justify-between items-center text-[10px] text-slate-500 font-mono">
                  <span>DISPARO IMEDIATO</span>
                  <span className="glow-dot-cyan"></span>
                  <span>18.000 VOLTS</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION: ESTRUTURA E FUNCIONAMENTO DA SOLUÇÃO */}
      <section className="py-20 bg-slate-900/30 border-b border-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-950/20 border border-emerald-500/10 px-3 py-1 rounded">
              Estrutura & Tecnologia
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl mt-4">
              Barreira Física Ativa de Alta Eficiência
            </h2>
            <p className="mt-4 text-slate-400 text-sm leading-relaxed">
              O objetivo primordial da cerca elétrica é estabelecer uma barreira física real entre a sua propriedade e a rua, inibindo a ação de pessoas mal-intencionadas que buscam facilidade para furtos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Estrutura Física */}
            <div className="card-tech p-6 border border-slate-900 hover:border-emerald-500/20 transition-all">
              <span className="text-3xl mb-4 block">🛡️</span>
              <h3 className="text-base font-bold text-white uppercase tracking-wider mb-2">Estrutura Resistente</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Hastes de alumínio robustas e kit completo composto por central de choque, bateria de backup e sirene de alta potência. Instalação executada de forma limpa, organizada e sem desalinhos.
              </p>
            </div>

            {/* Card 2: Potência e Autonomia */}
            <div className="card-tech p-6 border border-slate-900 hover:border-emerald-500/20 transition-all">
              <span className="text-3xl mb-4 block">⚡</span>
              <h3 className="text-base font-bold text-white uppercase tracking-wider mb-2">18.000V & 16h Autonomia</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                A central de choque atua com pulsos de 18 mil volts. O sistema conta com funcionamento autônomo de até 16 horas garantido por bateria interna na eventual falta de energia da concessionária.
              </p>
            </div>

            {/* Card 3: Consumo Inteligente */}
            <div className="card-tech p-6 border border-slate-900 hover:border-emerald-500/20 transition-all">
              <span className="text-3xl mb-4 block">💡</span>
              <h3 className="text-base font-bold text-white uppercase tracking-wider mb-2">Consumo Menor que LED</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Consumo total menor do que o de uma única lâmpada LED. A central inteligente otimiza a energia monitorando continuamente o pulso de saída e de retorno no circuito fechado.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 2. BENEFÍCIOS / PAIN TO RELIEF GRID */}
      <section id="beneficios" className="py-24 bg-slate-950 border-b border-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-950/20 border border-cyan-500/10 px-3 py-1 rounded">
              A Solução Definitiva
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl mt-4">
              Quais benefícios em adquirir uma Cerca Elétrica?
            </h2>
            <p className="mt-4 text-slate-400 text-sm">
              Veja como a instalação de uma Cerca Elétrica resolve os principais desafios de segurança de quem reside em São Paulo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {dores.map((d) => (
              <div key={d.titulo} className="card-tech p-8 border border-slate-900 hover:border-cyan-500/15 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3.5 mb-6">
                    <span className="text-3xl p-2.5 rounded-lg bg-slate-900 border border-slate-800">{d.icon}</span>
                    <h3 className="text-lg font-bold text-white tracking-wide">{d.titulo}</h3>
                  </div>

                  {/* Pain Point */}
                  <div className="mb-4 pb-4 border-b border-slate-900">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-rose-500 block mb-1">A Preocupação:</span>
                    <p className="text-xs text-slate-400 leading-relaxed font-semibold">{d.de}</p>
                  </div>

                  {/* Solution Point */}
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-400 block mb-1">O Alívio Técnico:</span>
                    <p className="text-xs text-slate-300 leading-relaxed">{d.para}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. SHOWCASE TECNOLÓGICO */}
      <section className="py-24 bg-slate-900/10 border-b border-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Showcase Image */}
            <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center lg:justify-start">
              <div className="relative p-1.5 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-900 shadow-[0_0_50px_rgba(0,0,0,0.3)] overflow-hidden max-w-[420px] w-full">
                <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden">
                  <Image
                    src="/cerca-eletrica-pagamento.png"
                    alt="Facilidades de pagamento parcelado em até 6x nos cartões Visa, Mastercard, Elo e Pix"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                </div>
                <div className="mt-4 p-4 border-t border-slate-950 flex justify-between items-center text-[10px] text-slate-500 font-mono">
                  <span>PARCELAMENTO ATÉ 6X</span>
                  <span className="glow-dot-cyan"></span>
                  <span>VISA / MASTER / ELO / PIX</span>
                </div>
              </div>
            </div>

            {/* Showcase Content */}
            <div className="lg:col-span-7 order-1 lg:order-2 text-left">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-950/20 border border-emerald-500/10 px-3 py-1 rounded">
                Facilidade na aquisição
              </span>
              <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl mt-4 leading-tight">
                Como é cobrada e qual a forma de pagamento?
              </h2>
              <p className="mt-6 text-sm text-slate-400 leading-relaxed">
                Cerca elétrica é vendida por metro linear + o valor do Kit (Central, bateria, sirene e aterramento). Te entregamos a cerca elétrica instalada e funcionando. Parcelamos em até 6X!
              </p>
              
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-slate-900">
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">Tenha uma Cerca elétrica instalada e com ótima aparência</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">Instalação com hastes industriais alinhadas perfeitamente com a estética do seu muro.</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">Parcelamos a aquisição em parcelas que cabem no seu planejamento</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">Opções flexíveis de pagamento para viabilizar a proteção do seu patrimônio.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. CONFIGURADOR INTERATIVO */}
      <section id="configurador" className="py-24 bg-slate-950 border-b border-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-950/20 border border-cyan-500/10 px-3 py-1 rounded">
              Direcionador Inteligente
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl mt-4">
              Qual o tipo de cerca você está precisando?
            </h2>
            <p className="mt-4 text-slate-400 text-sm">
              Selecione as opções que melhor se adaptam à realidade do seu imóvel para gerarmos um pré-projeto
            </p>
          </div>

          <div className="max-w-3xl mx-auto card-tech p-8 border border-slate-900 bg-slate-950/30 backdrop-blur-md">
            
            {/* Step 1: Modelo/Fios */}
            <div className="mb-10">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                1. Você prefere cerca elétrica de 6 ou 4 fios?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setPrefFios("6 Fios")}
                  className={`p-4 rounded-lg border text-left text-xs font-semibold transition-all ${
                    prefFios === "6 Fios"
                      ? "border-cyan-400 bg-cyan-950/20 text-white shadow-[0_0_10px_rgba(6,182,212,0.15)]"
                      : "border-slate-800 bg-slate-900/50 text-slate-400 hover:border-slate-700"
                  }`}
                >
                  <span className="block text-sm mb-1 text-white">⚡ Cerca de 6 Fios</span>
                  Maior altura de barreira, ideal para perímetros com alto nível de exposição.
                </button>
                <button
                  type="button"
                  onClick={() => setPrefFios("4 Fios")}
                  className={`p-4 rounded-lg border text-left text-xs font-semibold transition-all ${
                    prefFios === "4 Fios"
                      ? "border-cyan-400 bg-cyan-950/20 text-white shadow-[0_0_10px_rgba(6,182,212,0.15)]"
                      : "border-slate-800 bg-slate-900/50 text-slate-400 hover:border-slate-700"
                  }`}
                >
                  <span className="block text-sm mb-1 text-white">⚡ Cerca de 4 Fios</span>
                  Modelo padrão, ideal para muros já elevados ou restrições visuais leves.
                </button>
              </div>
            </div>

            {/* Step 2: Pagamento */}
            <div className="mb-10">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                Qual seria a forma de pagamento ideal para você?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setPrefPagamento("Gostaria de pagar à vista!")}
                  className={`p-4 rounded-lg border text-left text-xs font-semibold transition-all ${
                    prefPagamento === "Gostaria de pagar à vista!"
                      ? "border-cyan-400 bg-cyan-950/20 text-white shadow-[0_0_10px_rgba(6,182,212,0.15)]"
                      : "border-slate-800 bg-slate-900/50 text-slate-400 hover:border-slate-700"
                  }`}
                >
                  <span className="block text-sm mb-1 text-white">💵 Gostaria de pagar à vista!</span>
                  Condições especiais com desconto para pagamento à vista.
                </button>
                <button
                  type="button"
                  onClick={() => setPrefPagamento("Quero pagar dividido em até 6x no cartão de crédito!")}
                  className={`p-4 rounded-lg border text-left text-xs font-semibold transition-all ${
                    prefPagamento === "Quero pagar dividido em até 6x no cartão de crédito!"
                      ? "border-cyan-400 bg-cyan-950/20 text-white shadow-[0_0_10px_rgba(6,182,212,0.15)]"
                      : "border-slate-800 bg-slate-900/50 text-slate-400 hover:border-slate-700"
                  }`}
                >
                  <span className="block text-sm mb-1 text-white">💳 Quero pagar dividido em até 6x no cartão de crédito!</span>
                  Parcelamento facilitado sem juros no cartão para o seu planejamento.
                </button>
              </div>
            </div>

            {/* Step 3: Action */}
            <div className="pt-6 border-t border-slate-900 flex flex-col items-center">
              <a
                href={getDynamicWhatsappUrl()}
                className="btn-neon-blue text-sm w-full py-4 flex gap-2 items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-500 border-none shadow-[0_0_15px_rgba(6,182,212,0.2)]"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.62.963 3.203 1.493 4.716 1.495 5.495.002 9.965-4.469 9.968-9.97.001-2.664-1.034-5.169-2.915-7.052C16.535 1.744 14.04 .71 11.99.713 6.495.713 2.025 5.184 2.022 10.686c-.001 1.636.43 3.226 1.251 4.634L2.28 21.65l6.367-1.672-.001-.024z" />
                </svg>
                Solicitar Orçamento Personalizado
              </a>
              <p className="text-[10px] text-slate-500 mt-3 font-mono">
                AO CLICAR, VOCÊ SERÁ REDIRECIONADO AO WHATSAPP COM AS OPÇÕES SELECIONADAS.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. DUPLA PROTEÇÃO (COMBO) */}
      <section className="py-20 bg-slate-950 border-b border-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="card-tech p-8 md:p-12 border border-slate-900 bg-gradient-to-r from-slate-950 via-slate-900/20 to-slate-950 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-bold text-rose-500 uppercase tracking-widest bg-rose-950/20 border border-rose-500/10 px-3 py-1 rounded">
                Estratégia Recomendada
              </span>
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl mt-4">
                Proteção em Duas Camadas: Câmeras + Cerca Elétrica
              </h2>
              <p className="mt-4 text-slate-400 text-sm leading-relaxed">
                A cerca elétrica impede a tentativa física de transpor o muro e avisa imediatamente em caso de corte. Já as câmeras registram o ocorrido e te dá a capacidade de poder ver, mesmo de longe, o que está acontecendo naquele momento. Juntas, formam o combo definitivo de segurança.
              </p>
            </div>
            <Link
              href={whatsappUrl}
              className="btn-neon-blue text-sm px-8 py-4 flex gap-2 items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-500 border-none shadow-[0_0_15px_rgba(6,182,212,0.2)] flex-shrink-0"
            >
              Quero um Projeto Completo (Combo)
            </Link>
          </div>
        </div>
      </section>

      {/* 6. DÚVIDAS FREQUENTES (FAQ) */}
      <section className="py-24 bg-slate-900/10 border-b border-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-950/20 border border-cyan-500/10 px-3 py-1 rounded">
              Tire Suas Dúvidas
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl mt-4">
              Perguntas Frequentes Sobre Proteção Perimetral
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="card-tech p-6 border border-slate-900">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">A cerca elétrica consome muita energia?</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Não. Por ser um sistema de alta tensão mas baixíssima corrente (pulsos de choque), ela consome muito pouca eletricidade. O consumo mensal de uma central moderna é equivalente ao de uma lâmpada LED comum (aproximadamente 5W a 8W), impactando de forma irrelevante a conta de luz.</p>
            </div>
            <div className="card-tech p-6 border border-slate-900">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">Quais são as exigências legais para instalação em São Paulo?</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Segundo as normas técnicas locais, a instalação de cercas elétricas exige uma altura mínima de 2,10 metros a partir do solo na área pública. Além disso, as centrais de choque devem ser homologadas pelo INMETRO/ANATEL e a propriedade deve conter placas de advertência visual visíveis alertando sobre o perigo de choque.</p>
            </div>
            <div className="card-tech p-6 border border-slate-900">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">Qual a diferença de eficácia entre cerca elétrica e concertina?</h4>
              <p className="text-xs text-slate-400 leading-relaxed">A cerca elétrica tradicional fornece uma barreira com alarme sonoro integrado (caso o fio seja tocado ou cortado), além do choque. A concertina funciona exclusivamente como uma barreira física cortante brutal que inibe a invasão pelo risco de ferimentos sérios, mas não possui disparo de alarme elétrico nativo.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
