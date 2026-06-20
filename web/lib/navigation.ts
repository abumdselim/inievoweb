export type NavLink = {
  href: string;
  label: string;
  cta?: boolean;
};

export const NAV_LINKS: NavLink[] = [
  { href: "/#about", label: "About" },
  { href: "/#agency", label: "Venture" },
  { href: "/#portfolio", label: "Stack" },
  { href: "/#services", label: "Services" },
  { href: "/#projects", label: "Work" },
  { href: "/blog", label: "Blog" },
  { href: "/#contact", label: "Let's Talk", cta: true },
];

export const MOBILE_NAV_LINKS: NavLink[] = [
  { href: "/#about", label: "About" },
  { href: "/#agency", label: "Venture" },
  { href: "/#portfolio", label: "Stack" },
  { href: "/#services", label: "Services" },
  { href: "/#projects", label: "Work" },
  { href: "/blog", label: "Blog" },
  { href: "/#contact", label: "Contact" },
];

export const PROFILE_IMAGE_URL =
  "https://res.cloudinary.com/dgbyoqvpt/image/upload/f_auto,q_auto/ChatGPT_Image_May_23_2026_01_53_04_AM_yaxs35";

export const SIGNATURE_IMAGE_URL =
  "https://res.cloudinary.com/dgbyoqvpt/image/upload/q_auto/f_auto/v1780348308/Abu_Md._Selim_kqhkiz.png";
