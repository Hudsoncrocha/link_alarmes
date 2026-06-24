import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cabeamento Estruturado e Rede Corporativa | Link Alarmes | Projetos de Redes",
  description: "Cabeamento estruturado Cat6, Cat6A e Fibra Óptica certificada para empresas em São Paulo. Organização de Racks e testes profissionais com certificador Fluke.",
  keywords: "cabeamento estruturado, rede corporativa, rede para empresas, organizacao de rack de ti, certificacao fluke",
  alternates: {
    canonical: "/empresas/rede-estruturada",
  },
};

export default function RedeEstruturada() {
  const whatsappUrl = "https://wa.me/5511910984454?text=Olá!+Gostaria+de+solicitar+um+orçamento+para+Projetos+de+Cabeamento+Estruturado+e+Rede+para+minha+empresa.";

  const dores = [
    {
      problema: "Lentidão repentina e quedas em chamadas de vídeo",
      solucao: "Instalamos cabos de rede de cobre puro de altíssima qualidade (Cat6/Cat6A) com blindagem adequada e crimpagem precisa, acabando com as perdas de pacotes e a instabilidade típica de cabos comuns de alumínio cobreado."
    },
    {
      problema: "Racks de TI parecendo um 'ninho de cobras'",
      solucao: "Reorganizamos e identificamos visualmente 100% dos seus cabos em Racks padrão 19 polegadas com organizadores horizontais e patch panels profissionais. Rastreabilidade rápida e visual para mitigar qualquer incidente de TI em minutos."
    },
    {
      problema: "Quedas inexplicáveis na conexão entre setores distantes",
      solucao: "Implementamos infraestrutura híbrida com fibra óptica dedicada para interligar blocos administrativos, estoques ou andares comerciais, garantindo velocidade contínua e total imunidade contra interferências eletromagnéticas."
    }
  ];

  return (
    <div className="flex flex-col w-full bg-slate-950 text-slate-100 overflow-x-hidden font-sans">
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 border-b border-slate-900 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-950/20 via-slate-950 to-slate-950">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <Link href="/empresas" className="text-xs font-bold text-cyan-400 hover:underline uppercase tracking-wider mb-4 flex items-center gap-1.5">
            <span>←</span> Voltar para Empresas
          </Link>
          <h1 className="max-w-4xl text-3xl font-extrabold tracking-tight text-white sm:text-5xl leading-tight">
            Projetos de Cabeamento Estruturado e Organização de Racks Corporativos.
          </h1>
          <p className="mt-6 max-w-3xl text-base text-slate-400 md:text-lg leading-relaxed">
            Elimine a lentidão e as perdas de dados que corroem a produtividade diária dos seus colaboradores. Desenvolvemos topologias físicas e lógicas blindadas e de alta velocidade para empresas.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href={whatsappUrl} className="btn-neon-blue text-sm px-8 py-4 flex gap-2 items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-500 border-none shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              Solicitar Projeto de Rede B2B
            </a>
          </div>
        </div>
      </section>

      {/* Como Combatemos as Dores Tradicionais */}
      <section className="py-20 bg-slate-950 border-b border-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-rose-500 uppercase tracking-widest bg-rose-950/20 border border-rose-500/10 px-3 py-1 rounded">
              Infraestrutura de Rede Sem Gargalos
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl mt-4">
              Diga Adeus às Redes Amadoras que Travam Seus Negócios
            </h2>
            <p className="mt-4 text-slate-400 text-sm">
              Um cabeamento feito sem certificação profissional é uma bomba relógio de lentidão. Veja como trabalhamos na Link Alarmes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dores.map((dor) => (
              <div key={dor.problema} className="card-tech p-6 border border-slate-900 hover:border-cyan-500/20 transition-all">
                <div className="text-rose-500 text-2xl mb-4">⚠️</div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2">{dor.problema}</h3>
                <div className="h-0.5 w-12 bg-slate-900 my-3"></div>
                <p className="text-xs text-slate-400 leading-relaxed mt-2">{dor.solucao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recursos Avançados */}
      <section className="py-20 bg-slate-900/30 border-b border-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl leading-tight">
                Certificação Fluke, Fusão de Fibra e Lançamento de Alta Performance
              </h2>
              <p className="mt-6 text-slate-400 text-sm leading-relaxed">
                Toda rede corporativa projetada e executada pela Link Alarmes passa por testes rígidos de conformidade com as normas internacionais TIA/EIA. Entregamos o relatório oficial emitido por certificador Fluke profissional, garantindo 100% de velocidade de transmissão e zero perdas.
              </p>
              
              <ul className="mt-6 space-y-4 text-xs font-semibold text-slate-200">
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                  <strong>Crimpagem e Patch Panels:</strong> Padrão estrito de organização mecânica e identificação numérica em cada tomada RJ45.
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                  <strong>Fusão de Fibra Óptica:</strong> Conexão física de alta precisão com máquina de fusão e validação por OTDR para backbone de alto rendimento.
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                  <strong>Organização Completa Retroativa:</strong> Desmontamos racks legados desorganizados e remontamos tudo etiquetado e certificado, sem perder dados críticos.
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                  <strong>Desenhos AutoCAD e AS-BUILT:</strong> Toda a documentação técnica de dutos, caixas de passagem e encaminhamentos entregue em formato digital.
                </li>
              </ul>
            </div>
            
            <div className="card-tech p-8 flex flex-col justify-between border border-cyan-500/10 min-h-[350px]">
              <div className="border-b border-slate-800 pb-2 flex items-center justify-between">
                <span className="text-slate-500 font-mono text-[10px]">// RESULTADOS DE CERTIFICAÇÃO FLUKE</span>
                <span className="glow-dot-cyan"></span>
              </div>
              <div className="space-y-4 text-xs font-mono text-cyan-400 py-6">
                <div>[✔] CABO CAT6 COPPER: CERTIFICADO PASS [1000 Mbps]</div>
                <div>[✔] RESISTÊNCIA DE LOOP: CONFORME NORMAS EIA/TIA</div>
                <div>[✔] PERDA POR RETORNO (NEXT): EXCELENTE MARGEM</div>
                <div>[✔] BACKBONE FIBRA ÓPTICA: PERDA &lt; 0.15 dB/emenda</div>
                <div>[✔] DIAGRAMA DE PAINÉIS DE RACK: ATUALIZADO</div>
              </div>
              <div className="border-t border-slate-800 pt-4 flex justify-between items-center text-[10px] text-slate-500">
                <span>Vila da Saúde - Certificação Fluke DSX</span>
                <span className="text-white bg-cyan-600 px-2.5 py-0.5 rounded font-extrabold uppercase">Sênior +15 Anos</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-slate-950 text-center">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-white sm:text-4xl">
            Uma rede de computadores veloz é a base para o crescimento da sua empresa.
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
            Envie sua planta ou solicite uma visita do Hudson para mapear e mitigar os gargalos de tráfego de rede física e servidores.
          </p>
          <div className="mt-8 flex justify-center">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-neon-blue text-sm px-8 py-4 flex gap-2 items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-500 border-none shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              Chamar Engenharia no WhatsApp
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
