import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../../src/features/cart';


const HomeDefault = ({ navigation }) => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.counter.value)

  const tempItem = {
    id: 1,
    name: "Nasi Goreng",
    type: "Main Course",

  }

  return (
    <SafeAreaView>
      <View style={styles.screenStyle}>
        <View style={styles.greetingsContainerStyle}>
          <Text style={styles.text}>Find Your Favorite Food</Text>
          <TouchableOpacity
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
              borderRadius: '15px',
              width: 45,
              height: 45,
            }}
            onPress={() => console.log('Hello')}
          >
            <Image style={{
              width: 19,
              height: 23,
            }} resizeMode='contain' source={require('../../../assets/icons/bell.png')} />
          </TouchableOpacity>
        </View>
        <View style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <TextInput
            placeholder='What do you want to order?'
            placeholderTextColor='rgba(218, 99, 23, 0.5)'
            style={{
              paddingLeft: 61,
              backgroundColor: 'rgba(249, 168, 77, 0.10)',
              borderRadius: '15',
              width: '80%',
              color: 'rgba(218, 99, 23, 1)',
              height: 50,
            }} />
          <Image
            style={{
              position: 'absolute',
              zIndex: 7,
              left: 18,
              width: 24,
              height: 24,
            }} resizeMode='contain' source={require('../../../assets/icons/search.png')} />
          <View
            style={{
              width: '15%',
              backgroundColor: 'rgba(249, 168, 77, 0.10)',
            }}>
            <Image style={{
              right: 0,
              height: 23,
            }} resizeMode='contain' source={require('../../../assets/icons/filter.png')} />
          </View>
        </View>
        <Button title="Add item to cart" onPress={() => dispatch(addItemToCart(tempItem))} />
        <Button title="Go to Search" onPress={() => navigation.navigate('SearchScreen')} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screenStyle: {
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  greetingsContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 19,
    alignItems: 'center',
  },
  searchIconStyle: {
  },
  text: {
    fontFamily: 'benton-bold',
    fontSize: 31,
    width: '75%',
  }
})

export default HomeDefault
