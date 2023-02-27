import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { addInRecentlyWatched } from "../Redux/auth/authAction";
import { Button } from "@ui-kitten/components";

const ProductCard = ({ img, title, price, id }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch()
  let count = 0
  let bag = ""
  for (let i = 0; i <= title.length - 1; i++) {
    if (count == 17) {
      break;
    } else {
      bag = bag + title[i]
      count++
    }

  }
  const sendToSingleProduct = () => {
    navigation.navigate("SingleProduct", { title: title, id: id })
    dispatch(addInRecentlyWatched({ img, title, price, id }))
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
              shadowColor: "red"
            }}
          >
            {
              bag
            }{" "}
          </Text>
          <Text style={{ color: "black", fontWeight: "bold", fontSize: 18.4, marginRight: 5 }}>
            ₹ {price} / month
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 12, marginTop: 5 }}>
            For{" "}
            <Text style={{ color: "red", fontWeight: "bold" }}>12 months</Text>
          </Text>
        </View>
        <View style={Card.mini}>
          <Button onPress={() =>
            navigation.navigate("SingleProduct", { title: title, id: id })
          }
            style={{ padding: 5, borderRadius: 5, }}
            title="View Detail"
            color={"#5854e8"}>View All </Button>


        </View>
      </View>
    </View>
  );
};

export default ProductCard;

const Card = StyleSheet.create({
  box: {
    margin: 15,
    borderRadius: 30,
    alignItems: "center",
    textAlign: "center",

    borderWidth: 5,

    padding: 10,

    borderColor: `#5854e8`, borderBottomLeftRadius: 30,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 5,
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
