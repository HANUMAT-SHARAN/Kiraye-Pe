import { StyleSheet, Text, View, ScrollView, RefreshControl, Image } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductsSmall from "../../Components/ProductsSmall";
import { FlatList } from "react-native";
import CartProduct from "../../Components/CartProduct";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { Button } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { setNewPriceToCheckout } from "../../Redux/cart/cartAction";

const CartScreen = () => {
  const { count, currentUser, isAuth, recentlyWatched, cart, totalPrice } =
    useSelector((store) => store.authManager);
  const [usercart, setUserCart] = React.useState([]);
  const [tPrice, setTotalPrice] = React.useState(0)
  const [refreshing, setRefreshing] = React.useState(false);
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const updated = () => {
    Toast.show({
      type: "success",
      text1: "Quantiy Updated Succesfully 😁",
      text2: "Cool Bro 😁",

      position: "bottom",
      topOffset: 100,
    });
  };
  const deleted = () => {
    Toast.show({
      type: "error",
      text1: "Product Deleted Succesfully 😊",
      text2: "Now You Can Buy Something More!",
      position: "top",
      topOffset: 100,
    });
  };

  const onRefresh = () => {
    setRefreshing(true);
    getData()
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };
  const getData = async () => {
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

      setTotalPrice(sum)
      setUserCart(arr)
    } catch (error) { }
  };

  const increaseQuantity = async (productId, id) => {
    console.log(id, "Userid", productId);
   
    try {
      const data = await fetch(`https://rento-mojo-native-server.vercel.app/cartarr/${id}`, {

      });
      const res = await data.json()
      console.log(res)
      let productData = res.product
      productData.q = productData.q + 1
      console.log(productData)
      try {
        const send = await fetch(`https://rento-mojo-native-server.vercel.app/cartarr/${id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ product: productData })

        });
        let resedn = await send.json()
        console.log("resedn ", resedn);
      } catch (error) {
        console.log("error ", error);

      }
     
      getData()
      updated()
    } catch (error) {
      console.log("error ", error);
    }
  }
  const decreaseQuantity = async (productId, id) => {
    
   
    try {
      const data = await fetch(`https://rento-mojo-native-server.vercel.app/cartarr/${id}`, {

      });
      const res = await data.json()
      console.log(res)
      let productData = res.product
      productData.q = productData.q - 1
      console.log(productData)
      try {
        const send = await fetch(`https://rento-mojo-native-server.vercel.app/cartarr/${id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ product: productData })

        });
        let resedn = await send.json()
        console.log("resedn ", resedn);
      } catch (error) {
        console.log("error ", error);

      }

      getData()
      updated()
    } catch (error) {
      console.log("error ", error);
    }
  }
  const sendToCheckout = () => {
    dispatch(setNewPriceToCheckout(tPrice))
    navigation.navigate("Checkout")


  }

  const removeproduct = async (id) => {
    deleted()
    try {
      await fetch(`https://rento-mojo-native-server.vercel.app/cartarr/${id}`, {
        method: "DELETE",
      });
      getData()
    } catch (error) {
      console.log("error ", error);
    }
  };

  React.useEffect(() => {
    getData();
  }, [cart]);
  return (
    <>
      <View style={styles.mainConatinerStyle}>

        <Button
          onPress={() => sendToCheckout()}
          style={[styles.btn]}

          size="giant"
          color="red"

        >
          {isAuth ? `Proceed To Checkout  ₹ ${tPrice}` : `Please login to buy Products 🥺`}
        </Button>

      </View>
      <ScrollView style={styles.mainScreen} refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>

        {isAuth ? usercart.map((el) => (
          <CartProduct increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} removeproduct={removeproduct} {...el} />
        )) : <View style={styles.emptycartImg}>
          <Text style={styles.catText}>Your Cart Is Empty Now!</Text>
          <Image style={{ width: 300, height: 300, marginRight: "auto", marginLeft: "auto" }} source={{ uri: `https://www.rentomojo.com/public/images/error/no-cart.png` }} />

        </View>}





        {isAuth ? (
          <FlatList
            numColumns={3}
            data={recentlyWatched}
            renderItem={({ item }) => <ProductsSmall key={item} {...item} />}
          />
        ) : (
          null
        )}
      </ScrollView>
    </>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "red",
    marginTop: 5,
    padding: 10,
    width: "90%", marginLeft: "auto", marginRight: "auto"

  }, mainConatinerStyle: {
    flexDirection: 'column',
    flex: 1
  }, mainScreen: {
    marginTop: 70
  }, emptycartImg: {
    backgroundColor: "#5854e8", padding: 10, marginRight: "auto", marginLeft: "auto",
    borderWidth: 5,
    padding: 30,
    borderColor: `#5854e8`, borderBottomLeftRadius: 30,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 5,
  },
  catText: {
    fontSize: 20,
    margin: 20,
    fontWeight: "bold",
    marginLeft: "auto", marginRight: "auto",
    color: "white"
  },
});
