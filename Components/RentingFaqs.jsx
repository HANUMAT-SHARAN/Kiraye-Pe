import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'

const RentingFaqs = () => {
    let arr = [{ img: "https://www.rentomojo.com/public/images/product/app-benefits/icons/furniture/2.png", text: `Quality matters to you That's why our team does a thorough quality-check for every product,` },
    { img: "https://www.rentomojo.com/public/images/product/app-benefits/icons/common/relocation.png", text: "Changing your house or even your city? We'll relocate your rentals for free " }, {
        img: `https://www.rentomojo.com/public/images/product/app-benefits/icons/common/1.png`, text: "We offer maintenance for your product after 12 months and annual cleaning—free of cost",
    }, { img: "https://www.rentomojo.com/public/images/product/app-benefits/icons/furniture/5.png", text: "Bored of the same product and style? Just upgrade after 12 months" }]
    return (
        <View style={styles.MainDiv}>

            <FlatList data={arr} renderItem={({ item }) => <View>
                <Image style={styles.Img} source={{ uri: item.img }} />
                <Text style={styles.text}>{item.text}</Text>
            </View>}
                numColumns={1} />

        </View>
    )
}

export default RentingFaqs

const styles = StyleSheet.create({
    MainDiv: { padding: 10, backgroundColor: "white" },
    Img: {
        width: 100,
        height: 100,
        marginLeft: "auto", marginRight: "auto",
    },
    text: {
        marginTop: 5,
        width: "60%", marginLeft: "auto", marginRight: "auto", color: "#808080"
    }
})