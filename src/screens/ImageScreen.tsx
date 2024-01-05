import { FC } from 'react'
import { View, Text, Image } from 'react-native'

import { type ImageScreenProps } from './screens'

const ImageScreen: FC<ImageScreenProps> = ({ route }) => {

  const { image } = route.params

  console.log({ image })

  return (
    <View>
      <Image 
        source={{
          uri: image.src.original
        }}
        style={{
          width: '100%',
          aspectRatio: .7
        }}
      />
      <Text>{image.photographer}</Text>
    </View>
  )
}

export default ImageScreen