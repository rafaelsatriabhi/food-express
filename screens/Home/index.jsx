import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  useSelector,
} from 'react-redux'
import HomeDefault from './HomeDefault';
import Profile from '../Profile';
import Cart from '../Cart';
import Chat from '../Favorites';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import MediumText from '../../components/texts/MediumText';


const HomeScreen = ({ navigation }) => {
  const Tab = createBottomTabNavigator();
  const cart = useSelector(state => state.cart.value)
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-end',
          paddingTop: 0,
          paddingBottom: 0,
          paddingHorizontal: 20,
          bottom: 20,
          right: 20,
          left: 20,
          borderRadius: 20,
        },
        tabBarItemStyle: {
          display: 'flex',
          width: 55,
          height: 44,
        },
        tabBarIcon: (({ focused }) => {
          return (
            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}>
              {
                focused
                  ? (
                    <View style={styles.boxIconStyleFocused}>
                      {
                        route.name === 'Home'
                        && (
                          <Image style={styles.iconStyleFocused} resizeMode="contain" source={require('../../assets/icons/home.png')} />
                        )
                      }
                      {
                        route.name === 'Profile'
                        && (
                          <Image style={styles.iconStyleFocused} resizeMode="contain" source={require('../../assets/icons/profile.png')} />
                        )
                      }
                      {
                        route.name === 'Cart'
                        && (
                          <View style={{
                            position: 'relative'
                          }}>
                            <View style={{
                              position: 'absolute',
                              flex: 1,
                              justifyContent: 'center',
                              alignItems: 'center',
                              right: -0,
                              top: -4,
                              backgroundColor: 'red',
                              width: 20,
                              height: 20,
                              borderRadius: 30,
                            }}>
                              <Text style={{
                                color: 'white',
                              }}>
                                {cart.length}
                              </Text>
                            </View>
                            <View>
                              <Image style={styles.iconStyleFocused} resizeMode="contain" source={require('../../assets/icons/cart.png')} />
                            </View>
                          </View>
                        )
                      }
                      {
                        route.name === 'Chat'
                        && (
                          <Image style={styles.iconStyleFocused} resizeMode="contain" source={require('../../assets/icons/chat.png')} />
                        )
                      }
                      <MediumText>{route.name}</MediumText>
                    </View>
                  )
                  : (
                    <View style={styles.boxIconStyle}>
                      {
                        route.name === 'Home'
                        && (
                          <Image style={styles.iconStyle} resizeMode="contain" source={require('../../assets/icons/home.png')} />
                        )
                      }
                      {
                        route.name === 'Profile'
                        && (
                          <Image style={styles.iconStyle} resizeMode="contain" source={require('../../assets/icons/profile.png')} />
                        )
                      }
                      {
                        route.name === 'Cart'
                        && (
                          <View style={{
                            position: 'relative'
                          }}>
                            <View style={{
                              position: 'absolute',
                              flex: 1,
                              justifyContent: 'center',
                              alignItems: 'center',
                              right: -0,
                              top: -4,
                              backgroundColor: 'red',
                              width: 20,
                              height: 20,
                              borderRadius: 30,
                            }}>
                              <Text style={{
                                color: 'white',
                              }}>
                                {cart.length}
                              </Text>
                            </View>
                            <View>
                              <Image style={styles.iconStyleFocused} resizeMode="contain" source={require('../../assets/icons/cart.png')} />
                            </View>
                          </View>)
                      }
                      {
                        route.name === 'Chat'
                        && (
                          <Image style={styles.iconStyle} resizeMode="contain" source={require('../../assets/icons/chat.png')} />
                        )
                      }
                    </View>
                  )
              }
            </View>
          )
        })
      })}
    >
      <Tab.Screen name="Home" component={HomeDefault} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Chat" component={Chat} />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  screenStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconStyleFocused: {
    width: 24,
    height: 24,
    marginRight: 12,
  },
  iconStyle: {
    width: 24,
    height: 24,
  },
  boxIconStyleFocused: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'rgba(83, 232, 139, 0.25)',
    alignItems: 'center',
    paddingHorizontal: 17,
    borderRadius: 12,
  },
  boxIconStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 17,
    borderRadius: 12,
  },
})

export default HomeScreen
