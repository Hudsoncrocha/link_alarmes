import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CFTV para Condomínios | Link Alarmes | Câmeras com Inteligência Artificial",
  description: "Monitoramento por câmeras de segurança de alta definição para condomínios. Inteligência artificial analítica para áreas comuns, garagens e perímetros.",
  keywords: "cftv condominio, câmeras de segurança predial, monitoramento de condomínios, câmeras inteligentes, cftv predial",
  alternates: {
    canonical: "/condominios/cftv",
  },
};

export default function CftvCondominio() {
  const whatsappUrl = "https://wa.me/5511910984454?text=Olá!+Gostaria+de+solicitar+um+orçamento+para+CFTV+e+Câmeras+para+meu+Condomínio.";

  const dores = [
    {
      problema: "Dificuldade absurda para auditar pequenos incidentes",
      solucao: "Nossos sistemas gravam de forma organizada e indexada por metadados de Inteligência Artificial. O síndico ou administrador localiza em segundos qualquer cena informando filtros básicos, como cor da roupa ou direção do movimento."
    },
    {
      problema: "Câmeras 'quebradas' ou sem gravar justo no momento do sinistro",
      solucao: "Implementamos sistemas de monitoramento ativo do estado de saúde dos equipamentos. Se uma câmera cair ou parar de gravar, nossa central na Vila da Saúde detecta o erro na hora e envia um alerta preventivo de manutenção."
    },
    {
      problema: "Invasões noturnas pelas divisas e pontos cegos",
      solucao: "Instalamos câmeras perimetrais com analítico de linha virtual. Em horários específicos, se alguém cruzar o topo do muro das divisas com terrenos vizinhos, um holofote de LED e sirenes locais disparam de forma preventiva de imediato."
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
            CFTV Inteligente para Condomínios com IA de Detecção de Comportamento.
          </h1>
          <p className="mt-6 max-w-3xl text-base text-slate-400 md:text-lg leading-relaxed">
            Tenha cobertura visual completa de garagens, guaritas, elevadores e perímetros sem pontos cegos. Projetos desenhados em AutoCAD e executados por nossa equipe técnica sênior (+15 anos exp).
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href={whatsappUrl} className="btn-neon-emerald text-sm px-8 py-4 flex gap-2 items-center justify-center bg-gradient-to-r from-emerald-600 to-teal-500 border-none shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              Projetar Câmeras para Condomínio
            </a>
          </div>
        </div>
      </section>

      {/* Como Combatemos as Dores Tradicionais */}
      <section className="py-20 bg-slate-950 border-b border-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-rose-500 uppercase tracking-widest bg-rose-950/20 border border-rose-500/10 px-3 py-1 rounded">
              Auditoria de Alta Resolução
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl mt-4">
              Chega de Imagens Pixeladas ou Incompatíveis Com a Lei
            </h2>
            <p className="mt-4 text-slate-400 text-sm">
              Garantimos a qualidade física e de gravação necessária para uso em investigações formais ou auditoria interna do condomínio.
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
                Gravação Redundante Híbrida e Detecção Perimetral Proativa
              </h2>
              <p className="mt-6 text-slate-400 text-sm leading-relaxed">
                Nossos gravadores NVR de nível predial contam com sistemas de armazenamento redundante em arranjo RAID, protegendo as imagens contra danos em discos. Além disso, criamos fluxos de backup externos em servidores em nuvem ultrasseguros.
              </p>
              
              <ul className="mt-6 space-y-4 text-xs font-semibold text-slate-200">
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                  <strong>Câmeras com Sensor Sony Starvis:</strong> Visão noturna colorida com riqueza de detalhes mesmo sob breu total.
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                  <strong>Analítico de Vadiagem (Loitering):</strong> Alertas instantâneos caso estranhos circulem longos períodos na calçada do condomínio.
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                  <strong>Cabeamento Metálico Blindado contra Ruídos:</strong> Infraestrutura profissional que evita chuviscos ou oscilações nas telas da guarita.
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                  <strong>Integração Completa AutoCAD e AS-BUILT:</strong> Facilidade total de manutenção futura devido ao mapeamento de fiações e caixas.
                </li>
              </ul>
            </div>
            
            <div className="card-tech p-8 flex flex-col justify-between border border-emerald-500/10 min-h-[350px]">
              <div className="border-b border-slate-800 pb-2 flex items-center justify-between">
                <span className="text-slate-500 font-mono text-[10px]">// STATUS CENTRAL DE CÂMERAS CONDOMINIAL</span>
                <span className="glow-dot-emerald"></span>
              </div>
              <div className="space-y-4 text-xs font-mono text-emerald-400 py-6">
                <div>[✔] NVR PREDIAL DE GESTÃO: ONLINE</div>
                <div>[✔] ARMAZENAMENTO REDUNDANTE RAID: ATIVO</div>
                <div>[✔] ANALÍTICO DE BARREIRA GARAGEM: ATIVO</div>
                <div>[✔] SINCRONISMO NUVEM HÍBRIDA: OPERACIONAL</div>
                <div>[✔] CÂMERAS DA GUARITA E ACESSOS: 100% OPERACIONAIS</div>
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
            Sua comunidade protegida com o que há de melhor em tecnologia.
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
            Consulte a equipe da Link Alarmes para um projeto AutoCAD preliminar do posicionamento das câmeras do seu condomínio.
          </p>
          <div className="mt-8 flex justify-center">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-neon-emerald text-sm px-8 py-4 flex gap-2 items-center justify-center bg-gradient-to-r from-emerald-600 to-teal-500 border-none shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              Projetar CFTV com o Hudson
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
