import { useCallback } from 'react'

export function useLocalStorage<T>(key: any) {
  const setLocalStorage = useCallback(
    (value: any) => {
      value &&
        localStorage.setItem(key, JSON.stringify(value))
    },
    [key]
  )

  const getLocalStorage = useCallback((): T => {
    const value = localStorage.getItem(key)
    return value ? JSON.parse(value) : value
  }, [key])

  const removeLocalStorage = useCallback(() => {
    localStorage.removeItem(key)
  }, [key])

  return {
    setLocalStorage,
    getLocalStorage,
    removeLocalStorage
  }
}
