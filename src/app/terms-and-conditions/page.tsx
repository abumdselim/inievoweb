import { LegalDocumentPage } from "@/components/legal/LegalDocumentPage";
import { TERMS_AND_CONDITIONS } from "@/lib/legal-content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/terms-and-conditions");

export default function TermsAndConditionsPage() {
  return <LegalDocumentPage document={TERMS_AND_CONDITIONS} />;
}
