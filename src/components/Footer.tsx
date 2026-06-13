import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#020617] border-t border-slate-900 text-slate-400 py-12 lg:py-16 font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Brand & Credibility */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <svg
                className="h-7 w-7 text-cyan-400 transition-transform duration-300 group-hover:rotate-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <span className="text-lg font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                LINK <span className="text-white">ALARMES</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Engenharia de segurança de elite e infraestrutura de redes corporativas projetadas para durar. Proteção total de ativos em São Paulo - SP por especialistas sênior de +15 anos de mercado.
            </p>
            <div className="flex items-center gap-2 mt-2">
              <span className="glow-dot-emerald"></span>
              <span className="text-xs font-semibold text-emerald-400 tracking-wider uppercase">
                Central 24h Operando
              </span>
            </div>
            
            {/* Certifications / Badges list */}
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="text-[10px] uppercase font-bold tracking-wider bg-slate-900 border border-slate-800 text-cyan-400 px-2.5 py-1 rounded">
                Engenharia Homologada
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider bg-slate-900 border border-slate-800 text-blue-400 px-2.5 py-1 rounded">
                +15 Anos Exp
              </span>
            </div>
          </div>

          {/* Column 2: Sitemap & Services */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Mapa do Site
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-cyan-400 transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/residencial" className="hover:text-cyan-400 transition-colors">
                  Soluções Residenciais
                </Link>
              </li>
              <li>
                <Link href="/empresas" className="hover:text-cyan-400 transition-colors">
                  Soluções Empresariais
                </Link>
              </li>
              <li>
                <Link href="/condominios" className="hover:text-cyan-400 transition-colors">
                  Soluções para Condomínios
                </Link>
              </li>

              <li>
                <Link href="/blog" className="hover:text-cyan-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/atendimento" className="hover:text-cyan-400 transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Channels & Operational hours */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Canais & Horários
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-2">
                <svg className="h-5 w-5 text-cyan-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <span className="block text-white font-semibold">Contato Direto</span>
                  <a href="tel:5511910984454" className="hover:text-cyan-400 transition-colors block">(11) 91098-4454</a>
                  <a href="https://wa.me/5511910984454?text=Olá!+Gostaria+de+solicitar+um+orçamento+com+a+Link+Alarmes." target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline inline-flex items-center gap-1 mt-1 text-xs font-medium">
                    Chamar no WhatsApp →
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2 border-t border-slate-900 pt-3">
                <svg className="h-5 w-5 text-cyan-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <span className="block text-white font-semibold">Suporte de Plantão</span>
                  <span className="block text-emerald-400 font-bold text-xs uppercase tracking-wider">Atendimento 24h / 7 dias</span>
                  <span className="text-xs text-slate-400">Comercial: Seg a Sex 8h - 18h / Sáb 8h - 12h</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Local Office & Map Embed */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Sede Vila da Saúde (NAP)
            </h3>
            <ul className="space-y-3 text-xs leading-relaxed">
              <li className="flex flex-col gap-1">
                <strong className="text-slate-200 font-bold text-xs">Link Alarmes</strong>
                <span className="text-slate-400">
                  Av. Miguel Estefno, 1973 - Vila da Saúde<br />
                  São Paulo - SP, CEP: 04301-001
                </span>
                <a href="tel:5511910984454" className="text-cyan-400 hover:underline font-bold mt-0.5 block">
                  (11) 91098-4454
                </a>
              </li>
              <li className="pt-2 border-t border-slate-900 mt-2">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.4851216503893!2d-46.63462612376994!3d-23.622830863836376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a3cd17f897d%3A0xe54d24177d424bd0!2sAv.%20Miguel%20Estefno%2C%201973%20-%20Vila%20da%20Sa%C3%BAde%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004301-001!5e0!3m2!1spt-BR!2sbr!4v1716912345678!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="120"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded border border-slate-800"
                ></iframe>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & legal compliance */}
        <div className="mt-12 border-t border-slate-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {currentYear} Link Alarmes. Todos os direitos reservados. Projetado por Engenharia de Elite.</p>
          <div className="flex items-center gap-6">
            <Link href="/termos" className="hover:text-cyan-400 transition-colors">
              Termos de Uso
            </Link>
            <Link href="/privacidade" className="hover:text-cyan-400 transition-colors">
              Política de Privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
