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
        <View >

            <FlatList showsHorizontalScrollIndicator={false} horizontal data={arr} renderItem={({ item }) => <View style={styles.MainDiv}>
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
    MainDiv: {
        width: 159,
        margin: 10, backgroundColor: "white",

        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 5,
        padding: 5,
        borderWidth: 1,
        borderColor: `#c6c9cb`,
    },
    Img: {
        width: 70,
        height: 70,
        borderTopLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderTopRightRadius: 20,
        marginLeft: "auto",
        marginRight: "auto",
        padding: 10,

    },
    text: {
        marginTop: 5,
        color: "black", fontWeight: "bold", fontSize: 13, borderTopLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderTopRightRadius: 20,
        marginLeft: 20,
        marginRight: "auto", width: "90%",
    },
    btn: {
        marginTop: 5,
        width: 100,
        color: "black", fontWeight: "bold", fontSize: 12, color: "blue", borderTopLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderTopRightRadius: 20,
        marginLeft: 20,
        marginRight: "auto",
    }
})