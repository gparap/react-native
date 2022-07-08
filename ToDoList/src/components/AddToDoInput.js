/**
 * ToDo Input
 * Created by gparap (c) 2022
 */

import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'

const AddToDoInput = () => {
    return (
        <View style={styles.view}>
            <TextInput
                style={styles.textInput}
                placeholder="Enter your todo here..."
            />
        </View>
    )
}

export default AddToDoInput

const styles = StyleSheet.create({
    view: {
        flex: 0.75,
        alignItems:'center',
    justifyContent:'center'
    },
    textInput: {
        height: 40,
        marginStart: 16,
        borderWidth: 1,
        padding: 10,
        width: '100%',
    }

})