import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native'
import { signIn, signOut } from '../../src/features/signInOut'

const Profile = () => {

  const dispatch = useDispatch()
  const isLoggedIn = useSelector(state => state.isLoggedIn.status)

  return (
    <View style={styles.screenStyle}>
      {
        isLoggedIn
          ? (
            <Text>user is logged-in</Text>

          )
          : (
            <Text>user is logged-out</Text>
          )
      }
      {
        isLoggedIn
          ? (
            <Button title="Sign-out" onPress={() => dispatch(signOut())} />
          )
          : (
            <Button title="Sign-in" onPress={() => dispatch(signIn())} />
          )
      }
    </View>
  )
}

const styles = StyleSheet.create({
  screenStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Profile
