import { View, Text, Button } from 'react-native'
import React from 'react'

const HomeScreen = ({navigation,route}) => {

 
  return (
    <View>
      
      <Button title="GOT to Setting" onPress={()=>navigation.navigate("Setting",{
        id:"Hanumat"
      })} />
       <Button title="GOT to Products" onPress={()=>navigation.navigate("Products",{
        id:"Hanumat"
      })} />

    </View>
  )
}

export default HomeScreen