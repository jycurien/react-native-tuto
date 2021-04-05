import React, { useEffect, useContext } from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native'
import { Context as BlogContext } from '../context/BlogContext'

const IndexScreen = ({ navigation }) => {
  const { state, getBlogPost, deleteBlogPost } = useContext(BlogContext)

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Create')}>
          <MaterialIcons name='add' size={30} color='black' />
        </TouchableOpacity>
      ),
    })

    const listener = navigation.addListener('focus', () => getBlogPost())

    return () => listener.remove()
  }, [navigation])

  return (
    <View style={{ backgroundColor: '#fff', flex: 1 }}>
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('Show', { id: item.id })}
            >
              <View style={styles.row}>
                <Text style={styles.title}>
                  {item.title} - {item.id}
                </Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <MaterialIcons name='delete' style={styles.icon} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

export default IndexScreen

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
    color: '#000',
  },
})
