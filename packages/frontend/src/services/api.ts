import axios from 'axios'
import { BASE_URL } from 'src/constants/envs'
import humps from 'humps'

const instance = axios.create({
  baseURL: BASE_URL,
  transformResponse: data => {
    let response = JSON.parse(data)
    if (response) {
      response = humps.camelizeKeys(response)
    }
    return response
  }
})

export default instance
