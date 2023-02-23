import { StyleSheet, Text, View,ScrollView } from "react-native";
import React from "react";
import { Avatar } from "@rneui/themed";
import ProductCard from "../../Components/ProductCard";
import { Toast } from "react-native-toast-message/lib/src/Toast";



const styles = StyleSheet.create({
  parentDiv: {
    marginTop: 6,
    display: "flex",
    flexDirection: "row",
    textAlign:"center",
  },
  filterDiv: {
    display:"flex",
    flexDirection:"column",
    textAlign: "center",
    alignContent:"center",
    
    borderColor:"red",
    padding:4,
   
  },
 
   
  textCat: {
    marginLeft:"auto",
    marginRight:"auto",
    fontSize: 11,
    marginTop: 2,
    fontWeight: "bold",
    color: "white",
  }
});
const FurnitureScreen = ({ route, navigation }) => {
  const showSuccess = () => {
    Toast.show({
      type: "success",
      text1: "Category is Updated Succesfully 😎",
      text2: "Hurray now you can explore more ",
      position: "bottom",
      topOffset: 150,
      
    });
  };
  const [cat, setCat] = React.useState("bedroom");
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
            onTouchEndCapture={() => setCat("livingroom")}
            style={styles.filterDiv}
          >
            <View style={styles.textCat}><Avatar
              size={62}
              rounded
              source={{
                uri: "https://p.rmjo.in/productSquare/u99cxuq8-500x500.jpg",
              }}
            /></View>

            <Text style={styles.textCat}>
              Living Room
            </Text>
          </View> 
           <View
            onTouchEndCapture={() => setCat("bedroom")}
            style={styles.filterDiv}
          >
            <View style={styles.textCat}><Avatar
              size={62}
              rounded
              source={{
                uri: "https://p.rmjo.in/productSquare/hc4dc706-500x500.jpg",
              }}
            /></View>
           
            <Text style={styles.textCat}>
              Bedroom
            </Text>
          </View> 
         {/* <View
            onTouchEndCapture={() => setCat("smartdevices")}
            style={styles.filterDiv}
          >
            <Avatar
              size={62}
              rounded
              source={{
                uri: "https://p.rmjo.in/productSquare/wph9nyr6-500x500.jpg",
              }}
            />
            <Text style={{ fontSize: 10, marginTop: 5, fontWeight: "bold" }}>
              Smart Devices
            </Text>
          </View>  */}
          {/* <View
            onTouchEndCapture={() => setCat("tablets")}
            style={styles.filterDiv}
          >
            <Avatar
              size={62}
              rounded
              source={{
                uri: "https://p.rmjo.in/productSquare/dvlj6ic5-500x500.jpg",
              }}
            />
            <Text style={{ fontSize: 10,marginLeft:10, marginTop: 5, fontWeight: "bold" }}>
             Tablets
            </Text>
          </View>  */}
        </View>
      ),
    });
  }, [navigation]);

  return <ScrollView>{data && data.map((el) => <ProductCard key={el.id} {...el} />)}</ScrollView>;
};

export default FurnitureScreen;

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
