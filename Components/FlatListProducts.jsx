import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import ProductsSmall from "./ProductsSmall";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const FlatListProducts = ({ data,titleText,redirectto }) => {
    const navigation=useNavigation()
  return (
    <>
      <View style={styles.topDiv}>
        <Text style={styles.text}>{titleText}</Text>
        <Text  onTouchEndCapture={() =>
            navigation.navigate(redirectto, { category: "laptops" })
          } style={styles.text}>
          View All <Ionicons name="arrow-forward" color={"black"} size={20} />
        </Text>
      </View>
      <FlatList
        alwaysBounceHorizontal
        showsHorizontalScrollIndicator={false}
        horizontal
        data={data}
        renderItem={({ item }) => <ProductsSmall key={item} {...item} />}
      />
    </>
  );
};

export default FlatListProducts;

const styles = StyleSheet.create({
  topDiv: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
    marginBottom:5,
    marginTop: 10,
  },
  text: {
    fontSize: 20,
    marginTop: 5,
    marginBottom:5,
    fontWeight:"bold",
    color: "#1f2123",
  },
});
