import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog da Link Alarmes | Segurança e Redes",
  description: "Artigos e análises sobre CFTV Inteligente, Wi-Fi 6 Corporativo, Vulnerabilidades de Câmeras e Redes Corporativas na capital paulista.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogList() {
  const posts = [
    {
      slug: "como-a-inteligencia-artificial-e-o-cftv-moderno-reduzem-intrusoes-comerciais-em-ate-90",
      category: "Segurança de Elite",
      title: "Como a Inteligência Artificial e o CFTV Moderno Reduzem Intrusões Comerciais em até 90%",
      date: "27 de Maio de 2026",
      summary: "A segurança patrimonial de comércios e escritórios passa por transformação radical. Descubra como a IA e analíticos inteligentes previnem invasões de forma proativa antes que ocorra o prejuízo.",
      readTime: "6 min de leitura",
      featured: true,
    },
    {
      slug: "5-vulnerabilidades-comuns-em-sistemas-de-cameras-que-facilitam-invasoes",
      category: "CFTV & Análise",
      title: "5 Vulnerabilidades Comuns em Sistemas de Câmeras que Facilitam Invasões (E como resolvê-las)",
      date: "12 de Maio de 2026",
      summary: "Muitos empresários acreditam estar seguros apenas por possuírem câmeras na fachada. No entanto, pontos cegos, roteadores mal configurados expostos a invasões digitais e a falta de gravação redundante em nuvem são convites abertos para criminosos experientes.",
      readTime: "5 min de leitura",
      featured: false,
    },
    {
      slug: "wifi-6-corporativo-vs-wifi-residencial-perda-de-dinheiro",
      category: "Redes & Wi-Fi",
      title: "Wi-Fi 6 Corporativo vs. Wi-Fi Residencial: Por que sua empresa está perdendo dinheiro com equipamentos domésticos",
      date: "20 de Maio de 2026",
      summary: "Quedas constantes de conexão, lentidão no ERP e clientes reclamando do sinal de internet. Se esses problemas são comuns no seu negócio, você provavelmente está usando roteadores residenciais para tentar dar conta de uma operação corporativa.",
      readTime: "4 min de leitura",
      featured: false,
    },
    {
      slug: "como-proteger-sua-empresa-na-capital-paulista-cftv-ia-e-controle-de-acesso",
      category: "Segurança Corporativa",
      title: "Como Proteger sua Empresa na Capital Paulista: Estratégias de CFTV com IA e Controle de Acesso",
      date: "25 de Maio de 2026",
      summary: "As empresas e escritórios comerciais na cidade de São Paulo demandam sistemas integrados eficientes. Entenda como nossa equipe projeta CFTV com Inteligência Artificial perimetral, controle de acesso e segurança em camadas.",
      readTime: "7 min de leitura",
      featured: false,
    },
  ];

  return (
    <div className="flex flex-col w-full bg-slate-950 text-slate-100 overflow-x-hidden font-sans py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-950/30 border border-cyan-500/10 px-3.5 py-1.5 rounded-full mb-6 inline-block">
            Conteúdo Técnico
          </span>
          <h1 className="text-3xl font-extrabold text-white sm:text-5xl leading-tight">
            Engenharia de Segurança, Redes & Inteligência Prática
          </h1>
          <p className="mt-4 text-slate-400 text-base">
            Informações estratégicas escritas por profissionais certificados para blindar seu patrimônio e acelerar a conectividade de sua empresa na capital paulista.
          </p>
        </div>

        {/* Featured Post (Big Card) */}
        {posts.filter(p => p.featured).map((post) => (
          <div key={post.slug} className="mb-12 card-tech border border-cyan-500/10 p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-4 text-xs font-mono">
                <span className="text-cyan-400 font-bold uppercase tracking-wider">{post.category}</span>
                <span className="text-slate-600">•</span>
                <span className="text-slate-400">{post.date}</span>
                <span className="text-slate-600">•</span>
                <span className="text-slate-400">{post.readTime}</span>
              </div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl group-hover:text-cyan-400 transition-colors">
                {post.title}
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                {post.summary}
              </p>
              <div className="pt-4">
                <Link
                  href={`/blog/${post.slug}`}
                  className="btn-neon-blue text-xs px-6 py-3 font-bold uppercase tracking-wider"
                >
                  Ler Artigo Completo
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-lg p-6 flex flex-col justify-center min-h-[220px] text-center relative overflow-hidden">
              <span className="absolute top-2 right-2 px-2 py-0.5 rounded bg-cyan-600 text-slate-950 font-bold text-[9px] uppercase tracking-widest font-mono">Destaque</span>
              <span className="text-4xl block mb-3">🤖</span>
              <h3 className="text-base font-bold text-white mb-2">CFTV + Inteligência Artificial</h3>
              <p className="text-xs text-slate-400">Como diminuir falsos alarmes em até 90% utilizando algoritmos de Deep Learning.</p>
            </div>
          </div>
        ))}

        {/* Secondary Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.filter(p => !p.featured).map((post) => (
            <div key={post.slug} className="card-tech flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between text-xs font-mono mb-4 text-slate-400">
                  <span className="text-cyan-400 font-bold uppercase tracking-wider">{post.category}</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="text-base font-bold text-white mb-3 hover:text-cyan-400 transition-colors line-clamp-2">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed line-clamp-4">
                  {post.summary}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-900 flex items-center justify-between">
                <span className="text-[10px] text-slate-500 font-mono">{post.readTime}</span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors inline-flex items-center gap-1"
                >
                  Ler Artigo →
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
