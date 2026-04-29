"use client";

import { useEffect, useRef } from "react";
import { CheckCircle2, ShieldAlert, Lock, Clock, Users, Building } from "lucide-react";

const diffs = [
  { icon: ShieldAlert, title: "Mitigação de Riscos", desc: "Processos auditados para garantir 100% de conformidade legal." },
  { icon: Clock, title: "Atendimento Rápido", desc: "Respostas em até 24h úteis para que sua operação não pare." },
  { icon: Lock, title: "Segurança de Dados", desc: "Infraestrutura em conformidade com a LGPD e sigilo absoluto." },
  { icon: CheckCircle2, title: "Contabilidade Consultiva", desc: "Análises gerenciais e não apenas envio de guias." },
  { icon: Users, title: "Equipe Especializada", desc: "Profissionais qualificados em constante atualização técnica." },
  { icon: Building, title: "Foco Regional", desc: "Amplo conhecimento das particularidades de Itumbiara e região." },
];

export default function DiffsSection() {
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
    ref.current?.querySelectorAll(".reveal, .reveal-scale").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="diferenciais" className="section-py" style={{ background: "var(--white)" }} ref={ref}>
      <div className="container-xl">
        <div className="section-header-center spacing-subtitle-mb">
          <span className="reveal section-label spacing-title-mb">Vantagem Competitiva</span>
          <h2 className="reveal reveal-delay-1 heading-lg spacing-title-mb">
            Por que escolher a Sanus Contábil Digital?
          </h2>
          <p className="reveal reveal-delay-2 body-lg">
            Combinamos tecnologia de ponta com um atendimento humano e especializado.
          </p>
        </div>

        <div className="card-grid-gap lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
          {diffs.map((diff, i) => {
            const Icon = diff.icon;
            return (
              <div key={diff.title} className={`reveal-scale reveal-delay-${(i % 3) + 1} card-professional hover-icon-scale p-8 flex flex-col items-start gap-5 h-full`}>
                <div className="icon-box-md shrink-0 bg-red-50 text-red-600">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{diff.title}</h3>
                  <p className="text-gray-600 text-sm">{diff.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
