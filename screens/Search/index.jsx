import React from 'react'
import {
    View,
    Text,
    StyleSheet,
} from 'react-native'

const Search = () => {
    return (
        <View style={styles.screenStyle}>
            <Text>This is Search!</Text>
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

export default Search
