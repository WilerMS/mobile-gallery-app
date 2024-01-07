import React, { type FC } from 'react'
import { Image, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
// @ts-expect-error
import leftImage from '../assets/left.png'

interface Props {}

const BackButton: FC<Props> = () => {
  const { goBack } = useNavigation()
  return (
    <TouchableOpacity onPress={goBack} style={styles.container}>
      <Image source={leftImage} style={styles.image} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 100,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 8
  },
  image: {
    width: 25,
    height: 25
  }
})

export default BackButton
