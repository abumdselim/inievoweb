import { ImageResponse } from "next/og";
import {
  SITE_AUTHOR_NAME,
  SITE_DEFAULT_TITLE,
  SITE_JOB_TITLE,
} from "@/lib/site/seo";

export const alt = SITE_DEFAULT_TITLE;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#080808",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#666666",
            marginBottom: 24,
          }}
        >
          Portfolio
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 600,
            color: "#ffffff",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          {SITE_AUTHOR_NAME}
        </div>
        <div
          style={{
            fontSize: 36,
            color: "#a0a0a0",
            marginTop: 24,
            lineHeight: 1.3,
          }}
        >
          {SITE_JOB_TITLE}
        </div>
      </div>
    ),
    { ...size },
  );
}
