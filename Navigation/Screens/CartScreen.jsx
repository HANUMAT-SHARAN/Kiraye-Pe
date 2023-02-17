import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import ProductsSmall from "../../Components/ProductsSmall";
import { FlatList } from "react-native";
import CartProduct from "../../Components/CartProduct";
import { Button } from "@ui-kitten/components";

const CartScreen = () => {
  const { count, currentUser, isAuth, recentlyWatched, cart, totalPrice } =
    useSelector((store) => store.authManager);
  const [usercart, setUserCart] = React.useState([]);
  const [tPrice,setTotalPrice]=React.useState(0)

  const getData = async () => {
    try {
      let data = await fetch(
        `https://rento-mojo-native-server.vercel.app/cartarr`
      );
      let res = await data.json();
 let arr=[]
 arr=res.filter((el)=>el.email==currentUser.email)
 console.log(arr,"ddd")
 let sum=0;
 for(let i=0;i<=arr.length-1;i++){
  console.log(arr[i],"ddf")
  sum=sum+arr[i].data.price
 }
 console.log(sum)
 setTotalPrice(sum)
    
    } catch (error) {}
  };
  React.useEffect(() => {
    getData();
  },[]);
  return (
    <ScrollView>
    
      <Button
        style={{ width: "90%", marginLeft: "auto", marginRight: "auto",marginTop:6 }}
        size="giant"
      >
        ₹ {tPrice}
      </Button>
      {usercart.map((el) => (
        <CartProduct {...el} />
      ))}



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
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
