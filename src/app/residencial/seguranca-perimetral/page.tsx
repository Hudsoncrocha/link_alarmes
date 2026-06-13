import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cerca Elétrica Residencial | Link Alarmes",
  description: "Instalação de cerca elétrica industrial para proteção de residências em São Paulo. Hastes resistentes, central de 18.000V Intelbras e parcelamento em 6x.",
  keywords: "cerca elétrica, cerca elétrica residencial, proteção perimetral, central de choque, intelbras",
  alternates: {
    canonical: "/residencial/seguranca-perimetral",
  },
};

export default function SegurancaPerimetral() {
  const whatsappUrl = "https://wa.me/5511910984454?text=Olá!+Gostaria+de+solicitar+um+orçamento+para+cerca+elétrica+residencial.";

  const dores = [
    {
      problema: "Falta de tranquilidade",
      solucao: "Tenha paz de espírito à noite ou ao viajar. A cerca elétrica cria uma barreira física e visual eficiente que inibe a aproximação e a tentativa de invasão do seu imóvel."
    },
    {
      problema: "Cercas com fios soltos ou aparência ruim",
      solucao: "Evite cercas elétricas frágeis que ficam frouxas ou oxidadas rapidamente. Trabalhamos com hastes cantoneiras industriais e um sistema de ajuste de tensão separado por fio, mantendo a cerca sempre esticada e esteticamente bonita."
    },
    {
      problema: "Disparos falsos incomodando vizinhos",
      solucao: "Utilizamos centrais de choque inteligentes com 18.000 volts da Intelbras, calibradas de forma técnica para evitar alarmes falsos causados por pequenos contatos e garantir o disparo apenas em caso de corte de fio ou toque real."
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
            Cerca Elétrica Industrial e Proteção Perimetral para o Seu Lar.
          </h1>
          <p className="mt-6 max-w-3xl text-base text-slate-400 md:text-lg leading-relaxed">
            Garanta a tranquilidade da sua família ao sair de casa ou durante a noite. Instalação profissional de cercas elétricas resistentes, bonitas e eficientes em São Paulo.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-neon-blue text-sm px-8 py-4 flex gap-2 items-center justify-center">
              Falar no WhatsApp
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
              Barreira Física & Proteção Ativa
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl mt-4">
              Por que escolher a cerca elétrica da Link Alarmes?
            </h2>
            <p className="mt-4 text-slate-400 text-sm">
              Resolvemos os principais problemas de cercas perimetrais comuns do mercado.
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
                Cerca elétrica industrial: bonita, alinhada e extremamente eficiente
              </h2>
              <p className="mt-6 text-slate-400 text-sm leading-relaxed">
                Esqueça as instalações frágeis e com fios soltos. Nossas cercas elétricas residenciais são instaladas de forma a garantir durabilidade, excelente acabamento visual e total segurança no perímetro da sua propriedade.
              </p>
              
              <ul className="mt-6 space-y-4 text-xs font-semibold text-slate-200">
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                  Central de choque inteligente Intelbras com potência de 18.000V.
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                  Instalação limpa com hastes cantoneiras e acabamento de alto padrão.
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                  Sistema de ajuste individual de tensão por fio (cerca sempre esticada e bonita).
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                  Condições de pagamento flexíveis com parcelamento em até 6x.
                </li>
              </ul>
            </div>
            
            <div className="card-tech p-8 flex flex-col justify-between border border-cyan-500/10 min-h-[350px]">
              <div className="border-b border-slate-800 pb-2 flex items-center justify-between">
                <span className="text-slate-500 font-mono text-[10px]">// DIAGNÓSTICO DO SISTEMA PERIMETRAL ELETRÔNICO</span>
                <span className="glow-dot-emerald"></span>
              </div>
              <div className="space-y-4 text-xs font-mono text-cyan-400 py-6">
                <div>[✔] ELETRIFICADOR INTELBRAS: OPERANDO COM 18.000V</div>
                <div>[✔] HASTES CANTONEIRAS: ALINHADAS E RESISTENTES</div>
                <div>[✔] TENSÃO DOS FIOS: AJUSTE INDEPENDENTE ATIVO</div>
                <div>[✔] BATERIA DE BACKUP CENTRAL: 100% OPERANTE</div>
                <div>[✔] SISTEMA ANTI-SABOTAGEM: ATIVO E MONITORADO</div>
              </div>
              <div className="border-t border-slate-800 pt-4 flex justify-between items-center text-[10px] text-slate-500">
                <span>Vila da Saúde - São Paulo - SP</span>
                <span className="text-white bg-blue-600 px-2.5 py-0.5 rounded font-extrabold uppercase">Mais de 15 Anos de Experiência</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-slate-950 text-center">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-white sm:text-4xl">
            Proteja os limites da sua casa com quem entende.
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
            Solicite um orçamento sem compromisso e garanta proteção perimetral de qualidade com facilidade no pagamento.
          </p>
          <div className="mt-8 flex justify-center">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-neon-blue text-sm px-8 py-4 flex gap-2 items-center justify-center">
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
