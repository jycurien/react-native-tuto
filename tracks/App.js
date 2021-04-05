import React, { useEffect, useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { MaterialIcons } from '@expo/vector-icons'

import AccountScreen from './src/screens/AccountScreen'
import SigninScreen from './src/screens/SigninScreen'
import SignupScreen from './src/screens/SignupScreen'
import TrackCreateScreen from './src/screens/TrackCreateScreen'
import TrackDetailScreen from './src/screens/TrackDetailScreen'
import TrackListScreen from './src/screens/TrackListScreen'

import {
  Context as AuthContext,
  Provider as AuthProvider,
} from './src/context/AuthContext'

import { Provider as LocationProvider } from './src/context/LocationContext'

import { Provider as TrackProvider } from './src/context/TrackContext'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const App = () => {
  const { state, tryLocalSignin } = useContext(AuthContext)

  useEffect(() => {
    tryLocalSignin()
  }, [])
  return (
    <SafeAreaProvider>
      <StatusBar hidden />
      <NavigationContainer>
        {state.token ? (
          <>
            <Tab.Navigator>
              <Tab.Screen
                name='TrackFlow'
                options={{
                  title: 'Tracks',
                  tabBarIcon: () => (
                    <MaterialIcons name='view-list' size={24} color='black' />
                  ),
                }}
              >
                {() => (
                  <Stack.Navigator headerMode='none'>
                    <Stack.Screen
                      name='TrackList'
                      component={TrackListScreen}
                    />
                    <Stack.Screen
                      name='TrackDetail'
                      component={TrackDetailScreen}
                    />
                  </Stack.Navigator>
                )}
              </Tab.Screen>
              <Tab.Screen
                name='TrackCreate'
                component={TrackCreateScreen}
                listeners={{
                  blur: () => console.log('LEAVING'),
                }}
                options={{
                  title: 'Add Track',
                  tabBarIcon: () => (
                    <MaterialIcons name='add-circle' size={24} color='black' />
                  ),
                }}
              />
              <Tab.Screen
                name='Account'
                component={AccountScreen}
                options={{
                  tabBarIcon: () => (
                    <MaterialIcons
                      name='account-circle'
                      size={24}
                      color='black'
                    />
                  ),
                }}
              />
            </Tab.Navigator>
          </>
        ) : (
          <>
            <Stack.Navigator headerMode='none'>
              <Stack.Screen name='Signup' component={SignupScreen} />
              <Stack.Screen name='Signin' component={SigninScreen} />
            </Stack.Navigator>
          </>
        )}
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default () => (
  <AuthProvider>
    <TrackProvider>
      <LocationProvider>
        <App />
      </LocationProvider>
    </TrackProvider>
  </AuthProvider>
)
