import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ElectronicsScreen = ({route}) => {
    const {category}=route.params
  return (
    <View>
      <Text>ElectronicsScreen {category}</Text>
    </View>
  )
}

export default ElectronicsScreen

const styles = StyleSheet.create({})