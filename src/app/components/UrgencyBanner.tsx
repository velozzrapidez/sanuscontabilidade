"use client";

import { useState } from "react";
import { X, ArrowRight } from "lucide-react";

export default function UrgencyBanner() {
  const [visible, setVisible] = useState(true);
  
  const currentMonth = new Date().toLocaleString("pt-BR", { month: "long" });
  const currentYear = new Date().getFullYear();
  const formattedMonth = currentMonth.charAt(0).toUpperCase() + currentMonth.slice(1);

  if (!visible) return null;

  return (
    <div className="relative z-50 w-full flex items-center justify-center px-4 py-2.5 text-xs md:text-sm font-bold text-white overflow-hidden">
      {/* Fundo escuro com gradiente animado */}
      <div 
        className="absolute inset-0"
        style={{ 
          background: "linear-gradient(90deg, #111827, #7f1d1d, #111827)", 
          backgroundSize: "200% 100%",
          animation: "snake-border 6s linear infinite"
        }} 
      />
      
      <div className="relative flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 z-10 w-full pr-6">
        <div className="flex items-center gap-2">
          {/* Luz verde pulsante indicando que está "Ao Vivo/Disponível" */}
          <span className="relative flex w-2.5 h-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full w-2.5 h-2.5 bg-green-500"></span>
          </span>
          
          <span className="text-gray-100 uppercase tracking-wide">Diagnóstico gratuito</span>
          <span className="hidden md:inline text-gray-400 font-medium">{" — "}Vagas limitadas para {formattedMonth}/{currentYear}.</span>
        </div>

        <a
          href="https://wa.me/5564992934378?text=Ol%C3%A1!%20Quero%20garantir%20minha%20vaga%20no%20diagn%C3%B3stico%20gratuito."
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-1.5 px-4 py-1.5 bg-red-600 hover:bg-red-500 text-white rounded-full transition-all shadow-[0_0_10px_rgba(220,38,38,0.5)] hover:shadow-[0_0_15px_rgba(220,38,38,0.8)] whitespace-nowrap"
        >
          Garantir vaga <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </a>
      </div>

      <button
        onClick={() => setVisible(false)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-20"
        aria-label="Fechar"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
