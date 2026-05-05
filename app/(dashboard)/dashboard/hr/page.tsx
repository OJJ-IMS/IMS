"use client";

import { useState } from "react";
import {
  Users,
  Search,
  Plus,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Clock,
  ChevronRight,
  Award,
  Phone,
  Mail,
  Filter,
  Download,
} from "lucide-react";
import Header from "@/components/dashboard/Header";
import { cn, getDaysUntilExpiry, formatDate } from "@/lib/utils";

const staff = [
  {
    id: "S001",
    name: "Mike Patterson",
    jobTitle: "COSS",
    department: "Operations",
    isActive: true,
    competencies: [
      { type: "PTS", expiry: "2027-06-15", status: "valid" },
      { type: "COSS", expiry: "2026-05-12", status: "critical" },
      { type: "First Aid", expiry: "2026-08-20", status: "valid" },
    ],
  },
  {
    id: "S002",
    name: "John Billings",
    jobTitle: "Site Supervisor",
    department: "Rail",
    isActive: true,
    competencies: [
      { type: "PTS", expiry: "2026-05-23", status: "warning" },
      { type: "Sentinel", expiry: "2027-02-10", status: "valid" },
      { type: "CSCS", expiry: "2028-01-05", status: "valid" },
    ],
  },
  {
    id: "S003",
    name: "Sarah O'Connor",
    jobTitle: "Telecoms Engineer",
    department: "Telecoms",
    isActive: true,
    competencies: [
      { type: "PTS", expiry: "2027-11-30", status: "valid" },
      { type: "Sentinel", expiry: "2026-05-29", status: "warning" },
      { type: "OLEC", expiry: "2027-03-14", status: "valid" },
    ],
  },
  {
    id: "S004",
    name: "Dave Ramsden",
    jobTitle: "Project Manager",
    department: "Management",
    isActive: true,
    competencies: [
      { type: "PTS", expiry: "2028-04-01", status: "valid" },
      { type: "First Aid", expiry: "2026-06-05", status: "warning" },
      { type: "IOSH", expiry: "2027-09-22", status: "valid" },
    ],
  },
  {
    id: "S005",
    name: "Tom Bailey",
    jobTitle: "CAD Technician",
    department: "Design",
    isActive: true,
    competencies: [
      { type: "CSCS", expiry: "2027-07-18", status: "valid" },
    ],
  },
  {
    id: "S006",
    name: "Helen Ward",
    jobTitle: "HSQE Manager",
    department: "HSQE",
    isActive: true,
    competencies: [
      { type: "NEBOSH", expiry: "2028-02-28", status: "valid" },
      { type: "ISO Internal Auditor", expiry: "2027-05-10", status: "valid" },
      { type: "First Aid", expiry: "2028-03-01", status: "valid" },
    ],
  },
  {
    id: "S007",
    name: "James Carter",
    jobTitle: "Site Operative",
    department: "Rail",
    isActive: true,
    competencies: [
      { type: "PTS", expiry: "2026-09-14", status: "valid" },
      { type: "Manual Handling", expiry: "2027-01-20", status: "valid" },
    ],
  },
  {
    id: "S008",
    name: "Mark Evans",
    jobTitle: "Electrician",
    department: "M&E",
    isActive: true,
    competencies: [
      { type: "NICEIC", expiry: "2027-12-31", status: "valid" },
      { type: "ECS", expiry: "2027-08-10", status: "valid" },
      { type: "PTS", expiry: "2026-07-05", status: "valid" },
    ],
  },
];

const certStatusConfig = {
  valid: { label: "Valid", color: "bg-emerald-500/15 text-emerald-400", icon: CheckCircle2 },
  warning: { label: "Expiring soon", color: "bg-amber-400/15 text-amber-400", icon: AlertTriangle },
  critical: { label: "Urgent", color: "bg-red-500/15 text-red-400", icon: XCircle },
  expired: { label: "Expired", color: "bg-red-700/15 text-red-500", icon: XCircle },
};

const overallStats = [
  { label: "Total staff", value: "84", sub: "8 shown", color: "text-white" },
  { label: "Fully compliant", value: "71", sub: "84%", color: "text-emerald-400" },
  { label: "Expiring ≤30 days", value: "9", sub: "Action needed", color: "text-amber-400" },
  { label: "Expired", value: "4", sub: "Immediate action", color: "text-red-400" },
];

const upcomingExpiries = [
  { name: "Mike Patterson", cert: "COSS", days: 7, urgent: true },
  { name: "John Billings", cert: "PTS", days: 18, urgent: false },
  { name: "Sarah O'Connor", cert: "Sentinel", days: 24, urgent: false },
  { name: "Dave Ramsden", cert: "First Aid", days: 31, urgent: false },
  { name: "James Carter", cert: "PTS", days: 132, urgent: false },
];

export default function HRPage() {
  const [search, setSearch] = useState("");
  const [filterDept, setFilterDept] = useState("All");

  const departments = ["All", ...Array.from(new Set(staff.map((s) => s.department)))];

  const filtered = staff.filter((s) => {
    const matchesSearch =
      !search || s.name.toLowerCase().includes(search.toLowerCase());
    const matchesDept = filterDept === "All" || s.department === filterDept;
    return matchesSearch && matchesDept;
  });

  return (
    <div>
      <Header
        title="HR & Compliance"
        subtitle="Staff records, competencies and certification tracking — HC module"
      />

      <div className="p-6 space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {overallStats.map((s) => (
            <div key={s.label} className="stat-card">
              <div className={`text-2xl font-bold mb-0.5 ${s.color}`}>{s.value}</div>
              <div className="text-xs text-slate-400">{s.label}</div>
              <div className="text-xs text-slate-500 mt-0.5">{s.sub}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Staff list */}
          <div className="xl:col-span-2 space-y-4">
            {/* Controls */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                  type="text"
                  placeholder="Search staff..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="input-field pl-9"
                />
              </div>
              <select
                value={filterDept}
                onChange={(e) => setFilterDept(e.target.value)}
                className="input-field w-auto"
              >
                {departments.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
              <button className="btn-primary gap-2 text-sm shrink-0">
                <Plus className="w-4 h-4" />
                Add staff
              </button>
            </div>

            {/* Staff cards */}
            <div className="space-y-3">
              {filtered.map((member) => {
                const criticalCerts = member.competencies.filter(
                  (c) => c.status === "critical" || c.status === "expired"
                );
                const warningCerts = member.competencies.filter(
                  (c) => c.status === "warning"
                );

                return (
                  <div
                    key={member.id}
                    className="card hover:border-brand-blue/30 transition-all cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-brand-blue/20 border border-brand-blue/30 flex items-center justify-center text-sm font-bold text-brand-blue-light shrink-0">
                        {member.name.split(" ").map((n) => n[0]).join("")}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <div className="font-semibold text-white">
                              {member.name}
                            </div>
                            <div className="text-xs text-slate-400">
                              {member.jobTitle} · {member.department}
                            </div>
                          </div>
                          {criticalCerts.length > 0 && (
                            <span className="status-badge bg-red-500/15 text-red-400 shrink-0">
                              <AlertTriangle className="w-3 h-3" />
                              Urgent
                            </span>
                          )}
                        </div>

                        <div className="flex flex-wrap gap-2 mt-3">
                          {member.competencies.map((cert) => {
                            const cfg = certStatusConfig[cert.status as keyof typeof certStatusConfig];
                            const Icon = cfg.icon;
                            const days = getDaysUntilExpiry(cert.expiry);
                            return (
                              <div
                                key={cert.type}
                                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-xs font-medium ${
                                  cert.status === "valid"
                                    ? "border-surface-border bg-surface-elevated text-slate-300"
                                    : cert.status === "warning"
                                    ? "border-amber-400/30 bg-amber-400/10 text-amber-400"
                                    : "border-red-500/30 bg-red-500/10 text-red-400"
                                }`}
                              >
                                <Icon className="w-3 h-3" />
                                {cert.type}
                                {cert.status !== "valid" && (
                                  <span className="text-xs opacity-75">
                                    · {days}d
                                  </span>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-600 shrink-0 mt-1" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Expiry sidebar */}
          <div className="space-y-4">
            <div className="card">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-white text-sm">
                  Upcoming expiries
                </h3>
                <button className="btn-ghost text-xs px-2 py-1">
                  <Download className="w-3.5 h-3.5" />
                  Export
                </button>
              </div>
              <div className="space-y-3">
                {upcomingExpiries.map((item) => (
                  <div
                    key={item.name + item.cert}
                    className="flex items-center justify-between py-2.5 border-t border-surface-border first:border-0 first:pt-0"
                  >
                    <div>
                      <div className="text-sm font-medium text-white">{item.name}</div>
                      <div className="text-xs text-slate-400 flex items-center gap-1">
                        <Award className="w-3 h-3" />
                        {item.cert}
                      </div>
                    </div>
                    <span
                      className={cn(
                        "px-2.5 py-1 rounded-full text-xs font-bold",
                        item.days <= 14
                          ? "bg-red-500/15 text-red-400"
                          : item.days <= 30
                          ? "bg-amber-400/15 text-amber-400"
                          : "bg-brand-blue/15 text-brand-blue-light"
                      )}
                    >
                      {item.days}d
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Compliance matrix summary */}
            <div className="card">
              <h3 className="font-semibold text-white text-sm mb-4">
                Compliance matrix
              </h3>
              <div className="space-y-2.5">
                {[
                  { cert: "PTS", valid: 68, total: 72 },
                  { cert: "Sentinel", valid: 45, total: 48 },
                  { cert: "COSS", valid: 12, total: 14 },
                  { cert: "First Aid", valid: 28, total: 32 },
                  { cert: "OLEC", valid: 19, total: 21 },
                ].map((row) => {
                  const pct = Math.round((row.valid / row.total) * 100);
                  return (
                    <div key={row.cert}>
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="text-slate-300 font-medium">{row.cert}</span>
                        <span className="text-slate-400">{row.valid}/{row.total}</span>
                      </div>
                      <div className="h-1.5 bg-surface-elevated rounded-full overflow-hidden">
                        <div
                          className={cn(
                            "h-full rounded-full transition-all",
                            pct >= 95 ? "bg-emerald-500" : pct >= 85 ? "bg-amber-400" : "bg-red-500"
                          )}
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
