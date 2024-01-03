import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, ListRenderItem } from 'react-native'
import React, { FC } from 'react'
import { Photo } from '../api/definitions'

const ImageItem: ListRenderItem<Photo> = ({ item }) => (
  <TouchableOpacity
    style={styles.imageContainer}
    onPress={() => console.log(item)}
  >
    <Image
      style={styles.image}
      source={{
        uri: 'https://images.alphacoders.com/764/764254.png'
      }}
    />
    <Text>{item.photographer}</Text>
  </TouchableOpacity>
)

interface ImagesListProps {
  images: Photo[]
}

const ImagesList: FC<ImagesListProps> = ({ images }) => {
  return (
    <FlatList
      style={styles.images}
      numColumns={2}
      data={images}
      renderItem={ImageItem}
      keyExtractor={item => item.id.toString()}
    />
  )
}

const styles = StyleSheet.create({
  images: {
    display: 'flex',
  },
  imageContainer: {
    width: '50%',
    backgroundColor: 'blue'
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    resizeMode: 'cover'
  }

})

export default ImagesList