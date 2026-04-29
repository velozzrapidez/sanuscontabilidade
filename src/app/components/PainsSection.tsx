"use client";

import { useEffect, useRef } from "react";
import { CircleDollarSign, AlertTriangle, Rocket, UserMinus, FileText, BarChart3 } from "lucide-react";

const pains = [
  { icon: CircleDollarSign, title: "Carga tributária elevada?", desc: "Muitas empresas pagam mais impostos do que deveriam. Identificamos o melhor enquadramento fiscal para o seu negócio." },
  { icon: AlertTriangle,    title: "Pendências com o fisco?",  desc: "Notificações da Receita Federal ou dívidas ativas? Nossa equipe regulariza sua empresa com total segurança." },
  { icon: Rocket,           title: "Burocracia na abertura?",  desc: "Abrimos sua empresa em Itumbiara com agilidade, cuidando de toda a documentação estrutural e legal." },
  { icon: UserMinus,        title: "Insatisfação contábil?",   desc: "A troca de contador é simples e gratuita. Assumimos a responsabilidade sem paralisação das atividades." },
  { icon: FileText,         title: "Desorganização no MEI?",   desc: "DAS em atraso ou limite ultrapassado? Regularizamos sua situação e orientamos a transição de regime." },
  { icon: BarChart3,        title: "Falta de visão financeira?", desc: "Fornecemos relatórios claros e métricas precisas para que você tome decisões com segurança e dados reais." },
];

export default function PainsSection() {
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
    <section id="dores" ref={ref}
      className="section-py" style={{ background: "var(--bg-alt)" }}>
      <div className="container-xl">
        <div className="section-header-center spacing-subtitle-mb">
          <span className="reveal section-label spacing-title-mb">Diagnóstico Empresarial</span>
          <h2 className="reveal-clip reveal-delay-1 heading-lg spacing-title-mb">
            Sua empresa enfrenta algum destes desafios?
          </h2>
          <p className="reveal-clip reveal-delay-2 body-lg">
            Identificamos gargalos fiscais e financeiros para implementar soluções definitivas.
          </p>
        </div>

        <div className="card-grid-gap lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
          {pains.map((p, i) => {
            const Icon = p.icon;
            return (
              <div key={p.title}
                className={`reveal reveal-delay-${(i % 3) + 1} card-professional hover-icon-scale`}
                style={{ padding: "2rem" }}>
                <div className="icon-box-md mb-5" style={{ borderRadius: "var(--radius-sm)" }}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="heading-md mb-3" style={{ fontSize: "1.05rem" }}>{p.title}</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9375rem", lineHeight: 1.65 }}>{p.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
