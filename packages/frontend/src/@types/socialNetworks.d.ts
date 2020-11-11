import { SocialMidias } from './socialMidias'

export interface SocialNetwork {
  id: number
  name: SocialMidias
  icon: string
  status: string
}

export interface SocialNetworksResponse {
  data: SocialNetwork[]
}
