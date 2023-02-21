import { Image, StyleSheet, Text, ScrollView, View, RefreshControl } from "react-native";
import React, { useEffect, useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Button, Slider } from "@rneui/themed";
import Loader from "../../Components/Loader";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addProductIncart } from "../../Redux/cart/cartAction";

import { Toast } from "react-native-toast-message/lib/src/Toast";
import Advantages from "../../Components/Advantages";
import { useNavigation } from "@react-navigation/native";

const SingleProductScreen = ({ route }) => {
  const [value, setValue] = useState(8);
  const { id } = route.params;
  const [data, setData] = useState({});
  const [load, setLoad] = useState(false);
  const [refresh, setRefreshing] = useState(false)
  const { count, currentUser, isAuth } = useSelector((store) => store.authManager);
  const navigation=useNavigation()
  const alert = () => {
    Toast.show({
      type: "success",
      text1: "Product Added To Cart Succesfully",
      text2: "Show More Now",
      position: "top",
      topOffset: 100,
    });
  };
  const showError = () => {
    Toast.show({
      type: "error",
      text1: "Please Login to add product in cart ",
      text2: "Something went Wrong!",
      position: "top",
      topOffset: 100,
    });
  };
  const dispatch = useDispatch();
  const { title, img, price, deliveryicon } = data;

  const getCartLength = async () => {
    try {
      let data = await fetch(
        `https://rento-mojo-native-server.vercel.app/cartarr`
      );
      let res = await data.json();

      let arr = res.filter((el) => el.email == currentUser.email)

      let sum = 0;
      for (let i = 0; i <= arr.length - 1; i++) {
        console.log(arr[i].product.q,)
        sum = sum + arr[i].product.price * arr[i].product.q
      }

      
      setUserCart(arr)
    } catch (error) { }
  };
  const getData = async () => {
    setLoad(true);
    try {
      let data = await fetch(
        `https://rento-mojo-native-server.vercel.app/electronics/${id}`
      );
      let res = await data.json();

      setData(res);
    } catch (error) {
      console.log("error ", error);
    }
    setLoad(false)
  };
  const sendData = async (data) => {
    if (!isAuth) {
      showError()
      return
    }
    dispatch(addProductIncart(data));
    console.log(currentUser);
    alert()
    try {
      console.log(data);
      let product = data
      product.q = 1
      let sendObj = { email: currentUser.email, product };
      console.log(sendObj)
      const d = await fetch(`https://rento-mojo-native-server.vercel.app/cartarr`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(sendObj)
      })
      const res = await d.json()


    } catch (error) {
      console.log("error ", error);
    }
  };
  const doRefresh = () => {

    setRefreshing(true)
    setTimeout(() => {
      setRefreshing(false)


    }, 1000)
    getData();
  }

  useEffect(() => {


    getData();
  }, [id]);
  if (load) {
    return <Loader />;
  }
  return <>
  <View style={{marginTop:35, display: "flex", flexDirection: "row", justifyContent: "space-between", width: "95%", marginLeft: "auto", marginRight: "auto", padding: 5, margin: 5 }}>
    <Button onPress={()=>navigation.goBack()} style={{ padding: 5, borderWidth: 5, borderRadius: 5 }} color={"white"}>   <Ionicons name="arrow-back" size={25} /></Button>

    <Button onPress={()=>navigation.navigate("Cart")}  color={"white"}>   <Ionicons name="cart" size={25} /></Button>
  </View>
    <ScrollView refreshControl={<RefreshControl onRefresh={doRefresh} refreshing={refresh} />}>

      <Image style={styles.heroImage} source={{ uri: img }} />
      <View style={styles.pricediv}>
        <Text style={styles.priceText}>
          {" "}
          ₹ {value >= 12 ? Math.floor(price / 2) : price} / Month
        </Text>
        <Text style={styles.rfPrice}> ₹ {price * 2} Refundable Deposit</Text>
      </View>
      <View style={{ backgroundColor: "#d4e0e9", borderTopLeftRadius: 20 }}>
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
        <Text style={{ fontSize: 18, fontWeight: "bold", padding: 10, }}>
          <Ionicons name="star" size={20} />   {title}
        </Text>
        <Text style={{ fontSize: 13, fontWeight: "bold", padding: 10, color: "#8c9392" }}>How long you want to rent
          this for ? (Months) !</Text>
        <Slider
          animationType="spring"
          allowTouchTrack={true}
          maximumValue={12}
          minimumValue={4} t
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

        <Button

          onPress={() => sendData(data)}
          size="lg"
          style={{ marginLeft: "auto", marginRight: "auto", width: "70%" }}
          color="error"
          title="Add To Cart"
          type="solid"
        />
      </View>
      <Advantages />
    </ScrollView>
  </>

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
    backgroundColor: "#2b2d2c",
    borderTopStartRadius: 20,
    borderTopLeftRadius: 20,
  },
  priceText: {
    paddingTop: 30,
    color: "white",
    fontSize: 37,
    fontWeight: "bold",
    marginLeft: 10,
  },
  rfPrice: {
    color: "white",
    fontSize: 16,
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
