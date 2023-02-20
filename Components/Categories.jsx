import { View, Text, Image } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Categories = () => {
    const navigation=useNavigation()
  return (
    <View>
      <View style={styles.catParent}>
        <View 
          onTouchEndCapture={() =>
            navigation.navigate("Electronics", { category: "laptops" })
          }
          style={[styles.categoryDiv,styles.activeImage]}
        >
          <Image
            style={styles.categoryImg}
            source={{
              uri: `https://cdn3.iconfinder.com/data/icons/smart-phone-flat/58/Smart_Phones_-_Flat_-_019_-_Notifications-512.png`,
            }}
          />
          <Text style={styles.catText}>Electronics</Text>
        </View>
        <View   onTouchEndCapture={() =>
            navigation.navigate("Furniture", { category: "bedroom" })
          } style={[styles.categoryDiv, styles.activeImage]}>
          <Image
            style={styles.categoryImg}
            source={{
              uri: `https://cdn0.iconfinder.com/data/icons/interior-design-flat/340/bedroom_room_interior_home_bed_furniture_lamp_house_pillows-256.png`,
            }}
          />
          <Text style={styles.catText}>Bedroom</Text>
        </View>
      </View>
      <View style={styles.catParent}>
        <View onTouchEndCapture={() =>
            navigation.navigate("Fitness", { category: "treadmill" })
          }  style={[styles.categoryDiv, styles.activeImage]}>
          <Image
            style={styles.categoryImg}
            source={{
              uri: `https://cdn1.iconfinder.com/data/icons/recreation-and-hobbies-2/100/28-256.png`,
            }}
          />
          <Text style={styles.catText}>Fitness</Text>
        </View>
        <View onTouchEndCapture={() =>
            navigation.navigate("WorkfromHome", { category: "wfm" })
          } style={[styles.categoryDiv, styles.activeImage]}>
          <Image
            style={styles.categoryImg}
            source={{
              uri: `https://cdn1.iconfinder.com/data/icons/back-to-school-illustrathin/128/study-desk-learning-table-256.png`,
            }}
          />
          <Text style={styles.catText}>WFM</Text>
        </View>
      </View>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 320,
    elevation: 2,
    margin: 20,
  },
  parentDiv: {
    display: "grid",
  },

  categoryDiv: {
    alignItems: "center",
    margin: 20,
    width: "40%",
    elevation: 0,
    padding:10,
    backgroundColor:"white",borderBottomLeftRadius:20,
    borderTopLeftRadius:5,
    borderTopRightRadius:20,
    borderBottomRightRadius:5,
  },
  categoryImg: {
    width: 40,
    height: 40,
  },
  catText: {
    fontSize: 15,
    marginTop: 10,
    fontWeight: "bold",
  },
  shadowProp: {
    shadowOffset: { width: -2, height: 4 },
    shadowColor: "#171717",
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  elevation: {
    elevation: 20,
    shadowColor: "#52006A",
  },
  catParent: {
    display: "flex",
    flexDirection: "row",
  },
  activeImage: {
    borderColor: "#5854e8",
    borderStyle: "solid",
    borderWidth: 4,
    borderRadius: 20,
  },
});
