import Container from "@/components/shared/container";
import type { Metadata } from "next";
import { WorkClient } from "./work-client";
import { CTA } from "@/components/cta";
import Social from "@/components/social";
import Script from "next/script";
import { WavySeparator } from "@/components/shared/wavy-separator";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Cédrick Emmanuel Développeur Web orienté Backend.",
  keywords: [
    "Cédrick Emmanuel Work",
    "Cédrick Emmanuel Experience",
    "Cédrick Emmanuel Career",
    "PrimoCom",
    "SAV+",
    "Developpeur web | Cotonou",
    "Parcours de développeur web backend",
  ],
  openGraph: {
    title: "Work | Cédrick Emmanuel",
    description:
      "Cédrick Emmanuel Développeur Web orienté Backend.",
    url: "https://cid-folio.vercel.app/work",
  },
  alternates: {
    canonical: "https://cid-folio.vercel.app/work",
  },
};

export default function Work() {
  return (
    <Container size="large">
      <WorkClient />
      <br />
      <WavySeparator />
      <br />
      <CTA />
      <Social />            
    </Container>
  );
}
