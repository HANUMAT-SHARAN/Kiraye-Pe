import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Skeleton } from '@rneui/themed'
import { Layout, Spinner } from '@ui-kitten/components';
const Loader = () => {
  return (
    <View style={{ marginLeft: "auto", marginRight: "auto" }}>


      <View style={{ marginRight: "auto", marginLeft: "auto", marginTop: 20,marginBottom:20 }} ><Spinner size="giant" status='danger' /></View>



      <Skeleton circle width={340} height={600} />
     
    </View>
  )
}

export default Loader

const styles = StyleSheet.create({})