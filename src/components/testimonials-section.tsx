"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ArrowRightIcon from "@heroicons/react/24/outline/esm/ArrowRightIcon";
import ArrowLeftIcon from "@heroicons/react/24/outline/esm/ArrowLeftIcon";
import TestimonialsCard from "./testimonials-card";

const testimonials = [
  {
    photo: "/testimonials/nery-barber/samuel.webp",
    entreprise: "Nery Barber",
    testimonial:
      "Desde que a Nery Assessoria entrou com a gente, tudo ficou mais claro e profissional. O marketing deixou de ser só postagem e passou a ser estratégia. Dá pra ver o cuidado, a dedicação e o quanto eles realmente se importam com o crescimento da barbearia e dos colaboradores.",
    name: "Samuel Pedro",
    job: "Barbeiro Profissional",
  },
  {
    photo: "/testimonials/nery-barber/igor.webp",
    entreprise: "Nery Barber",
    testimonial:
      "Nery Assessoria vai muito além do que só marketing, ela cuida da nossa imagem como se fosse para si próprio, deixando cada vez mais profissional e de alto padrão. Deu para ver o resultado já no primeiro mês de Nery Assessoria, o rosto da Nery Barber mudou e foi para um nível muito acima.",
    name: "Igor Augusto",
    job: "Barbeiro Profissional",
  },
];

const ITEMS_PER_PAGE = 6;

export default function TestimonialsSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalPages = Math.ceil(testimonials.length / ITEMS_PER_PAGE);

  const startIndex = currentPage * ITEMS_PER_PAGE;
  const currentTestimonials = testimonials.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  function nextPage() {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  }

  function prevPage() {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  }

  function nextSlide() {
    setCurrentSlide((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  }

  function prevSlide() {
    setCurrentSlide((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  }

  return (
    <section
      className="py-8 lg:py-16"
      aria-labelledby="testimonials-section-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="flex flex-col md:flex-row items-end justify-between mb-12 gap-4">
          <div>
            <h2
              id="testimonials-section-heading"
              className="font-manrope text-2xl md:text-3xl font-black"
            >
              O que dizem os nossos parceiros
            </h2>
            <p className="text-accent mt-1">Feedback real de clientes reais.</p>
          </div>

          {/* Desktop controls */}
          <nav
            className="hidden md:flex gap-2"
            aria-label="Navegação de depoimentos"
          >
            <button
              onClick={prevPage}
              disabled={currentPage === 0}
              aria-label="Ver depoimentos anteriores"
              className="size-10 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-gray-100 disabled:opacity-40 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 transition-colors"
            >
              <ArrowLeftIcon className="size-3" aria-hidden="true" />
            </button>

            <button
              onClick={nextPage}
              disabled={currentPage === totalPages - 1}
              aria-label="Ver próximos depoimentos"
              className="size-10 rounded-full bg-accent text-white flex items-center justify-center hover:bg-accent/80 shadow-lg shadow-accent/20 disabled:opacity-40 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 transition-colors"
            >
              <ArrowRightIcon className="size-3" aria-hidden="true" />
            </button>
          </nav>
        </header>

        {/* Desktop grid with animation */}
        <div className="hidden md:block" role="region" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="grid grid-cols-2 lg:grid-cols-3 gap-6"
              role="list"
              aria-label="Lista de depoimentos"
            >
              {currentTestimonials.map((testimonial) => (
                <TestimonialsCard key={testimonial.name} {...testimonial} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile carousel */}
        <div
          className="md:hidden"
          role="region"
          aria-roledescription="carrossel"
          aria-label={`Depoimento ${currentSlide + 1} de ${testimonials.length}`}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35 }}
              aria-live="polite"
            >
              <TestimonialsCard {...testimonials[currentSlide]} />
            </motion.div>
          </AnimatePresence>

          <nav
            className="flex justify-center gap-4 mt-6"
            aria-label="Navegação do carrossel"
          >
            <button
              onClick={prevSlide}
              aria-label="Ver depoimento anterior"
              className="size-9 rounded-full border border-gray-200 bg-white flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 transition-colors hover:bg-gray-100"
            >
              <ArrowLeftIcon className="size-3" aria-hidden="true" />
            </button>

            <button
              onClick={nextSlide}
              aria-label="Ver próximo depoimento"
              className="size-9 rounded-full bg-accent text-white flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 transition-colors hover:bg-accent/80"
            >
              <ArrowRightIcon className="size-3" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>
    </section>
  );
}
