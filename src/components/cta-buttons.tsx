import { CalendarCheck, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { phoneHref, phoneDisplay, whatsappHref } from "@/lib/site";

type ButtonTone = "primary" | "secondary" | "whatsapp";

const toneClasses: Record<ButtonTone, string> = {
  primary:
    "bg-[#0b1f3a] text-white shadow-lg shadow-[#0b1f3a]/20 hover:-translate-y-0.5 hover:bg-[#12345d]",
  secondary:
    "border border-[#0b1f3a]/15 bg-white text-[#0b1f3a] hover:-translate-y-0.5 hover:border-[#2563eb]/40 hover:bg-[#f2f8ff]",
  whatsapp:
    "bg-[#0f9f9a] text-white shadow-lg shadow-[#0f9f9a]/20 hover:-translate-y-0.5 hover:bg-[#0b827e]",
};

export function CtaButton({
  href,
  children,
  tone = "primary",
  icon,
}: {
  href: string;
  children: React.ReactNode;
  tone?: ButtonTone;
  icon?: React.ReactNode;
}) {
  const external = href.startsWith("http");
  const className = `inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition ${toneClasses[tone]}`;

  if (external) {
    return (
      <a className={className} href={href} target="_blank" rel="noreferrer">
        {icon}
        {children}
      </a>
    );
  }

  return (
    <Link className={className} href={href}>
      {icon}
      {children}
    </Link>
  );
}

export function HeroCtas() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <CtaButton href={phoneHref} icon={<Phone size={18} aria-hidden />}>
        Call {phoneDisplay}
      </CtaButton>
      <CtaButton
        href={whatsappHref}
        tone="whatsapp"
        icon={<MessageCircle size={18} aria-hidden />}
      >
        WhatsApp
      </CtaButton>
      <CtaButton
        href="/book-demo"
        tone="secondary"
        icon={<CalendarCheck size={18} aria-hidden />}
      >
        Book Demo Class
      </CtaButton>
    </div>
  );
}

export function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 px-3 py-2 shadow-2xl backdrop-blur md:hidden">
      <div className="mx-auto grid max-w-md grid-cols-2 gap-2 pb-[env(safe-area-inset-bottom)]">
        <a
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#0b1f3a] px-4 text-sm font-bold text-white"
          href={phoneHref}
        >
          <Phone size={17} aria-hidden /> Call
        </a>
        <a
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#0f9f9a] px-4 text-sm font-bold text-white"
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
        >
          <MessageCircle size={17} aria-hidden /> WhatsApp
        </a>
      </div>
    </div>
  );
}
