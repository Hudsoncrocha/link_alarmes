"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function CercasEletricasSuperpage() {
  // Configurator State
  const [prefModelo, setPrefModelo] = useState<string>("");
  const [tipoImovel, setTipoImovel] = useState<string>("");

  // Handler to construct dynamic WhatsApp link
  const getDynamicWhatsappUrl = () => {
    const baseMessage = "Olá! Tenho interesse em um projeto de proteção perimetral para meu imóvel em São Paulo.";
    let prefText = "";
    if (prefModelo) {
      prefText += `\n- Preferência de modelo: ${prefModelo}`;
    }
    if (tipoImovel) {
      prefText += `\n- Tipo de imóvel/bairro: ${tipoImovel}`;
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
      de: "O medo constante de ter a privacidade violada e o lar exposto.",
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
                Proteção Perimetral Inteligente em São Paulo
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
                  Configurar Meu Projeto
                </a>
                <a
                  href="#beneficios"
                  className="btn-neon-outline text-sm px-8 py-4 flex items-center justify-center"
                >
                  Ver Benefícios
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

      {/* 2. BENEFÍCIOS / PAIN TO RELIEF GRID */}
      <section id="beneficios" className="py-24 bg-slate-950 border-b border-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-950/20 border border-cyan-500/10 px-3 py-1 rounded">
              A Solução Definitiva
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl mt-4">
              Transformando Preocupações em Segurança Real
            </h2>
            <p className="mt-4 text-slate-400 text-sm">
              Veja como a instalação de uma barreira perimetral ativa resolve os principais desafios de segurança de quem reside ou trabalha em São Paulo.
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
                    src="/cerca-eletrica-detalhe.png"
                    alt="Detalhamento técnico de hastes cantoneiras e isoladores de cerca elétrica"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                </div>
                <div className="mt-4 p-4 border-t border-slate-950 flex justify-between items-center text-[10px] text-slate-500 font-mono">
                  <span>RESISTENTE E DURÁVEL</span>
                  <span className="glow-dot-emerald"></span>
                  <span>CABOS INOX</span>
                </div>
              </div>
            </div>

            {/* Showcase Content */}
            <div className="lg:col-span-7 order-1 lg:order-2 text-left">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-950/20 border border-emerald-500/10 px-3 py-1 rounded">
                Engenharia de Proteção
              </span>
              <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl mt-4 leading-tight">
                Barreira Física Alinhada e Altamente Durável
              </h2>
              <p className="mt-6 text-sm text-slate-400 leading-relaxed">
                As cercas elétricas modernas utilizam hastes de cantoneira industrial de alta resistência e fios de aço inoxidável tensionados por molas individuais. Isso impede que os fios afrouxem com o tempo e garante que o sistema mantenha o alinhamento estético no topo do seu muro, resistindo às intempéries climáticas sem oxidar ou perder condutividade.
              </p>
              
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-slate-900">
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">Central Inteligente</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">Calibração que ignora pequenos contatos (como folhas ou pássaros) e foca na detecção técnica de invasão.</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">Autonomia na Falta de Luz</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">Equipado com baterias internas que mantêm o choque e a barreira ativa mesmo se a energia da rua cair.</p>
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
              Direcione Seu Projeto Personalizado em SP
            </h2>
            <p className="mt-4 text-slate-400 text-sm">
              Selecione as opções que melhor se adaptam à realidade do seu imóvel para gerarmos um pré-projeto customizado.
            </p>
          </div>

          <div className="max-w-3xl mx-auto card-tech p-8 border border-slate-900 bg-slate-950/30 backdrop-blur-md">
            
            {/* Step 1: Modelo */}
            <div className="mb-10">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                1. Você prefere cerca elétrica tradicional ou concertina (com lâminas)?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setPrefModelo("Cerca Elétrica Tradicional (fios tensionados)")}
                  className={`p-4 rounded-lg border text-left text-xs font-semibold transition-all ${
                    prefModelo === "Cerca Elétrica Tradicional (fios tensionados)"
                      ? "border-cyan-400 bg-cyan-950/20 text-white shadow-[0_0_10px_rgba(6,182,212,0.15)]"
                      : "border-slate-800 bg-slate-900/50 text-slate-400 hover:border-slate-700"
                  }`}
                >
                  <span className="block text-sm mb-1 text-white">⚡ Cerca Elétrica Tradicional</span>
                  Fios de aço inox discretos e alinhados que disparam alarme e aplicam choque.
                </button>
                <button
                  type="button"
                  onClick={() => setPrefModelo("Concertina (lâminas de aço helicoidais)")}
                  className={`p-4 rounded-lg border text-left text-xs font-semibold transition-all ${
                    prefModelo === "Concertina (lâminas de aço helicoidais)"
                      ? "border-cyan-400 bg-cyan-950/20 text-white shadow-[0_0_10px_rgba(6,182,212,0.15)]"
                      : "border-slate-800 bg-slate-900/50 text-slate-400 hover:border-slate-700"
                  }`}
                >
                  <span className="block text-sm mb-1 text-white">🌀 Concertina de Aço</span>
                  Espiras helicoidais com lâminas cortantes de alta inibição física visual.
                </button>
              </div>
            </div>

            {/* Step 2: Bairro/Tipo */}
            <div className="mb-10">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                2. O seu imóvel fica em condomínio fechado ou bairro com restrições visuais?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setTipoImovel("Condomínio Fechado / Bairro com restrição visual")}
                  className={`p-4 rounded-lg border text-left text-xs font-semibold transition-all ${
                    tipoImovel === "Condomínio Fechado / Bairro com restrição visual"
                      ? "border-cyan-400 bg-cyan-950/20 text-white shadow-[0_0_10px_rgba(6,182,212,0.15)]"
                      : "border-slate-800 bg-slate-900/50 text-slate-400 hover:border-slate-700"
                  }`}
                >
                  <span className="block text-sm mb-1 text-white">🏘️ Condomínio ou Bairro Restrito</span>
                  Exige soluções que preservem a harmonia arquitetônica (como cerca tradicional discreta).
                </button>
                <button
                  type="button"
                  onClick={() => setTipoImovel("Bairro Aberto / Sem restrição visual")}
                  className={`p-4 rounded-lg border text-left text-xs font-semibold transition-all ${
                    tipoImovel === "Bairro Aberto / Sem restrição visual"
                      ? "border-cyan-400 bg-cyan-950/20 text-white shadow-[0_0_10px_rgba(6,182,212,0.15)]"
                      : "border-slate-800 bg-slate-900/50 text-slate-400 hover:border-slate-700"
                  }`}
                >
                  <span className="block text-sm mb-1 text-white">🏢 Bairro Comercial ou Aberto</span>
                  Sem restrições visuais. Foco total em robustez, inibição e barreira perimetral bruta.
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

      {/* 5. DÚVIDAS FREQUENTES (FAQ) */}
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
              <p className="text-xs text-slate-400 leading-relaxed">A cerca elétrica tradicional fornece uma barreira com alarme sonoro integrado (caso o fio seja tocado ou cortado), além do choque. A concertina funciona exclusivamente como uma barreira física cortante brutal que inibe a invasão pelo risco de ferimentos sérios, mas não possui disparo de alarme elétrico nativo (embora possa ser integrada a sensores de fibra óptica em grandes perímetros).</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
