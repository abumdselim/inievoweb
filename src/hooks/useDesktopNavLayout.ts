"use client";

import { useEffect, useState } from "react";
import { DESKTOP_NAV_MEDIA_QUERY } from "@/lib/nav-layout";

export function useDesktopNavLayout() {
  const [isDesktopNav, setIsDesktopNav] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(DESKTOP_NAV_MEDIA_QUERY);
    const update = () => setIsDesktopNav(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return isDesktopNav;
}
