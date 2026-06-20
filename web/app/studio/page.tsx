import { redirect } from "next/navigation";

import StudioShell from "@/components/studio/StudioShell";
import { hasStudioSecrets } from "@/lib/env";
import { listStudioPosts } from "@/lib/studio/posts";
import { hasValidStudioSession } from "@/lib/studio/session";

export default async function StudioDashboardPage() {
  const authenticated = await hasValidStudioSession();

  if (!authenticated) {
    redirect("/studio/login");
  }

  const initialPosts = hasStudioSecrets() ? (await listStudioPosts()).posts : [];

  return <StudioShell initialPosts={initialPosts} />;
}
