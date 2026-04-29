"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Menu, X, ChevronDown, ChevronRight,
  Home, Briefcase, Building2, PhoneCall,
  Search, Layers, Award,
} from "lucide-react";

const WA_LINK =
  "https://wa.me/5564992934378?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20gratuito.";

const navLinks = [
  { label: "Início", href: "/", icon: Home },
  {
    label: "Soluções",
    icon: Layers,
    children: [
      { label: "Nossos Serviços", href: "/#servicos", icon: Briefcase },
      { label: "Diferenciais",    href: "/#diferenciais", icon: Award },
      { label: "Consulta CNAE",   href: "/consulta-cnae", icon: Search },
    ],
  },
  { label: "Abrir Empresa", href: "/abertura-de-empresa", icon: Building2 },
  { label: "Contato",       href: "/#contato",            icon: PhoneCall },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const [solucoesOpen, setSolucoesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const go = (href: string) => {
    setOpen(false);
    setSolucoesOpen(false);
    if (href.startsWith("/#")) {
      const id = href.replace("/", "");
      if (window.location.pathname !== "/") {
        window.location.href = href;
      } else {
        document.querySelector(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else if (href.startsWith("#")) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.location.href = href;
    }
  };

  return (
    <>
      <header
        className="sticky top-0 z-50 w-full transition-all duration-300"
        style={{
          background: "#fff",
          borderBottom: "1px solid #F0F0F0",
          boxShadow: scrolled ? "0 2px 12px rgba(0,0,0,0.06)" : "none",
        }}
      >
        <div className="container-xl">
          <div className="flex items-center justify-between h-16 md:h-[80px]">

            {/* Logo */}
            <a href="/" onClick={(e) => { e.preventDefault(); go("/"); }} className="flex items-center shrink-0 py-2">
              <Image
                src="/logosanus.jpeg"
                alt="Sanus Contábil Digital"
                width={180}
                height={60}
                className="object-contain h-10 md:h-[52px] w-auto"
                priority
              />
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-4">
              {navLinks.map((link, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  {idx > 0 && <div className="w-[1px] h-4 bg-gray-200" />}
                  {link.children ? (
                    <div className="relative group">
                      <button className="flex items-center gap-1 text-sm font-semibold text-gray-600 hover:text-red-600 transition-colors py-2">
                        {link.label}
                        <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
                      </button>
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all">
                        <div className="bg-white border border-gray-100 shadow-xl rounded-xl p-2 min-w-[200px]">
                          {link.children.map((child) => (
                            <button
                              key={child.href}
                              onClick={() => go(child.href)}
                              className="w-full text-left px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                            >
                              {child.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={() => go(link.href!)}
                      className="text-sm font-semibold text-gray-600 hover:text-red-600 transition-colors py-2"
                    >
                      {link.label}
                    </button>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop CTA */}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex btn-primary text-sm"
              style={{ padding: "0.6rem 1.25rem" }}
            >
              Falar com um contador
            </a>
            <a
              href="https://www.instagram.com/sanuscontabil/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center justify-center w-9 h-9 rounded-full border border-gray-200 text-gray-500 hover:text-red-600 hover:border-red-600 transition-all"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4.162 4.162 0 110-8.324 4.162 4.162 0 010 8.324zM18.406 4.155a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/>
              </svg>
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl transition-colors"
              style={{
                background: open ? "rgba(220,38,38,0.08)" : "rgba(0,0,0,0.04)",
                color: open ? "#dc2626" : "var(--text-primary)",
                border: "none",
                cursor: "pointer",
              }}
              aria-label="Menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Drawer Overlay ── */}
      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        className="md:hidden fixed inset-0 z-40 transition-all duration-300"
        style={{
          background: "rgba(15,23,42,0.5)",
          backdropFilter: "blur(4px)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
        }}
      />

      {/* Drawer panel */}
      <div
        className="md:hidden fixed top-0 right-0 h-full z-50 flex flex-col transition-transform duration-300 ease-out"
        style={{
          width: "min(340px, 88vw)",
          background: "#fff",
          boxShadow: "-8px 0 40px rgba(0,0,0,0.15)",
          transform: open ? "translateX(0)" : "translateX(100%)",
          overflowY: "auto",
        }}
      >
        {/* Drawer header */}
        <div
          className="flex items-center justify-between px-5 py-4 shrink-0"
          style={{ borderBottom: "1px solid #f1f5f9" }}
        >
          <Image
            src="/logosanus.jpeg"
            alt="Sanus Contábil"
            width={130}
            height={44}
            className="object-contain h-9 w-auto"
          />
          <button
            onClick={() => setOpen(false)}
            className="flex items-center justify-center w-9 h-9 rounded-xl"
            style={{ background: "rgba(220,38,38,0.08)", color: "#dc2626", border: "none", cursor: "pointer" }}
            aria-label="Fechar menu"
          >
            <X size={18} />
          </button>
        </div>

        {/* Nav items */}
        <nav className="flex flex-col flex-1 px-3 py-4 gap-1">

          {navLinks.map((link, idx) => {
            const Icon = link.icon;

            if (link.children) {
              return (
                <div key={idx}>
                  {/* Accordion trigger */}
                  <button
                    onClick={() => setSolucoesOpen(!solucoesOpen)}
                    className="w-full flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all text-left"
                    style={{
                      background: solucoesOpen ? "rgba(220,38,38,0.06)" : "transparent",
                      color: solucoesOpen ? "#dc2626" : "#374151",
                    }}
                  >
                    <span
                      className="flex items-center justify-center w-9 h-9 rounded-lg shrink-0"
                      style={{ background: solucoesOpen ? "rgba(220,38,38,0.1)" : "rgba(0,0,0,0.05)" }}
                    >
                      <Icon size={17} />
                    </span>
                    <span className="flex-1 text-sm font-semibold">{link.label}</span>
                    <ChevronDown
                      size={16}
                      style={{
                        transition: "transform 0.2s",
                        transform: solucoesOpen ? "rotate(180deg)" : "rotate(0deg)",
                        color: "#9ca3af",
                      }}
                    />
                  </button>

                  {/* Sub-items */}
                  <div
                    style={{
                      maxHeight: solucoesOpen ? "300px" : "0",
                      overflow: "hidden",
                      transition: "max-height 0.25s ease",
                    }}
                  >
                    <div className="ml-4 mt-1 flex flex-col gap-0.5 pl-4" style={{ borderLeft: "2px solid #fee2e2" }}>
                      {link.children.map((child) => {
                        const ChildIcon = child.icon;
                        return (
                          <button
                            key={child.href}
                            onClick={() => go(child.href)}
                            className="flex items-center gap-3 px-3 py-3 rounded-lg transition-all text-left w-full"
                            style={{ color: "#4b5563" }}
                            onMouseEnter={(e) => {
                              (e.currentTarget as HTMLButtonElement).style.background = "rgba(220,38,38,0.05)";
                              (e.currentTarget as HTMLButtonElement).style.color = "#dc2626";
                            }}
                            onMouseLeave={(e) => {
                              (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                              (e.currentTarget as HTMLButtonElement).style.color = "#4b5563";
                            }}
                          >
                            <ChildIcon size={15} style={{ color: "#dc2626", opacity: 0.7 }} />
                            <span className="text-sm font-medium">{child.label}</span>
                            <ChevronRight size={13} style={{ marginLeft: "auto", color: "#d1d5db" }} />
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <button
                key={idx}
                onClick={() => go(link.href!)}
                className="flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all text-left w-full"
                style={{ color: "#374151" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "rgba(220,38,38,0.06)";
                  (e.currentTarget as HTMLButtonElement).style.color = "#dc2626";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                  (e.currentTarget as HTMLButtonElement).style.color = "#374151";
                }}
              >
                <span
                  className="flex items-center justify-center w-9 h-9 rounded-lg shrink-0"
                  style={{ background: "rgba(0,0,0,0.05)" }}
                >
                  <Icon size={17} />
                </span>
                <span className="flex-1 text-sm font-semibold">{link.label}</span>
                <ChevronRight size={15} style={{ color: "#d1d5db" }} />
              </button>
            );
          })}

          {/* Divider */}
          <div className="my-3 mx-2" style={{ height: "1px", background: "#f1f5f9" }} />

          {/* WhatsApp CTA */}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2.5 px-5 py-4 rounded-xl text-sm font-bold text-white transition-all active:scale-95"
            style={{ background: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)", boxShadow: "0 4px 15px rgba(34,197,94,0.35)" }}
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Falar no WhatsApp
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/sanuscontabil/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl text-sm font-semibold transition-all active:scale-95"
            style={{
              background: "linear-gradient(135deg, #f97316 0%, #ec4899 50%, #8b5cf6 100%)",
              color: "#fff",
              boxShadow: "0 4px 15px rgba(236,72,153,0.25)",
            }}
          >
            <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 fill-current" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4.162 4.162 0 110-8.324 4.162 4.162 0 010 8.324zM18.406 4.155a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/>
            </svg>
            Seguir no Instagram
          </a>
        </nav>

        {/* Footer note */}
        <div className="px-5 py-4 shrink-0 text-center" style={{ borderTop: "1px solid #f1f5f9" }}>
          <p className="text-xs text-gray-400">Sanus Contábil Digital · Itumbiara – GO</p>
        </div>
      </div>
    </>
  );
}
