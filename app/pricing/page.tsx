import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ChevronRight, HelpCircle, Shield } from "lucide-react";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";

export const metadata: Metadata = {
  title: "IMS Pricing | Monthly Subscription, No Long Contract",
  description:
    "IMS available on monthly subscription. Book a free demo and get a tailored proposal within 48 hours.",
};

const tiers = [
  {
    name: "Core",
    description: "For smaller contractors getting started with digital operations.",
    priceNote: "From",
    price: "Tailored",
    period: "per month",
    highlight: false,
    modules: [
      "Document Control (DM)",
      "HR & Compliance (HC)",
      "Time Management (TM)",
      "Up to 25 users",
      "Email support",
      "Standard onboarding",
    ],
  },
  {
    name: "Professional",
    description: "For mid-size contractors requiring full operational control.",
    priceNote: "Most popular",
    price: "Tailored",
    period: "per month",
    highlight: true,
    modules: [
      "Document Control (DM)",
      "HR & Compliance (HC)",
      "Time Management (TM)",
      "Project Delivery / WORM (PM)",
      "Materials & Assets (MM)",
      "Up to 150 users",
      "Priority support",
      "Full onboarding & training",
    ],
  },
  {
    name: "Enterprise",
    description: "For large contractors and group organisations.",
    priceNote: "Bespoke",
    price: "Tailored",
    period: "per month",
    highlight: false,
    modules: [
      "All five modules",
      "Unlimited users",
      "Dedicated environment",
      "Custom configuration",
      "Dedicated account manager",
      "SLA-backed support",
      "Group reporting & consolidation",
      "API integrations",
    ],
  },
];

const faqs = [
  {
    q: "Is there a long-term contract?",
    a: "No. IMS is available on a monthly subscription with no long-term contract commitment. Cancel with standard notice.",
  },
  {
    q: "How long does implementation take?",
    a: "Week 1: system setup and configuration. Weeks 2–3: team training and process automation. Week 4: full integration and operational gains. 90 days to full ROI.",
  },
  {
    q: "Can we start with fewer modules?",
    a: "Yes. Many clients start with two or three modules and expand as they see value. We'll recommend the right starting point based on your priorities.",
  },
  {
    q: "Is each client on a separate hosted environment?",
    a: "Yes. Every IMS client operates on a completely isolated, dedicated environment hosted on Google Cloud. Your data is never shared with other clients.",
  },
  {
    q: "What kind of support is included?",
    a: "All plans include support. Professional and Enterprise plans include priority support, dedicated contacts and faster SLAs.",
  },
  {
    q: "Can IMS be configured to our specific processes?",
    a: "Yes. The isolated environment model means IMS is configured specifically to your operation — your cost codes, your workflow, your compliance requirements.",
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-brand-navy">
      <Navbar />

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="pt-24 pb-16 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-3">Pricing</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Monthly subscription. No long contract.
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            Pricing is tailored to your operation size, sector and module
            requirements. Book a free demo — we'll prepare a proposal within 48
            hours.
          </p>
        </div>
      </section>

      {/* ── ROI banner ────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-brand-blue/10 border border-brand-blue/25 rounded-xl py-5 px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <span className="text-brand-blue-light font-semibold">
              ~£100,000 average annual saving per client.
            </span>{" "}
            <span className="text-slate-300">
              Full ROI typically within 90 days.
            </span>
          </div>
          <Link href="/demo" className="btn-primary text-sm px-6 py-2.5 shrink-0">
            Get a tailored proposal
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* ── Pricing tiers ─────────────────────────────────────── */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-2xl border p-8 flex flex-col ${
                  tier.highlight
                    ? "bg-brand-blue/10 border-brand-blue/40 shadow-lg shadow-brand-blue/10"
                    : "bg-surface border-surface-border"
                }`}
              >
                {tier.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-blue text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                      Most popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h2 className="text-xl font-bold text-white mb-2">
                    {tier.name}
                  </h2>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {tier.description}
                  </p>
                </div>

                <div className="mb-8">
                  <div className="text-3xl font-bold text-white">
                    Tailored pricing
                  </div>
                  <div className="text-slate-400 text-sm mt-1">
                    Based on your operation — book a demo for a quote
                  </div>
                </div>

                <ul className="space-y-3 flex-1 mb-8">
                  {tier.modules.map((m) => (
                    <li key={m} className="flex items-center gap-2.5">
                      <CheckCircle2
                        className={`w-4 h-4 shrink-0 ${
                          tier.highlight ? "text-brand-blue-light" : "text-brand-blue"
                        }`}
                      />
                      <span className="text-slate-300 text-sm">{m}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/demo"
                  className={tier.highlight ? "btn-primary justify-center" : "btn-secondary justify-center"}
                >
                  Book a demo
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          <p className="text-center text-slate-500 text-sm mt-8">
            All plans include: isolated Google Cloud environment, monthly
            subscription, standard support and onboarding.
          </p>
        </div>
      </section>

      {/* ── What's always included ─────────────────────────────── */}
      <section className="py-24 bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-label mb-3">What's always included</p>
          <h2 className="text-3xl font-bold text-white mb-12">
            Standard across every plan
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "Isolated environment",
                desc: "Dedicated Google Cloud environment per client.",
              },
              {
                icon: CheckCircle2,
                title: "RISQS & ISO structured",
                desc: "Compliance frameworks built into every module.",
              },
              {
                icon: ChevronRight,
                title: "Mobile access",
                desc: "Three user types on laptop, tablet and smartphone.",
              },
              {
                icon: CheckCircle2,
                title: "Onboarding & training",
                desc: "Operational in 4 weeks. Full ROI in 90 days.",
              },
            ].map((item) => (
              <div key={item.title} className="card text-center">
                <item.icon className="w-8 h-8 text-brand-blue mx-auto mb-3" />
                <h3 className="font-semibold text-white mb-2 text-sm">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQs ─────────────────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Frequently asked questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="card">
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-white mb-2 text-sm">
                      {faq.q}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ─────────────────────────────────────────── */}
      <section className="py-24 bg-surface/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Get a tailored proposal in 48 hours
          </h2>
          <p className="text-slate-400 mb-8">
            Book a free demo. We'll configure it around your operation and
            prepare a proposal within 48 hours. No obligation, no long contract.
          </p>
          <Link href="/demo" className="btn-primary text-base px-10 py-4">
            Book a free demo
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
