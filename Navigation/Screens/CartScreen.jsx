import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import ProductsSmall from "../../Components/ProductsSmall";
import { FlatList } from "react-native";

const CartScreen = () => {
  const { count, currentUser, isAuth, recentlyWatched } = useSelector(
    (store) => store.authManager
  );
  return (
    <ScrollView>
      <Text>CartScreen</Text>

      {isAuth ? (
        <FlatList
          numColumns={3}
          data={recentlyWatched}
          renderItem={({ item }) => <ProductsSmall key={item} {...item} />}
        />
      ) : (
        <Text>Recentlye View</Text>
      )}
    </ScrollView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
