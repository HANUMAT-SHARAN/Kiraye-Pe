import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Avatar } from '@rneui/themed'

const Filter = () => {
  return (
    <View style={styles.parentDiv}>
      <View style={styles.filterDiv}>
      <Avatar
    size={82}
    rounded
    source={{ uri: "https://p.rmjo.in/productSquare/vmbb6qhr-500x500.jpg" }}
  />
  <Text style={{fontSize:10,marginTop:5}}>SmartPhones</Text>
      </View>
      <View style={styles.filterDiv}>
      <Avatar
    size={82}
    rounded
    source={{ uri: "https://p.rmjo.in/productSquare/vmbb6qhr-500x500.jpg" }}
  />
  <Text style={{fontSize:10,marginTop:5}}>SmartPhones</Text>
      </View>
       <View style={styles.filterDiv}>
      <Avatar
    size={82}
    rounded
    source={{ uri: "https://p.rmjo.in/productSquare/vmbb6qhr-500x500.jpg" }}
  />
  <Text style={{fontSize:10,marginTop:5}}>SmartPhones</Text>
      </View>
    </View>
  )
}

export default Filter

const styles = StyleSheet.create({
    parentDiv:{
        marginTop:50,
        display:"flex",
        flexDirection:"row"
    },
    filterDiv:{
        align:"center",
        margin:5,
    }
})