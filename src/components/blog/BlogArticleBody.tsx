import Link from "next/link";
import type { BlogPost } from "@/lib/blog-posts";
import { BlogShareBarFooter } from "@/components/blog/BlogShareBar";
import { InievoIcon } from "@/components/ui/InievoIcon";

export function BlogArticleBody({ sections }: { sections: BlogPost["sections"] }) {
  let firstParagraph = true;

  return (
    <div className="inievo-blog-prose">
      {sections.map((section, index) => {
        if (section.type === "h2") {
          return (
            <h2
              key={`${section.content}-${index}`}
              id={`section-${index}`}
              className="inievo-blog-heading scroll-mt-28"
            >
              {section.content}
            </h2>
          );
        }

        if (section.type === "ul") {
          return (
            <div key={`ul-${index}`} className="inievo-blog-callout">
              <p className="inievo-blog-callout-label">Key points</p>
              <ul className="space-y-3.5">
                {section.items.map((item) => (
                  <li key={item} className="flex items-start gap-3.5 text-[17px] leading-[1.65] text-slate-700">
                    <span
                      className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#137ece]/10 text-[#137ece]"
                      aria-hidden
                    >
                      <InievoIcon name="check" size={12} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        }

        const isLead = firstParagraph;
        firstParagraph = false;

        return (
          <p
            key={`${section.content.slice(0, 24)}-${index}`}
            className={isLead ? "inievo-blog-lead" : "inievo-blog-paragraph"}
          >
            {section.content}
          </p>
        );
      })}
    </div>
  );
}

export function BlogAuthorCard({ post, shareUrl }: { post: BlogPost; shareUrl: string }) {
  const initials = post.author
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <>
      <BlogShareBarFooter url={shareUrl} title={post.title} />
      <aside className="inievo-blog-author-card">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#137ece] to-[#0f6db8] text-sm font-extrabold text-white shadow-lg shadow-[#137ece]/20">
          {initials}
        </div>
        <div>
          <p className="inievo-blog-share-label mb-1.5">Written by</p>
          <p className="font-display text-xl font-extrabold tracking-tight text-slate-900">{post.author}</p>
          <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
            Editorial from the Inievo team — practical notes on product, engineering, and delivery for teams
            building in Bangladesh and beyond.
          </p>
        </div>
      </aside>
    </>
  );
}

export function BlogInlineLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <div className="inievo-blog-inline-link">
      <Link
        href={href}
        className="inline-flex items-center gap-2 text-[#137ece] font-bold text-sm hover:gap-3 transition-all"
      >
        {children}
        <InievoIcon name="arrow_right" size={16} />
      </Link>
    </div>
  );
}
