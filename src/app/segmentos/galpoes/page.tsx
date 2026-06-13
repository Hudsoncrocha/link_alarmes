import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Segurança para Galpões e Indústrias | Link Alarmes B2B",
  description: "CFTV de longo alcance, detecção de fumaça integrada, sensores de barreira ativos perimetrais e nobreaks de alta duração para galpões e indústrias em São Paulo.",
  keywords: "seguranca para galpoes, cameras de seguranca galpao, alarmes industriais, sensores de barreira ativos, deteccao de fumaca galpao",
  alternates: {
    canonical: "/segmentos/galpoes",
  },
};

export default function GalpoesSegmento() {
  const whatsappUrl = "https://wa.me/5511910984454?text=Olá!+Gostaria+de+solicitar+um+orçamento+de+segurança+e+câmeras+para+meu+Galpão/Indústria.";

  const dores = [
    {
      problema: "Grandes distâncias dificultando o CFTV convencional",
      solucao: "Instalamos câmeras IP de longo alcance com lentes varifocais motorizadas e inteligência PTZ. Acompanhe pátios de manobras e corredores longos com zoom óptico real sem perda de qualidade de imagem."
    },
    {
      problema: "Falsos alarmes noturnos por animais perambulando no galpão",
      solucao: "Esqueça disparos incômodos causados por pássaros, morcegos ou roedores. Nossos sensores infravermelhos industriais com tecnologia de dupla detecção (PI + Micro-ondas) filtram 100% dos ruídos mecânicos."
    },
    {
      problema: "Atraso crítico na detecção de fumaça em galpões de pé-direito alto",
      solucao: "Utilizamos sensores de fumaça lineares (Beam Detectors) de alta tecnologia que criam barreiras de feixe óptico a grandes alturas, identificando qualquer indício de fumaça sob tetos elevados em segundos."
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
            Engenharia de Segurança Eletrônica e Intrusão para Galpões e Indústrias.
          </h1>
          <p className="mt-6 max-w-3xl text-base text-slate-400 md:text-lg leading-relaxed">
            Proteja seus estoques de alto valor com o que há de melhor em tecnologia perimetral e CFTV de longo alcance. Projetos robustos desenhados em AutoCAD sob supervisão do Hudson (+15 anos exp).
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-neon-blue text-sm px-8 py-4 flex gap-2 items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-500 border-none shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              Projetar Segurança para Galpão
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
              Segurança Industrial Blindada
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl mt-4">
              Barreiras Físicas e Detecção Preventiva Sob a Óptica Industrial
            </h2>
            <p className="mt-4 text-slate-400 text-sm">
              Sistemas comerciais simples não dão conta da robustez e dimensões exigidas por um galpão. Veja como entregamos confiabilidade técnica.
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
                Câmeras Térmicas, Feixes Perimetrais de Múltipla Lente e Nobreaks Industriais
              </h2>
              <p className="mt-6 text-slate-400 text-sm leading-relaxed">
                Toda fiação externa instalada em nossos galpões industriais passa por conduítes de aço galvanizado blindados mecanicamente contra vandalismo por corte, além de centrais de alarme que operam com baterias redundantes de alta autonomia que suportam longos apagões regionais.
              </p>
              
              <ul className="mt-6 space-y-4 text-xs font-semibold text-slate-200">
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                  <strong>Câmeras com IA de Cruzamento de Linha:</strong> Alerta preventivo na central caso intrusos subam em muros ou pátios noturnos.
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                  <strong>Sensores Sísmicos em Paredes Divisórias:</strong> Protege o estoque contra arrombamento por marretas ou perfurações.
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                  <strong>Switches PoE Industriais de Alta Temperatura:</strong> Operação ininterrupta mesmo sob calor excessivo do teto de telhas metálicas.
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                  <strong>Acompanhamento AutoCAD e Documentação Técnica:</strong> Hudson mapeia fisicamente caminhos elétricos de fácil acesso para rápida manutenção.
                </li>
              </ul>
            </div>
            
            <div className="card-tech p-8 flex flex-col justify-between border border-cyan-500/10 min-h-[350px]">
              <div className="border-b border-slate-800 pb-2 flex items-center justify-between">
                <span className="text-slate-500 font-mono text-[10px]">// STATUS CENTRAL DE DADOS INDÚSTRIA</span>
                <span className="glow-dot-cyan"></span>
              </div>
              <div className="space-y-4 text-xs font-mono text-cyan-400 py-6">
                <div>[✔] CENTRAL DE INTRUSÃO INDUSTRIAL: MONITORADA 24H</div>
                <div>[✔] SENSORES SÍSMICOS DE ESTOQUE: ATIVOS / 0 RUÍDO</div>
                <div>[✔] SENSORES LINEARES DE FUMAÇA (BEAM): CONECTADOS</div>
                <div>[✔] NOBREAK SENOIDAL PRINCIPAL: 100% OPERACIONAL</div>
                <div>[✔] CABEAMENTO BLINDADO EXTERNO: CONFORME NORMAS</div>
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
            Seu estoque blindado e livre de vulnerabilidades operacionais.
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
            Consulte a equipe de engenharia da Link Alarmes para elaborar um projeto de segurança de galpão sob medida no AutoCAD.
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
