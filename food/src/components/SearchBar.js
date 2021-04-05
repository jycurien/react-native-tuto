import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { StyleSheet, TextInput, View } from 'react-native'

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <MaterialIcons name='search' style={styles.iconStyle} />
      <TextInput
        autoCapitalize='none'
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder='Search'
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
  backgroundStyle: {
    marginVertical: 10,
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
  },
  iconStyle: {
    color: '#000',
    fontSize: 35,
    marginHorizontal: 15,
    alignSelf: 'center',
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
})
