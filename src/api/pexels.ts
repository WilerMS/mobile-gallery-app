import axios from 'axios'
import { type ImagesResponse } from './pexels.d'
import { API_KEY } from '../constants/env'

export const searchImages = async (q = '') => {
  return await axios.get<ImagesResponse>(
    `https://api.pexels.com/v1/search?query=${q}&per_page=40`,
    {
      headers: {
        Authorization: API_KEY
      }
    }
  )
}

export const loadCuratedImages = async (q = '') => {
  return await axios.get<ImagesResponse>(
    'https://api.pexels.com/v1/curated?per_page=40',
    {
      headers: {
        Authorization: API_KEY
      }
    }
  )
}
