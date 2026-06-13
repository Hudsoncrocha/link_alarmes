import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Segurança para Escolas e Colégios | Link Alarmes B2B",
  description: "Controle de acesso rígido para alunos, catracas de alta vazão, vídeo portaria e monitoramento perimetral preventivo com IA para colégios em São Paulo.",
  keywords: "seguranca para escolas, catracas escolares, controle de acesso alunos, cameras de seguranca colegio, portaria escolar",
  alternates: {
    canonical: "/segmentos/escolas",
  },
};

export default function EscolasSegmento() {
  const whatsappUrl = "https://wa.me/5511910984454?text=Olá!+Gostaria+de+solicitar+um+orçamento+de+segurança+e+acesso+para+minha+Escola/Colégio.";

  const dores = [
    {
      problema: "Entrada e saída desorganizada de alunos e riscos de sequestro",
      solucao: "Instalamos catracas eletrônicas de alta vazão com leitor facial e validação cruzada. O aluno menor de idade só é liberado para sair se a biometria do responsável cadastrado for validada no local em tempo real."
    },
    {
      problema: "Acesso de estranhos e vulnerabilidade no portão principal",
      solucao: "Criamos eclusas físicas de acesso de pedestres com vidros blindados e interfones IP com vídeo digital, garantindo que a triagem de terceiros, pais e entregadores seja feita 100% fora da escola."
    },
    {
      problema: "Muros baixos e facilidade de intrusão",
      solucao: "Protegemos as divisas com cercas industriais de alta tensão e sensores de feixe infravermelho ativo IVA, interligados a alertas sonoros e visuais na guarita no exato momento de qualquer toque."
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
            Segurança Cirúrgica e Controle Rígido de Acesso para Escolas e Colégios.
          </h1>
          <p className="mt-6 max-w-3xl text-base text-slate-400 md:text-lg leading-relaxed">
            Proteja a vida dos alunos e a tranquilidade dos pais. Desenvolvemos e executamos sistemas de catracas integradas e monitoramento ativo supervisionados pelo Hudson (+15 anos exp).
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-neon-blue text-sm px-8 py-4 flex gap-2 items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-500 border-none shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              Projetar Segurança para Colégio
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
              Ambiente Escolar Protegido
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl mt-4">
              Controle Absoluto de Fluxo e Barreiras Físicas Inteligentes
            </h2>
            <p className="mt-4 text-slate-400 text-sm">
              Mapeamos as principais vulnerabilidades de fluxo escolar e implementamos a blindagem adequada.
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
                Catracas Flap Rápidas, Integração contra Incêndios e Pânico
              </h2>
              <p className="mt-6 text-slate-400 text-sm leading-relaxed">
                Nossos projetos integram catracas eletrônicas que liberam automaticamente os braços mecânicos em caso de acionamento do alarme de incêndio, garantindo a evacuação segura e rápida das crianças conforme exigido pelo Corpo de Bombeiros.
              </p>
              
              <ul className="mt-6 space-y-4 text-xs font-semibold text-slate-200">
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                  <strong>Reconhecimento Facial Multi-Leitura:</strong> Capacidade de processamento de até 40 acessos por minuto por catraca, evitando atrasos.
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                  <strong>Integração com Software de Gestão de Alunos:</strong> Envio automático de SMS ou notificação aos pais quando o aluno cruza a catraca.
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                  <strong>Câmeras com IA de Perímetro:</strong> Linha virtual que dispara alertas na sala do diretor caso alguém suba nos muros externos.
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                  <strong>Projetos AutoCAD Detalhados:</strong> Planejamento físico dos braços e fechaduras para suportar anos de uso diário intenso.
                </li>
              </ul>
            </div>
            
            <div className="card-tech p-8 flex flex-col justify-between border border-cyan-500/10 min-h-[350px]">
              <div className="border-b border-slate-800 pb-2 flex items-center justify-between">
                <span className="text-slate-500 font-mono text-[10px]">// STATUS SISTEMA CATRACA ESCOLAR</span>
                <span className="glow-dot-cyan"></span>
              </div>
              <div className="space-y-4 text-xs font-mono text-cyan-400 py-6">
                <div>[✔] INTEGRIDADE DO FIRE-PANIC SYSTEM: HOMOLOGADO</div>
                <div>[✔] SERVIDOR DE DADOS ALUNOS: CONECTADO</div>
                <div>[✔] CATRACAS GUARITA PRINCIPAL: ONLINE [0.18s bio]</div>
                <div>[✔] SENSORES PERIMETRAIS QUADRA: ATIVOS</div>
                <div>[✔] NOBREAK DE CONTINGÊNCIA CATRACAS: 100% AUTONOMIA</div>
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
            Uma escola 100% protegida e pais plenamente tranquilos.
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
            Consulte o Hudson e desenhe em AutoCAD as barreiras físicas ideais de controle de acesso para o seu colégio. Solicite um orçamento.
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
