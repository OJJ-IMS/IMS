"use client";

import { useState } from "react";
import {
  Package,
  Wrench,
  Truck,
  AlertTriangle,
  CheckCircle2,
  Search,
  Plus,
  Filter,
  Calendar,
  MapPin,
  User,
  ChevronRight,
  ClipboardCheck,
  ShoppingCart,
  Download,
} from "lucide-react";
import Header from "@/components/dashboard/Header";
import { cn, formatDate, formatCurrency } from "@/lib/utils";

const assets = [
  {
    id: "ASS-001",
    name: "Fluke 435-II Power Analyser",
    assetNumber: "ASS-089",
    category: "TEST_EQUIPMENT",
    make: "Fluke",
    model: "435-II",
    serialNumber: "FL435-88421",
    status: "IN_USE",
    location: "PN-2847 Site",
    assignedTo: "Mark Evans",
    calibrationDate: "2025-11-10",
    nextCalibration: "2026-05-17",
    calibrationDue: true,
  },
  {
    id: "ASS-002",
    name: "Hilti TE 70 Rotary Hammer",
    assetNumber: "ASS-021",
    category: "TOOL",
    make: "Hilti",
    model: "TE 70",
    serialNumber: "HLT-TE70-3341",
    status: "AVAILABLE",
    location: "Stores — Coulsdon",
    assignedTo: null,
    calibrationDate: null,
    nextCalibration: null,
    calibrationDue: false,
  },
  {
    id: "ASS-003",
    name: "Toyota Hilux — GN72 XRT",
    assetNumber: "VEH-007",
    category: "VEHICLE",
    make: "Toyota",
    model: "Hilux",
    serialNumber: "GN72XRT",
    status: "IN_USE",
    location: "PN-3215 — Stafford",
    assignedTo: "James Carter",
    calibrationDate: null,
    nextCalibration: null,
    calibrationDue: false,
    lastCheck: "2026-05-04",
    mileage: 48210,
  },
  {
    id: "ASS-004",
    name: "Fluke 1623-2 Earth Tester",
    assetNumber: "ASS-041",
    category: "TEST_EQUIPMENT",
    make: "Fluke",
    model: "1623-2",
    serialNumber: "FL1623-99021",
    status: "CALIBRATION_DUE",
    location: "Stores — Coulsdon",
    assignedTo: null,
    calibrationDate: "2025-12-01",
    nextCalibration: "2026-05-22",
    calibrationDue: true,
  },
  {
    id: "ASS-005",
    name: "Ford Transit Custom — HG23 KLM",
    assetNumber: "VEH-004",
    category: "VEHICLE",
    make: "Ford",
    model: "Transit Custom",
    serialNumber: "HG23KLM",
    status: "IN_USE",
    location: "PN-3301 — Gatwick",
    assignedTo: "Mike Patterson",
    calibrationDate: null,
    nextCalibration: null,
    calibrationDue: false,
    lastCheck: "2026-05-04",
    mileage: 34890,
  },
  {
    id: "ASS-006",
    name: "Bosch GBH 18V-45 C Combi Hammer",
    assetNumber: "ASS-067",
    category: "TOOL",
    make: "Bosch",
    model: "GBH 18V-45 C",
    serialNumber: "BSH-GBH-44512",
    status: "IN_SERVICE",
    location: "Service — Repair",
    assignedTo: null,
    calibrationDate: null,
    nextCalibration: null,
    calibrationDue: false,
  },
  {
    id: "ASS-007",
    name: "JDSU T-BERD 5800",
    assetNumber: "ASS-055",
    category: "TEST_EQUIPMENT",
    make: "JDSU",
    model: "T-BERD 5800",
    serialNumber: "JDSU-TB5-87654",
    status: "AVAILABLE",
    location: "Stores — Coulsdon",
    assignedTo: null,
    calibrationDate: "2026-01-15",
    nextCalibration: "2027-01-15",
    calibrationDue: false,
  },
];

const purchaseOrders = [
  {
    id: "PO-0441",
    supplier: "Screwfix Direct",
    description: "Cable management and fixings — WCML Phase 2",
    value: 2840,
    status: "DELIVERED",
    orderDate: "2026-04-18",
    project: "PN-3215",
  },
  {
    id: "PO-0442",
    supplier: "Fluke Calibration Services",
    description: "Calibration — ASS-089, ASS-041",
    value: 680,
    status: "PENDING",
    orderDate: "2026-05-02",
    project: null,
  },
  {
    id: "PO-0443",
    supplier: "Hilti Direct",
    description: "Consumables — drill bits and anchors × 40",
    value: 310,
    status: "IN_TRANSIT",
    orderDate: "2026-05-01",
    project: "PN-2847",
  },
  {
    id: "PO-0444",
    supplier: "Carl Kammerling (CK Tools)",
    description: "Replacement insulated screwdriver set × 6",
    value: 180,
    status: "PENDING",
    orderDate: "2026-05-04",
    project: null,
  },
];

const assetStatusConfig = {
  AVAILABLE: { label: "Available", color: "bg-emerald-500/15 text-emerald-400" },
  IN_USE: { label: "In use", color: "bg-brand-blue/15 text-brand-blue-light" },
  IN_SERVICE: { label: "In service", color: "bg-amber-400/15 text-amber-400" },
  CALIBRATION_DUE: { label: "Calibration due", color: "bg-red-500/15 text-red-400" },
  ON_HIRE: { label: "On hire", color: "bg-purple-400/15 text-purple-400" },
  CONDEMNED: { label: "Condemned", color: "bg-slate-500/15 text-slate-400" },
};

const categoryIcons = {
  TEST_EQUIPMENT: Wrench,
  TOOL: Package,
  VEHICLE: Truck,
  PLANT: Package,
  PPE: Package,
  IT_EQUIPMENT: Package,
  OTHER: Package,
};

const poStatusConfig = {
  PENDING: { label: "Pending", color: "bg-amber-400/15 text-amber-400" },
  IN_TRANSIT: { label: "In transit", color: "bg-brand-blue/15 text-brand-blue-light" },
  DELIVERED: { label: "Delivered", color: "bg-emerald-500/15 text-emerald-400" },
  CANCELLED: { label: "Cancelled", color: "bg-slate-500/15 text-slate-400" },
};

const vehicleAssets = assets.filter((a) => a.category === "VEHICLE");

export default function MaterialsPage() {
  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");
  const [activeTab, setActiveTab] = useState<"assets" | "vehicles" | "orders">("assets");

  const filteredAssets = assets.filter((a) => {
    const matchesSearch =
      !search ||
      a.name.toLowerCase().includes(search.toLowerCase()) ||
      a.assetNumber.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      filterCategory === "All" || a.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const calibrationDueCount = assets.filter((a) => a.calibrationDue).length;
  const availableCount = assets.filter((a) => a.status === "AVAILABLE").length;
  const pendingOrders = purchaseOrders.filter((o) => o.status === "PENDING" || o.status === "IN_TRANSIT").length;

  return (
    <div>
      <Header
        title="Materials & Assets"
        subtitle="Tools, plant, vehicles, calibration and purchase orders — MM module"
      />

      <div className="p-6 space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="stat-card">
            <div className="text-2xl font-bold text-white mb-0.5">{assets.length}</div>
            <div className="text-xs text-slate-400">Registered assets</div>
          </div>
          <div className="stat-card">
            <div className="text-2xl font-bold text-emerald-400 mb-0.5">{availableCount}</div>
            <div className="text-xs text-slate-400">Available in stores</div>
          </div>
          <div className="stat-card">
            <div className="text-2xl font-bold text-red-400 mb-0.5">{calibrationDueCount}</div>
            <div className="text-xs text-slate-400">Calibration due</div>
            {calibrationDueCount > 0 && (
              <div className="text-xs text-amber-400 mt-0.5 flex items-center gap-1">
                <AlertTriangle className="w-3 h-3" /> Action needed
              </div>
            )}
          </div>
          <div className="stat-card">
            <div className="text-2xl font-bold text-amber-400 mb-0.5">{pendingOrders}</div>
            <div className="text-xs text-slate-400">Open purchase orders</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1.5 border-b border-surface-border pb-0">
          {(["assets", "vehicles", "orders"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "px-4 py-2.5 text-sm font-medium capitalize rounded-t-lg border-b-2 -mb-px transition-all",
                activeTab === tab
                  ? "text-white border-brand-blue bg-brand-blue/5"
                  : "text-slate-400 border-transparent hover:text-white"
              )}
            >
              {tab === "assets" ? "Assets & Tools" : tab === "vehicles" ? "Vehicles (FORS)" : "Purchase Orders"}
            </button>
          ))}
        </div>

        {/* Assets tab */}
        {activeTab === "assets" && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                  type="text"
                  placeholder="Search by name or asset number..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="input-field pl-9"
                />
              </div>
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="input-field w-auto"
              >
                <option value="All">All categories</option>
                <option value="TEST_EQUIPMENT">Test equipment</option>
                <option value="TOOL">Tools</option>
                <option value="VEHICLE">Vehicles</option>
                <option value="PLANT">Plant</option>
              </select>
              <button className="btn-primary gap-2 text-sm shrink-0">
                <Plus className="w-4 h-4" />
                Add asset
              </button>
            </div>

            <div className="card p-0 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-elevated">
                    <th className="table-header text-left px-5 py-3.5">Asset</th>
                    <th className="table-header text-left px-4 py-3.5">Number</th>
                    <th className="table-header text-left px-4 py-3.5">Status</th>
                    <th className="table-header text-left px-4 py-3.5">Location / Assigned</th>
                    <th className="table-header text-left px-4 py-3.5">Calibration</th>
                    <th className="px-4 py-3.5" />
                  </tr>
                </thead>
                <tbody>
                  {filteredAssets.map((asset) => {
                    const StatusCfg = assetStatusConfig[asset.status as keyof typeof assetStatusConfig];
                    const Icon = categoryIcons[asset.category as keyof typeof categoryIcons] ?? Package;
                    return (
                      <tr key={asset.id} className="table-row cursor-pointer">
                        <td className="px-5 py-3.5">
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-brand-blue/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                              <Icon className="w-4 h-4 text-brand-blue" />
                            </div>
                            <div>
                              <div className="font-medium text-white leading-tight">{asset.name}</div>
                              <div className="text-xs text-slate-500 mt-0.5">
                                {asset.make} {asset.model}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3.5 font-mono text-xs text-slate-400">{asset.assetNumber}</td>
                        <td className="px-4 py-3.5">
                          <span className={`status-badge ${StatusCfg?.color ?? ""}`}>
                            {StatusCfg?.label}
                          </span>
                        </td>
                        <td className="px-4 py-3.5">
                          <div className="text-sm text-slate-300">{asset.location}</div>
                          {asset.assignedTo && (
                            <div className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                              <User className="w-3 h-3" />{asset.assignedTo}
                            </div>
                          )}
                        </td>
                        <td className="px-4 py-3.5">
                          {asset.nextCalibration ? (
                            <div className={cn("text-xs", asset.calibrationDue ? "text-red-400 font-semibold" : "text-slate-400")}>
                              {asset.calibrationDue && <AlertTriangle className="w-3 h-3 inline mr-1" />}
                              Due {formatDate(asset.nextCalibration)}
                            </div>
                          ) : (
                            <span className="text-slate-600 text-xs">N/A</span>
                          )}
                        </td>
                        <td className="px-4 py-3.5">
                          <ChevronRight className="w-4 h-4 text-slate-600" />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Vehicles / FORS tab */}
        {activeTab === "vehicles" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-slate-400 text-sm">
                FORS daily vehicle checks — all vehicles in fleet
              </p>
              <button className="btn-primary text-sm gap-2">
                <ClipboardCheck className="w-4 h-4" />
                Record check
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {vehicleAssets.map((v) => (
                <div key={v.id} className="card hover:border-brand-blue/30 transition-all">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 bg-brand-blue/10 border border-brand-blue/20 rounded-xl flex items-center justify-center shrink-0">
                      <Truck className="w-5 h-5 text-brand-blue-light" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-white">{v.name}</div>
                      <div className="text-xs text-slate-400 font-mono">{v.serialNumber}</div>
                    </div>
                    <span className={`status-badge ${assetStatusConfig[v.status as keyof typeof assetStatusConfig]?.color ?? ""}`}>
                      {assetStatusConfig[v.status as keyof typeof assetStatusConfig]?.label}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <div className="text-xs text-slate-500 mb-0.5">Assigned to</div>
                      <div className="text-slate-300">{v.assignedTo ?? "Unassigned"}</div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 mb-0.5">Location</div>
                      <div className="text-slate-300 text-xs">{v.location}</div>
                    </div>
                    {(v as any).mileage && (
                      <div>
                        <div className="text-xs text-slate-500 mb-0.5">Mileage</div>
                        <div className="text-slate-300">{(v as any).mileage.toLocaleString()} mi</div>
                      </div>
                    )}
                    {(v as any).lastCheck && (
                      <div>
                        <div className="text-xs text-slate-500 mb-0.5">Last FORS check</div>
                        <div className="text-emerald-400 text-xs flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" />
                          {formatDate((v as any).lastCheck)}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mt-4 pt-3 border-t border-surface-border flex gap-2">
                    <button className="btn-ghost text-xs gap-1.5 flex-1 justify-center">
                      <ClipboardCheck className="w-3.5 h-3.5" />
                      Check history
                    </button>
                    <button className="btn-primary text-xs gap-1.5 flex-1 justify-center">
                      New check
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Purchase orders tab */}
        {activeTab === "orders" && (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <p className="text-slate-400 text-sm">
                {purchaseOrders.length} purchase orders — {formatCurrency(purchaseOrders.reduce((s, o) => s + o.value, 0))} total value
              </p>
              <button className="btn-primary text-sm gap-2">
                <Plus className="w-4 h-4" />
                Raise PO
              </button>
            </div>

            <div className="card p-0 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-elevated">
                    <th className="table-header text-left px-5 py-3.5">PO Number</th>
                    <th className="table-header text-left px-4 py-3.5">Supplier</th>
                    <th className="table-header text-left px-4 py-3.5">Description</th>
                    <th className="table-header text-right px-4 py-3.5">Value</th>
                    <th className="table-header text-left px-4 py-3.5">Project</th>
                    <th className="table-header text-left px-4 py-3.5">Status</th>
                    <th className="table-header text-left px-4 py-3.5">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {purchaseOrders.map((po) => {
                    const status = poStatusConfig[po.status as keyof typeof poStatusConfig];
                    return (
                      <tr key={po.id} className="table-row cursor-pointer">
                        <td className="px-5 py-3.5 font-mono text-xs text-brand-blue-light">
                          {po.id}
                        </td>
                        <td className="px-4 py-3.5 font-medium text-white">
                          {po.supplier}
                        </td>
                        <td className="px-4 py-3.5 text-slate-300 text-xs max-w-xs">
                          {po.description}
                        </td>
                        <td className="px-4 py-3.5 text-right font-semibold text-white">
                          {formatCurrency(po.value)}
                        </td>
                        <td className="px-4 py-3.5 text-slate-400 text-xs">
                          {po.project ?? "—"}
                        </td>
                        <td className="px-4 py-3.5">
                          <span className={`status-badge ${status?.color ?? ""}`}>
                            {status?.label}
                          </span>
                        </td>
                        <td className="px-4 py-3.5 text-slate-400 text-xs whitespace-nowrap">
                          {formatDate(po.orderDate)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div className="px-5 py-3 border-t border-surface-border flex justify-between items-center">
                <span className="text-xs text-slate-500">
                  Total committed: {formatCurrency(purchaseOrders.filter(o => o.status !== "CANCELLED").reduce((s, o) => s + o.value, 0))}
                </span>
                <button className="btn-ghost text-xs gap-1.5">
                  <Download className="w-3.5 h-3.5" />
                  Export
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
