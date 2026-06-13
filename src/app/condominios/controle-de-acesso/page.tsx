import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Controle de Acesso para Condomínios | Link Alarmes | Facial e LPR",
  description: "Controle de acesso facial ultrarrápido, eclusas seguras, leitor de placas veiculares LPR e tags criptografadas anti-clonagem para condomínios em São Paulo.",
  keywords: "controle de acesso condominio, leitor facial condominio, leitor de placa lpr, tags de garagem, seguranca predial",
  alternates: {
    canonical: "/condominios/controle-de-acesso",
  },
};

export default function ControleDeAcessoCondominio() {
  const whatsappUrl = "https://wa.me/5511910984454?text=Olá!+Gostaria+de+solicitar+um+orçamento+para+Controle+de+Acesso+para+meu+Condomínio.";

  const dores = [
    {
      problema: "Clonagem de tags de garagem e invasões veiculares",
      solucao: "Instalamos tags veiculares de alta frequência com criptografia militar anti-clonagem integrada a câmeras com inteligência LPR (Leitura de Placas). O portão só abre se o veículo cadastrado bater exatamente com a placa e a tag ativa."
    },
    {
      problema: "Abertura descuidada de eclusas (pedestres)",
      solucao: "Automatizamos eclusas de forma eletromecânica inteligente. O segundo portão só é liberado fisicamente quando o primeiro estiver totalmente fechado e travado, impedindo a carona indesejada (tailgating)."
    },
    {
      problema: "Filas de visitantes e prestadores na portaria",
      solucao: "Nossos softwares integrados permitem que moradores gerem pré-autorizações via aplicativo por meio de QR Codes dinâmicos enviados diretamente para o WhatsApp do visitante, agilizando a liberação."
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
            Controle de Acesso Condominial Inteligente, Facial e com Leitura de Placas.
          </h1>
          <p className="mt-6 max-w-3xl text-base text-slate-400 md:text-lg leading-relaxed">
            Elimine as brechas de segurança causadas por falhas humanas ou equipamentos antigos. Criamos e instalamos projetos integrados de alto padrão sob a supervisão sênior do Hudson.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-neon-emerald text-sm px-8 py-4 flex gap-2 items-center justify-center bg-gradient-to-r from-emerald-600 to-teal-500 border-none shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              Solicitar Projeto de Acesso Condominial
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
              Tecnologia Coletiva Blindada
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl mt-4">
              Proteção Absoluta para os Moradores Desde a Calçada
            </h2>
            <p className="mt-4 text-slate-400 text-sm">
              Sistemas residenciais comuns não aguentam o fluxo intenso e a necessidade de auditoria de um condomínio ativo. Veja como trabalhamos.
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
                Leitura Facial de Alta Velocidade e Interligação de Eclusas
              </h2>
              <p className="mt-6 text-slate-400 text-sm leading-relaxed">
                Toda eclusa projetada pela Link Alarmes conta com redundância de energia ativa no local. Em caso de queda na energia da rede, os leitores faciais e as travas eletromecânicas continuam operando normalmente, mantendo o condomínio seguro.
              </p>
              
              <ul className="mt-6 space-y-4 text-xs font-semibold text-slate-200">
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                  <strong>Reconhecimento Facial Anti-Fraude:</strong> Sensores binoculares que impedem acessos usando fotos ou reproduções de vídeo.
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                  <strong>Tags Veiculares Criptografadas:</strong> Frequências especiais protegidas de leitores amadores de clonagem de cartões de garagem.
                </li>
                <li className="flex items-center gap-3">
                  <strong>Pânico Silencioso Integrado:</strong> Botão ou dedicação facial de coação (ex: entrar usando o dedo indicador ou olhar específico) que dispara alerta silencioso imediato na central de monitoramento.
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                  <strong>Projetos AutoCAD Detalhados:</strong> Planejamento físico minucioso de passagem de dutos elétricos para evitar fiações expostas vulneráveis.
                </li>
              </ul>
            </div>
            
            <div className="card-tech p-8 flex flex-col justify-between border border-emerald-500/10 min-h-[350px]">
              <div className="border-b border-slate-800 pb-2 flex items-center justify-between">
                <span className="text-slate-500 font-mono text-[10px]">// STATUS ACESSO CONDOMINIAL</span>
                <span className="glow-dot-emerald"></span>
              </div>
              <div className="space-y-4 text-xs font-mono text-emerald-400 py-6">
                <div>[✔] LEITORES FACIAIS PORTARIA: ONLINE</div>
                <div>[✔] MOTOR DE LEITURA LPR VEÍCULOS: CONECTADO</div>
                <div>[✔] REDUNDÂNCIA DE TRAVA DE ECLUSA: OPERACIONAL</div>
                <div>[✔] EVENTOS DE ACESSO AUDITADOS POR MINUTO: 78 LOGS</div>
                <div>[✔] SERVIDOR DE ACESSO CONDOMINIAL: SINCRONIZADO</div>
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
            Segurança, agilidade e valorização real para o seu patrimônio.
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
            Consulte a equipe técnica da Link Alarmes para um projeto AutoCAD completo de controle de acesso para o seu condomínio.
          </p>
          <div className="mt-8 flex justify-center">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-neon-emerald text-sm px-8 py-4 flex gap-2 items-center justify-center bg-gradient-to-r from-emerald-600 to-teal-500 border-none shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              Falar com o Hudson pelo WhatsApp
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
