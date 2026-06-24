import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rede e Conexão Premium para Home Office | Link Alarmes",
  description: "Cabeamento de rede discreto de alta velocidade e Wi-Fi de alta performance priorizado para reuniões e VPNs de Home Office em São Paulo.",
  keywords: "rede home office, wifi veloz home office, cabeamento discreto casa, priorizacao trafego zoom teams, vpn corporativa casa",
  alternates: {
    canonical: "/lps/home-office",
  },
};

export default function HomeOfficeRede() {
  const whatsappUrl = "https://wa.me/5511910984454?text=Olá!+Gostaria+de+solicitar+um+orçamento+para+projeto+de+Rede+e+Wi-Fi+Premium+para+meu+Home+Office.";

  const dores = [
    {
      problema: "Quedas e lentidão em reuniões importantes (Zoom/Teams)",
      solucao: "Instalamos roteadores inteligentes e configuramos priorização de pacotes de tráfego de áudio e vídeo (QoS). Sua reunião corporativa ou acesso a VPNs empresariais não travam mesmo se outros moradores assistirem streaming 4K."
    },
    {
      problema: "Cabos de rede expostos cruzando salas elegantes",
      solucao: "Nossos instaladores seniores realizam a passagem de cabos Cat6 de cobre puro de forma totalmente invisível, utilizando rodapés decorativos, forros de gesso ou dutos discretos sem danificar as paredes."
    },
    {
      problema: "Wi-Fi travando por excesso de aparelhos domésticos",
      solucao: "Substituímos o roteador doméstico padrão da operadora por um Access Point robusto de padrão empresarial. Navegue e trabalhe com total velocidade e sem quedas inexplicáveis de sinal."
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
            Rede de Internet Premium e Cabeamento Discreto para Home Office.
          </h1>
          <p className="mt-6 max-w-3xl text-base text-slate-400 md:text-lg leading-relaxed">
            Tenha estabilidade absoluta de nível corporativo no conforto da sua residência. Projetos limpos, rápidos e de alta performance desenhados sob supervisão do Hudson (+15 anos exp).
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href={whatsappUrl} className="btn-neon-blue text-sm px-8 py-4 flex gap-2 items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-500 border-none shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              Projetar Rede para Home Office
            </a>
          </div>
        </div>
      </section>

      {/* Como Combatemos as Dores */}
      <section className="py-20 bg-slate-950 border-b border-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-rose-500 uppercase tracking-widest bg-rose-950/20 border border-rose-500/10 px-3 py-1 rounded">
              Conexão Profissional em Casa
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl mt-4">
              A Confiabilidade do Seu Trabalho Não Pode Depender de Redes Caseiras
            </h2>
            <p className="mt-4 text-slate-400 text-sm">
              Um home office profissional exige infraestrutura física e lógica que evite gargalos técnicos. Veja como trabalhamos.
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
                Priorização de Banda Inteligente, Nobreak e Acabamento Premium
              </h2>
              <p className="mt-6 text-slate-400 text-sm leading-relaxed">
                Nossos projetos residenciais de home office unem sofisticação física e eficiência lógica. Crimpamos e certificamos cabos de cobre puro Cat6 com conectores blindados e nobreaks discretos que mantêm modems e roteadores funcionando durante oscilações de energia comuns.
              </p>
              
              <ul className="mt-6 space-y-4 text-xs font-semibold text-slate-200">
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                  <strong>QoS Ativo para Zoom, Teams e Meet:</strong> Garantia de banda prioritária para reuniões online de videoconferência.
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                  <strong>Instalação Altamente Limpa e Discreta:</strong> Passagem inteligente de cabos sem gerar canaletas expostas ou danos à decoração.
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                  <strong>Nobreaks Compactos para Roteadores:</strong> Autonomia de energia de até 4 horas mantendo o sinal de Wi-Fi e fibra ativos.
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                  <strong>Mapeamento em AutoCAD e Engenharia Sênior:</strong> Hudson planeja os pontos ideais de conexão lógica em sua residência.
                </li>
              </ul>
            </div>
            
            <div className="card-tech p-8 flex flex-col justify-between border border-cyan-500/10 min-h-[350px]">
              <div className="border-b border-slate-800 pb-2 flex items-center justify-between">
                <span className="text-slate-500 font-mono text-[10px]">// STATUS DO LINK HOME OFFICE</span>
                <span className="glow-dot-cyan"></span>
              </div>
              <div className="space-y-4 text-xs font-mono text-cyan-400 py-6">
                <div>[✔] REDE PRIVADA CORPORATIVA: ATIVA [QoS PRIORITÁRIO]</div>
                <div>[✔] DISPOSITIVO ZOOM/TEAMS METADATA: LATÊNCIA &lt; 15ms</div>
                <div>[✔] CABEAMENTO DISCRETO CAT6: CERTIFICADO PASS [1 Gbps]</div>
                <div>[✔] NOBREAK DE TENSÃO ROTEADOR: OPERACIONAL</div>
                <div>[✔] SEGURANÇA E CRIPTOGRAFIA WI-FI: ATIVA WPA3</div>
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
            Sua jornada de trabalho produtiva, veloz e sem interrupções.
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
            Consulte a equipe técnica da Link Alarmes para um projeto residencial rápido de infraestrutura e conexões sob medida.
          </p>
          <div className="mt-8 flex justify-center">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-neon-blue text-sm px-8 py-4 flex gap-2 items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-500 border-none shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              Projetar Home Office com o Hudson
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
