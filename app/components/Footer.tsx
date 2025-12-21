import Link from "next/link";
import CookieSettingsLink from "./cookie-consent/CookieSettingsLink";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const legalLinks = [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms-of-service", label: "Terms of Service" },
    { href: "/cookie-policy", label: "Cookie Policy" },
    { href: "/gdpr", label: "GDPR" },
  ];

  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col gap-8">
          {/* Legal Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-zinc-500 hover:text-zinc-300 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            {/* Cookie Settings Link */}
            <CookieSettingsLink />
          </div>

          {/* Company Information */}
          <div className="pt-8 border-t border-zinc-800">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Registration Details */}
              <div className="flex flex-col gap-3">
                <div className="text-sm text-zinc-400">
                  Verified Operating Company Ltd
                </div>
                <div className="flex flex-col gap-1 text-xs font-mono text-zinc-600">
                  <div>Registered in England and Wales</div>
                  <div>Company No. 00000000</div>
                </div>
              </div>

              {/* Contact Details */}
              <div className="flex flex-col gap-3">
                <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                  Registered Office
                </div>
                <div className="flex flex-col gap-1 text-xs text-zinc-600">
                  <div>00 Example Street</div>
                  <div>City, County</div>
                  <div>Postcode</div>
                  <div>United Kingdom</div>
                </div>
                <div className="flex flex-col gap-1 text-xs text-zinc-600 mt-2">
                  <a
                    href="mailto:contact@example.com"
                    className="hover:text-zinc-400 transition-colors"
                  >
                    contact@example.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="text-xs text-zinc-600">
            © {currentYear} All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
