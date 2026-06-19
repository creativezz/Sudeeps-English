import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { PageShell } from "@/components/layout";
import { PageHero } from "@/components/page-hero";
import { FinalCta } from "@/components/sections";

export const metadata: Metadata = {
  title: "Book Demo Class",
  description:
    "Book a demo class at Sudeeps English for spoken English classes in Aluva, online English classes Kerala, and interview English training.",
};

export default function BookDemoPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Book Demo Class"
        title="Find the right English class for your current level."
        description="Share your details and Sudeeps English will help you choose between spoken English, grammar, interview English, one-to-one coaching, online classes, or offline classes in Aluva."
      />
      <section className="bg-white px-4 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-3xl font-black text-[#0b1f3a]">What happens after you enquire?</h2>
            <div className="mt-6 grid gap-4">
              {[
                "Your current English level and goal are understood first.",
                "You get guidance on the best course or coaching mode.",
                "You can ask about online or offline timing and demo class options.",
                "You receive a clear next step by WhatsApp or phone call.",
              ].map((item) => (
                <div key={item} className="flex gap-4 rounded-2xl border border-slate-200 p-5">
                  <CheckCircle2 className="shrink-0 text-[#0f9f9a]" size={24} aria-hidden />
                  <p className="font-bold leading-7 text-[#0b1f3a]">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
      <FinalCta />
    </PageShell>
  );
}
