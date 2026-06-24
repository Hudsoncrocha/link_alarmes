import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wi-Fi e Rede Residencial | Link Alarmes | Internet Sem Quedas",
  description: "Rede residencial estruturada e Wi-Fi Mesh para casas grandes. Elimine o sinal fraco e as quedas de internet com profissionais experientes em São Paulo.",
  keywords: "Wi-Fi residencial, rede estruturada residencial, internet para casas grandes, Wi-Fi Mesh",
  alternates: {
    canonical: "/residencial/wifi-residencial",
  },
};

export default function WifiResidencial() {
  const whatsappUrl = "https://wa.me/5511910984454?text=Olá!+Gostaria+de+solicitar+um+orçamento+para+redes+e+Wi-Fi+residencial.";

  const dores = [
    {
      problema: "Zonas de sombra (Wi-Fi não pega)",
      solucao: "Chega de sinal fraco no quintal, no andar de cima ou em pontos específicos da casa. Planejamos e instalamos roteadores inteligentes Mesh com canais balanceados, cobrindo 100% da área útil do imóvel."
    },
    {
      problema: "Quedas e lentidão durante o uso",
      solucao: "Organizamos redes estruturadas com cabos dedicados para Smart TVs, videogames e computadores de Home Office, liberando a rede sem fio para celulares e tablets leves."
    },
    {
      problema: "Fios soltos e equipamentos desorganizados",
      solucao: "Instalamos fiação de rede de forma embutida e organizada de forma limpa. Organizamos roteadores e centrais em racks compactos e discretos."
    }
  ];

  return (
    <div className="flex flex-col w-full bg-slate-950 text-slate-100 overflow-x-hidden font-sans">
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 border-b border-slate-900 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-950/20 via-slate-950 to-slate-950">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <Link href="/residencial" className="text-xs font-bold text-cyan-400 hover:underline uppercase tracking-wider mb-4 flex items-center gap-1.5">
            <span>←</span> Voltar para Residencial
          </Link>
          <h1 className="max-w-4xl text-3xl font-extrabold tracking-tight text-white sm:text-5xl leading-tight">
            Wi-Fi Residencial de Alta Performance e Rede Sem Quedas.
          </h1>
          <p className="mt-6 max-w-3xl text-base text-slate-400 md:text-lg leading-relaxed">
            Elimine o sinal fraco de internet e tenha conexão estável em todos os cômodos da sua casa. Projetos de redes estruturadas planejados por especialistas experientes.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href={whatsappUrl} className="btn-neon-blue text-sm px-8 py-4 flex gap-2 items-center justify-center">
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Como Combatemos as Dores do Mercado */}
      <section className="py-20 bg-slate-950 border-b border-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-rose-500 uppercase tracking-widest bg-rose-950/20 border border-rose-500/10 px-3 py-1 rounded">
              Conexão Sem Limites
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl mt-4">
              Internet estável para trabalho, estudo e lazer de toda a família
            </h2>
            <p className="mt-4 text-slate-400 text-sm">
              Chega de internet ruim, travamento nas chamadas de Home Office ou buffering na hora de assistir ao seu filme preferido.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dores.map((dor) => (
              <div key={dor.problema} className="card-tech p-6 border border-slate-900 hover:border-blue-500/20 transition-all">
                <div className="text-rose-500 text-2xl mb-4">⚠️</div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2">{dor.problema}</h3>
                <div className="h-0.5 w-12 bg-slate-900 my-3"></div>
                <p className="text-xs text-slate-400 leading-relaxed mt-2">{dor.solucao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Características Técnicas da Solução */}
      <section className="py-20 bg-slate-900/30 border-b border-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl leading-tight">
                Cabeamento organizado e roteadores Mesh inteligentes
              </h2>
              <p className="mt-6 text-slate-400 text-sm leading-relaxed">
                Instalamos roteadores Mesh de alta performance para cobrir toda a casa de forma estável. Organizamos redes seguras e configuramos a fiação de forma embutida, garantindo melhor velocidade para Smart TVs, videogames e computadores de trabalho.
              </p>
              
              <ul className="mt-6 space-y-4 text-xs font-semibold text-slate-200">
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                  Transição automática de sinal entre roteadores (caminhe pela casa sem quedas na chamada de vídeo).
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                  Cabeamento de rede moderno de alta velocidade para conexões via cabo.
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                  Rede de convidados e dispositivos inteligentes configurada com segurança.
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                  Organização profissional de racks e infraestrutura limpa por profissionais experientes.
                </li>
              </ul>
            </div>
            
            <div className="card-tech p-8 flex flex-col justify-between border border-cyan-500/10 min-h-[350px]">
              <div className="border-b border-slate-800 pb-2 flex items-center justify-between">
                <span className="text-slate-500 font-mono text-[10px]">// DIAGNÓSTICO DE VELOCIDADE E LARGURA DE BANDA</span>
                <span className="glow-dot-emerald"></span>
              </div>
              <div className="space-y-4 text-xs font-mono text-cyan-400 py-6">
                <div>[✔] REDE MESH RESIDENCIAL: OPERANDO COM COBERTURA 100%</div>
                <div>[✔] LARGURA DE BANDA DE CABOS: CABEAMENTO ESTRUTURADO</div>
                <div>[✔] SUPORTE A DISPOSITIVOS: MÚLTIPLAS CONEXÕES ATIVAS</div>
                <div>[✔] LATÊNCIA DE REDE LOCAL: ESTÁVEL E TESTADA</div>
                <div>[✔] RACK DE EQUIPAMENTOS: ORGANIZADO E COM NOBREAK</div>
              </div>
              <div className="border-t border-slate-800 pt-4 flex justify-between items-center text-[10px] text-slate-500">
                <span>Vila da Saúde - São Paulo - SP</span>
                <span className="text-white bg-blue-600 px-2.5 py-0.5 rounded font-extrabold uppercase">Mais de 15 Anos de Experiência</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-slate-950 text-center">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-white sm:text-4xl">
            Sua casa inteira conectada com estabilidade e organização.
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
            Esqueça a internet que trava no meio do dia ou sinalizadores fracos. Solicite o contato da nossa equipe para ter internet estável de verdade.
          </p>
          <div className="mt-8 flex justify-center">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-neon-blue text-sm px-8 py-4 flex gap-2 items-center justify-center">
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
