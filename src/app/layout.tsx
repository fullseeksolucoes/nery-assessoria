import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Nery Assessoria Marketing",
    template: "%s | Nery Assessoria Marketing",
  },
  description:
    "Assessoria de marketing focada em estratégia, performance e crescimento real para negócios que querem escalar com autoridade.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.neryassessoria.com.br",
    siteName: "Nery Assessoria Marketing",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
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
