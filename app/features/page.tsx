import type { Metadata } from "next";
import Link from "next/link";
import {
  FileText,
  Users,
  Clock,
  BarChart3,
  Package,
  CheckCircle2,
  ChevronRight,
  Shield,
  Smartphone,
  Tablet,
  Monitor,
  AlertTriangle,
  TrendingUp,
  Search,
  Bell,
  Camera,
  Wrench,
} from "lucide-react";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";

export const metadata: Metadata = {
  title: "IMS Modules & Features | Compliance, Projects & HR for Rail Contractors",
  description:
    "Document control, HR compliance, time management, project delivery and materials management — built for Network Rail and London Underground contractors.",
};

const modules = [
  {
    id: "documents",
    icon: FileText,
    abbr: "DM",
    title: "Document Control",
    tagline: "One source of truth for every controlled document",
    description:
      "Eliminate version confusion, unauthorised distribution and audit failures. IMS gives your team a single, structured repository for all controlled documents — accessible on any device, with a complete audit trail.",
    features: [
      "RISQS / ISO 9001 / 14001 / 45001 structured categories",
      "Version control with full revision history",
      "Controlled distribution — only approved versions visible",
      "Complete audit trail for every access and change",
      "Accessible on laptop, tablet and smartphone",
      "Method statements, risk assessments, drawings, policies",
      "Expiry date tracking with automated alerts",
      "Project and discipline tagging",
    ],
    benefits: ["Pass RISQS audits with confidence", "Eliminate version confusion on site", "Instant document retrieval"],
  },
  {
    id: "hr",
    icon: Users,
    abbr: "HC",
    title: "HR & Compliance",
    tagline: "Never let a certificate expire unnoticed again",
    description:
      "Comprehensive staff records, competency tracking and automated expiry alerts. IMS tracks every PTS card, Sentinel licence, OLEC and COSS certification — and tells you when they're about to expire.",
    features: [
      "Complete staff records and employment history",
      "PTS, Sentinel, OLEC, COSS competency tracking",
      "Automated expiry alerts — 90, 60, 30 day warnings",
      "Digital certificate storage — accessible on mobile",
      "Training matrix across the workforce",
      "ISO 14001 / 45001 incident management",
      "Induction records and site access control",
      "NICEIC and discipline-specific qualification tracking",
    ],
    benefits: ["Never fail a competency audit", "Eliminate manual expiry chasing", "Instant workforce compliance view"],
  },
  {
    id: "time",
    icon: Clock,
    abbr: "TM",
    title: "Time Management",
    tagline: "Accurate timesheets that protect your commercial position",
    description:
      "Digital timesheets with line-manager approval workflows. IMS enforces Working Time Directive compliance and fatigue management per NR/L2/OHS/003 — automatically.",
    features: [
      "Digital timesheet submission from smartphone",
      "Line-manager approval workflow",
      "Working Time Directive compliance monitoring",
      "Fatigue management per NR/L2/OHS/003",
      "Travel time and expense capture",
      "Agency and direct labour timesheet reconciliation",
      "Cost code allocation per project and activity",
      "Payroll-ready export formats",
    ],
    benefits: ["Eliminate timesheet disputes", "NR/L2/OHS/003 compliance built-in", "Accurate labour cost capture"],
  },
  {
    id: "projects",
    icon: BarChart3,
    abbr: "PM",
    title: "Project Delivery (WORM)",
    tagline: "Real-time project costs, not month-end surprises",
    description:
      "Works Order Report Monitoring gives you live cost vs budget visibility on every project. Generate Early Warning notices in minutes. Substantiate claims with an auditable record.",
    features: [
      "Live cost vs budget dashboard per project",
      "Works Order Report Monitoring (WORM)",
      "Early Warning notice generation",
      "Claim substantiation records",
      "Daily site reports with photo capture",
      "Workforce allocation per project",
      "Committed cost and forecast tracking",
      "Network Rail contract reference integration",
    ],
    benefits: ["Never miss an Early Warning window", "Substantiate claims with confidence", "No month-end cost surprises"],
  },
  {
    id: "materials",
    icon: Package,
    abbr: "MM",
    title: "Materials & Assets",
    tagline: "Know where every tool, plant item and consumable is",
    description:
      "Track tools, plant, test equipment and vehicles across your entire operation. FORS daily vehicle checks, calibration records and purchase order management — all in one place.",
    features: [
      "Tool and plant asset register",
      "Calibration tracking with expiry alerts",
      "FORS daily vehicle check records",
      "Asset assignment to staff and projects",
      "Consumables and stores management",
      "Purchase order creation and tracking",
      "Hire plant return scheduling",
      "Condemned and lost asset records",
    ],
    benefits: ["Eliminate tool losses and untracked hires", "FORS vehicle compliance", "Accurate project cost allocation"],
  },
];

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Monitor,
  Tablet,
  Smartphone,
};

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-brand-navy">
      <Navbar />

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-label mb-3">Platform modules</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Every module your operation needs
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10">
            Five fully integrated modules built specifically for UK rail and
            construction contractors. Not adapted — built.
          </p>
          <Link href="/demo" className="btn-primary text-base">
            Book a free demo
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* ── Module nav ──────────────────────────────────────────── */}
      <div className="sticky top-16 z-40 bg-brand-navy/95 backdrop-blur-md border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-thin">
            {modules.map((mod) => (
              <a
                key={mod.id}
                href={`#${mod.id}`}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-surface-elevated text-sm font-medium whitespace-nowrap transition-colors"
              >
                <mod.icon className="w-4 h-4 text-brand-blue" />
                {mod.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Module sections ──────────────────────────────────────── */}
      {modules.map((mod, idx) => (
        <section
          key={mod.id}
          id={mod.id}
          className={`py-24 ${idx % 2 === 1 ? "bg-surface/30" : ""}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 bg-brand-blue/15 border border-brand-blue/20 rounded-xl flex items-center justify-center">
                    <mod.icon className="w-5 h-5 text-brand-blue-light" />
                  </div>
                  <span className="text-xs font-mono font-bold text-brand-blue bg-brand-blue/10 px-2 py-1 rounded">
                    {mod.abbr}
                  </span>
                </div>
                <p className="section-label mb-2">{mod.title}</p>
                <h2 className="text-3xl font-bold text-white mb-3">
                  {mod.tagline}
                </h2>
                <p className="text-slate-400 leading-relaxed mb-8">
                  {mod.description}
                </p>

                <div className="flex flex-col gap-2 mb-8">
                  {mod.benefits.map((b) => (
                    <div key={b} className="flex items-center gap-2.5">
                      <TrendingUp className="w-4 h-4 text-brand-blue shrink-0" />
                      <span className="text-slate-200 font-medium text-sm">{b}</span>
                    </div>
                  ))}
                </div>

                <Link href="/demo" className="btn-primary">
                  See {mod.title} in action
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              <div className={`${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="card-elevated rounded-2xl p-0 overflow-hidden border border-surface-border">
                  {/* Mock module header */}
                  <div className="bg-surface px-6 py-4 border-b border-surface-border flex items-center gap-3">
                    <div className="w-8 h-8 bg-brand-blue/15 rounded-lg flex items-center justify-center">
                      <mod.icon className="w-4 h-4 text-brand-blue-light" />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">{mod.title}</div>
                      <div className="text-slate-400 text-xs">IMS Module — {mod.abbr}</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      {mod.features.map((f, fi) => (
                        <li key={f} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                          <span className="text-slate-300 text-sm">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ── Compliance grid ──────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-label mb-3">Built-in compliance</p>
          <h2 className="text-3xl font-bold text-white mb-6">
            Every standard that matters to your auditors
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "RISQS", "NR/L2/OHS/003", "Sentinel", "ISO 9001", "ISO 14001",
              "ISO 45001", "Working Time Directive", "PTS", "OLEC", "COSS",
              "FORS", "NICEIC", "Fatigue management",
            ].map((s) => (
              <div
                key={s}
                className="flex items-center gap-2 bg-surface border border-surface-border hover:border-brand-blue/30 rounded-lg px-4 py-2 transition-colors"
              >
                <Shield className="w-3.5 h-3.5 text-brand-blue" />
                <span className="text-slate-300 text-sm font-medium">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ─────────────────────────────────────────── */}
      <section className="py-24 bg-surface/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            See all five modules in one demo
          </h2>
          <p className="text-slate-400 mb-8">
            We'll configure the demo around your operation — sector, size, and
            the challenges you're facing right now.
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
