import { useCallback } from 'react'
import {
  setLocalStorage as utilsSetLocalStorage,
  getLocalStorage as utilsGetLocalStorage,
  removeLocalStorage as utilsRemoveLocalStorage
} from 'src/utils/localStorage'

export function useLocalStorage<T>(key: any) {
  const setLocalStorage = useCallback(
    (value: any) => {
      utilsSetLocalStorage(key, value)
    },
    [key]
  )

  const getLocalStorage = useCallback((): T => {
    return utilsGetLocalStorage<T>(key)
  }, [key])

  const removeLocalStorage = useCallback(() => {
    utilsRemoveLocalStorage(key)
  }, [key])

  return {
    setLocalStorage,
    getLocalStorage,
    removeLocalStorage
  }
}
