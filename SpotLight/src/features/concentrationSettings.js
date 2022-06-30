/**
 * Concentration Settings Feature
 * Created by gparap (c) 2022
 */

import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, TextInput, View, ToastAndroid, Platform } from 'react-native';
import Styles from '../theme/styles';
import MinuteButton from '../components/Buttons/minutesButton';
import ConcentrationButton from '../components/Buttons/startConcentrationButton';
import StartConcentrationButton from '../components/Buttons/startConcentrationButton';

const Settings = ({ startTimer, concentrationTask, concentrationTime }) => {
    const [task, setTask] = useState('');
    const [time, setTime] = useState('');

    function handleConcentration() {
        if (isTimerSet()) {
            startConcentration();
        }
    }

    //check if settings where set properly
    function isTimerSet() {
        if ((task === '' || time === '') && Platform.OS === 'android') {
            ToastAndroid.show("Please, complete the settings...", ToastAndroid.LONG);
            return false;
        }
        return true;
    }


    //start concentration timer
    function startConcentration() {
        setConcentrationTimer();
        setConcentrationTask();
        setConcentrationTime();
    }

    //set any value to the concentration timer
    function setConcentrationTimer() {
        startTimer("any");
    }

    //set the value of the concentration task
    function setConcentrationTask() {
        concentrationTask(task);
    }

    //set the value of the concentration time
    function setConcentrationTime() {
        concentrationTime(time);
    }

    return (
        <View>
            {/* header */}
            <Text style={Styles.textHeader}>Settings</Text>

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
                    onPress={newTime => setTime("20'")}
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
            <StartConcentrationButton
                onPress={handleConcentration}
                text={"BEGIN"} />
        </View>
    );
};

export default Settings;
