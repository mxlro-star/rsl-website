import SectionContainer from "../components/SectionContainer";
import IntroductionForm from "../components/IntroductionForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request Introduction - Future Housing Framework",
  description:
    "Access is granted selectively. Submit a request for introduction to the framework.",
};

export default function RequestIntroduction() {
  return (
    <div className="bg-zinc-950 min-h-screen">
      <SectionContainer className="pt-32">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-medium tracking-tight text-zinc-50 mb-6">
            Access is granted selectively
          </h1>
          <p className="text-xl leading-relaxed text-zinc-400 mb-12">
            We do not operate an open application process. Introductions
            typically follow direct conversations or referrals.
          </p>

          <div className="border-t border-zinc-800 pt-12">
            <p className="text-lg leading-relaxed text-zinc-400 mb-8">
              If you believe your profile aligns with the framework&apos;s
              operational requirements, you may submit a request below. There is
              no guarantee of response.
            </p>

            <IntroductionForm />
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
