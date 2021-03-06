import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Provider as BlogProvider } from './src/context/BlogContext'
import IndexScreen from './src/screens/IndexScreen'
import ShowScreen from './src/screens/ShowScreen'
import CreateScreen from './src/screens/CreateScreen'
import EditScreen from './src/screens/EditScreen'

const Stack = createStackNavigator()

const App = () => {
  return (
    <BlogProvider>
      <NavigationContainer>
        <Stack.Navigator
          /* headerMode='none' */ screenOptions={{ title: 'Blogs' }}
        >
          <Stack.Screen name='Index' component={IndexScreen} />
          <Stack.Screen name='Create' component={CreateScreen} />
          <Stack.Screen name='Show' component={ShowScreen} />
          <Stack.Screen name='Edit' component={EditScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </BlogProvider>
  )
}

export default App
