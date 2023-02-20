import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const CheckoutScreen = () => {
    const { totalPrice } =
        useSelector((store) => store.authManager);
    const navigation = useNavigation()
    return (
        <ScrollView>
            <Text style={styles.catText}>CheckoutScreen {totalPrice}</Text>


            <View onTouchEndCapture={() =>
                navigation.navigate("Furniture", { category: "bedroom" })
            } style={[styles.categoryDiv, styles.activeImage]}>
                <Image
                    style={styles.categoryImg}
                    source={{
                        uri: `https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Paytm_logo.jpg/800px-Paytm_logo.jpg?20170209143820`,
                    }}
                />
                <Text style={styles.catText}>Bedroom</Text>

            </View>


            <View onTouchEndCapture={() =>
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



            <View onTouchEndCapture={() =>
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
           

                <View onTouchEndCapture={() =>
                    navigation.navigate("Furniture", { category: "bedroom" })
                } style={[styles.categoryDiv, styles.activeImage]}>
                    <Image
                        style={styles.categoryImg}
                        source={{
                            uri: `https://w7.pngwing.com/pngs/865/967/png-transparent-paytm-computer-icons-e-commerce-cashback-website-service-paytm-text-service-logo-thumbnail.png`,
                        }}
                    />
                    <Text style={styles.catText}>Bedroom</Text>
                </View>
          

        </ScrollView>
    )
}

export default CheckoutScreen

const styles = StyleSheet.create({
    catText: {
        fontSize: 20,
        margin: 20,
        fontWeight: "bold",
        marginLeft: "auto", marginRight: "auto",
        color: "black"
    },
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
        padding: 10,
        backgroundColor: "white", borderBottomLeftRadius: 20,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 5,
    },
    categoryImg: {
        width: 100,
        height: 40,
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
})