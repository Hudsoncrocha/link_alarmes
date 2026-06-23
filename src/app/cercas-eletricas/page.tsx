import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Instalação de Cerca Elétrica e Proteção Perimetral | Link Alarmes",
  description: "Instalação rápida de cercas elétricas residenciais e industriais em São Paulo. Hastes resistentes, centrais Intelbras homologadas e parcelamento em 6x.",
  keywords: "cerca eletrica, instalação de cerca eletrica, cerca eletrica residencial, cerca eletrica industrial, concertina, proteção perimetral, intelbras",
  alternates: {
    canonical: "/cercas-eletricas",
  },
};

export default function CercasEletricas() {
  const whatsappUrl = "/whatsapp?origin=cercas-eletricas";

  const diferenciais = [
    {
      titulo: "Hastes Cantoneiras de Alta Resistência",
      desc: "Evite hastes frágeis que entortam com o vento. Trabalhamos exclusivamente com hastes robustas em alumínio ou ferro galvanizado cantoneira.",
      icon: "🛡️"
    },
    {
      titulo: "Central Intelbras de 18.000V",
      desc: "Equipamentos homologados pela ANATEL com descarga de alta tensão e baixíssima corrente (não letal, mas altamente inibidora).",
      icon: "⚡"
    },
    {
      titulo: "Ajuste de Tensão e Sem Disparos Falsos",
      desc: "Calibração técnica milimétrica e molas de inox em cada fio. A cerca fica sempre alinhada e esticada, evitando disparos causados por vento.",
      icon: "🎯"
    },
    {
      titulo: "Instalação Rápida em até 48h",
      desc: "Temos equipe técnica própria e estoque local pronto para iniciar e finalizar a instalação da sua cerca elétrica com rapidez.",
      icon: "📅"
    }
  ];

  const tipos = [
    {
      categoria: "Proteção Residencial",
      subtitulo: "Segurança ativa para sua família",
      descricao: "Cercas elétricas discretas, porém altamente inibidoras. Hastes de 4 ou 6 isoladores alinhadas perfeitamente com a estética do seu muro.",
      itens: ["Fiação em aço inox (não enferruja)", "Integração opcional com o alarme monitorado", "Sirene de alto volume inclusa", "Bateria de backup para falta de energia"]
    },
    {
      categoria: "Proteção Industrial / Comercial",
      subtitulo: "Segurança pesada para grandes perímetros",
      descricao: "Barreira física intransponível para galpões, comércios, escolas e condomínios. Hastes de maior espessura e maior distância entre fios.",
      itens: ["Hastes cantoneiras reforçadas", "Central de choque de longo alcance", "Zonas de alarme individualizadas no celular", "Placas de advertência regulamentadas inclusas"]
    }
  ];

  return (
    <div className="flex flex-col w-full bg-slate-950 text-slate-100 overflow-x-hidden font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative py-20 md:py-32 border-b border-slate-900 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-950/30 via-slate-950 to-slate-950">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-950/20 border border-cyan-500/10 px-3.5 py-1.5 rounded-full mb-6">
            Instalação & Manutenção em São Paulo
          </span>
          <h1 className="max-w-4xl text-3xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl leading-tight">
            Cercas Elétricas Robustas e{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 text-neon-cyan">
              Inibidoras
            </span>
          </h1>
          <p className="mt-6 max-w-3xl text-base text-slate-400 md:text-xl leading-relaxed">
            Proteção perimetral ativa com centrais inteligentes Intelbras. impeça invasões antes que elas aconteçam com instalação profissional em até 48h e parcelamento facilitado em até 6x.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link
              href={whatsappUrl}
              className="btn-neon-blue text-base px-8 py-4 flex gap-2 items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-500 border-none shadow-[0_0_15px_rgba(6,182,212,0.2)]"
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.62.963 3.203 1.493 4.716 1.495 5.495.002 9.965-4.469 9.968-9.97.001-2.664-1.034-5.169-2.915-7.052C16.535 1.744 14.04 .71 11.99.713 6.495.713 2.025 5.184 2.022 10.686c-.001 1.636.43 3.226 1.251 4.634L2.28 21.65l6.367-1.672-.001-.024z" />
              </svg>
              Orçamento Rápido por WhatsApp
            </Link>
            <Link
              href="/atendimento"
              className="btn-neon-outline text-base px-8 py-4 flex items-center justify-center"
            >
              Falar com Técnico
            </Link>
          </div>
        </div>
      </section>

      {/* 2. TIPOS DE ATENDIMENTO */}
      <section className="py-20 bg-slate-950 border-b border-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {tipos.map((tipo) => (
              <div key={tipo.categoria} className="card-tech p-8 border border-slate-900 hover:border-cyan-500/10 transition-all flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">{tipo.subtitulo}</span>
                  <h3 className="text-2xl font-bold text-white mt-2 mb-4">{tipo.categoria}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">{tipo.descricao}</p>
                  
                  <ul className="space-y-3.5 mb-8">
                    {tipo.itens.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-xs text-slate-200">
                        <span className="text-emerald-400 text-lg">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link
                  href={whatsappUrl}
                  className="btn-neon-outline w-full py-3.5 text-center text-xs tracking-wider uppercase font-bold"
                >
                  Solicitar Orçamento Deste Modelo
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. NOSSOS DIFERENCIAIS */}
      <section className="py-20 bg-slate-900/10 border-b border-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-950/20 border border-emerald-500/10 px-3 py-1 rounded">
              Tecnologia & Acabamento
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl mt-4">
              Por que a cerca da Link Alarmes é diferente?
            </h2>
            <p className="mt-4 text-slate-400 text-sm">
              Trabalhamos com materiais de alto padrão técnico e estético, eliminando problemas comuns de fios frouxos e oxidados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {diferenciais.map((d) => (
              <div key={d.titulo} className="card-tech p-6 border border-slate-900 hover:border-blue-500/20 transition-all flex flex-col justify-start">
                <span className="text-3xl mb-4 inline-block">{d.icon}</span>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3 leading-snug">{d.titulo}</h3>
                <div className="h-0.5 w-12 bg-slate-800 my-2"></div>
                <p className="text-xs text-slate-400 leading-relaxed mt-2">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DUPLA PROTEÇÃO (CÂMERAS + CERCA) */}
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
                A cerca elétrica impede a tentativa física de transpor o muro e avisa imediatamente em caso de corte. Já as câmeras com Inteligência Artificial registram a aproximação e enviam alertas reais para o seu celular. Juntas, formam o combo definitivo de segurança ativa.
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

    </div>
  );
}
