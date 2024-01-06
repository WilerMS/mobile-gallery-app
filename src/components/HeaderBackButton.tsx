import React, { FC } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'

// @ts-expect-error
import leftImage from '../assets/left.png'
import { useNavigation } from '@react-navigation/native'

interface Props {

}

const HeaderBackButton: FC<Props> = () => {

  const navigation = useNavigation()

  const goBack = () => navigation.goBack()

  return (
    <TouchableOpacity
      onPress={goBack}
      style={styles.container}
    >
      <Image 
        source={leftImage}
        style={styles.image}
      />
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

    // Para Android
    elevation: 8,

  },
  image: {
    width: 25,
    height: 25
  }
})

export default HeaderBackButton