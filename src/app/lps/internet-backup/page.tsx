import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Internet com Backup Automático e Failover 4G | Link Alarmes",
  description: "Acabe com a queda de internet no caixa e nas vendas da sua empresa. Nobreaks dedicados e failover automático de link 4G/GPRS secundário.",
  keywords: "internet backup empresa, failover 4g router, queda de internet caixa, nobreak para roteador, redundancia de link",
  alternates: {
    canonical: "/lps/internet-backup",
  },
};

export default function InternetBackup() {
  const whatsappUrl = "https://wa.me/5511910984454?text=Olá!+Gostaria+de+solicitar+um+orçamento+para+link+de+Internet+com+Backup+Automático+e+Nobreak+para+minha+empresa.";

  const dores = [
    {
      problema: "Máquinas de cartão offline e perda de vendas no caixa",
      solucao: "Instalamos roteadores inteligentes com failover automático. Se a fibra óptica principal cair, o tráfego é direcionado instantaneamente para uma conexão móvel 4G secundária, mantendo o caixa ativo."
    },
    {
      problema: "Queda de energia desligando os roteadores locais",
      solucao: "Colocamos Nobreaks senoidais de alta duração dedicados para manter o roteador, switch e antena 4G de contingência operacionais por horas mesmo durante bleautes no comércio local."
    },
    {
      problema: "A lentidão em arquivos na nuvem ao cair o link principal",
      solucao: "Configuramos balanceamento de carga inteligente (Load Balancing), priorizando conexões administrativas essenciais (emissão de notas, caixas) e bloqueando acessos supérfluos no backup."
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
            Internet Redundante com Failover Automático 4G e Nobreak para Empresas.
          </h1>
          <p className="mt-6 max-w-3xl text-base text-slate-400 md:text-lg leading-relaxed">
            Sua empresa não pode parar de vender por falha de sinal de operadoras. Projetamos e executamos soluções híbridas de redundância física de redes sob a supervisão do Hudson (+15 anos exp).
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-neon-blue text-sm px-8 py-4 flex gap-2 items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-500 border-none shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              Projetar Backup de Internet B2B
            </a>
            <Link href="/atendimento" className="btn-neon-outline text-sm px-8 py-4 flex items-center justify-center">
              Falar com Engenheiro Técnico
            </Link>
          </div>
        </div>
      </section>

      {/* Como Combatemos as Dores */}
      <section className="py-20 bg-slate-950 border-b border-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-rose-500 uppercase tracking-widest bg-rose-950/20 border border-rose-500/10 px-3 py-1 rounded">
              Conexão Sem Quedas
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl mt-4">
              Mantenha o Seu Caixa Emitindo Notas e Realizando Vendas
            </h2>
            <p className="mt-4 text-slate-400 text-sm">
              Um comércio offline perde clientes e faturamento a cada minuto. Veja a nossa blindagem técnica.
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
                Roteamento de Borda Multi-WAN, Nobreaks Senoidais e Racks Blindados
              </h2>
              <p className="mt-6 text-slate-400 text-sm leading-relaxed">
                Toda topologia de redundância corporativa desenhada pela Link Alarmes opera de forma autônoma. Seus colaboradores não precisam mudar de rede ou conectar cabos manualmente: o roteador de borda gerencia a falha em menos de um segundo sem derrubar downloads ativos.
              </p>
              
              <ul className="mt-6 space-y-4 text-xs font-semibold text-slate-200">
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                  <strong>Roteadores com Failover Automático Sub-Segundo:</strong> Mudança física de link sem interrupção de transações financeiras.
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                  <strong>Nobreaks de Onda Senoidal Pura:</strong> Alimentação limpa que protege chips de processadores delicados dos modems de operadoras.
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                  <strong>Acompanhamento AutoCAD e Rastreabilidade:</strong> Mapeamento do caminho elétrico do nobreak até os aparelhos da administração.
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                  <strong>Central Ativa de Diagnóstico na Vila da Saúde:</strong> Hudson e a equipe monitoram remotamente o status de perda de link.
                </li>
              </ul>
            </div>
            
            <div className="card-tech p-8 flex flex-col justify-between border border-cyan-500/10 min-h-[350px]">
              <div className="border-b border-slate-800 pb-2 flex items-center justify-between">
                <span className="text-slate-500 font-mono text-[10px]">// STATUS DO LINK REDUNDANTE B2B</span>
                <span className="glow-dot-cyan"></span>
              </div>
              <div className="space-y-4 text-xs font-mono text-cyan-400 py-6">
                <div>[✔] STATUS LINK PRINCIPAL (FIBRA): OFFLINE [Sinal perdido]</div>
                <div>[✔] MOTOR DE FAILOVER MULTI-WAN: ACIONADO EM 0.8s</div>
                <div>[✔] STATUS LINK CONTINGÊNCIA (4G): ATIVO / EM TRÁFEGO</div>
                <div>[✔] NOBREAK DO MODEM E SWITCH: OPERACIONAL [100% CARGA]</div>
                <div>[✔] ALERTA CENTRAL LINK ALARMES: ENVIADO PREVENTIVO</div>
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
            Sua empresa operando sem quedas e vendendo ininterruptamente.
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
            Consulte o Hudson para mapear e mitigar riscos de perda de conexão e dados com um projeto estruturado de balanceamento no AutoCAD.
          </p>
          <div className="mt-8 flex justify-center">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-neon-blue text-sm px-8 py-4 flex gap-2 items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-500 border-none shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              Chamar Engenharia no WhatsApp
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
