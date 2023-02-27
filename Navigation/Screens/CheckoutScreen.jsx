import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Spinner } from '@ui-kitten/components';

const CheckoutScreen = () => {
    const [tick, showtick] = React.useState(false)
    const { totalPrice } =
        useSelector((store) => store.authManager);
    const navigation = useNavigation()
    const setTickVisible = () => {
        showtick(true)
        setTimeout(() => {
            navigation.navigate("Home")
        }, 2000)

    }
    if (tick) {
        return <View
            style={styles.activeImage}>
            <Image
                style={{
                    width: 300,
                    height: 300,
                }}
                source={{
                    uri: `https://i.postimg.cc/SsLCRgZk/tick.png`,
                }}
            />
            <Text style={styles.catText}>Payment Done !😁</Text>
            <Text style={{ marginRight: "auto", marginLeft: "auto", fontSize: 15, fontWeight: "bold", color: "#4d4c4d" }}>Redirecting Back To The Home Page ... </Text>
            <Text style={{ marginRight: "auto", marginLeft: "auto", fontSize: 17, fontWeight: "bold", marginTop: 20 }}> <Spinner size='large' status='success' /></Text>
        </View>
    }
    return (
        <ScrollView>
            <Text style={styles.totalPriceDiv}>Total Amount to Pay ₹ {totalPrice} </Text>


            <View style={styles.parentDiv
            }>
                <View onTouchEndCapture={() =>
                    setTickVisible()
                } style={[styles.activeImage]}>
                    <Image
                        style={styles.categoryImg}
                        source={{
                            uri: `https://cdn2.iconfinder.com/data/icons/social-icons-color/512/paytm-512.png`,
                        }}
                    />
                    <Text style={styles.catText}>Paytm</Text>

                </View>


                <View onTouchEndCapture={() =>
                    setTickVisible()
                } style={[styles.activeImage]}>
                    <Image
                        style={styles.categoryImg}
                        source={{
                            uri: `https://telecomtalk.info/wp-content/uploads/2022/12/gpay-how-to-create-or-find-upi.jpg`,
                        }}
                    />
                    <Text style={styles.catText}>Google Pay</Text>
                </View>
            </View>


            <View style={styles.parentDiv}>
                <View onTouchEndCapture={() =>
                    setTickVisible()
                } style={[styles.activeImage]}>
                    <Image
                        style={styles.categoryImg}
                        source={{
                            uri: `https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/phonepe-logo-icon.png`,
                        }}
                    />
                    <Text style={styles.catText}>Phone Pe</Text>

                </View>


                <View onTouchEndCapture={() =>
                    setTickVisible()
                } style={[styles.activeImage]}>
                    <Image
                        style={styles.categoryImg}
                        source={{
                            uri: `https://cdn4.iconfinder.com/data/icons/circle-payment/32/payment_006-amazon-512.png`,
                        }}
                    />
                    <Text style={styles.catText}>Amazon Pay</Text>
                </View>

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


    categoryImg: {
        width: 80,
        height: 80,
        marginLeft: "auto",
        marginRight: "auto",
    },
    parentDiv: {
        display: "flex", flexDirection: "row"
    },

    activeImage: {
        borderColor: "#5854e8",
        borderStyle: "solid",
        borderWidth: 4,
        borderRadius: 20,
        backgroundColor: "white",
        marginLeft: "auto",
        marginRight: "auto",
        padding: 30, margin: 6,
        backgroundColor: "white",
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 5,
    },
    tickImg: {
        width: 300,
        height: 300,
    }, totalPriceDiv:
    {
        marginRight: "auto",
        marginLeft: "auto", fontSize: 20,
        fontWeight: "bold", color: "white",
        margin: 20, backgroundColor: "#303131", padding: 20,
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 5,
    }
})