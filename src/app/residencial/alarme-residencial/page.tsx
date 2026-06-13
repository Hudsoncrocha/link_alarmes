import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Alarme Residencial | Link Alarmes | Segurança para sua Casa",
  description: "Proteção contra invasão com alarme residencial inteligente e sensores pet-immune. Sem fidelidades abusivas e com atendimento técnico especializado em São Paulo.",
  keywords: "alarme residencial, sistema de alarme para casa, monitoramento residencial, alarme inteligente",
  alternates: {
    canonical: "/residencial/alarme-residencial",
  },
};

export default function AlarmeResidencial() {
  const whatsappUrl = "https://wa.me/5511910984454?text=Olá!+Gostaria+de+solicitar+um+orçamento+para+alarme+residencial+monitorado.";

  const dores = [
    {
      problema: "Disparos falsos de madrugada",
      solucao: "Sensores inteligentes regulados de acordo com o ambiente, imunes a animais de estimação de até 20kg. Durma tranquilo sabendo que o alarme só dispara em caso de real ameaça perimetral."
    },
    {
      problema: "Fidelidades abusivas em contratos",
      solucao: "Trabalhamos sem contratos de fidelidade que prendem você por anos. Conquistamos sua confiança pela qualidade do serviço e suporte técnico dedicado."
    },
    {
      problema: "Corte de fiação ou energia",
      solucao: "Nossas centrais contam com bateria interna contra falta de energia e dupla conexão (Wi-Fi e chip de celular), garantindo o funcionamento mesmo se a internet ou a energia da rua forem cortadas."
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
            Sistema de Alarme Residencial Inteligente com preço justo e sem fidelidade abusiva.
          </h1>
          <p className="mt-6 max-w-3xl text-base text-slate-400 md:text-lg leading-relaxed">
            Saia de casa sem preocupação. Oferecemos um sistema de alarme monitorado com projeto sob medida para sua residência.
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

      {/* Como Combatemos as Dores Tradicionais */}
      <section className="py-20 bg-slate-950 border-b border-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-rose-500 uppercase tracking-widest bg-rose-950/20 border border-rose-500/10 px-3 py-1 rounded">
              Tranquilidade no dia a dia
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl mt-4">
              Por que escolher o alarme da Link?
            </h2>
            <p className="mt-4 text-slate-400 text-sm">
              Mapeamos as principais reclamações dos clientes sobre serviços tradicionais e desenvolvemos soluções focadas na sua tranquilidade.
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
                Alarme impede invasão: detecte o perigo antes que ele entre
              </h2>
              <p className="mt-6 text-slate-400 text-sm leading-relaxed">
                Acreditamos que a segurança ideal deve agir antes que o invasor entre na sua residência. Por isso, instalamos sensores discretos nas áreas externas, portas e janelas que identificam a invasão e disparam o alerta assim que os limites do terreno são ultrapassados.
              </p>
              
              <ul className="mt-6 space-y-4 text-xs font-semibold text-slate-200">
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                  Central de alarme inteligente com controle completo via aplicativo (arme, desarme, pânico silencioso).
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                  A central recebe o disparo do alarme e acessa a imagem do local no momento do disparo.
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                  Sensores magnéticos discretos para portas e janelas de vidro. Com a invasão identificada, a polícia é acionada imediatamente.
                </li>
              </ul>
            </div>
            
            <div className="card-tech p-8 flex flex-col justify-between border border-cyan-500/10 min-h-[350px]">
              <div className="border-b border-slate-800 pb-2 flex items-center justify-between">
                <span className="text-slate-500 font-mono text-[10px]">// STATUS CENTRAL DE MONITORAMENTO</span>
                <span className="glow-dot-emerald"></span>
              </div>
              <div className="space-y-4 text-xs font-mono text-cyan-400 py-6">
                <div>[✔] CONEXÃO CENTRAL LINK ALARMES: ATIVA</div>
                <div>[✔] BATERIA DE BACKUP: 100% OPERACIONAL</div>
                <div>[✔] CHIP MÓVEL SECUNDÁRIO: CONECTADO</div>
                <div>[✔] SENSORES PERIMETRAIS: ATIVOS</div>
                <div>[✔] SUPORTE TÉCNICO LOCAL: PRONTIDÃO 24H</div>
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
            Sua família merece tranquilidade e segurança de verdade.
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
            Fale com a nossa equipe de suporte em São Paulo e solicite uma visita técnica sem compromisso.
          </p>
          <div className="mt-8 flex justify-center">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-neon-blue text-sm px-8 py-4 flex gap-2 items-center justify-center">
              Quero um orçamento
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
