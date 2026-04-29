"use client";

import { useEffect, useRef } from "react";

export default function SEOSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.01, rootMargin: "50px" }
    );
    ref.current?.querySelectorAll(".reveal, .reveal-clip").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-py relative z-10" style={{ background: "var(--white)" }} ref={ref}>
      <div className="container-xl">
        <div className="p-10 md:p-16 text-center shadow-lg relative overflow-hidden" style={{ borderRadius: "var(--radius-md)", background: "var(--bg-dark)" }}>
          {/* Animated Gradient Overlay */}
          <div className="absolute inset-0 opacity-40 pointer-events-none" style={{
            background: "linear-gradient(45deg, var(--red) 0%, transparent 40%, transparent 60%, #FF9A3C 100%)",
            backgroundSize: "200% 200%",
            animation: "gradientFlow 8s ease infinite"
          }} />
          <style>{`
            @keyframes gradientFlow {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
          `}</style>

          <div className="section-header-center relative z-10">
            <h2 className="reveal-clip font-black heading-md mb-6" style={{ color: "var(--red)" }}>
              Escritório de Contabilidade em Itumbiara:<br className="hidden md:block" /> Soluções Completas para o seu Negócio
            </h2>
            <div className="reveal-clip reveal-delay-1 space-y-4 text-sm leading-relaxed max-w-3xl" style={{ color: "rgba(255,255,255,0.75)" }}>
              <p>
                Buscando excelência em <strong className="text-white">contabilidade em Itumbiara</strong>? A Sanus Contábil Digital atua como uma extensão estratégica da sua empresa. Somos um <strong className="text-white">escritório contábil em Itumbiara</strong> especializado em governança fiscal, conectando inteligência técnica à gestão de resultados.
              </p>
              <p>
                Atendemos demandas de <strong className="text-white">abertura de empresa em Itumbiara</strong>, reestruturação societária, regularização fiscal e transição de responsabilidade contábil. Nossa infraestrutura garante que o seu negócio esteja sempre em conformidade legal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
