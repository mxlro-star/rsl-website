import SectionContainer from "../components/SectionContainer";
import DiagramSVG from "../components/DiagramSVG";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Framework - Future Housing Framework",
  description:
    "Understanding the controlled access model and operational structure designed for long-term stability.",
};

export default function TheFramework() {
  return (
    <div className="bg-zinc-950 min-h-screen">
      <SectionContainer className="pt-32">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-medium tracking-tight text-zinc-50 mb-6">
            The Framework
          </h1>
          <p className="text-xl leading-relaxed text-zinc-400 mb-20">
            A controlled access model designed for operational stability and
            long-term viability.
          </p>

          {/* Diagram */}
          <DiagramSVG />

          {/* Content Sections */}
          <div className="space-y-16 mt-12">
            <div>
              <h2 className="text-3xl font-medium tracking-tight text-zinc-50 mb-4">
                Controlled access
              </h2>
              <p className="text-lg leading-relaxed text-zinc-400">
                Participation is not open. Access requires direct introduction,
                verification, and framework approval. This ensures that only
                operators prepared to work within defined parameters are
                onboarded.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-medium tracking-tight text-zinc-50 mb-4">
                Capacity allocation
              </h2>
              <p className="text-lg leading-relaxed text-zinc-400">
                Growth is governed by framework capacity, not market demand.
                Property onboarding occurs sequentially and is subject to
                allocation limits determined by the registered provider
                ecosystem.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-medium tracking-tight text-zinc-50 mb-4">
                Geographic moderation
              </h2>
              <p className="text-lg leading-relaxed text-zinc-400">
                Access is managed on a city-by-city basis. Expansion to new
                regions requires framework approval and is contingent on local
                capacity and regulatory alignment.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-medium tracking-tight text-zinc-50 mb-4">
                Intervention capability
              </h2>
              <p className="text-lg leading-relaxed text-zinc-400">
                Non-compliance triggers immediate review. The framework
                maintains the authority to suspend operator access, reject
                property onboarding, or terminate participation. Decisions are
                final.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-medium tracking-tight text-zinc-50 mb-4">
                Long-term stability
              </h2>
              <p className="text-lg leading-relaxed text-zinc-400">
                The framework is designed for multi-year operation. Short-term
                thinking is not compatible. Operators must be prepared for
                sustained engagement within regulatory constraints.
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
