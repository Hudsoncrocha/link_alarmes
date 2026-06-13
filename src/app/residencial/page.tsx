import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Soluções Residenciais | Link Alarmes | Segurança e Wi-Fi para sua Casa",
  description: "Alarmes inteligentes, câmeras de alta definição, controle de acesso e Wi-Fi estável para a sua residência em São Paulo. Fale com quem entende e garanta sua tranquilidade.",
  alternates: {
    canonical: "/residencial",
  },
};

export default function ResidencialPortal() {
  const whatsappUrl = "https://wa.me/5511910984454?text=Olá!+Gostaria+de+solicitar+um+orçamento+para+segurança+residencial.";

  const subSolutions = [
    {
      title: "Alarme Residencial",
      href: "/residencial/alarme-residencial",
      icon: "🚨",
      desc: "Sistemas contra invasão com sensores inteligentes imunes a animais de estimação. Evite sustos e acabe com os alarmes falsos de madrugada.",
      benefits: ["Central de alarme homologada", "Bateria interna de backup contra falta de luz", "Sensores para portas, portões e janelas"]
    },
    {
      title: "Câmeras Residenciais",
      href: "/residencial/cameras-residenciais",
      icon: "📹",
      desc: "Câmeras em alta definição com inteligência artificial para identificar pessoas e veículos. Acompanhe tudo em tempo real na palma da sua mão.",
      benefits: ["Gravação segura das imagens", "Visualização fácil pelo celular", "Detecção humana inteligente"]
    },
    {
      title: "Controle de Acesso",
      href: "/residencial/controle-de-acesso",
      icon: "🔑",
      desc: "Fechaduras biométricas, digitais e vídeo porteiros para controlar e registrar de forma simples a entrada no seu lar.",
      benefits: ["Abertura por aplicativo ou senha", "Histórico de acessos dos moradores", "Mais praticidade no dia a dia"]
    },
    {
      title: "Segurança Perimetral",
      href: "/residencial/seguranca-perimetral",
      icon: "🚧",
      desc: "Sensores externos de barreira e cercas eletrificadas para proteger os limites do seu terreno e evitar invasões.",
      benefits: ["Cercas elétricas instaladas sob norma", "Sensores de barreira discretos", "Proteção externa preventiva"]
    },
    {
      title: "Wi-Fi e Rede Residencial",
      href: "/residencial/wifi-residencial",
      icon: "📶",
      desc: "Organização de cabos e Wi-Fi Mesh de alta performance. Elimine o sinal ruim, quedas na Smart TV e a fiação solta pelos cantos da casa.",
      benefits: ["Internet estável em todos os cômodos", "Roteadores modernos sem travamento", "Cabeamento oculto e organizado"]
    },
    {
      title: "Casas de Alto Padrão",
      href: "/residencial/casa-alto-padrao",
      icon: "💎",
      desc: "Segurança planejada de forma discreta para residências amplas. Integração de alarmes, nobreaks, roteadores e infraestrutura sem cabos aparentes.",
      benefits: ["Projeto técnico sob medida", "Instalação invisível e limpa", "Conexão sem quedas para lazer e trabalho"]
    }
  ];

  return (
    <div className="flex flex-col w-full bg-slate-950 text-slate-100 overflow-x-hidden font-sans">
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 border-b border-slate-900 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-950/20 via-slate-950 to-slate-950">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <span className="text-xs font-bold text-blue-400 uppercase tracking-widest bg-blue-950/30 border border-blue-500/10 px-3.5 py-1.5 rounded-full mb-6">
            Soluções Residenciais
          </span>
          <h1 className="max-w-4xl text-3xl font-extrabold tracking-tight text-white sm:text-5xl leading-tight">
            Segurança inteligente e Wi-Fi estável para a sua casa.
          </h1>
          <p className="mt-6 max-w-3xl text-base text-slate-400 md:text-lg leading-relaxed">
            A sua casa é o lugar onde você e sua família devem se sentir mais seguros. Na Link Alarmes, ajudamos você a ter tranquilidade com sistemas de alarmes que funcionam de verdade e conexões Wi-Fi sem quedas. Nossos técnicos contam com mais de 15 anos de experiência para entregar a instalação que você precisa, sem complicações.
          </p>
          <div className="mt-8">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-neon-blue text-sm px-8 py-4 flex gap-2 items-center justify-center">
              Falar com a Link
            </a>
          </div>
        </div>
      </section>

      {/* Grid of Residential Services */}
      <section className="py-20 bg-slate-950 border-b border-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
              Nossa Tecnologia para a sua Casa
            </h2>
            <p className="mt-4 text-slate-400 text-sm">
              Clique em uma das soluções abaixo para saber mais detalhes sobre como podemos te ajudar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subSolutions.map((sol) => (
              <div key={sol.title} className="card-tech flex flex-col justify-between h-full border-blue-500/5 hover:border-blue-500/20 hover:shadow-[0_0_25px_rgba(59,130,246,0.1)] transition-all duration-300">
                <div>
                  <div className="h-12 w-12 rounded-lg bg-blue-950/30 border border-blue-800/50 flex items-center justify-center text-2xl mb-6">
                    {sol.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{sol.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-6">
                    {sol.desc}
                  </p>
                  
                  <ul className="space-y-2 mb-8 text-[11px] text-slate-300 border-t border-slate-900 pt-4">
                    {sol.benefits.map((b) => (
                      <li key={b} className="flex items-center gap-1.5">
                        <span className="text-blue-400">⚡</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link href={sol.href} className="btn-neon-outline text-xs w-full py-2.5 flex items-center justify-center gap-1">
                  Ver Detalhes da Solução
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dores & Objeções Resolvidas */}
      <section className="py-20 bg-slate-900/30 border-b border-slate-900">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl mb-8">
            Por que centenas de famílias escolheram a Link?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-slate-950 border border-slate-900 p-6 rounded-xl">
              <h4 className="text-sm font-bold text-rose-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                <span>⚠️</span> O Mercado Tradicional:
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-400 leading-relaxed">
                <li>❌ Sistemas instáveis que disparam de madrugada incomodando vizinhos.</li>
                <li>❌ Técnicos terceirizados sem identificação ou compromisso de prazo.</li>
                <li>❌ Contratos com fidelidades abusivas e reajustes ocultos.</li>
                <li>❌ Wi-Fi que cai na TV da sala e não chega nos quartos de cima.</li>
              </ul>
            </div>
            
            <div className="bg-slate-950 border border-slate-900 p-6 rounded-xl hover:border-blue-500/20 transition-all">
              <h4 className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                <span>🛡️</span> O Jeito Link Alarmes:
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-300 leading-relaxed">
                <li>✅ Sensores imunes a pets calibrados para evitar alarmes falsos.</li>
                <li>✅ Técnicos próprios com mais de 15 anos de experiência prática.</li>
                <li>✅ Contratos transparentes sem burocracia ou fidelidades que prendem você.</li>
                <li>✅ Sinal Wi-Fi cobrindo toda a área útil com velocidade real.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-slate-950 text-center">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-white sm:text-4xl">
            Sua família protegida e sua casa totalmente conectada.
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
            Fale com a nossa equipe de suporte em São Paulo e solicite uma visita técnica sem compromisso.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-neon-blue text-sm px-8 py-4 flex gap-2 items-center justify-center">
              Falar no WhatsApp
            </a>
            <Link href="/atendimento" className="btn-neon-outline text-sm px-8 py-4 flex items-center justify-center">
              Solicitar Contato Técnico
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
