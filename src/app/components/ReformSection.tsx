"use client";

import { useEffect, useRef, useState } from "react";
import { AlertTriangle, ChevronDown, Zap, TrendingDown, ShieldCheck, ArrowRight } from "lucide-react";

const changes = [
  {
    icon: <TrendingDown className="w-5 h-5" />,
    title: "PIS e COFINS → CBS",
    desc: "A Contribuição sobre Bens e Serviços substituirá impostos federais.",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "ICMS e ISS → IBS",
    desc: "Unificação de impostos estaduais e municipais, mudando cálculo para serviços.",
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: "Crédito ampliado (IVA)",
    desc: "Maior facilidade para compensar créditos, se houver planejamento correto.",
  },
];

const faqs = [
  {
    q: "Quando a reforma começa a valer?",
    a: "A transição inicia em 2026, com impacto total até 2033.",
  },
  {
    q: "Minha empresa vai pagar mais impostos?",
    a: "Depende do seu setor (serviços tendem a sentir mais). Um planejamento antecipado é vital.",
  },
  {
    q: "O Simples Nacional acaba?",
    a: "Não, mas passa por adaptações. Optantes terão um período de transição.",
  },
];

export default function ReformSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const interval = setInterval(() => {
      const now = new Date();
      let targetYear = 2027;
      
      // Se já passamos de 2026 (ou seja, estamos em 2027 ou adiante), 
      // o alvo passa a ser o ano seguinte, renovando o timer infinitamente.
      if (now.getFullYear() >= 2027) {
        targetYear = now.getFullYear() + 1;
      }
      
      const targetDate = new Date(`${targetYear}-01-01T00:00:00`).getTime();
      const distance = targetDate - now.getTime();

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

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
    ref.current?.querySelectorAll(".reveal, .reveal-clip, .reveal-scale, .reveal-left, .reveal-right").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="reforma-tributaria" className="section-py" style={{ background: "var(--white)" }} ref={ref}>
      <div className="container-xl">
        <div className="section-header-center spacing-subtitle-mb">
          <div className="reveal">
            <span className="section-label spacing-title-mb animate-pulse border-red-200 bg-red-50 text-red-600 shadow-[0_0_15px_rgba(220,38,38,0.2)]">
              <AlertTriangle className="w-4 h-4" /> Reforma Tributária 2026/2027
            </span>
          </div>
          <h2 className="reveal-clip font-black heading-lg spacing-title-mb">
            Sua empresa está <span className="gradient-text">preparada?</span>
          </h2>
          <p className="reveal-clip reveal-delay-1 body-lg">
            A maior mudança fiscal do Brasil em décadas está chegando. Planeje agora para evitar multas pesadas.
          </p>

          {/* Countdown Timer */}
          <div className="reveal-scale reveal-delay-2 flex items-center justify-center gap-3 md:gap-5 mb-6">
            {isMounted ? (
              [
                { label: "DIAS", value: timeLeft.days },
                { label: "HORAS", value: timeLeft.hours },
                { label: "MINUTOS", value: timeLeft.minutes },
                { label: "SEGUNDOS", value: timeLeft.seconds },
              ].map((unit, idx) => (
                <div key={unit.label} className="flex flex-col items-center">
                  <div className="bg-red-50 border border-red-100 text-red-600 font-black text-2xl md:text-4xl w-16 h-16 md:w-20 md:h-20 flex items-center justify-center shadow-inner" style={{ borderRadius: "var(--radius-md)" }}>
                    {unit.value.toString().padStart(2, "0")}
                  </div>
                  <span className="text-[10px] md:text-xs font-bold text-gray-400 mt-2 tracking-widest">{unit.label}</span>
                </div>
              ))
            ) : (
              <div className="flex gap-3 md:gap-5">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-gray-100 animate-pulse w-16 h-16 md:w-20 md:h-20" style={{ borderRadius: "var(--radius-md)" }} />
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="reveal reveal-delay-2 grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {changes.map((item, i) => (
            <div key={i} className="card-professional p-6 border-t-2" style={{ borderTopColor: "var(--red)" }}>
              <div className="icon-box-sm mb-4">
                {item.icon}
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="reveal reveal-delay-1">
            <h3 className="heading-md mb-6">Perguntas Frequentes</h3>
            <div className="card-professional overflow-hidden">
              {faqs.map((item, i) => (
                <div key={i} className={`border-b border-gray-100 ${i === faqs.length - 1 ? "border-b-0" : ""}`}>
                  <button
                    className="accordion-trigger"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span>{item.q}</span>
                    <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                  </button>
                  <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: openFaq === i ? "150px" : "0px" }}>
                    <p className="px-6 pb-5 text-gray-600 text-sm">{item.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal-right reveal-delay-2 card-professional p-10 border-l-4 mt-12" style={{ borderLeftColor: "var(--red)", background: "var(--bg-alt)" }}>
             <div className="flex items-center gap-2 mb-8">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-black uppercase tracking-widest text-red-600 bg-red-100 rounded">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse inline-block" />
                  Vagas limitadas para diagnóstico
                </span>
              </div>
            <h4 className="heading-md mb-3">Diagnóstico Tributário Gratuito</h4>
            <p className="text-gray-600 mb-8 text-sm">
              Analisamos o impacto da reforma no seu negócio e criamos um plano de ação preventivo sem custo.
            </p>
            <a
              href="https://wa.me/5564992934378?text=Ol%C3%A1!%20Quero%20o%20diagn%C3%B3stico%20tribut%C3%A1rio%20gratuito%20sobre%20a%20Reforma."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full"
            >
              Solicitar Diagnóstico
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
