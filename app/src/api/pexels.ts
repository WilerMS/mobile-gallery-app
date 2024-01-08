import axios from 'axios'
import { type PexelsImage, type PexelsResponse } from './pexels.d'
import { PEXELS_API_KEY, PEXELS_API_URL } from '../constants/env'
import { type Photo } from './common.d'

const convertResponse = (photos: PexelsImage[]): Photo[] => {
  return photos.map((photo) => {
    return {
      id: photo.id,
      type: 'photo',
      height: photo.height,
      width: photo.width,
      preview: photo.src.medium,
      url: photo.src.original,
      user: photo.photographer,
      userImage: photo.src.small,
      tags: [],
      likes: 0,
      collections: 0,
      comments: 0,
      downloads: 0,
      size: 0,
      views: 0
    }
  })
}

export const searchPexelsImages = async (q = ''): Promise<Photo[]> => {
  const res = await axios.get<PexelsResponse>(
    `${PEXELS_API_URL}/search?query=${q}&per_page=40`,
    {
      headers: {
        Authorization: PEXELS_API_KEY
      }
    }
  )

  return convertResponse(res.data.photos)
}

export const loadPexelsImages = async (): Promise<Photo[]> => {
  const res = await axios.get<PexelsResponse>(
    `${PEXELS_API_URL}/curated?per_page=40`,
    {
      headers: {
        Authorization: PEXELS_API_KEY
      }
    }
  )

  return convertResponse(res.data.photos)
}
