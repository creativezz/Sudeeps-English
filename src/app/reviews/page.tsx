import type { Metadata } from "next";
import { PageShell } from "@/components/layout";
import { PageHero } from "@/components/page-hero";
import { FinalCta, ReviewsSection } from "@/components/sections";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "Sudeeps English has a 5.0 Google rating from 15 reviews for spoken English coaching in Aluva.",
};

export default function ReviewsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Reviews"
        title="A highly rated English coaching center in Aluva."
        description="Students choose Sudeeps English for practical speaking confidence, supportive teaching, and clear English through Malayalam explanations."
      />
      <ReviewsSection />
      <FinalCta />
    </PageShell>
  );
}
