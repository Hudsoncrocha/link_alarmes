import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Soluções Empresariais | Link Alarmes | Monitoramento de Alarme | Infraestrutura de TI e Segurança B2B",
  description: "Alarme Monitorado, Cabeamento estruturado, redes Wi-Fi 6 corporativas, controle de acesso biométrico e Sistema de Câmeras para comércios, indústrias e corporações em São Paulo.",
  alternates: {
    canonical: "/empresas",
  },
};

export default function EmpresasPortal() {
  const whatsappUrl = "https://wa.me/5511910984454?text=Olá!+Gostaria+de+solicitar+um+orçamento+para+segurança+e+redes+para+minha+empresa.";

  const subSolutions = [
    {
      title: "CFTV Empresarial",
      href: "/empresas/cftv-empresarial",
      icon: "📹",
      desc: "Sistema de câmeras com alta resolução e acesso no seu celular.",
      benefits: ["Resolução FullHD e 4k", "Instalação profissional", "30 dias de gravação"]
    },
    {
      title: "Alarme Empresarial",
      href: "/empresas/alarme-empresarial",
      icon: "🚨",
      desc: "Tenha um sistema de alarme monitorado com a melhor tecnologia do mercado.",
      benefits: ["Sensores industriais de porta e portões", "Sem disparos falsos", "Central monitorada 24h"]
    },
    {
      title: "Rede Estruturada",
      href: "/empresas/rede-estruturada",
      icon: "🔌",
      desc: "Projetos de cabeamento Cat6 e fibra óptica. Acabe com quedas na internet, lentidão e racks desorganizados.",
      benefits: ["Cabeamento certificado (CAT6/Fibra)", "Organização de Rack padrão TI", "Divisão da sua rede em setores isolados"]
    },
    {
      title: "Wi-Fi Corporativo",
      href: "/empresas/wifi-corporativo",
      icon: "📶",
      desc: "Redes sem fio corporativas com tecnologia Wi-Fi 6 de alta densidade. Cobertura estável para toda a sua equipe e visitantes de forma segura.",
      benefits: ["Wi-Fi 6 empresarial robusto", "Rede de convidados e Hotspot LGPD", "Sem quedas de sinal ou travamentos"]
    },
    {
      title: "Infraestrutura de TI & LGPD",
      href: "/empresas/infraestrutura-ti",
      icon: "🛡️",
      desc: "Switches gerenciáveis, nobreaks senoidais redundantes de alta duração e blindagem de dados corporativos de acordo com a LGPD.",
      benefits: ["Racks, Nobreaks e Switches robustos", "Segurança de dados e conformidade", "Suporte técnico sênior 24h/7d"]
    }
  ];

  return (
    <div className="flex flex-col w-full bg-slate-950 text-slate-100 overflow-x-hidden font-sans">
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 border-b border-slate-900 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-950/20 via-slate-950 to-slate-950">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-950/30 border border-cyan-500/10 px-3.5 py-1.5 rounded-full mb-6">
            Sistema de Segurança Corporativa
          </span>
          <h1 className="max-w-4xl text-3xl font-extrabold tracking-tight text-white sm:text-5xl leading-tight">
            Sistema de segurança e infraestrutura de rede profissional para sua empresa.
          </h1>
          <p className="mt-6 max-w-3xl text-base text-slate-400 md:text-lg leading-relaxed">
            Tenha um sistema de segurança robusto. Na Link Alarmes, desenvolvemos soluções sob medida de alta confiabilidade para escritórios, comércios, indústrias e galpões por projetistas com +15 anos exp.
          </p>
          <div className="mt-8">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-neon-blue text-sm px-8 py-4 flex gap-2 items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-500 border-none shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              Falar com a Link
            </a>
          </div>
        </div>
      </section>

      {/* Grid of B2B Services */}
      <section className="py-20 bg-slate-950 border-b border-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
              Conheça nossas soluções
            </h2>
            <p className="mt-4 text-slate-400 text-sm">
              Escolha o card com o serviço que você está procurando.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subSolutions.map((sol) => (
              <div key={sol.title} className="card-tech flex flex-col justify-between h-full border-cyan-500/5 hover:border-cyan-500/20 hover:shadow-[0_0_25px_rgba(6,182,212,0.1)] transition-all duration-300">
                <div>
                  <div className="h-12 w-12 rounded-lg bg-cyan-950/30 border border-cyan-800/50 flex items-center justify-center text-2xl mb-6">
                    {sol.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{sol.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-6">
                    {sol.desc}
                  </p>
                  
                  <ul className="space-y-2 mb-8 text-[11px] text-slate-300 border-t border-slate-900 pt-4">
                    {sol.benefits.map((b) => (
                      <li key={b} className="flex items-center gap-1.5">
                        <span className="text-cyan-400">⚡</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link href={sol.href} className="btn-neon-outline text-xs w-full py-2.5 flex items-center justify-center gap-1">
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

      {/* Dores & Objeções Rezolvidas no B2B */}
      <section className="py-20 bg-slate-900/30 border-b border-slate-900">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl mb-8">
            Conte com a Link como seu parceiro comercial
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-slate-950 border border-slate-900 p-6 rounded-xl">
              <h4 className="text-sm font-bold text-rose-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                <span>⚠️</span> Gargalos Comuns:
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-400 leading-relaxed">
                <li>❌ Quedas repentinas de internet que interrompem a comunicação interna.</li>
                <li>❌ Sistemas de câmeras com imagem ruim e que vivem dando problema.</li>
                <li>❌ Pessoas não autorizadas acessando livremente espaços restritos.</li>
                <li>❌ Alarme com disparos falsos na madrugada.</li>
              </ul>
            </div>
            
            <div className="bg-slate-950 border border-slate-900 p-6 rounded-xl hover:border-cyan-500/20 transition-all">
              <h4 className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                <span>🛡️</span> Soluções Link Alarmes:
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-300 leading-relaxed">
                <li>✅ Rede profissional com configuração separando acesso interno e clientes.</li>
                <li>✅ Sistema de câmeras IP com instalação profissional e imagem de qualidade.</li>
                <li>✅ Controle de acesso por biometria e facial.</li>
                <li>✅ Wi-Fi 6 corporativo de alta densidade suportando mais de 300 conexões.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-slate-950 text-center">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-white sm:text-4xl">
            Sua empresa blindada, conectada e produzindo no nível máximo.
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
            Agende uma visita técnica para projetos e orçamentos.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href={whatsappUrl} className="btn-neon-blue text-sm px-8 py-4 flex gap-2 items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-500 border-none shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              Chamar Técnico no WhatsApp
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
