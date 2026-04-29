"use client";

import Image from "next/image";


export default function Footer() {
  return (
    <footer style={{ background: "var(--bg-dark)", padding: "4rem 0 2rem" }}>
      <div className="container-xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
          
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <Image
              src="/logosanus.jpeg"
              alt="Sanus Contábil Digital"
              width={140}
              height={56}
              className="object-contain filter grayscale brightness-200 opacity-90 mx-auto md:mx-0 mb-3"
              style={{ height: "50px", width: "auto" }}
            />
            <p className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.5)" }}>
              Gestão contábil estruturada para empresas.
            </p>
          </div>

          {/* Minimal Navigation */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {[
              { label: "Início", href: "/" },
              { label: "Serviços", href: "/#servicos" },
              { label: "Diferenciais", href: "/#diferenciais" },
              { label: "Consulta CNAE", href: "/consulta-cnae" },
              { label: "Abrir Empresa", href: "/abertura-de-empresa" },
              { label: "Contato", href: "/#contato" },
            ].map((link) => (
              <a key={link.label} href={link.href}
                className="text-sm font-semibold transition-colors"
                style={{ color: "rgba(255,255,255,0.7)" }}
                onMouseEnter={e => e.currentTarget.style.color = "var(--white)"}
                onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.7)"}>
                {link.label}
              </a>
            ))}
          </nav>
          {/* Social Links */}
          <div className="flex gap-4">
            <a href="https://www.instagram.com/sanuscontabil/" target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all border border-white/10 hover:bg-white/10 text-white/70 hover:text-white"
              aria-label="Instagram">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4.162 4.162 0 110-8.324 4.162 4.162 0 010 8.324zM18.406 4.155a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/>
              </svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-all border border-white/10 hover:bg-white/10 text-white/70 hover:text-white"
              aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "2rem" }} className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col items-center md:items-start">
            <p className="text-xs font-medium mb-1" style={{ color: "rgba(255,255,255,0.4)" }}>
              &copy; {new Date().getFullYear()} Sanus Contábil Digital. Todos os direitos reservados.
            </p>
            <p className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.3)" }}>
              CNPJ: 46.439.978/0001-55
            </p>
          </div>
          <div className="flex gap-4">
            <a href="#" className="text-xs font-medium transition-colors" style={{ color: "rgba(255,255,255,0.4)" }} onMouseEnter={e => e.currentTarget.style.color = "var(--white)"} onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.4)"}>Política de Privacidade</a>
            <a href="#" className="text-xs font-medium transition-colors" style={{ color: "rgba(255,255,255,0.4)" }} onMouseEnter={e => e.currentTarget.style.color = "var(--white)"} onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.4)"}>Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
