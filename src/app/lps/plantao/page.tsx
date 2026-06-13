import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plantão Técnico & Suporte 24h | Link Alarmes",
  description: "Equipe técnica emergencial 24 horas de prontidão em Barreiras e LEM para solucionar quedas de rede e falhas de alarmes eletrônicos.",
  alternates: {
    canonical: "/lps/plantao",
  },
};

export default function PlantaoLP() {
  const whatsappUrl = "https://wa.me/5511910984454?text=Olá!+Gostaria+de+solicitar+um+orçamento+com+a+Link+Alarmes.";

  return (
    <div className="flex flex-col w-full bg-slate-950 text-slate-100 overflow-x-hidden font-sans">
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 border-b border-slate-900 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-950/20 via-slate-950 to-slate-950">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 backdrop-blur-md mb-6 animate-pulse-emerald">
            <span className="glow-dot-emerald"></span>
            <span className="text-xs font-bold text-emerald-400 tracking-widest uppercase">
              PLANTÃO 24H EM ALTA PRONTIDÃO
            </span>
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl leading-tight">
            Seu Escudo Não Pode Falhar. Plantão Técnico de Emergência 24 Horas para Redes e Alarmes.
          </h1>
          <p className="mt-6 max-w-3xl text-base text-slate-400 leading-relaxed">
            Nosso time técnico opera 24 horas por dia, 7 dias por semana, para intervir imediatamente e garantir que o seu sistema eletrônico de segurança e suas conexões corporativas estejam sempre online.
          </p>
          <div className="mt-8">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon-blue text-sm px-8 py-4 font-bold uppercase tracking-wider flex items-center justify-center gap-2"
            >
              Falar com o Plantão Técnico Agora
            </a>
          </div>
        </div>
      </section>

      {/* Pain Section (A Dor Real) */}
      <section className="py-16 bg-slate-900/30 border-b border-slate-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="card-tech border-red-500/10 p-8 flex flex-col md:flex-row gap-8 items-center">
            <div className="text-4xl text-red-500 flex-shrink-0">⚠️</div>
            <div>
              <h2 className="text-lg font-extrabold text-white uppercase tracking-wider mb-2">
                O que você faz se o seu sistema de segurança falhar no meio da madrugada?
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                O que você faz se o sistema de segurança disparar no meio da madrugada ou se a rede de dados de sua empresa cair durante um faturamento crítico de feriado? Ligar para empresas com secretária eletrônica que só atendem no próximo dia útil? Um sistema inoperante por apenas algumas horas deixa sua empresa e família totalmente desprotegidos e expostos a ciberataques ou invasões criminosas premeditadas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-slate-950 border-b border-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column */}
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-4xl">
                A Solução Link Alarmes
              </h2>
              <p className="mt-6 text-slate-400 text-sm leading-relaxed">
                A Link Alarmes oferece prontidão real. Nosso time técnico de plantão opera 24 horas por dia, 7 dias por semana, para intervir imediatamente e garantir que o seu sistema eletrônico de segurança e suas conexões críticas corporativas estejam sempre em pleno funcionamento.
              </p>
              
              <div className="mt-8">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-neon-cyan text-sm px-6 py-3 font-bold uppercase tracking-wider"
                >
                  Solicitar Contrato de Suporte 24h
                </a>
              </div>
            </div>

            {/* Right Column: Benefits Checklist */}
            <div className="grid grid-cols-1 gap-6">
              
              {/* Benefit 1 */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex gap-4">
                <span className="text-emerald-400 mt-0.5 text-lg">✓</span>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Prontidão Emergencial Local</h4>
                  <p className="text-xs text-slate-400 mt-1">Equipes de campo localizadas no Oeste Baiano (Barreiras e LEM) preparadas para deslocamento ágil com peças de reposição imediata.</p>
                </div>
              </div>

              {/* Benefit 2 */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex gap-4">
                <span className="text-emerald-400 mt-0.5 text-lg">✓</span>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Diagnóstico Técnico Remoto Instantâneo</h4>
                  <p className="text-xs text-slate-400 mt-1">Central capaz de acessar o status digital de seus roteadores e central de alarmes para solucionar travamentos de configuração em minutos.</p>
                </div>
              </div>

              {/* Benefit 3 */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex gap-4">
                <span className="text-emerald-400 mt-0.5 text-lg">✓</span>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Manutenção Preventiva Programada</h4>
                  <p className="text-xs text-slate-400 mt-1">Evitamos que as falhas aconteçam limpando lentes de câmeras, testando baterias de backup e reconfigurando sistemas rotineiramente.</p>
                </div>
              </div>

              {/* Benefit 4 */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex gap-4">
                <span className="text-emerald-400 mt-0.5 text-lg">✓</span>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Técnicos Seniores no Plantão</h4>
                  <p className="text-xs text-slate-400 mt-1">Sem atendentes inexperientes. Nossos plantonistas são profissionais seniores aptos a resolver qualquer incidente técnico de alta complexidade.</p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-slate-905 border-b border-slate-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="card-tech border-cyan-500/10 p-8 flex flex-col items-center text-center">
            <span className="text-yellow-400 text-lg mb-4">★ ★ ★ ★ ★</span>
            <p className="text-slate-300 text-sm leading-relaxed italic">
              &ldquo;Gerenciamos uma rede de lojas no centro de Barreiras e já sofremos com tentativas de invasão e roubos de cabos que desligavam nossa antiga internet. O projeto de CFTV inteligente e redes feito pela Link Alarmes blindou nosso comércio. Eles criaram uma infraestrutura de cabeamento oculta e protegida e as câmeras disparam alertas imediatos para a gerência antes do criminoso sequer quebrar a vitrine. Excelente suporte emergencial.&rdquo;
            </p>
            <span className="block text-white text-xs font-bold font-sans mt-6">
              — Henrique G. Vieira, Gerente Geral de Redes de Lojas, Barreiras - BA.
            </span>
          </div>
        </div>
      </section>

      {/* Close Call to Action */}
      <section className="py-20 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-950/20 via-slate-950 to-slate-950 text-center">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Sua tranquilidade 24 horas por dia, 365 dias por ano.
          </h2>
          <p className="mt-4 text-slate-400 max-w-md mx-auto text-sm">
            Fale com nossos técnicos de plantão e garanta suporte ininterrupto de altíssimo nível.
          </p>
          <div className="mt-8">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon-blue text-sm px-8 py-4 flex gap-2 items-center justify-center w-full sm:w-auto mx-auto"
            >
              Falar com o Plantão no WhatsApp
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
