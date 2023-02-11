import { Alert, StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import My from "./My";
import { createStackNavigator } from "@react-navigation/stack";
import { Avatar } from "@rneui/base";
import { Button, Input,Modal,Card } from "@ui-kitten/components";

const Stack = createNativeStackNavigator();
const S=createStackNavigator()
const SignupScreen = () => {
  const [visible, setVisible] = React.useState(false);
  return (
 
<>
<View>

<Modal visible={visible}>
        <Card disabled={true}>
          <Text>Welcome to rento Mojo Bro</Text>
          <Button onPress={() => setVisible(false)}>
            DISMISS
          </Button>
        </Card>
      </Modal>

    <Card style={styles.card} status='primary'>
      <Text>Primary</Text>
    </Card>
 <Input placeholder="Success" status='success'/>

<Button onPress={() => setVisible(true)}>
        TOGGLE MODAL
      </Button>

  
</View>
</>
    
  );
};

export default SignupScreen;

const styles = StyleSheet.create({});
