import React from 'react'
import { useNavigation } from '@react-navigation/native'
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native'
import ResultsDetail from './ResultsDetail'

const ResultsList = ({ title, results }) => {
  if (!results.length) {
    return null
  }

  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ResultsShow', {
                  id: item.id,
                })
              }
            >
              <ResultsDetail result={item} />
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

export default ResultsList

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginLeft: 15,
    marginBottom: 5,
  },
})
