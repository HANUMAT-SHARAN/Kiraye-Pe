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
import { increaseCount } from "../../Redux/auth/authAction";

const SignupScreen = ({ navigation }) => {
  const [visible, setVisible] = React.useState(false);
  const [secure, setSecure] = React.useState(true);
  const [userData, setUserData] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const showSuccess = () => {
    Toast.show({
      type: "success",
      text1: "Account Is Create Succesfully",
      text2: "Hurray Please Login Now👋",
      position: "top",
      topOffset: 100,
      onShow: () => console.log("Hello"),
    });
  };
  const showError = () => {
    Toast.show({
      type: "error",
      text1: "Password Is Too Short",
      text2: "Try Again With New Password",
      position: "top",
      topOffset: 100,
      onShow: () => console.log("Hello"),
    });
  };

  const handleChange = async () => {
    if (userData.password.length < 8) {
      showError();
      setUserData({
        name: "",
        email: "",
        password: "",
      });
      return;
    }
    try {
      let data = await fetch(
        `https://rento-mojo-native-server.vercel.app/users`,
        {
          method: "POST",
          body: JSON.stringify(userData),
          headers: { "Content-Type": "application/json" },
        }
      );
    } catch (error) {
      console.log("error ", error);
    }
    showSuccess();
    setUserData({
      name: "",
      email: "",
      password: "",
    });
  };
  const dispatch = useDispatch();
  const { count } = useSelector((store) => store.authManager);

  return (
    <>
      <ScrollView style={{ backgroundColor: "#a000ff" }}>
        <Text style={styles.text}>{count}</Text>
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
          <Text style={styles.mainText}>Sign Up</Text>
          <View>
            <Text style={[styles.text, styles.common]}>User Name</Text>
            <Input
              onChangeText={(text) => setUserData({ ...userData, name: text })}
              name="name"
              size="large"
              style={[styles.common, styles.inputStyle]}
              placeholder="User Name"
              status="success"
              value={userData.name}
            />
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
              onPress={handleChange}
              appearance="outline"
              size="large"
              style={[styles.common, styles.button]}
              status="control"
            >
              Sign Up
            </Button>
            <Text style={[styles.loginText]}>Already a User? </Text>
            <Button
              onPress={() => console.log("Chimkandi")}
              size="large"
              style={[styles.common]}
              status="success"
            >
              Login now
            </Button>
          </View>
        </ScrollView>
        <Button onPress={() => dispatch(increaseCount(count + 1))}>
          Inc Count
        </Button>
        <Button onPress={() => dispatch(increaseCount(count - 1))}>
          Dec Count
        </Button>
      </ScrollView>
    </>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  Maindiv: {
    width: "85%",
    textAlign: "center",
    height: 550,
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
    backgroundColor: "#a000ff",
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
    width: "60%",
    marginTop: 10,
    fontSize: 40,
    fontWeight: "bold",
    backgroundColor: "#a000ff",
    color: "white",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 10,
    padding: 15,
    paddingLeft: 30,
    paddingRight: 30,
  },
  loginText: {
    color: "blue",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 10,
    fontSize: 17,
  },
});
