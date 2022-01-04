import React from 'react'
import {
    View,
    Text,
    StyleSheet,
} from 'react-native'

const Chat = () => {
    return (
        <View style={styles.screenStyle}>
            <Text>This is Chat!</Text>
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

export default Chat
