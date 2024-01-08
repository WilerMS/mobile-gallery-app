import axios from 'axios'
import { type PixabayImage, type PixabayResponse } from './pìxabay.d'
import { PIXABAY_API_KEY, PIXABAY_API_URL } from '../constants/env'
import { type Photo } from './common.d'

const convertResponse = (photos: PixabayImage[]): Photo[] => {
  return photos.map((photo) => {
    return {
      id: photo.id,
      type: 'photo',
      height: photo.imageHeight,
      width: photo.imageWidth,
      size: photo.imageSize,
      preview: photo.webformatURL,
      url: photo.largeImageURL,
      user: photo.user,
      userImage: photo.userImageURL,
      tags: photo.tags.split(','),
      likes: photo.likes,
      collections: photo.collections,
      comments: photo.comments,
      downloads: photo.downloads,
      views: photo.views
    }
  })
}

export const searchPixabayImages = async (q = '') => {
  const url = encodeURI(`${PIXABAY_API_URL}?q=${q}&per_page=40&key=${PIXABAY_API_KEY}`)
  const res = await axios.get<PixabayResponse>(url)
  return convertResponse(res.data.hits)
}

export const loadPixabayImages = async (q = '') => {
  const res = await axios.get<PixabayResponse>(
    `${PIXABAY_API_URL}?per_page=40&key=${PIXABAY_API_KEY}`
  )
  return convertResponse(res.data.hits)
}
