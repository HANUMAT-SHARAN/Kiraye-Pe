import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { Avatar } from "@rneui/themed";
import ProductCard from "../../Components/ProductCard";

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
    margin: 2,
  },
  activeImage: {
    borderColor: "red",
    borderStyle: "solid",
    borderWidth: 4,
    borderRadius: 40,
  },
  notActiveImage:{
    borderColor: "green",
    borderStyle: "solid",
    borderWidth: 5,
    borderRadius: 40,
  },
  
});
const WorkFromHomeScreen = ({ route, navigation }) => {
  const [cat, setCat] = React.useState("wfm");
  const [data, setData] = React.useState([]);
  const getProductsData = async () => {
    try {
      let data = await fetch(
        `https://rento-mojo-native-server.vercel.app/electronics?category=${cat}`
      );
      let res = await data.json();
      setData(res);
      
    } catch (error) {

    }
  };

  React.useEffect(() => {
    getProductsData();
    
  }, [cat]);

  React.useEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View style={styles.parentDiv}>
          <View
            onTouchEndCapture={() => setCat("wfm")}
            style={styles.filterDiv}
          >
            <View style={cat == "wfm" ? styles.activeImage : styles.activeImage}>
              <Avatar
                size={62}
                rounded
                source={{
                  uri: "https://p.rmjo.in/productSquare/qu9y4szh-500x500.jpg",
                }}
              />
            </View>
            <Text style={{ fontSize: 10, marginTop: 5, fontWeight: "bold" }}>
              Chair
            </Text>
          </View>
          <View
            onTouchEndCapture={() => setCat("treadmill")}
            style={styles.filterDiv}
          >
           <View style={cat == "treadmill" ? styles.activeImage : styles.activeImage} >
           <Avatar
              size={62}
              rounded
              source={{
                uri: "https://p.rmjo.in/productSquare/b8g0ufr1-500x500.jpg",
              }}
            />
           </View>
            <Text
              style={{
                fontSize: 10,
                marginTop: 5,
                marginLeft: 10,
                fontWeight: "bold",
              }}
            >
              Tread Mills
            </Text>
          </View>
          <View
            onTouchEndCapture={() => setCat("cycle")}
            style={styles.filterDiv}
          >
           <View style={cat == "cycle" ? styles.activeImage : styles.activeImage}>
           <Avatar
              size={62}
              rounded
              source={{
                uri: "https://p.rmjo.in/productSquare/5319tgr7-500x500.jpg",
              }}
            />
           </View>
            <Text style={{ fontSize: 10, marginTop: 5, fontWeight: "bold" }}>
              Exercise Cycle
            </Text>
          </View>
          <View
            onTouchEndCapture={() => setCat("massager")}
            style={styles.filterDiv}
          >
           <View style={cat == "massager" ? styles.activeImage : styles.activeImage}>
           <Avatar
              size={62}
              rounded
              source={{
                uri: "https://p.rmjo.in/productSquare/niqfc8xs-500x500.jpg",
              }}
            />
           </View>
            <Text
              style={{
                fontSize: 10,
                marginLeft: 10,
                marginTop: 5,
                fontWeight: "bold",
              }}
            >
              Massagers
            </Text>
          </View>
        </View>
      ),
    });
  }, [navigation]);

  return (
    <ScrollView>{data && data.map((el) => <ProductCard key={el.id} {...el} />)}</ScrollView>
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
