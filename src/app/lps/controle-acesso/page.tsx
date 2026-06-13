import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Controle de Acesso Corporativo & Facial | Link Alarmes",
  description: "Gerencie o fluxo de colaboradores e veículos com biometria, facial e leitor de placas LPR no Oeste Baiano. Engenharia de ponta homologada.",
  alternates: {
    canonical: "/lps/controle-acesso",
  },
};

export default function ControleAcessoLP() {
  const whatsappUrl = "https://wa.me/5511910984454?text=Olá!+Gostaria+de+solicitar+um+orçamento+com+a+Link+Alarmes.";

  return (
    <div className="flex flex-col w-full bg-slate-950 text-slate-100 overflow-x-hidden font-sans">
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 border-b border-slate-900 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-950/20 via-slate-950 to-slate-950">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-950/30 border border-cyan-500/10 px-3.5 py-1.5 rounded-full mb-6">
            Automação & Controle Físico de Acesso
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl leading-tight">
            Controle Quem Entra e Quem Sai de sua Empresa ou Condomínio com Precisão Cirúrgica.
          </h1>
          <p className="mt-6 max-w-3xl text-base text-slate-400 leading-relaxed">
            Elimine filas, chaves perdidas e acessos não autorizados. Implementamos catracas, reconhecimento facial e leitores LPR integrados com relatórios em tempo real.
          </p>
          <div className="mt-8">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon-blue text-sm px-8 py-4 font-bold uppercase tracking-wider flex items-center justify-center gap-2"
            >
              Blindar Acesso da Minha Empresa
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
                O fluxo desordenado expõe sua empresa a roubos e prejuízos sérios.
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                O fluxo desordenado de pessoas expõe sua empresa ao roubo de dados, roubo de insumos e incidentes graves de segurança. Portarias analógicas geram longas filas de espera para visitantes, prejudicando a imagem corporativa, enquanto chaves e cartões magnéticos perdidos representam falhas grotescas de segurança fáceis de serem burladas. Sua gestão precisa de automação blindada e relatórios em tempo real.
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
                Projetamos sistemas de controle de acesso biométrico, facial e automotivo de alta performance. Desenvolvido por especialistas com mais de 15 anos de estrada no mercado corporativo, nosso ecossistema garante que apenas pessoas devidamente autorizadas circulem pelas suas instalações.
              </p>
              
              <div className="mt-8">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-neon-cyan text-sm px-6 py-3 font-bold uppercase tracking-wider"
                >
                  Agendar Visita de Diagnóstico Técnico
                </a>
              </div>
            </div>

            {/* Right Column: Benefits Checklist */}
            <div className="grid grid-cols-1 gap-6">
              
              {/* Benefit 1 */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex gap-4">
                <span className="text-emerald-400 mt-0.5 text-lg">✓</span>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Reconhecimento Facial Ultrarrápido</h4>
                  <p className="text-xs text-slate-400 mt-1">Algoritmo de inteligência artificial de alta velocidade que faz a leitura facial em milissegundos, impedindo aglomerações.</p>
                </div>
              </div>

              {/* Benefit 2 */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex gap-4">
                <span className="text-emerald-400 mt-0.5 text-lg">✓</span>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Leitor de Placas Inteligente (LPR)</h4>
                  <p className="text-xs text-slate-400 mt-1">Liberação automática de portões para veículos de colaboradores cadastrados, rastreando placas e gerando registros.</p>
                </div>
              </div>

              {/* Benefit 3 */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex gap-4">
                <span className="text-emerald-400 mt-0.5 text-lg">✓</span>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Integração de Ponto e Catracas</h4>
                  <p className="text-xs text-slate-400 mt-1">Sincronize o acesso físico com o controle de ponto eletrônico de forma integrada e livre de fraudes operacionais.</p>
                </div>
              </div>

              {/* Benefit 4 */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex gap-4">
                <span className="text-emerald-400 mt-0.5 text-lg">✓</span>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Software de Gestão Centralizada</h4>
                  <p className="text-xs text-slate-400 mt-1">Painel administrativo completo para cadastrar, alterar ou revogar acessos instantaneamente e emitir relatórios.</p>
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
            Sua operação merece automação blindada e segura.
          </h2>
          <p className="mt-4 text-slate-400 max-w-md mx-auto text-sm">
            Fale com nossos engenheiros seniores e estruture um fluxo de acesso inteligente e auditável.
          </p>
          <div className="mt-8">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon-blue text-sm px-8 py-4 flex gap-2 items-center justify-center w-full sm:w-auto mx-auto"
            >
              Falar com Engenheiro Corporativo
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
