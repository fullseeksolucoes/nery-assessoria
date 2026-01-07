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
      <Header />
      <main className="min-h-screen">
        <PageTransition>
          {children}
        </PageTransition>
      </main>
      <Footer />
    </>
  );
}
