import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portaria Remota Inteligente | Link Alarmes | Economia Condominial",
  description: "Reduza em até 60% as despesas do seu condomínio com Portaria Remota. Tecnologia de ponta, atendimento ágil e segurança profissional ininterrupta.",
  keywords: "portaria remota, portaria virtual, economia taxa de condominio, portaria eletronica, seguranca portaria",
  alternates: {
    canonical: "/condominios/portaria-remota",
  },
};

export default function PortariaRemotaCondominio() {
  const whatsappUrl = "https://wa.me/5511910984454?text=Olá!+Gostaria+de+solicitar+um+estudo+de+viabilidade+técnica+e+financeira+de+Portaria+Remota+para+meu+Condomínio.";

  const dores = [
    {
      problema: "Taxas condominiais exorbitantes decorrentes de encargos",
      solucao: "A portaria remota substitui as altas despesas de escala de porteiros presenciais (incluindo horas extras, adicionais noturnos e faltas) por uma mensalidade técnica fixa, reduzindo os custos de portaria em até 60%."
    },
    {
      problema: "Vulnerabilidade e facilidade de rendição de porteiros",
      solucao: "Ao manter o atendente fisicamente isolado e blindado em nossa central de monitoramento, eliminamos o risco de o porteiro ser rendido sob mira de arma, garantindo ação de emergência fria e imediata."
    },
    {
      problema: "Faltas inexplicáveis ou cochilos na guarita",
      solucao: "Nossos operadores trabalham sob supervisão direta em turnos estruturados, com redundância de pessoal e auditoria digital de 100% dos eventos. Seu condomínio jamais ficará sem atendimento por um segundo sequer."
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
            Portaria Remota com Redução de Até 60% na Taxa de Condomínio.
          </h1>
          <p className="mt-6 max-w-3xl text-base text-slate-400 md:text-lg leading-relaxed">
            Profissionalismo absoluto na triagem de visitantes e prestadores de serviços. Protegemos o seu prédio com redundância total de links e energia sob a engenharia sênior do Hudson.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-neon-emerald text-sm px-8 py-4 flex gap-2 items-center justify-center bg-gradient-to-r from-emerald-600 to-teal-500 border-none shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              Mapear Viabilidade do Prédio
            </a>
            <Link href="/atendimento" className="btn-neon-outline text-sm px-8 py-4 flex items-center justify-center hover:border-emerald-500/50 hover:text-emerald-400">
              Falar com Engenheiro Técnico
            </Link>
          </div>
        </div>
      </section>

      {/* Como Combatemos as Dores Tradicionais */}
      <section className="py-20 bg-slate-950 border-b border-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-rose-500 uppercase tracking-widest bg-rose-950/20 border border-rose-500/10 px-3 py-1 rounded">
              Economia e Auditoria
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl mt-4">
              Por que a Portaria Virtual é a Melhor Escolha para Seu Caixa?
            </h2>
            <p className="mt-4 text-slate-400 text-sm">
              Mapeamos as fragilidades e as dores da portaria física comum e construímos um modelo blindado de atendimento digital.
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

      {/* Como Funciona a Tecnologia */}
      <section className="py-20 bg-slate-900/30 border-b border-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl leading-tight">
                Redundância Híbrida de Energia e Links de Fibra Óptica Dedicada
              </h2>
              <p className="mt-6 text-slate-400 text-sm leading-relaxed">
                Nossa maior prioridade é a estabilidade operacional da sua portaria. Instalamos geradores compactos locais ou bancos de Nobreaks senoidais industriais de altíssima autonomia nas guaritas, além de múltiplos links de internet (fibra principal e backup sem fio dedicado) que garantem a transmissão contínua das imagens e áudio de interfonia mesmo em bleautes totais na região de São Paulo.
              </p>
              
              <ul className="mt-6 space-y-4 text-xs font-semibold text-slate-200">
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                  <strong>Eclusas com Travas de Alta Pressão:</strong> Portões duplos magnéticos controlados logicamente que impedem a entrada direta na área interna.
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                  <strong>Atendimento Rápido via Interfonia IP:</strong> Comunicação HD sem ruídos de chiado com nossa equipe altamente treinada de operadores.
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                  <strong>Central Ativa de Monitoramento na Vila da Saúde:</strong> Próxima ao seu condomínio para garantir respostas e envio de suporte técnico emergencial em poucos minutos.
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                  <strong>Acompanhamento AutoCAD e Cronograma Técnico:</strong> Hudson supervisiona pessoalmente o mapeamento lógico e a transição operacional sem paradas.
                </li>
              </ul>
            </div>
            
            <div className="card-tech p-8 flex flex-col justify-between border border-emerald-500/10 min-h-[350px]">
              <div className="border-b border-slate-800 pb-2 flex items-center justify-between">
                <span className="text-slate-500 font-mono text-[10px]">// DIAGNÓSTICO GUARITA REMOTA</span>
                <span className="glow-dot-emerald"></span>
              </div>
              <div className="space-y-4 text-xs font-mono text-emerald-400 py-6">
                <div>[✔] CONEXÃO CENTRAL CENTRAL LINK: ATIVA</div>
                <div>[✔] LINK INTERNET 1 (FIBRA ÓPTICA): ONLINE [100 Mbps]</div>
                <div>[✔] LINK INTERNET 2 (MÓVEL 4G/GPRS): STANDBY OK</div>
                <div>[✔] NOBREAK DE CONTINGÊNCIA GUARITA: 100% CARGA</div>
                <div>[✔] PROTOCOLO DE PÂNICO SILENCIOSO: HOMOLOGADO</div>
              </div>
              <div className="border-t border-slate-800 pt-4 flex justify-between items-center text-[10px] text-slate-500">
                <span>Vila da Saúde - São Paulo - SP</span>
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
            Sane as contas do condomínio com segurança de elite.
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
            Agende uma apresentação técnica detalhada com o Hudson e descubra os números reais da redução da taxa condominial do seu prédio.
          </p>
          <div className="mt-8 flex justify-center">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-neon-emerald text-sm px-8 py-4 flex gap-2 items-center justify-center bg-gradient-to-r from-emerald-600 to-teal-500 border-none shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              Chamar Hudson pelo WhatsApp
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
