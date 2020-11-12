import { LOCAL_STORAGE_SCHEDULES } from 'src/constants/localStorageKeys'
import { ISchedulePost } from 'src/pages/Schedule/types'
import api from 'src/services/api'
import {
  getLocalStorage,
  setLocalStorage
} from 'src/utils/localStorage'

const URL = '/schedules'

export const storeSchedules = async (schedule: any) => {
  const { data } = await api.post(URL, schedule)
  const schedules =
    getLocalStorage<ISchedulePost[]>(
      LOCAL_STORAGE_SCHEDULES
    ) || []
  schedules.push(data)
  setLocalStorage(LOCAL_STORAGE_SCHEDULES, schedules)

  return data
}
