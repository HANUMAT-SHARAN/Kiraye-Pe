import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { Dimensions } from 'react-native';
import React from "react";
import Categories from "../../Components/Categories";
import Filter from "../../Components/Filter";
import RentingFaqs from "../../Components/RentingFaqs";
import HomeProductSlider from "../../Components/HomeProductSlider";
import Advantages from "../../Components/Advantages";

const HomeScreen = ({ navigation, route }) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
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
    { img: `https://media.istockphoto.com/id/1192266899/photo/laughing-friends-having-fun-with-shopping-cart-isolated-on-blue.jpg?s=612x612&w=0&k=20&c=cctS306_2VtXCvSuDQm3vV8OIApEdmApUK35xaOVmOE=`, id: 5 },
    { img: `https://media.istockphoto.com/id/1193750118/photo/beautiful-asian-woman-carrying-colorful-bags-shopping-online-with-mobile-phone.jpg?s=612x612&w=0&k=20&c=j1SpSX7c3qzBrUT5f7HRoOfxQnPxZY_c6yb3AvXA5f8=`, id: 1 },
    { img: `https://media.istockphoto.com/id/1212062418/photo/handsome-man-with-laptop-and-credit-card-at-home-portrait.jpg?s=612x612&w=0&k=20&c=SNt2kwKv8xnnje-jKts2vQL22nXkkMW-G3KqUOnkJ2I=`, id: 2 },
    { img: `https://media.istockphoto.com/id/1169378197/photo/stylish-shopaholic-with-purchases.jpg?s=612x612&w=0&k=20&c=RGwdnF0wrWV8NNBawXAbzAHUe8sMBpLsEvIICLR9dM4=`, id: 3 },
  ];
  return (
    <ScrollView>
      <FlatList
        horizontal
        alwaysBounceHorizontal
        showsHorizontalScrollIndicator={false}
        data={homeImages}
        renderItem={({ item }) => (
          <Image style={styles.image} source={{ uri: item.img }} />
        )}
      />
      <Categories />
      {/* <Filter/> */}
      <Text style={styles.catText}>You would love to get this at Home !</Text>
      <HomeProductSlider />
      <Text style={styles.catText}>There is  more to renting !</Text>
      <Advantages />

    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 320,
    elevation: 20,
    margin: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 5,
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
    fontSize: 17,
    margin: 20,
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
});
