import { useEffect, useRef } from 'react';

const visitedPages = new Set<string>();
const prefix = 'portfolio:visited:';

/** One intro per page and tab session, including reloads. */
export default function useFirstPageVisit(page: string) {
  const firstVisit = useRef<boolean | null>(null);
  if (firstVisit.current === null) {
    let visited = visitedPages.has(page);
    try {
      visited = visited || sessionStorage.getItem(prefix + page) === '1';
    } catch {
      // Keep navigation usable when browser storage is unavailable.
    }
    firstVisit.current = !visited;
  }

  useEffect(() => {
    visitedPages.add(page);
    try {
      sessionStorage.setItem(prefix + page, '1');
    } catch {
      // The in-memory record still prevents repeat intros.
    }
  }, [page]);

  return firstVisit.current;
}
