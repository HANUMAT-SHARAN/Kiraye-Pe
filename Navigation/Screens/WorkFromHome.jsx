import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { Avatar } from "@rneui/themed";
import ProductCard from "../../Components/ProductCard";
import { Toast } from "react-native-toast-message/lib/src/Toast";

const styles = StyleSheet.create({
  parentDiv: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    textAlign: "center",
    color: "white",
  },
  filterDiv: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    alignContent: "center",

    borderColor: "red",
    padding: 2,
    margin: 2,
    color: "white",
  },
 
  textCat: {
    marginLeft:"auto",
    marginRight:"auto",
    fontSize: 12,
    marginTop: 2,
    fontWeight: "bold",
    color: "white",
  },
});
const WorkFromHomeScreen = ({ route, navigation }) => {
  const showSuccess = () => {
    Toast.show({
      type: "success",
      text1: "Category is Updated Succesfully 😎",
      text2: "Hurray now you can explore more ",
      position: "top",
      topOffset: 150,
    });
  };
  const [cat, setCat] = React.useState("wfm");
  const [data, setData] = React.useState([]);
  const getProductsData = async () => {
    try {
      let data = await fetch(
        `https://rento-mojo-native-server.vercel.app/electronics?category=${cat}`
      );
      let res = await data.json();
      setData(res);
    } catch (error) {}
  };

  React.useEffect(() => {
    getProductsData();
    showSuccess();
  }, [cat]);

  React.useEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View style={styles.parentDiv}>
          <View
            onTouchEndCapture={() => setCat("wfm")}
            style={styles.filterDiv}
          >
            <View
              style={cat == "wfm" ? styles.activeImage : styles.activeImage}
            >
              <Avatar
                size={62}
                rounded
                source={{
                  uri: "https://p.rmjo.in/productSquare/qu9y4szh-500x500.jpg",
                }}
              />
            </View>
            <Text style={styles.textCat}>Chair</Text>
          </View>
          <View
            onTouchEndCapture={() => setCat("treadmill")}
            style={styles.filterDiv}
          >
            <View
              style={
                cat == "treadmill" ? styles.activeImage : styles.activeImage
              }
            >
              <Avatar
                size={62}
                rounded
                source={{
                  uri: "https://p.rmjo.in/productSquare/b8g0ufr1-500x500.jpg",
                }}
              />
            </View>
            <Text style={styles.textCat}>Tread Mills</Text>
          </View>
          <View
            onTouchEndCapture={() => setCat("cycle")}
            style={styles.filterDiv}
          >
            <View
              style={cat == "cycle" ? styles.activeImage : styles.activeImage}
            >
              <Avatar
                size={62}
                rounded
                source={{
                  uri: "https://p.rmjo.in/productSquare/5319tgr7-500x500.jpg",
                }}
              />
            </View>
            <Text style={styles.textCat}>Exercise Cycle</Text>
          </View>
          <View
            onTouchEndCapture={() => setCat("massager")}
            style={styles.filterDiv}
          >
            <View
              style={
                cat == "massager" ? styles.activeImage : styles.activeImage
              }
            >
              <Avatar
                size={62}
                rounded
                source={{
                  uri: "https://p.rmjo.in/productSquare/niqfc8xs-500x500.jpg",
                }}
              />
            </View>
            <Text style={styles.textCat}>Massagers</Text>
          </View>
        </View>
      ),
    });
  }, [navigation]);

  return (
    <ScrollView>
      {data && data.map((el) => <ProductCard key={el.id} {...el} />)}
    </ScrollView>
  );
};

export default WorkFromHomeScreen;

// const styles = StyleSheet.create({
//   parentDiv:{
//       marginTop:10,
//       display:"flex",
//       flexDirection:"row"
//   },
//   filterDiv:{
//     textAlign:"center",

//       margin:5,
//   }
// })