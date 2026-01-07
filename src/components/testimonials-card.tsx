import Image from "next/image";

interface TestimonialsCardProps {
  photo: string;
  entreprise: string;
  testimonial: string;
  name: string;
  job: string;
}

export default function TestimonialsCard({
  photo,
  entreprise,
  testimonial,
  name,
  job,
}: TestimonialsCardProps) {
  return (
    <article
      role="listitem"
      className="group flex flex-col p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:translate-y-1 transition-all duration-300"
    >
      <div
        className="mb-6 text-accent/40 group-hover:text-accent transition-colors"
        aria-hidden="true"
      >
        <span
          className="material-symbols-outlined"
          style={{ fontSize: "48px" }}
        >
          format_quote
        </span>
      </div>
      <blockquote className="text-lg leading-relaxed flex-1 mb-6">
        <p>&quot;{testimonial}&quot;</p>
      </blockquote>
      <footer className="flex items-center gap-4 pt-6 border-t border-gray-50">
        <Image
          src={photo}
          alt=""
          width={40}
          height={40}
          className="h-10 w-10 rounded-full bg-accent/10 object-cover"
          loading="lazy"
        />
        <div>
          <cite className="font-black text-slate-900 not-italic">{name}</cite>
          <p className="text-xs font-medium text-accent uppercase tracking-wide">
            {job} - {entreprise}
          </p>
        </div>
      </footer>
    </article>
  );
}