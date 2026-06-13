import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Segurança Residencial Premium | Link Alarmes",
  description: "Proteja sua família com alarmes inteligentes anti-pets e suporte emergencial 24h no Oeste Baiano. Engenharia de elite sem falsos disparos.",
  alternates: {
    canonical: "/lps/residencial",
  },
};

export default function ResidencialLP() {
  const whatsappUrl = "https://wa.me/5511910984454?text=Olá!+Gostaria+de+solicitar+um+orçamento+com+a+Link+Alarmes.";

  return (
    <div className="flex flex-col w-full bg-slate-950 text-slate-100 overflow-x-hidden font-sans">
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 border-b border-slate-900 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-950/20 via-slate-950 to-slate-950">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-950/30 border border-cyan-500/10 px-3.5 py-1.5 rounded-full mb-6">
            Segurança Inteligente Residencial
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl leading-tight">
            Sua Família Protegida por Quem Entende de Blindagem Residencial de Elite.
          </h1>
          <p className="mt-6 max-w-3xl text-base text-slate-400 leading-relaxed">
            Sistemas de intrusão inteligentes com sensores de barreira e presença imunes a animais de estimação. Monitoramento ativo de ponta a ponta para que você viaje em paz.
          </p>
          <div className="mt-8">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon-blue text-sm px-8 py-4 font-bold uppercase tracking-wider flex items-center justify-center gap-2"
            >
              Proteger Minha Família Agora
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
                Você sente frio na barriga ao deixar sua casa vazia para viajar no final de semana?
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                Tem medo de que criminosos aproveitem a calada da noite para invadir o lar onde seus filhos dormem? Alarmes comuns instalados por amadores disparam sozinhos por qualquer vento, gerando pânico desnecessário e fazendo você ignorar alertas reais. O medo de assaltos e a sensação de impotência não deveriam fazer parte da sua rotina familiar.
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
                A Link Alarmes projeta sistemas de segurança residencial inteligente que criam um escudo invisível ao redor do seu lar. Nossos projetos são elaborados por técnicos seniores de +15 anos de experiência prática, garantindo que não existam &ldquo;pontos cegos&rdquo; de proteção no seu terreno.
              </p>
              
              <div className="mt-8">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-neon-cyan text-sm px-6 py-3 font-bold uppercase tracking-wider"
                >
                  Solicitar Projeto de Blindagem
                </a>
              </div>
            </div>

            {/* Right Column: Benefits Checklist */}
            <div className="grid grid-cols-1 gap-6">
              
              {/* Benefit 1 */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex gap-4">
                <span className="text-emerald-400 mt-0.5 text-lg">✓</span>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Sensores Anti-Pets & Alta Precisão</h4>
                  <p className="text-xs text-slate-400 mt-1">Sem disparos falsos gerados por animais de estimação, galhos ou vento.</p>
                </div>
              </div>

              {/* Benefit 2 */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex gap-4">
                <span className="text-emerald-400 mt-0.5 text-lg">✓</span>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Alerta Direto no Celular</h4>
                  <p className="text-xs text-slate-400 mt-1">Seja avisado instantaneamente via aplicativo com gravação de vídeo do momento exato do disparo.</p>
                </div>
              </div>

              {/* Benefit 3 */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex gap-4">
                <span className="text-emerald-400 mt-0.5 text-lg">✓</span>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Bateria e Chip Redundantes</h4>
                  <p className="text-xs text-slate-400 mt-1">Se a energia da rua for cortada ou sabotarem a fiação, o sistema continua via bateria interna e 4G.</p>
                </div>
              </div>

              {/* Benefit 4 */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex gap-4">
                <span className="text-emerald-400 mt-0.5 text-lg">✓</span>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Botão de Pânico Silencioso</h4>
                  <p className="text-xs text-slate-400 mt-1">Dispositivo físico ou no smartphone para acionar socorro imediato sem chamar atenção de criminosos.</p>
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
              &ldquo;Minha maior preocupação eram os finais de semana em que nossa família viajava de Barreiras para Salvador. A Link Alarmes instalou sensores inteligentes de presença e câmeras que identificam pessoas direto pelo celular. O sistema é robusto, nunca dá alarmes falsos por causa do nosso gato e, se faltar luz, ele continua transmitindo via chip de dados móveis. O atendimento técnico é impecável e pontual.&rdquo;
            </p>
            <span className="block text-white text-xs font-bold font-sans mt-6">
              — Dr. Mariana Lemos Santos, Médica Pediatra, Barreiras - BA.
            </span>
          </div>
        </div>
      </section>

      {/* Close Call to Action */}
      <section className="py-20 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-950/20 via-slate-950 to-slate-950 text-center">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Proteja o que é mais valioso com quem domina a tecnologia de elite.
          </h2>
          <p className="mt-4 text-slate-400 max-w-md mx-auto text-sm">
            Fale hoje mesmo com nossos engenheiros especialistas e receba um diagnóstico perimetral gratuito.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon-blue text-sm px-8 py-4 flex gap-2 items-center justify-center w-full sm:w-auto"
            >
              Falar com Engenheiro no WhatsApp
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
