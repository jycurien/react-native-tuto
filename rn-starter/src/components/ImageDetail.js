import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const ImageDetail = ({ title, imageSource, score }) => {
  return (
    <View>
      <Image source={imageSource} />
      <Text>Image {title}</Text>
      <Text>Image Score - {score}</Text>
    </View>
  )
}

export default ImageDetail

const styles = StyleSheet.create({})
