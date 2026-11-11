export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(' ')
}

/** Resolve a public file path with clean slashes. */
export function asset(path: string): string {
  return `/${path.replace(/^\//, '')}`
}

