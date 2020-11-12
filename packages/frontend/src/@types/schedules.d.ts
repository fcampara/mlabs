export interface Schedule {
  id: number
  socialNetworkKey: number[]
  media: string
  text: string
  publicationDate: Date
  statusKey: number
}

export interface ScheduleToStore {
  socialNetworkKey: number[]
  publicationDate: Date
  text: string
  media: string
}

export interface ScheduleResponse {
  data: Schedule[]
}
