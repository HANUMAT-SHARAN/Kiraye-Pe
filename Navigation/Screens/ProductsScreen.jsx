import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,RefreshControl,
  View,
} from "react-native";
import React from "react";
import ProductCard from "../../Components/ProductCard";
import ProductsSmall from "../../Components/ProductsSmall";
import { Button, Spinner } from "@ui-kitten/components";

import FlatListProducts from "../../Components/FlatListProducts";

const ProductsScreen = () => {
  const [data, setData] = React.useState([]);
  const [Fitness, setFitnessData] = React.useState([]);
  const [Bedroom, setBedRoomData] = React.useState([]);
  const [wfmdata,setwfmData]= React.useState([]);
  const [refresh,setRefresh]=React.useState(false)
  const [load,setLoad]=React.useState(false)



  const onRefresh=()=>{
    setRefresh(true)
    getData()
        setTimeout(()=>{
      setRefresh(false)
    },2000)
  }
  const getData = async () => {
    setLoad(true)
    try {
      let data = await fetch(
        `https://rento-mojo-native-server.vercel.app/electronics?category=laptop&_limit=5`
      );
       let datafitness = await fetch(
        `https://rento-mojo-native-server.vercel.app/electronics?category=cycle&_limit=5`
      );
      let dataBedroom = await fetch(
        `https://rento-mojo-native-server.vercel.app/electronics?category=bedroom&_limit=5`
      );
      let datawfm = await fetch(
        `https://rento-mojo-native-server.vercel.app/electronics?category=wfm&_limit=5`
      );
      let res = await data.json();
      let resDataFitness=await datafitness.json()
      let resDataBedrroom=await dataBedroom.json()
      let resWfm=await datawfm.json()

      setData(res);
      setFitnessData(resDataFitness)
      setBedRoomData(resDataBedrroom)
      setwfmData(resWfm)

    } catch (error) {}
    setLoad(false)
  };

  React.useEffect(() => {
    getData();
  }, []);
  return (
    <ScrollView refreshControl={<RefreshControl refreshing={refresh} onRefresh={onRefresh} />}>
      
     {load?<View style={{marginRight:"auto",marginLeft:"auto"}} ><Spinner size="giant"  status='danger'/></View>: <FlatListProducts redirectto={"Electronics"} titleText={"Laptop"} data={data} />}
     {load?<View style={{marginRight:"auto",marginLeft:"auto",marginTop:100}} ><Spinner size="giant"  status='danger'/></View>: <FlatListProducts redirectto={"Fitness"} titleText={"Fitness"} data={Fitness} />}
      {load?<View style={{marginRight:"auto",marginLeft:"auto",marginTop:100}} ><Spinner size="giant"  status='danger'/></View>:<FlatListProducts redirectto={"Furniture"} titleText={"Bedroom"} data={Bedroom} />}
     { load?<View style={{marginRight:"auto",marginLeft:"auto",marginTop:100}} ><Spinner size="giant"  status='danger'/></View>:<FlatListProducts redirectto={"WorkfromHome"} titleText={"Work From Home"} data={wfmdata} />}
   
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
  },
  
});

export default ProductsScreen;
