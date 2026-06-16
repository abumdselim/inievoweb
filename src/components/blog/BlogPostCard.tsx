import Link from "next/link";
import type { BlogPost } from "@/lib/blog-posts";
import { InievoIcon } from "@/components/ui/InievoIcon";
import { SafeImage } from "@/components/ui/SafeImage";

export function BlogPostCard({
  post,
  compact = false,
  variant = "default",
}: {
  post: BlogPost;
  compact?: boolean;
  variant?: "default" | "insights";
}) {
  const isInsights = variant === "insights";

  return (
    <Link href={post.href} className="no-underline group h-full block">
      <article
        className={`h-full rounded-xl sm:rounded-2xl border overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col ${
          isInsights
            ? "bg-[#137ece] border-[#0f6db8] shadow-md shadow-[#137ece]/20 hover:shadow-xl hover:shadow-[#137ece]/30"
            : "bg-white border-slate-100"
        }`}
      >
        <div
          className={`relative overflow-hidden border-b ${
            isInsights ? "border-white/15 bg-[#0f6db8]/40" : "bg-slate-100 border-slate-100"
          } ${compact ? "h-28 sm:h-32 lg:h-36" : "h-44"}`}
        >
          <SafeImage
            src={post.thumbnail}
            alt={post.title}
            width={800}
            height={440}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
          <span
            className={`absolute font-bold uppercase tracking-wider rounded-full shadow-sm ${
              isInsights
                ? "bg-white/15 border border-white/25 text-white"
                : "bg-white/95 border border-slate-200/80 text-[#137ece]"
            } ${
              compact
                ? "top-2 left-2 sm:top-3 sm:left-3 text-[9px] sm:text-[10px] px-2 py-0.5 sm:px-2.5 sm:py-1"
                : "top-4 left-4 text-[11px] px-3 py-1"
            }`}
          >
            {post.badge}
          </span>
        </div>
        <div className={`flex flex-col flex-1 ${compact ? "p-3 sm:p-4 lg:p-5" : "p-6 lg:p-7"}`}>
          <p
            className={`font-bold uppercase tracking-wider mb-1.5 sm:mb-2 ${
              isInsights ? "text-white/75" : "text-slate-500"
            } ${compact ? "text-[9px] sm:text-[10px]" : "text-[11px]"}`}
          >
            {post.category}
          </p>
          <h3
            className={`font-extrabold transition-colors ${
              isInsights
                ? "text-white group-hover:text-white"
                : "text-slate-900 group-hover:text-[#137ece]"
            } ${compact ? "text-sm sm:text-base leading-snug mb-2 line-clamp-3" : "text-lg mb-3"}`}
          >
            {post.title}
          </h3>
          {!compact ? (
            <p className={`text-sm leading-relaxed flex-1 ${isInsights ? "text-white/90" : "text-slate-600"}`}>
              {post.excerpt}
            </p>
          ) : (
            <p
              className={`text-xs sm:text-sm leading-relaxed flex-1 line-clamp-2 hidden sm:block ${
                isInsights ? "text-white/90" : "text-slate-600"
              }`}
            >
              {post.excerpt}
            </p>
          )}
          <span
            className={`inline-flex items-center gap-1.5 sm:gap-2 font-bold group-hover:gap-2 sm:group-hover:gap-3 transition-all ${
              isInsights ? "text-[#facc15]" : "text-[#137ece]"
            } ${compact ? "text-xs sm:text-sm mt-3 sm:mt-4" : "text-sm mt-5"}`}
          >
            Read article
            <InievoIcon name="arrow_right" size={compact ? 14 : 16} />
          </span>
        </div>
      </article>
    </Link>
  );
}
