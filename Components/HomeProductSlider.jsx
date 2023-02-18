import { StyleSheet, Text, View,FlatList,Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const HomeProductSlider = () => {
    const navigation=useNavigation()
    let data=[{
        "img": "https://p.rmjo.in/productSquare/yhx594uv-500x500.jpg",
        "title": "Samsung Galaxy S10+ ",
        "price": 1659,
        "category": "smartphone",
        "id": 1,
        "delivery": "4 days",
        "deliveryicon": "https://www.rentomojo.com/public/images/fast-delivery/fast-delivery.svg"
      },{
        "img": "https://p.rmjo.in/productSquare/ujzfusgx-500x500.jpg",
        "title": "MacBook Pro i7 - Powered by MF",
        "price": 12373,
        "category": "laptop",
        "id": 9,
        "delivery": "5 days",
        "deliveryicon": "https://www.rentomojo.com/public/images/fast-delivery/fast-delivery.svg"
      },{
        "img": "https://p.rmjo.in/productSquare/b8g0ufr1-500x500.jpg",
        "title": "Motorized Treadmill AF-515",
        "price": 2359,
        "category": "treadmill",
        "id": 28,
        "delivery": "4 days",
        "deliveryicon": "https://www.rentomojo.com/public/images/fast-delivery/fast-delivery.svg"
      }, {
        "img": "https://p.rmjo.in/productSquare/5319tgr7-500x500.jpg",
        "title": "Exercise Cycle AB-100",
        "price": 409,
        "category": "cycle",
        "id": 31,
        "delivery": "",
        "deliveryicon": ""
      },  {
        "img": "https://p.rmjo.in/productSquare/esf6ag3q-500x500.jpg",
        "title": "Morris Office Chair",
        "category": "wfm",
        "id": 37,
        "price": 219,
        "delivery": "4 days",
        "deliveryicon": "https://www.rentomojo.com/public/images/fast-delivery/fast-delivery.svg"
      },{
        "img": "https://p.rmjo.in/productSquare/jic4j4hh-500x500.jpg",
        "title": "Napster Metal Queen Bed (6x5)",
        "price": 359,
        "category": "bedroom",
        "id": 68,
        "delivery": "4 days",
        "deliveryicon": "https://www.rentomojo.com/public/images/fast-delivery/fast-delivery.svg"
      },  {
        "img": "https://p.rmjo.in/productSquare/ojeg5074-500x500.jpg",
        "title": "Apple IPad",
        "price": 2499,
        "category": "tablets",
        "id": 21,
        "delivery": "",
        "deliveryicon": ""
      },]
  return (
   <>
  
   <FlatList data={data} horizontal renderItem={({item})=> <View 
   onTouchEndCapture={()=>navigation.navigate("SingleProduct",{id:item.id})} style={styles.sliderDiv}>
    <Image style={styles.img} source={{uri:item.img}} />
    <Text style={styles.catText}>{item.title}</Text>
    <Text style={styles.rentText}>Rent</Text>
    <Text style={styles.priceText}> ₹{item.price} / mon </Text>
    </View>} />
   </>
  )
}

export default HomeProductSlider

const styles = StyleSheet.create({
    sliderDiv:{
        backgroundColor:"white",
        padding:10,borderBottomLeftRadius:10,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        borderBottomRightRadius:10,

    },
    img:{
        width:150,
        height:150,
        borderBottomLeftRadius:10,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        borderBottomRightRadius:10,
    },
      catText: {
        width:150,
        fontSize: 13,
        marginTop: 10,
        fontWeight: "bold",
      },
      rentText:{
        fontSize: 10,
        marginTop: 5,
        fontWeight: "bold",
        color:"grey"
      },
    
      priceText:{
        fontSize: 13,
        marginTop: 5,
        fontWeight: "bold",
      }
})