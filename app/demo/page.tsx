"use client";

import { useState } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  ChevronRight,
  Clock,
  Mail,
  Phone,
  Building2,
} from "lucide-react";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";

const challenges = [
  "Compliance & audits",
  "Project cost control",
  "Document management",
  "Labour & timesheets",
  "Training records",
  "Something else",
];

const companySizes = ["Under 25", "25–100", "100–500", "500+"];

export default function DemoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    jobTitle: "",
    companyName: "",
    email: "",
    phone: "",
    companySize: "",
    challenge: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-brand-navy">
      <Navbar />

      <section className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left — info */}
            <div>
              <p className="section-label mb-3">Book a free demo</p>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                See IMS configured for your operation
              </h1>
              <p className="text-slate-300 leading-relaxed mb-8">
                We'll configure the demo around your sector, size and the
                challenges you're facing right now. No generic walkthrough — a
                focused demonstration of what IMS does for operations like yours.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  { icon: Clock, text: "45-minute demonstration, focused on your priorities" },
                  { icon: Building2, text: "Configured to your sector — rail, telecoms, civils, M&E" },
                  { icon: CheckCircle2, text: "Tailored proposal delivered within 48 hours" },
                  { icon: Mail, text: "No obligation — monthly subscription, no long contract" },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-brand-blue/15 rounded-lg flex items-center justify-center shrink-0">
                      <item.icon className="w-4 h-4 text-brand-blue" />
                    </div>
                    <p className="text-slate-300 text-sm pt-1">{item.text}</p>
                  </div>
                ))}
              </div>

              <div className="p-5 bg-surface rounded-xl border border-surface-border">
                <div className="font-semibold text-white mb-1">
                  Ollie Clayton — Director of Client Relations
                </div>
                <div className="text-slate-400 text-sm mb-3">Postfield Systems Ltd</div>
                <div className="flex flex-col gap-2">
                  <a
                    href="mailto:Oliver.Clayton@theims.co.uk"
                    className="flex items-center gap-2 text-brand-blue-light hover:text-white text-sm transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    Oliver.Clayton@theims.co.uk
                  </a>
                  <a
                    href="tel:07716407150"
                    className="flex items-center gap-2 text-brand-blue-light hover:text-white text-sm transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    07716 407150
                  </a>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div>
              {submitted ? (
                <div className="card flex flex-col items-center text-center py-16">
                  <div className="w-16 h-16 bg-brand-blue/20 border border-brand-blue/30 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8 text-brand-blue-light" />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-3">
                    Request received
                  </h2>
                  <p className="text-slate-400 leading-relaxed max-w-sm">
                    Ollie will be in touch within one working day to schedule
                    your demo. You'll receive a confirmation email shortly.
                  </p>
                  <div className="mt-8 p-4 bg-surface-elevated rounded-xl text-left w-full max-w-sm">
                    <div className="text-xs text-slate-500 mb-1">What happens next</div>
                    <ol className="space-y-2">
                      {[
                        "Confirmation email sent to your inbox",
                        "Ollie contacts you within 1 working day",
                        "45-minute demo — configured to your operation",
                        "Tailored proposal within 48 hours",
                      ].map((step, i) => (
                        <li key={step} className="flex items-start gap-2.5 text-sm text-slate-300">
                          <span className="text-brand-blue font-bold text-xs mt-0.5">{i + 1}.</span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="card space-y-5">
                  <h2 className="text-lg font-bold text-white mb-1">
                    Request your free demo
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="label" htmlFor="fullName">Full name *</label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        required
                        value={form.fullName}
                        onChange={handleChange}
                        className="input-field"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="label" htmlFor="jobTitle">Job title *</label>
                      <input
                        id="jobTitle"
                        name="jobTitle"
                        type="text"
                        required
                        value={form.jobTitle}
                        onChange={handleChange}
                        className="input-field"
                        placeholder="Operations Director"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="label" htmlFor="companyName">Company name *</label>
                    <input
                      id="companyName"
                      name="companyName"
                      type="text"
                      required
                      value={form.companyName}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="Your company name"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="label" htmlFor="email">Email *</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className="input-field"
                        placeholder="you@company.co.uk"
                      />
                    </div>
                    <div>
                      <label className="label" htmlFor="phone">Phone *</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        className="input-field"
                        placeholder="07xxx xxxxxx"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="label" htmlFor="companySize">Company size</label>
                    <select
                      id="companySize"
                      name="companySize"
                      value={form.companySize}
                      onChange={handleChange}
                      className="input-field"
                    >
                      <option value="">Select size</option>
                      {companySizes.map((s) => (
                        <option key={s} value={s}>{s} employees</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="label" htmlFor="challenge">Biggest challenge</label>
                    <select
                      id="challenge"
                      name="challenge"
                      value={form.challenge}
                      onChange={handleChange}
                      className="input-field"
                    >
                      <option value="">Select your main challenge</option>
                      {challenges.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="label" htmlFor="message">
                      Anything else you'd like us to know?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      className="input-field resize-none"
                      placeholder="e.g. specific modules of interest, current systems, upcoming audit..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full justify-center py-3.5 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? "Sending request..." : "Book my free demo"}
                    {!loading && <ChevronRight className="w-5 h-5" />}
                  </button>

                  <p className="text-slate-500 text-xs text-center">
                    By submitting you agree to be contacted by Postfield Systems
                    Ltd. Monthly subscription — no long-term contract required.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
