import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Skeleton } from '@rneui/themed'

const Loader = () => {
  return (
    <View>
     
      <Skeleton width={100} height={360} />
  <Skeleton circle width={200} height={340} />
    </View>
  )
}

export default Loader

const styles = StyleSheet.create({})