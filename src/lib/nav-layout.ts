/** Desktop nav at tablet width or mobile landscape (not narrow portrait phones). */
export const DESKTOP_NAV_MEDIA_QUERY =
  "(min-width: 768px), (min-width: 640px) and (orientation: landscape)";

export function matchesDesktopNavLayout(width: number, orientation: string) {
  return width >= 768 || (width >= 640 && orientation.startsWith("landscape"));
}
