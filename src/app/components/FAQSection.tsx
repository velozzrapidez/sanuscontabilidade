"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, Building2, RefreshCw, Rocket, HelpCircle } from "lucide-react";

const faqData = [
  {
    category: "Abertura de Empresa",
    icon: Building2,
    questions: [
      {
        q: "Como funciona o processo de abertura de empresa?",
        a: "Cuidamos de tudo: desde a viabilidade na prefeitura, elaboração do contrato social, registro na Junta Comercial, até a emissão do CNPJ e alvarás. Você não precisa se preocupar com nada."
      },
      {
        q: "Quanto tempo demora para abrir um CNPJ?",
        a: "Em média, o processo leva de 5 a 15 dias úteis, dependendo da agilidade dos órgãos municipais e estaduais em Itumbiara. Nosso processo é 100% digital para acelerar ao máximo."
      },
      {
        q: "Quais documentos são necessários?",
        a: "Basicamente RG, CPF (ou CNH), comprovante de endereço e o número do recibo do último IRPF ou Título de Eleitor. Se houver sócios, os mesmos documentos deles."
      },
      {
        q: "Posso abrir minha empresa em casa?",
        a: "Sim, para prestadores de serviços que não recebem clientes no local, é possível utilizar o endereço residencial como sede fiscal, economizando com aluguel comercial."
      },
      {
        q: "Qual a diferença entre MEI e ME?",
        a: "O MEI tem limite de faturamento de R$ 81 mil/ano e restrições de atividades. A ME (Microempresa) permite faturar até R$ 360 mil/ano, contratar mais funcionários e ter sócios."
      },
      {
        q: "Quais são os custos iniciais para abrir uma empresa?",
        a: "Os custos envolvem taxas da Junta Comercial, Certificado Digital e alvarás municipais. Na Sanus, oferecemos pacotes com honorários facilitados para novos empreendedores."
      },
      {
        q: "Preciso de um sócio para abrir minha empresa?",
        a: "Não. Hoje você pode abrir uma SLU (Sociedade Limitada Unipessoal), que permite ter uma empresa individual com a proteção de patrimônio de uma limitada."
      },
      {
        q: "Qual o melhor regime tributário para começar?",
        a: "Geralmente é o Simples Nacional, mas fazemos um planejamento tributário inicial para confirmar se este é realmente o caminho mais econômico para o seu caso específico."
      }
    ]
  },
  {
    category: "Troca de Contador",
    icon: RefreshCw,
    questions: [
      {
        q: "Como trocar de contador para a Sanus?",
        a: "É muito simples. Você só precisa nos avisar e nós cuidamos de todo o distrato com o antigo escritório e a transferência da documentação técnica."
      },
      {
        q: "Existe algum custo para mudar de contabilidade?",
        a: "Na Sanus Contábil, não cobramos taxa de adesão ou transferência. Você só começa a pagar as mensalidades após o início efetivo dos nossos serviços."
      },
      {
        q: "Posso trocar de contador em qualquer época do ano?",
        a: "Sim. Não há necessidade de esperar o final do ano ou o fechamento de balanço. Podemos assumir sua contabilidade em qualquer mês, garantindo a continuidade fiscal."
      },
      {
        q: "O que acontece com meus impostos atrasados?",
        a: "Nós fazemos um diagnóstico completo. Se houver pendências, orientamos o melhor parcelamento e regularizamos tudo para que sua empresa volte a operar sem riscos."
      },
      {
        q: "Quanto tempo leva a transição?",
        a: "O processo de migração leva em média 15 a 30 dias para que toda a documentação histórica seja processada em nosso sistema, mas assumimos a operação imediatamente."
      },
      {
        q: "Como é feita a entrega da documentação?",
        a: "Tudo é feito de forma digital através da nossa plataforma ou WhatsApp. Você não precisa levar papéis físicos ao escritório, economizando tempo e logística."
      },
      {
        q: "Vocês revisam o que o contador anterior fez?",
        a: "Sim, fazemos uma auditoria de entrada nos últimos 12 meses para garantir que não existam erros ocultos que possam gerar multas para você no futuro."
      },
      {
        q: "Vou ter um canal direto com o contador?",
        a: "Com certeza. Na Sanus você não fala com robôs. Terá um canal direto via WhatsApp com a nossa equipe de especialistas para suporte rápido e humanizado."
      }
    ]
  },
  {
    category: "Migrar MEI para ME",
    icon: Rocket,
    questions: [
      {
        q: "Quando devo sair do MEI?",
        a: "Sempre que seu faturamento ultrapassar R$ 81 mil/ano, quando precisar contratar mais de um funcionário ou se sua atividade deixar de ser permitida no MEI."
      },
      {
        q: "Quais as vantagens de se tornar uma Microempresa?",
        a: "Maior limite de faturamento, possibilidade de expansão, acesso a melhores linhas de crédito bancário e segurança jurídica para crescer sem limitações."
      },
      {
        q: "A carga tributária aumenta muito ao sair do MEI?",
        a: "Depende do faturamento. No Simples Nacional, a alíquota inicial para serviços é de 6%. Fazemos um planejamento para que a transição seja o mais econômica possível."
      },
      {
        q: "Posso manter o mesmo número de CNPJ?",
        a: "Sim. O processo de desenquadramento do MEI mantém o seu número de CNPJ original, mudando apenas a sua categoria jurídica e obrigações contábeis."
      },
      {
        q: "Quanto custa o processo de migração?",
        a: "O custo envolve taxas da Junta Comercial para a alteração contratual. Nossa equipe cuida de toda a parte burocrática dessa transição para você."
      },
      {
        q: "Quais são as novas obrigações como ME?",
        a: "Como ME, você passa a precisar de contabilidade regular, emissão de todas as notas fiscais e entrega de declarações mensais, tudo o que a Sanus faz para você."
      },
      {
        q: "Posso ter sócios após migrar para ME?",
        a: "Sim. Ao transformar seu MEI em uma Sociedade Limitada (ME), você ganha a liberdade de incluir sócios investidores ou operacionais no seu negócio."
      },
      {
        q: "O processo é demorado?",
        a: "O desenquadramento na Receita Federal é imediato, mas a alteração na Junta Comercial leva cerca de 7 a 10 dias úteis para ser finalizada."
      }
    ]
  },
  {
    category: "Sanus Contábil",
    icon: HelpCircle,
    questions: [
      {
        q: "A Sanus Contábil é confiável?",
        a: "Sim. Somos um escritório devidamente registrado no CRC, com sede em Itumbiara e atendimento em todo o Brasil, utilizando tecnologia de ponta para segurança de dados."
      },
      {
        q: "Como é o atendimento no dia a dia?",
        a: "Nosso atendimento é híbrido: você tem a agilidade do portal do cliente e WhatsApp, mas sempre com contadores reais prontos para tirar suas dúvidas de forma humana."
      },
      {
        q: "O que está incluso na mensalidade?",
        a: "Cálculo de todos os impostos, folha de pagamento, balancetes, obrigações acessórias (DCTF, EFD, etc), suporte ilimitado via WhatsApp e acesso à nossa plataforma."
      },
      {
        q: "Vocês atendem quais segmentos?",
        a: "Atendemos prestadores de serviços, profissionais liberais (médicos, advogados, engenheiros), comércios locais e e-commerces."
      },
      {
        q: "Como faço para enviar meus documentos?",
        a: "Você pode tirar fotos ou subir arquivos PDF diretamente no nosso aplicativo ou pelo WhatsApp. Simples, rápido e sem papelada física."
      },
      {
        q: "A Sanus atende empresas de fora de Itumbiara?",
        a: "Sim! Como somos uma contabilidade digital e consultiva, conseguimos atender empresas de todo o estado de Goiás e do Brasil com a mesma eficiência."
      },
      {
        q: "O que é contabilidade consultiva?",
        a: "É irmos além de apenas calcular guias. Analisamos seus números para dar insights sobre como economizar impostos e aumentar a lucratividade do seu negócio."
      },
      {
        q: "Como cancelar o serviço se eu não estiver satisfeito?",
        a: "Não trabalhamos com multas abusivas de fidelidade. Se quiser sair, basta nos avisar com 30 dias de antecedência para organizarmos a entrega dos seus documentos."
      }
    ]
  }
];

export default function FAQSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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

  return (
    <section className="section-py" style={{ background: "var(--bg-alt)" }} ref={ref}>
      <div className="container-xl">
        <div className="section-header-center spacing-subtitle-mb">
          <span className="reveal section-label spacing-title-mb">Base de Conhecimento</span>
          <h2 className="reveal reveal-delay-1 heading-lg">Tem alguma pergunta? <br /><span className="gradient-text">Encontre respostas aqui.</span></h2>
        </div>

        {/* Categories Tabs */}
        <div className="reveal reveal-delay-2 flex flex-wrap justify-center gap-3 mb-12">
          {faqData.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.category}
                onClick={() => {
                  setActiveCategory(idx);
                  setOpenFaq(null);
                }}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 border ${
                  activeCategory === idx
                    ? "bg-red-600 text-white border-red-600 shadow-lg shadow-red-600/20 scale-105"
                    : "bg-white text-gray-600 border-gray-200 hover:border-red-200 hover:text-red-600"
                }`}
              >
                <Icon className={`w-4 h-4 ${activeCategory === idx ? "text-white" : "text-red-500"}`} />
                {cat.category}
              </button>
            );
          })}
        </div>

        <div className="reveal reveal-delay-3 max-w-3xl mx-auto">
          <div className="card-professional overflow-hidden bg-white shadow-xl">
            {faqData[activeCategory].questions.map((item, i) => (
              <div key={i} className={`border-b border-gray-50 last:border-b-0`}>
                <button
                  className="accordion-trigger py-5 px-8 hover:bg-gray-50/50"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="text-base font-bold text-gray-800 leading-tight pr-4">{item.q}</span>
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openFaq === i ? "bg-red-50 text-red-600 rotate-180" : "bg-gray-50 text-gray-400"}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>
                <div 
                  className="overflow-hidden transition-all duration-300 ease-in-out" 
                  style={{ 
                    maxHeight: openFaq === i ? "300px" : "0px",
                    opacity: openFaq === i ? 1 : 0
                  }}
                >
                  <div className="px-8 pb-6 text-gray-600 text-[0.95rem] leading-relaxed">
                    <div className="pt-2 border-t border-gray-50">
                      {item.a}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center reveal reveal-delay-4">
            <p className="text-gray-500 font-medium mb-6">Ainda tem dúvidas? Fale diretamente com um especialista.</p>
            <a 
              href="https://wa.me/5564992934378" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Falar com um consultor agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
