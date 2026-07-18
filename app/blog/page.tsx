import { BlogPaginatedList } from "@/components/blog-paginated-list";
import Container from "@/components/shared/container";
import type { Metadata } from "next";
import Script from "next/script";
import { getAllBlogPostsList } from "../db/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "J'y partage mes expériences, les défis rencontrés au cours de mes projets ainsi que les technologies que j'explore. Chaque article est une occasion de documenter ce que j'apprends et de partager des solutions qui pourront être utiles à d'autres développeurs.",
  keywords: [
    "Cédrick Emmanuel Blog",
    "Developpement web Blog",
    "React Blog",
    "Next.js Blog",
    "TypeScript Blog",
    "Web Development Articles",
  ],
  openGraph: {
    title: "Blog | Cédrick Emmanuel",
    description:
      "J'y partage mes expériences, les défis rencontrés au cours de mes projets.",
    url: "https://cid-folio.vercel.app/blog",
  },
  alternates: {
    canonical: "https://cid-folio.vercel.app/blog",
    types: {
      "application/rss+xml": "https://cid-folio.vercel.app/feed.xml",
    },
  },
};

export const dynamic = "force-static";

export default async function Blog() {
  const posts = await getAllBlogPostsList();
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://onurhan.dev";

  const blogCollectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${baseUrl}/blog`,
    name: "Blog | Cédrick Emmanuel",
    description:
      "J'y partage mes expériences, les défis rencontrés au cours de mes projets ainsi que les technologies que j'explore. Chaque article est une occasion de documenter ce que j'apprends et de partager des solutions qui pourront être utiles à d'autres développeurs.",
    url: `${baseUrl}/blog`,
    mainEntity: {
      "@type": "Blog",
      name: "Cédrick Emmanuel's Blog",
      description:
        "Chaque article est une occasion de documenter ce que j'apprends et de partager des solutions qui pourront être utiles à d'autres développeurs.",
      author: {
        "@type": "Person",
        name: "Cédrick Emmanuel",
        url: baseUrl,
      },
      blogPost: posts.map((post) => ({
        "@type": "BlogPosting",
        headline: post.metadata.title,
        url: `${baseUrl}/blog/${post.slug}`,
        datePublished: post.metadata.publishedAt,
        description: post.metadata.summary,
      })),
    },
  };

  return (
    <Container size="large">
      <Script
        id="blog-collection-structured-data"
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogCollectionJsonLd),
        }}
      />
      <BlogPaginatedList posts={posts} />
    </Container>
  );
}
