import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer, TabActions } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//Screens
import HomeScreen from "../Navigation/Screens/HomeScreen";
import SettingScreen from "../Navigation/Screens/Setting";
import ProductsScreen from "../Navigation/Screens/ProductsScreen";
import SingleProductScreen from "../Navigation/Screens/SingleProductScreen";
import SignupScreen from "../Navigation/Screens/SignupScreen";

//screns name
const homeName = "Home";
const settingName = "Setting";
const productsName="Products"

const Tab = createBottomTabNavigator();

const MainContainer = () => {
  return (
    <>
    {/* <NavigationContainer> */}
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({ tabBarIcon: ({focuesd,color,size})=>{
            let iconName;
            let rn=route.name
            if(route.name==homeName){
                iconName=focuesd?"home":"home"
            }else if(rn==settingName){
                iconName=focuesd?"settings":"settings"
            }else if(rn==productsName){
              iconName=focuesd?"laptop":"laptop"
            }
            return <Ionicons name={iconName} size={size} color={color} />
        }, })}
        // tabBarOptions={{
        //     activeTintColor:"red",
        //     inactiveTintColor:"blue",
        //     labelStyle:{paddingBottom:10,fontSize:10},
        //     style:{padding:10,height:70}
        // }}
      >

        <Tab.Screen name={homeName} component={HomeScreen} />
        {/* <Tab.Screen name={settingName} component={SettingScreen} /> */}
        {/* <Tab.Screen name="SingleProduct" component={SingleProductScreen} /> */}
        <Tab.Screen name={productsName} component={ProductsScreen} />
        {/* <Tab.Screen name="SignupScreen" component={SignupScreen} /> */}
      </Tab.Navigator>


  
    {/* </NavigationContainer> */}
    </>
  );
};

export default MainContainer;
