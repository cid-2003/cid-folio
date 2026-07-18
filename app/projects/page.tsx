import Container from "@/components/shared/container";
import { ProjectsClient } from "./projects-client";
import { getAllProjects } from "@/lib/projects";
import type { Metadata } from "next";
import { WavySeparator } from "@/components/shared/wavy-separator";
import { CTA } from "@/components/cta";
import Social from "@/components/social";

export const metadata: Metadata = {
  title: "Projects",
  description: "Une collection des projets sur lesquelles j'ai travaillées.",
  keywords: [
    "Cédrick Emmanuel Projects",
    "Developpeur web Projects",
    "Web Development Projects",
    "Portfolio Projects",
    "Laravel Projects",
    "Next.js Projects",
  ],
  openGraph: {
    title: "Projects | Cédrick Emmanuel",
    description: "Une collection des projets sur lesquelles j'ai travaillées.",
    url: "https://cid-folio.vercel.app/projects",
  },
  alternates: {
    canonical: "https://cid-folio.vercel.app/projects",
  },
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <Container size="large">
      <ProjectsClient projects={projects} />

      <WavySeparator />

      <CTA />
      <Social />  
    </Container>
  );
}
