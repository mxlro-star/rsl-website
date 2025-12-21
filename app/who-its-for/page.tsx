import SectionContainer from "../components/SectionContainer";
import CriteriaSection from "../components/CriteriaSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Who It's For - Future Housing Framework",
  description:
    "Understanding who should participate in the framework and who should not.",
};

export default function WhoItsFor() {
  const forItems = [
    "Property owners prepared to operate",
    "People comfortable with regulation",
    "Operators thinking long-term",
    "Those willing to work within limits",
  ];

  const notForItems = [
    "Passive investors",
    "Guaranteed rent seekers",
    "Short-term arbitrage",
    "Anyone unwilling to operate within a framework",
  ];

  return (
    <div className="bg-zinc-950 min-h-screen">
      <SectionContainer className="pt-32">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-medium tracking-tight text-zinc-50 mb-6">
            Who it&apos;s for
          </h1>
          <p className="text-xl leading-relaxed text-zinc-400 mb-20">
            The framework is designed for specific types of operators. It is not
            suitable for everyone.
          </p>

          <CriteriaSection forItems={forItems} notForItems={notForItems} />
        </div>
      </SectionContainer>
    </div>
  );
}
