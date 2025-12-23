import SectionContainer from "../components/SectionContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Future Social Housing",
  description:
    "How we collect, use, and protect information submitted through this website.",
};

export default function PrivacyPolicy() {
  return (
    <div className="bg-zinc-950 min-h-screen">
      <SectionContainer className="pt-32">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-medium tracking-tight text-zinc-50 mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg leading-relaxed text-zinc-400 mb-16">
            Last updated: December 2024
          </p>

          <div className="space-y-12 text-zinc-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-medium text-zinc-50 mb-4">
                Introduction
              </h2>
              <p className="mb-4">
                This website is operated by Future Estate Management Ltd. It
                provides information about a structured framework for operators
                within regulated accommodation ecosystems.
              </p>
              <p className="mb-4">
                Access to the framework is selective and not publicly available.
                This website is informational. Data collection is minimal and
                purpose-limited.
              </p>
              <p>
                This policy explains what information we collect, how we use it,
                and the rights available to individuals whose data we process.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-zinc-50 mb-4">
                Information We Collect
              </h2>
              <p className="mb-4">We collect information in two ways:</p>

              <h3 className="text-xl font-medium text-zinc-100 mb-3 mt-6">
                Information You Provide
              </h3>
              <p className="mb-4">
                When you submit a request for introduction through this website,
                you may provide:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                <li>Your name</li>
                <li>Email address</li>
                <li>Organisation name</li>
                <li>Brief description of your operational context</li>
                <li>Source of referral or how you learned of the framework</li>
              </ul>

              <h3 className="text-xl font-medium text-zinc-100 mb-3 mt-6">
                Technical Information
              </h3>
              <p className="mb-4">
                When you visit this website, we automatically collect basic
                technical data:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Device type</li>
                <li>Pages viewed and time spent</li>
                <li>Referral source</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-zinc-50 mb-4">
                How We Use Information
              </h2>
              <p className="mb-4">We use collected information to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Respond to enquiries submitted via the website</li>
                <li>
                  Evaluate whether an operator's profile aligns with framework
                  requirements
                </li>
                <li>Maintain the security and functionality of the website</li>
                <li>
                  Conduct internal record-keeping related to framework operations
                </li>
              </ul>
              <p className="mt-4">
                We do not use your information for marketing purposes. We do not
                build profiles for advertising.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-zinc-50 mb-4">
                Data Sharing
              </h2>
              <p className="mb-4">We do not sell your information.</p>
              <p className="mb-4">
                We do not share your information with third parties for marketing
                or commercial purposes.
              </p>
              <p>
                We may share information with professional advisers, including
                legal and regulatory specialists, where this is required to
                evaluate participation in the framework or to meet legal
                obligations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-zinc-50 mb-4">
                Data Retention
              </h2>
              <p className="mb-4">
                We retain information only for as long as it remains relevant to
                the purpose for which it was collected.
              </p>
              <p className="mb-4">
                Enquiries that do not result in framework engagement are typically
                retained for a period of twelve months, after which they are
                reviewed and deleted unless there is a justified reason to retain
                them.
              </p>
              <p>
                Information related to active framework participants is retained
                for the duration of participation and for a period thereafter as
                required by regulatory and legal obligations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-zinc-50 mb-4">
                Your Rights
              </h2>
              <p className="mb-4">
                You have the right to request access to the personal information
                we hold about you.
              </p>
              <p className="mb-4">
                You may request correction of inaccurate information, or deletion
                of information where we are not legally required to retain it.
              </p>
              <p className="mb-4">
                You may object to processing where we rely on legitimate interest
                as the lawful basis.
              </p>
              <p>
                To exercise any of these rights, contact us using the form
                available on this website. We will respond within one month.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-zinc-50 mb-4">
                Data Security
              </h2>
              <p>
                We implement appropriate technical and organisational measures to
                protect personal information from unauthorised access, alteration,
                disclosure, or destruction. No system is entirely secure, and we
                cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-zinc-50 mb-4">
                Changes to This Policy
              </h2>
              <p>
                This policy may be updated periodically. Material changes will be
                reflected by updating the date at the top of this page. Continued
                use of the website following changes constitutes acceptance of the
                updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-zinc-50 mb-4">
                Contact
              </h2>
              <p>
                For questions about this policy or to exercise your data
                protection rights, use the contact form available on this website.
              </p>
            </section>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
