import React, { type FC } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { type StyleProp, type ViewStyle } from 'react-native'

import { type Photo } from '../api/common.d'
import ImageCard from './ImageCard'
interface ImagesListProps {
  images: Photo[]
  style?: StyleProp<ViewStyle>
}

const ImagesList: FC<ImagesListProps> = ({ images, style = {} }) => (
  <FlatList
    // @ts-expect-error
    style={{ ...styles.container, ...style }}
    numColumns={2}
    contentContainerStyle={styles.list}
    columnWrapperStyle={styles.list}
    data={images}
    renderItem={({ item }) => <ImageCard image={item} />}
    keyExtractor={item => item.id.toString()}
    showsVerticalScrollIndicator={false}
  />
)

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10
  },
  list: {
    rowGap: 10,
    columnGap: 10
  }
})

export default ImagesList
