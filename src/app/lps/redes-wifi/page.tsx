import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wi-Fi 6 Corporativo & Cabeamento | Link Alarmes",
  description: "Acabe com quedas de sinal e internet lenta em sua empresa. Projetamos cabeamento estruturado CAT6 e Wi-Fi 6 corporativo no Oeste Baiano.",
  alternates: {
    canonical: "/lps/redes-wifi",
  },
};

export default function RedesWifiLP() {
  const whatsappUrl = "https://wa.me/5511910984454?text=Olá!+Gostaria+de+solicitar+um+orçamento+com+a+Link+Alarmes.";

  return (
    <div className="flex flex-col w-full bg-slate-950 text-slate-100 overflow-x-hidden font-sans">
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 border-b border-slate-900 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-950/20 via-slate-950 to-slate-950">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-950/30 border border-cyan-500/10 px-3.5 py-1.5 rounded-full mb-6">
            Infraestrutura de Conectividade Corporativa
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl leading-tight">
            Acabe com a Lentidão de Internet e Quedas de Wi-Fi que Prejudicam suas Vendas e Produtividade.
          </h1>
          <p className="mt-6 max-w-3xl text-base text-slate-400 leading-relaxed">
            Uma rede corporativa estável não é artigo de luxo, é sobrevivência de mercado. Projetamos cabeamento estruturado CAT6/6A e redes de alta performance.
          </p>
          <div className="mt-8">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon-blue text-sm px-8 py-4 font-bold uppercase tracking-wider flex items-center justify-center gap-2"
            >
              Otimizar Minha Rede Corporativa agora
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
                Sua empresa perde faturamento por causa de internet instável?
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                Sua empresa perde vendas porque as maquininhas de cartão ou o sistema ERP travam toda hora? Seus colaboradores perdem tempo de trabalho reiniciando o roteador doméstico que não suporta o número de conexões simultâneas? Racks bagunçados com emaranhados de cabos sem identificação causam curtos e tornam impossível resolver problemas rápidos de rede. A falta de infraestrutura de rede profissional está custando dinheiro real à sua empresa todos os dias.
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
                A equipe da Link Alarmes, liderada por engenheiros de redes certificados e com +15 anos de experiência, projeta e executa cabeamento estruturado e arquitetura de Wi-Fi 6 de alta densidade sob os mais rígidos padrões internacionais.
              </p>
              
              <div className="mt-8">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-neon-cyan text-sm px-6 py-3 font-bold uppercase tracking-wider"
                >
                  Otimizar Conectividade Comercial
                </a>
              </div>
            </div>

            {/* Right Column: Benefits Checklist */}
            <div className="grid grid-cols-1 gap-6">
              
              {/* Benefit 1 */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex gap-4">
                <span className="text-emerald-400 mt-0.5 text-lg">✓</span>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Cabeamento Estruturado Certificado</h4>
                  <p className="text-xs text-slate-400 mt-1">Cabos CAT6 e CAT6A instalados de forma impecável, identificados, testados digitalmente e livres de interferências.</p>
                </div>
              </div>

              {/* Benefit 2 */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex gap-4">
                <span className="text-emerald-400 mt-0.5 text-lg">✓</span>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Tecnologia Wi-Fi 6 Corporativa</h4>
                  <p className="text-xs text-slate-400 mt-1">Roteadores profissionais de alta densidade que gerenciam centenas de conexões estáveis ao mesmo tempo sem lentidão.</p>
                </div>
              </div>

              {/* Benefit 3 */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex gap-4">
                <span className="text-emerald-400 mt-0.5 text-lg">✓</span>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Isolamento e Segurança (VLANs)</h4>
                  <p className="text-xs text-slate-400 mt-1">Redes totalmente separadas e criptografadas para a equipe administrativa (dados sigilosos) e visitantes.</p>
                </div>
              </div>

              {/* Benefit 4 */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex gap-4">
                <span className="text-emerald-400 mt-0.5 text-lg">✓</span>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Balanceamento Link Redundante</h4>
                  <p className="text-xs text-slate-400 mt-1">Conecte duas operadoras. Se um link cair, o outro assume instantaneamente sem que você fique offline por 1 segundo.</p>
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
              &ldquo;Temos uma sede administrativa de agronegócio em Luís Eduardo Magalhães com alto fluxo de caminhões e colaboradores. A equipe da Link Alarmes reestruturou toda a nossa rede Wi-Fi Corporativa e instalou o sistema de controle de acesso facial nas portarias. A estabilidade da internet é fantástica e a segurança das imagens em nuvem nos dá uma tranquilidade sem igual. Notamos a diferença na hora de contratar técnicos que realmente entendem e têm mais de 15 anos de estrada. Recomendo fortemente!&rdquo;
            </p>
            <span className="block text-white text-xs font-bold font-sans mt-6">
              — Roberto F. Albuquerque, Diretor de Operações de Grupo Agrícola, Luís Eduardo Magalhães - BA.
            </span>
          </div>
        </div>
      </section>

      {/* Close Call to Action */}
      <section className="py-20 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-950/20 via-slate-950 to-slate-950 text-center">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Sua empresa nunca pode parar de faturar.
          </h2>
          <p className="mt-4 text-slate-400 max-w-md mx-auto text-sm">
            Fale com nossos engenheiros de redes sênior e elimine gargalos e lentidão em seu negócio.
          </p>
          <div className="mt-8">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon-blue text-sm px-8 py-4 flex gap-2 items-center justify-center w-full sm:w-auto mx-auto"
            >
              Falar com Engenheiro de Redes
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
