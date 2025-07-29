export function getItem<T>(key: string): T | undefined {
  const raw = localStorage.getItem(key);

  return raw ? JSON.parse(raw) : undefined;
}

export function setItem<T>(key: string, data: T): void {
  localStorage.setItem(key, JSON.stringify(data));
}

export function deleteItem(key: string): void {
  localStorage.clearItem(key);
}

export function clearItem(key: string): void {
  localStorage.removeItem(key);
}
