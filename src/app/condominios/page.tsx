import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Soluções para Condomínios | Link Alarmes | Portaria e Segurança Coletiva",
  description: "Redução de custos com portaria remota, controle de acesso facial, leitura de placas LPR, interfonia IP e CFTV de alta definição para condomínios em São Paulo.",
  alternates: {
    canonical: "/condominios",
  },
};

export default function CondominiosPortal() {
  const whatsappUrl = "https://wa.me/5511910984454?text=Olá!+Gostaria+de+solicitar+um+orçamento+para+segurança+e+tecnologia+para+meu+Condomínio.";

  const subSolutions = [
    {
      title: "Controle de Acesso",
      href: "/condominios/controle-de-acesso",
      icon: "🪪",
      desc: "Autenticação facial rápida de moradores, leitor de placas LPR para veículos e tags veiculares criptografadas. Chega de portões abertos por engano.",
      benefits: ["Acesso facial ultra rápido", "Leitor de placa LPR integrado", "Chaves virtuais QR Code para visitas"]
    },
    {
      title: "CFTV para Condomínios",
      href: "/condominios/cftv",
      icon: "📹",
      desc: "Câmeras inteligentes com inteligência artificial para monitoramento de áreas comuns, garagens e divisas. Detecção de atividades suspeitas 24h.",
      benefits: ["IA analítica de comportamento", "Monitoramento em tempo real", "Gravação redundante anti-sabotagem"]
    },
    {
      title: "Proteção Perimetral",
      href: "/condominios/protecao-perimetral",
      icon: "⚡",
      desc: "Cercas elétricas industriais, sensores de barreira ativos de múltiplos feixes e concertinas integradas com alertas automáticos na central.",
      benefits: ["Sensores de barreira ativos", "Cerca industrial de alta tensão", "Disparos setoriais precisos"]
    },
    {
      title: "Portaria Remota",
      href: "/condominios/portaria-remota",
      icon: "🏢",
      desc: "Redução drástica de até 60% na taxa condominial. Atendimento profissional de alta segurança com redundância total de energia e internet.",
      benefits: ["Economia financeira comprovada", "Zero riscos de processos trabalhistas", "Atendimento profissional 24h"]
    },
    {
      title: "Rede e Infraestrutura",
      href: "/condominios/infraestrutura",
      icon: "🔌",
      desc: "Cabeamento de fibra óptica de alta performance e interfonia IP completa. Converse com o morador com áudio e vídeo digital sem ruídos.",
      benefits: ["Interfonia IP com vídeo HD", "Rede de Fibra óptica condomínio", "Automação de eclusas robustas"]
    }
  ];

  return (
    <div className="flex flex-col w-full bg-slate-950 text-slate-100 overflow-x-hidden font-sans">
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 border-b border-slate-900 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-950/20 via-slate-950 to-slate-950">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-950/30 border border-emerald-500/10 px-3.5 py-1.5 rounded-full mb-6">
            Engenharia Predial e Condominial
          </span>
          <h1 className="max-w-4xl text-3xl font-extrabold tracking-tight text-white sm:text-5xl leading-tight">
            Redução de Custos e Blindagem de Segurança para Condomínios Inteligentes.
          </h1>
          <p className="mt-6 max-w-3xl text-base text-slate-400 md:text-lg leading-relaxed">
            Mitigue falhas humanas e reduza a taxa de condomínio em até 60%. Desenhamos e instalamos projetos integrados de controle de acesso, portaria remota e infraestrutura física sob a supervisão técnica do Hudson.
          </p>
          <div className="mt-8">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-neon-emerald text-sm px-8 py-4 flex gap-2 items-center justify-center bg-gradient-to-r from-emerald-600 to-teal-500 border-none shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              Falar com Engenheiro de Condomínios
            </a>
          </div>
        </div>
      </section>

      {/* Grid of Solutions */}
      <section className="py-20 bg-slate-950 border-b border-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
              Nossos Pilares para Condomínios
            </h2>
            <p className="mt-4 text-slate-400 text-sm">
              Soluções integradas de alta performance que garantem a segurança dos moradores e a valorização do patrimônio coletivo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subSolutions.map((sol) => (
              <div key={sol.title} className="card-tech flex flex-col justify-between h-full border-emerald-500/5 hover:border-emerald-500/20 hover:shadow-[0_0_25px_rgba(16,185,129,0.1)] transition-all duration-300">
                <div>
                  <div className="h-12 w-12 rounded-lg bg-emerald-950/30 border border-emerald-800/50 flex items-center justify-center text-2xl mb-6">
                    {sol.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{sol.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-6">
                    {sol.desc}
                  </p>
                  
                  <ul className="space-y-2 mb-8 text-[11px] text-slate-300 border-t border-slate-900 pt-4">
                    {sol.benefits.map((b) => (
                      <li key={b} className="flex items-center gap-1.5">
                        <span className="text-emerald-400">⚡</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link href={sol.href} className="btn-neon-outline text-xs w-full py-2.5 flex items-center justify-center gap-1 hover:border-emerald-500/50 hover:text-emerald-400">
                  Ver Detalhes do Projeto
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dores & Soluções no Condomínio */}
      <section className="py-20 bg-slate-900/30 border-b border-slate-900">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl mb-8">
            Mais Segurança Com Muito Menos Despesas Condominiais
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-slate-950 border border-slate-900 p-6 rounded-xl">
              <h4 className="text-sm font-bold text-rose-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                <span>⚠️</span> Falhas Comuns na Gestão de Condomínios:
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-400 leading-relaxed">
                <li>❌ Portaria presencial com custo altíssimo e passivo trabalhista constante.</li>
                <li>❌ Entrada e saída lenta de moradores e falha na triagem de visitas.</li>
                <li>❌ Interfonia analógica antiga chiando e sem identificação de quem atende.</li>
                <li>❌ Alarmes perimetrais dando disparos falsos frequentes perturbando a vizinhança.</li>
              </ul>
            </div>
            
            <div className="bg-slate-950 border border-slate-900 p-6 rounded-xl hover:border-emerald-500/20 transition-all">
              <h4 className="text-sm font-bold text-emerald-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                <span>🛡️</span> A Engenharia Inteligente Link Alarmes:
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-300 leading-relaxed">
                <li>✅ Portaria remota com economia real e atendimento altamente treinado.</li>
                <li>✅ Reconhecimento facial ágil nas eclusas de pedestres e LPR na garagem.</li>
                <li>✅ Interfonia IP digital HD com aplicativo no celular de cada morador.</li>
                <li>✅ Sensores perimetrais calibrados e integrados ao monitoramento ativo.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-slate-950 text-center">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-white sm:text-4xl">
            Modernize o seu condomínio com engenharia de alto nível.
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
            Solicite uma análise preliminar gratuita de segurança e viabilidade técnica financeira de portaria remota para o seu condomínio.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-neon-emerald text-sm px-8 py-4 flex gap-2 items-center justify-center bg-gradient-to-r from-emerald-600 to-teal-500 border-none shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              Chamar no WhatsApp
            </a>
            <Link href="/atendimento" className="btn-neon-outline text-sm px-8 py-4 flex items-center justify-center hover:border-emerald-500/50 hover:text-emerald-400">
              Agendar Reunião de Apresentação
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
