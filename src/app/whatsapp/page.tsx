"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";

function WhatsappRedirectInner() {
  const searchParams = useSearchParams();
  const [redirectUrl, setRedirectUrl] = useState<string>("");

  useEffect(() => {
    // 1. Obter os parâmetros de UTM e origem
    const utmSource = searchParams.get("utm_source") || (typeof window !== "undefined" ? sessionStorage.getItem("utm_source") : "") || "";
    const utmMedium = searchParams.get("utm_medium") || (typeof window !== "undefined" ? sessionStorage.getItem("utm_medium") : "") || "";
    const utmCampaign = searchParams.get("utm_campaign") || (typeof window !== "undefined" ? sessionStorage.getItem("utm_campaign") : "") || "";
    const utmContent = searchParams.get("utm_content") || (typeof window !== "undefined" ? sessionStorage.getItem("utm_content") : "") || "";
    const utmTerm = searchParams.get("utm_term") || (typeof window !== "undefined" ? sessionStorage.getItem("utm_term") : "") || "";
    const gclid = searchParams.get("gclid") || (typeof window !== "undefined" ? sessionStorage.getItem("gclid") : "") || "";
    const origin = searchParams.get("origin") || "geral";

    // 2. Disparar evento no dataLayer para o Google Tag Manager (GTM) / Google Analytics / Google Ads
    if (typeof window !== "undefined") {
      const globalWindow = window as any;
      globalWindow.dataLayer = globalWindow.dataLayer || [];
      globalWindow.dataLayer.push({
        event: "whatsapp_redirect",
        utm_source: utmSource,
        utm_medium: utmMedium,
        utm_campaign: utmCampaign,
        utm_content: utmContent,
        utm_term: utmTerm,
        gclid: gclid,
        origin_page: origin,
      });
    }

    // 3. Mapear a mensagem personalizada com base na origem do clique
    let mensagemBase = "Olá! Gostaria de falar com um especialista sobre segurança eletrônica e infraestrutura.";

    switch (origin) {
      // Pilar Residencial
      case "alarme-residencial":
        mensagemBase = "Olá! Gostaria de solicitar um orçamento de Alarme Residencial personalizado para minha casa.";
        break;
      case "cameras-residenciais":
        mensagemBase = "Olá! Gostaria de solicitar um orçamento para instalação de câmeras de segurança na minha casa.";
        break;
      case "seguranca-perimetral":
        mensagemBase = "Olá! Gostaria de solicitar um orçamento de cerca elétrica industrial para minha casa.";
        break;
      case "wifi-residencial":
        mensagemBase = "Olá! Gostaria de solicitar um orçamento de rede Wi-Fi estável para minha casa.";
        break;
      case "casa-alto-padrao":
        mensagemBase = "Olá! Gostaria de falar com um especialista sobre o projeto de segurança e redes para uma residência de alto padrão.";
        break;
      // Pilar Empresarial
      case "cftv-empresarial":
        mensagemBase = "Olá! Gostaria de solicitar um orçamento de sistema de câmeras de segurança (CFTV) para minha empresa.";
        break;
      case "alarme-empresarial":
        mensagemBase = "Olá! Gostaria de solicitar um orçamento de sistema de alarme monitorado personalizado para minha empresa.";
        break;
      case "rede-estruturada":
        mensagemBase = "Olá! Gostaria de solicitar um orçamento de cabeamento estruturado e redes para minha empresa.";
        break;
      case "wifi-corporativo":
        mensagemBase = "Olá! Gostaria de solicitar um orçamento de Wi-Fi 6 corporativo para minha empresa.";
        break;
      case "infraestrutura-ti":
        mensagemBase = "Olá! Gostaria de solicitar um orçamento de infraestrutura de TI, nobreaks e switches para minha empresa.";
        break;
    }

    let metadados = `\n\n[Ref: ${origin}`;
    if (utmSource) metadados += ` | Origem: ${utmSource}`;
    if (utmCampaign) metadados += ` | Campanha: ${utmCampaign}`;
    if (gclid) metadados += ` | Gclid: ${gclid}`;
    metadados += "]";

    const mensagemFinal = encodeURIComponent(mensagemBase + metadados);
    const wppNumber = "5511910984454";
    const url = `https://wa.me/${wppNumber}?text=${mensagemFinal}`;
    
    setRedirectUrl(url);

    // 5. Aguardar 2 segundos (tempo suficiente para as tags do GTM dispararem) e redirecionar
    const timer = setTimeout(() => {
      window.location.href = url;
    }, 2000);

    return () => clearTimeout(timer);
  }, [searchParams]);

  return (
    <div className="mx-auto max-w-md w-full px-4 text-center">
      <div className="card-tech p-8 border border-cyan-500/10 bg-slate-900/50 backdrop-blur-md flex flex-col items-center">
        {/* Loading Spinner */}
        <div className="relative h-20 w-20 flex items-center justify-center mb-6">
          <div className="absolute inset-0 rounded-full border-4 border-slate-800"></div>
          <div className="absolute inset-0 rounded-full border-4 border-t-cyan-400 animate-spin"></div>
          <span className="text-xl">📲</span>
        </div>

        <h1 className="text-xl font-bold text-white mb-2">Conectando ao WhatsApp...</h1>
        <p className="text-xs text-slate-400 leading-relaxed mb-6">
          Aguarde um instante. Estamos configurando o seu atendimento e registrando a sua origem de navegação de forma segura.
        </p>

        {redirectUrl && (
          <a
            href={redirectUrl}
            className="btn-neon-blue text-xs w-full py-3 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 border-none shadow-[0_0_15px_rgba(6,182,212,0.2)]"
          >
            Clique aqui se não for redirecionado
          </a>
        )}

        <div className="mt-8 pt-4 border-t border-slate-800/80 w-full flex justify-between items-center text-[10px] text-slate-500 font-mono">
          <span>LINK ALARMES</span>
          <span className="glow-dot-cyan"></span>
          <span>ATENDIMENTO SEGURO</span>
        </div>
      </div>
    </div>
  );
}

export default function WhatsappRedirectPage() {
  return (
    <div className="flex-1 flex items-center justify-center bg-slate-950 text-slate-100 py-16 md:py-24 min-h-[60vh] font-sans">
      <Suspense
        fallback={
          <div className="text-center text-sm text-slate-400">
            Carregando conexão segura...
          </div>
        }
      >
        <WhatsappRedirectInner />
      </Suspense>
    </div>
  );
}
