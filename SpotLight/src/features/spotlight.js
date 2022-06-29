/**
 * Concentration Feature
 * Created by gparap (c) 2022
 */

import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, TextInput, View } from 'react-native';
import Styles from '../theme/styles';
import MinuteButton from './../../src/components/Buttons/minutesButton';
import ConcentrationButton from '../components/Buttons/concentrationButton';

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
                <MinuteButton
                    onPress={newTime => setTime("5'")}
                    minutes={"5'"} />
                <MinuteButton
                    onPress={newTime => setTime("10'")}
                    minutes={"10'"} />
                <MinuteButton
                    onPress={newTime => setTime("15'")}
                    minutes={"15'"} />
                <MinuteButton
                    onPressListener={newTime => setTime("20'")}
                    minutes={"20'"} />
                <MinuteButton
                    onPress={newTime => setTime("25'")}
                    minutes={"25'"} />
                <MinuteButton
                    onPress={newTime => setTime("30'")}
                    minutes={"30'"} />
            </View>

            {/* concentration info */}
            <Text style={Styles.textNormal}>Concentrating  on: {task} </Text>
            <Text style={Styles.textNormal}>Concentrating for: {time} </Text>

            {/* start concentratiing */}
            <ConcentrationButton
                onPress={console.log("Not implemented yet.")}
                text={"BEGIN"} />
        </View>
    );
};

export default SpotLight;
