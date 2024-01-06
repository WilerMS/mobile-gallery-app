import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React, { type FC } from 'react'

// @ts-expect-error
import female from '@/assets/female.png'

interface Props {
  image: string
  name: string
  description: string
  onPressFollow?: () => void
  onPressUser?: () => void
}

const UserProfileCard: FC<Props> = ({
  description,
  image,
  name,
  onPressFollow,
  onPressUser
}) => {
  return (
    <View style={styles.user}>
      <Image
        source={female}
        style={styles.userImage}
      />
      <View style={styles.userInfo}>
        <Text
          numberOfLines={1}
          ellipsizeMode='tail'
          style={styles.username}
        >
          {name}
        </Text>
        <Text
          numberOfLines={1}
          ellipsizeMode='tail'
          style={styles.userdescription}
        >
          {description}
        </Text>
      </View>

      <TouchableOpacity style={styles.userFollow}>
        <Text style={styles.userFollowText}>Follow</Text>
      </TouchableOpacity>
    </View>
  )
}

export const styles = StyleSheet.create({
  user: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    columnGap: 10
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 100
  },
  userInfo: {
    width: '60%'
  },
  username: {
    fontWeight: 'bold',
    fontSize: 24
  },
  userdescription: {
    fontSize: 16,
    color: 'gray'
  },
  userFollow: {
    width: '20%',
    height: 40,
    backgroundColor: 'black',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  userFollowText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  }
})

export default UserProfileCard
