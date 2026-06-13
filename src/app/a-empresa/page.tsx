import { Metadata } from "next";

export const metadata: Metadata = {
  title: "A Empresa | Link Alarmes | Segurança de Elite",
  description: "Conheça a história, missão e os valores da Link Alarmes, referência em segurança eletrônica e engenharia de redes na capital paulista.",
  alternates: {
    canonical: "/a-empresa",
  },
};

export default function AEmpresa() {
  const whatsappUrl = "https://wa.me/5511910984454?text=Olá!+Gostaria+de+solicitar+um+orçamento+com+a+Link+Alarmes.";

  return (
    <div className="flex flex-col w-full bg-slate-950 text-slate-100 overflow-x-hidden font-sans">
      
      {/* Page Header (Hero Block) */}
      <section className="relative py-16 md:py-24 border-b border-slate-900 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-950/20 via-slate-950 to-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-950/30 border border-cyan-500/10 px-3.5 py-1.5 rounded-full mb-6">
            Quem Somos
          </span>
          <h1 className="max-w-4xl text-3xl font-extrabold tracking-tight text-white sm:text-5xl leading-tight">
            Link Alarmes - Sistemas de segurança na capital paulista.
          </h1>
          <p className="mt-6 max-w-3xl text-base text-slate-400 md:text-lg leading-relaxed">
            A Link Alarmes nasceu do sonho de um garoto apaixonado por tecnologia, que iniciou seus primeiros cursos de computação e manutenção de computadores antes dos anos 2000 — época em que não se precisava tanto de sistemas de segurança como hoje, e estes sequer existiam fora das grandes corporações.
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-slate-950 border-b border-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7">
              <h2 className="text-2xl font-bold text-white sm:text-4xl">
                Nossa História: Acompanhando a Evolução e Protegendo as Conquistas dos Nossos Clientes.
              </h2>
              <div className="mt-6 space-y-4 text-slate-400 text-base leading-relaxed">
                <p>
                  A história da Link Alarmes está intimamente ligada ao crescimento acelerado e pujante da necessidade por sistemas de segurança residencial e comercial de alta confiabilidade.
                </p>
                <p>
                  Percebendo a carência crítica por serviços de alto padrão técnico — em que clientes corporativos e proprietários residenciais não necessitavam de simples revendedores de alarmes e câmeras de prateleira, mas sim de profissionais de segurança capazes de projetar sistemas imunes a sabotagens e redes que suportassem grandes fluxos de dados sem qualquer oscilação —, a Link Alarmes foi estruturada.
                </p>
                <p>
                  Hoje, operamos de forma estratégica com tecnologia de ponta, integrando sistemas de CFTV inteligente com inteligência artificial aplicada, barreiras infravermelhas perimetrais, controle de acesso à prova de falhas de energia e cabeamento estruturado corporativo. Consolidamo-nos como a escolha definitiva de quem não aceita amadorismo quando o assunto é proteção.
                </p>
              </div>
            </div>

            {/* Right Map/Tech Badge Column */}
            <div className="lg:col-span-5 card-tech p-8 flex flex-col justify-center min-h-[300px] border border-cyan-500/10 text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-cyan-950/55 flex items-center justify-center text-cyan-400 mb-6">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Presença Operacional</h3>
              <p className="text-sm text-slate-400">
                Técnicos de prontidão e centrais de monitoramento online 24h por dia para proteger seu patrimônio sem interrupções.
              </p>
              <div className="mt-6 flex flex-col items-center gap-3 text-xs text-cyan-400 font-mono">
                <div className="bg-slate-900 border border-slate-800 px-4 py-2 rounded-lg w-full">
                  <span className="block text-white font-extrabold text-sm uppercase tracking-wider">SAÚDE - SP</span>
                  <span className="text-slate-400">O Coração da Empresa</span>
                </div>
                <div className="bg-slate-900 border border-slate-800 px-4 py-2 rounded-lg w-full">
                  <span className="block text-white font-extrabold text-sm uppercase tracking-wider">SÃO PAULO - SP</span>
                  <span className="text-slate-400">Presença Operacional</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mission, Vision & Values (Essence) */}
      <section className="py-20 bg-slate-900/30 border-b border-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl font-bold text-white sm:text-4xl">
              Nossa Essência Corporativa
            </h2>
            <p className="mt-4 text-slate-400">
              Guiados por padrões de conformidade técnica e proteção patrimonial inabalável.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Missão */}
            <div className="card-tech">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xl">🎯</span>
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">Missão</h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Fornecer nosso conhecimento em sistemas úteis à segurança de nossos amigos e clientes. Proteger vidas e patrimônios com integridade, agilidade e máxima eficiência.
              </p>
            </div>

            {/* Visão */}
            <div className="card-tech">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xl">👁️</span>
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">Visão</h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Consolidar-se como a maior empresa parceira em tecnologia de segurança da Capital Paulista, sendo a número 1 em satisfação e confiança de nossos clientes.
              </p>
            </div>

          </div>

          {/* Valores Grid */}
          <div className="mt-12">
            <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-6 text-center">Nossos Valores Corporativos</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Valor 1 */}
              <div className="bg-slate-950 border border-slate-900 rounded-xl p-6">
                <span className="text-3xl block mb-4">⚖️</span>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">Ética Inabalável</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Transparência absoluta no desenho dos projetos, entregando sempre exatamente a robustez necessária, sem custos ocultos ou sobressaltos contratuais.
                </p>
              </div>

              {/* Valor 2 */}
              <div className="bg-slate-950 border border-slate-900 rounded-xl p-6">
                <span className="text-3xl block mb-4">⚡</span>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">Prontidão</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Resposta imediata em situações emergenciais. Para nós, a segurança e a conexão do cliente são prioridades absolutas.
                </p>
              </div>

              {/* Valor 3 */}
              <div className="bg-slate-950 border border-slate-900 rounded-xl p-6">
                <span className="text-3xl block mb-4">🚀</span>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">Inovação de Ponta</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Atualização contínua com os padrões globais mais modernos de sistemas de alarmes, videomonitoramento inteligente e Wi-Fi 6 corporativo.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Difference of Sênior Team */}
      <section className="py-20 bg-slate-950 border-b border-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Visual Column / Tech Points */}
            <div className="order-2 lg:order-1 space-y-4">
              <div className="card-tech flex gap-4 items-start">
                <span className="text-lg bg-cyan-950 text-cyan-400 h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0">1</span>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Sistema de Alarme de Verdade</h4>
                  <p className="text-xs text-slate-400 mt-1">Posicionamento fino de sensores inteligentes para distinguir humanos e veículos de sombras, vento, chuva ou animais domésticos, eliminando disparos falsos noturnos.</p>
                </div>
              </div>
              
              <div className="card-tech flex gap-4 items-start">
                <span className="text-lg bg-cyan-950 text-cyan-400 h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0">2</span>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Dimensionamento de Autonomia</h4>
                  <p className="text-xs text-slate-400 mt-1">Sistemas de baterias e nobreaks dimensionados cientificamente para suportar longos períodos de queda de energia sem desligar os alarmes ou câmeras.</p>
                </div>
              </div>

              <div className="card-tech flex gap-4 items-start">
                <span className="text-lg bg-cyan-950 text-cyan-400 h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0">3</span>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">CFTV IP 4K</h4>
                  <p className="text-xs text-slate-400 mt-1">Sistemas de câmeras com alta qualidade de resolução 4K. Imagens em tempo real na palma da sua mão, em qualquer lugar do mundo.</p>
                </div>
              </div>

              <div className="card-tech flex gap-4 items-start">
                <span className="text-lg bg-cyan-950 text-cyan-400 h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0">4</span>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Infraestrutura de Redes Isolada</h4>
                  <p className="text-xs text-slate-400 mt-1">Isolamento completo dos setores que usam a rede da sua residência e empresa (sistema de câmeras, controle de acesso, computadores pessoais e Wi-Fi de visitantes).</p>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl font-bold text-white sm:text-4xl">
                Por que os Conhecimentos Técnicos da Link Alarmes Fazem a Diferença?
              </h2>
              <p className="mt-6 text-slate-400 leading-relaxed text-sm">
                Instalar sistemas de segurança não consiste apenas em chegar com um sensor com fita dupla-face e colá-lo em qualquer lugar!
              </p>
              <p className="mt-4 text-slate-400 leading-relaxed text-sm">
                Cada equipamento possui suas próprias características técnicas e aplicações específicas: altura de instalação adequada, ambiente mais indicado, tipo de movimento a detectar, variação de temperatura de ambientes, detecção de quebra de vidros, sensibilidade sísmica, sonoridade ideal, ângulo e abertura da lente, entre outros.
              </p>
              <p className="mt-4 text-slate-400 leading-relaxed text-sm">
                Tudo isso opera sobre uma infraestrutura de rede robusta, com estrutura de comunicação e alimentação elétrica redundantes. Integramos cabeamento estruturado, conexão Wi-Fi ampla, racks organizados com padrão de TI e um projeto completo em mãos antes de iniciar.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-950/20 via-slate-950 to-slate-950 text-center">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Tem uma necessidade? Fale conosco!
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-sm">
            Tire suas dúvidas e entenda exatamente o que você precisa para o seu projeto, sem custos comerciais.
          </p>
          <div className="mt-8">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon-cyan text-sm px-8 py-4 flex gap-2 items-center justify-center w-full sm:w-auto mx-auto"
            >
              Falar com a Link
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
