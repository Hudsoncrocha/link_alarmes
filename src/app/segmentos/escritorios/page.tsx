import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Segurança e Redes para Escritórios | Link Alarmes B2B",
  description: "Cabeamento Cat6 invisível, Wi-Fi 6 seguro de alta densidade e controle biométrico de salas de reunião para escritórios corporativos em São Paulo.",
  keywords: "seguranca para escritorios, redes wifi escritorios, cabeamento estruturado escritorio, controle de acesso corporativo",
  alternates: {
    canonical: "/segmentos/escritorios",
  },
};

export default function EscritoriosSegmento() {
  const whatsappUrl = "https://wa.me/5511910984454?text=Olá!+Gostaria+de+solicitar+um+orçamento+de+segurança+e+redes+para+meu+Escritório.";

  const dores = [
    {
      problema: "Lentidão em reuniões de vídeo e Wi-Fi caindo",
      solucao: "Instalamos redes sem fio corporativas Wi-Fi 6 com roteamento inteligente. Suporte a dezenas de conexões ativas simultâneas sem perdas de pacotes ou travamentos durante chamadas cruciais com investidores."
    },
    {
      problema: "Fiação exposta bagunçada estragando a arquitetura elegante",
      solucao: "Desenhamos o encaminhamento físico de cabos Cat6/Cat6A no AutoCAD para passar sob o piso elevado ou dentro de canaletas discretas, mantendo o ambiente de trabalho limpo e impecável."
    },
    {
      problema: "Falta de controle de salas críticas de reunião e diretoria",
      solucao: "Blindamos áreas estratégicas com fechaduras biométricas discretas integradas ao software central. Saiba quem acessou salas confidenciais e audite logs de entrada em poucos cliques."
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
            Wi-Fi Corporativo de Alta Densidade e Cabeamento Invisível para Escritórios.
          </h1>
          <p className="mt-6 max-w-3xl text-base text-slate-400 md:text-lg leading-relaxed">
            Elimine a lentidão e garanta um layout corporativo limpo e funcional. Projetamos e executamos infraestrutura de TI e controle de acesso facial sênior (+15 anos exp).
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href={whatsappUrl} className="btn-neon-blue text-sm px-8 py-4 flex gap-2 items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-500 border-none shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              Projetar Infraestrutura de Escritório
            </a>
          </div>
        </div>
      </section>

      {/* Como Combatemos as Dores */}
      <section className="py-20 bg-slate-950 border-b border-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-rose-500 uppercase tracking-widest bg-rose-950/20 border border-rose-500/10 px-3 py-1 rounded">
              Ambiente de Trabalho Otimizado
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl mt-4">
              Conectividade Sem Falhas e Blindagem Física dos Seus Dados
            </h2>
            <p className="mt-4 text-slate-400 text-sm">
              Trabalhamos em estreita colaboração com arquitetos corporativos para integrar redes e segurança sem interferir na estética.
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
                VLANs Seguras, Fast Roaming e Racks Otimizados
              </h2>
              <p className="mt-6 text-slate-400 text-sm leading-relaxed">
                Toda rede corporativa desenhada pela Link Alarmes garante que visitantes acessem a internet através de uma rede isolada em conformidade com as regras de segurança e proteção de dados da empresa, impedindo invasões laterais à rede dos servidores administrativos.
              </p>
              
              <ul className="mt-6 space-y-4 text-xs font-semibold text-slate-200">
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                  <strong>Fast Roaming Wi-Fi:</strong> Caminhe pelas salas do escritório mantendo chamadas VoIP estáveis e sem atrasos de tráfego.
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                  <strong>Fechaduras Eletromagnéticas em Vidro:</strong> Fixadores discretos e elegantes para portas de vidro pivotantes de recepção.
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                  <strong>Organização Completa Retroativa de TI:</strong> Hudson e a equipe desmontam e organizam racks antigos sem interrupções operacionais longas.
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                  <strong>Desenhos AutoCAD Técnicos:</strong> Mapeamento AS-BUILT entregue ao TI da empresa detalhando encaminhamentos e portas de switches.
                </li>
              </ul>
            </div>
            
            <div className="card-tech p-8 flex flex-col justify-between border border-cyan-500/10 min-h-[350px]">
              <div className="border-b border-slate-800 pb-2 flex items-center justify-between">
                <span className="text-slate-500 font-mono text-[10px]">// STATUS RACK DE TI CORPORATIVO</span>
                <span className="glow-dot-cyan"></span>
              </div>
              <div className="space-y-4 text-xs font-mono text-cyan-400 py-6">
                <div>[✔] REDE ADMINISTRATIVA (VLAN 10): ONLINE [1000 Mbps]</div>
                <div>[✔] ROAMING ACESS POINTS WI-FI: ATIVO / 0 DEAD ZONES</div>
                <div>[✔] FECHADURA DA DIRETORIA (BIOMETRIA): OPERACIONAL</div>
                <div>[✔] NOBREAK SENOIDAL DA TI: 100% CARGA [ONLINE]</div>
                <div>[✔] DIAGRAMA DE PORTAS DE REDE: ATUALIZADO</div>
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
            Produtividade contínua, ambiente de trabalho limpo e dados protegidos.
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
            Mapeie a rede e a segurança do seu escritório corporativo no AutoCAD com a consultoria sênior da Link Alarmes.
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
