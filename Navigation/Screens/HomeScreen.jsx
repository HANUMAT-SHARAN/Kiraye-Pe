import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import Categories from "../../Components/Categories";
import Filter from "../../Components/Filter";
import RentingFaqs from "../../Components/RentingFaqs";
import HomeProductSlider from "../../Components/HomeProductSlider";

const HomeScreen = ({ navigation, route }) => {
  let category = [
    {
      img: `https://cdn0.iconfinder.com/data/icons/interior-design-flat/340/bedroom_room_interior_home_bed_furniture_lamp_house_pillows-256.png`,
      id: 1,
      name: "Bedroom",
    },
    {
      img: `https://cdn3.iconfinder.com/data/icons/smart-phone-flat/58/Smart_Phones_-_Flat_-_019_-_Notifications-512.png`,
      id: 2,
      name: "Electronics",
    },
    {
      img: `https://cdn1.iconfinder.com/data/icons/recreation-and-hobbies-2/100/28-256.png`,
      id: 3,
      name: "Fitness",
    },
    {
      img: `https://cdn1.iconfinder.com/data/icons/back-to-school-illustrathin/128/study-desk-learning-table-256.png`,
      id: 4,
      name: "WFM",
    },
  ];
  let homeImages = [
    { img: `https://s.rmjo.in/Fitness-offer-banner-for-Web--2.jpg`, id: 1 },
    { img: `https://s.rmjo.in/Paytm-Bank-Desktop-banner-%20(1).jpg`, id: 2 },
  ];
  return (
    <ScrollView>
      <FlatList
        horizontal
        data={homeImages}
        renderItem={({ item }) => (
          <Image style={styles.image} source={{ uri: item.img }} />
        )}
      />
      <Categories />
      {/* <Filter/> */}
      <Text style={styles.catText}>There is  More To Renting !</Text>
      <RentingFaqs/>
      <Text style={styles.catText}>You Would Love to Get This at Home !</Text>
      <HomeProductSlider/>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 320,
    elevation: 20,
    margin: 20,
  },
  parentDiv: {
    display: "grid",
  },

  categoryDiv: {
    alignItems: "center",
    margin: 20,
    width: "40%",
    elevation: 4,
  },
  categoryImg: {
    width: 40,
    height: 40,
  },
  catText: {
    fontSize: 20,
    margin: 20,
    fontWeight: "bold",
    marginLeft: "auto", marginRight: "auto",
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
});
