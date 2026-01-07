interface HowWeWorkStepProps {
    icon: React.ReactNode;
    stepNumber: number;
    title: string;
    description: string;
  }
  
  export default function HowWeWorkStep({
    icon,
    stepNumber,
    title,
    description,
  }: HowWeWorkStepProps) {
    return (
      <div className="relative flex flex-col items-center text-center">
        <div className="z-10 flex items-center justify-center w-14 h-14 rounded-full bg-white border-2 border-accent text-accent shadow-sm">
          {icon}
        </div>
  
        <h3 className="mt-6 text-lg font-bold text-primary">
          {stepNumber}. {title}
        </h3>
  
        <p className="mt-2 text-slate-600 max-w-xs text-sm md:text-base">
          {description}
        </p>
      </div>
    );
  }
  