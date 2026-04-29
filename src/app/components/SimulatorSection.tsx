"use client";

import { useState, useRef, useEffect } from "react";
import { Calculator, TrendingDown, ArrowRight, CheckCircle2 } from "lucide-react";

const regimes = [
  { value: "simples", label: "Simples Nacional", rate: 0.11 },
  { value: "lucro_presumido", label: "Lucro Presumido", rate: 0.16 },
  { value: "lucro_real", label: "Lucro Real", rate: 0.19 },
  { value: "mei", label: "MEI", rate: 0.05 },
];

const niches = [
  { value: "comercio", label: "Comércio" },
  { value: "servicos", label: "Prestação de Serviços" },
  { value: "industria", label: "Indústria" },
  { value: "saude", label: "Saúde / Clínicas" },
  { value: "tecnologia", label: "Tecnologia / TI" },
  { value: "outro", label: "Outro segmento" },
];

function formatBRL(value: number) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
}

export default function SimulatorSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [revenue, setRevenue] = useState("");
  const [regime, setRegime] = useState("");
  const [niche, setNiche] = useState("");
  const [result, setResult] = useState<{ current: number; optimized: number; saving: number } | null>(null);
  const [submitted, setSubmitted] = useState(false);

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
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const rawRevenue = parseFloat(revenue.replace(/\D/g, "")) || 0;

  const handleRevenueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/\D/g, "");
    const num = parseFloat(digits) / 100;
    if (!digits) { setRevenue(""); return; }
    setRevenue(num.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }));
  };

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!rawRevenue || !regime) return;
    const selectedRegime = regimes.find((r) => r.value === regime);
    if (!selectedRegime) return;

    const currentTax = rawRevenue * selectedRegime.rate;
    const savingRate = regime === "lucro_presumido" ? 0.28 : regime === "lucro_real" ? 0.22 : regime === "simples" ? 0.15 : 0.10;
    const optimizedTax = currentTax * (1 - savingRate);
    const saving = currentTax - optimizedTax;

    setResult({ current: currentTax, optimized: optimizedTax, saving });
    setSubmitted(true);
  };

  return (
    <section id="simulador" className="section-py" style={{ background: "var(--bg-alt)" }} ref={ref}>
      <div className="container-xl">
        <div className="section-header-center spacing-subtitle-mb">
          <div className="reveal">
            <span className="section-label spacing-title-mb">
              <Calculator className="w-3.5 h-3.5" /> Simulador Gratuito
            </span>
          </div>
          <h2 className="reveal font-black spacing-title-mb heading-lg">
            Descubra quanto sua empresa pode{" "}
            <span className="gradient-text">economizar em impostos</span>
          </h2>
          <p className="reveal reveal-delay-1 body-lg">
            Faça uma simulação gratuita e receba um plano de ação estratégico no WhatsApp.
          </p>
        </div>

        <div className="reveal reveal-delay-2 card-grid-gap lg:grid-cols-2 grid-cols-1 items-start">
          {/* Form */}
          <div className="card-professional p-8 md:p-10 border-t-4 border-t-red-600" style={{ borderTopColor: "var(--red)" }}>
            <h3 className="heading-md mb-6 text-xl">Preencha os dados da sua empresa</h3>
            <form onSubmit={handleCalculate} className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
                  Faturamento mensal estimado
                </label>
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="R$ 0,00"
                  value={revenue}
                  onChange={handleRevenueChange}
                  required
                  className="input-field"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
                  Regime tributário atual
                </label>
                <select
                  value={regime}
                  onChange={(e) => setRegime(e.target.value)}
                  required
                  className="input-field bg-white"
                >
                  <option value="">Selecione o regime</option>
                  {regimes.map((r) => (
                    <option key={r.value} value={r.value}>{r.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
                  Segmento da empresa
                </label>
                <select
                  value={niche}
                  onChange={(e) => setNiche(e.target.value)}
                  className="input-field bg-white"
                >
                  <option value="">Selecione o segmento (opcional)</option>
                  {niches.map((n) => (
                    <option key={n.value} value={n.value}>{n.label}</option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="btn-primary w-full mt-4"
              >
                <Calculator className="w-5 h-5" />
                Calcular Economia Potencial
              </button>
            </form>

            <p className="text-xs text-gray-400 text-center mt-4 font-medium">
              * Valores estimados baseados em médias de mercado.
            </p>
          </div>

          {/* Result */}
          <div>
            {!submitted ? (
              <div className="bg-white border border-dashed border-gray-300 p-10 flex flex-col items-center justify-center text-center gap-4 h-full" style={{ borderRadius: "var(--radius-md)", minHeight: "300px" }}>
                <div className="icon-box-lg">
                  <TrendingDown className="w-7 h-7" />
                </div>
                <p className="text-gray-500 font-medium">Preencha os dados ao lado para<br />ver sua estimativa de economia</p>
              </div>
            ) : result && (
              <div className="space-y-4">
                <div className="card-professional p-6 flex justify-between items-center bg-white">
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Imposto estimado atual</p>
                    <p className="text-2xl font-black text-gray-800">{formatBRL(result.current)}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Com planejamento</p>
                    <p className="text-2xl font-black text-emerald-600">{formatBRL(result.optimized)}</p>
                  </div>
                </div>

                <div className="card-professional p-8" style={{ background: "var(--red)", color: "white", borderColor: "transparent" }}>
                  <p className="text-xs font-bold uppercase tracking-widest mb-2 text-red-100">Economia potencial mensal</p>
                  <p className="text-4xl font-black mb-1">{formatBRL(result.saving)}</p>
                  <p className="text-sm font-semibold text-red-200">
                    {formatBRL(result.saving * 12)} ao ano
                  </p>
                </div>

                <div className="card-professional p-6 bg-white">
                  <p className="font-bold text-gray-900 mb-4">Próximos passos:</p>
                  <ul className="space-y-3 mb-6">
                    {[
                      "Auditoria tributária gratuita",
                      "Plano de ação via WhatsApp",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`https://wa.me/5564992934378?text=Ol%C3%A1!%20Fiz%20o%20simulador%20no%20site%20e%20minha%20economia%20potencial%20%C3%A9%20de%20${encodeURIComponent(formatBRL(result.saving))}%20por%20m%C3%AAs.%20Quero%20a%20auditoria%20gratuita!`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full"
                  >
                    Quero minha auditoria gratuita
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
