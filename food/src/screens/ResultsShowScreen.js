import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import yelp from '../api/yelp'

const ResultsShowScreen = () => {
  const [result, setResult] = useState(null)

  const route = useRoute()
  const id = route.params.id

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`)
    setResult(response.data)
  }

  useEffect(() => {
    getResult(id)
  }, [])

  if (!result) {
    return null
  }

  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => (
          <Image style={styles.image} source={{ uri: item }} />
        )}
      />
    </View>
  )
}

export default ResultsShowScreen

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 200,
  },
})
