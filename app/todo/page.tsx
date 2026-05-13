import type { Metadata } from "next";
import TodoApp from "./TodoApp";

export const metadata: Metadata = {
  title: "To-Do List",
  description: "A simple, dedicated to-do list. Transcribe your tasks and get things done.",
};

export default function TodoPage() {
  return (
    <main className="min-h-screen bg-gradient-navy text-slate-100">
      <div className="mx-auto max-w-2xl px-4 py-10 sm:py-16">
        <header className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            To-Do List
          </h1>
          <p className="mt-2 text-sm text-slate-400">
            Transcribe your tasks below. Saved automatically in your browser.
          </p>
        </header>
        <TodoApp />
      </div>
    </main>
  );
}
