import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wi-Fi para Casas Grandes e Sobrados | Link Alarmes",
  description: "Elimine pontos mortos de internet em sua residência. Projetos de Wi-Fi Mesh e cabeamento estruturado de alta performance em São Paulo.",
  keywords: "wi-fi para casas grandes, sinal wifi ruim, wifi mesh sobrado, internet residencias grandes, repetidor wifi",
  alternates: {
    canonical: "/lps/wifi-casas-grandes",
  },
};

export default function WifiCasasGrandes() {
  const whatsappUrl = "https://wa.me/5511910984454?text=Olá!+Gostaria+de+solicitar+um+orçamento+para+projeto+de+Wi-Fi+para+minha+casa/sobrado.";

  const dores = [
    {
      problema: "Sinal caindo ou fraco nos quartos e andares superiores",
      solucao: "Instalamos Access Points cabeados interligados por fibra ou cobre em pontos estratégicos. O sinal de internet é distribuído com potência máxima em 100% da área construída e de lazer."
    },
    {
      problema: "Queda na conexão ao caminhar pelos cômodos",
      solucao: "Utilizamos tecnologia Seamless Roaming. Seus dispositivos se conectam automaticamente à antena mais próxima sem interromper sua chamada de vídeo ou download ao subir as escadas."
    },
    {
      problema: "Repetidores de tomada comuns travando toda hora",
      solucao: "Substitua extensores amadores por um projeto de rede estruturada profissional. Nossos equipamentos corporativos suportam mais de 100 aparelhos conectados sem jamais travar."
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
            Internet de Ultra Performance e Wi-Fi Sem Pontos Cegos em Casas Grandes.
          </h1>
          <p className="mt-6 max-w-3xl text-base text-slate-400 md:text-lg leading-relaxed">
            Acabe com a lentidão e reuniões travadas em casa. Projetamos coberturas sem fio perfeitas e estáveis para sobrados e condomínios fechados sob a supervisão do Hudson (+15 anos exp).
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-neon-blue text-sm px-8 py-4 flex gap-2 items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-500 border-none shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              Projetar Wi-Fi Residencial
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
              Conexão Sem Limites
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl mt-4">
              Diga Adeus à Conexão que Oscila Quando Você Mais Precisa
            </h2>
            <p className="mt-4 text-slate-400 text-sm">
              Casas grandes com paredes espessas exigem planejamento de radiofrequência profissional. Veja a nossa engenharia de cobertura.
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
                Estudo de Radiofrequência, Fixação Discreta e PoE
              </h2>
              <p className="mt-6 text-slate-400 text-sm leading-relaxed">
                Nossos projetos residenciais de alto padrão contam com equipamentos alimentados diretamente pelo cabo de rede (PoE), eliminando fontes de alimentação penduradas nas tomadas ou fios aparentes, mantendo a sofisticação da decoração da sua casa.
              </p>
              
              <ul className="mt-6 space-y-4 text-xs font-semibold text-slate-200">
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                  <strong>Múltiplos Access Points Mesh:</strong> Cobertura integrada operando sob o mesmo nome de rede e senha em toda a propriedade.
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                  <strong>Fiação Estruturada Invisível:</strong> Passagem discreta de cabos por tubulações de telefone ou sob rodapés decorados.
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                  <strong>Suporte Técnico Sênior Rápido:</strong> Atendimento direto do Hudson para configuração e otimização dos canais de frequência.
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                  <strong>Acompanhamento AutoCAD e AS-BUILT:</strong> Toda a topologia da rede residencial mapeada digitalmente para fácil manutenção.
                </li>
              </ul>
            </div>
            
            <div className="card-tech p-8 flex flex-col justify-between border border-cyan-500/10 min-h-[350px]">
              <div className="border-b border-slate-800 pb-2 flex items-center justify-between">
                <span className="text-slate-500 font-mono text-[10px]">// STATUS COBERTURA RESIDENCIAL MESH</span>
                <span className="glow-dot-cyan"></span>
              </div>
              <div className="space-y-4 text-xs font-mono text-cyan-400 py-6">
                <div>[✔] STATUS DA REDE MESH RESIDENCIAL: EXCELENTE</div>
                <div>[✔] DISPOSITIVOS SUPORTADOS SIMULTÂNEOS: &gt; 80</div>
                <div>[✔] VELOCIDADE MÉDIA ANDAR SUPERIOR: 650 Mbps</div>
                <div>[✔] IMUNIDADE CONTRA PAREDES DE CONCRETO: ATIVA</div>
                <div>[✔] CABOS E INJEÇÃO POE DO DISPOSITIVO: CONFORME</div>
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
            Sua casa 100% conectada com internet estável e veloz.
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
            Consulte a equipe da Link Alarmes para um projeto AutoCAD preliminar de posicionamento de Access Points para a sua residência.
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
