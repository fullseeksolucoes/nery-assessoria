import ContactForm from "@/components/contact-form";

export default function ContactPage() {
  return (
    <section className="py-20 bg-accent relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="font-manrope font-bold text-3xl md:text-5xl text-white mb-6">
          Contato
        </h1>
        <ContactForm />
      </div>
    </section>
  );
}
