import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { Avatar } from "@rneui/themed";
import ProductCard from "../../Components/ProductCard";
import { Toast } from "react-native-toast-message/lib/src/Toast";

// export const Filter = () => {

//   return (
//     <View style={styles.parentDiv}>
//       <View onTouchEndCapture={()=>setCat("smartphones")} style={styles.filterDiv}>
//       <Avatar
//     size={72}
//     rounded
//     source={{ uri: "https://p.rmjo.in/productSquare/mxzy0xf9-500x500.jpg" }}
//   />
//   <Text style={{fontSize:10,marginTop:5}}>SmartPhones</Text>
//       </View>
//       <View style={styles.filterDiv}>
//       <Avatar
//     size={72}
//     rounded
//     source={{ uri: "https://p.rmjo.in/productSquare/mxzy0xf9-500x500.jpg" }}
//   />
//   <Text style={{fontSize:10,marginTop:5}}>SmartPhones</Text>
//       </View>
//        <View style={styles.filterDiv}>
//       <Avatar
//     size={72}
//     rounded
//     source={{ uri: "https://p.rmjo.in/productSquare/mxzy0xf9-500x500.jpg" }}
//   />
//   <Text style={{fontSize:10,marginTop:5,fontWeight:"bold"}}>SmartPhones</Text>
//       </View>
//     </View>
//   )
// }

const styles = StyleSheet.create({
  parentDiv: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    textAlign: "center",
  },
  filterDiv: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    alignContent: "center",

    borderColor: "red",
    padding: 2,
   
  },
 
  
  textCat: {
    marginLeft:"auto",
    marginRight:"auto",
    fontSize: 10,
    marginTop: 2,
    fontWeight: "bold",
    color: "white",
  }
});
const ElectronicsScreen = ({ route, navigation }) => {
  const showSuccess = () => {
    Toast.show({
      type: "success",
      text1: "Category is Updated Succesfully 😎",
      text2: "Hurray now you can explore more ",
      position: "bottom",
      topOffset: 150,
      
    });
  };
  const [cat, setCat] = React.useState("laptop");
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
    showSuccess()
  }, [cat]);

  React.useEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View style={styles.parentDiv}>
          <View
            onTouchEndCapture={() => setCat("smartphone")}
            style={styles.filterDiv}
          >
            <View
              style={styles.textCat}
            >
              <Avatar
                size={62}
                rounded
                source={{
                  uri: "https://p.rmjo.in/productSquare/mxzy0xf9-500x500.jpg",
                }}
              />
            </View>
            <Text  style={styles.textCat}>
              Smart Phones
            </Text>
          </View>
          <View
            onTouchEndCapture={() => setCat("laptop")}
            style={styles.filterDiv}
          >
            <View
              style={[styles.activeImage] }
            >
              <Avatar
                size={62}
                rounded
                source={{
                  uri: "https://p.rmjo.in/productSquare/hyob6tn7-500x500.jpg",
                }}
              />
            </View>
            <Text
               style={styles.textCat}
            >
              Laptops
            </Text>
          </View>
          <View
            onTouchEndCapture={() => setCat("smartdevices")}
            style={styles.filterDiv}
          >
            <View
              style={
                styles.textCat 
              }
            >
              <Avatar
                size={62}
                rounded
                source={{
                  uri: "https://p.rmjo.in/productSquare/wph9nyr6-500x500.jpg",
                }}
              />
            </View>
            <Text  style={styles.textCat}>
              Smart Devices
            </Text>
          </View>
          <View
            onTouchEndCapture={() => setCat("tablets")}
            style={styles.filterDiv}
          >
            <View
              style={cat == "tablets" ? styles.activeImage : styles.activeImage}
            >
              <Avatar
                size={62}
                rounded
                source={{
                  uri: "https://p.rmjo.in/productSquare/dvlj6ic5-500x500.jpg",
                }}
              />
            </View>
            <Text
               style={styles.textCat}
            >
              Tablets
            </Text>
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

export default ElectronicsScreen;

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
