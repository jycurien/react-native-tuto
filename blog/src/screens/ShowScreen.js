import React, { useEffect, useContext } from 'react'
import { useRoute } from '@react-navigation/native'
import { MaterialIcons } from '@expo/vector-icons'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Context as BlogContext } from '../context/BlogContext'

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(BlogContext)
  const route = useRoute()

  const blogPost = state.find((blogPost) => blogPost.id === route.params.id)

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate('Edit', { id: route.params.id })}
        >
          <MaterialIcons name='edit' size={30} color='black' />
        </TouchableOpacity>
      ),
    })
  }, [])

  return (
    <View style={{ backgroundColor: '#fff', flex: 1 }}>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  )
}

export default ShowScreen

const styles = StyleSheet.create({})
