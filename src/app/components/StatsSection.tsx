"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { numeric: 200, suffix: "+", label: "Empresas atendidas" },
  { numeric: 8,   suffix: "+", label: "Anos de mercado" },
  { numeric: 98,  suffix: "%", label: "Índice de retenção" },
  { numeric: 24,  suffix: "h", label: "SLA de resposta" },
];

function AnimatedNumber({ value, suffix }: { value: number, suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const duration = 2000; // 2 seconds
          const steps = 60;
          const increment = value / steps;
          const stepTime = duration / steps;
          
          const timer = setInterval(() => {
            start += increment;
            if (start >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.ceil(start));
            }
          }, stepTime);
          observer.disconnect();
        }
      },
      { threshold: 0.01 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.2 }
    );
    ref.current?.querySelectorAll(".reveal, .reveal-scale").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} style={{ background: "var(--bg-dark)", borderTop: "3px solid var(--red)", padding: "2.5rem 0" }}>
      <div className="container-xl">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "0" }}
          className="md:grid-cols-4">
          {stats.map((s, i) => (
            <div key={s.label}
              className={`reveal-scale reveal-delay-${i + 1} flex flex-col items-center text-center py-6 px-4`}
              style={{ borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none" }}>
              <span className="font-black gradient-text"
                style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", lineHeight: 1 }}>
                <AnimatedNumber value={s.numeric} suffix={s.suffix} />
              </span>
              <span className="mt-2 text-xs font-bold uppercase tracking-widest"
                style={{ color: "rgba(255,255,255,0.65)" }}>
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
