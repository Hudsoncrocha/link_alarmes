import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Atendimento & Suporte 24h | Link Alarmes",
  description: "Canais de contato e suporte técnico emergencial 24h da Link Alarmes. Fale com engenheiros experientes na capital paulista e tire suas dúvidas.",
  alternates: {
    canonical: "/atendimento",
  },
};

export default function Atendimento() {
  const whatsappUrl = "https://wa.me/5511910984454?text=Olá!+Gostaria+de+solicitar+um+orçamento+com+a+Link+Alarmes.";

  const faqs = [
    {
      q: "A Link Alarmes realiza o monitoramento das imagens em tempo real?",
      a: "Sim! Projetamos sistemas de CFTV inteligente integrados ao seu smartphone e à nossa central de suporte. As câmeras com Inteligência Artificial diferenciam movimentos comuns (como animais de estimação e vegetação) de intrusões reais de humanos ou veículos com precisão milimétrica. Você recebe alertas automáticos com clipes de vídeo diretamente no seu celular no exato momento da ocorrência, possibilitando ação imediata."
    },
    {
      q: "Como funciona o suporte de redes corporativas e Wi-Fi?",
      a: "Nós atuamos com manutenção preventiva e suporte ativo. Projetamos redes baseadas em cabeamento estruturado de alto padrão e roteadores Wi-Fi 6 de nível corporativo. Se ocorrer alguma oscilação ou desconexão crítica no seu sistema, nossa central de suporte é notificada para restabelecer a conexão remotamente ou despachar o plantão técnico local de imediato."
    },
    {
      q: "Minha residência, empresa ou condomínio na capital paulista pode receber suporte rápido?",
      a: "Com certeza! Nossa base operacional está estrategicamente localizada no bairro da Saúde - SP, o coração da empresa, permitindo fácil deslocamento para as principais regiões da capital paulista e Grande São Paulo. Atendemos comércios, condomínios e residências com suporte de prontidão, equipados com ferramentas profissionais para certificação e manutenção ágil."
    },
    {
      q: "Vocês trabalham com equipamentos e marcas renomadas?",
      a: "Sim. Todos os projetos da Link Alarmes utilizam marcas que são referências globais em segurança cibernética e durabilidade, tais como Intelbras, Hikvision, Furukawa e Ubiquiti. Não instalamos dispositivos sem homologação ou de procedência duvidosa. O tráfego de dados e imagens do seu sistema é protegido com criptografia de ponta a ponta."
    },
    {
      q: "A equipe da Link Alarmes realmente possui conhecimentos sênior?",
      a: "Esse é o nosso maior diferencial competitivo. Nossos engenheiros e técnicos acumulam mais de 15 anos de atuação sólida e prática no mercado corporativo e residencial. Isso garante que o desenho do seu projeto não tenha falhas de cobertura (pontos cegos de câmeras), que o cabeamento seja certificado digitalmente e que a instalação funcione de verdade, eliminando os temidos disparos falsos de madrugada."
    }
  ];

  return (
    <div className="flex flex-col w-full bg-slate-950 text-slate-100 overflow-x-hidden font-sans">
      
      {/* Page Header */}
      <section className="relative py-16 md:py-20 border-b border-slate-900 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-950/20 via-slate-950 to-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-950/30 border border-cyan-500/10 px-3.5 py-1.5 rounded-full mb-6">
            Suporte e Contato
          </span>
          <h1 className="max-w-4xl text-3xl font-extrabold tracking-tight text-white sm:text-5xl leading-tight">
            Canal de Atendimento e Suporte Técnico Link Alarmes
          </h1>
          <p className="mt-6 max-w-3xl text-base text-slate-400 leading-relaxed">
            Para a Link Alarmes, o atendimento de excelência começa muito antes da venda e se estende por toda a vida útil do seu sistema de segurança e rede. Entendemos que tecnologia avançada exige suporte qualificado, ágil e, acima de tudo, humano.
          </p>
          <p className="mt-4 max-w-3xl text-sm text-slate-500 leading-relaxed">
            Nosso compromisso é nunca deixar você sem resposta ou exposto ao risco. Seja para esclarecer uma dúvida técnica sobre o seu aplicativo de CFTV inteligente, solicitar um técnico de campo para cabeamento estruturado ou reconfigurar um sensor de presença, nossa estrutura opera para atendê-lo com prontidão máxima.
          </p>
        </div>
      </section>

      {/* Main Layout: Contact Details & Client Form */}
      <section className="py-20 bg-slate-950 border-b border-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Contacts Info */}
            <div className="lg:col-span-5 space-y-8">
              
              <div>
                <h2 className="text-2xl font-bold text-white uppercase tracking-wider mb-4">
                  Nossos Canais de Contato e Horários Operacionais
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Utilizamos canais digitais seguros para garantir velocidade de comunicação e diagnóstico imediato.
                </p>
              </div>

              {/* Central 24h */}
              <div className="bg-slate-900 border border-emerald-500/20 rounded-xl p-6 relative overflow-hidden">
                <div className="absolute top-4 right-4 flex items-center gap-2">
                  <span className="glow-dot-emerald"></span>
                  <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest font-mono">ATIVO</span>
                </div>
                <h3 className="text-sm font-extrabold text-white uppercase tracking-wider mb-2">
                  Central de Monitoramento & Plantão Emergencial
                </h3>
                <span className="text-xs font-bold text-emerald-400 block uppercase tracking-wider mb-4">
                  Atendimento 24h (Sem interrupções)
                </span>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  Exclusivo para acionamentos emergenciais de pânico, invasão de intrusos e quedas críticas de conexões corporativas em condomínios, residências e empresas.
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-neon-blue w-full py-2.5 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  Acionar Plantão Emergencial 24h
                </a>
              </div>

              {/* Departamento Comercial */}
              <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6">
                <h3 className="text-sm font-extrabold text-white uppercase tracking-wider mb-3">
                  Departamento Comercial & Administrativo
                </h3>
                <ul className="text-xs text-slate-400 space-y-2 mb-4 leading-relaxed">
                  <li>• Agendamento de diagnósticos gratuitos e novos projetos.</li>
                  <li>• Dúvidas sobre faturamento e administração de contratos.</li>
                  <li>• Programação de manutenções preventivas periódicas.</li>
                  <li className="pt-2 border-t border-slate-900 font-semibold text-slate-300">
                    Dias e Horários de Atendimento:<br />
                    - Segunda a sexta-feira: das 8h às 18h<br />
                    - Sábados: das 8h às 12h
                  </li>
                </ul>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-neon-outline w-full py-2.5 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  Falar com o Setor Comercial
                </a>
              </div>

            </div>

            {/* Right Column: Form Component */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-900/20 border-b border-slate-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold text-white sm:text-4xl uppercase tracking-wider">
              Dúvidas Frequentes sobre a Link Alarmes
            </h2>
            <p className="mt-4 text-slate-400 text-sm">
              Esclarecemos os principais questionamentos técnicos e comerciais para sua segurança.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-slate-900/65 border border-slate-850 rounded-xl p-6">
                <h3 className="text-base font-bold text-white flex gap-2 items-start">
                  <span className="text-cyan-400 font-mono text-sm mt-0.5">Q.</span>
                  {faq.q}
                </h3>
                <p className="text-slate-400 text-sm mt-3 leading-relaxed pl-5 border-l border-slate-850">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
