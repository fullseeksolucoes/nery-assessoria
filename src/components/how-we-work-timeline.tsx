import HowWeWorkStep from "./how-we-work-step";

interface Step {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface HowWeWorkTimelineProps {
  steps: Step[];
}

export default function HowWeWorkTimeline({
  steps,
}: HowWeWorkTimelineProps) {
  return (
    <div className="relative">
      {/* Linha horizontal */}
      <div className="hidden md:block absolute top-7 left-0 right-0 h-0.5 bg-slate-200" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {steps.map((step, index) => (
          <HowWeWorkStep
            key={index}
            icon={step.icon}
            stepNumber={index + 1}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
    </div>
  );
}
