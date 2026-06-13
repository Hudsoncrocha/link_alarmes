import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Segurança para Clínicas e Consultórios | Link Alarmes B2B",
  description: "Controle de acesso sem toque, monitoramento de temperatura para farmácias/vacinas e proteção física de dados LGPD para clínicas em São Paulo.",
  keywords: "segurança para clinicas, controle de acesso clinica, monitoramento de vacinas, lgpd consultorios, seguranca eletronica clinica",
  alternates: {
    canonical: "/segmentos/clinicas",
  },
};

export default function ClinicasSegmento() {
  const whatsappUrl = "https://wa.me/5511910984454?text=Olá!+Gostaria+de+solicitar+um+orçamento+de+segurança+e+acesso+para+minha+Clínica/Consultório.";

  const dores = [
    {
      problema: "Controle de contaminação e acessos manuais",
      solucao: "Instalamos controle de acesso facial sem toque de alta precisão. Colaboradores e médicos liberam portas e eclusas apenas com a face, mantendo a higiene asséptica exigida pelos protocolos de saúde."
    },
    {
      problema: "Perda de vacinas e medicamentos caros por queda de energia",
      solucao: "Instalamos sensores inteligentes de temperatura integrados ao alarme. Se a refrigeração de vacinas ou remédios sair da faixa ideal ou se faltar luz, nossa central 24h avisa os responsáveis no exato momento."
    },
    {
      problema: "Dados e prontuários de pacientes vulneráveis (LGPD)",
      solucao: "Protegemos fisicamente a central de servidores de prontuários. Racks de TI trancados e blindados com biometria facial, garantindo total conformidade física com a LGPD e evitando vazamentos."
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
            Engenharia de Segurança e Controle Asséptico para Clínicas e Consultórios.
          </h1>
          <p className="mt-6 max-w-3xl text-base text-slate-400 md:text-lg leading-relaxed">
            Proteja a privacidade dos seus pacientes e garanta a integridade física de medicamentos de alto valor. Projetos sob medida homologados por engenheiros seniores (+15 anos exp).
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-neon-blue text-sm px-8 py-4 flex gap-2 items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-500 border-none shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              Projetar Segurança para Clínica
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
              Conformidade em Saúde e LGPD
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl mt-4">
              Proteção Absoluta Contra Contaminações, Perdas e Vazamento de Dados
            </h2>
            <p className="mt-4 text-slate-400 text-sm">
              Desenvolvemos soluções para ambientes de saúde que unem higiene, privacidade e altíssima segurança.
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

      {/* Recursos Especiais para Clínicas */}
      <section className="py-20 bg-slate-900/30 border-b border-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl leading-tight">
                Integração de Sensores Térmicos, Eletroímãs Silenciosos e Câmeras HD
              </h2>
              <p className="mt-6 text-slate-400 text-sm leading-relaxed">
                Nossos projetos consideram a atmosfera acolhedora e silenciosa de uma clínica de saúde. Escolhemos fechaduras eletromecânicas e eletroímãs de funcionamento ultra silencioso e câmeras de design discreto (tipo dome) para não intimidar os pacientes.
              </p>
              
              <ul className="mt-6 space-y-4 text-xs font-semibold text-slate-200">
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                  <strong>Sensores Térmicos Homologados:</strong> Monitoramento contínuo das geladeiras de vacinas com histórico analítico de temperatura.
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                  <strong>Controle de Entrada de Consultórios:</strong> Permissões biométricas para garantir que apenas médicos cadastrados acessem salas de atendimento.
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                  <strong>Pânico Silencioso na Recepção:</strong> Botões de pânico sob a mesa para acionar socorro imediato de forma discreta em caso de coação.
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                  <strong>Projetos AutoCAD e Acompanhamento:</strong> Hudson coordena as passagens de dutos de forma invisível sob o forro de gesso decorado.
                </li>
              </ul>
            </div>
            
            <div className="card-tech p-8 flex flex-col justify-between border border-cyan-500/10 min-h-[350px]">
              <div className="border-b border-slate-800 pb-2 flex items-center justify-between">
                <span className="text-slate-500 font-mono text-[10px]">// DIAGNÓSTICO AMBIENTAL CLÍNICA</span>
                <span className="glow-dot-cyan"></span>
              </div>
              <div className="space-y-4 text-xs font-mono text-cyan-400 py-6">
                <div>[✔] TEMPERATURA REFRIGERADOR VACINAS: 4.2°C [OK]</div>
                <div>[✔] SISTEMA DE ACESSO BIOMÉTRICO (FACE): ONLINE</div>
                <div>[✔] BLINDAGEM RACK TI (LGPD): OPERACIONAL</div>
                <div>[✔] MONITORES DE PÂNICO RECEPÇÃO: CONECTADOS</div>
                <div>[✔] NOBREAK DE REDE E SERVIDORES: 100% CARGA</div>
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
            Sua clínica segura, asséptica e totalmente em conformidade com as leis.
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
            Consulte a Link Alarmes para um projeto AutoCAD minucioso de segurança e controle de fluxo para o seu espaço médico.
          </p>
          <div className="mt-8 flex justify-center">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-neon-blue text-sm px-8 py-4 flex gap-2 items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-500 border-none shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              Projetar com o Hudson
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
