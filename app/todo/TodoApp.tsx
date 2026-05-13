"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Check, Plus, Pencil, Trash2, X } from "lucide-react";

type Priority = "low" | "normal" | "high";

type Todo = {
  id: string;
  text: string;
  done: boolean;
  priority: Priority;
  createdAt: number;
};

type Filter = "all" | "active" | "completed";

const STORAGE_KEY = "ims.todo.v1";

const priorityStyles: Record<Priority, string> = {
  low: "bg-slate-700/60 text-slate-300 ring-slate-600",
  normal: "bg-brand-blue/20 text-brand-blue-light ring-brand-blue/40",
  high: "bg-rose-500/20 text-rose-300 ring-rose-500/40",
};

const priorityLabel: Record<Priority, string> = {
  low: "Low",
  normal: "Normal",
  high: "High",
};

function uid() {
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [hydrated, setHydrated] = useState(false);
  const [input, setInput] = useState("");
  const [priority, setPriority] = useState<Priority>("normal");
  const [filter, setFilter] = useState<Filter>("all");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingText, setEditingText] = useState("");
  const editInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setTodos(JSON.parse(raw));
    } catch {
      // ignore corrupted storage
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos, hydrated]);

  useEffect(() => {
    if (editingId) editInputRef.current?.focus();
  }, [editingId]);

  const remaining = useMemo(() => todos.filter((t) => !t.done).length, [todos]);
  const completed = todos.length - remaining;

  const visible = useMemo(() => {
    const sorted = [...todos].sort((a, b) => {
      if (a.done !== b.done) return a.done ? 1 : -1;
      const rank: Record<Priority, number> = { high: 0, normal: 1, low: 2 };
      if (rank[a.priority] !== rank[b.priority])
        return rank[a.priority] - rank[b.priority];
      return b.createdAt - a.createdAt;
    });
    if (filter === "active") return sorted.filter((t) => !t.done);
    if (filter === "completed") return sorted.filter((t) => t.done);
    return sorted;
  }, [todos, filter]);

  function addTodo() {
    const text = input.trim();
    if (!text) return;
    setTodos((prev) => [
      { id: uid(), text, done: false, priority, createdAt: Date.now() },
      ...prev,
    ]);
    setInput("");
    setPriority("normal");
  }

  function toggle(id: string) {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)),
    );
  }

  function remove(id: string) {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }

  function startEdit(t: Todo) {
    setEditingId(t.id);
    setEditingText(t.text);
  }

  function commitEdit() {
    if (!editingId) return;
    const text = editingText.trim();
    if (!text) {
      remove(editingId);
    } else {
      setTodos((prev) =>
        prev.map((t) => (t.id === editingId ? { ...t, text } : t)),
      );
    }
    setEditingId(null);
    setEditingText("");
  }

  function cancelEdit() {
    setEditingId(null);
    setEditingText("");
  }

  function clearCompleted() {
    setTodos((prev) => prev.filter((t) => !t.done));
  }

  return (
    <div className="rounded-xl border border-surface-border bg-surface-elevated/60 shadow-xl backdrop-blur">
      <div className="border-b border-surface-border p-4 sm:p-6">
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") addTodo();
            }}
            placeholder="What needs to be done?"
            className="flex-1 rounded-lg border border-surface-border bg-brand-navy/60 px-4 py-3 text-base text-slate-100 placeholder:text-slate-500 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/40"
            aria-label="New task"
          />
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value as Priority)}
            className="rounded-lg border border-surface-border bg-brand-navy/60 px-3 py-3 text-sm text-slate-200 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/40"
            aria-label="Priority"
          >
            <option value="low">Low</option>
            <option value="normal">Normal</option>
            <option value="high">High</option>
          </select>
          <button
            type="button"
            onClick={addTodo}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-blue px-4 py-3 text-sm font-medium text-white shadow-md transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
            disabled={!input.trim()}
          >
            <Plus className="h-4 w-4" />
            Add
          </button>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-surface-border px-4 py-3 sm:px-6">
        <div className="text-sm text-slate-400">
          {hydrated ? (
            <>
              <span className="font-medium text-slate-200">{remaining}</span>{" "}
              remaining
              {completed > 0 && (
                <span className="ml-2 text-slate-500">· {completed} done</span>
              )}
            </>
          ) : (
            <span className="text-slate-500">Loading…</span>
          )}
        </div>
        <div className="flex gap-1 rounded-lg border border-surface-border bg-brand-navy/40 p-1">
          {(["all", "active", "completed"] as Filter[]).map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={
                "rounded-md px-3 py-1 text-xs font-medium capitalize transition " +
                (filter === f
                  ? "bg-brand-blue text-white shadow"
                  : "text-slate-400 hover:text-slate-200")
              }
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <ul className="divide-y divide-surface-border">
        {visible.length === 0 && hydrated && (
          <li className="px-4 py-12 text-center text-sm text-slate-500 sm:px-6">
            {filter === "all"
              ? "No tasks yet. Add one above to get started."
              : filter === "active"
                ? "Nothing active. Enjoy the breather."
                : "No completed tasks yet."}
          </li>
        )}
        {visible.map((t) => {
          const isEditing = editingId === t.id;
          return (
            <li
              key={t.id}
              className="group flex items-center gap-3 px-4 py-3 transition hover:bg-surface-hover/50 sm:px-6"
            >
              <button
                type="button"
                onClick={() => toggle(t.id)}
                aria-label={t.done ? "Mark as not done" : "Mark as done"}
                className={
                  "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition " +
                  (t.done
                    ? "border-brand-blue bg-brand-blue text-white"
                    : "border-slate-500 hover:border-brand-blue")
                }
              >
                {t.done && <Check className="h-4 w-4" />}
              </button>

              {isEditing ? (
                <input
                  ref={editInputRef}
                  type="text"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") commitEdit();
                    if (e.key === "Escape") cancelEdit();
                  }}
                  onBlur={commitEdit}
                  className="flex-1 rounded-md border border-brand-blue bg-brand-navy/80 px-2 py-1 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-blue/40"
                />
              ) : (
                <button
                  type="button"
                  onDoubleClick={() => startEdit(t)}
                  className={
                    "flex-1 text-left text-sm transition " +
                    (t.done
                      ? "text-slate-500 line-through"
                      : "text-slate-100 hover:text-white")
                  }
                  title="Double-click to edit"
                >
                  {t.text}
                </button>
              )}

              <span
                className={
                  "hidden shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide ring-1 sm:inline-flex " +
                  priorityStyles[t.priority]
                }
              >
                {priorityLabel[t.priority]}
              </span>

              <div className="flex shrink-0 items-center gap-1 opacity-0 transition group-hover:opacity-100 focus-within:opacity-100">
                {!isEditing && (
                  <button
                    type="button"
                    onClick={() => startEdit(t)}
                    aria-label="Edit task"
                    className="rounded-md p-1.5 text-slate-400 hover:bg-surface-hover hover:text-slate-100"
                  >
                    <Pencil className="h-4 w-4" />
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => remove(t.id)}
                  aria-label="Delete task"
                  className="rounded-md p-1.5 text-slate-400 hover:bg-rose-500/20 hover:text-rose-300"
                >
                  {isEditing ? (
                    <X className="h-4 w-4" />
                  ) : (
                    <Trash2 className="h-4 w-4" />
                  )}
                </button>
              </div>
            </li>
          );
        })}
      </ul>

      {completed > 0 && (
        <div className="flex justify-end border-t border-surface-border px-4 py-3 sm:px-6">
          <button
            type="button"
            onClick={clearCompleted}
            className="text-xs font-medium text-slate-400 transition hover:text-rose-300"
          >
            Clear completed
          </button>
        </div>
      )}
    </div>
  );
}
