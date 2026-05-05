import Link from "next/link";
import {
  ChevronRight,
  CheckCircle2,
  ArrowRight,
  FileText,
  Users,
  Clock,
  BarChart3,
  Package,
  Shield,
  TrendingUp,
  Quote,
  Building2,
  Zap,
  Star,
} from "lucide-react";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";

const modules = [
  {
    icon: FileText,
    title: "Document Control",
    abbr: "DM",
    description:
      "Drawings, policies, method statements. Version-controlled with full audit trail. RISQS/ISO 9001/14001/45001 structured.",
    features: ["Version control", "Full audit trail", "Any device access", "Controlled distribution"],
  },
  {
    icon: Users,
    title: "HR & Compliance",
    abbr: "HC",
    description:
      "Staff records, training, competencies. PTS, Sentinel, OLEC, COSS tracking with automated expiry alerts.",
    features: ["PTS & Sentinel tracking", "Automated expiry alerts", "Digital certificates", "OLEC & COSS management"],
  },
  {
    icon: Clock,
    title: "Time Management",
    abbr: "TM",
    description:
      "Digital timesheets with line-manager approval. Working Time Directive and fatigue management per NR/L2/OHS/003.",
    features: ["Digital timesheets", "Manager approval workflow", "WTD compliance", "Fatigue management"],
  },
  {
    icon: BarChart3,
    title: "Project Delivery",
    abbr: "PM",
    description:
      "WORM — Works Order Report Monitoring. Real-time cost vs budget, Early Warning generation, claim substantiation.",
    features: ["Real-time cost vs budget", "Early Warning generation", "Claim substantiation", "Daily site reports"],
  },
  {
    icon: Package,
    title: "Materials & Assets",
    abbr: "MM",
    description:
      "Tools, plant, calibration, FORS daily vehicle checks, consumables and purchase order tracking.",
    features: ["Tool & plant tracking", "Calibration management", "FORS vehicle checks", "Purchase orders"],
  },
];

const savings = [
  { label: "Labour allocation", value: "£35,000" },
  { label: "Timesheet reconciliation", value: "£22,000" },
  { label: "Site reporting", value: "£25,000" },
  { label: "Timesheet accuracy / claims", value: "£18,000" },
  { label: "Project documentation", value: "£15,500" },
  { label: "Training records", value: "£6,500" },
  { label: "Tools & plant", value: "£7,200" },
  { label: "Purchase orders", value: "£6,500" },
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
      "Collecting site data used to be a slow, manual process. IMS changed that — now we generate Early Warnings instantly, saving time, money, and strengthening our commercial position.",
    name: "Paul Unwin",
    title: "Director",
    company: "LB Foster",
  },
  {
    quote:
      "IMS keeps all our procedures in one place, making audits smoother and ensuring incidents are closed out efficiently — hugely benefiting our ISO, Sentinel and NICEIC compliance.",
    name: "Greg England",
    title: "HSQE Manager",
    company: "ADComms",
  },
  {
    quote:
      "IMS made our audit stress-free. The system's reliability and expert support ensured compliance, highlighted key improvements, and streamlined the whole process.",
    name: "Frankie Galloway",
    title: "Compliance Executive",
    company: "Project Safe",
  },
];

const clients = [
  "LB Foster", "telent", "ADComms", "Panasonic", "KBTL Telecoms",
  "Project Safe", "NG Bailey", "emico", "ASL", "zenitel",
  "Yellow Rail", "MJ Quinn", "MCL Group", "Taylor Technology Systems",
  "NWM", "W.H. Davis", "TEECEM", "Buckland", "EPR", "Cemplas",
  "SigTech Rail", "Millennium Power", "Fuserail",
];

const userTypes = [
  {
    type: "Administration / Management",
    device: "Laptop",
    icon: "💻",
    description: "Full system access — configure, report, approve, manage.",
  },
  {
    type: "Site Supervisors",
    device: "Tablet",
    icon: "📋",
    description: "Daily reports, timesheet approvals, document access on site.",
  },
  {
    type: "Operatives",
    device: "Smartphone",
    icon: "📱",
    description: "Timesheet submission, certificates, site check-ins.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-navy">
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-blue/8 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-brand-blue/10 border border-brand-blue/30 rounded-full px-4 py-1.5 text-brand-blue-light text-sm font-medium mb-8">
            <Star className="w-3.5 h-3.5" />
            In active use since 2005 — 30+ clients across UK rail
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl mx-auto mb-6 text-balance">
            The only management system built for{" "}
            <span className="blue-gradient-text">UK rail & construction</span>{" "}
            contractors
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Five integrated modules. RISQS, ISO and NR/L2/OHS/003 compliant.
            ~£100,000 average annual saving. Full ROI in 90 days.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link href="/demo" className="btn-primary text-base px-8 py-4">
              Book a free demo
              <ChevronRight className="w-5 h-5" />
            </Link>
            <Link href="/features" className="btn-secondary text-base px-8 py-4">
              Explore features
            </Link>
          </div>

          {/* Key stats bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { value: "30+", label: "Active clients" },
              { value: "~£100k", label: "Annual saving" },
              { value: "90 days", label: "Full ROI" },
              { value: "2005", label: "In active use since" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-surface/60 border border-surface-border rounded-xl p-4"
              >
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-slate-400 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust bar / Clients ──────────────────────────────── */}
      <section className="py-12 border-y border-surface-border bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-slate-500 mb-6 uppercase tracking-widest font-medium">
            Trusted by leading UK rail & construction contractors
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            {clients.map((client) => (
              <span
                key={client}
                className="text-slate-500 hover:text-slate-300 text-sm font-medium transition-colors cursor-default"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Modules ─────────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-label mb-3">Five integrated modules</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Everything your operation needs, in one platform
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Built by Project Managers, HSQE Managers, Commercial Engineers and
              Site Supervisors — not generic software developers. Every feature
              solves a real problem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((mod) => (
              <div
                key={mod.abbr}
                className="card hover:border-brand-blue/30 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-11 h-11 bg-brand-blue/15 border border-brand-blue/20 rounded-xl flex items-center justify-center group-hover:bg-brand-blue/25 transition-colors shrink-0">
                    <mod.icon className="w-5 h-5 text-brand-blue-light" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-white">{mod.title}</h3>
                      <span className="text-xs font-mono text-brand-blue bg-brand-blue/10 px-1.5 py-0.5 rounded">
                        {mod.abbr}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {mod.description}
                </p>
                <ul className="space-y-1.5">
                  {mod.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-sm text-slate-300"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* CTA card */}
            <div className="card bg-gradient-to-br from-brand-blue/20 to-brand-blue/5 border-brand-blue/30 flex flex-col justify-center text-center p-8">
              <Zap className="w-10 h-10 text-brand-blue mx-auto mb-4" />
              <h3 className="font-bold text-white text-xl mb-2">
                ~£100,000 saved per year
              </h3>
              <p className="text-slate-300 text-sm mb-6">
                Full ROI in 90 days. Monthly subscription, no long contract.
              </p>
              <Link href="/demo" className="btn-primary justify-center">
                See it in action
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── ROI Breakdown ─────────────────────────────────────── */}
      <section className="py-24 bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label mb-3">Proven commercial impact</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                ~£100,000 average annual saving per client
              </h2>
              <p className="text-slate-400 leading-relaxed mb-8">
                IMS eliminates the hidden costs of manual processes across every
                part of your operation. Our clients see measurable savings across
                labour, documentation, compliance and project delivery — with full
                ROI typically achieved within 90 days.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/demo" className="btn-primary">
                  Book a free demo
                  <ChevronRight className="w-4 h-4" />
                </Link>
                <Link href="/pricing" className="btn-secondary">
                  View pricing
                </Link>
              </div>
            </div>

            <div className="space-y-3">
              {savings.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between py-3 px-4 bg-surface rounded-lg border border-surface-border hover:border-brand-blue/20 transition-colors"
                >
                  <span className="text-slate-300 text-sm">{item.label}</span>
                  <span className="text-brand-blue-light font-semibold text-sm">
                    {item.value}
                  </span>
                </div>
              ))}
              <div className="flex items-center justify-between py-3 px-4 bg-brand-blue/15 rounded-lg border border-brand-blue/30">
                <span className="text-white font-semibold">Total annual saving</span>
                <span className="text-brand-blue-light font-bold text-lg">~£100,000</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Compliance credentials ────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-label mb-3">Built-in compliance</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Compliance built in, not bolted on
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              IMS is structured around the standards your auditors require.
              Not a generic tool adapted for rail — built for it from day one.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              "RISQS",
              "NR/L2/OHS/003",
              "Sentinel",
              "ISO 9001",
              "ISO 14001",
              "ISO 45001",
              "Working Time Directive",
              "PTS",
              "OLEC",
              "COSS",
              "FORS",
              "NICEIC",
            ].map((standard) => (
              <div
                key={standard}
                className="bg-surface border border-surface-border rounded-lg p-4 text-center hover:border-brand-blue/30 transition-colors"
              >
                <Shield className="w-5 h-5 text-brand-blue mx-auto mb-2" />
                <span className="text-slate-300 text-xs font-semibold">
                  {standard}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── User types ─────────────────────────────────────────── */}
      <section className="py-24 bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-label mb-3">Designed for every role</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Three user types, three device types
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              IMS adapts to how your people actually work — whether they're in
              the office, on site, or in the field.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {userTypes.map((u) => (
              <div
                key={u.type}
                className="card text-center hover:border-brand-blue/30 transition-all"
              >
                <div className="text-4xl mb-4">{u.icon}</div>
                <div className="inline-block bg-brand-blue/10 text-brand-blue-light text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {u.device}
                </div>
                <h3 className="font-semibold text-white mb-2">{u.type}</h3>
                <p className="text-slate-400 text-sm">{u.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Implementation timeline ───────────────────────────── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-label mb-3">Fast implementation</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Operational in 4 weeks. Full ROI in 90 days.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                week: "Week 1",
                title: "System setup",
                desc: "System configuration tailored to your operation.",
                color: "text-blue-400",
              },
              {
                week: "Weeks 2–3",
                title: "Training",
                desc: "Team training and process automation.",
                color: "text-brand-blue-light",
              },
              {
                week: "Week 4",
                title: "Full integration",
                desc: "Live system with operational gains from day one.",
                color: "text-indigo-400",
              },
              {
                week: "90 Days",
                title: "Full ROI",
                desc: "Full optimisation and measurable profitability impact.",
                color: "text-purple-400",
              },
            ].map((phase, i) => (
              <div key={phase.week} className="card relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-blue" />
                <div className={`text-xs font-mono font-bold mb-2 ${phase.color}`}>
                  {phase.week}
                </div>
                <h3 className="font-semibold text-white mb-2">{phase.title}</h3>
                <p className="text-slate-400 text-sm">{phase.desc}</p>
                <div className="absolute bottom-4 right-4 text-4xl font-black text-slate-700/50 select-none">
                  {i + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────── */}
      <section className="py-24 bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-label mb-3">Client results</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Trusted by 30+ UK contractors
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="card hover:border-brand-blue/30 transition-all duration-300"
              >
                <Quote className="w-8 h-8 text-brand-blue/40 mb-4" />
                <p className="text-slate-200 leading-relaxed mb-6 text-[15px]">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-blue/20 border border-brand-blue/30 flex items-center justify-center text-sm font-bold text-brand-blue-light">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">
                      {t.name}
                    </div>
                    <div className="text-slate-400 text-xs">
                      {t.title}, {t.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative bg-gradient-to-br from-brand-blue/20 via-surface to-surface rounded-2xl border border-brand-blue/20 p-12 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-transparent pointer-events-none" />
            <Building2 className="w-12 h-12 text-brand-blue mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to eliminate the hidden costs?
            </h2>
            <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto">
              Book a free demo tailored to your operation. Get a proposal within
              48 hours. Monthly subscription — no long contract.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/demo" className="btn-primary text-base px-10 py-4">
                Book a free demo
                <ChevronRight className="w-5 h-5" />
              </Link>
              <Link href="/features" className="btn-secondary text-base px-8 py-4">
                Explore all modules
              </Link>
            </div>
            <p className="text-slate-500 text-sm mt-6">
              No obligation. Tailored to your sector and operation size.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
