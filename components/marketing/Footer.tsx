import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

const footerLinks = {
  product: [
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Book a Demo", href: "/demo" },
  ],
  company: [
    { label: "About IMS", href: "/about" },
    { label: "Contact", href: "/demo" },
  ],
  modules: [
    { label: "Document Control", href: "/features#documents" },
    { label: "HR & Compliance", href: "/features#hr" },
    { label: "Time Management", href: "/features#time" },
    { label: "Project Delivery", href: "/features#projects" },
    { label: "Materials & Assets", href: "/features#materials" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-brand-navy-mid border-t border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-blue rounded-lg flex items-center justify-center font-bold text-white text-sm">
                IMS
              </div>
              <span className="font-bold text-white text-lg">
                IMS<span className="text-brand-blue">.</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              The only all-in-one management platform built specifically for UK
              rail and construction contractors. In active use since 2005.
            </p>
            <div className="space-y-2.5">
              <a
                href="mailto:Support@postfield.co.uk"
                className="flex items-center gap-2.5 text-slate-400 hover:text-white text-sm transition-colors"
              >
                <Mail className="w-4 h-4 text-brand-blue shrink-0" />
                Support@postfield.co.uk
              </a>
              <a
                href="tel:02039099888"
                className="flex items-center gap-2.5 text-slate-400 hover:text-white text-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-blue shrink-0" />
                020 3909 9888
              </a>
              <div className="flex items-start gap-2.5 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                53 Ullswater Crescent, Coulsdon, CR5 2HR
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Product</h4>
            <ul className="space-y-2.5">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Modules</h4>
            <ul className="space-y-2.5">
              {footerLinks.modules.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <a
                href="https://www.linkedin.com/company/postfield-systems"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-surface-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Postfield Systems Ltd. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm">
            Registered in England & Wales. Legal name: Postfield Systems Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
}
