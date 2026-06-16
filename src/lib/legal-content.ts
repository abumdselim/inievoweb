import { EMAIL, HQ_ADDRESS } from "./constants";

export type LegalSection = {
  id: string;
  title: string;
  paragraphs: readonly string[];
  bullets?: readonly string[];
};

export type LegalDocument = {
  route: "/privacy-policy" | "/terms-and-conditions";
  heroLabel: string;
  title: string;
  subtitle: string;
  lastUpdated: string;
  sections: readonly LegalSection[];
};

export const PRIVACY_POLICY: LegalDocument = {
  route: "/privacy-policy",
  heroLabel: "LEGAL",
  title: "Privacy Policy",
  subtitle:
    "How Inievo Technologies collects, uses, and protects information when you visit our website or contact us about a project.",
  lastUpdated: "June 16, 2026",
  sections: [
    {
      id: "introduction",
      title: "1. Introduction",
      paragraphs: [
        'Inievo Technologies ("Inievo", "we", "us", or "our") operates inievo.com and related digital properties. This Privacy Policy explains what personal information we collect, why we collect it, how we use it, and the choices available to you.',
        "By using our website, submitting a contact or newsletter form, or communicating with us by email, you acknowledge that you have read this policy.",
      ],
    },
    {
      id: "information-we-collect",
      title: "2. Information We Collect",
      paragraphs: ["We may collect the following categories of information:"],
      bullets: [
        "Contact details you provide — such as name, email address, phone number, company name, and project details submitted through our contact or lead forms.",
        "Business context you choose to share — including industry, service interest, budget range, and message content.",
        "Newsletter subscription data — your email address when you opt in to updates.",
        "Technical and usage data — IP address, browser type, device information, pages viewed, referring URLs, and approximate location derived from IP.",
        "Cookies and similar technologies — described in Section 5 below.",
      ],
    },
    {
      id: "how-we-use-information",
      title: "3. How We Use Your Information",
      paragraphs: ["We use collected information to:"],
      bullets: [
        "Respond to inquiries, qualify leads, and communicate about potential or active client engagements.",
        "Send newsletters and product updates where you have opted in, with the ability to unsubscribe at any time.",
        "Operate, maintain, secure, and improve our website and services.",
        "Analyze aggregated traffic patterns to improve content, performance, and user experience.",
        "Comply with applicable legal obligations and enforce our Terms & Conditions.",
      ],
    },
    {
      id: "legal-bases",
      title: "4. Legal Bases for Processing",
      paragraphs: [
        "Where applicable, we process personal data based on your consent (for example, newsletter subscriptions), our legitimate interests in operating and improving our business (such as responding to inquiries and securing our website), and compliance with legal obligations.",
      ],
    },
    {
      id: "cookies",
      title: "5. Cookies & Analytics",
      paragraphs: [
        "We use cookies and similar technologies to remember preferences, measure site performance, and understand how visitors use our pages. You can control cookies through your browser settings. Disabling cookies may affect certain site features.",
        "We may use privacy-conscious analytics tools to collect aggregated, non-identifying usage statistics. We do not sell personal information collected through our website.",
      ],
    },
    {
      id: "sharing",
      title: "6. How We Share Information",
      paragraphs: [
        "We do not sell your personal information. We may share data only in these limited circumstances:",
      ],
      bullets: [
        "With trusted service providers who help us host the website, deliver email, or analyze traffic — bound by confidentiality and data-processing obligations.",
        "When required by law, regulation, court order, or to protect the rights, safety, and security of Inievo, our users, or others.",
        "In connection with a merger, acquisition, or business transfer, subject to continued protection of your information.",
      ],
    },
    {
      id: "retention",
      title: "7. Data Retention",
      paragraphs: [
        "We retain personal information only as long as necessary for the purposes described in this policy — for example, to respond to inquiries, maintain business records, or meet legal requirements. Lead and contact submissions are retained according to our internal data retention schedule unless you request deletion sooner.",
      ],
    },
    {
      id: "your-rights",
      title: "8. Your Rights & Choices",
      paragraphs: [
        "Depending on your location, you may have the right to:",
        "To exercise these rights, contact us at the email address in Section 13. We will respond within a reasonable timeframe.",
      ],
      bullets: [
        "Request access to, correction of, or deletion of your personal information.",
        "Withdraw consent where processing is consent-based.",
        "Opt out of marketing emails using the unsubscribe link in any newsletter.",
        "Object to or restrict certain processing activities.",
      ],
    },
    {
      id: "security",
      title: "9. Security",
      paragraphs: [
        "We implement administrative, technical, and organizational measures designed to protect personal information against unauthorized access, alteration, disclosure, or destruction. No method of transmission over the internet is completely secure; we cannot guarantee absolute security.",
      ],
    },
    {
      id: "international",
      title: "10. International Visitors",
      paragraphs: [
        "Our website is operated from Bangladesh. If you access our site from outside Bangladesh, your information may be transferred to and processed in Bangladesh or in countries where our service providers operate, which may have different data protection laws.",
      ],
    },
    {
      id: "children",
      title: "11. Children's Privacy",
      paragraphs: [
        "Our website and services are not directed to children under 16. We do not knowingly collect personal information from children. If you believe a child has provided us data, please contact us so we can delete it.",
      ],
    },
    {
      id: "changes",
      title: "12. Changes to This Policy",
      paragraphs: [
        "We may update this Privacy Policy from time to time. The \"Last updated\" date at the top of this page reflects the latest revision. Material changes will be posted on this page.",
      ],
    },
    {
      id: "contact",
      title: "13. Contact Us",
      paragraphs: [
        `If you have questions about this Privacy Policy or our data practices, contact Inievo Technologies at ${EMAIL}. Our headquarters is located in ${HQ_ADDRESS}.`,
      ],
    },
  ],
};

export const TERMS_AND_CONDITIONS: LegalDocument = {
  route: "/terms-and-conditions",
  heroLabel: "LEGAL",
  title: "Terms & Conditions",
  subtitle:
    "The rules governing your use of the Inievo Technologies website and the basis on which we provide information about our services.",
  lastUpdated: "June 16, 2026",
  sections: [
    {
      id: "agreement",
      title: "1. Agreement to Terms",
      paragraphs: [
        'These Terms & Conditions ("Terms") govern access to and use of inievo.com and related pages operated by Inievo Technologies ("Inievo", "we", "us", or "our"). By accessing or using our website, you agree to these Terms. If you do not agree, please do not use the site.',
        "Separate written agreements govern paid client engagements, statements of work, and deliverables. Where a signed contract conflicts with these Terms, the signed contract prevails for that engagement.",
      ],
    },
    {
      id: "services",
      title: "2. About Our Services",
      paragraphs: [
        "Inievo provides custom software engineering, cloud infrastructure, AI automation, and related digital services. Content on this website — including case studies, blog articles, pricing references, and timelines — is for general information only and does not constitute a binding offer unless confirmed in a signed proposal or contract.",
      ],
    },
    {
      id: "eligibility",
      title: "3. Eligibility & Account Responsibility",
      paragraphs: [
        "You must be at least 18 years old and have the authority to enter into agreements on behalf of yourself or your organization when submitting inquiries or forms on our site. You are responsible for the accuracy of information you provide.",
      ],
    },
    {
      id: "acceptable-use",
      title: "4. Acceptable Use",
      paragraphs: ["You agree not to:"],
      bullets: [
        "Use the website in any way that violates applicable law or third-party rights.",
        "Attempt to gain unauthorized access to our systems, networks, or data.",
        "Introduce malware, automated scraping at scale, or activity that disrupts site performance.",
        "Misrepresent your identity or affiliation when contacting us or submitting forms.",
        "Copy, reproduce, or republish substantial portions of the site without prior written permission.",
      ],
    },
    {
      id: "intellectual-property",
      title: "5. Intellectual Property",
      paragraphs: [
        "All content on this website — including text, graphics, logos, icons, images, layout, and software — is owned by Inievo or its licensors and protected by applicable intellectual property laws. You may view and download content for personal, non-commercial reference only.",
        "Client-owned deliverables, third-party trademarks, and open-source components referenced on the site remain the property of their respective owners.",
      ],
    },
    {
      id: "user-submissions",
      title: "6. Form Submissions & Communications",
      paragraphs: [
        "When you submit a contact form, newsletter signup, or other communication, you grant Inievo a non-exclusive license to use that information to respond, evaluate fit, and improve our services. Do not submit confidential or proprietary information unless we have agreed to a mutual NDA.",
      ],
    },
    {
      id: "third-party-links",
      title: "7. Third-Party Links",
      paragraphs: [
        "Our website may link to third-party sites such as social networks, partner platforms, or open-source repositories. We are not responsible for the content, privacy practices, or availability of those external sites.",
      ],
    },
    {
      id: "disclaimers",
      title: "8. Disclaimers",
      paragraphs: [
        'The website and its content are provided on an "as is" and "as available" basis without warranties of any kind, whether express or implied, including implied warranties of merchantability, fitness for a particular purpose, or non-infringement.',
        "We do not warrant that the site will be uninterrupted, error-free, or free of harmful components. Technical articles and blog posts reflect general guidance and may not apply to every situation.",
      ],
    },
    {
      id: "limitation",
      title: "9. Limitation of Liability",
      paragraphs: [
        "To the fullest extent permitted by law, Inievo and its directors, employees, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the website.",
        "Our total liability for claims relating to website use shall not exceed the amount you paid to Inievo for website-related services in the twelve months preceding the claim, or one hundred US dollars (USD 100), whichever is greater.",
      ],
    },
    {
      id: "indemnity",
      title: "10. Indemnification",
      paragraphs: [
        "You agree to indemnify and hold harmless Inievo from claims, damages, losses, and expenses (including reasonable legal fees) arising from your misuse of the website, violation of these Terms, or infringement of third-party rights.",
      ],
    },
    {
      id: "termination",
      title: "11. Suspension & Termination",
      paragraphs: [
        "We may suspend or restrict access to the website at any time if we reasonably believe you have violated these Terms or if necessary to protect the site, our users, or our business.",
      ],
    },
    {
      id: "governing-law",
      title: "12. Governing Law & Disputes",
      paragraphs: [
        "These Terms are governed by the laws of Bangladesh, without regard to conflict-of-law principles. Any dispute arising from website use shall be subject to the exclusive jurisdiction of the courts located in Chattogram, Bangladesh, unless mandatory law requires otherwise.",
      ],
    },
    {
      id: "changes",
      title: "13. Changes to These Terms",
      paragraphs: [
        "We may revise these Terms at any time by posting an updated version on this page. Continued use of the website after changes become effective constitutes acceptance of the revised Terms.",
      ],
    },
    {
      id: "contact",
      title: "14. Contact",
      paragraphs: [
        `Questions about these Terms may be directed to ${EMAIL}. Inievo Technologies, ${HQ_ADDRESS}.`,
      ],
    },
  ],
};
