import { type FC, useEffect, useState } from 'react'
import { View } from 'react-native'
import ImagesList from '../../components/ImagesList'
import { HomeScreenStyles } from './styles'
import { type Photo } from '@/api/common.d'
import { searchPixabayImages } from '@/api/pixabay'

interface Props {}

const HomeScreen: FC<Props> = () => {
  const [images, setImages] = useState<Photo[]>([])

  useEffect(() => {
    searchPixabayImages('flower')
      .then((data) => {
        console.log({ data })
        setImages(data)
      })
  }, [])

  if (!images) return null

  return (
    <View style={HomeScreenStyles.container}>
      <ImagesList
        style={{ paddingVertical: 100 }}
        images={images}
      />
    </View>
  )
}

export default HomeScreen
