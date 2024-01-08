import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { ImageScreen, HomeScreen } from '@screens'
import { AppLogo } from '@/components/AppLogo'
import SearchButton from '@/components/SearchButton'
// import BackButton from '@/components/BackButton'

import { SCREENS } from '@/constants/screens'

const Stack = createNativeStackNavigator()

export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={SCREENS.HOMESCREEN}
          component={HomeScreen}
          options={{
            headerLeft: () => <AppLogo size='small' />,
            headerRight: () => <SearchButton />,
            title: 'Gallerie d\'Eve',
            headerShadowVisible: false,
            statusBarStyle: 'dark',
            statusBarTranslucent: true,
            headerTransparent: true,
            headerStyle: {
              backgroundColor: '#ffffffea'
            }
          }}
        />
        <Stack.Screen
          name={SCREENS.IMAGESCREEN}
          // @ts-expect-error
          component={ImageScreen}
          options={{
            title: '',
            headerShadowVisible: false,
            statusBarStyle: 'auto',
            statusBarTranslucent: true,
            headerTransparent: true,
            headerStyle: {
              backgroundColor: 'transparent'
            },
            headerLeft: () => <>{/* <BackButton /> */}</>
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
