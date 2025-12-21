import { CriteriaSectionProps } from "@/lib/types";

export default function CriteriaSection({
  forItems,
  notForItems,
}: CriteriaSectionProps) {
  return (
    <div className="grid md:grid-cols-2 gap-16">
      {/* This is for */}
      <div>
        <h2 className="text-3xl font-medium tracking-tight text-zinc-50 mb-8">
          This is for
        </h2>
        <ul className="space-y-4">
          {forItems.map((item, index) => (
            <li
              key={index}
              className="text-lg leading-relaxed text-zinc-400 flex gap-3"
            >
              <span className="text-blue-500 flex-shrink-0">—</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* This is not for */}
      <div>
        <h2 className="text-3xl font-medium tracking-tight text-zinc-50 mb-8">
          This is not for
        </h2>
        <ul className="space-y-4">
          {notForItems.map((item, index) => (
            <li
              key={index}
              className="text-lg leading-relaxed text-zinc-400 flex gap-3"
            >
              <span className="text-zinc-600 flex-shrink-0">—</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
