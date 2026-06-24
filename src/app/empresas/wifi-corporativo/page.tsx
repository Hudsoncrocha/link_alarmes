import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wi-Fi Corporativo e Hotspot Social | Link Alarmes | Redes Sem Fio B2B",
  description: "Projetos de Wi-Fi 6 de alta densidade para empresas. Cobertura total sem pontos mortos, rede de convidados isolada e Hotspot social em conformidade com a LGPD.",
  keywords: "wi-fi corporativo, hotspot social lgpd, rede sem fio para empresas, access points empresariais, wi-fi 6 empresas",
  alternates: {
    canonical: "/empresas/wifi-corporativo",
  },
};

export default function WifiCorporativo() {
  const whatsappUrl = "https://wa.me/5511910984454?text=Olá!+Gostaria+de+solicitar+um+orçamento+para+Projetos+de+Wi-Fi+Corporativo+e+Hotspot+LGPD+para+minha+empresa.";

  const dores = [
    {
      problema: "Quedas de conexão ao caminhar pela empresa",
      solucao: "Implementamos tecnologia Fast Roaming (802.11k/r/v) de padrão empresarial. Seus colaboradores e diretores se deslocam livremente entre salas e andares sem que a chamada ou conexão caia."
    },
    {
      problema: "Clientes e hackers na mesma rede dos servidores",
      solucao: "Criamos redes Wi-Fi (SSIDs) totalmente isoladas através de VLANs gerenciáveis. Visitantes navegam na internet sem jamais visualizar ou ter acesso físico aos servidores e sistemas internos."
    },
    {
      problema: "Passar a senha do Wi-Fi de forma vulnerável no papel",
      solucao: "Substitua a tradicional senha compartilhada por um Hotspot inteligente com autenticação via redes sociais ou cadastro simplificado, blindando juridicamente sua empresa em conformidade com a LGPD e Marco Civil."
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
            Wi-Fi 6 Corporativo de Alta Densidade e Soluções de Hotspot Seguro.
          </h1>
          <p className="mt-6 max-w-3xl text-base text-slate-400 md:text-lg leading-relaxed">
            Acabe de vez com o sinal oscilante e roteadores residenciais que travam com mais de dez dispositivos conectados. Projetamos coberturas estáveis e robustas para escritórios, clínicas e galpões comerciais.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href={whatsappUrl} className="btn-neon-blue text-sm px-8 py-4 flex gap-2 items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-500 border-none shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              Projetar Cobertura Wi-Fi B2B
            </a>
          </div>
        </div>
      </section>

      {/* Como Combatemos as Dores Tradicionais */}
      <section className="py-20 bg-slate-950 border-b border-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-rose-500 uppercase tracking-widest bg-rose-950/20 border border-rose-500/10 px-3 py-1 rounded">
              Conectividade Sem Quedas
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl mt-4">
              Conexão Sem Fio Robusta Que Acompanha o Seu Crescimento
            </h2>
            <p className="mt-4 text-slate-400 text-sm">
              Roteadores domésticos de operadoras não aguentam o fluxo de uma equipe de trabalho ativa. Veja a nossa abordagem.
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
                Site Survey Avançado, Antenas Inteligentes e Gestão de Tráfego
              </h2>
              <p className="mt-6 text-slate-400 text-sm leading-relaxed">
                Antes de passar qualquer cabo de rede, realizamos um estudo detalhado de atenuação de barreiras (paredes de concreto, divisórias metálicas, etc) no local. Isso nos garante precisão na quantidade e posicionamento de cada Access Point, cobrindo 100% da área útil sem desperdícios.
              </p>
              
              <ul className="mt-6 space-y-4 text-xs font-semibold text-slate-200">
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                  <strong>Tecnologia Wi-Fi 6 (802.11ax):</strong> Maior eficiência energética, menor latência e altíssima imunidade contra interferências de redes vizinhas.
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                  <strong>Hotspot Social e LGPD:</strong> Termos de consentimento integrados e armazenamento seguro dos logs de acesso exigidos por lei corporativa.
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                  <strong>Múltiplos Access Points em Mesh / PoE:</strong> Alimentação direta pelo cabo de rede ethernet (sem fontes aparentes nas paredes de escritórios elegantes).
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                  <strong>Controle de Banda e Priorização:</strong> Limite a velocidade para downloads de convidados para garantir banda máxima para servidores e VoIP.
                </li>
              </ul>
            </div>
            
            <div className="card-tech p-8 flex flex-col justify-between border border-cyan-500/10 min-h-[350px]">
              <div className="border-b border-slate-800 pb-2 flex items-center justify-between">
                <span className="text-slate-500 font-mono text-[10px]">// DIAGNÓSTICO DE SITE SURVEY WI-FI B2B</span>
                <span className="glow-dot-cyan"></span>
              </div>
              <div className="space-y-4 text-xs font-mono text-cyan-400 py-6">
                <div>[✔] REDE DE OPERAÇÃO (VLAN 10): 100% ISOLADA</div>
                <div>[✔] REDE DE CONVIDADOS (VLAN 20): HOTSPOT LGPD ATIVO</div>
                <div>[✔] DENSIDADE DE DISPOSITIVOS: SUPORTA &gt; 150 EQUIPES</div>
                <div>[✔] COBERTURA DE ÁREA FÍSICA: 100% PASS [NO DEAD ZONES]</div>
                <div>[✔] POTÊNCIA DOS ANTENAS (AP): CONTROLADA DINAMICAMENTE</div>
              </div>
              <div className="border-t border-slate-800 pt-4 flex justify-between items-center text-[10px] text-slate-500">
                <span>Vila da Saúde - Projetos em AutoCAD</span>
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
            Sua empresa 100% conectada sem falhas de sinal.
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
            Fale hoje mesmo com nossa equipe e agende um diagnóstico técnico da qualidade do sinal Wi-Fi das suas instalações comerciais.
          </p>
          <div className="mt-8 flex justify-center">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-neon-blue text-sm px-8 py-4 flex gap-2 items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-500 border-none shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              Projetar Cobertura com o Hudson
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
