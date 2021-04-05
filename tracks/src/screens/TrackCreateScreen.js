// import '../_mockLocation'
import React, { useContext, useState, useCallback } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import Map from '../components/Map'
import { Context as LocationContext } from '../context/LocationContext'
import useLocation from '../hooks/useLocation'
import { useFocusEffect } from '@react-navigation/native'
import TrackForm from '../components/TrackForm'

const TrackCreateScreen = () => {
  const [isFocused, setIsFocused] = useState(false)
  useFocusEffect(
    useCallback(() => {
      setIsFocused(true)
      return () => {
        setIsFocused(false)
      }
    }, [])
  )

  const {
    state: { recording },
    addLocation,
  } = useContext(LocationContext)
  const callback = useCallback((location) => addLocation(location, recording), [
    recording,
  ])
  const [error] = useLocation(isFocused || recording, callback)

  return (
    <SafeAreaView style={styles.container}>
      <Text h2>Create a Track</Text>
      <Map />
      {error ? <Text>Please enable location services</Text> : null}
      <TrackForm />
    </SafeAreaView>
  )
}

export default TrackCreateScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingBottom: 100,
  },
})
