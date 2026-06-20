import Link from "next/link";

type WorkPlaceholderProps = {
  title: string;
};

export default function WorkPlaceholder({ title }: WorkPlaceholderProps) {
  return (
    <main className="work-placeholder">
      <div className="work-placeholder-inner">
        <p className="work-placeholder-label">CASE STUDY</p>
        <h1>{title}</h1>
        <p className="work-placeholder-note">
          Full case study coming in Phase 2. This page will be ported from the
          legacy HTML with project details, visuals, and outcomes.
        </p>
        <Link href="/#projects" className="work-placeholder-back">
          ← Back to work
        </Link>
      </div>
    </main>
  );
}
