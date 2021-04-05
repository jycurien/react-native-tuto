import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

const TextInputScreen = () => {
  const [name, setName] = useState('')

  return (
    <View>
      <Text>Enter Name:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize='none' // prevents autocapitalisation of 1st char
        autoCorrect={false} // prevents autocorrection
        value={name}
        onChangeText={(newValue) => setName(newValue)}
      />
      <Text>My name is {name}</Text>
    </View>
  )
}

export default TextInputScreen

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
  },
})
