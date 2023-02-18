import { Toast } from "react-native-toast-message/lib/src/Toast";

const alert = (text1,text2) => {
    Toast.show({
      type: "error",
      text1: text1,
      text2: text2,
      position: "top",
      topOffset: 100,
    });
  };
  alert()


  module.exports={alert}