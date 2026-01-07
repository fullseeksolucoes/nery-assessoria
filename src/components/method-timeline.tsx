import MethodStep from "./method-step";

interface Step {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface MethodTimelineProps {
  steps: Step[];
}

export default function MethodTimeline({ steps }: MethodTimelineProps) {
  return (
    <div className="relative">
      {/* Vertical Line */}
      <div className="absolute left-[28px] top-4 bottom-4 w-0.5 bg-slate-200"></div>
      <div className="flex flex-col gap-10">
        {steps.map((step, index) => (
          <MethodStep
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
