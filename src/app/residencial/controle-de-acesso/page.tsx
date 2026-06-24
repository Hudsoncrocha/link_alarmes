import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Controle de Acesso Residencial | Link Alarmes | Fechadura Inteligente",
  description: "Gerencie quem entra no seu lar de forma simples. Fechaduras digitais, vídeo porteiros integrados e controle prático pelo celular com suporte técnico experiente em SP.",
  keywords: "fechadura inteligente, controle de acesso residencial, vídeo porteiro IP, fechadura eletrônica",
  alternates: {
    canonical: "/residencial/controle-de-acesso",
  },
};

export default function ControleDeAcessoResidencial() {
  const whatsappUrl = "https://wa.me/5511910984454?text=Olá!+Gostaria+de+solicitar+um+orçamento+para+controle+de+acesso+residencial.";

  const dores = [
    {
      problema: "Esquecimento ou perda de chaves",
      solucao: "Chega de carregar chaves físicas ou de correr o risco de esquecê-las. Nossas fechaduras digitais permitem abertura por digital, senha, tag de proximidade ou aplicativo direto do celular."
    },
    {
      problema: "Quem bate à sua porta na sua ausência?",
      solucao: "Vídeo porteiros inteligentes transmitem som e imagem em tempo real para o seu celular. Atenda quem estiver na porta e libere o acesso (para entregadores ou prestadores de serviço) mesmo à distância."
    },
    {
      problema: "Falta de controle de entradas",
      solucao: "Configure senhas ou tags de acesso com horários restritos para diaristas, prestadores de serviço e visitantes, sabendo exatamente quando eles entram e saírem através do aplicativo."
    }
  ];

  return (
    <div className="flex flex-col w-full bg-slate-950 text-slate-100 overflow-x-hidden font-sans">
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 border-b border-slate-900 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-950/20 via-slate-950 to-slate-950">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <Link href="/residencial" className="text-xs font-bold text-cyan-400 hover:underline uppercase tracking-wider mb-4 flex items-center gap-1.5">
            <span>←</span> Voltar para Residencial
          </Link>
          <h1 className="max-w-4xl text-3xl font-extrabold tracking-tight text-white sm:text-5xl leading-tight">
            Controle de Acesso Residencial e Fechaduras Inteligentes.
          </h1>
          <p className="mt-6 max-w-3xl text-base text-slate-400 md:text-lg leading-relaxed">
            Elimine chaves mecânicas e traga mais segurança e comodidade para sua rotina com tecnologia digital. Projetos e instalações executados por técnicos experientes.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href={whatsappUrl} className="btn-neon-blue text-sm px-8 py-4 flex gap-2 items-center justify-center">
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Como Combatemos as Dores do Mercado */}
      <section className="py-20 bg-slate-950 border-b border-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-rose-500 uppercase tracking-widest bg-rose-950/20 border border-rose-500/10 px-3 py-1 rounded">
              Conveniência e Praticidade
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl mt-4">
              Mais praticidade e segurança sem depender de chaves físicas
            </h2>
            <p className="mt-4 text-slate-400 text-sm">
              As fechaduras tradicionais podem ser vulneráveis e fáceis de perder. Traga mais segurança e comodidade para sua rotina com tecnologia digital.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dores.map((dor) => (
              <div key={dor.problema} className="card-tech p-6 border border-slate-900 hover:border-blue-500/20 transition-all">
                <div className="text-rose-500 text-2xl mb-4">⚠️</div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2">{dor.problema}</h3>
                <div className="h-0.5 w-12 bg-slate-900 my-3"></div>
                <p className="text-xs text-slate-400 leading-relaxed mt-2">{dor.solucao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Características Técnicas da Solução */}
      <section className="py-20 bg-slate-900/30 border-b border-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl leading-tight">
                Integração simples com fechaduras e controle fácil pelo celular
              </h2>
              <p className="mt-6 text-slate-400 text-sm leading-relaxed">
                Instalamos fechaduras digitais de embutir e vídeo porteiros modernos. Se você esquecer a porta aberta, um aviso sonoro ou uma notificação no celular garantem que você seja alertado antes de dormir, trazendo total controle sobre quem acessa o seu lar.
              </p>
              
              <ul className="mt-6 space-y-4 text-xs font-semibold text-slate-200">
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                  Fechaduras digitais de marcas homologadas com baterias internas de longa duração.
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                  Vídeo porteiro de alta definição com imagem clara sob qualquer iluminação.
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                  Histórico de acessos com horários registrados diretamente no aplicativo.
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                  Instalação profissional e limpa feita por técnicos experientes.
                </li>
              </ul>
            </div>
            
            <div className="card-tech p-8 flex flex-col justify-between border border-cyan-500/10 min-h-[350px]">
              <div className="border-b border-slate-800 pb-2 flex items-center justify-between">
                <span className="text-slate-500 font-mono text-[10px]">// DIAGNÓSTICO DO CONTROLE DE ACESSO RESIDENCIAL</span>
                <span className="glow-dot-emerald"></span>
              </div>
              <div className="space-y-4 text-xs font-mono text-cyan-400 py-6">
                <div>[✔] FECHADURAS DE EMBUTIR: ATIVAS (MODO DIGITAL/TAG)</div>
                <div>[✔] STATUS DE VÍDEO PORTEIRO: ONLINE</div>
                <div>[✔] INTERFONIA IP INTEGRADA: ATIVA</div>
                <div>[✔] HISTÓRICO DE ACESSOS: REGISTRADO NO APP</div>
                <div>[✔] BATERIA DE BACKUP: OPERANDO NORMALMENTE</div>
              </div>
              <div className="border-t border-slate-800 pt-4 flex justify-between items-center text-[10px] text-slate-500">
                <span>Vila da Saúde - São Paulo - SP</span>
                <span className="text-white bg-blue-600 px-2.5 py-0.5 rounded font-extrabold uppercase">Mais de 15 Anos de Experiência</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-slate-950 text-center">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-white sm:text-4xl">
            Sua porta de entrada controlada de forma simples e segura.
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
            Elimine as chaves físicas de uma vez por todas e tenha total controle de acessos da sua residência.
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
