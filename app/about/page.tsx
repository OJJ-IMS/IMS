import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  Building2,
  Users,
  Shield,
  Cloud,
  CheckCircle2,
  Quote,
  Phone,
  Mail,
} from "lucide-react";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";

export const metadata: Metadata = {
  title: "About IMS | Built for Rail and Construction Since 2005",
  description:
    "IMS has been built for the rail industry since 2005, developed by project managers, HSQE professionals and commercial engineers.",
};

const values = [
  {
    icon: Building2,
    title: "Built by practitioners",
    description:
      "IMS was designed by Project Managers, Commercial Engineers, Site Supervisors and HSQE Managers who lived the problems it solves. Not adapted from generic software.",
  },
  {
    icon: Shield,
    title: "Compliance at the core",
    description:
      "RISQS, ISO 9001/14001/45001, NR/L2/OHS/003 and Working Time Directive compliance are built into the structure — not tagged on as features.",
  },
  {
    icon: Cloud,
    title: "Separate hosted environments",
    description:
      "Each client runs on a dedicated, isolated environment on Google Cloud. Complete data security, bespoke configuration, no shared risk.",
  },
  {
    icon: Users,
    title: "In-house development team",
    description:
      "A permanent in-house team has continuously improved IMS since 2005. Rapid response to industry changes, not a vendor backlog.",
  },
];

const testimonials = [
  {
    quote:
      "With IMS, managing projects is effortless. Live costing and real-time reporting have given us better commercial control and financial clarity.",
    name: "Kurt Dennison",
    title: "Managing Director",
    company: "KBTL Telecoms",
  },
  {
    quote:
      "IMS keeps all our procedures in one place, making audits smoother and ensuring incidents are closed out efficiently — hugely benefiting our ISO, Sentinel and NICEIC compliance.",
    name: "Greg England",
    title: "HSQE Manager",
    company: "ADComms",
  },
];

const clients = [
  "LB Foster", "telent", "ADComms", "Panasonic", "KBTL Telecoms",
  "Project Safe", "NG Bailey", "emico", "ASL", "zenitel",
  "Yellow Rail", "MJ Quinn", "MCL Group", "Taylor Technology Systems",
  "NWM", "W.H. Davis", "TEECEM", "Buckland", "EPR", "Cemplas",
  "SigTech Rail", "Millennium Power", "Fuserail", "Delcore", "Solvere",
  "Fone-Alarm", "DEPS", "Lima Solutions", "SIMS", "VBS", "Pemberton", "Barons",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-brand-navy">
      <Navbar />

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="section-label mb-3">About IMS</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Built for UK rail and construction since 2005
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              IMS was created by people who understood the frustrations of
              managing rail and construction projects with spreadsheets, paper
              forms and disconnected systems. In active use since 2005, it's been
              continuously refined by a permanent in-house team — not managed by
              a generic software vendor.
            </p>
            <Link href="/demo" className="btn-primary">
              Book a free demo
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Key facts ─────────────────────────────────────────── */}
      <section className="py-16 bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "2005", label: "In active use since" },
              { value: "30+", label: "Active UK clients" },
              { value: "~£100k", label: "Average annual saving" },
              { value: "5", label: "Integrated modules" },
            ].map((stat) => (
              <div key={stat.label} className="card text-center">
                <div className="text-3xl font-bold text-brand-blue-light mb-1">
                  {stat.value}
                </div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Story ─────────────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label mb-3">Our story</p>
              <h2 className="text-3xl font-bold text-white mb-6">
                Built from inside the industry
              </h2>
              <div className="space-y-4 text-slate-400 leading-relaxed">
                <p>
                  IMS was born out of direct experience working on Network Rail
                  and London Underground infrastructure projects. The founders
                  understood the commercial, compliance and operational pressures
                  that contractors face — and saw that no existing software
                  addressed them properly.
                </p>
                <p>
                  Rather than adapting a generic platform, the IMS team built
                  from scratch — with rail-specific workflows, compliance
                  frameworks and reporting structures designed in from day one.
                </p>
                <p>
                  Today, IMS is developed by Postfield Systems Ltd and in active
                  use with 30+ contractors across UK rail and construction. The
                  in-house development team continues to evolve the platform in
                  direct response to client needs and industry changes.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="flex items-start gap-4 p-5 bg-surface rounded-xl border border-surface-border hover:border-brand-blue/30 transition-colors"
                >
                  <div className="w-10 h-10 bg-brand-blue/15 border border-brand-blue/20 rounded-lg flex items-center justify-center shrink-0">
                    <v.icon className="w-5 h-5 text-brand-blue-light" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{v.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {v.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Technology ─────────────────────────────────────────── */}
      <section className="py-24 bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-label mb-3">Platform & security</p>
          <h2 className="text-3xl font-bold text-white mb-4">
            Enterprise-grade infrastructure
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-12">
            Hosted on Google Cloud. Each client operates on a completely
            isolated, dedicated environment — ensuring data security, custom
            configuration and no shared risk between organisations.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { label: "Google Cloud hosted", desc: "Enterprise-grade reliability and uptime" },
              { label: "Isolated environments", desc: "One dedicated environment per client" },
              { label: "Bespoke configuration", desc: "Configured to your operation, not a template" },
            ].map((item) => (
              <div key={item.label} className="card text-center">
                <CheckCircle2 className="w-8 h-8 text-brand-blue mx-auto mb-3" />
                <div className="font-semibold text-white mb-1 text-sm">{item.label}</div>
                <div className="text-slate-400 text-xs">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label text-center mb-3">What our clients say</p>
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Trusted by UK rail contractors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {testimonials.map((t) => (
              <div key={t.name} className="card hover:border-brand-blue/30 transition-all">
                <Quote className="w-7 h-7 text-brand-blue/40 mb-4" />
                <p className="text-slate-200 leading-relaxed mb-6 text-[15px]">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-blue/20 border border-brand-blue/30 flex items-center justify-center text-sm font-bold text-brand-blue-light">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">{t.name}</div>
                    <div className="text-slate-400 text-xs">{t.title}, {t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-sm text-slate-500 mb-4 uppercase tracking-widest font-medium">
              30+ active clients including
            </p>
            <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
              {clients.map((c) => (
                <span key={c} className="text-slate-500 text-sm font-medium">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact ─────────────────────────────────────────────── */}
      <section className="py-24 bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label mb-3">Contact us</p>
              <h2 className="text-3xl font-bold text-white mb-6">
                Speak to the team
              </h2>
              <p className="text-slate-400 mb-8">
                Ollie Clayton leads client relations for IMS. Get in touch to
                book a demo, ask questions or discuss your specific operation.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="w-9 h-9 bg-brand-blue/15 rounded-lg flex items-center justify-center">
                    <Mail className="w-4 h-4 text-brand-blue" />
                  </div>
                  <a href="mailto:Oliver.Clayton@theims.co.uk" className="hover:text-white transition-colors">
                    Oliver.Clayton@theims.co.uk
                  </a>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="w-9 h-9 bg-brand-blue/15 rounded-lg flex items-center justify-center">
                    <Phone className="w-4 h-4 text-brand-blue" />
                  </div>
                  <a href="tel:07716407150" className="hover:text-white transition-colors">
                    07716 407150
                  </a>
                </div>
              </div>
            </div>
            <div className="card bg-gradient-to-br from-brand-blue/10 to-transparent border-brand-blue/20">
              <h3 className="font-bold text-white text-xl mb-3">
                Book a free demo
              </h3>
              <p className="text-slate-400 mb-6 text-sm">
                We'll configure the demo around your operation. No sales
                pressure — just a clear view of how IMS would work for you.
                Tailored proposal within 48 hours.
              </p>
              <Link href="/demo" className="btn-primary">
                Book now
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
