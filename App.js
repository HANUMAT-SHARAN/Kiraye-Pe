import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View } from 'react-native';
import MainContainer from './Components/MainContainer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import My from './Navigation/Screens/My';
import SingleProductScreen from './Navigation/Screens/SingleProductScreen';
import ElectronicsScreen from './Navigation/Screens/ElectronicsScreen';
import { Button, SearchBar } from '@rneui/themed';
import Categories from './Components/Categories';
import Filter from './Components/Filter';

const Stack=createStackNavigator()
export default function App() {
  return (
   <NavigationContainer >
  <Stack.Navigator >
  <Stack.Screen name="Tab" component={MainContainer}  options={{ headerShown: false }} />
  <Stack.Screen name="SingleProduct" component={SingleProductScreen} />
  <Stack.Screen name="Electronics" options={{headerStyle:{height:150},headerTitle:()=><View style={{height:200,width:"100%"}}><Filter></Filter></View>}} component={ElectronicsScreen} />
  </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
