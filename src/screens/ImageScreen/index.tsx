import { type FC } from 'react'
import { View, Text, Animated } from 'react-native'
import { styles } from './styles'

import { type ImageScreenProps } from '../screens'
import UserProfileCard from '@/components/UserProfileCard'

const ImageScreen: FC<ImageScreenProps> = ({ route }) => {
  const { image } = route.params

  console.log({ image })

  return (
    <View style={styles.container}>
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
      >
        <Animated.Image
          source={{ uri: image.src.large }}
          style={styles.image}
        />
        <View style={styles.info}>
          <Text style={styles.title}>{image.alt}</Text>
          <Text style={styles.description}>A short image description should appear here</Text>

          <View style={styles.divider} />
          <UserProfileCard
            description='User description should be here'
            name={image.photographer}
            image=''
          />
          <View style={styles.divider} />
        </View>
      </Animated.ScrollView>
    </View>
  )
}

export default ImageScreen
