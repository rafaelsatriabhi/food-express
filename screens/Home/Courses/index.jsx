import React from 'react'
import {
    View,
    Text,
    Button,
    StyleSheet,
} from 'react-native'

const Courses = ({
    navigation
}) => {
    return (
        <View style={styles.screenStyle}>
            <Text>This is Courses!</Text>
            <Button title="Dismiss" onPress={() => navigation.goBack()} />
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

export default Courses
