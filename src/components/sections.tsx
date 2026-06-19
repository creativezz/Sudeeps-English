import {
  ArrowRight,
  AtSign,
  CalendarCheck,
  CheckCircle2,
  Clock,
  ExternalLink,
  MapPin,
  MessageCircle,
  Network,
  Phone,
  Play,
  Quote,
  Star,
  Video,
} from "lucide-react";
import Link from "next/link";
import {
  address,
  courses,
  faqs,
  mapEmbed,
  phoneDisplay,
  phoneHref,
  reviews,
  socials,
  stats,
  whatsappHref,
  youtubeVideos,
} from "@/lib/site";
import { CtaButton, HeroCtas } from "./cta-buttons";
import { ParticleField } from "./particle-field";

export function SectionHeader({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="text-sm font-black uppercase tracking-[0.18em] text-[#0f9f9a]">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0b1f3a] md:text-5xl">
        {title}
      </h2>
      {children ? <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">{children}</p> : null}
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden px-4 pb-14 pt-10 lg:px-8 lg:pb-20 lg:pt-16">
      <div className="absolute inset-0 z-0 opacity-90">
        <ParticleField />
      </div>
      <div className="absolute left-1/2 top-10 z-0 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-200/25 blur-3xl" />
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-2 text-sm font-bold text-[#0b1f3a]">
            <Star size={17} fill="#f59e0b" className="text-amber-500" aria-hidden />
            5.0 rating from 15 Google reviews
          </div>
          <h1 className="mt-6 max-w-3xl text-4xl font-black tracking-tight text-[#0b1f3a] md:text-6xl">
            Speak English Confidently with Sudeep
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700 md:text-xl">
            Premium spoken English, grammar, interview preparation, and practical communication
            coaching for learners in Aluva and across Kerala. Learn clearly with English through
            Malayalam support when you need it.
          </p>
          <div className="mt-8">
            <HeroCtas />
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <Icon className="text-[#0f9f9a]" size={22} aria-hidden />
                  <p className="mt-3 text-2xl font-black text-[#0b1f3a]">{stat.value}</p>
                  <p className="text-sm font-semibold text-slate-500">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="relative">
          <div className="float-slow rounded-[2rem] border border-slate-200 bg-white p-4 shadow-2xl shadow-blue-950/10">
            <div className="relative overflow-hidden rounded-[1.5rem] bg-[#0b1f3a] p-6 text-white">
              <div className="shimmer-line absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-200/80 to-transparent" />
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-200">
                English coaching center in Aluva
              </p>
              <div className="mt-8 grid gap-4">
                {[
                  "Spoken English classes in Aluva",
                  "Interview English training",
                  "Online English classes Kerala",
                  "English through Malayalam",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/10 p-4">
                    <CheckCircle2 className="text-[#4ee0d7]" size={22} aria-hidden />
                    <span className="font-bold">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-2xl bg-white p-5 text-[#0b1f3a]">
                <p className="text-sm font-bold text-slate-500">Google Business status</p>
                <p className="mt-1 flex items-center gap-2 text-xl font-black">
                  <Clock size={21} aria-hidden /> Opens 9 AM Monday
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CourseGrid({ limit }: { limit?: number }) {
  const visibleCourses = limit ? courses.slice(0, limit) : courses;
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      {visibleCourses.map((course) => {
        const Icon = course.icon;
        return (
          <article
            key={course.title}
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#0f9f9a]/45 hover:shadow-xl hover:shadow-blue-950/10"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e8fbf8] text-[#0f9f9a]">
              <Icon size={24} aria-hidden />
            </div>
            <h3 className="mt-5 text-xl font-black text-[#0b1f3a]">{course.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{course.description}</p>
            <Link
              href="/book-demo"
              className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#2563eb]"
            >
              Enquire now <ArrowRight size={16} aria-hidden />
            </Link>
          </article>
        );
      })}
    </div>
  );
}

export function CoursesSection() {
  return (
    <section className="bg-white px-4 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Courses" title="Choose the English training that fits your goal">
          From basics to business communication, every course is practical, confidence-focused,
          and suitable for Malayalam-speaking learners.
        </SectionHeader>
        <CourseGrid />
      </div>
    </section>
  );
}

export function WhySection() {
  const items = [
    "Malayalam-friendly explanations for clear understanding",
    "Daily speaking practice instead of theory-only learning",
    "Confidence building for students, job seekers, and professionals",
    "Online and offline class options for learners across Kerala",
  ];
  return (
    <section className="px-4 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#0f9f9a]">Why Sudeeps English</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0b1f3a] md:text-5xl">
            English coaching that feels personal, clear, and usable.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            Sudeeps English is built for learners who want to speak naturally in real situations:
            class, work, interviews, customer conversations, travel, and everyday life.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {items.map((item) => (
            <div key={item} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <CheckCircle2 className="text-[#0f9f9a]" size={24} aria-hidden />
              <p className="mt-4 font-bold leading-7 text-[#0b1f3a]">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function VideoSection() {
  return (
    <section className="bg-[#071b31] px-4 py-16 text-white lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-200">Videos</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
            Learn with Sudeeps English on YouTube
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Watch practical lessons, speaking tips, grammar guidance, and confidence-building
            videos from Sudeeps English. Subscribe for fresh learning content.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <CtaButton href={socials.youtube} tone="secondary" icon={<Video size={18} aria-hidden />}>
              Open YouTube Channel
            </CtaButton>
            <CtaButton href="/videos" tone="whatsapp" icon={<Play size={18} aria-hidden />}>
              Video Hub
            </CtaButton>
          </div>
        </div>
        <div className="grid gap-4">
          {youtubeVideos.map((video) => (
            <div
              key={video.src}
              className="overflow-hidden rounded-2xl border border-white/15 bg-black shadow-2xl shadow-black/30"
            >
              <iframe
                className="aspect-video w-full"
                src={video.src}
                title={video.title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          ))}
          <div className="rounded-2xl border border-white/15 bg-white/5 p-4 text-sm text-slate-300">
            Open the official YouTube channel for the latest Sudeeps English uploads.
          </div>
        </div>
      </div>
    </section>
  );
}

export function InstagramSection() {
  return (
    <section className="bg-white px-4 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#0f9f9a]">Instagram</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0b1f3a] md:text-5xl">
            Follow reels, quick tips, and class updates.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            Instagram embeds can be limited by platform permissions, so this section keeps the
            experience fast and reliable with a direct profile CTA.
          </p>
          <div className="mt-7">
            <CtaButton href={socials.instagram} tone="whatsapp" icon={<AtSign size={18} aria-hidden />}>
              Follow @sudeepsenglish
            </CtaButton>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {["Speaking tips", "Grammar reels", "Student updates"].map((item) => (
            <a
              key={item}
              href={socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="min-h-48 rounded-2xl border border-slate-200 bg-gradient-to-br from-[#0b1f3a] via-[#2563eb] to-[#0f9f9a] p-5 text-white shadow-lg transition hover:-translate-y-1"
            >
              <AtSign size={25} aria-hidden />
              <p className="mt-20 text-xl font-black">{item}</p>
              <p className="mt-2 inline-flex items-center gap-1 text-sm font-bold text-cyan-100">
                View profile <ExternalLink size={14} aria-hidden />
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ReviewsSection() {
  return (
    <section className="px-4 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Reviews" title="Trusted by learners looking for real confidence">
          Sudeeps English has a 5.0 Google rating from 15 reviews, with a teaching style focused
          on clarity, practice, and learner confidence.
        </SectionHeader>
        <div className="grid gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <article key={review.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <Quote className="text-[#0f9f9a]" size={28} aria-hidden />
              <div className="mt-4 flex text-amber-500" aria-label="Five star review">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={18} fill="currentColor" aria-hidden />
                ))}
              </div>
              <p className="mt-4 leading-7 text-slate-700">{review.text}</p>
              <p className="mt-5 font-black text-[#0b1f3a]">{review.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LocationSection() {
  return (
    <section className="bg-white px-4 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#0f9f9a]">Location</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0b1f3a] md:text-5xl">
            Offline spoken English classes in Aluva.
          </h2>
          <p className="mt-5 flex gap-3 text-lg leading-8 text-slate-700">
            <MapPin className="mt-1 shrink-0 text-[#0f9f9a]" size={23} aria-hidden /> {address}
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <CtaButton href={phoneHref} icon={<Phone size={18} aria-hidden />}>
              Call {phoneDisplay}
            </CtaButton>
            <CtaButton href={whatsappHref} tone="whatsapp" icon={<MessageCircle size={18} aria-hidden />}>
              WhatsApp
            </CtaButton>
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-xl shadow-blue-950/10">
          <iframe
            title="Sudeeps English Google Maps location"
            src={mapEmbed}
            className="h-[420px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

export function FaqSection() {
  return (
    <section className="px-4 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeader eyebrow="FAQ" title="Questions students ask before joining" />
        <div className="grid gap-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm open:border-[#0f9f9a]/40"
            >
              <summary className="cursor-pointer list-none text-lg font-black text-[#0b1f3a]">
                {faq.question}
              </summary>
              <p className="mt-3 leading-7 text-slate-700">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="bg-[#0b1f3a] px-4 py-16 text-white lg:px-8 lg:py-20">
      <div className="mx-auto max-w-4xl text-center">
        <CalendarCheck className="mx-auto text-[#4ee0d7]" size={38} aria-hidden />
        <h2 className="mt-5 text-3xl font-black tracking-tight md:text-5xl">
          Start speaking better English this week.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">
          Book a demo class, call the center, or send a WhatsApp message to find the right course
          for your current level and goal.
        </p>
        <div className="mt-8 flex justify-center">
          <HeroCtas />
        </div>
      </div>
    </section>
  );
}

export function SocialButtons() {
  return (
    <div className="flex flex-wrap gap-3">
      <CtaButton href={socials.youtube} tone="secondary" icon={<Video size={18} aria-hidden />}>
        YouTube
      </CtaButton>
      <CtaButton href={socials.instagram} tone="secondary" icon={<AtSign size={18} aria-hidden />}>
        Instagram
      </CtaButton>
      <CtaButton href={socials.linkedinOne} tone="secondary" icon={<Network size={18} aria-hidden />}>
        LinkedIn
      </CtaButton>
    </div>
  );
}
