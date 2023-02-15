import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer, TabActions } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//Screens
import HomeScreen from "../Navigation/Screens/HomeScreen";
import SettingScreen from "../Navigation/Screens/Setting";
import ProductsScreen from "../Navigation/Screens/ProductsScreen";
import SingleProductScreen from "../Navigation/Screens/SingleProductScreen";
import SignupScreen from "../Navigation/Screens/SignupScreen";
import SearchScreen from "../Navigation/Screens/SearchScreen";

//screns name
const homeName = "Home";
const settingName = "Setting";
const productsName = "Products";
const searchName = "Search";
const cartName="Cart"

import { useSelector } from "react-redux";
import CartScreen from "../Navigation/Screens/CartScreen";


const Tab = createBottomTabNavigator();

const MainContainer = () => {
const {count,currentUser,isAuth}=useSelector((store)=>store.authManager)
const signupName = isAuth?`${currentUser.name}`:"Signup";
  return (
    <>
      {/* <NavigationContainer> */}
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          headerStyle: {
            backgroundColor: "#8a2df6",
            
          },

       
          headerTitleAlign: "center",
          headerTintColor:"white",
          tabBarIcon: ({ focuesd, color, size }) => {
            let iconName;
            let rn = route.name;
            if (route.name == homeName) {
              iconName = focuesd ? "home" : "home";
            } else if (rn == settingName) {
              iconName = focuesd ? "settings" : "settings";
            } else if (rn == productsName) {
              iconName = focuesd ? "laptop" : "laptop";
            } else if (rn == searchName) {
              iconName = focuesd ? "search" : "search";
            } else if (rn == signupName) {
              iconName = focuesd ? "person" : "person";
            }else if(rn==cartName){
              iconName = focuesd ? "cart" : "cart";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "#8a2df6",
          inactiveTintColor: "red",
        }}
      >
        <Tab.Screen name={homeName} component={HomeScreen} />
        {/* <Tab.Screen name={settingName} component={SettingScreen} /> */}
        {/* <Tab.Screen name="SingleProduct" component={SingleProductScreen} /> */}
        <Tab.Screen name={searchName} component={SearchScreen} />
        <Tab.Screen name={productsName} component={ProductsScreen} />
        <Tab.Screen name={cartName} component={CartScreen} />

        <Tab.Screen name={signupName} component={SignupScreen} />
        {/* <Tab.Screen name="SignupScreen" component={SignupScreen} /> */}
      </Tab.Navigator>

      {/* </NavigationContainer> */}
    </>
  );
};

export default MainContainer;
