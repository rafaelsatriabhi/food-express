import React from 'react'
import {
  Text,
  StyleSheet,
} from 'react-native'


const DefaultText = ({ children, style }) => {
  return (
    <Text style={{
      ...style,
      ...styles.regularText,
    }}>
      {children}
    </Text>
  )
}

const styles = StyleSheet.create({
  defaultText: {
    fontFamily: 'benton-regular'
  },
  mediumText: {
    fontFamily: 'benton-medium'
  },
  boldText: {
    fontFamily: 'benton-bold',
  },
})

export default DefaultText
