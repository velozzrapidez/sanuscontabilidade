"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2, TrendingUp, ShieldCheck, AlertTriangle, Clock, Users, FileText, LayoutDashboard, Target, Scale, FileCheck, Layers, Stethoscope, ShoppingBag, Monitor, Code, HardHat, Calculator } from "lucide-react";
import Header from "../components/Header";
import UrgencyBanner from "../components/UrgencyBanner";
import Footer from "../components/Footer";

const WA_LINK = "https://wa.me/5564992934378?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20abertura%20de%20empresa.";

export default function AberturaEmpresaPage() {
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
    ref.current?.querySelectorAll(".reveal, .reveal-clip, .reveal-scale, .reveal-left, .reveal-right").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50" ref={ref}>
      <UrgencyBanner />
      <Header />

      {/* 1. HERO STRATÉGICO (AGITAÇÃO DE DOR) */}
      <section className="pt-24 pb-16 md:pt-36 md:pb-24 relative overflow-hidden bg-gray-900">
        {/* Fundo Premium SaaS: Grid Pattern e Radial Glow */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)",
          backgroundSize: "24px 24px"
        }}></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] opacity-30 blur-[120px] pointer-events-none rounded-full" style={{ background: "var(--red)" }}></div>
        
        <div className="container-xl relative z-10 text-center max-w-4xl mx-auto">
          <span className="reveal section-label spacing-title-mb px-4 py-2 text-sm" style={{ color: "#ffffff", background: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.2)" }}>
            Para Pequenos e Médios Empreendedores
          </span>
          <h1 className="reveal-clip font-black heading-xl spacing-title-mb leading-tight" style={{ color: "white" }}>
            Formalize seu negócio sem burocracia e <span style={{ color: "var(--red)" }}>pare de pagar impostos desnecessários</span>
          </h1>
          <p className="reveal-clip reveal-delay-1 body-lg spacing-subtitle-mb leading-relaxed text-lg" style={{ color: "rgba(255,255,255,0.8)" }}>
            Ter o próprio CNPJ é o único caminho seguro para emitir notas fiscais, fechar grandes contratos e proteger seu patrimônio pessoal. Nós cuidamos de 100% da papelada para você focar apenas em vender.
          </p>
          <div className="reveal-scale reveal-delay-2 flex justify-center gap-4 flex-col sm:flex-row">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary btn-shine text-lg py-5 px-10 rounded-xl shadow-2xl">
              Falar com um Especialista Agora
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* 2. GATILHOS E DORES (QUANDO ABRIR?) */}
      <section className="section-py bg-white">
        <div className="container-xl">
          <div className="section-header-center spacing-subtitle-mb max-w-3xl mx-auto">
            <h2 className="reveal-clip font-black heading-lg spacing-title-mb leading-tight">
              3 Sinais de que você passou da hora de abrir um CNPJ
            </h2>
            <p className="reveal-clip reveal-delay-1 body-lg text-gray-600 leading-relaxed text-lg">
              Se você se identifica com algum destes cenários, seu CPF está em risco de malha fina e você está perdendo oportunidades.
            </p>
          </div>

          <div className="card-grid-gap md:grid-cols-3 grid-cols-1">
            <div className="reveal-scale reveal-delay-1 card-professional p-10 border-t-4 hover-icon-scale flex flex-col h-full" style={{ borderTopColor: "var(--red)" }}>
              <div className="icon-box-md mb-8 bg-red-50 text-red-600">
                <AlertTriangle className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-2xl mb-4 text-gray-900">Imposto de Renda Alto</h3>
              <p className="text-gray-600 leading-loose flex-grow text-base">
                Faturando mais de R$ 3.000 mensais no CPF? Você pode estar pagando até 27,5% de imposto. Com um CNPJ (Simples Nacional), sua alíquota inicial pode ser de apenas 4% ou 6%.
              </p>
            </div>
            
            <div className="reveal-scale reveal-delay-2 card-professional p-10 border-t-4 hover-icon-scale flex flex-col h-full" style={{ borderTopColor: "var(--red)" }}>
              <div className="icon-box-md mb-8 bg-red-50 text-red-600">
                <TrendingUp className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-2xl mb-4 text-gray-900">Perda de Clientes B2B</h3>
              <p className="text-gray-600 leading-loose flex-grow text-base">
                Empresas maiores e fornecedores exigem Nota Fiscal para fechar contratos. Sem CNPJ, você passa uma imagem amadora e perde propostas altamente lucrativas.
              </p>
            </div>

            <div className="reveal-scale reveal-delay-3 card-professional p-10 border-t-4 hover-icon-scale flex flex-col h-full" style={{ borderTopColor: "var(--red)" }}>
              <div className="icon-box-md mb-8 bg-red-50 text-red-600">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-2xl mb-4 text-gray-900">Mistura Financeira</h3>
              <p className="text-gray-600 leading-loose flex-grow text-base">
                Misturar o dinheiro de casa com o da empresa é perigoso. O CNPJ separa o seu patrimônio pessoal dos riscos do negócio, garantindo segurança total para a sua família.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. A SOLUÇÃO SANUS CONTÁBIL */}
      <section className="section-py" style={{ background: "var(--bg-alt)" }}>
        <div className="container-xl grid lg:grid-cols-2 grid-cols-1 gap-16 items-center">
          <div className="reveal-left">
            <h2 className="font-black heading-md spacing-title-mb leading-tight">
              Abertura de Empresa Sem <br />Burocracia ou Erros
            </h2>
            <p className="body-lg mb-10 text-gray-600 leading-loose">
              Esqueça cartórios e idas e vindas de documentos. A Sanus Contábil cuida de 100% do processo digitalmente. Desde a escolha do CNAE correto até a emissão da primeira Nota Fiscal.
            </p>
            
            <ul className="space-y-6 mb-12">
              {[
                { t: "Natureza Jurídica Ideal", d: "Avaliamos se o melhor para você é SLU, LTDA ou MEI." },
                { t: "CNAE Estratégico", d: "Escolhemos os códigos de atividade para você pagar o menor imposto legal." },
                { t: "Suporte na Viabilidade", d: "Consultamos a prefeitura para garantir que sua sede seja aprovada." },
                { t: "Protocolo Digital Ágil", d: "Registramos na Junta Comercial em tempo recorde." }
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-1">
                    <CheckCircle2 className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 leading-tight">{item.t}</p>
                    <p className="text-sm text-gray-500 mt-1">{item.d}</p>
                  </div>
                </li>
              ))}
            </ul>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary w-fit text-lg px-8 py-4">
              Quero Abrir Minha Empresa
            </a>
          </div>
          <div className="reveal-right relative">
            <div className="absolute inset-0 bg-red-600/10 rounded-3xl transform translate-x-6 translate-y-6" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white flex items-center justify-center">
               <Image 
                  src="/helopagna2.png" 
                  alt="Gestão Contábil Profissional" 
                  width={800}
                  height={600}
                  className="w-full h-auto"
                  priority
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
               <div className="absolute bottom-8 left-8 right-8">
                 <div className="bg-white/10 backdrop-blur-xl border border-white/30 p-6 rounded-2xl flex items-center gap-6 shadow-2xl">
                    <LayoutDashboard className="w-10 h-10 text-white" />
                    <div>
                      <p className="text-white font-black text-xl mb-1">Tecnologia & Consultoria</p>
                      <p className="text-white/90 text-sm leading-relaxed">Acompanhe todo o processo pelo nosso portal exclusivo.</p>
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* BANNER CONSULTA CNAE (NEW) */}
      <section className="py-12 bg-white">
        <div className="container-xl">
          <div className="reveal card-professional p-8 bg-red-600 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
             <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center shrink-0">
                   <Calculator className="w-8 h-8 text-white" />
                </div>
                <div>
                   <h3 className="font-black text-2xl text-white leading-tight">Dúvidas sobre qual CNAE usar?</h3>
                   <p className="text-white/80 text-sm">Use nossa ferramenta gratuita de consulta e descubra o melhor enquadramento.</p>
                </div>
             </div>
             <a href="/consulta-cnae" className="btn-secondary bg-white text-red-600 border-none hover:bg-gray-100 px-8 py-4 text-lg">
                Consultar CNAE Agora
             </a>
          </div>
        </div>
      </section>

      {/* 4. TABELA COMPARATIVA (CPF vs CNPJ) */}
      <section className="section-py bg-white">
        <div className="container-xl">
          <div className="section-header-center spacing-subtitle-mb">
            <h2 className="reveal-clip font-black heading-lg spacing-title-mb">
              Por que formalizar é a <span className="gradient-text">melhor decisão?</span>
            </h2>
            <p className="reveal-clip reveal-delay-1 body-lg text-gray-600">
              Compare as vantagens reais de atuar como Pessoa Jurídica.
            </p>
          </div>

          <div className="reveal reveal-delay-2 overflow-x-auto">
            <table className="w-full border-collapse card-professional overflow-hidden">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-6 text-left font-black text-gray-900 border-b">CARACTERÍSTICA</th>
                  <th className="p-6 text-left font-black text-gray-400 border-b">TRABALHAR NO CPF</th>
                  <th className="p-6 text-left font-black text-red-600 border-b bg-red-50/30">COM CNPJ (SANUS)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { c: "Carga Tributária", cpf: "Até 27,5% (IRPF)", cnpj: "A partir de 6% (Simples)" },
                  { c: "Emissão de NF-e", cpf: "Limitada e burocrática", cnpj: "Completa e profissional" },
                  { c: "Contratos B2B", cpf: "Muitas empresas não aceitam", cnpj: "Acesso total ao mercado" },
                  { c: "Previdência (INSS)", cpf: "Contribuição sobre o total", cnpj: "Sobre o Pró-labore (econômico)" },
                  { c: "Segurança Jurídica", cpf: "Patrimônio pessoal em risco", cnpj: "Patrimônio pessoal protegido" },
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 transition-colors">
                    <td className="p-6 border-b font-bold text-gray-800">{row.c}</td>
                    <td className="p-6 border-b text-gray-500">{row.cpf}</td>
                    <td className="p-6 border-b font-black text-red-600 bg-red-50/10">{row.cnpj}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. PASSO A PASSO (A JORNADA) */}
      <section className="section-py" style={{ background: "var(--bg-dark)" }}>
        <div className="container-xl">
          <div className="section-header-center spacing-subtitle-mb">
            <span className="section-label mb-4" style={{ color: "white", background: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.2)" }}>Fluxo de Trabalho</span>
            <h2 className="reveal-clip font-black heading-lg spacing-title-mb" style={{ color: "white" }}>
              Como funciona o <span style={{ color: "var(--red)" }}>nosso processo</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { i: Target, t: "Planejamento", d: "Definimos o melhor regime e CNAE para seu negócio." },
              { i: FileText, t: "Contrato Social", d: "Elaboramos toda a documentação jurídica necessária." },
              { i: Layers, t: "Registro & CNPJ", d: "Protocolamos na Junta e liberamos seu CNPJ." },
              { i: FileCheck, t: "Inscrições", d: "Alvarás, Inscrição Estadual e liberação de notas." },
            ].map((step, idx) => {
              const Icon = step.i;
              return (
                <div key={idx} className="reveal-scale relative flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center text-white mb-6 shadow-xl relative z-10">
                    <Icon className="w-7 h-7" />
                    <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white text-red-600 font-black text-sm flex items-center justify-center shadow-md">
                      {idx + 1}
                    </div>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{step.t}</h3>
                  <p className="text-gray-200 text-sm leading-relaxed">{step.d}</p>
                  
                  {idx < 3 && (
                    <div className="hidden md:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-[1px] bg-red-600/30" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. QUEM ATENDEMOS (NICHO) */}
      <section className="section-py bg-white">
        <div className="container-xl">
          <div className="section-header-center spacing-subtitle-mb">
            <h2 className="reveal-clip font-black heading-lg spacing-title-mb">
              Especialistas no <span className="gradient-text">seu segmento</span>
            </h2>
            <p className="reveal-clip reveal-delay-1 body-lg text-gray-600">
              Contabilidade nichada para as particularidades do seu negócio.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
            {[
              { l: "Médicos & Saúde", i: Stethoscope },
              { l: "Advogados", i: Scale },
              { l: "E-commerce", i: ShoppingBag },
              { l: "Infoprodutores", i: Monitor },
              { l: "Devs & TI", i: Code },
              { l: "Engenheiros", i: HardHat },
            ].map((niche, i) => {
              const Icon = niche.i;
              return (
                <div key={i} className="reveal-scale p-6 card-professional flex flex-col items-center text-center gap-3 hover:border-red-200 transition-all group">
                  <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center group-hover:bg-red-600 transition-colors">
                    <Icon className="w-6 h-6 text-red-600 group-hover:text-white transition-colors" />
                  </div>
                  <span className="font-bold text-gray-800 text-sm leading-tight">{niche.l}</span>
                </div>
              );
            })}
          </div>

          {/* CHECKLIST DE DOCUMENTOS */}
          <div className="reveal-clip card-professional p-10 bg-gray-50 border-dashed border-2 border-gray-300">
            <div className="flex items-center gap-3 mb-8">
              <FileCheck className="w-6 h-6 text-red-600" />
              <h3 className="font-black text-2xl text-gray-900 uppercase tracking-tight">O que você precisa para começar?</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-600" /> Documentos Pessoais
                </p>
                <ul className="space-y-3 text-sm text-gray-600 font-medium">
                  <li>• RG e CPF (ou CNH atualizada)</li>
                  <li>• Comprovante de endereço residencial</li>
                  <li>• Certidão de casamento (se houver)</li>
                  <li>• Título de eleitor (ou IRPF se houver)</li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-600" /> Documentos do Local
                </p>
                <ul className="space-y-3 text-sm text-gray-600 font-medium">
                  <li>• Espelho do IPTU (número da inscrição imobiliária)</li>
                  <li>• Comprovante de endereço comercial</li>
                  <li>• Se for sede virtual, nós fornecemos a orientação.</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-xs text-gray-500 italic">
                * Dependendo da atividade (CNAE), outros documentos específicos como registros em conselhos de classe (CRM, OAB, CREA) podem ser solicitados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA FINAL (FECHAMENTO) */}
      <section className="section-py" style={{ background: "linear-gradient(to right, #0F172A, #1E293B)" }}>
        <div className="container-xl text-center max-w-4xl">
          <h2 className="reveal-clip font-black heading-lg mb-6" style={{ color: "white" }}>
            Não perca mais tempo (e dinheiro) na informalidade.
          </h2>
          <p className="reveal-clip reveal-delay-1 body-lg mb-10" style={{ color: "rgba(255,255,255,0.9)" }}>
            Estamos prontos para ser o braço direito do seu crescimento. Inicie seu processo de abertura hoje mesmo com o time da Sanus Contábil.
          </p>
          <div className="reveal-scale reveal-delay-2 flex flex-col sm:flex-row justify-center gap-6">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary text-xl py-6 px-12 shadow-2xl">
              Quero Abrir Meu CNPJ Agora
            </a>
            <div className="flex items-center gap-4 text-left">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-red-500">
                <Image src="/helopagna2.png" alt="Consultor" width={48} height={48} className="object-cover" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-white font-bold text-sm">Fale com Tânia Sanus</p>
                  <a href="https://www.instagram.com/sanuscontabil/" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300 transition-colors">
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4.162 4.162 0 110-8.324 4.162 4.162 0 010 8.324zM18.406 4.155a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/>
                    </svg>
                  </a>
                </div>
                <p className="text-red-400 text-xs font-black uppercase tracking-widest">Consultora Sênior</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
