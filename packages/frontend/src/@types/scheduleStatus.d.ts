export interface ScheduleStatus {
  id: number
  name: string
  color: string
}

export interface ScheduleStatusResponse {
  data: ScheduleStatus[]
}
