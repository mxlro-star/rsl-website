import SectionContainer from "../components/SectionContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GDPR Compliance - Future Housing Framework",
  description:
    "Our approach to data protection and compliance with the General Data Protection Regulation.",
};

export default function GDPR() {
  return (
    <div className="bg-zinc-950 min-h-screen">
      <SectionContainer className="pt-32">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-medium tracking-tight text-zinc-50 mb-6">
            GDPR Compliance
          </h1>
          <p className="text-lg leading-relaxed text-zinc-400 mb-16">
            Our approach to data protection under the General Data Protection
            Regulation
          </p>

          <div className="space-y-12 text-zinc-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-medium text-zinc-50 mb-4">
                Our Approach
              </h2>
              <p className="mb-4">
                Verified Operating Company Ltd processes personal data in
                accordance with the principles established by the General Data
                Protection Regulation (GDPR) and the Data Protection Act 2018.
              </p>
              <p className="mb-4">
                Our approach to data protection is guided by the following
                principles:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <span className="font-medium text-zinc-100">
                    Data minimisation:
                  </span>{" "}
                  We collect only the information necessary for specific,
                  identified purposes
                </li>
                <li>
                  <span className="font-medium text-zinc-100">
                    Purpose limitation:
                  </span>{" "}
                  Data is used only for the purposes for which it was collected
                </li>
                <li>
                  <span className="font-medium text-zinc-100">
                    Access control:
                  </span>{" "}
                  Personal data is accessible only to those who require it for
                  legitimate operational purposes
                </li>
                <li>
                  <span className="font-medium text-zinc-100">
                    Retention discipline:
                  </span>{" "}
                  Information is retained only as long as necessary and reviewed
                  periodically for deletion
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-zinc-50 mb-4">
                Lawful Basis for Processing
              </h2>
              <p className="mb-4">
                We process personal data on the following lawful bases:
              </p>

              <h3 className="text-xl font-medium text-zinc-100 mb-3 mt-6">
                Legitimate Interest
              </h3>
              <p className="mb-4">
                Where you have submitted an enquiry about the framework, we
                process your information on the basis of legitimate interest. Our
                legitimate interest is to evaluate whether an operator's profile
                aligns with framework requirements and to respond to enquiries.
              </p>
              <p>
                We have assessed that this processing does not override your
                rights and freedoms, given the limited nature of data collection
                and the context in which it is provided.
              </p>

              <h3 className="text-xl font-medium text-zinc-100 mb-3 mt-6">
                Consent
              </h3>
              <p>
                Where we process data beyond the scope of responding to enquiries,
                we will seek your explicit consent. Consent can be withdrawn at
                any time without affecting the lawfulness of processing conducted
                prior to withdrawal.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-zinc-50 mb-4">
                Data Security
              </h2>
              <p className="mb-4">
                We implement appropriate technical and organisational measures to
                protect personal data against unauthorised or unlawful processing,
                accidental loss, destruction, or damage.
              </p>
              <p className="mb-4">These measures include:</p>
              <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                <li>Encryption of data in transit and at rest</li>
                <li>Access controls limiting data visibility to authorised users</li>
                <li>Regular security assessments</li>
                <li>Secure deletion protocols for data no longer required</li>
              </ul>
              <p>
                While we take data security seriously, no system is entirely
                immune to risk. We cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-zinc-50 mb-4">
                Data Subject Rights
              </h2>
              <p className="mb-4">
                Under GDPR, you have the following rights regarding your personal
                data:
              </p>

              <h3 className="text-xl font-medium text-zinc-100 mb-3 mt-6">
                Right of Access
              </h3>
              <p>
                You may request confirmation of whether we process your personal
                data, and if so, access to that data and information about how it
                is processed.
              </p>

              <h3 className="text-xl font-medium text-zinc-100 mb-3 mt-6">
                Right to Rectification
              </h3>
              <p>
                You may request correction of inaccurate or incomplete personal
                data.
              </p>

              <h3 className="text-xl font-medium text-zinc-100 mb-3 mt-6">
                Right to Erasure
              </h3>
              <p>
                You may request deletion of your personal data where there is no
                compelling reason for its continued processing, subject to legal
                obligations that may require retention.
              </p>

              <h3 className="text-xl font-medium text-zinc-100 mb-3 mt-6">
                Right to Restriction of Processing
              </h3>
              <p>
                You may request that we limit processing of your data in certain
                circumstances, such as while we verify its accuracy or assess
                whether we have legitimate grounds to process it.
              </p>

              <h3 className="text-xl font-medium text-zinc-100 mb-3 mt-6">
                Right to Object
              </h3>
              <p>
                Where we process your data on the basis of legitimate interest,
                you have the right to object. We will cease processing unless we
                can demonstrate compelling legitimate grounds that override your
                interests.
              </p>

              <h3 className="text-xl font-medium text-zinc-100 mb-3 mt-6">
                Right to Data Portability
              </h3>
              <p>
                Where processing is based on consent or contract and carried out
                by automated means, you may request that we provide your data in a
                structured, commonly used, machine-readable format.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-zinc-50 mb-4">
                Exercising Your Rights
              </h2>
              <p className="mb-4">
                To exercise any of the above rights, contact us using the form
                available on this website.
              </p>
              <p className="mb-4">
                We will respond to requests within one month. In some cases, this
                period may be extended by a further two months where requests are
                complex or numerous. You will be informed of any extension.
              </p>
              <p>
                We may require proof of identity before fulfilling requests to
                ensure data is not disclosed to unauthorised parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-zinc-50 mb-4">
                Complaints
              </h2>
              <p className="mb-4">
                If you are dissatisfied with how we have handled your personal
                data, you may contact us to raise a complaint.
              </p>
              <p>
                You also have the right to lodge a complaint with the Information
                Commissioner's Office (ICO), the UK supervisory authority for data
                protection. The ICO can be contacted at{" "}
                <a
                  href="https://ico.org.uk"
                  className="text-blue-400 hover:text-blue-300 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ico.org.uk
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-zinc-50 mb-4">
                International Transfers
              </h2>
              <p>
                We do not routinely transfer personal data outside the United
                Kingdom. If such transfer becomes necessary, we will ensure
                appropriate safeguards are in place in accordance with GDPR
                requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-zinc-50 mb-4">
                Updates to This Statement
              </h2>
              <p>
                This compliance statement may be updated periodically to reflect
                changes in our data processing practices or legal requirements.
                Updates will be reflected by the date at the top of this page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-zinc-50 mb-4">
                Contact
              </h2>
              <p>
                For questions about data protection or to exercise your rights,
                use the contact form available on this website.
              </p>
            </section>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
