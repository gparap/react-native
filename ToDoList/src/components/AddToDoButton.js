/**
 * ToDo Add Button
 * Created by gparap (c) 2022
 */

import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const AddToDoButton = () => {
    return (
        <View style={styles.view}>
            <TouchableOpacity style={styles.touchableOpacity}>
                <Text style={{textAlign: 'center'}}>Add</Text>
            </TouchableOpacity>
        </View>
    )
}

export default AddToDoButton

const styles = StyleSheet.create({
    view: {
        flex: 0.25,
        alignItems:'center',
    justifyContent:'center',
    },
    touchableOpacity: {
        backgroundColor: '#80808080',
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: '75%',
    },
})