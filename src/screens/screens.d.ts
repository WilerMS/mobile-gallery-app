import { SCREENS } from "../constants/screens"

import { type RouteProp } from "@react-navigation/native"
import { type Photo } from "../api/pexels.d"

type ScreenParamsProps = {
  [SCREENS.IMAGESCREEN]: {
    image: Photo
  }
}

type ImageScreenRouteProp = RouteProp<ScreenParamsProps, 'ImageScreen'>

export interface ImageScreenProps {
  route: ImageScreenRouteProp
}