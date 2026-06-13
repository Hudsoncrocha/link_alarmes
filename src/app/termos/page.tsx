import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso | Link Alarmes",
  description: "Termos e condições de uso do site oficial da Link Alarmes. Navegue com segurança e conheça nossas diretrizes comerciais e institucionais.",
  alternates: {
    canonical: "/termos",
  },
};

export default function Termos() {
  return (
    <div className="flex flex-col w-full bg-slate-950 text-slate-100 overflow-x-hidden font-sans py-16 md:py-24">
      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <header className="border-b border-slate-900 pb-8 mb-8">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block mb-3 font-mono">
            Conformidade Legal
          </span>
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
            Termos e Condições de Uso do Site
          </h1>
          <p className="text-xs text-slate-500 mt-2">Última atualização: 27 de Maio de 2026</p>
        </header>

        {/* Content body */}
        <div className="prose prose-invert max-w-none text-slate-400 text-sm leading-relaxed space-y-6">
          <p>
            Seja bem-vindo ao site oficial da Link Alarmes. Ao navegar, acessar ou interagir com nosso site, preencher nossos formulários de contato ou utilizar nossos canais de conversação como o WhatsApp, você concorda expressa e integralmente com os presentes Termos e Condições de Uso. Caso não concorde com qualquer disposição aqui descrita, orientamos que interrompa a navegação imediatamente.
          </p>

          <section className="space-y-3 pt-4">
            <h2 className="text-lg font-bold text-white uppercase tracking-wider">
              1. Finalidade do Portal
            </h2>
            <p>
              O site da Link Alarmes tem como objetivo principal apresentar ao público corporativo, residencial e condominial nossas soluções profissionais em segurança eletrônica de ponta, monitoramento de alarmes, CFTV inteligente, controle de acesso e engenharia de redes. As informações disponibilizadas têm caráter estritamente institucional, informativo e comercial.
            </p>
          </section>

          <section className="space-y-3 pt-4">
            <h2 className="text-lg font-bold text-white uppercase tracking-wider">
              2. Propriedade Intelectual e Autoral
            </h2>
            <p>
              Todo o conteúdo disponível neste site — incluindo, mas não se limitando a, textos persuasivos, descritivos de soluções, logotipos, imagens conceituais, ícones, esquemas de engenharia, layouts e códigos-fonte — é de propriedade exclusiva da Link Alarmes ou de seus licenciadores, estando protegido pela legislação nacional de direitos autorais e propriedade intelectual.
            </p>
            <p>
              É expressamente vedada a reprodução total ou parcial, cópia, distribuição ou modificação de qualquer material sem nossa prévia e expressa autorização por escrito.
            </p>
          </section>

          <section className="space-y-3 pt-4">
            <h2 className="text-lg font-bold text-white uppercase tracking-wider">
              3. Limitação de Responsabilidade
            </h2>
            <p>
              A Link Alarmes atua com diligência extrema para garantir que as informações, especificações técnicas e artigos de blog contidos neste website sejam precisos e atualizados. Contudo, o conteúdo é fornecido &ldquo;no estado em que se encontra&rdquo;, não constituindo garantia contratual expressa de eficácia técnica ou promessa absoluta de imunidade contra ações delituosas de terceiros.
            </p>
            <p>
              A contratação efetiva de nossos serviços de monitoramento, instalação e suporte emergencial é regida por contratos de prestação de serviços individuais e específicos de engenharia, onde ficam pactuadas as condições técnicas de cada projeto sob medida.
            </p>
          </section>

          <section className="space-y-3 pt-4">
            <h2 className="text-lg font-bold text-white uppercase tracking-wider">
              4. Links de Terceiros e Canais Externos
            </h2>
            <p>
              Para otimizar o seu atendimento, nosso site disponibiliza links diretos de direcionamento para o aplicativo de mensagens WhatsApp. O uso de tais canais externos de terceiros é regido pelas políticas de privacidade e termos de uso do próprio fornecedor (Meta Inc.), não possuindo a Link Alarmes qualquer gerência ou responsabilidade sobre a estabilidade ou segurança das plataformas de terceiros.
            </p>
          </section>

          <footer className="border-t border-slate-900 pt-8 mt-12 text-xs text-slate-500 font-mono">
            <span>Link Alarmes - Engenharia de Segurança de Elite.</span>
          </footer>
        </div>

      </article>
    </div>
  );
}
