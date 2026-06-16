import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { MegaFooter } from "@/components/layout/MegaFooter";
import {
  BlogArticleBody,
  BlogAuthorCard,
  BlogInlineLink,
} from "@/components/blog/BlogArticleBody";
import {
  BlogArticleContent,
  BlogArticleFooter,
  BlogArticleShell,
} from "@/components/blog/BlogArticleChrome";
import { BlogPostHero } from "@/components/blog/BlogPostHero";
import { BlogRelatedPosts } from "@/components/blog/BlogRelatedPosts";
import { BlogComments } from "@/components/blog/BlogComments";
import { BLOG_POSTS, BLOG_POSTS_BY_SLUG, isBlogSlug } from "@/lib/blog-posts";
import { pageMetadata, SITE_URL } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/json-ld";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  if (!isBlogSlug(slug)) return {};
  const post = BLOG_POSTS_BY_SLUG[slug];
  return pageMetadata(`/blog/${slug}`, {
    ogType: "article",
    publishedTime: new Date(post.published).toISOString(),
    authors: [post.author],
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  if (!isBlogSlug(slug)) notFound();
  const post = BLOG_POSTS_BY_SLUG[slug];
  const shareUrl = `${SITE_URL}${post.href}`;

  return (
    <>
      <JsonLd
        data={[
          articleJsonLd(post),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: post.href },
          ]),
        ]}
      />
      <Navbar solid />
      <main className="flex-1 bg-white">
        <BlogArticleShell>
          <BlogPostHero post={post} />
          <BlogArticleContent shareUrl={shareUrl} shareTitle={post.title}>
            <BlogArticleBody sections={post.sections} />
            {post.slug === "hyperlocal-chattogram-products" ? (
              <BlogInlineLink href="/projects/the-chattala">View The Chattala case study</BlogInlineLink>
            ) : null}
            {post.slug === "edtech-mobile-performance-bangladesh" ? (
              <BlogInlineLink href="/projects/puc-pro">View the PUC PRO case study</BlogInlineLink>
            ) : null}
            {post.slug === "devops-scaling-playbook-bangladesh" ? (
              <BlogInlineLink href="/services">Explore Inievo engineering services</BlogInlineLink>
            ) : null}
            <BlogAuthorCard post={post} shareUrl={shareUrl} />
            <BlogComments slug={post.slug} />
            <BlogArticleFooter />
          </BlogArticleContent>
          <BlogRelatedPosts currentSlug={post.slug} />
        </BlogArticleShell>
      </main>
      <MegaFooter />
    </>
  );
}
