import Hero from "@/components/Hero";
import VisionSection from "@/components/sections/VisionSection";
import VentureSection from "@/components/sections/VentureSection";
import StackSection from "@/components/sections/StackSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import BlogSection from "@/components/sections/BlogSection";
import ContactSection from "@/components/sections/ContactSection";
import { getLatestPosts } from "@/lib/blog/posts";
import { buildPersonJsonLd } from "@/lib/site/seo";

export default async function Home() {
  const { posts } = await getLatestPosts(3);
  const jsonLd = buildPersonJsonLd();

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1 className="sr-only">
        Abu Md. Selim — Software Engineer &amp; Tech Entrepreneur
      </h1>
      <Hero />
      <VisionSection />
      <VentureSection />
      <StackSection />
      <ServicesSection />
      <ProjectsSection />
      <BlogSection posts={posts} />
      <ContactSection />
    </main>
  );
}
