import AnimatedHero from "./components/AnimatedHero";
import TrustAnchor from "./components/TrustAnchor";
import ThreeBullets from "./components/ThreeBullets";
import SectionContainer from "./components/SectionContainer";
import Button from "./components/Button";

export default function Home() {
  return (
    <div className="bg-zinc-950">
      {/* Hero Section */}
      <AnimatedHero
        headline="Operating access to regulated accommodation frameworks."
        subheadline="We provide controlled onboarding and operational access for property operators working within established registered provider ecosystems."
      />

      {/* Trust Anchor Section */}
      <TrustAnchor />

      {/* What We Do */}
      <ThreeBullets />

      {/* What We Do Not Do */}
      <SectionContainer className="border-t border-zinc-800">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-medium tracking-tight text-zinc-50 mb-8">
            What we do not do
          </h2>
          <div className="space-y-4 text-lg leading-relaxed text-zinc-400">
            <p>We do not provide housing.</p>
            <p>We do not set rents.</p>
            <p>We do not guarantee outcomes.</p>
            <p>We do not operate an open market.</p>
          </div>
        </div>
      </SectionContainer>

      {/* CTA Section */}
      <SectionContainer className="border-t border-zinc-800">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-medium tracking-tight text-zinc-50 mb-6">
            Request an introduction
          </h2>
          <p className="text-lg leading-relaxed text-zinc-400 mb-8">
            Access to the framework is selective. Introductions typically follow
            direct conversations or referrals.
          </p>
          <Button href="/request-introduction">Request an introduction</Button>
        </div>
      </SectionContainer>
    </div>
  );
}
