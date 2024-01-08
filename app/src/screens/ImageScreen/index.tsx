import { type FC } from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import { styles } from './styles'

import { type ImageScreenProps } from '../screens'
import UserProfileCard from '@/components/UserProfileCard'

const ImageScreen: FC<ImageScreenProps> = ({ route }) => {
  const { image } = route.params

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Image source={{ uri: image.url }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>Here Should be the title</Text>
        <Text style={styles.description}>A short image description should appear here</Text>

        <View style={styles.divider} />
        <UserProfileCard
          description='User description should be here'
          name={image.user}
          image={image.userImage}
        />
        <View style={styles.divider} />
      </View>
      </ScrollView>
  )
}

export default ImageScreen
