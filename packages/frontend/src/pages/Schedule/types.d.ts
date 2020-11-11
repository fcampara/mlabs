import { SocialNetwork } from 'src/@types/socialNetworks'

export interface ISchedulePost {
  scheduleIn: Date
  scheduleAt: string
  socialMidias: SocialNetwork[]
  post: string
  imageUrl: string
  username: string
}
