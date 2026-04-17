const TIMELINE_KEY = "keenkeeper_timeline";

export function getTimeline() {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem(TIMELINE_KEY);
  return data ? JSON.parse(data) : [];
}

export function addTimelineEntry(entry) {
  const existing = getTimeline();
  const updated = [entry, ...existing];
  localStorage.setItem(TIMELINE_KEY, JSON.stringify(updated));
  return updated;
}
