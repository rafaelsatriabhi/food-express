import React from 'react'
import {
    Text,
    StyleSheet,
} from 'react-native'


const MediumText = ({ children, style }) => {
    return (
        <Text style={{
            ...style,
            ...styles.mediumText,
        }}>
            {children}
        </Text>
    )
}

const styles = StyleSheet.create({
    mediumText: {
        fontFamily: 'benton-medium'
    },
})

export default MediumText
