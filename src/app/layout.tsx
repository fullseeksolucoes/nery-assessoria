import type { Metadata, Viewport } from "next";
import { Manrope, Inter } from "next/font/google";
import "material-symbols/outlined.css";
import "./globals.css";
import { ToastContainer } from "react-toastify";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const baseUrl = "https://www.neryassessoria.com.br";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1a1a2e",
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Nery Assessoria Marketing | Gestão de Instagram para Empresas",
    template: "%s | Nery Assessoria Marketing",
  },
  description:
    "Assessoria de marketing focada em gestão completa do Instagram. Conteúdo estratégico, gravações profissionais e tráfego pago para empresas que buscam crescimento real.",
  keywords: [
    "assessoria de marketing",
    "gestão de instagram",
    "marketing digital",
    "tráfego pago",
    "criação de conteúdo",
    "redes sociais",
    "instagram para empresas",
    "marketing para negócios",
    "Sabará",
    "Belo Horizonte",
    "Minas Gerais",
  ],
  authors: [{ name: "Nery Assessoria Marketing" }],
  creator: "Nery Assessoria Marketing",
  publisher: "Nery Assessoria Marketing",
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
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: baseUrl,
    siteName: "Nery Assessoria Marketing",
    title: "Nery Assessoria Marketing | Gestão de Instagram para Empresas",
    description:
      "Assessoria de marketing focada em gestão completa do Instagram. Conteúdo estratégico, gravações profissionais e tráfego pago para empresas.",
    images: [
      {
        url: "/logo/logo-horizontal.png",
        width: 1200,
        height: 630,
        alt: "Nery Assessoria Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nery Assessoria Marketing | Gestão de Instagram para Empresas",
    description:
      "Assessoria de marketing focada em gestão completa do Instagram. Conteúdo estratégico, gravações profissionais e tráfego pago.",
    images: ["/logo/logo-horizontal.png"],
  },
  alternates: {
    canonical: baseUrl,
  },
  category: "Marketing",
};

// Schema.org JSON-LD para SEO estruturado
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      name: "Nery Assessoria Marketing",
      url: baseUrl,
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/logo/logo-horizontal.png`,
        width: 200,
        height: 50,
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+55-31-99656-9568",
        contactType: "customer service",
        availableLanguage: "Portuguese",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sabará",
        addressRegion: "MG",
        addressCountry: "BR",
      },
      sameAs: [
        "https://www.instagram.com/nery.assessoria/",
        "https://www.facebook.com/share/16cuNUoQcV/",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`,
      url: baseUrl,
      name: "Nery Assessoria Marketing",
      publisher: {
        "@id": `${baseUrl}/#organization`,
      },
      inLanguage: "pt-BR",
    },
    {
      "@type": "LocalBusiness",
      "@id": `${baseUrl}/#localbusiness`,
      name: "Nery Assessoria Marketing",
      image: `${baseUrl}/logo/logo-horizontal.png`,
      url: baseUrl,
      telephone: "+55-31-99656-9568",
      email: "contato@neryassessoria.com.br",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sabará",
        addressRegion: "MG",
        addressCountry: "BR",
      },
      priceRange: "$$",
      openingHours: "Mo-Fr 09:00-18:00",
      areaServed: {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: -19.8856,
          longitude: -43.8074,
        },
        geoRadius: "100000",
      },
      serviceType: [
        "Gestão de Instagram",
        "Marketing Digital",
        "Criação de Conteúdo",
        "Tráfego Pago",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${manrope.variable} ${inter.variable} antialiased`}>
        {children}
        <ToastContainer
          position="top-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnHover
          draggable
          theme="colored"
        />
      </body>
    </html>
  );
}
