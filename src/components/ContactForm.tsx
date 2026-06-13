"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    projectType: "Segurança Residencial (Alarmes & Câmeras)",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending to high-tech API
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccessModal(true);
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        city: "",
        projectType: "Segurança Residencial (Alarmes & Câmeras)",
        message: "",
      });
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="card-tech p-8 border border-cyan-500/10 relative">
      <h3 className="text-xl font-bold text-white mb-2">
        Dê o Primeiro Passo Para Blindar Seu Patrimônio e Otimizar Suas Redes
      </h3>
      <p className="text-xs text-slate-400 mb-6">
        Preencha os campos rápidos abaixo. Nossa equipe sênior de engenharia técnica entrará em contato para agendar seu diagnóstico sem custo.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
            Nome Completo / Nome da Empresa *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Ex: Roberto Silveira / Innova Tecnologia"
            className="w-full rounded-lg bg-slate-950 border border-slate-800 text-slate-200 text-sm px-4 py-3 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 placeholder:text-slate-600 transition-colors"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
              E-mail para Contato *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Ex: roberto@empresa.com.br"
              className="w-full rounded-lg bg-slate-950 border border-slate-800 text-slate-200 text-sm px-4 py-3 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 placeholder:text-slate-600 transition-colors"
            />
          </div>

          {/* WhatsApp */}
          <div>
            <label htmlFor="phone" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
              WhatsApp de Contato Direto *
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="Ex: (11) 91098-4454"
              className="w-full rounded-lg bg-slate-950 border border-slate-800 text-slate-200 text-sm px-4 py-3 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 placeholder:text-slate-600 transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* City */}
          <div>
            <label htmlFor="city" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
              Cidade / Localidade *
            </label>
            <input
              type="text"
              id="city"
              name="city"
              required
              value={formData.city}
              onChange={handleChange}
              placeholder="Ex: São Paulo - SP"
              className="w-full rounded-lg bg-slate-950 border border-slate-800 text-slate-200 text-sm px-4 py-3 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 placeholder:text-slate-600 transition-colors"
            />
          </div>

          {/* Project Type */}
          <div>
            <label htmlFor="projectType" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
              Tipo de Projeto Desejado
            </label>
            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className="w-full rounded-lg bg-slate-950 border border-slate-800 text-slate-200 text-sm px-4 py-3 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
            >
              <option value="Segurança Residencial (Alarmes & Câmeras)">Segurança Residencial (Alarmes & Câmeras)</option>
              <option value="Segurança Comercial / CFTV Inteligente">Segurança Comercial / CFTV Inteligente</option>
              <option value="Controle de Acesso Corporativo / Facial">Controle de Acesso Corporativo / Facial</option>
              <option value="Redes, Wi-Fi 6 & Cabeamento Estruturado">Redes, Wi-Fi 6 & Cabeamento Estruturado</option>
              <option value="Suporte e Plantão Emergencial 24h">Suporte e Plantão Emergencial 24h</option>
              <option value="Outro">Outro</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
            Como Podemos te Ajudar Hoje? *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Ex: Gostaria de estruturar as câmeras com Inteligência Artificial e otimizar o Wi-Fi da minha empresa e escritórios."
            className="w-full rounded-lg bg-slate-950 border border-slate-800 text-slate-200 text-sm px-4 py-3 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 placeholder:text-slate-600 transition-colors resize-none"
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-neon-blue w-full py-4 text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 mt-4 disabled:opacity-50"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Criptografando e enviando...
            </>
          ) : (
            <>
              Solicitar Contato Técnico
            </>
          )}
        </button>
      </form>

      {/* 🔒 Success Modal in neon style */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-300">
          <div className="card-tech max-w-lg w-full border border-cyan-400 bg-slate-950 p-8 flex flex-col items-center text-center shadow-[0_0_50px_rgba(6,182,212,0.35)]">
            <div className="h-16 w-16 rounded-full bg-emerald-950/40 border border-emerald-500 flex items-center justify-center text-emerald-400 mb-6">
              <svg className="h-8 w-8 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            
            <h4 className="text-xl font-bold text-white uppercase tracking-wider">
              🔒 Dados Blindados com Sucesso!
            </h4>
            
            <p className="text-slate-300 text-sm leading-relaxed mt-4">
              Sua solicitação foi recebida diretamente por nossa equipe de engenharia sênior. Um engenheiro de segurança com mais de 15 anos de experiência prática entrará em contato via WhatsApp ou E-mail em no máximo 2 horas úteis para apresentar suas primeiras diretrizes de proteção e agendar sua visita técnica gratuita.
            </p>

            <div className="mt-8 flex flex-col gap-3 w-full">
              <a
                href="https://wa.me/5511910984454?text=Olá!+Gostaria+de+solicitar+um+orçamento+com+a+Link+Alarmes."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-neon-blue py-3 flex gap-2 items-center justify-center text-sm uppercase tracking-wider"
              >
                Falar Imediatamente no WhatsApp
              </a>
              <button
                onClick={() => setShowSuccessModal(false)}
                className="btn-neon-outline py-3 text-xs"
              >
                Fechar Janela
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
