"use client";

import { useEffect, useState } from "react";

const DHAKA_TIME_OPTIONS: Intl.DateTimeFormatOptions = {
  timeZone: "Asia/Dhaka",
  hour: "2-digit",
  minute: "2-digit",
  hour12: true,
};

export function useDhakaTime() {
  const [time, setTime] = useState("--:-- --");

  useEffect(() => {
    const updateTime = () => {
      setTime(new Date().toLocaleTimeString("en-US", DHAKA_TIME_OPTIONS));
    };

    updateTime();
    const interval = window.setInterval(updateTime, 1000);

    return () => window.clearInterval(interval);
  }, []);

  return time;
}
