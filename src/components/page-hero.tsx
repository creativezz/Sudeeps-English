import { HeroCtas } from "./cta-buttons";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="px-4 py-14 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-[#0f9f9a]">{eyebrow}</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-[#0b1f3a] md:text-6xl">
          {title}
        </h1>
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-700 md:text-xl">
          {description}
        </p>
        <div className="mt-8 flex justify-center">
          <HeroCtas />
        </div>
      </div>
    </section>
  );
}
