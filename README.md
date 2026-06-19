# Sudeeps English Website

Premium mobile-first website for Sudeeps English, an English coaching and personal brand based in Aluva, Kerala.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Lucide React icons
- Static SEO metadata and schema.org JSON-LD

## Pages

- Home
- About Sudeep
- Courses
- Videos
- Reviews
- Gallery
- Contact
- Book Demo Class

## Key Features

- Sticky header and mobile bottom CTA bar
- Click-to-call and WhatsApp enquiry links
- WhatsApp-powered contact/demo form
- Google Maps embed
- YouTube learning section with channel CTA
- Instagram fallback section with profile CTA
- Course cards for spoken English, grammar, interview English, business communication, online classes, and offline classes in Aluva
- SEO copy for:
  - Spoken English classes in Aluva
  - English coaching center in Aluva
  - Best spoken English trainer in Kerala
  - Online English classes Kerala
  - Interview English training
  - English through Malayalam
- LocalBusiness and EducationalOrganization JSON-LD
- FAQPage schema

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Build for production:

```bash
npm run build
```

Run lint:

```bash
npm run lint
```

## Project Structure

```text
src/app/              App Router pages and metadata
src/components/       Shared layout, CTA, form, and page sections
src/lib/site.ts       Business data, links, courses, reviews, FAQ, schema
public/               Static assets
```

## Editing Business Details

Most reusable business details live in:

```text
src/lib/site.ts
```

Update phone numbers, WhatsApp text, address, social links, courses, reviews, FAQ, map embed, and schema data there.

## QA Completed

- `npm run lint` passes.
- `npm run build` passes.
- Desktop browser QA: hero, links, embeds, metadata, and overflow checked.
- Mobile browser QA: sticky CTA, form rendering, and horizontal overflow checked.
- Contact/demo form opens WhatsApp with the submitted enquiry details.

## Production Checklist

- Replace `metadataBase` in `src/app/layout.tsx` with the final production domain.
- Add real student review names/photos only with permission.
- Add real gallery images when available.
- Replace the YouTube search embed with a stable playlist embed if a public playlist ID is available.
- Connect a backend or form service if enquiries should be stored in addition to WhatsApp.
- Add Google Search Console and Analytics/Tag Manager if required.
- Verify Google Maps result after deployment.
- Configure deployment on Vercel, Netlify, or another Next.js-compatible host.
- Test Lighthouse performance, accessibility, best practices, and SEO on the deployed URL.
