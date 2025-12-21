import { ProcessSectionProps } from "@/lib/types";

export default function ProcessSection({
  number,
  title,
  description,
}: ProcessSectionProps) {
  return (
    <div className="flex gap-8 items-start">
      <div className="flex-shrink-0">
        <div className="w-16 h-16 border border-zinc-700 bg-zinc-900/50 flex items-center justify-center">
          <span className="font-mono text-lg text-zinc-400">{number}</span>
        </div>
      </div>
      <div className="flex-1">
        <h3 className="text-2xl font-medium tracking-tight text-zinc-50 mb-4">
          {title}
        </h3>
        <p className="text-lg leading-relaxed text-zinc-400">{description}</p>
      </div>
    </div>
  );
}
