import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Button } from "@ui-kitten/components";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useDispatch, useSelector } from "react-redux";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import {
  decQuantity,
  deleteProduct,
  incQuantity,
  updateQuantity,
} from "../Redux/cart/cartAction";
import { useNavigation } from "@react-navigation/native";

const CartProduct = ({ id, product, removeproduct, increaseQuantity, decreaseQuantity }) => {
  const [ count,setCount] = React.useState(1);
  const [productPrice, setNewProductPrice] = React.useState(product.price);
  const navigation=useNavigation()
  const { currentUser, isAuth, recentlyWatched, cart, totalPrice } =
    useSelector((store) => store.authManager);
    let counts=0
    let bag=""
    for(let i=0;i<=product.title.length-1;i++){
      if(counts==17){
        break;
      }else{
        bag=bag+product.title[i]
        counts++ 
      }
                
    }

  const dispatch = useDispatch();



  return (
    <>
      <View   style={styles.mainDiv}>
        <Image
        onTouchEnd={()=> navigation.navigate("SingleProduct", { title: product.title, id: product.id })}
          style={styles.Image}
          source={{
            uri: product.img,
          }}
        />
        <View style={{
          backgroundColor: "#5854e8", height: 40, width: 70, marginLeft: "auto",
          marginRight: "auto",borderBottomRightRadius: 3,borderBottomLeftRadius:3,
        }}></View>
         <View style={{backgroundColor:"#5854e8",height:15, width: "60%",marginLeft: "auto",
          marginRight: "auto",borderBottomRightRadius: 5,borderBottomLeftRadius:5, borderTopLeftRadius: 5,
          borderTopRightRadius: 5,marginBottom:10}}></View>
        
        <View style={styles.titleDiv}>
          {/* Title and Delete button */}
          <Text style={styles.title}>{bag}</Text>
          <Button
            onPress={() => removeproduct(id)}
            style={[styles.common, { backgroundColor: "red" }]}
            color={"red"}
          >
            <Ionicons name="trash" size={30} />
          </Button>
        </View>
        
        <View style={styles.quantity}>
          <Button disabled={product.q == 5} onPress={() => [increaseQuantity(product.id, id), setCount(count + 1)]} style={[styles.btn]}>
            +
          </Button>
          <Button style={[styles.btn]}>{product.q}</Button>
          <Button
            disabled={product.q == 1}
            onPress={() => [decreaseQuantity(product.id, id)]}
            color="red"
          >
            -
          </Button>
        </View>
        <View style={styles.priceDiv}>
          <View>
            <Text style={styles.greyPrice}>Rent</Text>
            <Text style={styles.price}> ₹{product.price}/ mon</Text>
          </View>
          <View>
            <Text style={styles.greyPrice}> Deposit</Text>
            <Text style={styles.price}>
              {" "}
              ₹ {Math.floor(2 * product.price)} / mon
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default CartProduct;

const styles = StyleSheet.create({
  Image: {
    width: 240,
    height: 200,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    marginLeft: "auto",
    marginRight: "auto", borderWidth: 6,

    padding: 10,
    borderColor: `#5854e8`,
  },
  mainDiv: {
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "white",
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    width: "80%",

    // borderWidth: 3,
    padding: 10,
    borderColor: `#5854e8`,
    margin: 5,
  
  },
  common: {
    // width: "20%",
    // height: 10,
  },
  btn: {
    color: "red"
  },
  title: {
    width: "50%",
    fontSize: 14,
    fontWeight: "bold",
    margin: 5,
  },
  titleDiv: {
    
    display: "flex",
    flexDirection: "row",
    marginLeft: "auto",
    marginRight: "auto",
    fontSize: 30,
    fontWeight: "bold",
    margin: 5,
    padding: 5,
    borderWidth: 2,
    borderBottomLeftRadius:20,
    borderTopLeftRadius:5,
    borderTopRightRadius:20,
    borderBottomRightRadius:5,
    padding: 10,
    borderColor: `#5854e8`,
  },
  quantity: {
    width: "58%",
    display: "flex",
    flexDirection: "row",
    marginLeft: "auto",
    marginRight: "auto",
    justifyContent: "space-between",
    padding: 5,margin:5,
  },
  priceDiv: {
    width: "80%",
    display: "flex",
    flexDirection: "row",
    marginLeft: "auto",
    marginRight: "auto",
    justifyContent: "space-between", borderBottomLeftRadius:20,
    borderTopLeftRadius:5,
    borderTopRightRadius:20,
    borderBottomRightRadius:5,
    padding: 5,
    borderWidth: 2,

    padding: 10,
    borderColor: `#5854e8`,
  },
  greyPrice: {
    color: "#808080",
    fontSize: 13,
    fontWeight: "bold",
  },
  price: {
    fontWeight: "bold",
    fontSize: 13,
    
  },
});
