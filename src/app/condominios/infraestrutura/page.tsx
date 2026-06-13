import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rede e Interfonia IP para Condomínios | Link Alarmes | Fibra Óptica",
  description: "Projetos de cabeamento óptico condominial, interfonia IP HD com vídeo, automação de eclusas robustas e suporte sênior (+15 anos exp) em São Paulo.",
  keywords: "interfonia ip condominio, rede de fibra optica predial, interfonia com video, cabeamento condominial, automacao de eclusas",
  alternates: {
    canonical: "/condominios/infraestrutura",
  },
};

export default function InfraestruturaCondominio() {
  const whatsappUrl = "https://wa.me/5511910984454?text=Olá!+Gostaria+de+solicitar+um+orçamento+para+Projetos+de+Infraestrutura+de+Fibra+e+Interfonia+IP+para+meu+Condomínio.";

  const dores = [
    {
      problema: "Interfonia analógica antiga chiando ou sem sinal nas unidades",
      solucao: "Instalamos sistemas modernos de Interfonia IP 100% digitais. Acabe com ruídos e chiados na comunicação. Os moradores podem atender as chamadas e abrir portões com som e vídeo em HD através do celular."
    },
    {
      problema: "Queda constante na comunicação física entre blocos",
      solucao: "Substituímos cabos metálicos antigos propensos a oxidação e interferência eletromagnética por uma espinha dorsal (backbone) de Fibra Óptica robusta ligando todos os blocos e garagens."
    },
    {
      problema: "Portões e fechaduras quebrando em poucos meses",
      solucao: "Instalamos fechaduras eletromecânicas e eletroímãs de nível profissional com alta capacidade de retenção de impacto mecânico. Automação de eclusas projetada em AutoCAD para durar de verdade."
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
            Interfonia IP com Vídeo HD e Cabeamento Condominial em Fibra Óptica.
          </h1>
          <p className="mt-6 max-w-3xl text-base text-slate-400 md:text-lg leading-relaxed">
            Elimine as dores de manutenção constante com interfonia tradicional antiga. Desenvolvemos redes e cabeamentos digitais robustos para condomínios residenciais e comerciais de alta densidade.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-neon-emerald text-sm px-8 py-4 flex gap-2 items-center justify-center bg-gradient-to-r from-emerald-600 to-teal-500 border-none shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              Projetar Infraestrutura Condominial
            </a>
            <Link href="/atendimento" className="btn-neon-outline text-sm px-8 py-4 flex items-center justify-center hover:border-emerald-500/50 hover:text-emerald-400">
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
              Infraestrutura de Alto Padrão
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl mt-4">
              Modernize a Comunicação e Acabe Com Custos de Manutenção
            </h2>
            <p className="mt-4 text-slate-400 text-sm">
              Mapeamos os principais gargalos e despesas de manutenção física de fiação de condomínios antigos e redesenhamos tudo de forma digital.
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
                Fusão de Fibra, Interfonia IP HD com Vídeo e AutoCAD Profissional
              </h2>
              <p className="mt-6 text-slate-400 text-sm leading-relaxed">
                Nossos projetos integram interfones IP que conversam diretamente com aplicativos móveis. Se o morador estiver ausente do país, ele ainda consegue visualizar a chamada da portaria, conversar com o visitante e realizar a abertura autorizada da eclusa com total tranquilidade.
              </p>
              
              <ul className="mt-6 space-y-4 text-xs font-semibold text-slate-200">
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                  <strong>Lançamento de Fibra Monomodo/Multimodo:</strong> Fusão de fibra óptica local de baixíssima perda e grande largura de banda de dados.
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                  <strong>Vídeo Porteiros IP nas Portarias e Blocos:</strong> Telas coloridas HD com cancelamento de eco ativo e câmera grande-angular.
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                  <strong>Eclusas e Motores de Alta Velocidade:</strong> Motores inversores robustos que abrem e fecham portões de garagem em até 4 segundos.
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                  <strong>Documentação As-Built e AutoCAD Técnica:</strong> Organização impecável de racks locais de blocos e caminhos de fibra etiquetados.
                </li>
              </ul>
            </div>
            
            <div className="card-tech p-8 flex flex-col justify-between border border-emerald-500/10 min-h-[350px]">
              <div className="border-b border-slate-800 pb-2 flex items-center justify-between">
                <span className="text-slate-500 font-mono text-[10px]">// STATUS CENTRAL DE DADOS DO CONDOMÍNIO</span>
                <span className="glow-dot-emerald"></span>
              </div>
              <div className="space-y-4 text-xs font-mono text-emerald-400 py-6">
                <div>[✔] BACKBONE ÓPTICO BLOCOS: ATIVO / ZERO RUIDOS</div>
                <div>[✔] SERVIDOR DE INTERFONIA IP: CONECTADO</div>
                <div>[✔] TAXA DE PERDA DE SINAL DE FIBRA: &lt; 0.12 dB [PASS]</div>
                <div>[✔] NOBREAK DE REDE BLOCOS: OPERACIONAL</div>
                <div>[✔] STATUS SWITCH GIGABIT POE PREDIAL: ONLINE</div>
              </div>
              <div className="border-t border-slate-800 pt-4 flex justify-between items-center text-[10px] text-slate-500">
                <span>Vila da Saúde - São Paulo - SP</span>
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
            Uma infraestrutura estável, digital e livre de custos recorrentes de manutenção.
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
            Consulte o Hudson para mapear e modernizar a interfonia e o cabeamento físico do seu condomínio. Agende uma visita técnica corporativa gratuita.
          </p>
          <div className="mt-8 flex justify-center">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-neon-emerald text-sm px-8 py-4 flex gap-2 items-center justify-center bg-gradient-to-r from-emerald-600 to-teal-500 border-none shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              Chamar Hudson no WhatsApp
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
