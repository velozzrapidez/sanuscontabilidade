import type { Metadata } from "next";
import Script from "next/script";
import Particles from "./components/Particles";
import LivingSnakes from "./components/LivingSnakes";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Sanus Contábil Digital | Contabilidade em Itumbiara",
    template: "%s | Sanus Contábil Digital"
  },
  description: "Escritório de contabilidade em Itumbiara especializado em abertura de empresa, troca de contador, MEI, regularização fiscal e planejamento tributário. Atendimento rápido via WhatsApp.",
  keywords: "contabilidade Itumbiara, contador Itumbiara, abrir empresa Itumbiara, MEI Itumbiara, escritório contábil Itumbiara, regularização fiscal, planejamento tributário, troca de contador, contabilidade digital, gestão contábil",
  authors: [{ name: "Sanus Contábil Digital" }],
  creator: "Sanus Contábil Digital",
  publisher: "Sanus Contábil Digital",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Sanus Contábil Digital | Contabilidade em Itumbiara",
    description: "Abertura de empresa, regularização fiscal e contabilidade completa em Itumbiara. Atendimento rápido via WhatsApp.",
    type: "website",
    locale: "pt_BR",
    siteName: "Sanus Contábil Digital",
    url: "https://sanuscontabil.com.br",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanus Contábil Digital | Contabilidade em Itumbiara",
    description: "Abertura de empresa, regularização fiscal e contabilidade completa em Itumbiara.",
    creator: "@sanuscontabil",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://sanuscontabil.com.br",
  },
  icons: {
    icon: "/logosanus.jpeg",
    shortcut: "/logosanus.jpeg",
    apple: "/logosanus.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#FF6B00" />
        <Script
          id="json-ld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AccountingService",
              "name": "Sanus Contábil Digital",
              "description": "Escritório de contabilidade em Itumbiara especializado em abertura de empresa, MEI, regularização fiscal e planejamento tributário.",
              "url": "https://sanuscontabil.com.br",
              "telephone": "(64) 99293-4378",
              "email": "tania@sanuscontabil.com.br",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Rua Elcio Gomes, 708, Portal do Ipês",
                "addressLocality": "Itumbiara",
                "addressRegion": "GO",
                "addressCountry": "BR"
              },
              "openingHours": "Mo-Fr 08:00-18:00",
              "areaServed": "Itumbiara, GO",
              "serviceType": ["Contabilidade", "Abertura de Empresa", "MEI", "Planejamento Tributário", "Regularização Fiscal"]
            })
          }}
        />
      </head>
      <body className="antialiased relative">
        <Particles />
        <LivingSnakes />
        <div className="snake-orb" />
        <a
          href="#conteudo-principal"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:bg-white focus:text-gray-900 focus:font-bold focus:py-2 focus:px-4 focus:z-50 focus:shadow-lg"
          style={{ borderRadius: "6px" }}
        >
          Pular para o conteúdo principal
        </a>
        <div id="conteudo-principal">
          {children}
        </div>
      </body>
    </html>
  );
}
