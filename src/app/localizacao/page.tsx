import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Localização | Link Alarmes | São Paulo - SP",
  description: "Atendimento de elite em segurança eletrônica, monitoramento de alarmes, CFTV e redes na Vila da Saúde e em toda a região de São Paulo - SP. Prontidão máxima e suporte especializado.",
  alternates: {
    canonical: "/localizacao",
  },
};

export default function Localizacao() {
  const whatsappUrl = "https://wa.me/5511910984454?text=Olá!+Gostaria+de+solicitar+um+orçamento+com+a+Link+Alarmes.";

  return (
    <div className="flex flex-col w-full bg-slate-950 text-slate-100 overflow-x-hidden font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative py-16 md:py-24 border-b border-slate-900 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-950/20 via-slate-950 to-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-950/30 border border-cyan-500/10 px-3.5 py-1.5 rounded-full mb-6 animate-pulse-neon">
            Nossa Sede
          </span>
          <h1 className="max-w-4xl text-3xl font-extrabold tracking-tight text-white sm:text-5xl leading-tight">
            Onde Há Necessidade de Proteção Máxima e Conectividade, a Link Alarmes Está Presente.
          </h1>
        </div>
      </section>

      {/* 2. NAP STANDARDIZATION & GOOGLE MAPS EMBED */}
      <section className="py-20 bg-slate-950 border-b border-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column: NAP Details & Description */}
            <div className="lg:col-span-6 space-y-8">
              
              <div className="border-l-2 border-cyan-500 pl-6">
                <h2 className="text-2xl font-bold text-white uppercase tracking-wider mb-4">
                  Nosso endereço
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Para nós, a transparência e a segurança andam juntas.
                </p>
              </div>

              {/* CARD NAP OFICIAL */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-2xl relative overflow-hidden group hover:border-cyan-500/30 transition-all duration-300">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-500"></div>
                <h3 className="text-sm font-black text-white uppercase tracking-widest mb-4 border-b border-slate-800 pb-3 flex items-center justify-between">
                  <span>🏢 DADOS OFICIAIS DA LINK ALARMES</span>
                  <span className="text-[10px] text-cyan-400 font-mono tracking-wider">// PRESENÇA REAL</span>
                </h3>
                
                <ul className="space-y-4 text-sm leading-relaxed">
                  <li className="flex flex-col">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Nome da Empresa</span>
                    <strong className="text-white text-base font-extrabold mt-0.5">Link Alarmes</strong>
                  </li>
                  <li className="flex flex-col border-t border-slate-800/60 pt-2">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Endereço Padronizado</span>
                    <span className="text-slate-300 mt-0.5 font-medium">
                      Av. Miguel Estefno, 1973 - Vila da Saúde, São Paulo - SP, CEP: 04301-001
                    </span>
                  </li>
                  <li className="flex flex-col border-t border-slate-800/60 pt-2">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Telefone e WhatsApp</span>
                    <a href="tel:5511910984454" className="text-cyan-400 hover:text-cyan-300 transition-colors font-extrabold text-base mt-0.5 block">
                      (11) 91098-4454
                    </a>
                  </li>
                </ul>
              </div>

            </div>

            {/* Right Column: Google Maps Interactive Embed Card */}
            <div className="lg:col-span-6 card-tech p-6 border border-cyan-500/10 min-h-[420px] flex flex-col justify-between">
              
              <div className="flex items-center justify-between border-b border-slate-900 pb-4 mb-4">
                <div>
                  <h3 className="text-sm font-extrabold text-white uppercase tracking-wider">
                    Mapa de Localização Interativo
                  </h3>
                  <span className="text-[10px] text-cyan-400 font-mono tracking-wider">// RENDERIZADO VIA GOOGLE MAPS</span>
                </div>
                <span className="glow-dot-emerald"></span>
              </div>

              {/* Interactive Iframe Embed */}
              <div className="w-full h-72 rounded-lg overflow-hidden border border-slate-800 relative bg-slate-950">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.4851216503893!2d-46.63462612376994!3d-23.622830863836376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a3cd17f897d%3A0xe54d24177d424bd0!2sAv.%20Miguel%20Estefno%2C%201973%20-%20Vila%20da%20Sa%C3%BAde%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004301-001!5e0!3m2!1spt-BR!2sbr!4v1716912345678!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>

              <div className="mt-4 text-xs text-slate-500 font-mono text-center flex items-center justify-center gap-1.5">
                <span>📍 Latitude / Longitude aproximada: -23.6228 / -46.6346</span>
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* 4. CALL TO ACTION SECTION */}
      <section className="py-20 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-950/20 via-slate-950 to-slate-950 text-center">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Seja um de nossos clientes.
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-sm">
            Solicite a visita de um de nossos técnicos.
          </p>
          <div className="mt-8">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon-blue text-sm px-8 py-4 flex gap-2 items-center justify-center w-full sm:w-auto mx-auto"
            >
              Falar com a Link
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
