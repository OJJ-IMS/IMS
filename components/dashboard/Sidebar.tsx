"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  FileText,
  Users,
  Clock,
  BarChart3,
  Package,
  Settings,
  LogOut,
  ChevronRight,
  Bell,
} from "lucide-react";
import { signOut } from "next-auth/react";

const modules = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Document Control", href: "/dashboard/documents", icon: FileText, abbr: "DM" },
  { label: "HR & Compliance", href: "/dashboard/hr", icon: Users, abbr: "HC" },
  { label: "Time Management", href: "/dashboard/time", icon: Clock, abbr: "TM" },
  { label: "Project Delivery", href: "/dashboard/projects", icon: BarChart3, abbr: "PM" },
  { label: "Materials & Assets", href: "/dashboard/materials", icon: Package, abbr: "MM" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 shrink-0 bg-surface border-r border-surface-border flex flex-col h-screen sticky top-0">
      {/* Logo */}
      <div className="h-16 flex items-center px-5 border-b border-surface-border">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-blue rounded-lg flex items-center justify-center font-bold text-white text-sm shadow-lg shadow-brand-blue/30">
            IMS
          </div>
          <span className="font-bold text-white text-lg">
            IMS<span className="text-brand-blue">.</span>
          </span>
        </Link>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto scrollbar-thin">
        {modules.map((mod) => {
          const isActive =
            mod.href === "/dashboard"
              ? pathname === "/dashboard"
              : pathname.startsWith(mod.href);

          return (
            <Link
              key={mod.href}
              href={mod.href}
              className={cn(
                isActive ? "sidebar-link-active" : "sidebar-link",
                "group"
              )}
            >
              <div
                className={cn(
                  "w-7 h-7 rounded-md flex items-center justify-center shrink-0 transition-colors",
                  isActive
                    ? "bg-brand-blue/30"
                    : "bg-surface-border/50 group-hover:bg-brand-blue/15"
                )}
              >
                <mod.icon className={cn("w-4 h-4", isActive ? "text-brand-blue-light" : "text-slate-400 group-hover:text-slate-300")} />
              </div>
              <span className="flex-1 truncate">{mod.label}</span>
              {mod.abbr && (
                <span className={cn(
                  "text-xs font-mono px-1.5 py-0.5 rounded",
                  isActive ? "text-brand-blue bg-brand-blue/10" : "text-slate-600"
                )}>
                  {mod.abbr}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Bottom */}
      <div className="border-t border-surface-border px-3 py-3 space-y-1">
        <Link href="/dashboard/settings" className="sidebar-link">
          <div className="w-7 h-7 rounded-md bg-surface-border/50 flex items-center justify-center shrink-0">
            <Settings className="w-4 h-4 text-slate-400" />
          </div>
          Settings
        </Link>
        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="sidebar-link w-full text-left"
        >
          <div className="w-7 h-7 rounded-md bg-surface-border/50 flex items-center justify-center shrink-0">
            <LogOut className="w-4 h-4 text-slate-400" />
          </div>
          Sign out
        </button>
      </div>
    </aside>
  );
}
