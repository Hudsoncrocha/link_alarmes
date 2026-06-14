import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CFTV e Câmeras de Segurança para Empresas | Link Alarmes",
  description: "Sistema de câmeras de segurança para comércios, indústrias e escritórios em São Paulo. Imagens em alta definição, gravação segura e suporte em conformidade com as leis.",
  keywords: "cftv empresarial, câmeras de segurança para empresas, monitoramento de câmeras corporativas, analítico de vídeo",
  alternates: {
    canonical: "/empresas/cftv-empresarial",
  },
};

export default function CftvEmpresarial() {
  const whatsappUrl = "/whatsapp?origin=cftv-empresarial";

  const dores = [
    {
      problema: "Segurança e Inibição",
      solucao: "A presença das câmeras inibe ações criminosas e reduz roubos e furtos, trazendo mais proteção para a sua empresa."
    },
    {
      problema: "Resolução de Conflitos",
      solucao: "As imagens gravadas servem como prova jurídica em caso de acidentes, desentendimentos internos ou disputas legais."
    },
    {
      problema: "Gestão Remota",
      solucao: "Acompanhe a rotina operacional em tempo real de onde estiver, direto pelo aplicativo do seu celular."
    },
    {
      problema: "Custo-Benefício",
      solucao: "Em empresas com estoques valiosos, o valor do sistema equivale a uma fração dos potenciais prejuízos que ele evita diariamente."
    }
  ];

  return (
    <div className="flex flex-col w-full bg-slate-950 text-slate-100 overflow-x-hidden font-sans">
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 border-b border-slate-900 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-950/20 via-slate-950 to-slate-950">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <Link href="/empresas" className="text-xs font-bold text-cyan-400 hover:underline uppercase tracking-wider mb-4 flex items-center gap-1.5">
            <span>←</span> Voltar para Empresas
          </Link>
          <h1 className="max-w-4xl text-3xl font-extrabold tracking-tight text-white sm:text-5xl leading-tight">
            Sistema de câmeras de segurança com foco no retorno do seu investimento.
          </h1>
          <p className="mt-6 max-w-3xl text-base text-slate-400 md:text-lg leading-relaxed">
            A grande maioria das empresas considera a instalação de câmeras um excelente investimento. O retorno vem na forma de prevenção, redução de furtos, diminuição de processos trabalhistas e aumento na produtividade da equipe.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-neon-blue text-sm px-8 py-4 flex gap-2 items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-500 border-none shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              Orçamento por WhatsApp
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
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-950/20 border border-cyan-500/10 px-3 py-1 rounded">
              Retorno e Prevenção
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl mt-4">
              Por que as empresas consideram as câmeras um bom negócio?
            </h2>
            <p className="mt-4 text-slate-400 text-sm">
              Evite prejuízos e acompanhe o funcionamento da sua empresa de onde estiver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dores.map((dor) => (
              <div key={dor.problema} className="card-tech p-6 border border-slate-900 hover:border-cyan-500/20 transition-all">
                <div className="text-cyan-400 text-2xl mb-4">🛡️</div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2">{dor.problema}</h3>
                <div className="h-0.5 w-12 bg-slate-900 my-3"></div>
                <p className="text-xs text-slate-400 leading-relaxed mt-2">{dor.solucao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cuidados e Exigências Legais */}
      <section className="py-20 bg-slate-900/30 border-b border-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl leading-tight">
                Cuidados e exigências legais para o seu monitoramento
              </h2>
              <p className="mt-6 text-slate-400 text-sm leading-relaxed">
                Para que o investimento realmente traga bons resultados e evite dores de cabeça, seguimos regras importantes de privacidade e legislação (LGPD e CLT):
              </p>
              
              <ul className="mt-6 space-y-4 text-xs font-semibold text-slate-200">
                <li className="flex items-start gap-3">
                  <span className="text-rose-500 font-bold">❌</span>
                  <span><strong>Respeito à Privacidade:</strong> É proibido instalar câmeras em banheiros, vestiários, salas de descanso ou refeitórios.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 font-bold">📝</span>
                  <span><strong>Aviso aos Colaboradores:</strong> Os funcionários devem ser avisados sobre o monitoramento. A transparência ajuda a manter um bom clima de trabalho.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 font-bold">🛡️</span>
                  <span><strong>Foco no Patrimônio:</strong> O monitoramento deve ser voltado exclusivamente para a segurança patrimonial e dos processos, nunca para a invasão da privacidade individual.</span>
                </li>
              </ul>
            </div>
            
            <div className="card-tech p-8 flex flex-col justify-between border border-cyan-500/10 min-h-[350px]">
              <div className="border-b border-slate-800 pb-2 flex items-center justify-between">
                <span className="text-slate-500 font-mono text-[10px]">// ECOSSISTEMA DE CÂMERAS B2B</span>
                <span className="glow-dot-cyan"></span>
              </div>
              <div className="space-y-4 text-xs font-mono text-cyan-400 py-6">
                <div>[✔] QUALIDADE DE IMAGEM: ALTA DEFINIÇÃO</div>
                <div>[✔] GRAVAÇÃO DAS IMAGENS: SEGURA E CONTÍNUA</div>
                <div>[✔] ACESSO REMOTO: CONFIGURADO NO CELULAR</div>
                <div>[✔] LEIS DE PRIVACIDADE: TOTALMENTE RESPEITADAS</div>
                <div>[✔] GARANTIA DA INSTALAÇÃO: ATIVA</div>
              </div>
              <div className="border-t border-slate-800 pt-4 flex justify-between items-center text-[10px] text-slate-500">
                <span>Vila da Saúde - São Paulo - SP</span>
                <span className="text-white bg-cyan-600 px-2.5 py-0.5 rounded font-extrabold uppercase">Mais de 15 Anos de Experiência</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tendências e Estimativas */}
      <section className="py-20 bg-slate-950 border-b border-slate-900">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900/20 border border-slate-900 p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-white mb-4">Planejando a instalação na sua empresa?</h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-6">
              Hoje, é possível encontrar pacotes de instalação que variam de acordo com a sua necessidade, com opções que vão desde sistemas básicos com acesso via celular até monitoramento inteligente com identificação de presença e alertas automatizados. Para te ajudarmos com uma estimativa melhor, fale com a nossa equipe e nos conte:
            </p>
            
            <ul className="space-y-3.5 text-xs text-slate-300 mb-8">
              <li className="flex items-center gap-2.5">
                <span className="text-cyan-400">🏢</span> Qual é o ramo de atuação da sua empresa (comércio, indústria, escritório)?
              </li>
              <li className="flex items-center gap-2.5">
                <span className="text-cyan-400">📐</span> Qual o tamanho aproximado da área que você precisa cobrir?
              </li>
              <li className="flex items-center gap-2.5">
                <span className="text-cyan-400">📹</span> Você tem interesse em monitorar áreas internas, externas ou ambas?
              </li>
            </ul>
            
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-neon-blue text-xs w-full sm:w-auto py-3.5 px-8 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 border-none shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              <span>Enviar Detalhes por WhatsApp</span>
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.62.963 3.203 1.493 4.716 1.495 5.495.002 9.965-4.469 9.968-9.97.001-2.664-1.034-5.169-2.915-7.052C16.535 1.744 14.04 .71 11.99.713 6.495.713 2.025 5.184 2.022 10.686c-.001 1.636.43 3.226 1.251 4.634L2.28 21.65l6.367-1.672-.001-.024z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-slate-950 text-center">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-white sm:text-4xl">
            Proteja o seu patrimônio e melhore a sua gestão
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
            Fale com a nossa equipe em São Paulo e solicite uma estimativa técnica personalizada sem compromisso.
          </p>
          <div className="mt-8 flex justify-center">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-neon-blue text-sm px-8 py-4 flex gap-2 items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-500 border-none shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              Orçamento pelo WhatsApp.
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
