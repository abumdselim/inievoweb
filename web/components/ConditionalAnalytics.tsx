"use client";

import { Analytics } from "@vercel/analytics/react";
import { usePathname } from "next/navigation";

function isVercelRuntime() {
  return Boolean(process.env.NEXT_PUBLIC_VERCEL_ENV);
}

export default function ConditionalAnalytics() {
  const pathname = usePathname();

  if (!isVercelRuntime() || pathname.startsWith("/studio")) {
    return null;
  }

  return <Analytics />;
}
