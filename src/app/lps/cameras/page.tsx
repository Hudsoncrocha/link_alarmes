import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CFTV Inteligente & Câmeras com IA | Link Alarmes",
  description: "Monitore sua empresa ou residência em tempo real com CFTV inteligente e gravação redundante em nuvem contra roubos no Oeste Baiano.",
  alternates: {
    canonical: "/lps/cameras",
  },
};

export default function CamerasLP() {
  const whatsappUrl = "https://wa.me/5511910984454?text=Olá!+Gostaria+de+solicitar+um+orçamento+com+a+Link+Alarmes.";

  return (
    <div className="flex flex-col w-full bg-slate-950 text-slate-100 overflow-x-hidden font-sans">
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 border-b border-slate-900 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-950/20 via-slate-950 to-slate-950">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-950/30 border border-cyan-500/10 px-3.5 py-1.5 rounded-full mb-6">
            Prevenção Ativa com CFTV Inteligente
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl leading-tight">
            CFTV Inteligente: Monitore Tudo em Tempo Real e Previna Invasões Antes que Aconteçam.
          </h1>
          <p className="mt-6 max-w-3xl text-base text-slate-400 leading-relaxed">
            Vá muito além da simples gravação. Nossas câmeras contam com inteligência artificial para detecção e classificação precisa de humanos e veículos.
          </p>
          <div className="mt-8">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon-blue text-sm px-8 py-4 font-bold uppercase tracking-wider flex items-center justify-center gap-2"
            >
              Quero Instalar CFTV Inteligente
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
                Câmeras convencionais apenas gravam o prejuízo após o crime acontecer.
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                De que adianta ter um sistema de câmeras se o sinal trava constantemente, as imagens noturnas são embaçadas e o criminoso consegue invadir o local e simplesmente roubar o gravador físico com todas as gravações? Você precisa de prevenção inteligente e gravação segura, não de registros tardios em baixa definição.
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
                Com o CFTV Inteligente da Link Alarmes, você assume o controle total. Nossas câmeras são equipadas com Inteligência Artificial de última geração, capazes de analisar o ambiente em tempo real e agir proativamente, impedindo o pior.
              </p>
              
              <div className="mt-8">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-neon-cyan text-sm px-6 py-3 font-bold uppercase tracking-wider"
                >
                  Falar com Engenheiro de CFTV
                </a>
              </div>
            </div>

            {/* Right Column: Benefits Checklist */}
            <div className="grid grid-cols-1 gap-6">
              
              {/* Benefit 1 */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex gap-4">
                <span className="text-emerald-400 mt-0.5 text-lg">✓</span>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Inteligência Analítica e Antivandalismo</h4>
                  <p className="text-xs text-slate-400 mt-1">Câmeras diferenciam seres humanos e veículos de sombras ou pequenos animais, reduzindo falsos alarmes.</p>
                </div>
              </div>

              {/* Benefit 2 */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex gap-4">
                <span className="text-emerald-400 mt-0.5 text-lg">✓</span>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Gravação Redundante em Nuvem Criptografada</h4>
                  <p className="text-xs text-slate-400 mt-1">Mesmo que destruam os aparelhos locais, as imagens já estarão salvas em servidores remotos blindados.</p>
                </div>
              </div>

              {/* Benefit 3 */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex gap-4">
                <span className="text-emerald-400 mt-0.5 text-lg">✓</span>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Visão Noturna Ultra Nítida (Full Color)</h4>
                  <p className="text-xs text-slate-400 mt-1">Imagens totalmente coloridas e em alta definição mesmo na escuridão completa, facilitando identificações.</p>
                </div>
              </div>

              {/* Benefit 4 */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex gap-4">
                <span className="text-emerald-400 mt-0.5 text-lg">✓</span>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Acesso Remoto de Alta Estabilidade</h4>
                  <p className="text-xs text-slate-400 mt-1">Aplicativo rápido, seguro e otimizado no seu celular para monitorar o perímetro de qualquer lugar do mundo.</p>
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
            Sua empresa e sua família merecem proteção avançada.
          </h2>
          <p className="mt-4 text-slate-400 max-w-md mx-auto text-sm">
            Agende uma análise de segurança com um engenheiro sênior e desenhe seu projeto de CFTV inteligente.
          </p>
          <div className="mt-8">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon-blue text-sm px-8 py-4 flex gap-2 items-center justify-center w-full sm:w-auto mx-auto"
            >
              Quero um Orçamento Sem Compromisso
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
