import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Infraestrutura de TI & Segurança LGPD | Link Alarmes | Redes Corporativas",
  description: "Organização completa de Racks, switches gerenciáveis L2/L3, Nobreaks senoidais de alta duração, aterramento elétrico e blindagem física sob conformidade LGPD.",
  keywords: "infraestrutura de ti, seguranca de dados lgpd, racks de rede, switches gerenciaveis, nobreaks senoidais",
  alternates: {
    canonical: "/empresas/infraestrutura-ti",
  },
};

export default function InfraestruturaTi() {
  const whatsappUrl = "https://wa.me/5511910984454?text=Olá!+Gostaria+de+solicitar+um+orçamento+para+Infraestrutura+de+TI+e+Segurança+LGPD+para+minha+empresa.";

  const dores = [
    {
      problema: "Equipamentos de TI travando sem explicação",
      solucao: "Instalamos Nobreaks senoidais de nível online com dupla conversão e banco de baterias redundante. Estabiliza a tensão contra surtos elétricos e mantém switches e servidores ligados por horas após quedas de luz."
    },
    {
      problema: "Falha de comunicação e lentidão em switches comuns",
      solucao: "Substituímos switches domésticos (burros) por switches gerenciáveis Layer 2 e Layer 3 de alto desempenho. VLANs isoladas, controle de tráfego (QoS) e monitoramento de saúde de portas ativo."
    },
    {
      problema: "Vulnerabilidade física de dados críticos (LGPD)",
      solucao: "Protegemos fisicamente a central de dados da sua empresa. Racks de TI trancados e blindados com chaves biométricas, monitoramento por câmera térmica e alertas de abertura não autorizada."
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
            Infraestrutura de TI Robusta e Proteção Física de Dados para a LGPD.
          </h1>
          <p className="mt-6 max-w-3xl text-base text-slate-400 md:text-lg leading-relaxed">
            Seus servidores e sistemas cruciais merecem alimentação ininterrupta, organização impecável e segurança absoluta. Projetos de infraestrutura de TI de alta confiabilidade por engenheiros seniores.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-neon-blue text-sm px-8 py-4 flex gap-2 items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-500 border-none shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              Projetar Infraestrutura de TI B2B
            </a>
            <Link href="/atendimento" className="btn-neon-outline text-sm px-8 py-4 flex items-center justify-center">
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
              Confiabilidade Sistêmica
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl mt-4">
              Proteja o Coração Tecnológico do Seu Negócio
            </h2>
            <p className="mt-4 text-slate-400 text-sm">
              Um switch queimado ou um servidor desligado inesperadamente geram custos inestimáveis de ociosidade operacional.
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

      {/* Recursos Avançados */}
      <section className="py-20 bg-slate-900/30 border-b border-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl leading-tight">
                Nobreaks Senoidais, switches Gerenciáveis L2/L3 e Racks de 19&quot;
              </h2>
              <p className="mt-6 text-slate-400 text-sm leading-relaxed">
                Nossos projetos integram soluções completas de redundância energética e roteamento avançado. Desenhamos o fluxo de climatização e nobreaks em AutoCAD para garantir que as baterias e switches operem na temperatura ideal, prolongando a vida útil do hardware.
              </p>
              
              <ul className="mt-6 space-y-4 text-xs font-semibold text-slate-200">
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                  <strong>Switches PoE (Power over Ethernet):</strong> Alimentação estável direta pelo cabo de rede para câmeras de CFTV e Access Points.
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                  <strong>Nobreaks de Dupla Conversão:</strong> Onda senoidal pura de alta qualidade, garantindo energia estável mesmo operando com geradores industriais barulhentos.
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                  <strong>Conformidade Física de Acesso LGPD:</strong> Instalação de fechaduras eletromagnéticas integradas e controle biométrico direto no rack de servidores corporativos.
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                  <strong>Mapeamento AS-BUILT do Projeto:</strong> Documentação completa de portas de switches, endereçamento IP de infraestrutura e rotas de energia.
                </li>
              </ul>
            </div>
            
            <div className="card-tech p-8 flex flex-col justify-between border border-cyan-500/10 min-h-[350px]">
              <div className="border-b border-slate-800 pb-2 flex items-center justify-between">
                <span className="text-slate-500 font-mono text-[10px]">// STATUS CENTRAL DE DADOS &amp; TI</span>
                <span className="glow-dot-cyan"></span>
              </div>
              <div className="space-y-4 text-xs font-mono text-cyan-400 py-6">
                <div>[✔] RACK PRINCIPAL 19&quot; BLINDADO: TRANCADO</div>
                <div>[✔] NOBREAK SENOIDAL: CARGA 100% [ONLINE]</div>
                <div>[✔] EXAUSTÃO/TEMPERATURA DO RACK: 21°C [OK]</div>
                <div>[✔] DETECTOR DE FUMAÇA DEDICADO: MONITORADO</div>
                <div>[✔] STATUS SWITCH GERENCIÁVEL: SINCRONIZADO</div>
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
            Segurança jurídica, blindagem de dados e infraestrutura infalível.
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
            Consulte a Link Alarmes para uma auditoria física do rack de servidores e cabeamento da sua empresa hoje mesmo.
          </p>
          <div className="mt-8 flex justify-center">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-neon-blue text-sm px-8 py-4 flex gap-2 items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-500 border-none shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              Falar com Engenheiro de Infraestrutura
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
