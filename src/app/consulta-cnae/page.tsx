"use client";

import { useState, useEffect, useRef } from "react";
import { Search, CheckCircle2, XCircle, Info, ArrowRight, Calculator, ShieldCheck, Target, FileSearch } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import UrgencyBanner from "../components/UrgencyBanner";
import { popularCNAEs, CNAE } from "../data/cnaes";

const WA_LINK = "https://wa.me/5564992934378?text=Ol%C3%A1!%20Gostaria%20de%20uma%20consulta%20detalhada%20sobre%20o%20CNAE%20da%20minha%20atividade.";

export default function ConsultaCnaePage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<CNAE[]>([]);
  const [searching, setSearching] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          observer.unobserve(e.target);
        }
      }),
      { threshold: 0.01 }
    );
    ref.current?.querySelectorAll(".reveal, .reveal-clip, .reveal-scale").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const normalizeText = (text: string) => {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  };

  const handleSearch = (q: string) => {
    setQuery(q);
    if (q.length > 2) {
      setSearching(true);
      const normalizedQuery = normalizeText(q);
      const filtered = popularCNAEs.filter(c => 
        normalizeText(c.code).includes(normalizedQuery) || 
        normalizeText(c.description).includes(normalizedQuery)
      );
      setResults(filtered);
    } else {
      setResults([]);
      setSearching(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50" ref={ref}>
      <UrgencyBanner />
      <Header />

      {/* 1. HERO COM BUSCA */}
      <section className="section-py relative overflow-hidden" style={{ background: "var(--bg-dark)" }}>
        {/* Abstract Background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-600 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="container-xl relative z-10 text-center max-w-3xl">
          <span className="reveal section-label mb-6" style={{ color: "white", background: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.2)" }}>Ferramenta Gratuita</span>
          <h1 className="reveal-clip font-black heading-xl text-white mb-6 leading-tight">
            Consulta de CNAE e <br />
            <span style={{ color: "var(--red)" }}>Enquadramento Tributário</span>
          </h1>
          <p className="reveal-clip reveal-delay-1 body-lg text-white/80 mb-10">
            Descubra o código ideal para sua atividade e veja se você pode ser MEI, Simples Nacional e qual será sua alíquota inicial de impostos.
          </p>

          <div className="reveal-scale reveal-delay-2 relative group max-w-2xl mx-auto">
            <div className="absolute inset-0 bg-red-600/20 blur-xl group-hover:bg-red-600/30 transition-all rounded-2xl" />
            <div className="relative flex items-center bg-white rounded-2xl p-2 shadow-2xl border border-white/20">
              <div className="pl-6 pr-4 text-gray-400">
                <Search className="w-6 h-6" />
              </div>
              <input 
                type="text" 
                placeholder="Ex: Desenvolvimento de software, Advogado, Comércio..." 
                className="w-full py-4 text-lg font-medium text-gray-900 outline-none placeholder:text-gray-400"
                value={query}
                onChange={(e) => handleSearch(e.target.value)}
              />
              {query && (
                <button onClick={() => handleSearch("")} className="px-4 text-gray-400 hover:text-red-600 transition-colors">
                   Limpar
                </button>
              )}
            </div>
          </div>
          <p className="reveal mt-6 text-sm text-white/40 italic">
            Dica: Digite o nome da sua atividade ou os números do código se já os tiver.
          </p>
        </div>
      </section>

      {/* 2. RESULTADOS OU POPULARES */}
      <section className="section-py bg-white">
        <div className="container-xl">
          {searching ? (
            <div className="space-y-6">
              <h2 className="font-black text-2xl text-gray-900 mb-8 flex items-center gap-3">
                <FileSearch className="text-red-600" />
                Resultados para &quot;{query}&quot;
              </h2>
              
              {results.length > 0 ? (
                <div className="grid grid-cols-1 gap-4">
                  {results.map((c) => (
                    <div key={c.code} className="reveal-left card-professional p-6 hover:border-red-200 transition-all">
                      <div className="flex flex-col md:flex-row justify-between gap-6">
                        <div className="flex-1">
                          <span className="inline-block px-3 py-1 bg-red-50 text-red-700 font-black text-sm rounded mb-3 border border-red-100">
                            CNAE {c.code}
                          </span>
                          <h3 className="font-bold text-xl text-gray-900 mb-2 leading-tight">{c.description}</h3>
                          
                          <div className="flex flex-wrap gap-4 mt-6">
                            <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-lg border border-gray-100">
                              <Calculator className="w-4 h-4 text-gray-400" />
                              <span className="text-sm font-bold text-gray-700">Anexo: <span className="text-red-600">{c.annex}</span></span>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-lg border border-gray-100">
                              <Target className="w-4 h-4 text-gray-400" />
                              <span className="text-sm font-bold text-gray-700">Imposto: <span className="text-red-600">{c.taxRate}</span></span>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row md:flex-col gap-4 justify-center shrink-0 md:border-l md:pl-8 md:min-w-[220px]">
                           <div className="flex items-center gap-2">
                             {c.simples ? <CheckCircle2 className="text-green-600 w-5 h-5" /> : <XCircle className="text-red-600 w-5 h-5" />}
                             <span className="text-sm font-bold text-gray-700">Simples Nacional</span>
                           </div>
                           <div className="flex items-center gap-2">
                             {c.mei ? <CheckCircle2 className="text-green-600 w-5 h-5" /> : <XCircle className="text-red-600 w-5 h-5" />}
                             <span className="text-sm font-bold text-gray-700">Permite MEI</span>
                           </div>
                           <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary py-2 px-4 text-xs mt-2">
                              Validar Atividade
                           </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
                   <Info className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                   <h3 className="font-bold text-xl text-gray-900">Nenhum CNAE encontrado com este termo.</h3>
                   <p className="text-gray-500 mt-2 max-w-md mx-auto">
                     Nossa base popular é limitada, mas nosso time tem acesso ao catálogo completo do IBGE.
                   </p>
                   <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary mt-6">
                      Consultar Especialista Gratuitamente
                   </a>
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-12">
               <div className="section-header-center">
                 <h2 className="font-black text-3xl text-gray-900 mb-4">Atividades Mais Procuradas</h2>
                 <p className="text-gray-600">Selecione uma das atividades abaixo para ver os detalhes tributários.</p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {popularCNAEs.slice(0, 6).map((c) => (
                    <button key={c.code} onClick={() => handleSearch(c.code)} className="reveal-scale card-professional p-6 text-left hover:border-red-600 group transition-all">
                       <span className="text-xs font-black text-red-600 uppercase mb-2 block">{c.code}</span>
                       <h3 className="font-bold text-gray-900 group-hover:text-red-600 transition-colors leading-tight">{c.description}</h3>
                       <div className="mt-4 flex items-center justify-between">
                          <span className="text-xs font-bold text-gray-400">Ver detalhes</span>
                          <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-red-600 transform group-hover:translate-x-1 transition-all" />
                       </div>
                    </button>
                  ))}
               </div>
            </div>
          )}
        </div>
      </section>

      {/* 3. EXPLICATIVO SOBRE CNAE */}
      <section className="section-py" style={{ background: "var(--bg-alt)" }}>
        <div className="container-xl grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal-left">
            <h2 className="font-black heading-lg mb-8 leading-tight">
              A importância de escolher o <br /><span className="gradient-text">CNAE correto</span>
            </h2>
            <p className="body-lg text-gray-600 mb-8">
              O CNAE (Classificação Nacional de Atividades Econômicas) define não apenas o que você faz, mas também **quanto imposto você vai pagar** e quais licenças sua empresa vai precisar.
            </p>
            
            <div className="space-y-6">
              {[
                { t: "Evite Multas", d: "Atuar com um CNAE que não condiz com sua atividade real pode gerar multas pesadas e desenquadramento." },
                { t: "Economia Tributária", d: "Atividades similares podem estar em anexos diferentes do Simples Nacional. O contador encontra o caminho mais barato." },
                { t: "Segurança Jurídica", d: "Garante que seu contrato social esteja blindado e pronto para licitações ou grandes contratos." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-5 bg-white rounded-2xl shadow-sm border border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{item.t}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal-right relative">
             <div className="card-professional p-8 bg-white shadow-2xl">
                <h3 className="font-black text-xl mb-6 flex items-center gap-3">
                  <Calculator className="text-red-600" />
                  Simulação de Imposto
                </h3>
                <div className="space-y-6">
                   <div className="p-4 bg-gray-50 rounded-xl">
                      <p className="text-xs font-bold text-gray-400 uppercase mb-1">Anexo III (Serviços)</p>
                      <p className="text-2xl font-black text-gray-900">Inicia em 6,0%</p>
                      <p className="text-xs text-gray-500 mt-1">Ideal para TI, Publicidade, Treinamentos.</p>
                   </div>
                   <div className="p-4 bg-gray-50 rounded-xl">
                      <p className="text-xs font-bold text-gray-400 uppercase mb-1">Anexo V (Intelectual)</p>
                      <p className="text-2xl font-black text-gray-900">Inicia em 15,5%</p>
                      <p className="text-xs text-gray-500 mt-1">Consultoria, Engenharia, Medicina (Sem Fator R).</p>
                   </div>
                   <p className="text-sm text-gray-500 italic">
                     * O **Fator R** pode reduzir o imposto de 15,5% para 6%. Consulte-nos para saber como aplicar.
                   </p>
                   <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary w-full py-4 text-lg">
                      Falar com Especialista
                   </a>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 4. CTA FINAL */}
      <section className="section-py bg-white">
        <div className="container-xl">
           <div className="card-professional p-12 bg-gray-900 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ background: "radial-gradient(circle at center, var(--red) 0%, transparent 70%)" }} />
              <div className="relative z-10">
                <h2 className="font-black heading-lg text-white mb-6">Ainda tem dúvidas sobre o seu CNAE?</h2>
                <p className="text-white/70 body-lg mb-10 max-w-2xl mx-auto">
                  A escolha errada pode custar caro. Deixe que nossos especialistas em Itumbiara façam a análise técnica da sua atividade sem custo.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary px-10 py-5 text-xl">
                    Análise Técnica Gratuita
                  </a>
                  <a href="/abertura-de-empresa" className="btn-secondary px-10 py-5 text-xl bg-transparent text-white border-white/20 hover:bg-white/10">
                    Saiba mais sobre Abertura
                  </a>
                </div>
              </div>
           </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
