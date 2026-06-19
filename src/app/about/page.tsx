import type { Metadata } from "next";
import { Award, CheckCircle2, GraduationCap } from "lucide-react";
import { PageShell } from "@/components/layout";
import { PageHero } from "@/components/page-hero";
import { FinalCta, SocialButtons } from "@/components/sections";

export const metadata: Metadata = {
  title: "About Sudeep",
  description:
    "Meet Sudeep from Sudeeps English, a trusted spoken English trainer helping learners in Aluva and Kerala speak confidently.",
};

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About Sudeep"
        title="A practical English trainer for real-life confidence."
        description="Sudeeps English helps learners improve spoken English, grammar, interview answers, and communication through clear coaching that Kerala learners can understand and use."
      />
      <section className="bg-white px-4 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-2xl bg-[#0b1f3a] p-8 text-white">
            <GraduationCap size={42} className="text-[#4ee0d7]" aria-hidden />
            <h2 className="mt-6 text-3xl font-black">Sudeeps English</h2>
            <p className="mt-4 leading-8 text-slate-300">
              A personal coaching brand focused on practical spoken English classes in Aluva,
              online English classes Kerala, interview English training, and English through
              Malayalam.
            </p>
            <div className="mt-6 flex items-center gap-2 text-amber-200">
              <Award size={20} aria-hidden /> 5.0 rating from 15 reviews
            </div>
          </div>
          <div className="grid gap-4">
            {[
              "Explains English in a clear, Malayalam-friendly way.",
              "Focuses on speaking practice, correction, and confidence.",
              "Helps learners prepare for interviews and professional conversations.",
              "Supports both offline learners in Aluva and online learners across Kerala.",
            ].map((item) => (
              <div key={item} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <CheckCircle2 className="shrink-0 text-[#0f9f9a]" size={24} aria-hidden />
                <p className="font-bold leading-7 text-[#0b1f3a]">{item}</p>
              </div>
            ))}
            <div className="mt-4">
              <SocialButtons />
            </div>
          </div>
        </div>
      </section>
      <FinalCta />
    </PageShell>
  );
}
