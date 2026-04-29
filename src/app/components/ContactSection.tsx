"use client";

import { useState, useRef, useEffect } from "react";
import { Mail, MapPin, Phone, Clock, Send, ShieldCheck, CheckCircle2, AlertTriangle } from "lucide-react";
import { validatePhone, validateCNPJ, validateEmail } from "../lib/utils";
import * as Toast from "@radix-ui/react-toast";

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", cnpj: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);
  const [toastConfig, setToastConfig] = useState<{ title: string; desc: string; type: "success" | "error" }>({
    title: "", desc: "", type: "success",
  });

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
    ref.current?.querySelectorAll(".reveal, .reveal-clip, .reveal-left, .reveal-right").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validatePhone(formData.phone)) return showToast("Telefone inválido", "Digite um número com DDD.", "error");
    if (!validateEmail(formData.email)) return showToast("E-mail inválido", "Verifique o formato do e-mail.", "error");
    if (formData.cnpj && !validateCNPJ(formData.cnpj)) return showToast("CNPJ inválido", "Verifique os números digitados.", "error");

    setLoading(true);
    try {
      // Formata a mensagem para o WhatsApp
      const text = `*Nova Solicitação Pelo Site*%0A%0A*Nome/Empresa:* ${formData.name}%0A*WhatsApp:* ${formData.phone}%0A*E-mail:* ${formData.email}%0A*CNPJ:* ${formData.cnpj || 'Não informado'}%0A*Assunto:* ${formData.subject}%0A*Mensagem:* ${formData.message || 'Sem mensagem adicional'}`;
      const waUrl = `https://wa.me/5564992934378?text=${text}`;
      
      // Simula um carregamento rápido e abre o WhatsApp
      await new Promise((resolve) => setTimeout(resolve, 800));
      window.open(waUrl, '_blank');
      
      showToast("Tudo certo!", "Você está sendo redirecionado para o nosso WhatsApp.", "success");
      setFormData({ name: "", phone: "", email: "", cnpj: "", subject: "", message: "" });
    } catch {
      showToast("Erro no envio", "Tente novamente mais tarde.", "error");
    } finally {
      setLoading(false);
    }
  };

  const showToast = (title: string, desc: string, type: "success" | "error") => {
    setToastConfig({ title, desc, type });
    setToastOpen(true);
  };

  return (
    <Toast.Provider swipeDirection="right">
      <section id="contato" className="section-py" style={{ background: "var(--white)" }} ref={ref}>
        <div className="container-xl">
          <div className="section-header-center-narrow spacing-subtitle-mb">
            <span className="reveal section-label spacing-title-mb">Atendimento Corporativo</span>
            <h2 className="reveal-clip font-black heading-lg spacing-title-mb">
              Agende uma reunião estratégica
            </h2>
            <p className="reveal-clip reveal-delay-1 body-lg">
              Preencha o formulário ou visite nosso escritório em Itumbiara.
            </p>
          </div>

          <div className="reveal-left reveal-delay-3 grid grid-cols-1 lg:grid-cols-5 gap-8">
            
            {/* Left: Info & Form */}
            <div className="lg:col-span-3 space-y-6">
              
              {/* Contact Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="card-professional p-6 flex flex-col items-center text-center">
                  <div className="icon-box-sm mb-3"><Phone className="w-4 h-4" /></div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Telefone / WhatsApp</p>
                  <p className="font-bold text-gray-900">(64) 99293-4378</p>
                </div>
                <div className="card-professional p-6 flex flex-col items-center text-center">
                  <div className="icon-box-sm mb-3"><Mail className="w-4 h-4" /></div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">E-mail</p>
                  <p className="font-bold text-gray-900">tania@sanuscontabil.com.br</p>
                </div>
              </div>

              {/* Form Card */}
              <div className="card-professional p-8">
                <h3 className="heading-md mb-6 text-xl">Solicite uma proposta</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase">Nome / Razão Social</label>
                      <input type="text" name="name" required value={formData.name} onChange={handleChange} className="input-professional" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase">WhatsApp</label>
                      <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="input-professional" placeholder="(00) 00000-0000" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase">E-mail corporativo</label>
                      <input type="email" name="email" required value={formData.email} onChange={handleChange} className="input-professional" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase">CNPJ (opcional)</label>
                      <input type="text" name="cnpj" value={formData.cnpj} onChange={handleChange} className="input-professional" placeholder="00.000.000/0000-00" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase">Natureza da Solicitação</label>
                    <select name="subject" required value={formData.subject} onChange={handleChange} className="input-professional bg-white">
                      <option value="">Selecione...</option>
                      <option value="Abertura">Abertura de Empresa</option>
                      <option value="Migracao">Migração de Contador</option>
                      <option value="Consultoria">Consultoria Tributária</option>
                      <option value="Outro">Outro Assunto</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase">Mensagem</label>
                    <textarea name="message" rows={3} value={formData.message} onChange={handleChange} className="input-professional resize-none"></textarea>
                  </div>

                  <button type="submit" disabled={loading} className="btn-primary w-full">
                    {loading ? "Enviando..." : <><Send className="w-4 h-4" /> Enviar Solicitação</>}
                  </button>

                  <p className="text-center text-xs text-gray-400 mt-3 flex items-center justify-center gap-1">
                    <ShieldCheck className="w-3 h-3" /> Seus dados estão protegidos.
                  </p>
                </form>
              </div>
            </div>

            {/* Right: Map */}
            <div className="lg:col-span-2">
              <div className="card-professional overflow-hidden h-full flex flex-col">
                <div className="p-6 border-b border-gray-100 flex items-start gap-4">
                  <div className="icon-box-sm shrink-0"><MapPin className="w-4 h-4" /></div>
                  <div>
                    <p className="font-bold text-gray-900 mb-1">Nosso Escritório</p>
                    <p className="text-sm text-gray-600">Rua Elcio Gomes, 708 - Portal do Ipês<br/>Itumbiara / GO</p>
                  </div>
                </div>
                <div className="grow relative min-h-[300px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.057393439408!2d-49.2319036!3d-18.4239855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a6136d89555555%3A0x89c7c4f1e582d90e!2sR.%20Elcio%20Gomes%2C%20708%20-%20Portal%20dos%20Ip%C3%AAs%2C%20Itumbiara%20-%20GO%2C%2075524-118!5e0!3m2!1spt-BR!2sbr!4v1715000000000!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    style={{ border: 0, position: "absolute", inset: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Toast notifications */}
      <Toast.Root open={toastOpen} onOpenChange={setToastOpen} className={`bg-white rounded-md shadow-lg p-4 flex gap-3 items-start border-l-4 ${toastConfig.type === "success" ? "border-emerald-500" : "border-red-500"}`}>
        {toastConfig.type === "success" ? <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> : <AlertTriangle className="w-5 h-5 text-red-500 shrink-0" />}
        <div>
          <Toast.Title className="font-bold text-gray-900 text-sm mb-1">{toastConfig.title}</Toast.Title>
          <Toast.Description className="text-gray-600 text-sm">{toastConfig.desc}</Toast.Description>
        </div>
      </Toast.Root>
      <Toast.Viewport className="fixed bottom-0 right-0 p-6 w-96 max-w-[100vw] z-[100] outline-none" />
    </Toast.Provider>
  );
}
