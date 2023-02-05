import { View, Text } from 'react-native'
import React from 'react'

const SettingScreen = ({navigation,route}) => {

  const {id}=route.params
  return (
    <View>
      <Text onPress={()=>navigation.navigate("Home"
           
        
      )}>SettingScreen {id}</Text>

    </View>
  )
}

export default SettingScreen