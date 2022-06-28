/**
 * Concentration Feature
 * Created by gparap (c) 2022
 */

import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, TextInput, View } from 'react-native';

const SpotLight = () => {
    const [task, setTask] = useState('');
    const [time, setTime] = useState('');
    return (
        <View style={styles.container}>
            {/* concentration task */}
            <Text style={styles.textNormal}>What do you want to concentrate on? </Text>
            <TextInput
                onChangeText={newTask => setTask(newTask)}
                style={styles.textInput}
                placeholder="type something..." />
            <Text style={styles.textNormal}>How long do you want to concentrate? </Text>

            {/* concentration duration */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}
                    onPress={newTime => setTime("5'")}>
                    <Text>5'</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                    onPress={newTime => setTime("10'")}>
                    <Text>10'</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                    onPress={newTime => setTime("15'")}>
                    <Text>15'</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                    onPress={newTime => setTime("20'")}>
                    <Text>20'</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                    onPress={newTime => setTime("25'")}>
                    <Text>25'</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                    onPress={newTime => setTime("30'")}>
                    <Text>30'</Text>
                </TouchableOpacity>
            </View>

            {/* concentration info */}
            <Text style={styles.textNormal}>Concentrating  on: {task} </Text>
            <Text style={styles.textNormal}>Concentrating for: {time} </Text>

            {/* start concentratiing */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text>BEGIN</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'center',
    },
    textNormal: {
        color: 'white',
        opacity: 0.77,
        padding: 8,
        fontSize: 16,
    },
    textInput: {
        textAlign: 'center',
        borderRadius: 0,
        height: 48,
        backgroundColor: '#9d6dff',
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 32,
        backgroundColor: '#9d6dff',
        borderRadius: 8,
        margin: 4,
    },
});

export default SpotLight;
