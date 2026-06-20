import {
  CANONICAL_EMAIL,
  CANONICAL_FACEBOOK,
  CANONICAL_GITHUB,
  CANONICAL_INSTAGRAM,
  CANONICAL_LINKEDIN,
  CANONICAL_TELEGRAM,
} from "@/lib/site/contact";

export type SocialLink = {
  href: string;
  label: string;
  icon: "linkedin" | "instagram" | "facebook" | "telegram" | "github";
};

export const CASE_STUDY_SOCIAL_LINKS: SocialLink[] = [
  {
    href: CANONICAL_LINKEDIN,
    label: "LinkedIn",
    icon: "linkedin",
  },
  {
    href: CANONICAL_INSTAGRAM,
    label: "Instagram",
    icon: "instagram",
  },
  {
    href: CANONICAL_FACEBOOK,
    label: "Facebook",
    icon: "facebook",
  },
  {
    href: CANONICAL_TELEGRAM,
    label: "Telegram",
    icon: "telegram",
  },
  {
    href: CANONICAL_GITHUB,
    label: "GitHub",
    icon: "github",
  },
];

/** @deprecated Prefer CANONICAL_EMAIL from @/lib/site/contact */
export const CASE_STUDY_EMAIL = CANONICAL_EMAIL;
