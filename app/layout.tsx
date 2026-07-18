import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

import { Header } from "@/components/header";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || "https://cedrick.dev"
  ),
  title: {
    default: "Cédrick Emmanuel - Developpeur web  at ikas",
    template: "%s | Cédrick Emmanuel",
  },
  description:
    "Cédrick Emmanuel is a Developpeur web  at ikas, growing the developer ecosystem and building e-commerce products and experiences. Expert in React, Next.js, TypeScript, and modern web technologies.",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  keywords: [
    "Cédrick Emmanuel",
    "Cédrick Emmanuel About",
    "Cédrick Emmanuel Developpeur Backend",
    "Cédrick Emmanuel Cotonou",
    "Developeur Web",
    "MISSEHOUNGBE Cédrick Emmanuel | Developpeur Cotonou",
  ],
  authors: [{ name: "Cédrick Emmanuel", url: "https://cedrick.dev" }],
  creator: "Cédrick Emmanuel",
  publisher: "Cédrick Emmanuel",
  openGraph: {
    title: "Cédrick Emmanuel - Developpeur web  at ikas",
    description:
      "Cédrick Emmanuel is a Developpeur web  at ikas, growing the developer ecosystem and building e-commerce products and experiences.",
    url: "https://cedrick.dev",
    siteName: "Cédrick Emmanuel - Developpeur web",
    locale: "en_FR",
    alternateLocale: ["tr_TR"],
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
    other: {
      rel: "icon",
      url: "/logo.png",
    },
  },
  twitter: {
    title: "Cédrick Emmanuel - Developpeur web ",
    card: "summary_large_image",
    site: "cid_folio",
    creator: "cid-dev",
    description:
      "Je transforme des idées en applications web modernes grâce à Next.js, Laravel et React etc...",
  },
  verification: {
    google: "K1pkJ72cY3DylswXke2MHJGxmjJ91WXwgozcCICvFrU",
  },
  alternates: {
    canonical: "https://cedrick.dev",
    languages: {
      "en-US": "https://cid_folio",
      "tr-TR": "https://cid_folio",
      "x-default": "https://cid_folio",
    },
    types: {
      "application/rss+xml": "https://cid_folio.dev/feed.xml",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personStructuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Cédrick Emmanuel",
    alternateName: "Onurhan",
    jobTitle: "Developpeur web ",
    url: "https://cedrick.dev",
    description:
      "Developpeur web  at ikas, growing the developer ecosystem and building e-commerce products and experiences. Expert in React, Next.js, TypeScript, and modern web technologies.",
    knowsAbout: [
    "Software Development",
    "Web Development",
    "E-commerce Development",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Laravel",
    "WordPress",
  ],
    sameAs: [
    "https://github.com/cid-2003",
    "https://gravatar.com/cedrickdonald29",
  ],
    worksFor: {
      "@type": "Organization",
      name: "PrimoCom",
    url: "https://www.primocom.net",
    description:
      "PrimoCom | Agence de communication digitale.",
  },
    address: {
      "@type": "PostalAddress",
      addressCountry: "BN",
      addressLocality: "Bénin",
    },
    nationality: {
      "@type": "Country",
      name: "Bénin",
      alternateName: "Benin",
    },
    workLocation: {
      "@type": "Country",
      name: "Bénin",
      alternateName: "Benin",
    },
  };

  return (
    <html lang="en">
      <body className="bg-background text-foreground overflow-y-scroll font-body">
        <Script
          id="person-structured-data"
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data is safe
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personStructuredData),
          }}
        />
        <main className="antialiased lg:max-w-2xl md:max-w-full mx-4 mb-40 flex flex-col md:flex-row mt-2 sm:mt-8 lg:mx-auto bg-background">
          <section className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
            <Header />

            {children}
          </section>
        </main>
      </body>
    </html>
  );
}
