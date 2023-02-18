import { StyleSheet, Text, View, ScrollView, RefreshControl,Image } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import ProductsSmall from "../../Components/ProductsSmall";
import { FlatList } from "react-native";
import CartProduct from "../../Components/CartProduct";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { Button } from "@ui-kitten/components";

const CartScreen = () => {
  const { count, currentUser, isAuth, recentlyWatched, cart, totalPrice } =
    useSelector((store) => store.authManager);
  const [usercart, setUserCart] = React.useState([]);
  const [tPrice, setTotalPrice] = React.useState(0)
  const [refreshing, setRefreshing] = React.useState(false);

  const updated = () => {
    Toast.show({
      type: "success",
      text1: "Quantiy Updated Succesfully 😁",
      text2: "Cool Bro 😁",
    
      position: "top",
      topOffset: 100,
    });
  };
  const deleted = () => {
    Toast.show({
      type: "error",
      text1: "Product Deleted Succesfully 😊",
    text2:"Now You Can Buy Something More!",
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
    updated()
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
    } catch (error) {
      console.log("error ", error);
    }
  }
  const decreaseQuantity = async (productId, id) => {
    console.log(id, "Userid", productId);
    updated()
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
    } catch (error) {
      console.log("error ", error);
    }
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
          style={styles.btn}

          size="giant"
          status="danger"

        >
          Proceed To Checkout  ₹ {tPrice}
        </Button>
        
      </View>
      <ScrollView style={styles.mainScreen} refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>

{isAuth?usercart.map((el) => (
          <CartProduct increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} removeproduct={removeproduct} {...el} />
        )):<View style={{backgroundColor:"red",padding:10}}>
            <Text style={styles.catText}>Please Login To BUY Products !</Text>
          <Image style={{width:300,height:300,marginRight:"auto",marginLeft:"auto"}} source={{uri:`https://www.rentomojo.com/public/images/error/no-cart.png`}} />
          <Text style={styles.catText}>Your Cart Is Empty Now!</Text>
          </View>}

        



        {/* {isAuth ? (
        <FlatList
          numColumns={3}
          data={recentlyWatched}
          renderItem={({ item }) => <ProductsSmall key={item} {...item} />}
        />
      ) : (
        <Text>Recentlye View</Text>
      )} */}
      </ScrollView>
    </>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  btn: {

    marginTop: 5,
    padding: 4,

  }, mainConatinerStyle: {
    flexDirection: 'column',
    flex: 1
  }, mainScreen: {
    marginTop: 70
  },
  catText: {
    fontSize: 20,
    margin: 20,
    fontWeight: "bold",
    marginLeft: "auto", marginRight: "auto",
    color:"white"
  },
});
