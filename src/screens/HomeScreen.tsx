import { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { getImages } from '../api/pexels'
import { ImagesResponse, Photo } from '../api/definitions'
import ImagesList from '../components/ImagesList'

export default function HomeScreen() {

  const [images, setImages] = useState<ImagesResponse>()

  useEffect(() => {
    getImages('web development')
      .then((data) => {
        console.log({ data })
        setImages(data.data)
      })
  }, [])

  console.log({ images })

  if (!images) return null

  return (
    <View>
      <ImagesList images={images.photos} />
    </View>
  )
}