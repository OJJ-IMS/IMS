"use client";

import { useState } from "react";
import {
  Clock,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  ChevronRight,
  ChevronDown,
  Plus,
  Download,
  Search,
  Calendar,
  Timer,
  TrendingUp,
  User,
} from "lucide-react";
import Header from "@/components/dashboard/Header";
import { cn, formatDate } from "@/lib/utils";

const weekOptions = [
  "Week ending 02 May 2026",
  "Week ending 25 Apr 2026",
  "Week ending 18 Apr 2026",
];

const timesheets = [
  {
    id: "TS-0881",
    staffName: "Mike Patterson",
    jobTitle: "COSS",
    weekEnding: "2026-05-02",
    status: "SUBMITTED",
    regularHours: 40,
    overtimeHours: 6,
    travelHours: 4,
    totalHours: 50,
    project: "PN-2847",
    submittedAt: "2026-05-03",
  },
  {
    id: "TS-0882",
    staffName: "John Billings",
    jobTitle: "Site Supervisor",
    weekEnding: "2026-05-02",
    status: "APPROVED",
    regularHours: 40,
    overtimeHours: 8,
    travelHours: 6,
    totalHours: 54,
    project: "PN-3102",
    submittedAt: "2026-05-02",
  },
  {
    id: "TS-0883",
    staffName: "Sarah O'Connor",
    jobTitle: "Telecoms Engineer",
    weekEnding: "2026-05-02",
    status: "SUBMITTED",
    regularHours: 40,
    overtimeHours: 4,
    travelHours: 3,
    totalHours: 47,
    project: "PN-3215",
    submittedAt: "2026-05-03",
  },
  {
    id: "TS-0884",
    staffName: "Dave Ramsden",
    jobTitle: "Project Manager",
    weekEnding: "2026-05-02",
    status: "APPROVED",
    regularHours: 40,
    overtimeHours: 5,
    travelHours: 2,
    totalHours: 47,
    project: "PN-3301",
    submittedAt: "2026-05-01",
  },
  {
    id: "TS-0885",
    staffName: "Tom Bailey",
    jobTitle: "CAD Technician",
    weekEnding: "2026-05-02",
    status: "DRAFT",
    regularHours: 38,
    overtimeHours: 0,
    travelHours: 0,
    totalHours: 38,
    project: null,
    submittedAt: null,
  },
  {
    id: "TS-0886",
    staffName: "Mark Evans",
    jobTitle: "Electrician",
    weekEnding: "2026-05-02",
    status: "SUBMITTED",
    regularHours: 40,
    overtimeHours: 10,
    travelHours: 5,
    totalHours: 55,
    project: "PN-3301",
    submittedAt: "2026-05-03",
  },
  {
    id: "TS-0887",
    staffName: "James Carter",
    jobTitle: "Site Operative",
    weekEnding: "2026-05-02",
    status: "REJECTED",
    regularHours: 35,
    overtimeHours: 12,
    travelHours: 4,
    totalHours: 51,
    project: "PN-2847",
    submittedAt: "2026-05-02",
  },
  {
    id: "TS-0888",
    staffName: "Helen Ward",
    jobTitle: "HSQE Manager",
    weekEnding: "2026-05-02",
    status: "APPROVED",
    regularHours: 40,
    overtimeHours: 2,
    travelHours: 1,
    totalHours: 43,
    project: null,
    submittedAt: "2026-05-01",
  },
];

const statusConfig = {
  APPROVED: { label: "Approved", color: "bg-emerald-500/15 text-emerald-400", icon: CheckCircle2 },
  SUBMITTED: { label: "Submitted", color: "bg-brand-blue/15 text-brand-blue-light", icon: Clock },
  DRAFT: { label: "Draft", color: "bg-slate-500/15 text-slate-400", icon: Timer },
  REJECTED: { label: "Rejected", color: "bg-red-500/15 text-red-400", icon: XCircle },
  PAID: { label: "Paid", color: "bg-purple-500/15 text-purple-400", icon: CheckCircle2 },
};

const weekStats = [
  { label: "Timesheets submitted", value: "18", sub: "This week", color: "text-white" },
  { label: "Pending approval", value: "11", sub: "Action needed", color: "text-amber-400" },
  { label: "Total hours logged", value: "862", sub: "This week", color: "text-brand-blue-light" },
  { label: "Overtime hours", value: "94", sub: "+18% vs last week", color: "text-purple-400" },
];

const wdAlerts = [
  { name: "Mark Evans", hours: 55, limit: 48, risk: "Over WTD limit" },
  { name: "Mike Patterson", hours: 50, limit: 48, risk: "Over WTD limit" },
  { name: "James Carter", hours: 51, limit: 48, risk: "Over WTD limit" },
];

export default function TimePage() {
  const [selectedWeek, setSelectedWeek] = useState(weekOptions[0]);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  const filtered = timesheets.filter((t) => {
    const matchesSearch =
      !search || t.staffName.toLowerCase().includes(search.toLowerCase());
    const matchesStatus =
      filterStatus === "All" || t.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const pendingCount = timesheets.filter((t) => t.status === "SUBMITTED").length;

  return (
    <div>
      <Header
        title="Time Management"
        subtitle="Digital timesheets, approvals and WTD compliance — TM module"
      />

      <div className="p-6 space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {weekStats.map((s) => (
            <div key={s.label} className="stat-card">
              <div className={`text-2xl font-bold mb-0.5 ${s.color}`}>{s.value}</div>
              <div className="text-xs text-slate-400">{s.label}</div>
              <div className="text-xs text-slate-500 mt-0.5">{s.sub}</div>
            </div>
          ))}
        </div>

        {/* WTD Alerts */}
        {wdAlerts.length > 0 && (
          <div className="card border-amber-400/20 bg-amber-400/5">
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              <h3 className="font-semibold text-amber-400 text-sm">
                Working Time Directive — Hours exceeded
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {wdAlerts.map((a) => (
                <div
                  key={a.name}
                  className="flex items-center gap-2 bg-amber-400/10 border border-amber-400/20 rounded-lg px-3 py-2 text-sm"
                >
                  <User className="w-3.5 h-3.5 text-amber-400" />
                  <span className="text-amber-300 font-medium">{a.name}</span>
                  <span className="text-amber-400/70">
                    {a.hours}h / {a.limit}h limit
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Timesheet table */}
          <div className="xl:col-span-2 space-y-4">
            {/* Controls */}
            <div className="flex flex-col sm:flex-row gap-3">
              <select
                value={selectedWeek}
                onChange={(e) => setSelectedWeek(e.target.value)}
                className="input-field"
              >
                {weekOptions.map((w) => (
                  <option key={w} value={w}>{w}</option>
                ))}
              </select>
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
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="input-field w-auto"
              >
                <option value="All">All statuses</option>
                <option value="SUBMITTED">Submitted</option>
                <option value="APPROVED">Approved</option>
                <option value="DRAFT">Draft</option>
                <option value="REJECTED">Rejected</option>
              </select>
            </div>

            <div className="card p-0 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-elevated">
                    <th className="table-header text-left px-5 py-3.5">Staff member</th>
                    <th className="table-header text-right px-4 py-3.5">Reg</th>
                    <th className="table-header text-right px-4 py-3.5">OT</th>
                    <th className="table-header text-right px-4 py-3.5">Travel</th>
                    <th className="table-header text-right px-4 py-3.5">Total</th>
                    <th className="table-header text-left px-4 py-3.5">Status</th>
                    <th className="px-4 py-3.5" />
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((ts) => {
                    const status = statusConfig[ts.status as keyof typeof statusConfig];
                    const StatusIcon = status.icon;
                    const isOverWTD = ts.totalHours > 48;
                    return (
                      <tr key={ts.id} className="table-row cursor-pointer">
                        <td className="px-5 py-3.5">
                          <div className="font-medium text-white">{ts.staffName}</div>
                          <div className="text-xs text-slate-400">
                            {ts.jobTitle}
                            {ts.project && ` · ${ts.project}`}
                          </div>
                        </td>
                        <td className="px-4 py-3.5 text-right text-slate-300">
                          {ts.regularHours}h
                        </td>
                        <td className="px-4 py-3.5 text-right text-slate-300">
                          {ts.overtimeHours > 0 ? (
                            <span className="text-purple-400">{ts.overtimeHours}h</span>
                          ) : (
                            <span className="text-slate-600">—</span>
                          )}
                        </td>
                        <td className="px-4 py-3.5 text-right text-slate-400">
                          {ts.travelHours > 0 ? `${ts.travelHours}h` : "—"}
                        </td>
                        <td className="px-4 py-3.5 text-right">
                          <span
                            className={cn(
                              "font-semibold",
                              isOverWTD ? "text-amber-400" : "text-white"
                            )}
                          >
                            {ts.totalHours}h
                          </span>
                          {isOverWTD && (
                            <AlertTriangle className="w-3 h-3 text-amber-400 inline ml-1" />
                          )}
                        </td>
                        <td className="px-4 py-3.5">
                          <span className={`status-badge ${status.color}`}>
                            <StatusIcon className="w-3 h-3" />
                            {status.label}
                          </span>
                        </td>
                        <td className="px-4 py-3.5">
                          {ts.status === "SUBMITTED" && (
                            <div className="flex gap-1">
                              <button className="text-xs bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-400 px-2.5 py-1 rounded-lg transition-colors font-medium">
                                Approve
                              </button>
                              <button className="text-xs bg-red-500/10 hover:bg-red-500/20 text-red-400 px-2.5 py-1 rounded-lg transition-colors font-medium">
                                Reject
                              </button>
                            </div>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div className="px-5 py-3 border-t border-surface-border flex items-center justify-between">
                <span className="text-xs text-slate-500">
                  {pendingCount} timesheets pending approval
                </span>
                <button className="btn-ghost text-xs gap-1.5">
                  <Download className="w-3.5 h-3.5" />
                  Export payroll
                </button>
              </div>
            </div>
          </div>

          {/* Hours summary panel */}
          <div className="space-y-4">
            <div className="card">
              <h3 className="font-semibold text-white text-sm mb-4">
                Hours summary — w/e 02 May
              </h3>
              <div className="space-y-3">
                {[
                  { label: "Regular hours", value: "313h", color: "text-slate-300" },
                  { label: "Overtime hours", value: "47h", color: "text-purple-400" },
                  { label: "Travel hours", value: "25h", color: "text-slate-400" },
                  { label: "Total billable", value: "385h", color: "text-brand-blue-light", bold: true },
                ].map((row) => (
                  <div key={row.label} className="flex justify-between items-center py-2 border-t border-surface-border first:border-0 first:pt-0">
                    <span className="text-sm text-slate-400">{row.label}</span>
                    <span className={cn("text-sm font-semibold", row.color, row.bold && "text-base font-bold")}>
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card">
              <h3 className="font-semibold text-white text-sm mb-4">
                Approval status
              </h3>
              <div className="space-y-2.5">
                {[
                  { status: "Approved", count: 3, color: "bg-emerald-500" },
                  { status: "Pending review", count: 3, color: "bg-brand-blue" },
                  { status: "Draft", count: 1, color: "bg-slate-500" },
                  { status: "Rejected", count: 1, color: "bg-red-500" },
                ].map((row) => {
                  const pct = Math.round((row.count / timesheets.length) * 100);
                  return (
                    <div key={row.status}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-slate-400">{row.status}</span>
                        <span className="text-slate-400">{row.count}</span>
                      </div>
                      <div className="h-1.5 bg-surface-elevated rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${row.color}`}
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
