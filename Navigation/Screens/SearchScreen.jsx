import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Input } from '@rneui/themed'
import { SearchBarAndroid } from '@rneui/base/dist/SearchBar/SearchBar-android'
import ProductCard from '../../Components/ProductCard'
import Categories from '../../Components/Categories'

const SearchScreen = () => {
    const [search, setSearch] = React.useState("");

    const [data,setData]=React.useState()
    const getData=async()=>{
        let data=await fetch(`https://rento-mojo-native-server.vercel.app/electronics?q=${search}`)
        let res=await data.json()
       setData(res)

    }

const updateSearch = (search) => {
  setSearch(search);
  getData()
};
  return (
    <ScrollView>
      <Text>SearchScreen</Text>
      <SearchBarAndroid  placeholder="Type Here..." loading  onChangeText={updateSearch}
      value={search} />
        {data&&data.map((el)=><ProductCard key={el.id} {...el} />)}
        <Categories/>
    </ScrollView>
  )
}

export default SearchScreen

const styles = StyleSheet.create({})