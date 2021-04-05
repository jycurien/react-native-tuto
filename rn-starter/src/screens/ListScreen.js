import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'

const ListScreen = () => {
  const friends = [
    { name: 'Friend #1', age: 42 },
    { name: 'Friend #2', age: 24 },
    { name: 'Friend #3', age: 25 },
    { name: 'Friend #4', age: 63 },
    { name: 'Friend #5', age: 45 },
    { name: 'Friend #6', age: 28 },
    { name: 'Friend #7', age: 19 },
    { name: 'Friend #8', age: 25 },
  ]

  return (
    <View>
      <Text>List Screen</Text>
      <FlatList
        // horizontal => display the list horizontally
        showsVerticalScrollIndicator={false} // hide the
        keyExtractor={(friend) => friend.name}
        data={friends}
        renderItem={({ item }) => {
          return (
            <Text style={styles.textStyle}>
              {item.name} - Age {item.age}
            </Text>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 10,
    borderWidth: 1,
    padding: 10,
  },
})

export default ListScreen
