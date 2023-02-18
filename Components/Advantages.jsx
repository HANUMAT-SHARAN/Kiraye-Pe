import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import { Button } from '@ui-kitten/components'

const Advantages = () => {
    let arr = [{ img: "https://www.rentomojo.com/public/images/product/app-benefits/icons/furniture/2.png", text: `Quality check for every product,` },
    { img: "https://www.rentomojo.com/public/images/product/app-benefits/icons/common/relocation.png", text: "Relocated For free when you move  " }, {
        img: `https://www.rentomojo.com/public/images/product/app-benefits/icons/common/1.png`, text: "Furniture as Good As New",
    }, { img: "https://www.rentomojo.com/public/images/product/app-benefits/icons/furniture/5.png", text: "Easy Returs No questions asked" }]
    return (
        <View style={styles.MainDiv}>

            <FlatList horizontal data={arr} renderItem={({ item }) => <View>
                <Image style={styles.Img} source={{ uri: item.img }} />
                <Text style={styles.text}>{item.text}</Text>
                <Text style={styles.btn}>Read More</Text>
            </View>}
                 />

        </View>
    )
}

export default Advantages

const styles = StyleSheet.create({
    MainDiv: {margin:5, backgroundColor: "white",
    height: 150, },
    Img: {
        width: 70,
        height: 70,
       
    },
    text: {
        marginTop: 5,
        width: "60%", color: "black",fontWeight:"bold",fontSize:13,
    },
    btn:{
        marginTop: 5,
        width:100,
        width: "60%", color: "black",fontWeight:"bold",fontSize:12,color:"blue"
    }
})