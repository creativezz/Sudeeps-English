import type { Metadata } from "next";
import { MessageCircle, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { CtaButton } from "@/components/cta-buttons";
import { PageShell } from "@/components/layout";
import { PageHero } from "@/components/page-hero";
import { LocationSection, SocialButtons } from "@/components/sections";
import { address, phoneDisplay, phoneHref, whatsappHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Sudeeps English in Aluva for spoken English classes, online English classes Kerala, and interview English training.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Contact"
        title="Talk to Sudeeps English about your English goal."
        description="Call, WhatsApp, visit the Aluva coaching center, or send an enquiry for spoken English, interview English, online classes, and English through Malayalam."
      />
      <section className="bg-white px-4 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-2xl bg-[#0b1f3a] p-7 text-white">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-200">
              Quick contact
            </p>
            <h2 className="mt-4 text-3xl font-black">Call or WhatsApp directly.</h2>
            <p className="mt-4 leading-8 text-slate-300">{address}</p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <CtaButton href={phoneHref} tone="secondary" icon={<Phone size={18} aria-hidden />}>
                {phoneDisplay}
              </CtaButton>
              <CtaButton href={whatsappHref} tone="whatsapp" icon={<MessageCircle size={18} aria-hidden />}>
                WhatsApp
              </CtaButton>
            </div>
            <div className="mt-7">
              <SocialButtons />
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
      <LocationSection />
    </PageShell>
  );
}
