import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import ProductCard from '../../Components/ProductCard';

const RecentlyWatched = () => {
  const { count, currentUser, isAuth, recentlyWatched } = useSelector(
    (store) => store.authManager
  );
  return (
    <ScrollView>
      {recentlyWatched.map((el) => <ProductCard key={el.id + Math.random()} {...el} />)}
    </ScrollView>
  )
}

export default RecentlyWatched

const styles = StyleSheet.create({})