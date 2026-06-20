"use client";

import { useState } from "react";
import { useDhakaTime } from "@/hooks/useDhakaTime";
import { CANONICAL_GITHUB } from "@/lib/site/contact";

const GITHUB_STATS_URL =
  "https://github-readme-stats.vercel.app/api?username=abumdselim&show_icons=true&hide_border=true&bg_color=0d0d0d&title_color=ffffff&icon_color=888888&text_color=aaaaaa&count_private=true";

const GITHUB_LANGS_URL =
  "https://github-readme-stats.vercel.app/api/top-langs/?username=abumdselim&layout=compact&hide_border=true&bg_color=0d0d0d&title_color=ffffff&text_color=aaaaaa";

const CERTIFICATIONS = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services · 2024",
  },
  {
    title: "Meta Front-End Developer",
    issuer: "Meta (Coursera) · 2023",
  },
  {
    title: "Google Project Management",
    issuer: "Google (Coursera) · 2023",
  },
] as const;

const SKILLS = [
  "Laravel",
  "Vue.js",
  "React",
  "Node.js",
  "MySQL",
  "PostgreSQL",
  "Redis",
  "Docker",
  "AWS",
  "Linux",
  "Git",
  "REST API",
] as const;

function CertIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="8" r="7" />
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#fff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

export default function StackSection() {
  const locTime = useDhakaTime();
  const [showGithubFallback, setShowGithubFallback] = useState(false);
  const [hideLangsImage, setHideLangsImage] = useState(false);

  return (
    <section className="stack" id="portfolio">
      <div className="section-wrap">
        <div className="section-heading">
          <div className="section-label">EXPERTISE</div>
          <h2>Tech Stack &amp; Open Source</h2>
        </div>
        <div className="bento-grid">
          <div className="bento-item github-card">
            <h3>GitHub Activity</h3>
            <p className="subtitle">@abumdselim</p>
            <div className="github-stats-container" id="gh-container">
              {!showGithubFallback && (
                // eslint-disable-next-line @next/next/no-img-element -- dynamic GitHub stats with onerror fallback
                <img
                  src={GITHUB_STATS_URL}
                  alt="GitHub Stats for abumdselim"
                  width={495}
                  height={195}
                  style={{ width: "100%", height: "auto", borderRadius: "8px" }}
                  onError={() => setShowGithubFallback(true)}
                />
              )}
              {!showGithubFallback && !hideLangsImage && (
                // eslint-disable-next-line @next/next/no-img-element -- dynamic GitHub stats with onerror fallback
                <img
                  src={GITHUB_LANGS_URL}
                  alt="Top Languages for abumdselim"
                  width={300}
                  height={165}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "8px",
                    marginTop: "12px",
                  }}
                  onError={() => setHideLangsImage(true)}
                />
              )}
              {showGithubFallback && (
                <a
                  href={CANONICAL_GITHUB}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-fallback"
                  id="gh-fallback"
                  style={{ display: "flex" }}
                >
                  <GitHubIcon />
                  <div className="gh-text">
                    <h4>@abumdselim</h4>
                    <p>Explore repositories and open-source contributions →</p>
                  </div>
                </a>
              )}
            </div>
          </div>

          <div className="bento-item cert-card">
            <h3>Certifications</h3>
            <p className="subtitle">Industry-recognized credentials</p>
            <div className="cert-list">
              {CERTIFICATIONS.map((cert) => (
                <div className="cert-item" key={cert.title}>
                  <div className="cert-icon">
                    <CertIcon />
                  </div>
                  <div className="cert-info">
                    <h4>{cert.title}</h4>
                    <span>{cert.issuer}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bento-item skills-card">
            <h3>Core Technologies</h3>
            <p className="subtitle">Primary stack &amp; tools</p>
            <div className="skills-grid">
              {SKILLS.map((skill) => (
                <div className="skill-pill" key={skill}>
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="bento-item location-card">
            <div className="loc-top">
              <LocationIcon />
              <span>Chittagong, Bangladesh</span>
            </div>
            <div className="loc-time" id="locTime">
              {locTime}
            </div>
            <div className="loc-tz">UTC+6 · Bangladesh Standard Time</div>
          </div>
        </div>
      </div>
    </section>
  );
}
