import { Inter, Playfair_Display } from "next/font/google";
import Header from "@/components/Header";
import ConditionalFooter from "@/components/ConditionalFooter";
import ConditionalAnalytics from "@/components/ConditionalAnalytics";
import ConditionalSpeedInsights from "@/components/ConditionalSpeedInsights";
import { buildDefaultSiteMetadata } from "@/lib/site/seo";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata = buildDefaultSiteMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="" />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <div id="main-content">{children}</div>
        <ConditionalFooter />
        <ConditionalAnalytics />
        <ConditionalSpeedInsights />
      </body>
    </html>
  );
}
