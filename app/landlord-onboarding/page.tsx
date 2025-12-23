import SectionContainer from "../components/SectionContainer";
import ProcessSection from "../components/ProcessSection";
import OnboardingCTA from "../components/OnboardingCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Landlord Onboarding - Future Housing Framework",
  description:
    "Information for landlords interested in joining the Future Housing Framework regulated accommodation scheme.",
};

export default function LandlordOnboarding() {
  const processes = [
    {
      number: "01",
      title: "Initial discussion",
      description:
        "We confirm suitability and explain the scheme in detail.",
    },
    {
      number: "02",
      title: "Property submission",
      description:
        "You submit details of your property and ownership.",
    },
    {
      number: "03",
      title: "Compliance review",
      description:
        "Required safety and compliance documentation is reviewed.",
    },
    {
      number: "04",
      title: "RSL onboarding",
      description:
        "Approved properties are introduced to the Registered Social Landlord.",
    },
    {
      number: "05",
      title: "Property goes live",
      description:
        "Occupancy begins once final checks are completed.",
    },
  ];

  const whoItsForItems = [
    "Landlords with existing residential properties",
    "Properties that are vacant or becoming vacant",
    "Landlords comfortable meeting enhanced safety and room standards",
    "Owners seeking long-term, professionally managed occupancy",
    "Landlords who prefer not to be involved in tenant support services",
  ];

  const responsibilityItems = [
    "Maintaining the property in good repair",
    "Ensuring all safety certifications are valid and up to date",
    "Managing maintenance and repairs",
    "Managing the property structure and utilities",
    "Providing required documentation during onboarding and renewals",
  ];

  const complianceDocuments = [
    "Electrical Safety Report (EICR)",
    "Fire alarm certification",
    "Emergency lighting certification (where applicable)",
    "Gas Safety Certificate",
    "Legionella risk assessment",
    "Asbestos report (if applicable)",
    "Damp or condition report",
    "Proof of ownership (title deed or lease)",
    "Any additional documents requested during review",
  ];

  const feeCovers = [
    "Compliance review",
    "Property submission",
    "RSL onboarding administration",
    "Coordination through to approval",
  ];

  const packIncludes = [
    "A detailed landlord information pack",
    "A property submission form",
    "A full compliance checklist",
    "Terms of engagement",
  ];

  return (
    <div className="bg-zinc-950 min-h-screen">
      {/* Section 1: Introduction */}
      <SectionContainer className="pt-32">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-medium tracking-tight text-zinc-50 mb-6">
            Landlord Onboarding
          </h1>
          <p className="text-xl leading-relaxed text-zinc-400 mb-8">
            A structured route to placing your property into a regulated social housing scheme.
          </p>
          <p className="text-lg leading-relaxed text-zinc-400">
            This scheme is designed for landlords seeking a stable, professional route into the social housing sector. We operate as a managing agent, introducing suitable properties to a Registered Social Landlord (RSL) and overseeing the onboarding process. This page explains how the scheme works, what is required from you as a landlord, and how to begin onboarding your first property.
          </p>
        </div>
      </SectionContainer>

      {/* Section 2: Who the Scheme Is For */}
      <SectionContainer className="border-t border-zinc-800">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-medium tracking-tight text-zinc-50 mb-8">
            Who the scheme is for
          </h2>
          <ul className="space-y-4 mb-8">
            {whoItsForItems.map((item, index) => (
              <li key={index} className="text-lg leading-relaxed text-zinc-400 flex gap-3">
                <span className="text-blue-500 flex-shrink-0">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="border-l-2 border-blue-500 border border-zinc-800 bg-zinc-900/50 p-8">
            <p className="text-lg leading-relaxed text-zinc-400">
              This scheme is not suitable for landlords seeking short-term lets or hands-on tenant management.
            </p>
          </div>
        </div>
      </SectionContainer>

      {/* Section 3: How the Scheme Works */}
      <SectionContainer className="border-t border-zinc-800">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-medium tracking-tight text-zinc-50 mb-12">
            How the scheme works
          </h2>
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

      {/* Section 4: Landlord Responsibilities */}
      <SectionContainer className="border-t border-zinc-800">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-medium tracking-tight text-zinc-50 mb-8">
            Landlord responsibilities
          </h2>
          <ul className="space-y-4 mb-8">
            {responsibilityItems.map((item, index) => (
              <li key={index} className="text-lg leading-relaxed text-zinc-400 flex gap-3">
                <span className="text-blue-500 flex-shrink-0">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="border border-zinc-800 bg-zinc-900/50 p-8">
            <p className="text-lg leading-relaxed text-zinc-400">
              The landlord is not responsible for providing care, support, or supervision to occupants.
            </p>
          </div>
        </div>
      </SectionContainer>

      {/* Section 5: HMO & Licensing Explanation */}
      <SectionContainer className="border-t border-zinc-800">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-medium tracking-tight text-zinc-50 mb-8">
            HMO and licensing
          </h2>
          <p className="text-lg leading-relaxed text-zinc-400 mb-6">
            Properties are operated to enhanced safety and room standards similar to HMO requirements.
          </p>
          <p className="text-lg leading-relaxed text-zinc-400 mb-6">
            In many cases, properties used within this scheme do not require an additional HMO licence due to the way the accommodation is provided through a Registered Social Landlord.
          </p>
          <p className="text-lg leading-relaxed text-zinc-400 mb-6">
            Licensing requirements can vary by local authority. Final confirmation is always provided during onboarding.
          </p>
          <p className="text-sm text-zinc-500 leading-relaxed">
            We recommend landlords take independent advice if they are unsure about local licensing rules.
          </p>
        </div>
      </SectionContainer>

      {/* Section 6: Compliance Documentation */}
      <SectionContainer className="border-t border-zinc-800">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-medium tracking-tight text-zinc-50 mb-8">
            Compliance documentation
          </h2>
          <p className="text-lg leading-relaxed text-zinc-400 mb-8">
            As part of onboarding your first property, a full compliance document pack is required.
          </p>
          <ul className="space-y-4">
            {complianceDocuments.map((doc, index) => (
              <li key={index} className="text-lg leading-relaxed text-zinc-400 flex gap-3">
                <span className="text-blue-500 flex-shrink-0">—</span>
                <span>{doc}</span>
              </li>
            ))}
          </ul>
        </div>
      </SectionContainer>

      {/* Section 7: Fees */}
      <SectionContainer className="border-t border-zinc-800">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-medium tracking-tight text-zinc-50 mb-8">
            Fees
          </h2>
          <div className="border border-zinc-800 bg-zinc-900/50 p-8 mb-8">
            <p className="text-lg leading-relaxed text-zinc-400 mb-6">
              A one-off onboarding fee of <span className="text-zinc-50 font-medium">£1,500</span> applies per property.
            </p>
            <p className="text-lg leading-relaxed text-zinc-400 mb-4">
              This covers:
            </p>
            <ul className="space-y-3">
              {feeCovers.map((item, index) => (
                <li key={index} className="text-lg leading-relaxed text-zinc-400 flex gap-3">
                  <span className="text-blue-500 flex-shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-lg leading-relaxed text-zinc-400">
            Payment is requested once the full document pack has been submitted.
          </p>
        </div>
      </SectionContainer>

      {/* Section 8: Next Step (CTA) */}
      <SectionContainer className="border-t border-zinc-800">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-medium tracking-tight text-zinc-50 mb-6">
            Next step
          </h2>
          <p className="text-lg leading-relaxed text-zinc-400 mb-6">
            Once requested, you will receive:
          </p>
          <ul className="space-y-4 mb-12">
            {packIncludes.map((item, index) => (
              <li key={index} className="text-lg leading-relaxed text-zinc-400 flex gap-3">
                <span className="text-blue-500 flex-shrink-0">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <OnboardingCTA />
        </div>
      </SectionContainer>
    </div>
  );
}
