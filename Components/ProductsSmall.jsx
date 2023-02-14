import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tile } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";

const ProductsSmall = ({ id, title, img, price }) => {
    const navigation=useNavigation()
  return (
    <>
      <View  onTouchEndCapture={() =>
        navigation.navigate("SingleProduct", { title: title, id: id })
      } style={styles.mainDiv}>
        <Image style={styles.image} source={{ uri: img }} />
        <Text style={styles.text}>{title[0]+title[1]+title[2]+title[3]+title[4]+title[5]+title[6]}</Text>
        <Text style={styles.priceText}>₹ {price} /mo</Text>
      </View>
    </>
  );
};

export default ProductsSmall;

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderBottomLeftRadius:10,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    borderBottomRightRadius:10,
    elevation:6,
    marginLeft:"auto",
    marginRight:"auto",
    
  },
  mainDiv: {
    width: 110,
    height: 150,
 
    borderColor:"blue",

    margin:4,
    borderBottomLeftRadius:10,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    borderBottomRightRadius:10,
  },
  text: {
    fontSize: 15,
    color: "black",
 
    marginLeft:"auto",
    marginRight:"auto",
    margin:1,
  },
  priceText: {
    fontSize: 12,
  margin:1,
    
    color:"#82827b",  marginLeft:"auto",
    marginRight:"auto"

  },
});
