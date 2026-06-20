import BlogPageHero from "@/components/blog/BlogPageHero";
import BlogListingSkeleton from "@/components/blog/BlogListingSkeleton";

export default function BlogLoading() {
  return (
    <>
      <BlogPageHero />
      <BlogListingSkeleton />
    </>
  );
}
