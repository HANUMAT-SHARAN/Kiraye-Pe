import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Button } from "@ui-kitten/components";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useDispatch, useSelector } from "react-redux";
import {
  decQuantity,
  deleteProduct,
  incQuantity,
  updateQuantity,
} from "../Redux/cart/cartAction";

const CartProduct = ({ id, product }) => {
  const [count, setCount] = React.useState(1);
  const [productPrice, setNewProductPrice] = React.useState(data.price);
  const { currentUser, isAuth, recentlyWatched, cart, totalPrice } =
    useSelector((store) => store.authManager);
  const dispatch = useDispatch();
  const increaseQuatity = async () => {
    setCount(count + 1);
  };
  const decreaseQuantity = () => {
    setCount(count - 1);
  };
  const removeproduct = async (id) => {
    console.log(id);
    try {
      await fetch(`https://rento-mojo-native-server.vercel.app/cartarr/${id}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.log("error ", error);
    }
  };
  return (
    <>
      <View style={styles.mainDiv}>
        <Image
          style={styles.Image}
          source={{
            uri: product.img,
          }}
        />
        <View style={styles.titleDiv}>
          {/* Title and Delete button */}
          <Text style={styles.title}>{product.title}</Text>
          <Button
            onPress={() => removeproduct(id)}
            style={[styles.common, { fontSize: 20 }]}
            status="danger"
          >
            <Ionicons name="trash" size={30} />
          </Button>
        </View>
        <View style={styles.quantity}>
          <Button onPress={() => increaseQuatity()} style={[styles.btn]}>
            +
          </Button>
          <Button style={[styles.btn]}>{product.q}</Button>
          <Button
            disabled={count == 1}
            onPress={() => decreaseQuantity(id)}
            style={[styles.btn]}
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
    marginRight: "auto",
  },
  mainDiv: {
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "white",
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    width: "90%",

    margin: 5,
    padding: 10,
  },
  common: {
    // width: "20%",
    // height: 10,
  },
  btn: {},
  title: {
    width: "50%",
    fontSize: 13,
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
  },
  quantity: {
    width: "72%",
    display: "flex",
    flexDirection: "row",
    marginLeft: "auto",
    marginRight: "auto",
    justifyContent: "space-between",
    padding: 5,
  },
  priceDiv: {
    width: "72%",
    display: "flex",
    flexDirection: "row",
    marginLeft: "auto",
    marginRight: "auto",
    justifyContent: "space-between",
    padding: 5,
  },
  greyPrice: {
    color: "#808080",
    fontSize: 13,
    fontWeight: "bold",
  },
  price: {
    fontWeight: "bold",
    fontSize: 15,
  },
});
