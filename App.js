import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainContainer from './Components/MainContainer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import My from './Navigation/Screens/My';
import SingleProductScreen from './Navigation/Screens/SingleProductScreen';

const Stack=createStackNavigator()
export default function App() {
  return (
   <NavigationContainer >
  <Stack.Navigator >
  <Stack.Screen name="Tab" component={MainContainer}  options={{ headerShown: false }} />
  <Stack.Screen name="SingleProduct" component={SingleProductScreen} />
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
