import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';


const DefaultHome = ({ navigation }) => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.counter.value)

  return (
    <SafeAreaView style={styles.screenStyle}>
      <Text style={styles.text}>Hello</Text>
      <Button title="Go to Search" onPress={() => navigation.navigate('SearchScreen')} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screenStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontFamily: 'benton-bold'
  }
})

export default DefaultHome
