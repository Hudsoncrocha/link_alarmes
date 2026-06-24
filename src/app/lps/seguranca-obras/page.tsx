import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Segurança para Canteiro de Obras | Link Alarmes",
  description: "Câmeras de monitoramento móveis e temporárias, alarmes perimetrais contra roubo de fiação de cobre e blindagem de ferramentas em canteiros de obras em SP.",
  keywords: "seguranca para obras, cameras canteiro de obras, roubo de fiacao de cobre, alarme temporario obra, monitoramento de obras",
  alternates: {
    canonical: "/lps/seguranca-obras",
  },
};

export default function SegurancaObras() {
  const whatsappUrl = "https://wa.me/5511910984454?text=Olá!+Gostaria+de+solicitar+um+orçamento+para+segurança+e+câmeras+de+monitoramento+temporárias+para+minha+Obra.";

  const dores = [
    {
      problema: "Roubo sistemático de fiação de cobre e ferramentas caras",
      solucao: "Instalamos sensores perimetrais e detectores de movimento provisórios ativos conectados a sirenes externas industriais de alto ruído, espantando invasores no momento em que invadem a divisa da obra."
    },
    {
      problema: "Falta de fiação elétrica definitiva e internet fixa",
      solucao: "Nossas centrais e câmeras temporárias operam de forma autônoma através de baterias e Nobreaks industriais de alta duração, transmitindo clips de vídeo via roteadores móveis 4G/GPRS redundantes."
    },
    {
      problema: "Câmeras vandalizadas ou roubadas por estarem em local vulnerável",
      solucao: "Montamos os equipamentos de captação de imagem e sirenes em postes metálicos elevados de alta resistência com blindagem protetora e gravação híbrida em nuvem em tempo real."
    }
  ];

  return (
    <div className="flex flex-col w-full bg-slate-950 text-slate-100 overflow-x-hidden font-sans">
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 border-b border-slate-900 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-950/20 via-slate-950 to-slate-950">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <Link href="/" className="text-xs font-bold text-cyan-400 hover:underline uppercase tracking-wider mb-4 flex items-center gap-1.5">
            <span>←</span> Voltar para Início
          </Link>
          <h1 className="max-w-4xl text-3xl font-extrabold tracking-tight text-white sm:text-5xl leading-tight">
            Monitoramento Temporário por Câmeras e Alarme Perimetral para Obras.
          </h1>
          <p className="mt-6 max-w-3xl text-base text-slate-400 md:text-lg leading-relaxed">
            Acabe com os enormes prejuízos causados pelo roubo de fios de cobre e materiais de construção no canteiro de obras. Projetos temporários de alta resistência supervisionados pelo Hudson (+15 anos exp).
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href={whatsappUrl} className="btn-neon-blue text-sm px-8 py-4 flex gap-2 items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-500 border-none shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              Projetar Segurança para Obra
            </a>
          </div>
        </div>
      </section>

      {/* Como Combatemos as Dores */}
      <section className="py-20 bg-slate-950 border-b border-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-rose-500 uppercase tracking-widest bg-rose-950/20 border border-rose-500/10 px-3 py-1 rounded">
              Prevenção Contra Roubos de Cobre
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl mt-4">
              Proteja Seu Canteiro de Obras Noturno com Barreiras Pró-Ativas
            </h2>
            <p className="mt-4 text-slate-400 text-sm">
              Um canteiro invadido causa atrasos caros no cronograma técnico e despesas com recomposição de cabos. Veja a nossa engenharia temporária.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dores.map((dor) => (
              <div key={dor.problema} className="card-tech p-6 border border-slate-900 hover:border-cyan-500/20 transition-all">
                <div className="text-rose-500 text-2xl mb-4">⚠️</div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2">{dor.problema}</h3>
                <div className="h-0.5 w-12 bg-slate-900 my-3"></div>
                <p className="text-xs text-slate-400 leading-relaxed mt-2">{dor.solucao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recursos Especiais */}
      <section className="py-20 bg-slate-900/30 border-b border-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl leading-tight">
                Câmeras Móveis Elevadas, Sensores IVA de Barreira e Cloud Híbrido
              </h2>
              <p className="mt-6 text-slate-400 text-sm leading-relaxed">
                Nossos sistemas de canteiro de obras são projetados para fácil reinstalação mecânica à medida que a obra avança em sua estrutura física. Mapeamos os pontos fracos em AutoCAD em cada etapa estrutural para reposicionamento dos sensores perimetrais preventivos.
              </p>
              
              <ul className="mt-6 space-y-4 text-xs font-semibold text-slate-200">
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                  <strong>Câmeras IP com Roteamento 4G Integrado:</strong> Sem fios de rede longos vulneráveis a cortes acidentais ou criminosos.
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                  <strong>Sensores Magnéticos em Containers de Ferramentas:</strong> Alerta imediato caso os depósitos trancados de equipamentos sejam forçados.
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                  <strong>Gravação em Nuvem Segura Síncrona:</strong> Impedindo perda física de provas em vídeo caso os gravadores locais sejam atacados.
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                  <strong>Diagnóstico e Assistência Técnica Vila da Saúde:</strong> Suporte ágil do Hudson para garantir pleno funcionamento diário do perímetro.
                </li>
              </ul>
            </div>
            
            <div className="card-tech p-8 flex flex-col justify-between border border-cyan-500/10 min-h-[350px]">
              <div className="border-b border-slate-800 pb-2 flex items-center justify-between">
                <span className="text-slate-500 font-mono text-[10px]">// STATUS CENTRAL MÓVEL OBRA</span>
                <span className="glow-dot-cyan"></span>
              </div>
              <div className="space-y-4 text-xs font-mono text-cyan-400 py-6">
                <div>[✔] STATUS ALARME PERIMETRAL CANTEIRO: ATIVO</div>
                <div>[✔] SENSORES DE ACESSO DO CONTAINER: ONLINE</div>
                <div>[✔] CONEXÃO CELULAR MÓVEL 4G: CONECTADA</div>
                <div>[✔] BATERIA DE BACKUP CENTRAL: CARGA 100%</div>
                <div>[✔] GRAVAÇÃO EM NUVEM EM TEMPO REAL: SINCRONIZADA</div>
              </div>
              <div className="border-t border-slate-800 pt-4 flex justify-between items-center text-[10px] text-slate-500">
                <span>Vila da Saúde - São Paulo - SP</span>
                <span className="text-white bg-cyan-600 px-2.5 py-0.5 rounded font-extrabold uppercase">Sênior +15 Anos</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-slate-950 text-center">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-white sm:text-4xl">
            Sua obra blindada contra furtos de fios e ferramentas.
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
            Consulte a Link Alarmes para um projeto AutoCAD temporário de segurança de canteiro de obras rápido e robusto.
          </p>
          <div className="mt-8 flex justify-center">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-neon-blue text-sm px-8 py-4 flex gap-2 items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-500 border-none shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              Chamar Hudson no WhatsApp
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
