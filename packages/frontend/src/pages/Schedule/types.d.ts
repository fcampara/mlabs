import { SocialMidias } from 'src/@types/socialMidias'

export interface ISchedulePost {
  scheduleIn: Date
  scheduleAt: string
  socialMidias: SocialMidias[]
  post: string
  imageUrl: string
  username: string
}
