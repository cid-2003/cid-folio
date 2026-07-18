import { ThoughtsClient } from "./thoughts-client";
import { getThoughts } from "@/app/db/thoughts";
import Container from "@/components/shared/container";
import type { Metadata } from "next";
import Social from "@/components/social";
import { WavySeparator } from "@/components/shared/wavy-separator";

export const metadata: Metadata = {
  title: "Thoughts",
  description:
    "Développement, Lecture, Sport, Passions, tous savoir sur Cédrick Emmanuel..",
  keywords: [
    "Cédrick Emmanuel Thoughts",
    "Cédrick Emmanuel Passions",
    "Developpeur web Thoughts",
    "Tech Notes",
  ],
  openGraph: {
    title: "Thoughts | Cédrick Emmanuel",
    description:
      "Développement, Lecture, Sport, Passions, tous savoir sur Cédrick Emmanuel.",
    url: "https://cid-folio.vercel.app/thoughts",
  },
  alternates: {
    canonical: "https://cid-folio.vercel.app/thoughts",
  },
};

export const dynamic = "force-static";

export default async function ThoughtsPage() {
  const thoughts = await getThoughts();

  const thoughtsWithContent = await Promise.all(
    thoughts.map(async (thought) => {
      const { ThoughtsMDX } = await import("@/components/thoughts-mdx");
      return {
        ...thought,
        renderedContent: <ThoughtsMDX source={thought.content} />,
      };
    })
  );

  return (
    <Container size="large">
      <ThoughtsClient thoughts={thoughtsWithContent} />
      <WavySeparator />
      <Social />  
      <WavySeparator />
    </Container>
  );
}
