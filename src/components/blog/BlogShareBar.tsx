"use client";

import { useCallback, useState } from "react";
import { Check, Link2 } from "lucide-react";
import { SocialIcon } from "@/components/ui/SocialIcon";

export type BlogShareProps = {
  url: string;
  title: string;
};

type SharePlatform = "facebook" | "linkedin" | "twitter" | "whatsapp";

const SHARE_BUTTON =
  "inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/90 bg-white text-slate-600 shadow-sm transition-all duration-200 hover:border-[#137ece]/35 hover:bg-[#137ece]/[0.06] hover:text-[#137ece] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#137ece]/40 focus-visible:ring-offset-2";

function buildShareUrl(platform: SharePlatform, url: string, title: string) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  switch (platform) {
    case "facebook":
      return `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
    case "linkedin":
      return `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
    case "twitter":
      return `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
    case "whatsapp":
      return `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`;
  }
}

const PLATFORMS: { id: SharePlatform; label: string; icon: "facebook" | "linkedin" | "twitter" | "whatsapp" }[] = [
  { id: "linkedin", label: "Share on LinkedIn", icon: "linkedin" },
  { id: "facebook", label: "Share on Facebook", icon: "facebook" },
  { id: "twitter", label: "Share on X", icon: "twitter" },
  { id: "whatsapp", label: "Share on WhatsApp", icon: "whatsapp" },
];

function ShareButtons({
  url,
  title,
  layout,
}: BlogShareProps & { layout: "horizontal" | "vertical" }) {
  const [copied, setCopied] = useState(false);

  const copyLink = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  }, [url]);

  const groupClass =
    layout === "vertical"
      ? "flex flex-col items-center gap-2.5"
      : "flex flex-wrap items-center gap-2.5";

  return (
    <div className={groupClass} role="group" aria-label="Share this article">
      {PLATFORMS.map((platform) => (
        <a
          key={platform.id}
          href={buildShareUrl(platform.id, url, title)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={platform.label}
          title={platform.label}
          className={SHARE_BUTTON}
        >
          <SocialIcon name={platform.icon} size={17} />
        </a>
      ))}
      <button
        type="button"
        onClick={copyLink}
        aria-label={copied ? "Link copied" : "Copy article link"}
        title={copied ? "Copied!" : "Copy link"}
        className={SHARE_BUTTON}
      >
        {copied ? <Check size={17} className="text-emerald-600" /> : <Link2 size={17} />}
      </button>
    </div>
  );
}

export function BlogShareBarHorizontal({ url, title }: BlogShareProps) {
  return (
    <div className="inievo-blog-share-bar">
      <p className="inievo-blog-share-label">Share</p>
      <ShareButtons url={url} title={title} layout="horizontal" />
    </div>
  );
}

export function BlogShareBarSticky({ url, title }: BlogShareProps) {
  return (
    <aside className="hidden lg:block" aria-label="Share article">
      <div className="sticky top-28">
        <p className="inievo-blog-share-label mb-3 text-center">Share</p>
        <ShareButtons url={url} title={title} layout="vertical" />
      </div>
    </aside>
  );
}

export function BlogShareBarFooter({ url, title }: BlogShareProps) {
  return (
    <div className="inievo-blog-share-footer">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <p className="inievo-blog-share-label mb-1">Enjoyed this article?</p>
          <p className="text-sm text-slate-600">Share it with your network.</p>
        </div>
        <ShareButtons url={url} title={title} layout="horizontal" />
      </div>
    </div>
  );
}
