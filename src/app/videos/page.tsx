import type { Metadata } from "next";
import { Video } from "lucide-react";
import { PageShell } from "@/components/layout";
import { PageHero } from "@/components/page-hero";
import { FinalCta, VideoSection } from "@/components/sections";
import { CtaButton } from "@/components/cta-buttons";
import { socials } from "@/lib/site";

export const metadata: Metadata = {
  title: "Videos",
  description:
    "Watch Sudeeps English YouTube videos for spoken English, grammar, interview English training, and English through Malayalam.",
};

export default function VideosPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Videos"
        title="Learn English with short, practical videos."
        description="Use the YouTube learning hub for spoken English tips, grammar clarity, communication confidence, and English through Malayalam support."
      />
      <VideoSection />
      <section className="bg-white px-4 py-16 text-center lg:px-8">
        <CtaButton href={socials.youtube} tone="primary" icon={<Video size={18} aria-hidden />}>
          Subscribe on YouTube
        </CtaButton>
      </section>
      <FinalCta />
    </PageShell>
  );
}
