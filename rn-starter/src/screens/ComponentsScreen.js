import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ComponentsScreen = () => {
  const name = 'JYC'

  return (
    <View style={styles.view}>
      <Text style={styles.textStyle}>Getting started with React Native</Text>
      <Text style={styles.subHeaderStyle}>My name is {name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    padding: 10,
  },
  textStyle: {
    fontSize: 45,
  },
  subHeaderStyle: {
    fontSize: 20,
  },
})

export default ComponentsScreen
