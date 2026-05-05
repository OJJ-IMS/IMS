"use client";

import { useState } from "react";
import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle2,
  Plus,
  Search,
  ChevronRight,
  FileText,
  Camera,
  Clock,
  AlertCircle,
  PoundSterling,
} from "lucide-react";
import Header from "@/components/dashboard/Header";
import { cn, formatCurrency, formatDate } from "@/lib/utils";

const projects = [
  {
    id: "PN-2847",
    name: "M25 Jct 28 Telecoms Upgrade",
    client: "National Highways",
    contractRef: "NH-2847-TC",
    location: "Essex",
    status: "ACTIVE",
    startDate: "2026-01-15",
    endDate: "2026-07-31",
    budget: 420000,
    committedCost: 315000,
    actualCost: 428200,
    forecastCost: 445000,
    workforce: 14,
    earlyWarnings: 2,
    siteReports: 48,
  },
  {
    id: "PN-3102",
    name: "LUL Bond Street Signalling Works",
    client: "London Underground",
    contractRef: "LUL-SIG-3102",
    location: "London W1",
    status: "ACTIVE",
    startDate: "2025-11-01",
    endDate: "2026-08-15",
    budget: 280000,
    committedCost: 210000,
    actualCost: 196000,
    forecastCost: 271000,
    workforce: 8,
    earlyWarnings: 0,
    siteReports: 92,
  },
  {
    id: "PN-3215",
    name: "WCML Fibre Backhaul — Phase 2",
    client: "Network Rail",
    contractRef: "NR/LNW/3215",
    location: "Rugeley to Stafford",
    status: "ACTIVE",
    startDate: "2026-02-01",
    endDate: "2026-09-30",
    budget: 185000,
    committedCost: 92500,
    actualCost: 87400,
    forecastCost: 180000,
    workforce: 6,
    earlyWarnings: 1,
    siteReports: 31,
  },
  {
    id: "PN-3301",
    name: "Gatwick Station M&E Refurbishment",
    client: "Gatwick Airport Ltd",
    contractRef: "GAL-ME-3301",
    location: "Gatwick, RH6",
    status: "ACTIVE",
    startDate: "2026-03-10",
    endDate: "2026-10-31",
    budget: 340000,
    committedCost: 255000,
    actualCost: 310000,
    forecastCost: 338000,
    workforce: 11,
    earlyWarnings: 0,
    siteReports: 26,
  },
  {
    id: "PN-3045",
    name: "Southern Rail Station CCTV Upgrade",
    client: "Southern Rail",
    contractRef: "SR-CCTV-3045",
    location: "Various — Sussex",
    status: "COMPLETE",
    startDate: "2025-06-01",
    endDate: "2026-01-31",
    budget: 95000,
    committedCost: 95000,
    actualCost: 91200,
    forecastCost: 91200,
    workforce: 0,
    earlyWarnings: 0,
    siteReports: 142,
  },
];

const earlyWarnings = [
  {
    id: "EW-0041",
    project: "PN-2847",
    projectName: "M25 Jct 28",
    title: "Ground conditions worse than anticipated — additional excavation required",
    status: "OPEN",
    raisedDate: "2026-04-22",
    impact: "£14,200 additional cost",
  },
  {
    id: "EW-0042",
    project: "PN-2847",
    projectName: "M25 Jct 28",
    title: "Client-supplied cable tray delayed by 3 weeks",
    status: "UNDER_REVIEW",
    raisedDate: "2026-04-29",
    impact: "Programme delay — 2 weeks",
  },
  {
    id: "EW-0043",
    project: "PN-3215",
    projectName: "WCML Fibre Phase 2",
    title: "Access restriction at P58 — possession overrun risk",
    status: "AGREED",
    raisedDate: "2026-03-18",
    impact: "£3,800 additional possession cost",
  },
];

const statusConfig = {
  ACTIVE: { label: "Active", color: "bg-emerald-500/15 text-emerald-400" },
  MOBILISING: { label: "Mobilising", color: "bg-brand-blue/15 text-brand-blue-light" },
  COMPLETE: { label: "Complete", color: "bg-slate-500/15 text-slate-400" },
  SUSPENDED: { label: "Suspended", color: "bg-amber-400/15 text-amber-400" },
  TENDERING: { label: "Tendering", color: "bg-purple-400/15 text-purple-400" },
};

const ewStatusConfig = {
  OPEN: { label: "Open", color: "bg-red-500/15 text-red-400" },
  UNDER_REVIEW: { label: "Under review", color: "bg-amber-400/15 text-amber-400" },
  AGREED: { label: "Agreed", color: "bg-emerald-500/15 text-emerald-400" },
  CLOSED: { label: "Closed", color: "bg-slate-500/15 text-slate-400" },
};

export default function ProjectsPage() {
  const [search, setSearch] = useState("");
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [filterStatus, setFilterStatus] = useState("ACTIVE");

  const filtered = projects.filter((p) => {
    const matchesSearch =
      !search ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.id.toLowerCase().includes(search.toLowerCase());
    const matchesStatus =
      filterStatus === "All" || p.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const totalBudget = projects.filter(p => p.status === "ACTIVE").reduce((s, p) => s + p.budget, 0);
  const totalForecast = projects.filter(p => p.status === "ACTIVE").reduce((s, p) => s + p.forecastCost, 0);
  const overBudgetCount = projects.filter(p => p.status === "ACTIVE" && p.forecastCost > p.budget).length;
  const openEWs = earlyWarnings.filter(e => e.status === "OPEN" || e.status === "UNDER_REVIEW").length;

  const proj = selectedProject;
  const variance = proj.forecastCost - proj.budget;
  const isOver = variance > 0;
  const spendPct = Math.round((proj.actualCost / proj.budget) * 100);

  return (
    <div>
      <Header
        title="Project Delivery"
        subtitle="WORM — Works Order Report Monitoring — PM module"
      />

      <div className="p-6 space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="stat-card">
            <div className="text-2xl font-bold text-white mb-0.5">{projects.filter(p => p.status === "ACTIVE").length}</div>
            <div className="text-xs text-slate-400">Active projects</div>
          </div>
          <div className="stat-card">
            <div className="text-2xl font-bold text-brand-blue-light mb-0.5">{formatCurrency(totalBudget)}</div>
            <div className="text-xs text-slate-400">Total contract value</div>
          </div>
          <div className="stat-card">
            <div className={cn("text-2xl font-bold mb-0.5", totalForecast > totalBudget ? "text-amber-400" : "text-emerald-400")}>
              {formatCurrency(totalForecast)}
            </div>
            <div className="text-xs text-slate-400">Total forecast cost</div>
          </div>
          <div className="stat-card">
            <div className="text-2xl font-bold text-red-400 mb-0.5">{openEWs}</div>
            <div className="text-xs text-slate-400">Open early warnings</div>
            <div className="text-xs text-amber-400 mt-0.5 flex items-center gap-1">
              <AlertTriangle className="w-3 h-3" />
              {overBudgetCount} projects over budget
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Project list */}
          <div className="space-y-3">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="input-field pl-9 text-sm"
                />
              </div>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="input-field w-auto text-sm"
              >
                <option value="All">All</option>
                <option value="ACTIVE">Active</option>
                <option value="COMPLETE">Complete</option>
              </select>
            </div>

            {filtered.map((p) => {
              const isOverBudget = p.forecastCost > p.budget;
              const isSelected = p.id === selectedProject.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setSelectedProject(p)}
                  className={cn(
                    "w-full text-left card hover:border-brand-blue/30 transition-all",
                    isSelected && "border-brand-blue/40 bg-brand-blue/5"
                  )}
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="font-medium text-white text-sm leading-tight">
                      {p.name}
                    </div>
                    <span className={`status-badge ${statusConfig[p.status as keyof typeof statusConfig]?.color ?? ""} shrink-0 text-xs`}>
                      {statusConfig[p.status as keyof typeof statusConfig]?.label}
                    </span>
                  </div>
                  <div className="text-xs text-slate-400 mb-2">
                    {p.id} · {p.client}
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Budget: {formatCurrency(p.budget)}</span>
                    <span className={cn("font-semibold", isOverBudget ? "text-red-400" : "text-emerald-400")}>
                      {isOverBudget ? "+" : ""}
                      {formatCurrency(p.forecastCost - p.budget)}
                    </span>
                  </div>
                  {/* Mini progress bar */}
                  <div className="mt-2 h-1 bg-surface-elevated rounded-full overflow-hidden">
                    <div
                      className={cn("h-full rounded-full", isOverBudget ? "bg-red-500" : "bg-emerald-500")}
                      style={{ width: `${Math.min(100, Math.round((p.actualCost / p.budget) * 100))}%` }}
                    />
                  </div>
                </button>
              );
            })}

            <button className="btn-secondary w-full justify-center gap-2 text-sm">
              <Plus className="w-4 h-4" />
              New project
            </button>
          </div>

          {/* Project detail */}
          <div className="xl:col-span-2 space-y-4">
            {/* WORM cost breakdown */}
            <div className="card">
              <div className="flex items-start justify-between mb-5">
                <div>
                  <h2 className="font-bold text-white text-lg">{proj.name}</h2>
                  <div className="text-sm text-slate-400 mt-0.5">
                    {proj.id} · {proj.client} · {proj.contractRef}
                  </div>
                </div>
                <span className={`status-badge ${statusConfig[proj.status as keyof typeof statusConfig]?.color ?? ""}`}>
                  {statusConfig[proj.status as keyof typeof statusConfig]?.label}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
                {[
                  { label: "Budget", value: formatCurrency(proj.budget), color: "text-slate-300" },
                  { label: "Committed", value: formatCurrency(proj.committedCost), color: "text-brand-blue-light" },
                  { label: "Actual cost", value: formatCurrency(proj.actualCost), color: "text-white" },
                  {
                    label: "Forecast",
                    value: formatCurrency(proj.forecastCost),
                    color: isOver ? "text-red-400" : "text-emerald-400",
                  },
                ].map((item) => (
                  <div key={item.label} className="bg-surface-elevated rounded-xl p-3 border border-surface-border">
                    <div className={`text-lg font-bold ${item.color}`}>{item.value}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{item.label}</div>
                  </div>
                ))}
              </div>

              {/* Variance callout */}
              <div
                className={cn(
                  "flex items-center gap-3 p-3 rounded-xl border",
                  isOver
                    ? "bg-red-500/10 border-red-500/20"
                    : "bg-emerald-500/10 border-emerald-500/20"
                )}
              >
                {isOver ? (
                  <TrendingDown className="w-5 h-5 text-red-400 shrink-0" />
                ) : (
                  <TrendingUp className="w-5 h-5 text-emerald-400 shrink-0" />
                )}
                <div>
                  <span className={cn("font-semibold text-sm", isOver ? "text-red-400" : "text-emerald-400")}>
                    {isOver ? "Over budget: " : "Under budget: "}
                    {formatCurrency(Math.abs(variance))}
                  </span>
                  <span className="text-slate-400 text-xs ml-2">
                    ({Math.round(Math.abs(variance / proj.budget) * 100)}% variance)
                  </span>
                </div>
              </div>

              {/* Spend bar */}
              <div className="mt-4">
                <div className="flex justify-between text-xs text-slate-400 mb-1.5">
                  <span>Spend to date ({spendPct}% of budget)</span>
                  <span>{formatCurrency(proj.actualCost)}</span>
                </div>
                <div className="h-2 bg-surface-elevated rounded-full overflow-hidden">
                  <div
                    className={cn("h-full rounded-full transition-all", isOver ? "bg-red-500" : "bg-brand-blue")}
                    style={{ width: `${Math.min(100, spendPct)}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Project metrics */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: Clock, label: "Site reports", value: proj.siteReports, color: "text-brand-blue-light" },
                { icon: AlertCircle, label: "Early warnings", value: proj.earlyWarnings, color: proj.earlyWarnings > 0 ? "text-amber-400" : "text-emerald-400" },
                { icon: AlertTriangle, label: "Workforce", value: `${proj.workforce} staff`, color: "text-slate-300" },
              ].map((item) => (
                <div key={item.label} className="card text-center">
                  <item.icon className={`w-6 h-6 ${item.color} mx-auto mb-2`} />
                  <div className={`text-xl font-bold ${item.color}`}>{item.value}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{item.label}</div>
                </div>
              ))}
            </div>

            {/* Early Warnings */}
            <div className="card">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-white text-sm">Early Warning notices</h3>
                <button className="btn-primary text-xs px-3 py-1.5 gap-1.5">
                  <Plus className="w-3.5 h-3.5" />
                  Raise EW
                </button>
              </div>
              <div className="space-y-3">
                {earlyWarnings.filter(e => e.project === proj.id || true).slice(0, 3).map((ew) => (
                  <div
                    key={ew.id}
                    className="flex items-start gap-3 py-3 border-t border-surface-border first:border-0 first:pt-0"
                  >
                    <span
                      className={`status-badge shrink-0 mt-0.5 ${ewStatusConfig[ew.status as keyof typeof ewStatusConfig]?.color ?? ""}`}
                    >
                      {ew.id}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm text-white font-medium leading-tight mb-1">
                        {ew.title}
                      </div>
                      <div className="text-xs text-slate-400">
                        {ew.projectName} · Raised {formatDate(ew.raisedDate)} · {ew.impact}
                      </div>
                    </div>
                    <span className={`status-badge shrink-0 ${ewStatusConfig[ew.status as keyof typeof ewStatusConfig]?.color ?? ""}`}>
                      {ewStatusConfig[ew.status as keyof typeof ewStatusConfig]?.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
