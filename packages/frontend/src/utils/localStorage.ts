export const setLocalStorage = (
  key: string,
  value: any
) => {
  value && localStorage.setItem(key, JSON.stringify(value))
}

export function getLocalStorage<T>(key: string): T {
  const value = localStorage.getItem(key)
  return value ? JSON.parse(value) : value
}

export const removeLocalStorage = (key: string) => {
  return localStorage.removeItem(key)
}
