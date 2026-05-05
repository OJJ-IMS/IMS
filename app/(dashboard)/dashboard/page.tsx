import {
  FileText,
  Users,
  Clock,
  BarChart3,
  Package,
  AlertTriangle,
  CheckCircle2,
  TrendingUp,
  TrendingDown,
  ArrowRight,
  Calendar,
  AlertCircle,
  Timer,
} from "lucide-react";
import Link from "next/link";
import Header from "@/components/dashboard/Header";
import { formatCurrency } from "@/lib/utils";

const stats = [
  {
    label: "Active documents",
    value: "247",
    change: "+12 this month",
    up: true,
    icon: FileText,
    href: "/dashboard/documents",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
  {
    label: "Staff on record",
    value: "84",
    change: "3 expiring soon",
    up: false,
    icon: Users,
    href: "/dashboard/hr",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    alert: true,
  },
  {
    label: "Timesheets pending",
    value: "18",
    change: "Awaiting approval",
    up: false,
    icon: Clock,
    href: "/dashboard/time",
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    alert: true,
  },
  {
    label: "Active projects",
    value: "12",
    change: "2 over budget",
    up: false,
    icon: BarChart3,
    href: "/dashboard/projects",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    alert: true,
  },
  {
    label: "Assets tracked",
    value: "163",
    change: "4 calibration due",
    up: false,
    icon: Package,
    href: "/dashboard/materials",
    color: "text-orange-400",
    bg: "bg-orange-400/10",
    alert: true,
  },
];

const recentAlerts = [
  {
    type: "warning",
    module: "HR",
    message: "John Billings — PTS certificate expires in 18 days",
    time: "2 hours ago",
  },
  {
    type: "warning",
    module: "HR",
    message: "Sarah O'Connor — Sentinel licence expires in 24 days",
    time: "2 hours ago",
  },
  {
    type: "error",
    module: "Projects",
    message: "Project PN-2847 (M25 Telecoms) — budget overspend: £8,200",
    time: "4 hours ago",
  },
  {
    type: "info",
    module: "Documents",
    message: "MS-0041 Method Statement updated to Rev C — awaiting approval",
    time: "Yesterday",
  },
  {
    type: "warning",
    module: "Assets",
    message: "Fluke 435-II (ASS-089) — calibration due in 12 days",
    time: "Yesterday",
  },
  {
    type: "info",
    module: "Time",
    message: "18 timesheets submitted for week ending 02 May",
    time: "2 days ago",
  },
];

const activeProjects = [
  {
    name: "M25 Telecoms Upgrade",
    ref: "PN-2847",
    client: "National Highways",
    budget: 420000,
    actual: 428200,
    forecast: 445000,
    status: "over",
  },
  {
    name: "LUL Bond Street Signalling",
    ref: "PN-3102",
    client: "London Underground",
    budget: 280000,
    actual: 196000,
    forecast: 271000,
    status: "on",
  },
  {
    name: "WCML Fibre Backhaul",
    ref: "PN-3215",
    client: "Network Rail",
    budget: 185000,
    actual: 92500,
    forecast: 180000,
    status: "on",
  },
  {
    name: "Gatwick Station M&E",
    ref: "PN-3301",
    client: "Gatwick Airport",
    budget: 340000,
    actual: 310000,
    forecast: 338000,
    status: "on",
  },
];

const expiringCerts = [
  { name: "John Billings", cert: "PTS", days: 18, status: "warning" },
  { name: "Sarah O'Connor", cert: "Sentinel", days: 24, status: "warning" },
  { name: "Mike Patterson", cert: "COSS", days: 7, status: "critical" },
  { name: "Dave Ramsden", cert: "First Aid", days: 31, status: "info" },
];

export default function DashboardPage() {
  return (
    <div>
      <Header
        title="Dashboard"
        subtitle="IMS Platform Overview"
      />

      <div className="p-6 space-y-6">
        {/* ── Module stat cards ──────────────────────────────── */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {stats.map((stat) => (
            <Link
              key={stat.label}
              href={stat.href}
              className="stat-card group relative"
            >
              {stat.alert && (
                <span className="absolute top-3 right-3 w-2 h-2 rounded-full bg-amber-400" />
              )}
              <div className={`w-9 h-9 ${stat.bg} rounded-lg flex items-center justify-center mb-3`}>
                <stat.icon className={`w-4.5 h-4.5 ${stat.color}`} style={{ width: 18, height: 18 }} />
              </div>
              <div className="text-2xl font-bold text-white mb-0.5">{stat.value}</div>
              <div className="text-xs text-slate-400 mb-1">{stat.label}</div>
              <div className={`text-xs font-medium flex items-center gap-1 ${stat.alert ? "text-amber-400" : "text-emerald-400"}`}>
                {stat.alert ? (
                  <AlertTriangle className="w-3 h-3" />
                ) : (
                  <TrendingUp className="w-3 h-3" />
                )}
                {stat.change}
              </div>
              <ArrowRight className="absolute bottom-4 right-4 w-4 h-4 text-slate-600 group-hover:text-slate-400 transition-colors" />
            </Link>
          ))}
        </div>

        {/* ── Main content grid ──────────────────────────────── */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Alerts feed */}
          <div className="xl:col-span-2 card">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-semibold text-white">System alerts</h2>
              <span className="text-xs text-slate-500 bg-surface-elevated px-2 py-1 rounded-full">
                {recentAlerts.length} active
              </span>
            </div>
            <div className="space-y-3">
              {recentAlerts.map((alert, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 py-3 border-t border-surface-border first:border-t-0 first:pt-0"
                >
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                      alert.type === "error"
                        ? "bg-red-500/15"
                        : alert.type === "warning"
                        ? "bg-amber-400/15"
                        : "bg-brand-blue/15"
                    }`}
                  >
                    {alert.type === "error" ? (
                      <AlertCircle className="w-4 h-4 text-red-400" />
                    ) : alert.type === "warning" ? (
                      <AlertTriangle className="w-4 h-4 text-amber-400" />
                    ) : (
                      <CheckCircle2 className="w-4 h-4 text-brand-blue" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                        {alert.module}
                      </span>
                      <span className="text-slate-600 text-xs">·</span>
                      <span className="text-xs text-slate-500">{alert.time}</span>
                    </div>
                    <p className="text-sm text-slate-300">{alert.message}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Expiring certificates */}
          <div className="card">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-semibold text-white">Expiring certs</h2>
              <Link
                href="/dashboard/hr"
                className="text-xs text-brand-blue-light hover:text-white transition-colors"
              >
                View all →
              </Link>
            </div>
            <div className="space-y-3">
              {expiringCerts.map((cert) => (
                <div
                  key={cert.name + cert.cert}
                  className="flex items-center justify-between py-2.5 border-t border-surface-border first:border-t-0 first:pt-0"
                >
                  <div>
                    <div className="text-sm font-medium text-white">{cert.name}</div>
                    <div className="text-xs text-slate-400">{cert.cert}</div>
                  </div>
                  <div
                    className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                      cert.status === "critical"
                        ? "bg-red-500/15 text-red-400"
                        : cert.status === "warning"
                        ? "bg-amber-400/15 text-amber-400"
                        : "bg-brand-blue/15 text-brand-blue-light"
                    }`}
                  >
                    {cert.days}d
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Projects table ─────────────────────────────────── */}
        <div className="card">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-semibold text-white">Active projects — cost vs budget</h2>
            <Link
              href="/dashboard/projects"
              className="text-xs text-brand-blue-light hover:text-white transition-colors"
            >
              View all projects →
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th className="table-header text-left pb-3 pr-4">Project</th>
                  <th className="table-header text-left pb-3 pr-4">Ref</th>
                  <th className="table-header text-right pb-3 pr-4">Budget</th>
                  <th className="table-header text-right pb-3 pr-4">Actual</th>
                  <th className="table-header text-right pb-3 pr-4">Forecast</th>
                  <th className="table-header text-left pb-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {activeProjects.map((proj) => {
                  const variance = proj.forecast - proj.budget;
                  const isOver = variance > 0;
                  return (
                    <tr key={proj.ref} className="table-row">
                      <td className="py-3 pr-4">
                        <div className="font-medium text-white">{proj.name}</div>
                        <div className="text-xs text-slate-400">{proj.client}</div>
                      </td>
                      <td className="py-3 pr-4 text-slate-400 font-mono text-xs">{proj.ref}</td>
                      <td className="py-3 pr-4 text-right text-slate-300">
                        {formatCurrency(proj.budget)}
                      </td>
                      <td className="py-3 pr-4 text-right text-slate-300">
                        {formatCurrency(proj.actual)}
                      </td>
                      <td className={`py-3 pr-4 text-right font-semibold ${isOver ? "text-red-400" : "text-emerald-400"}`}>
                        {formatCurrency(proj.forecast)}
                      </td>
                      <td className="py-3">
                        <span
                          className={`status-badge ${
                            isOver
                              ? "bg-red-500/15 text-red-400"
                              : "bg-emerald-500/15 text-emerald-400"
                          }`}
                        >
                          {isOver ? (
                            <TrendingDown className="w-3 h-3" />
                          ) : (
                            <TrendingUp className="w-3 h-3" />
                          )}
                          {isOver
                            ? `+${formatCurrency(variance)} over`
                            : "On track"}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
