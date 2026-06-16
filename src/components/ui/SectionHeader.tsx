import {
  TYPE_LABEL,
  TYPE_SECTION,
  TYPE_SECTION_SUB,
} from "@/lib/design-system";

type SectionHeaderProps = {
  label: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  dark?: boolean;
  labelClass?: string;
  titleClass?: string;
  subtitleClass?: string;
};

export function SectionHeader({
  label,
  title,
  subtitle = "",
  centered = true,
  dark = false,
  labelClass,
  titleClass,
  subtitleClass,
}: SectionHeaderProps) {
  const align = centered ? "text-center mx-auto" : "text-left";
  const resolvedTitle =
    titleClass ??
    (dark ? `${TYPE_SECTION} mb-5 ${align} text-white` : `${TYPE_SECTION} mb-5 ${align}`);
  const resolvedSub =
    subtitleClass ??
    (dark
      ? `font-body text-lg lg:text-xl text-blue-50/95 leading-relaxed max-w-2xl ${centered ? "mx-auto text-center" : ""}`
      : `${TYPE_SECTION_SUB} ${centered ? "mx-auto text-center" : ""}`);
  const resolvedLabel = labelClass ?? `${TYPE_LABEL} mb-4 ${align}`;

  return (
    <div className="mb-16">
      <p className={resolvedLabel}>{label}</p>
      <h2 className={resolvedTitle}>{title}</h2>
      {subtitle ? <p className={resolvedSub}>{subtitle}</p> : null}
    </div>
  );
}
