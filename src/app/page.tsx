import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Link Alarmes | Segurança de Elite e Redes Corporativas",
  description: "Projetos de CFTV com IA, alarmes monitorados e Wi-Fi 6 por engenheiros com +15 anos de experiência no Oeste da Bahia (Barreiras e LEM).",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const whatsappUrl = "/whatsapp?origin=home";

  return (
    <div className="flex flex-col w-full bg-slate-950 text-slate-100 overflow-x-hidden font-sans">
      
      {/* 1. SEÇÃO HERO (DOBRA PRINCIPAL) */}
      <section className="relative w-full pt-12 pb-20 md:pt-20 md:pb-32 border-b border-slate-900 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-950/30 via-slate-950 to-slate-950">
        
        {/* Background Decorative Tech Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          
          {/* Status Indicator */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 backdrop-blur-md mb-8 animate-pulse-emerald">
            <span className="glow-dot-emerald"></span>
            <span className="text-xs font-bold text-emerald-400 tracking-widest uppercase">
              Central de Monitoramento 24h Online
            </span>
          </div>

          {/* Heading H1 */}
          <h1 className="max-w-4xl text-3xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl leading-tight sm:leading-none">
            Alarme Monitorado{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 text-neon-cyan">
              Inteligente
            </span>{" "}
            para sua Casa e Empresa.
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-3xl text-base text-slate-400 md:text-xl leading-relaxed">
            Proteja o que mais importa. Soluções premium em segurança eletrônica, monitoramento de alarmes, câmeras, controle de acesso e infraestrutura de redes, projetadas por especialistas com mais de 15 anos de sólida experiência.
          </p>

          {/* CTA & Trust Badges */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Link
              href={whatsappUrl}
              className="btn-neon-blue w-full sm:w-auto text-base px-8 py-4 flex gap-2 items-center justify-center group"
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.62.963 3.203 1.493 4.716 1.495 5.495.002 9.965-4.469 9.968-9.97.001-2.664-1.034-5.169-2.915-7.052C16.535 1.744 14.04 .71 11.99.713 6.495.713 2.025 5.184 2.022 10.686c-.001 1.636.43 3.226 1.251 4.634L2.28 21.65l6.367-1.672-.001-.024z" />
              </svg>
              Falar com um Especialista Agora
            </Link>
          </div>

          {/* Microcopy Benefits under buttons */}
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3 w-full max-w-4xl border-t border-slate-900 pt-8 text-left">
            <div className="flex items-start gap-3">
              <span className="text-3xl mt-0.5">🚨</span>
              <div>
                <h4 className="text-base font-bold text-white">Alarme Monitorado</h4>
                <p className="text-sm text-slate-400 mt-1.5 leading-relaxed">Proteção perimetral 24h com sensores inteligentes imunes a animais e alerta imediato.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-3xl mt-0.5">📹</span>
              <div>
                <h4 className="text-base font-bold text-white">Sistema de Câmeras</h4>
                <p className="text-sm text-slate-400 mt-1.5 leading-relaxed">CFTV inteligente com IA, detecção humana e imagens em tempo real pelo celular.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-3xl mt-0.5">📶</span>
              <div>
                <h4 className="text-base font-bold text-white">Wi-Fi em Toda a Empresa</h4>
                <p className="text-sm text-slate-400 mt-1.5 leading-relaxed">Rede corporativa ultraestável com Wi-Fi 6 de alta performance e zero quedas.</p>
              </div>
            </div>
          </div>

          {/* FUJA DE: SEÇÃO DE DORES DE CABEÇA COMUNS */}
          <div className="mt-10 w-full max-w-4xl border-t border-slate-900 pt-8 text-left">
            <h4 className="text-sm font-bold uppercase tracking-widest text-rose-500 mb-6 flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
              Fuja dos problemas comuns do mercado tradicional:
            </h4>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              
              <div className="flex items-start gap-2.5">
                <span className="text-rose-500 text-2xl mt-0.5">⚠️</span>
                <div>
                  <h5 className="text-base font-bold text-slate-100">Cobranças Indevidas</h5>
                  <p className="text-sm text-slate-400 mt-1.5 leading-relaxed">Mensalidade fixa sem taxas surpresas ou reajustes misteriosos.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="text-rose-500 text-2xl mt-0.5">⚠️</span>
                <div>
                  <h5 className="text-base font-bold text-slate-100">Manutenção Demorada</h5>
                  <p className="text-sm text-slate-400 mt-1.5 leading-relaxed">Equipes de prontidão para reparos em tempo recorde.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="text-rose-500 text-2xl mt-0.5">⚠️</span>
                <div>
                  <h5 className="text-base font-bold text-slate-100">Disparos de Madrugada</h5>
                  <p className="text-sm text-slate-400 mt-1.5 leading-relaxed">Tenha uma boa noite de sono com nossos sensores inteligentes imunes a animais, que evitam disparos falsos noturnos.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="text-rose-500 text-2xl mt-0.5">⚠️</span>
                <div>
                  <h5 className="text-base font-bold text-slate-100">Incomodar Vizinhos</h5>
                  <p className="text-sm text-slate-400 mt-1.5 leading-relaxed">Não passe vergonha. Evite ser o motivo da falta de descanso da vizinhança.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="text-rose-500 text-2xl mt-0.5">⚠️</span>
                <div>
                  <h5 className="text-base font-bold text-slate-100">Fidelidade Abusiva</h5>
                  <p className="text-sm text-slate-400 mt-1.5 leading-relaxed">Sem contratos leoninos ou multas que prendem você contra a sua vontade.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="text-rose-500 text-2xl mt-0.5">⚠️</span>
                <div>
                  <h5 className="text-base font-bold text-slate-100">Dor de cabeça ao viajar</h5>
                  <p className="text-sm text-slate-400 mt-1.5 leading-relaxed">Manutenção preventiva constante para garantir hardware 100% ativo quando não estiver presente.</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 2. SEÇÃO DE PROPRIEDADE E AUTORIDADE (POR QUE ESCOLHER A LINK ALARMES?) */}
      <section className="py-20 bg-slate-950 border-b border-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: Context Content */}
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl leading-tight">
                Mais que monitoramento.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 text-neon-blue">
                  Engenharia de segurança e redes
                </span>{" "}
                projetada para durar.
              </h2>
              <p className="mt-6 text-slate-400 leading-relaxed text-base">
                A segurança do seu patrimônio e a conectividade de sua empresa não podem depender de amadores. Na Link Alarmes, combinamos tecnologia de ponta com o know-how de profissionais que possuem mais de 15 anos de experiência real em grandes projetos de casas, comércios, indústrias, fazendas do agronegócio e residências de alto padrão.
              </p>
              <p className="mt-4 text-slate-400 leading-relaxed text-base">
                Não oferecemos apenas alarmes ou cabos de rede; entregamos segurança total e estabilidade operacional. Do projeto à manutenção preventiva, nossa prioridade absoluta é garantir que você durma tranquilo e que o seu negócio produza sem interrupções.
              </p>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-4 py-2 rounded-lg">
                  <span className="glow-dot-cyan"></span>
                  <span className="text-xs font-bold text-slate-200">Projetos Comerciais e Industriais</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-4 py-2 rounded-lg">
                  <span className="glow-dot-blue"></span>
                  <span className="text-xs font-bold text-slate-200">Residencial de Alto Padrão</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Tech Representation SVG */}
            <div className="relative card-tech p-8 flex flex-col justify-center min-h-[350px] border border-cyan-500/10 overflow-hidden">
              <div className="absolute top-2 right-2 flex gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
              </div>
              <div className="flex flex-col gap-4 text-xs font-mono text-cyan-400">
                <div className="border-b border-slate-800 pb-2">
                  <span className="text-slate-500">// DIAGNÓSTICO DE SISTEMA V1.4</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>CENTRAL CONTROLE 24H:</span>
                  <span className="text-emerald-400 font-bold">ONLINE (PING 4ms)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>SENSORES PERIMETRAIS:</span>
                  <span className="text-slate-200">ATIVOS (0 DISPAROS FALSOS)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>CFTV INTELIGENTE:</span>
                  <span className="text-slate-200">IA HUMANO/VEÍCULO PARAMETRIZADO</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>WI-FI 6 REDE ADMIN:</span>
                  <span className="text-cyan-400 font-bold">LARGURA DE BANDA CERTIFICADA CAT6</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>ALIMENTAÇÃO REDUNDANTE:</span>
                  <span className="text-emerald-400">BACKUP BATERIA 100% OPERANTE</span>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-slate-400">PROTEÇÃO INTEGRADA REGIONAL</span>
                  <span className="text-white bg-blue-600 px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider">
                    Engenharia de Elite
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. DESCRIÇÃO RESUMIDA DE SOLUÇÕES (OS 3 PILARES PRINCIPAIS) */}
      <section className="py-20 bg-slate-900/40 border-b border-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
              Soluções Integradas que Protegem Vidas e Maximizam Negócios
            </h2>
            <p className="mt-4 text-slate-400">
              Nossos sistemas te fornecem segurança, tranquilidade, controle e produtividade.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Pilar 1: Residencial */}
            <div className="card-tech flex flex-col justify-between h-full border-blue-500/10 hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(37,99,235,0.12)] transition-all duration-300">
              <div>
                <div className="h-12 w-12 rounded-lg bg-blue-950/50 border border-blue-800 flex items-center justify-center text-blue-400 mb-6">
                  {/* Home SVG Icon */}
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Soluções Residenciais</h3>
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider block mb-4">Segurança e Conectividade para sua Casa</span>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Proteção e conforto para sua família, tranquilidade para você. Sistemas de alarmes com monitoramento 24h e aviso à polícia. Segurança perimetral com cercas eletrificadas e sensores externos, controle de acesso nas entradas social e de garagem, sistemas de câmeras discretas de alta qualidade, e projetos de Wi-Fi fornecendo conexão estável, redundante e sem pontos mortos.
                </p>
                
                <ul className="space-y-2.5 mb-8 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <span className="text-blue-400">🛡️</span>
                    <span>Alarmes inteligentes. Sem disparos falsos por plantas e animais. Prevenção de intrusão.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-400">📹</span>
                    <span>Câmeras CFTV com alta qualidade de imagem. Veja tudo sem pontos cegos.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-400">📶</span>
                    <span>Wi-Fi de alta performance e sinal em toda a casa. Home office e filmes sem travamentos.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-400">💎</span>
                    <span>Controle de acesso com reconhecimento facial e biométrico.</span>
                  </li>
                </ul>
              </div>
              
              <Link href="/residencial" className="btn-neon-blue text-xs w-full py-3 flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(37,99,235,0.2)]">
                Conhecer Soluções Residenciais
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Pilar 2: Empresarial */}
            <div className="card-tech flex flex-col justify-between h-full border-cyan-500/10 hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.12)] transition-all duration-300">
              <div>
                <div className="h-12 w-12 rounded-lg bg-cyan-950/50 border border-cyan-800 flex items-center justify-center text-cyan-400 mb-6">
                  {/* Building SVG Icon */}
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Soluções Empresariais</h3>
                <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider block mb-4">Infraestrutura e Segurança Corporativa</span>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  De pequenos a grandes comércios: &ldquo;Seu prejuízo é equivalente ao seu tamanho&rdquo;. Não dá para deixar a segurança da sua empresa para depois do prejuízo. Sistemas de alarmes por camadas, câmeras com inteligência artificial, segurança perimetral e controle de acesso facial e biométrico.
                </p>

                <ul className="space-y-2.5 mb-8 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">🏢</span>
                    <span>Alarme monitorado 24h. Sensores de abertura de portas, portões, quebra de vidros, etc.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">🔌</span>
                    <span>Projetos de redes cabeadas com documentação e rack organizado.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">📶</span>
                    <span>Wi-Fi 6 corporativo separado por setores (gerencial, operacional, clientes).</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">⚡</span>
                    <span>Sistema de câmeras com alta resolução, sem travamentos ou pontos cegos.</span>
                  </li>
                </ul>
              </div>
              
              <Link href="/empresas" className="btn-neon-blue text-xs w-full py-3 flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(6,182,212,0.2)] bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 border-none">
                Conhecer Soluções Empresariais
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Pilar 3: Condomínios */}
            <div className="card-tech flex flex-col justify-between h-full border-emerald-500/10 hover:border-emerald-500/30 hover:shadow-[0_0_30px_rgba(16,185,129,0.12)] transition-all duration-300">
              <div>
                <div className="h-12 w-12 rounded-lg bg-emerald-950/50 border border-emerald-800 flex items-center justify-center text-emerald-400 mb-6">
                  {/* Gate/Shield Icon */}
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Soluções para Condomínios</h3>
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block mb-4">Controle de Acesso, CFTV e Perímetro</span>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Prestamos uma consultoria sobre os seus gastos com segurança eletrônica. Sabemos que a maioria dos condomínios sofre, além do alto custo mensal do contrato, com cobranças abusivas na aquisição de equipamentos, manutenções demoradas e incômodos aos moradores. Prezamos uma relação justa e de longo prazo com nossos clientes. Tenha um sistema funcional com preço justo!
                </p>

                <ul className="space-y-2.5 mb-8 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-400">🚪</span>
                    <span>Controle de acesso funcionando perfeitamente mesmo com alto fluxo ou falta de energia.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-400">🚗</span>
                    <span>Leitor de placas (LPR) integrado com cadastro rápido.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-400">🚧</span>
                    <span>Proteção perimetral completa com cercas eletrificadas e sensores externos.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-400">📶</span>
                    <span>Infraestrutura robusta de interfonia IP e fibra de ponta.</span>
                  </li>
                </ul>
              </div>
              
              <Link href="/condominios" className="btn-neon-blue text-xs w-full py-3 flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(16,185,129,0.2)] bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 border-none">
                Conhecer Soluções para Condomínios
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* 4. SEÇÃO DE PROVA SOCIAL: AVALIAÇÕES GOOGLE REAIS E CONVINCENTES */}
      <section className="py-20 bg-slate-950 border-b border-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-slate-900 border border-slate-800 text-yellow-500 font-bold text-xs uppercase tracking-wider mb-3">
              ★ ★ ★ ★ ★ Google Business
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
              Quem Confia em Quem Protege. A Opinião de Nossos Clientes.
            </h2>
            <p className="mt-4 text-slate-400">
              Veja a opinião de alguns clientes que utilizam nossos serviços.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Depoimento 1 - Agro */}
            <div className="card-tech flex flex-col justify-between border-blue-500/10 h-full">
              <div>
                <div className="flex items-center gap-1 text-yellow-400 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed italic">
                  &ldquo;Temos uma sede administrativa com alto fluxo de caminhões e colaboradores. A equipe da Link Alarmes reestruturou toda a nossa rede Wi-Fi Corporativa e instalou o sistema de controle de acesso facial nas portarias e câmeras IP por todo o perímetro. A estabilidade da internet é fantástica e a segurança das imagens nos dá uma tranquilidade sem igual. Notamos a diferença na hora de contratar técnicos que realmente entendem. Recomendo fortemente!&rdquo;
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-900 text-xs">
                <span className="block text-white font-bold font-sans">Roberto F. Albuquerque</span>
                <span className="text-cyan-400 mt-0.5 block">Diretor de Operações</span>
              </div>
            </div>

            {/* Depoimento 2 - Residencial */}
            <div className="card-tech flex flex-col justify-between border-cyan-500/10 h-full">
              <div>
                <div className="flex items-center gap-1 text-yellow-400 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed italic">
                  &ldquo;Minha maior preocupação eram os finais de semana em que nossa família viajava para o interior. A Link Alarmes instalou sistema de alarme e câmeras que nos deixa ver tudo direto pelo celular. O sistema é ótimo, nunca dá alarmes falsos por causa dos nossos gatos e, se faltar luz, ele continua transmitindo via operadora de celular. O atendimento técnico é impecável e pontual.&rdquo;
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-900 text-xs">
                <span className="block text-white font-bold font-sans">Dra. Mariana Lemos</span>
                <span className="text-cyan-400 mt-0.5 block">Médica Pediatra</span>
              </div>
            </div>

            {/* Depoimento 3 - Comercial */}
            <div className="card-tech flex flex-col justify-between border-blue-500/10 h-full">
              <div>
                <div className="flex items-center gap-1 text-yellow-400 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed italic">
                  &ldquo;Temos uma rede de lojas de pneus. Nossos estoques têm um alto valor em produtos. Fizemos orçamentos com mais de 5 empresas diferentes e ficamos impressionados com a qualidade técnica apresentada pela Link. O Hudson é um profissional incrível. Todo o projeto veio em AutoCAD e fizeram o acompanhamento das últimas 6 reformas para garantir que tudo saísse de acordo. Até sistema sísmico que evita a quebra das paredes eles colocaram. Fenomenal!&rdquo;
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-900 text-xs">
                <span className="block text-white font-bold font-sans">Henrique G. Vieira</span>
                <span className="text-cyan-400 mt-0.5 block">Proprietário de Rede de Lojas</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. SEÇÃO DE FECHAMENTO (CHAMADA À AÇÃO FINAL) */}
      <section className="relative py-20 md:py-28 border-b border-slate-900 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950">
        
        {/* Status Indicator inside call to action section */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_100%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Não espere o incidente acontecer para descobrir se sua segurança funciona.
          </h2>
          <p className="mt-6 text-base text-slate-400 md:text-lg leading-relaxed max-w-2xl">
            Fale agora mesmo com a gente e obtenha um diagnóstico técnico sem custo para a sua residência, empresa ou condomínio.
          </p>

          <div className="mt-8">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon-blue text-base px-8 py-4 flex gap-2 items-center justify-center w-full sm:w-auto"
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.62.963 3.203 1.493 4.716 1.495 5.495.002 9.965-4.469 9.968-9.97.001-2.664-1.034-5.169-2.915-7.052C16.535 1.744 14.04 .71 11.99.713 6.495.713 2.025 5.184 2.022 10.686c-.001 1.636.43 3.226 1.251 4.634L2.28 21.65l6.367-1.672-.001-.024z" />
              </svg>
              Quero um Diagnóstico Técnico Gratuito
            </a>
          </div>

          <div className="mt-8 flex items-center gap-1.5 text-xs text-slate-500">
            <span className="glow-dot-cyan"></span>
            <span>Estudo técnico detalhado sem compromisso comercial</span>
          </div>

        </div>
      </section>

    </div>
  );
}
