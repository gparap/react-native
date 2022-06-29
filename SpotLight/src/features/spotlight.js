/**
 * Concentration Feature
 * Created by gparap (c) 2022
 */

import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, TextInput, View } from 'react-native';
import Styles from '../theme/styles';

const SpotLight = () => {
    const [task, setTask] = useState('');
    const [time, setTime] = useState('');
    return (
        <View style={Styles.containerConcentration}>
            {/* concentration task */}
            <Text style={Styles.textNormal}>What do you want to concentrate on? </Text>
            <TextInput
                onChangeText={newTask => setTask(newTask)}
                style={Styles.textInput}
                placeholder="type something..." />
            <Text style={Styles.textNormal}>How long do you want to concentrate? </Text>

            {/* concentration duration */}
            <View style={Styles.containerButton}>
                <TouchableOpacity style={Styles.button}
                    onPress={newTime => setTime("5'")}>
                    <Text>5'</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.button}
                    onPress={newTime => setTime("10'")}>
                    <Text>10'</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.button}
                    onPress={newTime => setTime("15'")}>
                    <Text>15'</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.button}
                    onPress={newTime => setTime("20'")}>
                    <Text>20'</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.button}
                    onPress={newTime => setTime("25'")}>
                    <Text>25'</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.button}
                    onPress={newTime => setTime("30'")}>
                    <Text>30'</Text>
                </TouchableOpacity>
            </View>

            {/* concentration info */}
            <Text style={Styles.textNormal}>Concentrating  on: {task} </Text>
            <Text style={Styles.textNormal}>Concentrating for: {time} </Text>

            {/* start concentratiing */}
            <View style={Styles.containerButton}>
                <TouchableOpacity style={Styles.button}>
                    <Text>BEGIN</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default SpotLight;
