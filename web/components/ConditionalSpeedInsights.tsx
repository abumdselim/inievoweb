"use client";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { usePathname } from "next/navigation";

function isVercelRuntime() {
  return Boolean(process.env.NEXT_PUBLIC_VERCEL_ENV);
}

export default function ConditionalSpeedInsights() {
  const pathname = usePathname();

  if (!isVercelRuntime() || pathname.startsWith("/studio")) {
    return null;
  }

  return <SpeedInsights />;
}
