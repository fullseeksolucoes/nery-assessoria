import Footer from "@/components/footer";
import Header from "@/components/header";
import PageTransition from "@/components/page-transaction";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Skip to content link para acessibilidade */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-100 focus:bg-accent focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
      >
        Pular para o conteúdo principal
      </a>
      <Header />
      <main id="main-content" className="min-h-screen" tabIndex={-1}>
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
    </>
  );
}
