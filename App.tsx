import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from './src/screens/HomeScreen'
import ImageScreen from './src/screens/ImageScreen'
import { AppLogo } from './src/components/AppLogo'
import SearchButton from './src/components/SearchButton'
import { SCREENS } from './src/constants/screens'

const Stack = createNativeStackNavigator()

export default function App() {
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
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}