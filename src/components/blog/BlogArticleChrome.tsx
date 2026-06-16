import Link from "next/link";
import type { ReactNode } from "react";
import { BTN_PRIMARY, CONTAINER } from "@/lib/design-system";
import { BlogShareBarSticky } from "@/components/blog/BlogShareBar";
import { InievoIcon } from "@/components/ui/InievoIcon";

type BlogArticleContentProps = {
  children: ReactNode;
  shareUrl: string;
  shareTitle: string;
};

export function BlogArticleFooter() {
  return (
    <div className="inievo-blog-footer-actions">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-[#137ece] font-bold text-sm hover:opacity-80 transition-opacity"
      >
        <InievoIcon name="arrow_left" size={16} />
        Back to insights
      </Link>
      <Link
        href="/contact"
        className={`${BTN_PRIMARY} inline-flex w-full sm:w-auto justify-center text-center`}
      >
        Start a conversation
      </Link>
    </div>
  );
}

export function BlogArticleShell({ children }: { children: ReactNode }) {
  return <article className="inievo-blog-article relative w-full bg-white">{children}</article>;
}

export function BlogArticleContent({ children, shareUrl, shareTitle }: BlogArticleContentProps) {
  return (
    <div className={`${CONTAINER} relative max-w-6xl py-14 sm:py-16 lg:py-20`}>
      <div className="lg:grid lg:grid-cols-[3.25rem_minmax(0,42rem)] lg:gap-x-10 xl:gap-x-14 lg:justify-center">
        <BlogShareBarSticky url={shareUrl} title={shareTitle} />
        <div className="min-w-0 mx-auto w-full max-w-[42rem] lg:mx-0">{children}</div>
      </div>
    </div>
  );
}
