import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Segurança para Chácaras, Sítios e Fazendas | Link Alarmes",
  description: "Proteção perimetral por barreiras ativas de longa distância, alarmes robustos e conexões de internet via links redundantes 4G/Rádio para imóveis rurais.",
  keywords: "seguranca para chacaras, alarmes para fazendas, barreiras ativas sitio, internet rural backup, seguranca eletronica rural",
  alternates: {
    canonical: "/segmentos/chacaras-fazendas",
  },
};

export default function ChacarasFazendasSegmento() {
  const whatsappUrl = "https://wa.me/5511910984454?text=Olá!+Gostaria+de+solicitar+um+orçamento+de+segurança+e+alarmes+para+minha+Chácara/Sítio/Fazenda.";

  const dores = [
    {
      problema: "Grandes perímetros abertos vulneráveis a invasões laterais",
      solucao: "Instalamos sensores de barreira ativos IVA quadripolares de longa distância (até 250 metros lineares por par) que criam feixes infravermelhos invisíveis cruzando divisas de cercas e florestas."
    },
    {
      problema: "Falta de energia elétrica e linhas telefônicas locais",
      solucao: "Nossas centrais operam com Nobreaks de grande autonomia e bancos de bateria auxiliares de longa duração, associados a transmissores com chip móvel 4G/GPRS redundantes multi-operadora."
    },
    {
      problema: "Queima constante de equipamentos por raios e surtos",
      solucao: "Blindamos as câmeras e centrais externas com dispositivos de proteção contra surtos (DPS) profissionais nas linhas elétricas e de dados, mitigando queimas causadas por descargas atmosféricas."
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
            Segurança Inteligente e Barreiras Invisíveis de Longa Distância para Áreas Rurais.
          </h1>
          <p className="mt-6 max-w-3xl text-base text-slate-400 md:text-lg leading-relaxed">
            Proteja a sua família em viagens aos finais de semana para o interior. Sistemas de alarme e câmeras robustas com backup redundante sob a supervisão sênior do Hudson (+15 anos exp).
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href={whatsappUrl} className="btn-neon-blue text-sm px-8 py-4 flex gap-2 items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-500 border-none shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              Projetar Segurança para Sítio/Chácara
            </a>
          </div>
        </div>
      </section>

      {/* Como Combatemos as Dores */}
      <section className="py-20 bg-slate-950 border-b border-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-rose-500 uppercase tracking-widest bg-rose-950/20 border border-rose-500/10 px-3 py-1 rounded">
              Confiabilidade Rural
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl mt-4">
              Diga Adeus a Alarmes Falsos e Sistemas Incomunicáveis No Interior
            </h2>
            <p className="mt-4 text-slate-400 text-sm">
              Desenvolvemos sistemas que continuam transmitindo e protegendo mesmo sem energia, telefone fixo ou sob fortes intempéries.
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
                Cerca Elétrica de Grande Potência, Sensores IVA e DPS
              </h2>
              <p className="mt-6 text-slate-400 text-sm leading-relaxed">
                Nossos projetos contam com centrais de choque industriais homologadas de alto impacto e sensores de alarme calibrados especialmente para anular disparos de grandes animais ou correntes de vento térmicas, mantendo você informado em tempo real na tela do celular.
              </p>
              
              <ul className="mt-6 space-y-4 text-xs font-semibold text-slate-200">
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                  <strong>Sensores Infravermelhos Ativos (IVA):</strong> Barreiras invisíveis perimetrais de alto rendimento cobrindo grandes divisas.
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                  <strong>DPS de Alta Performance Integrado:</strong> Proteção física e digital contra queimas causadas por quedas frequentes de raios na região.
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                  <strong>Links Celulares Redundantes 4G/GPRS:</strong> Transmissão de eventos mesmo após fios de telefone estarem rompidos ou cortados.
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                  <strong>Acompanhamento AutoCAD e Cronograma Técnico:</strong> O Hudson planeja caminhos elétricos robustos de fácil conservação.
                </li>
              </ul>
            </div>
            
            <div className="card-tech p-8 flex flex-col justify-between border border-cyan-500/10 min-h-[350px]">
              <div className="border-b border-slate-800 pb-2 flex items-center justify-between">
                <span className="text-slate-500 font-mono text-[10px]">// STATUS CENTRAL DE DADOS CHÁCARA</span>
                <span className="glow-dot-cyan"></span>
              </div>
              <div className="space-y-4 text-xs font-mono text-cyan-400 py-6">
                <div>[✔] CENTRAL DE INTRUSÃO RURAL: OPERACIONAL</div>
                <div>[✔] REDUNDÂNCIA GPRS DUAL-CHIP: CONECTADO</div>
                <div>[✔] SISTEMA DE DPS CONTRA SURTOS: ATIVO [100% OK]</div>
                <div>[✔] SENSORES DE CERCAS FOTOELÉTRICOS: CONFORME</div>
                <div>[✔] BATERIA AUXILIAR DA CENTRAL: CARGA COMPLETA</div>
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
            Sua chácara protegida, conectada e tranquila nas viagens de fim de semana.
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
            Consulte a equipe técnica da Link Alarmes para dimensionar a barreira de choque ou sensores perimetrais ideais em AutoCAD.
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
