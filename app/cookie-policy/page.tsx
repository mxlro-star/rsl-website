import SectionContainer from "../components/SectionContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy - Future Social Housing",
  description: "Information about cookies used on this website.",
};

export default function CookiePolicy() {
  return (
    <div className="bg-zinc-950 min-h-screen">
      <SectionContainer className="pt-32">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-medium tracking-tight text-zinc-50 mb-6">
            Cookie Policy
          </h1>
          <p className="text-lg leading-relaxed text-zinc-400 mb-16">
            Last updated: December 2024
          </p>

          <div className="space-y-12 text-zinc-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-medium text-zinc-50 mb-4">
                What Are Cookies
              </h2>
              <p className="mb-4">
                Cookies are small text files placed on your device when you visit
                a website. They allow the website to recognise your device and
                store certain information about your preferences or actions.
              </p>
              <p>
                Cookies are widely used to make websites function efficiently and
                to provide information to site operators.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-zinc-50 mb-4">
                Cookies Used on This Website
              </h2>
              <p className="mb-4">This website uses a limited set of cookies.</p>

              <h3 className="text-xl font-medium text-zinc-100 mb-3 mt-6">
                Essential Cookies
              </h3>
              <p className="mb-4">
                These cookies are necessary for the website to function. They
                enable core functionality such as security, network management,
                and accessibility.
              </p>
              <p>
                The website cannot function properly without these cookies. They
                are set in response to actions you take, such as navigating the
                site or submitting a form.
              </p>

              <h3 className="text-xl font-medium text-zinc-100 mb-3 mt-6">
                Analytics Cookies
              </h3>
              <p className="mb-4">
                We may use basic analytics cookies to understand how visitors
                interact with the website. This helps us maintain and improve site
                functionality.
              </p>
              <p className="mb-4">
                Analytics data is aggregated and anonymised. It includes
                information such as:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Number of visitors</li>
                <li>Pages viewed</li>
                <li>Time spent on pages</li>
                <li>Referral sources</li>
              </ul>

              <h3 className="text-xl font-medium text-zinc-100 mb-3 mt-6">
                What We Do Not Use
              </h3>
              <p className="mb-4">This website does not use:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Advertising cookies</li>
                <li>Social media tracking cookies</li>
                <li>Third-party marketing cookies</li>
                <li>Cross-site tracking mechanisms</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-zinc-50 mb-4">
                Managing Cookies
              </h2>
              <p className="mb-4">
                You can control and manage cookies through your browser settings.
                Most browsers allow you to:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                <li>View cookies stored on your device</li>
                <li>Delete cookies</li>
                <li>Block cookies from specific sites</li>
                <li>Block all cookies</li>
                <li>Delete all cookies when you close your browser</li>
              </ul>
              <p className="mb-4">
                If you block essential cookies, some features of this website may
                not function correctly.
              </p>
              <p>
                Instructions for managing cookies vary by browser. Consult your
                browser's help documentation for specific guidance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-zinc-50 mb-4">
                Changes to This Policy
              </h2>
              <p>
                This policy may be updated periodically to reflect changes in how
                we use cookies. Updates will be reflected by the date at the top
                of this page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-zinc-50 mb-4">
                Contact
              </h2>
              <p>
                For questions about cookies or this policy, use the contact form
                available on this website.
              </p>
            </section>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
