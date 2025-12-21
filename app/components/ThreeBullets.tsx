import SectionContainer from "./SectionContainer";

export default function ThreeBullets() {
  const bullets = [
    {
      title: "Controlled operator access",
      description:
        "Entry to the framework is moderated. Access is not automatic.",
    },
    {
      title: "Property-by-property onboarding",
      description:
        "Each property is reviewed individually before framework integration.",
    },
    {
      title: "Capacity-managed growth",
      description:
        "Expansion is controlled by framework capacity, not market demand.",
    },
  ];

  const icons = [
    // Icon 1: Grid framework
    <svg key="grid" width="48" height="48" viewBox="0 0 48 48" className="border border-zinc-700 bg-zinc-900/50">
      <g stroke="#3b82f6" strokeWidth="1.5" fill="none">
        <rect x="10" y="10" width="12" height="12" />
        <rect x="26" y="10" width="12" height="12" />
        <rect x="10" y="26" width="12" height="12" />
        <rect x="26" y="26" width="12" height="12" />
      </g>
      <rect x="19" y="19" width="10" height="10" fill="none" stroke="#3b82f6" strokeWidth="1.5" opacity="0.5" />
    </svg>,

    // Icon 2: Network nodes
    <svg key="nodes" width="48" height="48" viewBox="0 0 48 48" className="border border-zinc-700 bg-zinc-900/50">
      <g>
        <line x1="14" y1="24" x2="34" y2="24" stroke="#3b82f6" strokeWidth="1.5" opacity="0.4" />
        <line x1="24" y1="14" x2="24" y2="34" stroke="#3b82f6" strokeWidth="1.5" opacity="0.4" />
        <circle cx="14" cy="24" r="3.5" fill="none" stroke="#3b82f6" strokeWidth="1.5" />
        <circle cx="34" cy="24" r="3.5" fill="none" stroke="#3b82f6" strokeWidth="1.5" />
        <circle cx="24" cy="14" r="3.5" fill="none" stroke="#3b82f6" strokeWidth="1.5" />
        <circle cx="24" cy="34" r="3.5" fill="none" stroke="#3b82f6" strokeWidth="1.5" />
        <circle cx="24" cy="24" r="2" fill="#3b82f6" opacity="0.6" />
      </g>
    </svg>,

    // Icon 3: Capacity tiers
    <svg key="tiers" width="48" height="48" viewBox="0 0 48 48" className="border border-zinc-700 bg-zinc-900/50">
      <g stroke="#3b82f6" strokeWidth="1.5" fill="none">
        <rect x="12" y="30" width="24" height="6" />
        <rect x="16" y="22" width="16" height="6" />
        <rect x="20" y="14" width="8" height="6" />
      </g>
      <line x1="24" y1="10" x2="24" y2="14" stroke="#3b82f6" strokeWidth="1.5" opacity="0.5" />
    </svg>,
  ];

  return (
    <SectionContainer className="border-t border-zinc-800">
      <div className="grid md:grid-cols-3 gap-12">
        {bullets.map((bullet, index) => (
          <div key={index} className="space-y-4">
            {/* Architectural icon */}
            {icons[index]}

            <h3 className="text-xl font-medium text-zinc-50">
              {bullet.title}
            </h3>
            <p className="text-base leading-relaxed text-zinc-400">
              {bullet.description}
            </p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
