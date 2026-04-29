"use client";

import { useEffect, useRef } from "react";
import { Building2, ArrowRightLeft, FileSpreadsheet, Briefcase, TrendingDown, PiggyBank } from "lucide-react";

const WA = "https://wa.me/5564992934378?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os.";

const services = [
  { Icon: Building2,       title: "Abertura de empresa",     desc: "Estruturação societária completa e ágil, garantindo o melhor enquadramento desde o primeiro dia." },
  { Icon: ArrowRightLeft,  title: "Migração de contador",    desc: "Transição técnica e segura. Assumimos a responsabilidade fiscal sem paralisação das atividades." },
  { Icon: FileSpreadsheet, title: "Contabilidade mensal",    desc: "Gestão de folha, apuração precisa de impostos e entrega rigorosa de obrigações acessórias." },
  { Icon: Briefcase,       title: "Assessoria MEI",          desc: "Regularização de pendências, declarações anuais e orientação para transição ao regime de ME." },
  { Icon: TrendingDown,    title: "Planejamento tributário", desc: "Auditoria fiscal estratégica para garantir a menor carga tributária dentro da legalidade." },
  { Icon: PiggyBank,       title: "Gestão Financeira (BPO)", desc: "Terceirização de processos financeiros: contas a pagar, conciliação bancária e fluxo de caixa." },
];

export default function ServicesSection() {
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
    <section id="servicos" ref={ref} className="section-py" style={{ background: "var(--white)" }}>
      <div className="container-xl">
        <div className="section-header-center spacing-subtitle-mb">
          <span className="reveal section-label spacing-title-mb">Nossos Serviços</span>
          <h2 className="reveal-clip reveal-delay-1 heading-lg spacing-title-mb">
            Soluções contábeis completas para a sua empresa
          </h2>
          <p className="reveal-clip reveal-delay-2 body-lg">
            Atendimento consultivo e técnico. Descomplicamos rotinas para que você foque no que realmente importa.
          </p>
        </div>

        <div className="card-grid-gap lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mb-12">
          {services.map(({ Icon, title, desc }, i) => (
            <div key={title}
              className={`reveal reveal-delay-${(i % 3) + 1} card-professional group hover-icon-scale`}
              style={{ padding: "2rem" }}>
              <div className="icon-box-md mb-5" style={{ borderRadius: "var(--radius-sm)", transition: "background 0.2s" }}>
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="heading-md mb-3" style={{ fontSize: "1.05rem" }}>{title}</h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.9375rem", lineHeight: 1.65 }}>{desc}</p>
            </div>
          ))}
        </div>

        <div className="reveal reveal-delay-3 flex justify-center">
          <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            Falar com um consultor
          </a>
        </div>
      </div>
    </section>
  );
}
