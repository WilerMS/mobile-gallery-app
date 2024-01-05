import React, { FC } from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'
// @ts-ignore
import searchImage from '../assets/search.png'


interface Props {
  onPress?: () => void
}

const SearchButton: FC<Props> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={searchImage} style={styles.image} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 22,
    height: 22
  }
})

export default SearchButton