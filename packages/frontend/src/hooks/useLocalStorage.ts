export function useLocalStorage<T>(key: any) {
  const setLocalStorage = (value: any) => {
    value &&
      localStorage.setItem(key, JSON.stringify(value))
  }

  const getLocalStorage = (): T => {
    const value = localStorage.getItem(key)
    return value ? JSON.parse(value) : value
  }

  return {
    setLocalStorage,
    getLocalStorage
  }
}
