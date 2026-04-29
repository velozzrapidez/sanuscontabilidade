"use client";

import { useEffect, useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carlos M.",
    role: "Sócio-Diretor, Comércio Varejista",
    text: "A Sanus Contábil revolucionou nossa gestão. O planejamento tributário reduziu nossa carga em 18% no primeiro ano, permitindo novos investimentos. Recomendo de olhos fechados.",
  },
  {
    name: "Ana P.",
    role: "CEO, Clínica Médica",
    text: "A transição de contador foi surpreendentemente tranquila. O atendimento é ágil e as informações gerenciais são claras. Sinto que minha empresa está finalmente segura.",
  },
  {
    name: "Roberto F.",
    role: "Fundador, Startup Tech",
    text: "Mais que contadores, são parceiros estratégicos. Eles cuidaram de toda a burocracia de abertura e hoje nos ajudam com projeções financeiras. Excelente serviço.",
  },
];

export default function SocialProofSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal, .reveal-clip, .reveal-scale").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="depoimentos" className="section-py relative" style={{ background: "var(--bg-alt)" }} ref={ref}>
      {/* Separador sutil */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-red-100 rounded-b-full"></div>
      
      <div className="container-xl">
        <div className="section-header-center spacing-subtitle-mb">
          <span className="reveal section-label spacing-title-mb">Validação de Mercado</span>
          <h2 className="reveal-clip reveal-delay-1 heading-lg spacing-title-mb">
            O que dizem nossos clientes
          </h2>
          <p className="reveal-clip reveal-delay-2 body-lg">
            A confiança de quem já transformou a gestão contábil da sua empresa.
          </p>
        </div>

        <div className="card-grid-gap md:grid-cols-3 grid-cols-1">
          {testimonials.map((t, i) => {
            const initials = t.name.split(" ").map(n => n[0]).join("");
            return (
              <div key={t.name} className={`reveal-scale reveal-delay-${(i % 3) + 1} card-professional p-8 relative flex flex-col h-full`}>
                {/* Ícone de Aspas (Marca d'água) */}
                <div className="absolute top-6 right-6 opacity-5" style={{ color: "var(--red)" }}>
                  <Quote className="w-12 h-12" />
                </div>
                
                {/* Estrelas */}
                <div className="flex mb-5">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 text-amber-400 fill-current" />
                  ))}
                </div>
                
                {/* Texto do Depoimento */}
                <p className="text-gray-600 mb-8 relative z-10 font-medium italic flex-grow leading-relaxed">
                  "{t.text}"
                </p>
                
                {/* Rodapé do Card (Perfil) */}
                <div className="flex items-center gap-4 mt-auto border-t border-gray-100 pt-5">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-inner" style={{ background: "var(--red)" }}>
                    {initials}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">{t.role}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
