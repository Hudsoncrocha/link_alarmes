"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  const isActive = (href: string) => pathname === href;

  const menuItems = [
    { name: "Início", href: "/" },
    { name: "Soluções Residenciais", href: "/residencial" },
    { name: "Soluções Empresariais", href: "/empresas" },
    { name: "Soluções para Condomínios", href: "/condominios" },
    { name: "Blog", href: "/blog" },
    { name: "Contato", href: "/atendimento" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-900 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <Link href="/" onClick={closeMenu} className="flex items-center gap-2 group">
          <svg
            className="h-8 w-8 text-cyan-400 transition-transform duration-300 group-hover:rotate-12"
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
          <span className="text-xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 font-sans">
            LINK <span className="text-white group-hover:text-cyan-400 transition-colors">ALARMES</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-4 lg:gap-6">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-xs lg:text-sm font-medium transition-colors hover:text-cyan-400 ${
                isActive(item.href) ? "text-cyan-400 font-bold" : "text-slate-300"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden xl:flex items-center">
          <Link
            href="/whatsapp?origin=header"
            className="btn-neon-blue text-xs lg:text-sm px-4 py-2 flex gap-2 items-center"
          >
            <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.62.963 3.203 1.493 4.716 1.495 5.495.002 9.965-4.469 9.968-9.97.001-2.664-1.034-5.169-2.915-7.052C16.535 1.744 14.04 .71 11.99.713 6.495.713 2.025 5.184 2.022 10.686c-.001 1.636.43 3.226 1.251 4.634L2.28 21.65l6.367-1.672-.001-.024z" />
            </svg>
            Falar com Especialista
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex xl:hidden items-center">
          <button
            onClick={toggleMobileMenu}
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-400 hover:bg-slate-900 hover:text-white focus:outline-none"
            aria-expanded="false"
          >
            <span className="sr-only">Abrir menu principal</span>
            {isMobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden border-t border-slate-900 bg-slate-950/95 animate-in slide-in-from-top-4 duration-200">
          <div className="space-y-1 px-4 py-4 pb-6">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={`block rounded-lg px-3 py-2 text-base font-medium hover:bg-slate-900 hover:text-cyan-400 ${
                  isActive(item.href) ? "text-cyan-400 bg-slate-900" : "text-slate-300"
                }`}
              >
                {item.name}
              </Link>
            ))}

            <div className="pt-4">
              <Link
                href="/whatsapp?origin=header"
                className="btn-neon-blue w-full py-3 flex gap-2 items-center justify-center text-base"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.62.963 3.203 1.493 4.716 1.495 5.495.002 9.965-4.469 9.968-9.97.001-2.664-1.034-5.169-2.915-7.052C16.535 1.744 14.04 .71 11.99.713 6.495.713 2.025 5.184 2.022 10.686c-.001 1.636.43 3.226 1.251 4.634L2.28 21.65l6.367-1.672-.001-.024z" />
                </svg>
                Falar com Especialista
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
