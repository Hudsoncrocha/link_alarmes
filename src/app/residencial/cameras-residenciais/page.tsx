import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Câmeras Residenciais | Link Alarmes | Sistema de Câmeras Para Minha Casa",
  description: "Câmeras para casa de alta definição com IA para detecção humana e armazenamento seguro em nuvem. Acesse tudo do celular com equipe técnica experiente em São Paulo.",
  keywords: "câmeras para casa, CFTV residencial, monitoramento residencial, câmeras de segurança",
  alternates: {
    canonical: "/residencial/cameras-residenciais",
  },
};

export default function CamerasResidenciais() {
  const whatsappUrl = "https://wa.me/5511910984454?text=Olá!+Gostaria+de+solicitar+um+orçamento+para+câmeras+de+segurança+residenciais.";

  const dores = [
    {
      problema: "Imagens ruins",
      solucao: "Nossas câmeras têm imagem com qualidade HD. Identifique quem e o que acontece na sua residência: entregadores, prestadores de serviços, vizinhos e familiares."
    },
    {
      problema: "Instalações mal feitas com fios soltos",
      solucao: "Se a sua residência não tem uma infraestrutura própria para um sistema totalmente embutido, nós criamos uma infraestrutura discreta para acomodar e preservar cabos, conectores, câmeras e gravadores."
    },
    {
      problema: "Alto custo",
      solucao: "Nossos projetos serão de acordo com sua disponibilidade financeira. Parcele sua compra em até 6x e não deixe a sua segurança para depois."
    }
  ];

  return (
    <div className="flex flex-col w-full bg-slate-950 text-slate-100 overflow-x-hidden font-sans">
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 border-b border-slate-900 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-950/20 via-slate-950 to-slate-950">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <Link href="/residencial" className="text-xs font-bold text-cyan-400 hover:underline uppercase tracking-wider mb-4 flex items-center gap-1.5">
            <span>←</span> Voltar para Residencial
          </Link>
          <h1 className="max-w-4xl text-3xl font-extrabold tracking-tight text-white sm:text-5xl leading-tight">
            Sistema de câmeras de segurança com imagens HD, instalação limpa e acesso pelo celular.
          </h1>
          <p className="mt-6 max-w-3xl text-base text-slate-400 md:text-lg leading-relaxed">
            Acompanhe o dia a dia da sua residência pelo seu celular. Temos sistema de câmeras com ótima qualidade de imagem, instalação discreta e garantia de 1 ano.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-neon-blue text-sm px-8 py-4 flex gap-2 items-center justify-center">
              Orçamento por WhatsApp
            </a>
            <Link href="/atendimento" className="btn-neon-outline text-sm px-8 py-4 flex items-center justify-center">
              Solicitar Contato Técnico
            </Link>
          </div>
        </div>
      </section>

      {/* Como Combatemos as Dores do Mercado */}
      <section className="py-20 bg-slate-950 border-b border-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-rose-500 uppercase tracking-widest bg-rose-950/20 border border-rose-500/10 px-3 py-1 rounded">
              Tranquilidade e Praticidade
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl mt-4">
              Por que escolher as câmeras da Link Alarmes?
            </h2>
            <p className="mt-4 text-slate-400 text-sm">
              Sabemos o quanto é importante para você conseguir oferecer mais segurança para sua família e controle pra você.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dores.map((dor) => (
              <div key={dor.problema} className="card-tech p-6 border border-slate-900 hover:border-blue-500/20 transition-all">
                <div className="text-rose-500 text-2xl mb-4">⚠️</div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2">{dor.problema}</h3>
                <div className="h-0.5 w-12 bg-slate-900 my-3"></div>
                <p className="text-xs text-slate-400 leading-relaxed mt-2">{dor.solucao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Características Técnicas da Solução */}
      <section className="py-20 bg-slate-900/30 border-b border-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl leading-tight">
                Sistema de qualidade, acesso remoto, instalação rápida e discreta e facilidade de pagamento.
              </h2>
              <p className="mt-6 text-slate-400 text-sm leading-relaxed">
                Estamos disponíveis para uma visita técnica e te oferecer o sistema de câmeras que você precisa.
              </p>
              
              <ul className="mt-6 space-y-4 text-xs font-semibold text-slate-200">
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                  Visualização remota instantânea com transmissão otimizada para conexões de celular.
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                  Câmeras com alta resolução e instalação discreta.
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                  Tranquilidade em saber que a rotina da sua casa está na palma da sua mão.
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                  Projeto profissional e forma de pagamento flexível.
                </li>
              </ul>
            </div>
            
            <div className="card-tech p-8 flex flex-col justify-between border border-cyan-500/10 min-h-[350px]">
              <div className="border-b border-slate-800 pb-2 flex items-center justify-between">
                <span className="text-slate-500 font-mono text-[10px]">// DIAGNÓSTICO DIGITAL DE REDE E IMAGENS</span>
                <span className="glow-dot-emerald"></span>
              </div>
              <div className="space-y-4 text-xs font-mono text-cyan-400 py-6">
                <div>[✔] CÂMERAS CONFIGURADAS: OPERACIONAIS</div>
                <div>[✔] QUALIDADE DE VÍDEO: ALTA DEFINIÇÃO</div>
                <div>[✔] ANALÍTICO INTELIGENTE: DETECÇÃO HUMANA ATIVA</div>
                <div>[✔] BACKUP EM NUVEM: OPERANDO COM SEGURANÇA</div>
                <div>[✔] INFRAESTRUTURA DE CABOS: ORGANIZADA E EMBUTIDA</div>
              </div>
              <div className="border-t border-slate-800 pt-4 flex justify-between items-center text-[10px] text-slate-500">
                <span>Vila da Saúde - São Paulo - SP</span>
                <span className="text-white bg-blue-600 px-2.5 py-0.5 rounded font-extrabold uppercase">Mais de 15 anos de experiência</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-slate-950 text-center">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-white sm:text-4xl">
            Sua residência sob o seu olhar de onde você estiver.
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
            Fale com a nossa equipe em São Paulo e garanta uma instalação profissional sem dor de cabeça.
          </p>
          <div className="mt-8 flex justify-center">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-neon-blue text-sm px-8 py-4 flex gap-2 items-center justify-center">
              Orçamento pelo WhatsApp.
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
