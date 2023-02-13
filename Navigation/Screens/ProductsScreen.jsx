import { Image, ScrollView, StyleSheet, Text } from 'react-native'
import React from 'react'
import ProductCard from '../../Components/ProductCard'

const ProductsScreen = () => {
  
    const [data,setData]=React.useState([])
    const getData=async()=>{
        try {
            let data=await fetch(`https://rento-mojo-native-server.vercel.app/electronics`)
            let res=await data.json()
          
            setData(res)
        } catch (error) {
            
        }
    }

    React.useEffect(()=>{
        getData()
    },[])
  return (
    <ScrollView>
      <Text>ProductsScreen</Text>
    
      {data.map((el)=><ProductCard key={el.id} {...el} />)}
    </ScrollView>
  )
}

const Product=StyleSheet.create({
    image:{
        width:300,
        height:300
    }
})

export default ProductsScreen