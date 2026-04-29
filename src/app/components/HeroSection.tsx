"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { CheckCircle2, ShieldCheck, Lightbulb, MapPin, ArrowRight } from "lucide-react";

const WA_LINK = "https://wa.me/5564992934378?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20falar%20com%20um%20contador.";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

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
    heroRef.current?.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-clip").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="inicio" ref={heroRef} className="hero-gradient pt-16 pb-8 md:pt-24 md:pb-16">
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── LEFT: Text (centered on mobile, left-aligned on desktop) ── */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">

            {/* Location badge */}
            <div className="reveal-left mb-6">
              <span className="badge-professional">
                <MapPin className="w-3.5 h-3.5" />
                Especialistas em Itumbiara · GO
              </span>
            </div>

            {/* H1 */}
            <h1 className="reveal-clip reveal-delay-1 heading-xl spacing-title-mb">
              Contabilidade para empresas que buscam{" "}
              <span className="gradient-text">crescimento estruturado</span>
            </h1>

            {/* Subtitle */}
            <p className="reveal-clip reveal-delay-2 body-lg spacing-subtitle-mb max-w-lg">
              Gestão contábil completa, regularização fiscal e planejamento estratégico em Itumbiara.
              Transformamos burocracia em resultados.
            </p>

            {/* CTAs */}
            <div className="reveal-left reveal-delay-3 flex flex-wrap button-group-gap mb-10 w-full sm:w-auto">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" id="cta-whatsapp-hero"
                className="btn-primary btn-shine">
                <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Falar no WhatsApp
              </a>
              <a href="#contato" id="cta-proposta-hero"
                onClick={(e) => { e.preventDefault(); document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" }); }}
                className="btn-secondary">
                Solicitar proposta
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Trust signals */}
            <div className="reveal-left reveal-delay-4 flex flex-wrap justify-center lg:justify-start gap-x-5 gap-y-2">
              {[
                { icon: <CheckCircle2 className="w-4 h-4" />, text: "Atendimento especializado" },
                { icon: <ShieldCheck className="w-4 h-4" />, text: "Dados protegidos (LGPD)" },
                { icon: <Lightbulb className="w-4 h-4" />, text: "Inteligência tributária" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-1.5 text-sm font-medium" style={{ color: "var(--text-secondary)" }}>
                  <span style={{ color: "var(--orange)" }}>{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Photo + floating stats ── */}
          <div className="reveal-right reveal-delay-2 block xl:scale-110 transform origin-right transition-transform duration-700 hover:scale-[1.15] z-10 relative">
            <div
              className="relative w-full overflow-hidden snake-container aspect-video lg:aspect-[4/3]"
              style={{ borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-lg)" }}
            >
              <Image
                src="/hero-imag.png"
                alt="Equipe Sanus Contábil Digital — escritório em Itumbiara"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain rounded-[inherit] bg-black/5"
                priority
              />
              {/* Bottom overlay */}
              <div className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(15,23,42,0.55) 0%, transparent 55%)", borderRadius: "inherit" }} />

              {/* Floating metrics */}
              <div className="absolute bottom-4 left-4 right-4 flex gap-3 animate-float" style={{ animationDelay: "0.5s" }}>
                {[
                  { v: "200+", l: "Empresas" },
                  { v: "98%",  l: "Retenção" },
                  { v: "8+",   l: "Anos" },
                ].map((m) => (
                  <div key={m.l} className="flex-1 text-center py-2.5 px-3"
                    style={{ background: "rgba(255,255,255,0.92)", backdropFilter: "blur(8px)", borderRadius: "var(--radius-sm)" }}>
                    <p className="font-black text-lg leading-none gradient-text">{m.v}</p>
                    <p className="text-xs font-semibold mt-0.5" style={{ color: "var(--text-secondary)" }}>{m.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
