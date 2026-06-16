import Link from "next/link";
import type { BlogPost } from "@/lib/blog-posts";
import { CONTAINER, TYPE_LABEL } from "@/lib/design-system";
import { SITE_URL } from "@/lib/seo";
import { BlogShareBarHorizontal } from "@/components/blog/BlogShareBar";
import { InievoIcon } from "@/components/ui/InievoIcon";
import { SafeImage } from "@/components/ui/SafeImage";

export function BlogPostHero({ post }: { post: BlogPost }) {
  const shareUrl = `${SITE_URL}${post.href}`;

  return (
    <header className="relative w-full border-b border-slate-200/80 bg-gradient-to-b from-slate-50/90 via-white to-white">
      <div className="pointer-events-none absolute inset-0 inievo-section-grid opacity-[0.025]" aria-hidden />
      <div className={`${CONTAINER} relative max-w-4xl pt-10 sm:pt-12 lg:pt-14 pb-10 lg:pb-12`}>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 mb-10 hover:opacity-80 transition-opacity"
        >
          <InievoIcon name="arrow_left" size={16} className="text-[#137ece]" />
          <span className="text-[#137ece] font-semibold text-sm tracking-wide">All insights</span>
        </Link>

        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className={`${TYPE_LABEL} mb-0`}>{post.category}</span>
          <span className="inline-flex rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-500">
            {post.badge}
          </span>
        </div>

        <h1 className="font-display text-[2rem] sm:text-4xl lg:text-[2.85rem] font-extrabold tracking-[-0.03em] leading-[1.1] text-slate-900 max-w-3xl">
          {post.title}
        </h1>

        <p className="mt-6 max-w-2xl font-body text-lg sm:text-xl text-slate-600 leading-[1.65]">
          {post.excerpt}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-slate-500">
          <span className="inline-flex items-center gap-2 font-semibold text-slate-700">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#137ece]/10 text-[#137ece] text-xs font-extrabold">
              {post.author
                .split(" ")
                .map((part) => part[0])
                .join("")
                .slice(0, 2)
                .toUpperCase()}
            </span>
            {post.author}
          </span>
          <span className="hidden sm:block h-4 w-px bg-slate-200" aria-hidden />
          <span className="inline-flex items-center gap-1.5">
            <InievoIcon name="calendar" size={15} className="text-slate-400" />
            <time dateTime={post.published}>{post.published}</time>
          </span>
          <span className="hidden sm:block h-4 w-px bg-slate-200" aria-hidden />
          <span className="inline-flex items-center gap-1.5">
            <InievoIcon name="clock" size={15} className="text-slate-400" />
            {post.readTime}
          </span>
        </div>

        <div className="mt-8 lg:hidden">
          <BlogShareBarHorizontal url={shareUrl} title={post.title} />
        </div>
      </div>

      <div className={`${CONTAINER} relative max-w-5xl pb-12 lg:pb-16`}>
        <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-slate-100 shadow-[0_28px_70px_-32px_rgba(15,23,42,0.32)]">
          <SafeImage
            src={post.thumbnail}
            alt={post.title}
            width={1200}
            height={660}
            className="w-full h-auto object-cover aspect-[1200/660]"
            priority
          />
        </div>
      </div>
    </header>
  );
}
