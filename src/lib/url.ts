const EXTERNAL_PATTERN = /^(?:[a-z]+:)?\/\//i;

export function withBase(href: string | undefined, base: string): string | undefined {
  if (!href) return href;
  if (href.startsWith('#')) return href;
  if (EXTERNAL_PATTERN.test(href)) return href;
  if (href.startsWith(base)) return href;
  if (href.startsWith('/')) return `${base}${href.slice(1)}`;
  return href;
}
