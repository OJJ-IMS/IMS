"use client";

import { Bell, Search, ChevronDown } from "lucide-react";
import { useSession } from "next-auth/react";

interface HeaderProps {
  title: string;
  subtitle?: string;
}

export default function Header({ title, subtitle }: HeaderProps) {
  const { data: session } = useSession();
  const user = session?.user as any;

  return (
    <header className="h-16 border-b border-surface-border flex items-center justify-between px-6 bg-brand-navy/50 backdrop-blur-sm sticky top-0 z-30">
      <div>
        <h1 className="text-lg font-semibold text-white leading-tight">{title}</h1>
        {subtitle && <p className="text-xs text-slate-400 mt-0.5">{subtitle}</p>}
      </div>

      <div className="flex items-center gap-3">
        {/* Search */}
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input
            type="text"
            placeholder="Search..."
            className="w-48 lg:w-64 bg-surface-elevated border border-surface-border rounded-lg pl-9 pr-4 py-2 text-sm text-slate-300 placeholder-slate-500 focus:outline-none focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/30 transition-all"
          />
        </div>

        {/* Notifications */}
        <button className="relative w-9 h-9 flex items-center justify-center rounded-lg bg-surface-elevated border border-surface-border hover:border-brand-blue/30 text-slate-400 hover:text-white transition-all">
          <Bell className="w-4 h-4" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-brand-blue rounded-full" />
        </button>

        {/* User */}
        <button className="flex items-center gap-2.5 px-3 py-1.5 bg-surface-elevated border border-surface-border rounded-lg hover:border-brand-blue/30 transition-all">
          <div className="w-7 h-7 rounded-full bg-brand-blue/20 border border-brand-blue/30 flex items-center justify-center text-xs font-bold text-brand-blue-light">
            {user?.name?.charAt(0) ?? "U"}
          </div>
          <div className="hidden sm:block text-left">
            <div className="text-sm font-medium text-white leading-tight">
              {user?.name ?? "User"}
            </div>
            <div className="text-xs text-slate-400 leading-tight">
              {user?.role?.replace("_", " ") ?? ""}
            </div>
          </div>
          <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
        </button>
      </div>
    </header>
  );
}
