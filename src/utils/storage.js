const TIMELINE_KEY = "keenkeeper_timeline";

export function getTimeline() {
  if (typeof window === "undefined") return [];
  try {
    const data = localStorage.getItem(TIMELINE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function addTimelineEntry(entry) {
  try {
    const existing = getTimeline();
    const updated = [entry, ...existing];
    localStorage.setItem(TIMELINE_KEY, JSON.stringify(updated));
    return updated;
  } catch {
    return [];
  }
}
