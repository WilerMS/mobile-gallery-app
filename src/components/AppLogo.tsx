import React, { type FC } from 'react'
import { StyleSheet, Image } from 'react-native'
// @ts-ignore
import logo from '../assets/logo.png'

interface Props {
  size: 'small' | 'medium' | 'large'
}

const sizeStyles = StyleSheet.create<Record<Props['size'], object>>({
  small: {
    width: 25,
    height: 25
  },
  medium: {

  },
  large: {

  }
})

export const AppLogo: FC<Props> = ({ size }) => {
  return (
    <Image
      style={{
        marginEnd: 10,
        ...sizeStyles[size]
      }}
      source={logo}
    />
  )
}