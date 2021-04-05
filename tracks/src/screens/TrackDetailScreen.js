import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Text } from 'react-native-elements'
import { Context as TrackContext } from '../context/TrackContext'
import MapView, { Polyline } from 'react-native-maps'

const TrackDetailScreen = ({ route }) => {
  const { state } = useContext(TrackContext)
  const _id = route.params._id

  const track = state.find((t) => t._id === _id)
  const initialCoords = track.locations[0].coords

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <Text h2>{track.name}</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
          ...initialCoords,
        }}
        // region={{
        //   ...currentLocation.coords,
        //   latitudeDelta: 0.01,
        //   longitudeDelta: 0.01,
        // }}
      >
        <Polyline coordinates={track.locations.map((loc) => loc.coords)} />
      </MapView>
    </SafeAreaView>
  )
}

export default TrackDetailScreen

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
})
