import axios from 'axios'
import { type ImagesResponse } from './pexels.d'
import { API_KEY } from '../constants/env'

export const getImages = async (q = '') => {
  return await axios.get<ImagesResponse>(
    `https://api.pexels.com/v1/search?query=${q}`,
    {
      headers: {
        Authorization: API_KEY
      }
    }
  )
}

