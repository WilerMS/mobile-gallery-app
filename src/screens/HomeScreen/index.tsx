import { type FC, useEffect, useState } from 'react'
import { View } from 'react-native'
import { loadCuratedImages, searchImages } from '@/api/pexels'
import { type ImagesResponse } from '../../api/pexels.d'
import ImagesList from '../../components/ImagesList'
import { HomeScreenStyles } from './styles'

interface Props {}

const HomeScreen: FC<Props> = () => {
  const [images, setImages] = useState<ImagesResponse>()

  useEffect(() => {
    loadCuratedImages('mars')
      .then((data) => {
        console.log({ data })
        setImages(data.data)
      })
  }, [])

  console.log({ images })

  if (!images) return null

  return (
    <View style={HomeScreenStyles.container}>
      <ImagesList
        style={{ paddingVertical: 100 }}
        images={images.photos}
      />
    </View>
  )
}

export default HomeScreen
