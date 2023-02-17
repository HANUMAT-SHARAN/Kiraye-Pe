import { Image, StyleSheet, Text, ScrollView, View } from "react-native";
import React, { useEffect, useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Button, Slider } from "@rneui/themed";
import Loader from "../../Components/Loader";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addProductIncart } from "../../Redux/cart/cartAction";

const SingleProductScreen = ({ route }) => {
  const [value, setValue] = useState(8);
  const { id } = route.params;
  const [data, setData] = useState({});
  const [load, setLoad] = useState(false);
  const { count, currentUser } = useSelector((store) => store.authManager);

  const dispatch = useDispatch();
  const { title, img, price, deliveryicon } = data;
  const getData = async () => {
    try {
      let data = await fetch(
        `https://rento-mojo-native-server.vercel.app/electronics/${id}`
      );
      let res = await data.json();

      setData(res);
    } catch (error) {
      console.log("error ", error);
    }
  };
  const sendData = async (data) => {
    dispatch(addProductIncart(data));
    console.log(currentUser);

    try {
      console.log(data);
      let product=data
      product.q=1
      let sendObj = { email: currentUser.email ,product};
      console.log(sendObj)
     await fetch(`https://rento-mojo-native-server.vercel.app/cartarr`,{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(sendObj)
     })
    } catch (error) {
      console.log("error ", error);
    }
  };

  useEffect(() => {
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
    }, 500);
    getData();
  }, [id]);
  if (load) {
    return <Loader />;
  }
  return (
    <ScrollView>
      <Image style={styles.heroImage} source={{ uri: img }} />
      <View style={styles.pricediv}>
        <Text style={styles.priceText}>
          {" "}
          ₹ {value >= 12 ? Math.floor(price / 2) : price} / Month
        </Text>
        <Text style={styles.rfPrice}> ₹ {price * 2} Refundable Deposit</Text>
      </View>
      <View style={{ backgroundColor: "grey", borderTopLeftRadius: 20 }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "60%",
            marginLeft: 5,
            justifyContent: "space-around",
            padding: 10,
          }}
        >
          <Image
            style={styles.dimg}
            source={{
              uri: `https://static.vecteezy.com/system/resources/thumbnails/002/206/240/small/fast-delivery-icon-free-vector.jpg`,
            }}
          />
          <Text style={{ fontSize: 14, fontWeight: "bold" }}>
            Delivery by {new Date().getDate() + 4}-{new Date().getMonth() + 1}-
            {new Date().getFullYear()}
          </Text>
        </View>
      </View>
      <View style={styles.sliderDiv}>
        <Text style={{ fontSize: 20, fontWeight: "bold", padding: 10 }}>
          {title}
        </Text>
        <Slider
          animationType="spring"
          allowTouchTrack={true}
          maximumValue={12}
          minimumValue={4}
          step={4}
          thumbTintColor="red"
          value={value}
          onValueChange={setValue}
          thumbStyle={{ height: 20, width: 16, backgroundColor: "red" }}
        />
        <View style={styles.sliderText}>
          <Text style={{ fontSize: 12, fontWeight: "bold" }}>4+</Text>
          <Text style={{ fontSize: 12, fontWeight: "bold" }}>8+</Text>
          <Text style={{ fontSize: 12, fontWeight: "bold" }}>12+</Text>
        </View>
      </View>
      <View style={styles.addToCartButton}>
        <Text>{count}</Text>
        <Button
          onPress={() => sendData(data)}
          size="lg"
          color="error"
          title="Add To Cart"
          type="solid"
        />
      </View>
    </ScrollView>
  );
};

export default SingleProductScreen;

const styles = StyleSheet.create({
  heroImage: {
    width: "100%",
    height: 350,
    borderRadius: 10,
  },
  dimg: {
    width: "14%",
    height: 30,
    borderRadius: 40,
  },
  pricediv: {
    color: "white",
    backgroundColor: "black",
    borderTopStartRadius: 20,
    borderTopLeftRadius: 20,
  },
  priceText: {
    paddingTop: 30,
    color: "white",
    fontSize: 27,
    fontWeight: "bold",
    marginLeft: 10,
  },
  rfPrice: {
    color: "white",
    fontSize: 14,
    paddingTop: 20,

    marginLeft: 17,
    marginBottom: 20,
  },
  sliderText: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    fontSize: 20,
  },
  sliderDiv: {
    marginLeft: "5%",
    width: "90%",
  },
  addToCartButton: {
    marginTop: 20,
  },
});
