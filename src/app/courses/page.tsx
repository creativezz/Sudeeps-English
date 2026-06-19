import type { Metadata } from "next";
import { PageShell } from "@/components/layout";
import { PageHero } from "@/components/page-hero";
import { CourseGrid, FaqSection, FinalCta } from "@/components/sections";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Explore spoken English, grammar, interview English, business communication, one-to-one, online, and offline classes at Sudeeps English.",
};

export default function CoursesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Courses"
        title="English courses for beginners, interviews, work, and daily life."
        description="Choose from Basic Spoken English, Advanced Spoken English, Grammar Foundation, Interview English, Business Communication, One-to-One Coaching, Online English Classes, and Offline Classes in Aluva."
      />
      <section className="bg-white px-4 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <CourseGrid />
        </div>
      </section>
      <FaqSection />
      <FinalCta />
    </PageShell>
  );
}
