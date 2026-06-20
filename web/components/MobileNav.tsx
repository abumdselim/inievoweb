"use client";

import Image from "next/image";
import { MOBILE_NAV_LINKS, SIGNATURE_IMAGE_URL } from "@/lib/navigation";

type MobileNavProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  return (
    <nav
      className={`nav-menu${isOpen ? " active" : ""}`}
      id="navMenu"
      aria-label="Mobile navigation"
      aria-hidden={!isOpen}
    >
      {MOBILE_NAV_LINKS.map((link) => (
        <a key={link.href} href={link.href} onClick={onClose}>
          {link.label}
        </a>
      ))}
      <div className="menu-signature">
        <Image
          src={SIGNATURE_IMAGE_URL}
          alt="Signature"
          width={140}
          height={40}
          sizes="140px"
          quality={90}
        />
      </div>
    </nav>
  );
}
