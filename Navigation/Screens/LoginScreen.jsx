import { Alert, StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import My from "./My";
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from "react-native-vector-icons/Ionicons";

import { Avatar } from "@rneui/base";
import { Button, Input, Modal, Card, Icon } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { useDispatch, useSelector } from "react-redux";
import { increaseCount, setLoginedUser } from "../../Redux/auth/authAction";

const LoginScreen = ({ navigation }) => {
     const dispatch = useDispatch();
  const { count } = useSelector((store) => store.authManager);
  const [visible, setVisible] = React.useState(false);
  const [secure, setSecure] = React.useState(true);
  const [allUsers, setAllUsersData] = React.useState([]);
  const [userData, setUserData] = React.useState({

    email: "",
    password: "",
  });

  const showSuccess = () => {
    Toast.show({
      type: "success",
      text1: "Logined Successfully",
      text2: "Hurray Please Login Now👋",
      position: "top",
      topOffset: 100,
      onShow: () => console.log("Hello"),
    });
  };
  const showError = () => {
    Toast.show({
      type: "error",
      text1: "Wrong Credentials",
      text2: "Try Again With New Password",
      position: "top",
      topOffset: 100,
      onShow: () => console.log("Hello"),
    });
  };

  const verifyUser =  () => {
 
    for (let i = 0; i <= allUsers.length - 1; i++) {
        if ( allUsers[i].email === userData.email && allUsers[i].password === userData.password ) {
          showSuccess();
          setUserData({email:'',password:""})
          console.log(allUsers[i])
          dispatch(setLoginedUser(allUsers[i]))
          navigation.navigate("Home")
          return 
         
        }
      }
      showError()
      setUserData({email:'',password:""})
      return
  
  };

  const getdata = async () => {
    try {
      let data = await fetch(
        `https://rento-mojo-native-server.vercel.app/users`
      );
      let res = await data.json();
      setAllUsersData(res);
      console.log(res)
    } catch (error) {
      console.log("error ", error);
    }
  };

  React.useEffect(()=>{
    getdata();
  },[])
 

  return (
    <>
      <ScrollView style={{ backgroundColor: "#5854e8" }}>
      
        <Image
          style={{
            borderTopLeftRadius: 20,
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
            borderTopRightRadius: 20,
            marginLeft: "auto",
            marginRight: "auto",
            width: "40%",
            height: 150,
          }}
          source={{
            uri: `https://rent-do-maja-lo-hanumat-sharan.vercel.app/static/media/logo.98b776bd74238f75eee1.jpg`,
          }}
        />

        <ScrollView style={styles.Maindiv}>
          <Text style={styles.mainText}>Login Now </Text>
          <View>
            <Text style={[styles.text, styles.common]}>Email id</Text>
            <Input
              onChangeText={(text) => setUserData({ ...userData, email: text })}
              name="email"
              size="large"
              style={[styles.common, styles.inputStyle]}
              placeholder="Email"
              status="success"
              value={userData.email}
            />
            <Text style={[styles.text, styles.common]}>Password </Text>
            <Input
              onChangeText={(text) =>
                setUserData({ ...userData, password: text })
              }
              value={userData.password}
              name="password"
              size="large"
              style={[styles.common, styles.inputStyle]}
              placeholder="Password"
              secureTextEntry={secure}
              accessoryRight={
                <View onTouchEndCapture={() => setSecure(!secure)}>
                  <Ionicons name={secure ? "eye-off" : "eye"} size={23} />
                </View>
              }
              status="success"
            />

            <Button
              onPress={()=>verifyUser()}
             
              size="large"
              style={[styles.common,styles.button]}
             
            >
              Login 
            </Button>
            <Text style={[styles.loginText]}>
              New User Create a new Account?{" "}
            </Text>
            <Button
              onPress={() => navigation.navigate("Signup")}
              size="large"
              style={[styles.common,styles.button]}
             
            >
              Singup Now
            </Button>
          </View>
        </ScrollView>
      
      </ScrollView>
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  Maindiv: {
    width: "85%",
    textAlign: "center",
   padding:15,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 10,
    backgroundColor: "white",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 50,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 50,
    marginBottom: 30,
  },
  common: {
    marginLeft: "auto",
    marginRight: "auto",
    width: "90%",
    marginTop: 10,
  },
  button: {
    backgroundColor: "#5854e8",
    color: "white",

    marginTop: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  text: {
    marginLeft: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  inputStyle: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    fontSize: 25,
  },
  mainText: {
    marginLeft: "auto",
    marginRight: "auto",
   
    marginTop: 10,
    fontSize: 30,
    fontWeight: "bold",
    backgroundColor: "#5854e8",
    color: "white",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 10,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
  },
  loginText: {
    color: "red",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 10,
    fontSize: 15,
    fontWeight:"bold"
  },button: {
  
    color: "white",

    marginTop: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
});
