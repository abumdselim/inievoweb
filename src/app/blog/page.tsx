import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { MegaFooter } from "@/components/layout/MegaFooter";
import { BlogPostCard } from "@/components/blog/BlogPostCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BLOG_POSTS } from "@/lib/blog-posts";
import { CONTAINER, REVEAL, SECTION_PY } from "@/lib/design-system";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/blog");

export default function BlogIndexPage() {
  return (
    <>
      <Navbar solid />
      <main className="flex-1">
        <section className={`w-full bg-slate-50 ${SECTION_PY}`}>
          <div className={CONTAINER}>
            <SectionHeader
              label="INSIGHTS"
              title="Articles from the Inievo Team"
              subtitle="Perspectives on web presence, product strategy, and engineering delivery for teams building in Bangladesh and beyond."
            />
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 ${REVEAL}`}>
              {BLOG_POSTS.map((post) => (
                <BlogPostCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <MegaFooter />
    </>
  );
}
