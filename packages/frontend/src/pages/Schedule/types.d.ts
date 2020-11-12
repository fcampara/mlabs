import { SocialNetwork } from 'src/@types/socialNetworks'

export interface ISchedulePost {
  publicationDate: Date
  scheduleAt: string
  socialNetworks: SocialNetwork[]
  text: string
  media: string
  username: string
}
