import type { Metadata } from "next";
import { AtSign, Camera } from "lucide-react";
import { PageShell } from "@/components/layout";
import { PageHero } from "@/components/page-hero";
import { CtaButton } from "@/components/cta-buttons";
import { FinalCta } from "@/components/sections";
import { socials } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "View Sudeeps English class updates, reels, learning moments, and social media highlights.",
};

export default function GalleryPage() {
  const gallery = [
    "Classroom learning",
    "Speaking practice",
    "Interview preparation",
    "Grammar sessions",
    "Online learning",
    "Student confidence",
  ];

  return (
    <PageShell>
      <PageHero
        eyebrow="Gallery"
        title="Class moments, reels, and learning updates."
        description="Follow Sudeeps English on Instagram for fresh reels, class updates, learning tips, and visual highlights from the coaching journey."
      />
      <section className="bg-white px-4 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item) => (
            <a
              key={item}
              href={socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="group min-h-64 rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-[#e9fbf8] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-950/10"
            >
              <Camera className="text-[#0f9f9a]" size={30} aria-hidden />
              <p className="mt-32 text-2xl font-black text-[#0b1f3a]">{item}</p>
              <p className="mt-2 text-sm font-bold text-slate-500">View on Instagram</p>
            </a>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <CtaButton href={socials.instagram} tone="whatsapp" icon={<AtSign size={18} aria-hidden />}>
            Open Instagram Gallery
          </CtaButton>
        </div>
      </section>
      <FinalCta />
    </PageShell>
  );
}
