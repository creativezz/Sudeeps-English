"use client";

import { Send } from "lucide-react";
import { useState } from "react";

const interests = [
  "Basic Spoken English",
  "Advanced Spoken English",
  "Grammar Foundation",
  "Interview English",
  "Business Communication",
  "One-to-One Coaching",
  "Online English Classes",
  "Offline Classes in Aluva",
];

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState(interests[0]);
  const [message, setMessage] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = [
      "Hi Sudeeps English, I would like to enquire about a class.",
      `Name: ${name || "Not provided"}`,
      `Phone: ${phone || "Not provided"}`,
      `Course interest: ${interest}`,
      `Message: ${message || "Please contact me with class details."}`,
    ].join("\n");

    window.open(`https://wa.me/919037476087?text=${encodeURIComponent(text)}`, "_blank");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xl shadow-blue-950/10 md:p-7"
    >
      <div className={compact ? "grid gap-4" : "grid gap-4 md:grid-cols-2"}>
        <label className="grid gap-2 text-sm font-bold text-[#0b1f3a]">
          Name
          <input
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="min-h-12 rounded-xl border border-slate-200 px-4 text-base font-medium text-slate-900 transition focus:border-[#0f9f9a]"
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-2 text-sm font-bold text-[#0b1f3a]">
          Phone
          <input
            required
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            className="min-h-12 rounded-xl border border-slate-200 px-4 text-base font-medium text-slate-900 transition focus:border-[#0f9f9a]"
            placeholder="Your phone number"
            inputMode="tel"
          />
        </label>
      </div>
      <label className="mt-4 grid gap-2 text-sm font-bold text-[#0b1f3a]">
        Course interest
        <select
          value={interest}
          onChange={(event) => setInterest(event.target.value)}
          className="min-h-12 rounded-xl border border-slate-200 px-4 text-base font-medium text-slate-900 transition focus:border-[#0f9f9a]"
        >
          {interests.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </label>
      <label className="mt-4 grid gap-2 text-sm font-bold text-[#0b1f3a]">
        Message
        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="min-h-32 rounded-xl border border-slate-200 px-4 py-3 text-base font-medium text-slate-900 transition focus:border-[#0f9f9a]"
          placeholder="Tell us your current level or goal"
        />
      </label>
      <button
        type="submit"
        className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#0f9f9a] px-5 py-3 text-sm font-black text-white shadow-lg shadow-[#0f9f9a]/20 transition hover:-translate-y-0.5 hover:bg-[#0b827e]"
      >
        Send enquiry on WhatsApp <Send size={17} aria-hidden />
      </button>
    </form>
  );
}
