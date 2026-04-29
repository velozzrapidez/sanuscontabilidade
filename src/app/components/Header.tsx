"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

const WA_LINK = "https://wa.me/5564992934378?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20gratuito.";

const navLinks = [
  { label: "Início", href: "/" },
  { 
    label: "Soluções", 
    children: [
      { label: "Nossos Serviços", href: "/#servicos" },
      { label: "Diferenciais", href: "/#diferenciais" },
      { label: "Consulta CNAE", href: "/consulta-cnae" },
    ]
  },
  { label: "Abrir Empresa", href: "/abertura-de-empresa" },
  { label: "Contato", href: "/#contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href: string) => {
    setOpen(false);
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
    <header className="sticky top-0 z-50 w-full transition-all duration-300"
      style={{
        background: "#fff",
        borderBottom: "1px solid #F0F0F0",
        boxShadow: scrolled ? "0 2px 12px rgba(0,0,0,0.06)" : "none",
      }}>
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
                {idx > 0 && <div className="w-[1px] h-4 bg-gray-200"></div>}
                
                {link.children ? (
                  <div className="relative group">
                    <button className="flex items-center gap-1 text-sm font-semibold text-gray-600 hover:text-red-600 transition-colors py-2">
                      {link.label}
                      <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
                    </button>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all">
                      <div className="bg-white border border-gray-100 shadow-xl rounded-xl p-2 min-w-[200px]">
                        {link.children.map((child) => (
                          <button key={child.href} onClick={() => go(child.href)}
                            className="w-full text-left px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all">
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
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
            className="hidden md:inline-flex btn-primary text-sm"
            style={{ padding: "0.6rem 1.25rem" }}>
            Falar com um contador
          </a>
          <a href="https://www.instagram.com/sanuscontabil/" target="_blank" rel="noopener noreferrer"
            className="hidden lg:flex items-center justify-center w-9 h-9 rounded-full border border-gray-200 text-gray-500 hover:text-red-600 hover:border-red-600 transition-all"
            aria-label="Instagram">
            <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 fill-current" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4.162 4.162 0 110-8.324 4.162 4.162 0 010 8.324zM18.406 4.155a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/>
            </svg>
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2"
            style={{ color: "var(--text-primary)", background: "none", border: "none", borderRadius: "var(--radius-sm)", cursor: "pointer" }}
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? "320px" : "0", borderTop: open ? "1px solid var(--border-light)" : "none" }}>
        <div className="container-xl py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <React.Fragment key={link.label}>
              {link.children ? (
                <div className="flex flex-col">
                  <div className="px-4 py-2 text-xs font-black uppercase text-gray-400 tracking-widest">{link.label}</div>
                  {link.children.map((child) => (
                    <button key={child.href} onClick={() => go(child.href)}
                      className="text-left px-6 py-2.5 text-sm font-semibold text-gray-600 hover:text-red-600"
                    >
                      {child.label}
                    </button>
                  ))}
                </div>
              ) : (
                <button onClick={() => go(link.href!)}
                  className="text-left px-4 py-3 text-sm font-semibold text-gray-600 hover:text-red-600"
                >
                  {link.label}
                </button>
              )}
            </React.Fragment>
          ))}
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
            className="btn-primary mt-2 text-sm" style={{ justifyContent: "center" }}>
            Falar com um contador
          </a>
        </div>
      </div>
    </header>
  );
}
