import { useNavigation } from '@react-navigation/native'
import React, { FC } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Image } from 'react-native-elements'
import { SCREENS } from '../constants/screens'
import { Photo } from '../api/pexels.d'

interface Props {
  image: Photo
}

const ImageCard: FC<Props> = ({ image }) => {

  const navigation = useNavigation()

  const handlePress = () => {
    // @ts-ignore
    navigation.navigate(SCREENS.IMAGESCREEN, { image })
  }


  return (
    <TouchableOpacity
      style={styles.imageContainer}
      onPress={handlePress}
    >
      <View style={styles.card}>
        <Image style={styles.image} source={{ uri: image.src.large }} />
        {/* <View style={styles.alt}>
          <Text
            numberOfLines={1}
            ellipsizeMode='tail'
            style={styles.author} 
          >
            {image.photographer}
          </Text>
          <Text
            numberOfLines={1}
            ellipsizeMode='tail' 
            style={styles.title} 
          >
            {image.alt}
          </Text>
        </View> */}
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    aspectRatio: .7,
    resizeMode: 'cover',
  },
  alt: {
    width: '100%',
    backgroundColor: '#00000078',
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: 4,
    paddingVertical: 8
  },
  author: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white'
  },
  title: {
    fontSize: 12,
    color: 'white'
  },
  imageContainer: {
    width: '48.8%',
  }
})

export default ImageCard