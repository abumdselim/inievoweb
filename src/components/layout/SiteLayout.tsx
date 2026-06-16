"use client";

import { useInievoEffects } from "@/hooks/useInievoEffects";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  useInievoEffects();
  return <>{children}</>;
}
