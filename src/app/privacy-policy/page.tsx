import { LegalDocumentPage } from "@/components/legal/LegalDocumentPage";
import { PRIVACY_POLICY } from "@/lib/legal-content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/privacy-policy");

export default function PrivacyPolicyPage() {
  return <LegalDocumentPage document={PRIVACY_POLICY} />;
}
