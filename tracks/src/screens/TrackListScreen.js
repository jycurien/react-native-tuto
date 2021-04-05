import React, { useContext, useCallback } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { Text, ListItem } from 'react-native-elements'
import { useFocusEffect } from '@react-navigation/native'
import { Context as TrackContext } from '../context/TrackContext'

const TrackListScreen = ({ navigation }) => {
  const { state, fetchTracks } = useContext(TrackContext)

  useFocusEffect(
    useCallback(() => {
      const initTracks = async () => {
        try {
          fetchTracks()
        } catch (e) {
          console.log(e)
        }
      }

      initTracks()
    }, [])
  )

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <Text h2>Tracks</Text>
      <FlatList
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('TrackDetail', { _id: item._id })
              }
            >
              <ListItem>
                <ListItem.Content>
                  <ListItem.Title>{item.name}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
            </TouchableOpacity>
          )
        }}
      />
    </SafeAreaView>
  )
}

export default TrackListScreen

const styles = StyleSheet.create({})
