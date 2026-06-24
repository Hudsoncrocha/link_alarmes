import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Proteção Perimetral para Condomínios | Link Alarmes | Sensores de Barreira",
  description: "Cercas elétricas industriais de alta tensão, sensores de barreira ativos de múltiplos feixes e concertinas integradas com monitoramento 24h em São Paulo.",
  keywords: "protecao perimetral condominio, cerca eletrica industrial, sensores de barreira predial, seguranca perimetral, concertinas",
  alternates: {
    canonical: "/condominios/protecao-perimetral",
  },
};

export default function ProtecaoPerimetralCondominio() {
  const whatsappUrl = "https://wa.me/5511910984454?text=Olá!+Gostaria+de+solicitar+um+orçamento+para+Proteção+Perimetral+e+Barreiras+para+meu+Condomínio.";

  const dores = [
    {
      problema: "Invasores escalando muros com facilidade",
      solucao: "Instalamos cercas elétricas industriais com hastes robustas de alumínio de alta resistência e fios de aço inoxidável espessos sob alto tencionamento mecânico, gerando choques desestimulantes de alta voltagem sem letalidade."
    },
    {
      problema: "Disparos falsos sob chuva forte ou ventanias",
      solucao: "Nossos sensores de barreira ativos de múltiplos feixes infravermelhos exigem a interrupção simultânea de pelo menos dois feixes para gerar um alarme real, anulando disparos falsos causados por pássaros, folhas e galhos."
    },
    {
      problema: "Falta de ação preventiva no momento da invasão",
      solucao: "Interligamos os sensores perimetrais a holofotes de LED e sirenes locais de alta pressão de imediato no setor violado, assustando o invasor antes mesmo de ele encostar na estrutura física interna."
    }
  ];

  return (
    <div className="flex flex-col w-full bg-slate-950 text-slate-100 overflow-x-hidden font-sans">
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 border-b border-slate-900 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-950/20 via-slate-950 to-slate-950">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <Link href="/condominios" className="text-xs font-bold text-emerald-400 hover:underline uppercase tracking-wider mb-4 flex items-center gap-1.5">
            <span>←</span> Voltar para Condomínios
          </Link>
          <h1 className="max-w-4xl text-3xl font-extrabold tracking-tight text-white sm:text-5xl leading-tight">
            Proteção Perimetral Inteligente com Cercas Industriais e Sensores de Barreira.
          </h1>
          <p className="mt-6 max-w-3xl text-base text-slate-400 md:text-lg leading-relaxed">
            Bloqueie as tentativas de invasão na exata linha de divisa do seu condomínio. Projetos perimetrais robustos em AutoCAD desenhados sob a supervisão sênior do Hudson (+15 anos exp).
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href={whatsappUrl} className="btn-neon-emerald text-sm px-8 py-4 flex gap-2 items-center justify-center bg-gradient-to-r from-emerald-600 to-teal-500 border-none shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              Solicitar Projeto Perimetral
            </a>
          </div>
        </div>
      </section>

      {/* Como Combatemos as Dores Tradicionais */}
      <section className="py-20 bg-slate-950 border-b border-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-rose-500 uppercase tracking-widest bg-rose-950/20 border border-rose-500/10 px-3 py-1 rounded">
              Barreiras Físicas Ativas
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl mt-4">
              Crie uma Muralha Tecnológica Transponível Apenas Com Autorização
            </h2>
            <p className="mt-4 text-slate-400 text-sm">
              Sistemas de cerca fracos e amadores oxidam e dão disparos falsos constantes. Veja a confiabilidade que entregamos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dores.map((dor) => (
              <div key={dor.problema} className="card-tech p-6 border border-slate-900 hover:border-emerald-500/20 transition-all">
                <div className="text-rose-500 text-2xl mb-4">⚠️</div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2">{dor.problema}</h3>
                <div className="h-0.5 w-12 bg-slate-900 my-3"></div>
                <p className="text-xs text-slate-400 leading-relaxed mt-2">{dor.solucao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recursos Avançados */}
      <section className="py-20 bg-slate-900/30 border-b border-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl leading-tight">
                Hastes de Alumínio Maciço, Cabos Isolados Homologados e Eletrizadores
              </h2>
              <p className="mt-6 text-slate-400 text-sm leading-relaxed">
                Nossos projetos contam com centrais de choque industriais homologadas pelo INMETRO, garantindo que o choque emitido obedeça a rígidos limites de segurança humana, emitindo pulsos elétricos de alta tensão (até 18.000V) com baixíssima corrente amperimétrica.
              </p>
              
              <ul className="mt-6 space-y-4 text-xs font-semibold text-slate-200">
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                  <strong>Sensores Infravermelhos Ativos (IVA):</strong> Cria barreiras ópticas invisíveis perfeitas sobre muros ondulados ou passagens críticas.
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                  <strong>Cabos de Alta Isolação Blindados:</strong> Evitam fugas elétricas ao encostar em galhos molhados, prevenindo queima das placas de choque.
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                  <strong>Concertinas Integradas Eletrificadas:</strong> A fusão física perfeita entre a barreira cortante de aço galvanizado e fios de alta tensão.
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                  <strong>Suporte Técnico Rápido na Vila da Saúde:</strong> Atendimento ágil do Hudson para reparos de percursos perimetrais após sinistros.
                </li>
              </ul>
            </div>
            
            <div className="card-tech p-8 flex flex-col justify-between border border-emerald-500/10 min-h-[350px]">
              <div className="border-b border-slate-800 pb-2 flex items-center justify-between">
                <span className="text-slate-500 font-mono text-[10px]">// STATUS CENTRAL DE CHOQUE PERIMETRAL</span>
                <span className="glow-dot-emerald"></span>
              </div>
              <div className="space-y-4 text-xs font-mono text-emerald-400 py-6">
                <div>[✔] CENTRAL DE CHOQUE PREDIAL: OPERACIONAL</div>
                <div>[✔] VOLTAGEM DE OPERAÇÃO: 18.000V [PULSANTE]</div>
                <div>[✔] RETORNO DE SINAL DO LAÇO: 100% CONFORME</div>
                <div>[✔] LAÇO DE FEIXES INFRAVERMELHOS: ALINHADOS</div>
                <div>[✔] CONTROLE DE BATERIA SECUNDÁRIA: CARGA MÁXIMA</div>
              </div>
              <div className="border-t border-slate-800 pt-4 flex justify-between items-center text-[10px] text-slate-500">
                <span>Vila da Saúde - Projetos em AutoCAD</span>
                <span className="text-white bg-emerald-600 px-2.5 py-0.5 rounded font-extrabold uppercase">Sênior +15 Anos</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-slate-950 text-center">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-white sm:text-4xl">
            Vede o perímetro do seu condomínio contra riscos externos.
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
            Fale com a equipe de projetistas da Link Alarmes para dimensionar a melhor barreira de choque ou sensores ópticos de divisa em AutoCAD.
          </p>
          <div className="mt-8 flex justify-center">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-neon-emerald text-sm px-8 py-4 flex gap-2 items-center justify-center bg-gradient-to-r from-emerald-600 to-teal-500 border-none shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              Chamar no WhatsApp pelo Perímetro
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
