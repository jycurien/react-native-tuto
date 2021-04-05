import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>Child #1</Text>
      <Text style={styles.textTwoStyle}>Child #2</Text>
      <Text style={styles.textThreeStyle}>Child #3</Text>
    </View>
  )
}

export default BoxScreen

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    height: '100%',
    justifyContent: 'space-around',
  },
  textOneStyle: {
    borderWidth: 3,
    borderColor: 'red',
    padding: 10,
    flex: 1,
  },
  textTwoStyle: {
    borderWidth: 3,
    borderColor: 'blue',
    padding: 10,
    // flex: 4,
    // alignSelf: 'flex-end',
    // right: 10,
    ...StyleSheet.absoluteFillObject,
  },
  textThreeStyle: {
    borderWidth: 3,
    borderColor: 'green',
    padding: 10,
    position: 'absolute',
    right: 0,
  },
})
