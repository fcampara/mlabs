import { SocialMedias } from './socialMedias'

export type SocialNetworks = 'Instagram' | 'Linkedin'
export interface SocialNetwork {
  id: number
  name: SocialMedias
  icon: string
  status: string
}

export interface SocialNetworksResponse {
  data: SocialNetwork[]
}
