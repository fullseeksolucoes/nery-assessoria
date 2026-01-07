interface MethodStepProps {
  icon: React.ReactNode;
  stepNumber: number;
  title: string;
  description: string;
}

export default function MethodStep({
  icon,
  stepNumber,
  title,
  description,
}: MethodStepProps) {
  return (
    <div className="relative flex items-start gap-8 group">
      <div className="z-10 flex items-center justify-center w-14 h-14 rounded-full bg-white border-2 border-slate-100 text-accent shadow-sm group-hover:border-accent transition-colors">
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <div className="flex-1 pt-2">
        <h3 className="text-xl font-bold text-primary">
          {stepNumber}. {title}
        </h3>
        <p className="mt-2 text-slate-600">{description}</p>
      </div>
    </div>
  );
}
