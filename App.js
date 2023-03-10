import { StatusBar } from "expo-status-bar";

import { StyleSheet, Text, View } from "react-native";
import MainContainer from "./Components/MainContainer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import My from "./Navigation/Screens/My";
import SingleProductScreen from "./Navigation/Screens/SingleProductScreen";
import ElectronicsScreen from "./Navigation/Screens/ElectronicsScreen";
import { Button, SearchBar } from "@rneui/themed";
import Categories from "./Components/Categories";
import { Filter } from "./Navigation/Screens/ElectronicsScreen";
import FurnitureScreen from "./Navigation/Screens/FurnitureScreen";
import FitnessScreen from "./Navigation/Screens/FitnessScreen";
import WorkFromHomeScreen from "./Navigation/Screens/WorkFromHome";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, Layout } from "@ui-kitten/components";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import LoginScreen from "./Navigation/Screens/LoginScreen";
import RecentlyWatched from "./Navigation/Screens/RecentlyWatched";
import CheckoutScreen from "./Navigation/Screens/CheckoutScreen";
/* options={{
           
            headerTitle: () => (
              <Filter/>
            )
          }} */
const Stack = createStackNavigator();
export default function App() {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <ApplicationProvider {...eva} theme={eva.light}>
            <Stack.Navigator>
              <Stack.Screen
                name="Tab"
                component={MainContainer}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                options={{
                  headerStyle: { backgroundColor: "#5854e8" },
                  headerTintColor: "white",
                  headerTitleAlign: "center",
                  headerShown: false,
                }}
                name="SingleProduct"
                component={SingleProductScreen}
              />
              <Stack.Screen
                name="Electronics"
                options={{
                  headerStyle: { height: 130, backgroundColor: "#5854e8" },
                }}
                component={ElectronicsScreen}
              />
              <Stack.Screen
                name="Furniture"
                options={{
                  headerStyle: { height: 130, backgroundColor: "#5854e8" },
                }}
                component={FurnitureScreen}
              />
              <Stack.Screen
                name="Fitness"
                options={{
                  headerStyle: { height: 130, backgroundColor: "#5854e8" },
                }}
                component={FitnessScreen}
              />
              <Stack.Screen
                name="WorkfromHome"
                options={{
                  headerStyle: { height: 130, backgroundColor: "#5854e8" },
                }}
                component={WorkFromHomeScreen}
              />
              <Stack.Screen
                name="Login"
                options={{
                  headerStyle: { backgroundColor: "#5854e8" },
                  headerTintColor: "white",
                  headerTitleAlign: "center",
                }}
                component={LoginScreen}
              />
              <Stack.Screen
                name="Recently Watched Products"
                options={{
                  headerStyle: { backgroundColor: "#5854e8" },
                  headerTintColor: "white",
                  headerTitleAlign: "center",
                }}
                component={RecentlyWatched}
              />
              <Stack.Screen
                name="Checkout"
                options={{
                  headerStyle: { backgroundColor: "#5854e8" },
                  headerTintColor: "white",
                  headerTitleAlign: "center",
                }}
                component={CheckoutScreen}
              />
            </Stack.Navigator>
          </ApplicationProvider>
        </NavigationContainer>
        <Toast />
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
