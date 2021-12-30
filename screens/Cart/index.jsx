import React from 'react'
import {
    View,
    Text,
    StyleSheet,
} from 'react-native'

const Cart = () => {
    return (
        <View style={styles.screenStyle}>
            <Text>This is Cart!</Text>
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

export default Cart
