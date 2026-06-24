import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Alarme Monitorado e Personalizado para Empresas | Link Alarmes",
  description: "Alarme monitorado corporativo sob medida em São Paulo. Fuja de pacotes genéricos e proteja sua empresa com análise de vulnerabilidade real e hardware próprio.",
  keywords: "alarme empresarial, alarme monitorado, sistema de alarme personalizado, segurança comercial, verisure vs adt vs customizado",
  alternates: {
    canonical: "/empresas/alarme-empresarial",
  },
};

export default function AlarmeEmpresarial() {
  const whatsappUrl = "/whatsapp?origin=alarme-empresarial";

  const vantagens = [
    {
      titulo: "Análise de Vulnerabilidade Real",
      icon: "🔍",
      desc: "Um projeto sob medida identifica os pontos fracos específicos do seu imóvel. Um pacote padrão pode ignorar um vão de telhado ou uma parede frágil nos fundos."
    },
    {
      titulo: "Equipamentos Adequados",
      icon: "⚙️",
      desc: "Empresas de nicho escalam a tecnologia certa. Um pet shop precisa de sensores imunes a animais; uma joalheria exige sensores de quebra de vidro; um galpão logístico demanda barreiras perimetrais de longo alcance. Sistemas genéricos usam os mesmos sensores básicos para todos."
    },
    {
      titulo: "Redução de Falsos Disparos",
      icon: "🛡️",
      desc: "Sensores errados geram alarmes falsos frequentes. Isso causa estresse, multas operacionais e a dessensibilização da central, que passa a não dar urgência ao seu chamado."
    },
    {
      titulo: "Custo-Benefício Inteligente",
      icon: "💰",
      desc: "Em vez de pagar aluguel perpétuo por equipamentos fechados de terceiros, o projeto próprio foca no investimento em hardware de ponta que pertence à sua empresa, reduzindo o custo da mensalidade apenas para o monitoramento técnico."
    }
  ];

  const beneficios = [
    {
      titulo: "Ação em Tempo Real",
      desc: "A central integrada acompanha disparos reais e aciona a polícia imediatamente."
    },
    {
      titulo: "Apoio Técnico Efetivo",
      desc: "Nossa equipe foca em uma manutenção preventiva evitando que seu sistema de alarme caia em descaso por gerar muitos disparos."
    },
    {
      titulo: "Controle Total",
      desc: "Relatórios precisos via aplicativo mostram quem armou, desarmou e os horários de acesso de funcionários."
    },
    {
      titulo: "Desconto no Seguro",
      desc: "Seguradoras oferecem reduções de 20% a 30% na apólice patrimonial se o projeto técnico for homologado."
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
            Alarme Monitorado e Personalizado para a Realidade do seu Negócio
          </h1>
          <p className="mt-6 max-w-3xl text-base text-slate-400 md:text-lg leading-relaxed">
            A maioria dos empresários considera o alarme monitorado um excelente investimento, mas quem realmente aprova destaca um fator crucial: o sistema precisa ser personalizado para a realidade do negócio.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link href={whatsappUrl} className="btn-neon-blue text-sm px-8 py-4 flex gap-2 items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-500 border-none shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              Orçamento de Alarme Customizado
            </Link>
          </div>
        </div>
      </section>

      {/* Customizado vs Pronto */}
      <section className="py-20 bg-slate-950 border-b border-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-950/20 border border-cyan-500/10 px-3 py-1 rounded">
              Customização vs Pacotes Prontos
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl mt-4">
              Por que sistemas de alarme de empresas com foco em quantidade de assinantes costumam falhar?
            </h2>
            <p className="mt-4 text-slate-400 text-sm leading-relaxed">
              Sistemas padronizados — como os pacotes prontos e focados em assinaturas de massa oferecidos por empresas famosas nas redes sociais — costumam ser superficiais. Eles pecam por tentar encaixar a mesma solução genérica em cenários com riscos e estruturas completamente diferentes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {vantagens.map((item) => (
              <div key={item.titulo} className="card-tech p-6 border border-slate-900 hover:border-cyan-500/20 transition-all">
                <div className="text-cyan-400 text-3xl mb-4">{item.icon}</div>
                <h3 className="text-base font-bold text-white mb-2">{item.titulo}</h3>
                <div className="h-0.5 w-12 bg-slate-900 my-3"></div>
                <p className="text-xs text-slate-400 leading-relaxed mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios Gerais Mantidos no Sistema Customizado */}
      <section className="py-20 bg-slate-900/30 border-b border-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl leading-tight">
                Toda a segurança e comodidade que a sua empresa exige
              </h2>
              <p className="mt-6 text-slate-400 text-sm leading-relaxed">
                Ao optar por um sistema customizado, você não abre mão de nada em termos de tecnologia e monitoramento. Todos os benefícios de proteção das grandes marcas são mantidos e aprimorados no seu projeto próprio:
              </p>
              
              <ul className="mt-6 space-y-4 text-xs font-semibold text-slate-200">
                {beneficios.map((item) => (
                  <li key={item.titulo} className="flex items-start gap-3">
                    <span className="text-cyan-400 font-bold">✔</span>
                    <span><strong>{item.titulo}:</strong> {item.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="card-tech p-8 flex flex-col justify-between border border-cyan-500/10 min-h-[350px]">
              <div className="border-b border-slate-800 pb-2 flex items-center justify-between">
                <span className="text-slate-500 font-mono text-[10px]">// INFRAESTRUTURA DE ALARME SOB MEDIDA</span>
                <span className="glow-dot-cyan"></span>
              </div>
              <div className="space-y-4 text-xs font-mono text-cyan-400 py-6">
                <div>[✔] ANÁLISE DE VULNERABILIDADE: EFETUADA</div>
                <div>[✔] EQUIPAMENTO: PROPRIEDADE DA SUA EMPRESA</div>
                <div>[✔] MENSALIDADE: APENAS MONITORAMENTO TÉCNICO</div>
                <div>[✔] CENTRAL DE CONTROLE: OPERAÇÃO 24H ATIVA</div>
                <div>[✔] RELATÓRIO DE ACESSOS: VIA APLICATIVO</div>
                <div>[✔] APÓLICE DE SEGURO: DESCONTO DE ATÉ 30%</div>
              </div>
              <div className="border-t border-slate-800 pt-4 flex justify-between items-center text-[10px] text-slate-500">
                <span>Engenharia de Segurança Link Alarmes</span>
                <span className="text-white bg-cyan-600 px-2.5 py-0.5 rounded font-extrabold uppercase">Sênior +15 Anos exp</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perguntas Planejamento */}
      <section className="py-20 bg-slate-950 border-b border-slate-900">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900/20 border border-slate-900 p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-white mb-4">Como seria o sistema ideal para você?</h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-6">
              Para desenharmos uma visão do que seria o sistema de alarme ideal para a realidade do seu negócio, compartilhe com a nossa equipe de engenharia:
            </p>
            
            <ul className="space-y-4 text-xs text-slate-300 mb-8">
              <li className="flex items-start gap-2.5">
                <span className="text-cyan-400">💼</span>
                <div>
                  <strong>Qual é o ramo de atividade da sua empresa</strong> e o nível de valor das mercadorias estocadas?
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-cyan-400">📐</span>
                <div>
                  <strong>Qual o tamanho aproximado do imóvel</strong> e se ele fica em rua aberta ou condomínio fechado?
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-cyan-400">💳</span>
                <div>
                  <strong>Você prefere comprar os equipamentos</strong> e contratar apenas o monitoramento ou busca um modelo de comodato/locação?
                </div>
              </li>
            </ul>
            
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-neon-blue text-xs w-full sm:w-auto py-3.5 px-8 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 border-none shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              <span>Falar com Especialista & Responder</span>
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
              Orçamento pelo WhatsApp
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
