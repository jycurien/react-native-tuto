import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-elements'
import Spacer from '../components/Spacer'

const NavLink = ({ text, routeName }) => {
  const navigation = useNavigation()
  return (
    <>
      <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
        <Spacer>
          <Text style={styles.link}>{text}</Text>
        </Spacer>
      </TouchableOpacity>
    </>
  )
}

export default NavLink

const styles = StyleSheet.create({
  link: {
    color: 'blue',
  },
})
