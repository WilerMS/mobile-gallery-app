import { useEffect, useState } from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import { getImages } from '../api/pexels'
import { type ImagesResponse } from '../api/pexels.d'
import ImagesList from '../components/ImagesList'

export default function HomeScreen() {

  const [images, setImages] = useState<ImagesResponse>()

  useEffect(() => {
    getImages('maldives')
      .then((data) => {
        console.log({ data })
        setImages(data.data)
      })
  }, [])

  console.log({ images })

  if (!images) return null

  return (
    <View style={styles.container}>
      <ImagesList
        style={{ paddingTop: 100 }} 
        images={images.photos} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  }
})