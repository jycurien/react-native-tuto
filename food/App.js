import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import SearchScreen from './src/screens/SearchScreen'
import ResultsShowScreen from './src/screens/ResultsShowScreen'

const Stack = createStackNavigator()

const appTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
  },
}

export default function App() {
  return (
    <NavigationContainer theme={appTheme}>
      <Stack.Navigator options={{ title: 'Business Search' }}>
        <Stack.Screen
          name='Search'
          component={SearchScreen}
          options={{ title: 'Business Search' }}
        />
        <Stack.Screen
          name='ResultsShow'
          component={ResultsShowScreen}
          options={{ title: 'Results Show' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
