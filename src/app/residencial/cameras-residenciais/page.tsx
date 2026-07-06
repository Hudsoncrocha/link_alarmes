import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Câmeras de Segurança Residenciais | Link Alarmes",
  description: "Monitore sua residência em tempo real pelo celular com câmeras HD, inteligência artificial para detecção de humanos e gravação em nuvem segura. Instalação profissional limpa e sem fios soltos em São Paulo.",
  keywords: "câmeras para casa, CFTV residencial, monitoramento residencial, câmeras de segurança, câmeras inteligentes, intelbras, link alarmes",
  alternates: {
    canonical: "/residencial/cameras-residenciais",
  },
};

export default function CamerasResidenciais() {
  const whatsappUrl = "https://wa.me/5511910984454?text=Olá!+Gostaria+de+solicitar+um+orçamento+para+câmeras+de+segurança+residenciais.";

  const dores = [
    {
      problema: "Imagens ruins à noite",
      solucao: "Nossas câmeras contam com infravermelho inteligente ou tecnologia Full Color, entregando imagens coloridas mesmo no escuro total para identificação de rostos e placas.",
      icon: (
        <svg className="w-5 h-5 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )
    },
    {
      problema: "Fiação solta e exposta",
      solucao: "Preservamos a estética do seu lar. Criamos infraestruturas exclusivas e discretas com canaletas e caixas organizadoras de conectores, protegendo os cabos das intempéries.",
      icon: (
        <svg className="w-5 h-5 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      problema: "Invasões sem gravação",
      solucao: "Protegemos os seus registros. Instalamos sistemas com gravação redundante (NVR local + armazenamento seguro em nuvem) protegidos por nobreaks contra quedas de luz.",
      icon: (
        <svg className="w-5 h-5 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    }
  ];

  const produtos = [
    {
      nome: "Câmera Dome Interna IP",
      categoria: "Ambientes Internos",
      desc: "Compacta e discreta, ideal para monitorar salas, corredores e quartos com lente grande-angular.",
      img: "https://http2.mlstatic.com/D_NQ_NP_2X_828767-MLB109506286633_032026-F.webp",
      specs: ["Resolução Full HD 1080p", "Visão Noturna Inteligente", "Lente de 2.8mm (amplo campo)"]
    },
    {
      nome: "Câmera Bullet IP Metálica",
      categoria: "Áreas Externas",
      desc: "Altamente resistente a sol e chuva. Excelente alcance de visão noturna para fachadas e garagens.",
      img: "https://http2.mlstatic.com/D_NQ_NP_2X_956613-MLA99724876647_112025-F.webp",
      specs: ["Certificação IP67 (Proteção total)", "Case metálico robusto", "Alcance infravermelho de 30m"]
    },
    {
      nome: "Câmera Externa Wi-Fi Pro",
      categoria: "Uso Flexível",
      desc: "Equipada com duas antenas de alto ganho para ótima estabilidade sem necessidade de cabos de rede.",
      img: "https://http2.mlstatic.com/D_NQ_NP_2X_784485-MLA109808909587_0320",
      specs: ["Conexão Wi-Fi Inteligente", "Áudio bidirecional (Fale e Ouça)", "Gravação em MicroSD ou Nuvem"]
    },
    {
      nome: "Câmera Dome Externa Premium",
      categoria: "Fachadas e Quintais",
      desc: "Modelo dome reforçado contra vandalismo, ideal para beirais e garagens externas.",
      img: "https://http2.mlstatic.com/D_NQ_NP_2X_718289-MLB95528810022_102025-F.webp",
      specs: ["Resistência Antivandalismo", "Sensor CMOS de alta sensibilidade", "Vedação especial contra umidade"]
    },
    {
      nome: "Câmera Intelbras VIP Bullet",
      categoria: "Segurança de Elite",
      desc: "Câmera IP profissional com inteligência artificial ativa para reconhecimento e alertas inteligentes.",
      img: "https://cdn.awsli.com.br/2616/2616015/arquivos/45c8eae8-0e07-418d-b1a8-12b8cc659594.jpg",
      specs: ["IA: Detecção de Humanos e Carros", "Resolução Super HD 4MP", "Alimentação PoE (Cabo único)"]
    },
    {
      nome: "Gravador de Vídeo NVR/NVD",
      categoria: "Central de Processamento",
      desc: "Gravador profissional capaz de gerenciar, armazenar e disponibilizar imagens na internet com segurança.",
      img: "https://http2.mlstatic.com/D_NQ_NP_2X_966549-MLU77372558387_072024-F.webp",
      specs: ["Armazenamento em HD Homologado", "Suporte a múltiplas câmeras IP", "App para celular grátis e rápido"]
    },
    {
      nome: "Câmera Bullet Colorida Noturna",
      categoria: "Visão Full Color",
      desc: "Tecnologia com LEDs ativos que iluminam o local de forma discreta para gravar imagens coloridas à noite.",
      img: "https://cdn.awsli.com.br/2616/2616015/arquivos/17155f2b-2fb5-4b87-900e-a5ad4d886c96.jpg",
      specs: ["Noite Colorida (Full Color)", "Refletor LED inteligente", "Filtro ICR automático"]
    },
    {
      nome: "Câmera Smart Compacta Wi-Fi",
      categoria: "Segurança Prática",
      desc: "Modelo compacto e flexível para monitoramento rápido e prático de portarias e pequenos cômodos.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXwTK_Gjw-40NjhzhbxPc8qhbjb-DXW6Sp-xPHMt8gLQ&s=10",
      specs: ["Instalação rápida", "Conexão direta no app", "Sensor de movimento integrado"]
    }
  ];

  const diferenciais = [
    {
      titulo: "15+ Anos de Experiência",
      desc: "Projetos validados e equipe com amplo conhecimento em CFTV digital, redes e segurança."
    },
    {
      titulo: "Técnicos Próprios e Identificados",
      desc: "Segurança total ao receber nossa equipe. Técnicos capacitados, prestativos e uniformizados."
    },
    {
      titulo: "Infraestrutura Organizada",
      desc: "Uso de caixas de passagem e eletrodutos discretos que evitam fios pendurados ou expostos."
    },
    {
      titulo: "Garantia Real de 1 Ano",
      desc: "Garantia completa sobre os equipamentos instalados e a mão de obra realizada no local."
    }
  ];

  const faqs = [
    {
      pergunta: "Consigo ver as câmeras no celular fora de casa?",
      resposta: "Sim! Configurando nosso sistema de câmeras IP ou Wi-Fi com conexão à internet, você acessa as imagens ao vivo e as gravações em tempo real de qualquer lugar do mundo por meio do aplicativo oficial no celular (iOS e Android)."
    },
    {
      pergunta: "O que acontece se a energia da casa for cortada?",
      resposta: "Para evitar vulnerabilidades, nós recomendamos e instalamos nobreaks especiais para o sistema de segurança. Em caso de queda ou corte intencional de energia elétrica, o nobreak mantém as câmeras e o gravador funcionando perfeitamente por várias horas."
    },
    {
      pergunta: "As imagens ficam gravadas por quanto tempo?",
      resposta: "Isso varia de acordo com o tamanho do disco rígido (HD) instalado e a quantidade de câmeras. Projetamos nossos sistemas para manter o histórico de gravação por pelo menos 15 a 30 dias. Quando o espaço acaba, o sistema substitui automaticamente as imagens mais antigas."
    },
    {
      pergunta: "As câmeras possuem detecção de alarmes falsos?",
      resposta: "Sim. Nossas câmeras inteligentes com Inteligência Artificial diferenciam movimentos de cães, gatos, sombras e folhas de movimentos de pessoas ou veículos. Assim, você só recebe alertas reais no celular quando algo importante acontecer."
    },
    {
      pergunta: "A Link Alarmes oferece garantia e suporte?",
      resposta: "Oferecemos garantia de 12 meses nos equipamentos e suporte técnico especializado pós-venda. Nossa equipe conta com profissionais próprios com mais de 15 anos de experiência prática, garantindo manutenção ágil e atendimento humanizado."
    }
  ];

  return (
    <div className="flex flex-col w-full bg-slate-950 text-slate-100 overflow-x-hidden font-sans">
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 border-b border-slate-900 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-950/20 via-slate-950 to-slate-950">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Text */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <Link href="/residencial" className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors uppercase tracking-wider mb-6 bg-cyan-950/30 border border-cyan-800/30 px-3 py-1 rounded-full">
                <span>←</span> Voltar para Residencial
              </Link>
              
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest bg-blue-950/40 border border-blue-500/10 px-3.5 py-1.5 rounded-md mb-4">
                TECNOLOGIA CFTV DE ELITE
              </span>
              
              <h1 className="max-w-2xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl leading-tight">
                Sua Casa Sob Seu Olhar, de Onde Você Estiver.
              </h1>
              
              <p className="mt-6 max-w-xl text-base text-slate-400 md:text-lg leading-relaxed">
                Monitore toda a movimentação da sua residência em tempo real pelo celular. Câmeras em ultra definição com Inteligência Artificial para detecção humana e instalação profissional limpa, sem fios aparentes ou sujeira.
              </p>
              
              <ul className="mt-8 space-y-3.5 text-sm font-semibold text-slate-300">
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-cyan-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  Imagens Full HD com ótima definição noturna
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-cyan-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  Inteligência artificial integrada que elimina alarmes falsos
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-cyan-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  Infraestrutura de cabos embutida e protegida
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-cyan-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  Acesso rápido e simples pelo aplicativo no celular
                </li>
              </ul>
              
              <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-neon-blue text-sm px-8 py-4 flex gap-2 items-center justify-center font-bold">
                  Solicitar Orçamento Grátis
                </a>
                <a href="#catalogo" className="btn-neon-outline text-sm px-8 py-4 flex gap-2 items-center justify-center font-semibold">
                  Ver Modelos de Câmeras
                </a>
              </div>
            </div>
            
            {/* Hero Image / Phone mockup */}
            <div className="lg:col-span-5 relative w-full flex justify-center lg:justify-end">
              <div className="relative p-1.5 rounded-2xl bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-slate-900 border border-slate-800 shadow-[0_0_50px_rgba(6,182,212,0.05)] group overflow-hidden max-w-[420px] w-full">
                <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full rounded-xl overflow-hidden bg-slate-950">
                  <img
                    src="https://s2-techtudo.glbimg.com/jnEO_Yn6nqGj9SlW7VH4aBgV2aA=/0x0:698x475/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/C/Q/PlIlVRRDWaEkRd2A7qyQ/intelbras-site.png"
                    alt="Aplicativo de visualização de câmeras ao vivo no celular"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent opacity-80"></div>
                  
                  {/* Floating live badge */}
                  <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur border border-slate-800 p-3 rounded-lg flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <span className="glow-dot-emerald"></span>
                      <span className="text-cyan-400 font-bold">TRANSMISSÃO AO VIVO</span>
                    </div>
                    <span className="text-slate-400">1080p HD</span>
                  </div>
                </div>
                <div className="mt-4 px-4 pb-2 flex justify-between items-center text-[10px] text-slate-500 font-mono">
                  <span>DISPOSITIVO MÓVEL</span>
                  <span>ACESSO CLOUD</span>
                  <span>SISTEMA ATIVO</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Pain Points & Solution Section */}
      <section className="py-24 bg-slate-950 border-b border-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs font-bold text-rose-500 uppercase tracking-widest bg-rose-950/20 border border-rose-500/10 px-3 py-1 rounded">
              TRANQUILIDADE E PREVENÇÃO
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mt-4">
              Por que as câmeras da Link Alarmes fazem a diferença?
            </h2>
            <p className="mt-4 text-slate-400 text-sm max-w-2xl mx-auto">
              Sistemas de segurança comuns geram falsas sensações de proteção. Nós projetamos e instalamos redes de CFTV profissionais que oferecem robustez técnica e facilidade de uso diário.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Dores & Soluções Cards */}
            <div className="lg:col-span-7 space-y-6">
              {dores.map((dor) => (
                <div key={dor.problema} className="card-tech p-6 border border-slate-900 hover:border-blue-500/20 transition-all flex gap-5 items-start">
                  <div className="h-10 w-10 rounded-lg bg-slate-900/60 border border-slate-800 flex items-center justify-center flex-shrink-0 text-xl shadow-inner">
                    {dor.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white uppercase tracking-wider mb-2">{dor.problema}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{dor.solucao}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Illustrative Image */}
            <div className="lg:col-span-5 relative w-full flex justify-center">
              <div className="relative p-1 rounded-2xl bg-gradient-to-br from-blue-500/5 to-slate-900 border border-slate-800/80 shadow-[0_0_40px_rgba(6,182,212,0.02)] overflow-hidden w-full max-w-[450px]">
                <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-slate-900">
                  <img
                    src="https://www.verisure.com.br/sites/br/files/flmngr/drupal/blog/o-que-e-uma-camera-de-seguranca-residencial%20%281%29.jpg"
                    alt="Câmera de segurança residencial instalada monitorando a fachada externa da casa"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-50"></div>
                </div>
                <div className="p-4 bg-slate-900/30 text-center border-t border-slate-900">
                  <p className="text-[11px] font-mono text-cyan-400 font-semibold uppercase tracking-wider">
                    [ MONITORAMENTO EXTERNO ATIVO 24H ]
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Equipment Showcase (Grid of 8 products) */}
      <section id="catalogo" className="py-24 bg-slate-900/30 border-b border-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-950/20 border border-cyan-500/10 px-3 py-1 rounded">
              NOSSO PORTFÓLIO
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mt-4">
              Equipamentos de Alta Performance para Sua Casa
            </h2>
            <p className="mt-4 text-slate-400 text-sm">
              Trabalhamos com os melhores fabricantes do mercado. Nossos engenheiros selecionam a câmera ideal para a necessidade específica de cada ponto da sua residência.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {produtos.map((produto) => (
              <div key={produto.nome} className="card-tech flex flex-col justify-between h-full border border-slate-900 hover:border-blue-500/20 transition-all duration-300">
                <div>
                  
                  {/* Image container */}
                  <div className="relative w-full h-44 rounded-lg bg-slate-950 border border-slate-900 p-4 mb-5 flex items-center justify-center overflow-hidden">
                    <img
                      src={produto.img}
                      alt={produto.nome}
                      className="max-h-full max-w-full object-contain transition-transform duration-500 hover:scale-110"
                    />
                    <span className="absolute top-2 left-2 text-[9px] font-bold text-cyan-400 uppercase bg-cyan-950/80 border border-cyan-800/50 px-2 py-0.5 rounded">
                      {produto.categoria}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 leading-tight">{produto.nome}</h3>
                  <p className="text-[11px] text-slate-400 leading-relaxed mb-5">
                    {produto.desc}
                  </p>
                </div>
                
                {/* Tech specifications */}
                <div>
                  <div className="border-t border-slate-800/80 pt-4 mb-5">
                    <ul className="space-y-1.5 text-[10px] text-slate-300 font-mono">
                      {produto.specs.map((spec, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <span className="text-cyan-400 font-bold font-sans">»</span>
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-neon-outline text-xs w-full py-2.5 flex items-center justify-center gap-1 font-semibold">
                    Solicitar Orçamento
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Installation Excellence Section */}
      <section className="py-24 bg-slate-950 border-b border-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Technician action image */}
            <div className="lg:col-span-5 relative w-full flex justify-center order-last lg:order-first">
              <div className="relative p-1.5 rounded-2xl bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-slate-900 border border-slate-800 shadow-[0_0_50px_rgba(6,182,212,0.05)] group overflow-hidden max-w-[420px] w-full">
                <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-slate-950">
                  <img
                    src="https://www.tecsevenautomacao.com.br/imagens/informacoes/venda-e-instalacao-cameras-seguranca-03.jpg"
                    alt="Técnico profissional instalando e testando câmera de segurança de alta qualidade em uma parede externa"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-50"></div>
                </div>
                <div className="mt-4 px-4 pb-2 flex justify-between items-center text-[10px] text-slate-500 font-mono">
                  <span>INFRAESTRUTURA LIMPA</span>
                  <span>TÉCNICOS CERTIFICADOS</span>
                </div>
              </div>
            </div>

            {/* Content Details */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-950/20 border border-cyan-500/10 px-3 py-1 rounded">
                PADRÃO DE ELITE
              </span>
              
              <h2 className="text-3xl font-bold text-white sm:text-4xl mt-4 leading-tight">
                Instalação Discreta, Organizada e com Acabamento Perfeito.
              </h2>
              
              <p className="mt-6 text-slate-400 text-sm leading-relaxed">
                Segurança de verdade exige capricho técnico. Não permitimos fiações expostas que possam ser cortadas facilmente ou que estraguem a decoração da sua casa. Nossos profissionais constroem o caminho dos cabos de forma invisível ou extremamente protegida em canaletas de alta resistência.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 w-full">
                {diferenciais.map((item) => (
                  <div key={item.titulo} className="flex gap-3.5 items-start">
                    <div className="h-6 w-6 rounded-full bg-cyan-950/40 border border-cyan-800/40 flex items-center justify-center flex-shrink-0 text-cyan-400">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">{item.titulo}</h4>
                      <p className="text-[11px] text-slate-400 leading-normal">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 border-t border-slate-900 pt-8 w-full flex items-center justify-between text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <span className="glow-dot-emerald"></span>
                  <span className="font-mono text-[10px]">TÉCNICOS PRONTOS EM SP</span>
                </div>
                <span className="text-white bg-blue-600 px-3 py-1 rounded text-[10px] font-extrabold uppercase tracking-wide">
                  Mais de 15 anos de mercado
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-900/30 border-b border-slate-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-950/20 border border-cyan-500/10 px-3 py-1 rounded">
              DÚVIDAS RESOLVIDAS
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mt-4">
              Perguntas Frequentes sobre CFTV
            </h2>
            <p className="mt-4 text-slate-400 text-sm">
              Esclarecemos as principais dúvidas técnicas de nossos clientes para ajudar na sua tomada de decisão.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group card-tech p-5 border border-slate-900 hover:border-slate-800/80 transition-all [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer focus:outline-none">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider pr-4 text-left">
                    {faq.pergunta}
                  </h4>
                  <span className="ml-1.5 flex-shrink-0 rounded-full bg-slate-950 border border-slate-800 p-1 text-slate-400 group-open:rotate-180 transition-transform duration-300">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="mt-4 border-t border-slate-800/60 pt-4">
                  <p className="text-xs text-slate-400 leading-relaxed text-left">
                    {faq.resposta}
                  </p>
                </div>
              </details>
            ))}
          </div>

        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-slate-950 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-5xl tracking-tight leading-tight">
            Garanta a Proteção Completa do Seu Lar Hoje.
          </h2>
          <p className="mt-6 text-slate-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Fale com a nossa equipe em São Paulo, tire dúvidas do seu projeto e garanta uma instalação limpa, profissional e garantida por 1 ano.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-neon-blue text-sm px-10 py-4 flex gap-2.5 items-center justify-center font-bold shadow-[0_0_20px_rgba(59,130,246,0.3)]">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.59 2.016 14.133.994 11.516.994c-5.44 0-9.866 4.372-9.87 9.802 0 1.777.468 3.514 1.356 5.05L2.002 21.55l6.082-1.597c1.531.837 3.096 1.201 4.563 1.201zm11.382-7.51c-.3-.15-1.772-.875-2.047-.975-.276-.1-.476-.15-.676.15-.2.3-.772.975-.947 1.175-.175.2-.35.225-.65.075-.3-.15-1.264-.467-2.407-1.485-.89-.792-1.49-1.77-1.665-2.07-.175-.3-.019-.462.13-.61.135-.133.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.676-1.625-.926-2.225-.244-.589-.49-.51-.676-.52-.175-.01-.375-.01-.575-.01-.2 0-.525.075-.8.375-.275.3-1.05 1.025-1.05 2.5s1.075 2.9 1.225 3.1c.15.2 2.11 3.22 5.116 4.52.716.31 1.274.495 1.71.635.717.227 1.37.195 1.885.118.574-.085 1.772-.725 2.022-1.425.25-.7.25-1.3 0-1.425-.075-.125-.275-.2-.575-.35z" />
              </svg>
              Orçamento via WhatsApp
            </a>
            <span className="text-slate-500 font-mono text-xs">Ou ligue: (11) 91098-4454</span>
          </div>
          
        </div>
      </section>

    </div>
  );
}
