/** Format string initials from organization or person name. */
export function getInitials(name: string): string {
  return name
    .split(' ')
    .filter(Boolean)
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

/** Returns the local date in YYYY-MM-DD format for date input `min` attributes. */
export function getTodayISO(): string {
  const d = new Date()
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset())
  return d.toISOString().slice(0, 10)
}

/** Format an ISO date string into readable full date (e.g. November 11, 2026). */
export function formatDateLong(dateStr: string): string {
  if (!dateStr) return ''
  try {
    return new Date(`${dateStr}T00:00:00`).toLocaleDateString(undefined, {
      dateStyle: 'long',
    })
  } catch {
    return dateStr
  }
}

