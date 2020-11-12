import { ScheduleStatusResponse } from 'src/@types/scheduleStatus'
import api from 'src/services/api'

const URL = '/schedules-status'

export const getAllScheduleStatus = async () => {
  const { data } = await api.get<ScheduleStatusResponse>(
    URL
  )
  const scheduleStatus = data.data

  return scheduleStatus
}
