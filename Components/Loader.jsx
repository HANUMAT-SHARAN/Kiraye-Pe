import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Skeleton } from '@rneui/themed'
import { Layout, Spinner } from '@ui-kitten/components';
const Loader = () => {
  return (
    <View>
      <Spinner status='primary'/>

<Spinner  status='success'/>

<Spinner status='info'/>

<Spinner status='warning'/>

<Spinner status='danger'/>

<Spinner status='basic'/>
      <Skeleton width={100} height={360} />
  <Skeleton circle width={200} height={340} />
    </View>
  )
}

export default Loader

const styles = StyleSheet.create({})