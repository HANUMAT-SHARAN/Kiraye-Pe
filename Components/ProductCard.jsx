import { Button, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { addInRecentlyWatched } from "../Redux/auth/authAction";

const ProductCard = ({ img, title, price, id }) => {
  const navigation = useNavigation();
  const dispatch=useDispatch()

  const sendToSingleProduct=()=>{
    navigation.navigate("SingleProduct", { title: title, id: id })
    dispatch(addInRecentlyWatched({img,title,price,id}))
  }
  return (
    <View
      onTouchEndCapture={() =>
        sendToSingleProduct()
      }
      style={Card.box}
    >
      <Image style={Card.image} source={{ uri: img }} />
      <View style={Card.details}>
        <View style={Card.mini}>
          <Text
            style={{
              color: "black",
              fontWeight: "bold",
              fontSize: 13,
              marginBottom: 5,
              shadowColor: "red",
            }}
          >
            {title}{" "}
          </Text>
          <Text style={{ color: "black", fontWeight: "bold", fontSize: 19 }}>
            ₹ {price} / month
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 12, marginTop: 5 }}>
            For{" "}
            <Text style={{ color: "red", fontWeight: "bold" }}>12 months</Text>
          </Text>
        </View>
        <View style={Card.mini}>
          <Button
            onPress={() =>
              navigation.navigate("SingleProduct", { title: title, id: id })
            }
            style={Card.button}
            title="View Detail"
            color={"red"}
          />
        </View>
      </View>
    </View>
  );
};

export default ProductCard;

const Card = StyleSheet.create({
  box: {
    margin: 20,
    borderRadius: 30,
    alignItems: "center",
    textAlign: "center",
  },
  image: {
    width: "95%",
    height: 360,
    borderRadius: 20,
  },
  details: {
    marginTop: 30,
    textAlign: "left",
    alignItems: "center",

    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
  },
  mini: {},
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
  },
});
