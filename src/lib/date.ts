// Date helpers shared between PostList and PostLayout so the list and detail
// views can never drift. Format is `Month D, YYYY` (e.g. "May 15, 2026").
//
// All formatting runs in UTC. Frontmatter dates like `2026-05-15` are parsed
// as UTC midnight; rendering them in a negative-offset local zone (e.g. MDT)
// would otherwise drift them back a day.

export function formatPostDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

export function isoDate(date: Date): string {
  // YYYY-MM-DD slice of the ISO string — for <time datetime>.
  return date.toISOString().slice(0, 10);
}
