"use client";

import { useState } from "react";
import {
  FileText,
  Upload,
  Search,
  Filter,
  Download,
  Eye,
  MoreHorizontal,
  CheckCircle2,
  Clock,
  AlertTriangle,
  Archive,
  Plus,
  ChevronDown,
  Tag,
} from "lucide-react";
import Header from "@/components/dashboard/Header";
import { formatDate, cn } from "@/lib/utils";

const categories = [
  "All",
  "Drawings",
  "Method Statements",
  "Risk Assessments",
  "Policies",
  "Procedures",
  "Certificates",
  "Forms",
];

const documents = [
  {
    id: "DOC-001",
    title: "RAMS — M25 Jct 28 Telecoms Installation",
    docNumber: "MS-0041",
    revision: "C",
    category: "Method Statements",
    status: "UNDER_REVIEW",
    project: "PN-2847",
    uploadedBy: "James Carter",
    updatedAt: "2026-05-02",
    expiryDate: null,
    tags: ["RISQS", "NR"],
  },
  {
    id: "DOC-002",
    title: "Environmental Management Plan — WCML",
    docNumber: "POL-0012",
    revision: "B",
    category: "Policies",
    status: "APPROVED",
    project: "PN-3215",
    uploadedBy: "Helen Ward",
    updatedAt: "2026-04-18",
    expiryDate: "2027-04-18",
    tags: ["ISO 14001"],
  },
  {
    id: "DOC-003",
    title: "Safe System of Work — Bond Street Station",
    docNumber: "SSOW-0087",
    revision: "A",
    category: "Procedures",
    status: "APPROVED",
    project: "PN-3102",
    uploadedBy: "Dan Hughes",
    updatedAt: "2026-04-10",
    expiryDate: null,
    tags: ["LUL", "NR/L2/OHS/003"],
  },
  {
    id: "DOC-004",
    title: "Quality Management Procedure QP-07",
    docNumber: "QP-007",
    revision: "D",
    category: "Procedures",
    status: "APPROVED",
    project: null,
    uploadedBy: "Helen Ward",
    updatedAt: "2026-03-22",
    expiryDate: null,
    tags: ["ISO 9001"],
  },
  {
    id: "DOC-005",
    title: "Cable Route Drawing — WCML S-P56 to P62",
    docNumber: "DWG-2215-A",
    revision: "A",
    category: "Drawings",
    status: "APPROVED",
    project: "PN-3215",
    uploadedBy: "Tom Bailey",
    updatedAt: "2026-04-29",
    expiryDate: null,
    tags: ["NR"],
  },
  {
    id: "DOC-006",
    title: "Induction Pack — Site Operative v4",
    docNumber: "HR-IND-04",
    revision: "D",
    category: "Forms",
    status: "APPROVED",
    project: null,
    uploadedBy: "Sarah Downs",
    updatedAt: "2026-02-14",
    expiryDate: null,
    tags: [],
  },
  {
    id: "DOC-007",
    title: "Asbestos Survey — Gatwick Station M&E",
    docNumber: "SURV-0043",
    revision: "A",
    category: "Risk Assessments",
    status: "DRAFT",
    project: "PN-3301",
    uploadedBy: "Mark Evans",
    updatedAt: "2026-05-01",
    expiryDate: "2028-05-01",
    tags: ["Asbestos"],
  },
  {
    id: "DOC-008",
    title: "ISO 45001 Health & Safety Policy",
    docNumber: "POL-0001",
    revision: "F",
    category: "Policies",
    status: "APPROVED",
    project: null,
    uploadedBy: "Helen Ward",
    updatedAt: "2026-01-10",
    expiryDate: "2027-01-10",
    tags: ["ISO 45001"],
  },
];

const statusConfig: Record<string, { label: string; color: string; icon: React.ComponentType<{ className?: string }> }> = {
  APPROVED: { label: "Approved", color: "bg-emerald-500/15 text-emerald-400", icon: CheckCircle2 },
  UNDER_REVIEW: { label: "Under review", color: "bg-amber-400/15 text-amber-400", icon: Clock },
  DRAFT: { label: "Draft", color: "bg-slate-500/15 text-slate-400", icon: FileText },
  SUPERSEDED: { label: "Superseded", color: "bg-red-500/15 text-red-400", icon: AlertTriangle },
  ARCHIVED: { label: "Archived", color: "bg-slate-600/15 text-slate-500", icon: Archive },
};

const stats = [
  { label: "Total documents", value: "247", color: "text-white" },
  { label: "Approved", value: "198", color: "text-emerald-400" },
  { label: "Under review", value: "31", color: "text-amber-400" },
  { label: "Draft", value: "18", color: "text-slate-400" },
];

export default function DocumentsPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [showUpload, setShowUpload] = useState(false);

  const filtered = documents.filter((d) => {
    const matchesSearch =
      !search ||
      d.title.toLowerCase().includes(search.toLowerCase()) ||
      d.docNumber.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || d.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <Header
        title="Document Control"
        subtitle="Version-controlled document register — DM module"
      />

      <div className="p-6 space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="stat-card">
              <div className={`text-2xl font-bold mb-0.5 ${s.color}`}>{s.value}</div>
              <div className="text-xs text-slate-400">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search by title or document number..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="input-field pl-9"
            />
          </div>
          <button className="btn-secondary gap-2 text-sm px-4">
            <Filter className="w-4 h-4" />
            Filter
          </button>
          <button
            onClick={() => setShowUpload(true)}
            className="btn-primary gap-2 text-sm"
          >
            <Upload className="w-4 h-4" />
            Upload document
          </button>
        </div>

        {/* Category tabs */}
        <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-thin">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-3.5 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all",
                activeCategory === cat
                  ? "bg-brand-blue text-white"
                  : "bg-surface-elevated text-slate-400 hover:text-white border border-surface-border"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Document table */}
        <div className="card p-0 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-elevated">
                  <th className="table-header text-left px-5 py-3.5">Document</th>
                  <th className="table-header text-left px-4 py-3.5">Number</th>
                  <th className="table-header text-left px-4 py-3.5">Rev</th>
                  <th className="table-header text-left px-4 py-3.5">Category</th>
                  <th className="table-header text-left px-4 py-3.5">Status</th>
                  <th className="table-header text-left px-4 py-3.5">Updated</th>
                  <th className="table-header text-left px-4 py-3.5">Tags</th>
                  <th className="px-4 py-3.5" />
                </tr>
              </thead>
              <tbody>
                {filtered.map((doc) => {
                  const status = statusConfig[doc.status];
                  const StatusIcon = status.icon;
                  return (
                    <tr key={doc.id} className="table-row cursor-pointer">
                      <td className="px-5 py-3.5">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-brand-blue/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                            <FileText className="w-4 h-4 text-brand-blue" />
                          </div>
                          <div>
                            <div className="font-medium text-white leading-tight">
                              {doc.title}
                            </div>
                            {doc.project && (
                              <div className="text-xs text-slate-500 mt-0.5">
                                {doc.project}
                              </div>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3.5 font-mono text-xs text-slate-400">
                        {doc.docNumber}
                      </td>
                      <td className="px-4 py-3.5">
                        <span className="bg-surface-elevated border border-surface-border text-slate-300 text-xs font-mono px-2 py-0.5 rounded">
                          Rev {doc.revision}
                        </span>
                      </td>
                      <td className="px-4 py-3.5 text-slate-400 text-xs">
                        {doc.category}
                      </td>
                      <td className="px-4 py-3.5">
                        <span className={`status-badge ${status.color}`}>
                          <StatusIcon className="w-3 h-3" />
                          {status.label}
                        </span>
                      </td>
                      <td className="px-4 py-3.5 text-slate-400 text-xs whitespace-nowrap">
                        {formatDate(doc.updatedAt)}
                      </td>
                      <td className="px-4 py-3.5">
                        <div className="flex gap-1 flex-wrap">
                          {doc.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs bg-brand-blue/10 text-brand-blue-light px-2 py-0.5 rounded-full border border-brand-blue/20"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="px-4 py-3.5">
                        <div className="flex items-center gap-1">
                          <button className="p-1.5 rounded-lg hover:bg-surface-elevated text-slate-500 hover:text-slate-300 transition-colors">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="p-1.5 rounded-lg hover:bg-surface-elevated text-slate-500 hover:text-slate-300 transition-colors">
                            <Download className="w-4 h-4" />
                          </button>
                          <button className="p-1.5 rounded-lg hover:bg-surface-elevated text-slate-500 hover:text-slate-300 transition-colors">
                            <MoreHorizontal className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="px-5 py-3 border-t border-surface-border flex items-center justify-between">
            <span className="text-xs text-slate-500">
              Showing {filtered.length} of {documents.length} documents
            </span>
            <div className="flex gap-2">
              <button className="text-xs text-slate-400 hover:text-white px-3 py-1.5 rounded-lg border border-surface-border hover:border-brand-blue/30 transition-colors">
                Previous
              </button>
              <button className="text-xs text-slate-400 hover:text-white px-3 py-1.5 rounded-lg border border-surface-border hover:border-brand-blue/30 transition-colors">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
