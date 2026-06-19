import { BookOpenCheck, MapPin, Phone, Star } from "lucide-react";
import Link from "next/link";
import { address, navItems, phoneDisplay, phoneHref, socials } from "@/lib/site";
import { CtaButton, MobileStickyCta } from "./cta-buttons";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Sudeeps English home">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0b1f3a] text-white shadow-md shadow-[#0b1f3a]/15">
            <BookOpenCheck size={23} aria-hidden />
          </span>
          <span className="leading-tight">
            <span className="block text-base font-black tracking-tight text-[#0b1f3a]">
              Sudeeps English
            </span>
            <span className="block text-xs font-semibold text-[#0f9f9a]">
              Spoken English, Aluva
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font700 font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-[#0b1f3a]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a className="text-sm font-bold text-[#0b1f3a]" href={phoneHref}>
            {phoneDisplay}
          </a>
          <CtaButton href="/book-demo">Book Demo</CtaButton>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <Link
            className="hidden rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-black text-[#0b1f3a] sm:inline-flex"
            href="/courses"
          >
            Courses
          </Link>
          <Link
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#0b1f3a]"
            href="/contact"
            aria-label="Contact Sudeeps English"
          >
            <Phone size={20} aria-hidden />
          </Link>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-[#06182c] pb-20 text-white md:pb-0">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-[1.3fr_0.8fr_0.9fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#0b1f3a]">
              <BookOpenCheck size={23} aria-hidden />
            </span>
            <div>
              <p className="font-black">Sudeeps English</p>
              <p className="text-sm text-cyan-100">English coaching center in Aluva</p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
            Practical spoken English, grammar, interview preparation, business communication,
            and English through Malayalam for learners in Aluva and across Kerala.
          </p>
          <div className="mt-5 flex items-center gap-2 text-sm font-bold text-amber-200">
            <Star size={18} fill="currentColor" aria-hidden /> 5.0 Google rating from 15 reviews
          </div>
        </div>

        <div>
          <p className="font-bold">Pages</p>
          <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-300">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
            <Link href="/book-demo" className="hover:text-white">
              Book Demo
            </Link>
          </div>
        </div>

        <div>
          <p className="font-bold">Visit or connect</p>
          <p className="mt-4 flex gap-2 text-sm leading-6 text-slate-300">
            <MapPin className="mt-1 shrink-0" size={17} aria-hidden /> {address}
          </p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm font-bold">
            <a href={socials.youtube} target="_blank" rel="noreferrer" className="hover:text-cyan-100">
              YouTube
            </a>
            <a href={socials.instagram} target="_blank" rel="noreferrer" className="hover:text-cyan-100">
              Instagram
            </a>
            <a href={socials.linkedinOne} target="_blank" rel="noreferrer" className="hover:text-cyan-100">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-slate-400">
        &copy; {new Date().getFullYear()} Sudeeps English. Built for fast, accessible learning enquiries.
      </div>
      <MobileStickyCta />
    </footer>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
