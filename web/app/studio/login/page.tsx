import StudioLoginForm from "@/components/studio/StudioLoginForm";
import { hasStudioAuthSecrets } from "@/lib/studio/session";

type LoginPageProps = {
  searchParams: Promise<{ from?: string }>;
};

export default async function StudioLoginPage({ searchParams }: LoginPageProps) {
  const params = await searchParams;
  const redirectTo =
    params.from && params.from.startsWith("/studio") ? params.from : "/studio";

  return (
    <StudioLoginForm configured={hasStudioAuthSecrets()} redirectTo={redirectTo} />
  );
}
