import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Input } from "@rneui/themed";
import { SearchBarAndroid } from "@rneui/base/dist/SearchBar/SearchBar-android";
import ProductCard from "../../Components/ProductCard";
import Categories from "../../Components/Categories";

const SearchScreen = () => {
  const [search, setSearch] = React.useState("   f");

  const [data, setData] = React.useState();
  const getData = async () => {
    console.log(search);
    let data = await fetch(
      `https://rento-mojo-native-server.vercel.app/electronics?q=${search}`
    );
    let res = await data.json();
    setData(res);
  };

  const updateSearch = (search) => {
    setSearch(search);
  };

  React.useEffect(() => {
    const id = setTimeout(() => {
      getData();
    }, 1500);

    return () => {
      clearTimeout(id);
    };
  }, [search]);
  return (
    <>
      <View style={styles.seachInput}>
        <SearchBarAndroid
          placeholder="Search for any product"
          onChangeText={updateSearch}
        />
      </View>
      <ScrollView>
        {data && data.map((el) => <ProductCard key={el.id} {...el} />)}
        <Categories />
      </ScrollView>
    </>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  seachInput: {
    marginTop: 10, borderWidth: 4,
    borderRadius: 20, width: "95%", padding: 5,
    marginRight: "auto", marginLeft: "auto", borderColor: '#5854e8',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 10,
  }
});
