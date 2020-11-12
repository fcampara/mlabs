import {
  Schedule,
  ScheduleToStore,
  ScheduleResponse
} from 'src/@types/schedules'
import { LOCAL_STORAGE_SCHEDULES } from 'src/constants/localStorageKeys'
import api from 'src/services/api'
import {
  getLocalStorage,
  setLocalStorage
} from 'src/utils/localStorage'

const URL = '/schedules'

export const storeSchedules = async (
  schedule: ScheduleToStore
) => {
  const newSchedule = {
    ...schedule,
    statusKey: 1,
    id: Math.floor(Math.random() * 1000) + 100
  }
  const schedules =
    getLocalStorage<Schedule[]>(LOCAL_STORAGE_SCHEDULES) ||
    []
  schedules.push(newSchedule)
  setLocalStorage(LOCAL_STORAGE_SCHEDULES, schedules)

  return schedules
}

export const getAllSchedules = async () => {
  const { data } = await api.get<ScheduleResponse>(URL)
  const schedules = data.data

  const storagedSchedules =
    getLocalStorage<Schedule[]>(LOCAL_STORAGE_SCHEDULES) ||
    []

  return [...schedules, ...storagedSchedules]
}
