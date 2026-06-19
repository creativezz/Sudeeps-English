import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sudeepsenglish.com"),
  title: {
    default: "Spoken English Classes in Aluva | Sudeeps English",
    template: "%s | Sudeeps English",
  },
  description:
    "Join Sudeeps English for spoken English classes in Aluva, online English classes Kerala, interview English training, grammar, and English through Malayalam.",
  keywords: [
    "Spoken English classes in Aluva",
    "English coaching center in Aluva",
    "Best spoken English trainer in Kerala",
    "Online English classes Kerala",
    "Interview English training",
    "English through Malayalam",
  ],
  openGraph: {
    title: "Sudeeps English",
    description:
      "Speak English confidently with practical coaching in Aluva and online across Kerala.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
