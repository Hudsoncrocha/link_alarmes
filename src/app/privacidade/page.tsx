import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade | Link Alarmes",
  description: "Política de privacidade de dados e conformidade com a LGPD da Link Alarmes. Entenda como protegemos seus dados e imagens de monitoramento.",
  alternates: {
    canonical: "/privacidade",
  },
};

export default function Privacidade() {
  return (
    <div className="flex flex-col w-full bg-slate-950 text-slate-100 overflow-x-hidden font-sans py-16 md:py-24">
      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <header className="border-b border-slate-900 pb-8 mb-8">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block mb-3 font-mono">
            Conformidade LGPD
          </span>
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
            Política de Privacidade
          </h1>
          <p className="text-xs text-slate-500 mt-2">Última atualização: 27 de Maio de 2026</p>
        </header>

        {/* Content body */}
        <div className="prose prose-invert max-w-none text-slate-400 text-sm leading-relaxed space-y-6">
          <p>
            A Link Alarmes tem o compromisso de respeitar a privacidade dos seus usuários e clientes. Entendemos a importância da proteção de dados pessoais e operamos em estrita conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018). Nosso objetivo é garantir que seus dados sejam tratados de forma segura, ética e legal.
          </p>
          <p>
            Esta Política de Privacidade descreve de forma transparente quais dados pessoais coletamos, como os tratamos, armazenamos e protegemos, demonstrando nosso compromisso em cumprir integralmente a legislação vigente.
          </p>

          <section className="space-y-4 pt-4">
            <h2 className="text-lg font-bold text-white uppercase tracking-wider">
              1. Quais dados coletamos e para que servem?
            </h2>
            <p>Coletamos dados em dois momentos principais:</p>
            
            <div className="pl-4 border-l border-slate-900 space-y-4">
              <div>
                <h3 className="font-semibold text-slate-200 text-sm">A) Contatos Comerciais e Orçamentos</h3>
                <p className="text-xs text-slate-400 mt-1">
                  • <strong>Dados:</strong> Nome, e-mail, telefone/WhatsApp, cidade e descrição da sua necessidade.<br />
                  • <strong>Finalidade:</strong> Responder às suas dúvidas, agendar visitas técnicas e elaborar orçamentos.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-200 text-sm">B) Execução dos Serviços de Segurança</h3>
                <p className="text-xs text-slate-400 mt-1">
                  • <strong>Dados:</strong> Imagens de câmeras (CFTV), registros de entrada/saída e centrais de alarme para os clientes que contratam nossos serviços.<br />
                  • <strong>Finalidade:</strong> Garantir a proteção patrimonial e a segurança dos locais monitorados.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-3 pt-4">
            <h2 className="text-lg font-bold text-white uppercase tracking-wider">
              2. Com quem compartilhamos os dados?
            </h2>
            <p>
              Nós não vendemos nem compartilhamos seus dados pessoais com terceiros para fins de marketing. O acesso às imagens e alarmes é restrito aos técnicos autorizados para a manutenção e operação do sistema. O compartilhamento com autoridades policiais ou judiciais ocorre apenas quando exigido por lei ou mediante ordem judicial.
            </p>
          </section>

          <section className="space-y-3 pt-4">
            <h2 className="text-lg font-bold text-white uppercase tracking-wider">
              3. Como protegemos as informações?
            </h2>
            <p>
              Adotamos medidas padrão de segurança da informação, como criptografia na transmissão de dados das câmeras, controle de acesso aos sistemas e armazenamento seguro. As imagens de monitoramento são guardadas pelo período padrão contratado e apagadas automaticamente após esse prazo.
            </p>
          </section>

          <section className="space-y-3 pt-4">
            <h2 className="text-lg font-bold text-white uppercase tracking-wider">
              4. Seus Direitos (LGPD)
            </h2>
            <p>
              Você, como titular dos dados, tem o direito de solicitar a confirmação do tratamento, acessar seus dados cadastrais, corrigir informações incorretas ou solicitar a exclusão de contatos comerciais.
            </p>
          </section>

          <section className="space-y-3 pt-4">
            <h2 className="text-lg font-bold text-white uppercase tracking-wider">
              5. Contato sobre Privacidade
            </h2>
            <p>
              Se tiver qualquer dúvida sobre como tratamos seus dados ou deseja exercer algum direito, fale conosco diretamente pelo nosso canal de atendimento oficial:
            </p>
            <p className="text-xs font-semibold text-cyan-400 font-mono">
              <a href="https://wa.me/5511910984454?text=Olá!+Gostaria+de+saber+mais+sobre+a+Política+de+Privacidade." target="_blank" rel="noopener noreferrer" className="hover:underline">
                Falar com o responsável no WhatsApp →
              </a>
            </p>
          </section>

          <section className="space-y-3 pt-4">
            <h2 className="text-lg font-bold text-white uppercase tracking-wider">
              6. Atualizações da Política
            </h2>
            <p>
              Esta Política de Privacidade poderá passar por atualizações periódicas decorrentes de melhorias operacionais em nossos sistemas ou por adequações legais. Qualquer alteração relevante será sinalizada em nosso portal institucional.
            </p>
          </section>

          <footer className="border-t border-slate-900 pt-8 mt-12 text-xs text-slate-500 font-mono">
            <span>Link Alarmes.</span>
          </footer>
        </div>

      </article>
    </div>
  );
}
