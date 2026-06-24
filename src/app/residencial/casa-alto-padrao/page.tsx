import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Segurança e Redes para Casas de Alto Padrão | Link Alarmes",
  description: "Projetos de infraestrutura de TI, rede Gigabit, Wi-Fi 6, controle de acesso e alarmes para residências de alto padrão em São Paulo. Fale com especialistas.",
  keywords: "segurança alto padrão, tecnologia residencial, automação de luxo, Wi-Fi premium, rack técnico",
  alternates: {
    canonical: "/residencial/casa-alto-padrao",
  },
};

export default function CasaAltoPadrao() {
  const whatsappUrl = "https://wa.me/5511910984454?text=Olá!+Gostaria+de+solicitar+um+estudo+técnico+exclusivo+para+residência+de+alto+padrão.";

  return (
    <div className="flex flex-col w-full bg-slate-950 text-slate-100 overflow-x-hidden font-sans">
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 border-b border-slate-900 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-950/20 via-slate-950 to-slate-950">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <Link href="/residencial" className="text-xs font-bold text-blue-400 hover:underline uppercase tracking-wider mb-4 flex items-center gap-1.5">
            <span>🛡️</span> Portal Residencial
          </Link>
          <h1 className="max-w-4xl text-3xl font-extrabold tracking-tight text-white sm:text-5xl leading-tight">
            Além do básico: projetos de segurança e redes para casas de alto padrão.
          </h1>
          <p className="mt-6 max-w-3xl text-base text-slate-400 md:text-lg leading-relaxed">
            Fugimos do conceito de "kit residencial padrão". Desenhamos projetos onde segurança, conexões de internet e controle de acesso funcionam de forma integrada, com infraestrutura organizada e acabamento discreto.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href={whatsappUrl} className="btn-neon-blue text-sm px-8 py-4 flex gap-2 items-center justify-center">
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Roteiro / Apresentação do Conceito */}
      <section className="py-20 bg-slate-950 border-b border-slate-900">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-5 sticky top-24">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest bg-blue-950/20 border border-blue-500/10 px-3 py-1 rounded">
                Diferença Prática
              </span>
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl mt-4 leading-tight">
                Por que residências de alto padrão exigem um projeto exclusivo?
              </h2>
              <p className="mt-6 text-slate-400 text-sm leading-relaxed">
                Um imóvel amplo com arquitetura planejada não combina com instalações improvisadas ou cabos aparentes. Mais do que equipamentos individuais, a tranquilidade do seu lar exige que todos os sistemas operem em harmonia e com máxima estabilidade.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-8">
              <div className="bg-slate-900/50 border border-slate-900 p-8 rounded-xl">
                <h3 className="text-lg font-bold text-rose-500 mb-4 flex items-center gap-2">
                  <span>❌</span> O "Kit Padrão" de Segurança
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Geralmente consiste na instalação simples de câmeras comuns, uma cerca elétrica convencional, interfone e motor de portão. Cada aparelho funciona de forma isolada, gerando falhas frequentes de conexão, cabos visíveis nas fachadas e nenhuma inteligência integrada.
                </p>
              </div>

              <div className="bg-slate-900/50 border border-blue-500/20 p-8 rounded-xl">
                <h3 className="text-lg font-bold text-blue-400 mb-4 flex items-center gap-2">
                  <span>✅</span> O Projeto Integrado Link Alarmes
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Acompanhamos desde o projeto de infraestrutura do imóvel até a finalização estética discreta. Desenvolvemos soluções em que o alarme, as câmeras, o controle de acesso e as redes conversam entre si, garantindo proteção sem interferir na decoração da residência.
                </p>
                <div className="border-t border-slate-800 pt-4 flex gap-4 text-[10px] text-slate-400">
                  <span>• Tubulação embutida</span>
                  <span>• Equipamentos discretos</span>
                  <span>• Automação integrada</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* A Base de Tudo: Rede Gigabit e Conectividade */}
      <section className="py-20 bg-slate-900/30 border-b border-slate-900">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
              Rede Gigabit: a base de uma casa inteligente
            </h2>
            <p className="mt-4 text-slate-400 text-sm">
              Um sistema de segurança só é estável se a rede de internet suportar o fluxo de dados. Desenhamos redes preparadas para cobrir todas as demandas da residência de forma contínua.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-tech p-6 border border-slate-900">
              <span className="text-blue-400 text-2xl">📶</span>
              <h3 className="text-base font-bold text-white mt-4 mb-2">Redundância e Wi-Fi 6</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Roteadores modernos que cobrem 100% do imóvel. Configuração de rede reserva para garantir internet no computador do home office e celulares mesmo se o link principal cair.
              </p>
            </div>

            <div className="card-tech p-6 border border-slate-900">
              <span className="text-blue-400 text-2xl">🔌</span>
              <h3 className="text-base font-bold text-white mt-4 mb-2">Tomadas RJ Dedicadas</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Pontos físicos de cabo de rede para aparelhos que exigem estabilidade (Smart TVs, consoles de videogame e computadores de trabalho), liberando o sinal sem fio.
              </p>
            </div>

            <div className="card-tech p-6 border border-slate-900">
              <span className="text-blue-400 text-2xl">🔄</span>
              <h3 className="text-base font-bold text-white mt-4 mb-2">Sem Travamento de Banda</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Espaço de tráfego planejado para suportar o ecossistema completo da casa: câmeras IP de alta definição, alarmes, som ambiente, assistentes virtuais (Alexa/Google Home) e smartphones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* O Que a Link Entrega */}
      <section className="py-20 bg-slate-950 border-b border-slate-900">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
              Nossas entregas para o segmento de alto padrão
            </h2>
            <p className="mt-4 text-slate-400 text-sm">
              Implementamos as soluções mais adequadas para a rotina e arquitetura de cada propriedade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-900/30 border border-slate-900 p-6 rounded-xl">
              <h4 className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-2">Alarme Monitorado Inteligente</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Sensores de segurança e centrais de alarmes planejados em versão cabeada (oculta na infraestrutura) ou totalmente sem fio com longa duração de bateria e criptografia contra sabotagem.
              </p>
            </div>

            <div className="bg-slate-900/30 border border-slate-900 p-6 rounded-xl">
              <h4 className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-2">CFTV e Câmeras IP</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Instalação de câmeras com alta resolução para monitoramento contínuo das áreas internas e limites do terreno, com imagens de qualidade visíveis diretamente no seu celular de onde você estiver.
              </p>
            </div>

            <div className="bg-slate-900/30 border border-slate-900 p-6 rounded-xl">
              <h4 className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-2">Infraestrutura e Redes</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Planejamento dos pontos de cabo de rede para todos os aparelhos fixos e distribuição ideal das antenas Mesh de Wi-Fi 6 de acordo com a área do imóvel.
              </p>
            </div>

            <div className="bg-slate-900/30 border border-slate-900 p-6 rounded-xl">
              <h4 className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-2">Controle de Acesso</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Vídeo porteiros inteligentes com acesso remoto, fechaduras biométricas digitais de embutir e controle de portões de pedestres e veículos com sistemas de eclusa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bastidores Técnicos da Instalação */}
      <section className="py-20 bg-slate-900/30 border-b border-slate-900">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl leading-tight">
                Infraestrutura de rede estruturada e identificada
              </h2>
              <p className="mt-6 text-slate-400 text-sm leading-relaxed">
                Para garantir a durabilidade e a facilidade de manutenções futuras ou ampliações de aparelhos, a Link Alarmes dimensiona o projeto de rede residencial com rigor técnico:
              </p>
              
              <ul className="mt-6 space-y-4 text-xs font-semibold text-slate-200">
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                  Utilização de cabos de rede específicos para alto tráfego de dados e blindagem contra surtos elétricos.
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                  Roteadores e switches modernos com suporte a múltiplos dispositivos simultâneos.
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                  Configurações de rede com suporte a grande quantidade de endereços de IP.
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                  Uso de redes virtuais (VLANs e VPNs) para isolamento seguro de acessos e dispositivos inteligentes.
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                  Racks compactos organizados e fiação totalmente identificada para facilitar manutenções.
                </li>
              </ul>
            </div>
            
            <div className="card-tech p-8 flex flex-col justify-between border border-cyan-500/10 min-h-[350px]">
              <div className="border-b border-slate-800 pb-2 flex items-center justify-between">
                <span className="text-slate-500 font-mono text-[10px]">// DIAGNÓSTICO DO PROJETO ESTRUTURADO</span>
                <span className="glow-dot-emerald"></span>
              </div>
              <div className="space-y-4 text-xs font-mono text-cyan-400 py-6">
                <div>[✔] REDE GIGABIT: OPERANDO COM SUPORTE A AUTOMAÇÃO</div>
                <div>[✔] CABEAMENTO: ESTRUTURADO E INTEGRADO</div>
                <div>[✔] ISOLAMENTO SEGURO: VLANS CONFIGURADAS E ATIVAS</div>
                <div>[✔] RACK TÉCNICO: DEVIDAMENTE IDENTIFICADO</div>
                <div>[✔] EXPANSÕES FUTURAS: PROJETO DIMENSIONADO</div>
              </div>
              <div className="border-t border-slate-800 pt-4 flex justify-between items-center text-[10px] text-slate-500">
                <span>Vila da Saúde - São Paulo - SP</span>
                <span className="text-white bg-blue-600 px-2.5 py-0.5 rounded font-extrabold uppercase">Mais de 15 Anos de Experiência</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parceria com Arquitetos, Engenheiros e Proprietários */}
      <section className="py-20 bg-slate-950 border-b border-slate-900">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-950/20 border border-cyan-500/10 px-3 py-1 rounded">
                Parceria Técnica e Projetos
              </span>
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl leading-tight">
                Suporte completo para Arquitetos, Engenheiros e Proprietários
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                Trabalhamos em conjunto com profissionais de arquitetura e engenharia civil desde as fases iniciais da obra. Garantimos que a infraestrutura de tubulações, caixas de passagem e pontos elétricos seja prevista de forma correta, evitando retrabalhos e quebras de paredes após o acabamento.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs text-slate-300">
                <div className="bg-slate-900/40 p-4 border border-slate-900 rounded-lg">
                  <h4 className="font-bold text-white mb-1">💻 Projetos em AutoCAD</h4>
                  <p className="text-slate-400 text-[11px]">Entregamos o mapeamento completo dos pontos de cabos, câmeras, sensores e centrais integrado à planta do imóvel.</p>
                </div>
                <div className="bg-slate-900/40 p-4 border border-slate-900 rounded-lg">
                  <h4 className="font-bold text-white mb-1">🛠️ Acompanhamento de Obra</h4>
                  <p className="text-slate-400 text-[11px]">Visitas técnicas periódicas para orientar a equipe de eletricistas e validar a passagem correta dos conduítes.</p>
                </div>

                <div className="bg-slate-900/40 p-4 border border-slate-900 rounded-lg">
                  <h4 className="font-bold text-white mb-1">🔄 Manutenção e Suporte</h4>
                  <p className="text-slate-400 text-[11px]">Planos de manutenção preventiva para manter o ecossistema sempre atualizado, limpo e operando sem falhas.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-slate-900/20 border border-slate-900 p-8 rounded-2xl">
              <h3 className="text-lg font-bold text-white mb-4">Está projetando ou construindo?</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                Seja para integrar soluções ao seu projeto arquitetônico ou para garantir que sua nova residência nasça com a infraestrutura correta, nossa equipe fornece assessoria especializada para tirar dúvidas e criar o desenho técnico ideal.
              </p>
              
              <ul className="space-y-3.5 text-xs text-slate-300 mb-8">
                <li className="flex items-center gap-2.5">
                  <span className="text-cyan-400">✔</span> Mapeamento de pontos de Wi-Fi e CFTV
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-cyan-400">✔</span> Memorial descritivo de cabos e equipamentos
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-cyan-400">✔</span> Indicação técnica para projetos de automação
                </li>
              </ul>
              
              <Link href={whatsappUrl} className="btn-neon-outline text-xs w-full py-3.5 flex items-center justify-center gap-2">
                <span>Falar com nosso Setor Técnico</span>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-slate-950 text-center">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-white sm:text-4xl">
            Sua casa com a infraestrutura e a proteção que ela precisa.
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
            Fale com a nossa equipe em São Paulo e agende uma visita técnica para planejarmos o seu projeto estruturado.
          </p>
          <div className="mt-8 flex justify-center">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-neon-blue text-sm px-8 py-4 flex gap-2 items-center justify-center">
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
