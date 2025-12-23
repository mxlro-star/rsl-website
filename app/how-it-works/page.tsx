import SectionContainer from "../components/SectionContainer";
import ProcessSection from "../components/ProcessSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works - Future Social Housing",
  description:
    "Understanding the operational structure of controlled access and framework integration.",
};

export default function HowItWorks() {
  const processes = [
    {
      number: "01",
      title: "Operator access",
      description:
        "Entry to the framework requires direct introduction and verification. Operators undergo a structured assessment process before access is granted. This is not an application process.",
    },
    {
      number: "02",
      title: "Property onboarding",
      description:
        "Each property is reviewed individually against framework requirements. Properties are onboarded sequentially, not in bulk. Capacity allocation is determined by framework parameters, not operator preference.",
    },
    {
      number: "03",
      title: "Operation within framework",
      description:
        "Operators work within defined parameters established by the registered provider ecosystem. Framework compliance is monitored continuously. Non-conformance triggers intervention protocols.",
    },
  ];

  return (
    <div className="bg-zinc-950 min-h-screen">
      <SectionContainer className="pt-32">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-medium tracking-tight text-zinc-50 mb-6">
            How it works
          </h1>
          <p className="text-xl leading-relaxed text-zinc-400 mb-20">
            The framework operates through controlled access and structured
            integration.
          </p>

          <div className="space-y-16">
            {processes.map((process) => (
              <ProcessSection
                key={process.number}
                number={process.number}
                title={process.title}
                description={process.description}
              />
            ))}
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
