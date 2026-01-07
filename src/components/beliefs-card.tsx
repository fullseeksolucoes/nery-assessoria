type BeliefsCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export default function BeliefsCard({
  icon,
  title,
  description,
}: BeliefsCardProps) {
  return (
    <div className="bg-surface-light p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
      <p className="text-slate-600  leading-relaxed">{description}</p>
    </div>
  );
}
