import Container from "@/components/shared/container";
import Social from "@/components/social";
import { CTA } from "@/components/cta";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Cédrick Emmanuel est un Développeur Web orienté Backend, avec une bonne maîtrise du Frontend.",
  keywords: [
    "Cédrick Emmanuel",
    "Cédrick Emmanuel About",
    "Cédrick Emmanuel Developpeur Backend",
    "Cédrick Emmanuel Cotonou",
    "Developeur Web",
    "MISSEHOUNGBE Cédrick Emmanuel | Developpeur Cotonou",
  ],
  openGraph: {
    title: "About | Cédrick Emmanuel",
    description:
      "Cédrick Emmanuel est un Développeur Web orienté Backend, avec une bonne maîtrise du Frontend.",
    url: "https://onurhan.dev",
  },
  alternates: {
    canonical: "https://onurhan.dev",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Cédrick Emmanuel",
  alternateName: "Cid",
  jobTitle: "Developpeur Web & Backend Developpeur",
  url: "https://onurhan.dev",
  description:
    "Je transforme des idées en applications web modernes grâce à Next.js, Laravel et React etc...",
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
    alternateName: "Benin",
  },
  nationality: {
    "@type": "Country",
    name: "Bénin",
    alternateName: "Benin",
  },
  jobLocation: {
    "@type": "Place",
    name: "Bénin",
    alternateName: "Benin",
    address: {
      "@type": "PostalAddress",
      addressCountry: "TR",
      addressLocality: "Bénin",
    },
  },
};

export default function About() {
  const paragraphs = [
    `Basé à Cotonou (Bénin), je développe principalement avec Next.js, Laravel, React, Prisma et Docker. J'aime construire des produits utiles, apprendre en permanence et relever de nouveaux défis techniques.`,
    `Je suis développeur web spécialisé en Backend avec une solide compréhension du développement Frontend. Au fil de mes projets, j'ai acquis de l'expérience dans la conception d'applications web modernes, de la base de données jusqu'à l'interface utilisateur.`,
    `Ma façon de travailler
J'accorde une grande importance à la qualité du code, à la performance et à la simplicité. J'aime concevoir des architectures claires, écrire du code maintenable et développer des solutions qui répondent à de vrais besoins.`,
    `Ce qui me motive
Chaque nouveau projet est pour moi l'occasion d'apprendre, d'expérimenter et de progresser. Qu'il s'agisse de créer une plateforme complète avec Next.js ou une API robuste avec Laravel, j'aime relever des défis techniques et transformer des idées en produits fonctionnels.`,
  ];

  return (
    <Container
      size="large"
      className="prose prose-zinc container animate-enter"
    >
      <p className="text-lg font-medium tracking-tight mb-8">
        Salut, c'est Cid.
      </p>
      {paragraphs.map((paragraph, index) => (
        <div
          key={index}
          style={
            { "--stagger": index } as React.CSSProperties & {
              [key: string]: number;
            }
          }
        >
          <p
            className={`text-[15px] leading-relaxed opacity-80 ${
              index === paragraphs.length - 1 ? "mb-8" : "mb-6"
            }`}
          >
            {paragraph}
          </p>
          {index === 0 && <hr className="border-foreground/10 my-0!" />}
        </div>
      ))}
      <CTA />
      <Social />
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Container>
  );
}