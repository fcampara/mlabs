import { SocialNetworksResponse } from 'src/@types/socialNetworks'
import api from 'src/services/api'

const URL = '/social-networks'

export const getAllSocialNetworks = async () => {
  const { data } = await api.get<SocialNetworksResponse>(
    URL
  )
  const socialNetworks = data.data
  return socialNetworks
}
