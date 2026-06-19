import { PageShell } from "@/components/layout";
import {
  CoursesSection,
  FaqSection,
  FinalCta,
  Hero,
  InstagramSection,
  LocationSection,
  ReviewsSection,
  VideoSection,
  WhySection,
} from "@/components/sections";
import { faqJsonLd, localBusinessJsonLd } from "@/lib/site";

export default function Home() {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Hero />
      <CoursesSection />
      <WhySection />
      <VideoSection />
      <InstagramSection />
      <ReviewsSection />
      <LocationSection />
      <FaqSection />
      <FinalCta />
    </PageShell>
  );
}
