import SectionContainer from "../components/SectionContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Future Housing Framework",
  description:
    "Terms governing use of this website and access to framework information.",
};

export default function TermsOfService() {
  return (
    <div className="bg-zinc-950 min-h-screen">
      <SectionContainer className="pt-32">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-medium tracking-tight text-zinc-50 mb-6">
            Terms of Service
          </h1>
          <p className="text-lg leading-relaxed text-zinc-400 mb-16">
            Last updated: December 2024
          </p>

          <div className="space-y-12 text-zinc-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-medium text-zinc-50 mb-4">
                Nature of This Website
              </h2>
              <p className="mb-4">
                This website is operated by Verified Operating Company Ltd. It
                provides information about a controlled-access framework designed
                for property operators working within established registered
                provider ecosystems.
              </p>
              <p className="mb-4">
                Access to the framework is discretionary and selective. This
                website does not constitute an open application process.
              </p>
              <p className="mb-4">
                Submission of information through this website does not guarantee
                a response, acceptance, or participation in the framework.
              </p>
              <p>
                The framework is not a public service. There is no entitlement to
                access.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-zinc-50 mb-4">
                Use of Information
              </h2>
              <p className="mb-4">
                The information provided on this website is for informational
                purposes. It describes the structure and operational parameters of
                the framework but does not constitute:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Legal advice</li>
                <li>Financial advice</li>
                <li>Regulatory guidance</li>
                <li>An offer to contract</li>
                <li>A guarantee of any outcome</li>
              </ul>
              <p className="mt-4">
                Operators considering participation should seek independent legal
                and financial advice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-zinc-50 mb-4">
                Access and Discretion
              </h2>
              <p className="mb-4">
                Access to the framework is determined by the Company at its sole
                discretion.
              </p>
              <p className="mb-4">
                The Company may grant, limit, suspend, or terminate access at any
                time, for any reason, without prior notice or explanation.
              </p>
              <p className="mb-4">
                Introductions typically follow direct conversations or referrals.
                Unsolicited requests may not receive a response.
              </p>
              <p>
                The Company has no obligation to engage with any party, regardless
                of information submitted.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-zinc-50 mb-4">
                Accuracy of Information
              </h2>
              <p className="mb-4">
                Information on this website is provided in good faith and is
                believed to be accurate at the time of publication.
              </p>
              <p className="mb-4">
                Framework parameters, operational requirements, and eligibility
                criteria may change without notice.
              </p>
              <p>
                The Company does not warrant that information on this website is
                complete, current, or error-free.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-zinc-50 mb-4">
                No Guarantees
              </h2>
              <p className="mb-4">
                The Company makes no representations or warranties regarding:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Availability of framework capacity</li>
                <li>Outcomes from framework participation</li>
                <li>Continuation of framework operations</li>
                <li>Stability of operational parameters</li>
              </ul>
              <p className="mt-4">
                Framework participation does not guarantee property onboarding,
                capacity allocation, or operational success.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-zinc-50 mb-4">
                Limitation of Liability
              </h2>
              <p className="mb-4">
                To the fullest extent permitted by law, the Company accepts no
                liability for:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                <li>
                  Any decision made in reliance on information provided on this
                  website
                </li>
                <li>
                  Loss or damage arising from use of, or inability to use, this
                  website
                </li>
                <li>
                  Interruption of access to this website or any linked resources
                </li>
                <li>
                  Errors, omissions, or inaccuracies in the information provided
                </li>
              </ul>
              <p>
                This limitation applies to direct, indirect, consequential, or
                incidental losses, whether arising in contract, tort, or
                otherwise.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-zinc-50 mb-4">
                Intellectual Property
              </h2>
              <p className="mb-4">
                All content on this website, including text, graphics, and design,
                is the property of Verified Operating Company Ltd or its
                licensors.
              </p>
              <p>
                You may view and print pages for personal reference. You may not
                reproduce, modify, distribute, or use content for commercial
                purposes without written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-zinc-50 mb-4">
                Third-Party Links
              </h2>
              <p>
                This website may contain links to external websites. The Company
                is not responsible for the content, accuracy, or practices of
                third-party sites. Links do not constitute endorsement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-zinc-50 mb-4">
                Governing Law
              </h2>
              <p className="mb-4">
                These terms are governed by the laws of England and Wales.
              </p>
              <p>
                Any disputes arising from use of this website or participation in
                the framework will be subject to the exclusive jurisdiction of the
                courts of England and Wales.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-zinc-50 mb-4">
                Changes to These Terms
              </h2>
              <p>
                The Company may modify these terms at any time. Changes will be
                reflected by updating the date at the top of this page. Continued
                use of the website constitutes acceptance of updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-zinc-50 mb-4">
                Contact
              </h2>
              <p>
                For questions about these terms, use the contact form available on
                this website.
              </p>
            </section>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
