import { Schedule } from 'src/@types/schedules'
import { SocialNetwork } from 'src/@types/socialNetworks'

export type OrderByTable = 'ASC' | 'DESC'

export interface TableScheduleRow {
  schedule: Schedule
}

export interface TableScheduleSocialNetworkRow {
  schedule: Schedule
  socialNetworks: SocialNetwork[]
}

export interface TableScheduleHeader {
  onChangeOrder: () => void
  orderBy: OrderByTable
}
