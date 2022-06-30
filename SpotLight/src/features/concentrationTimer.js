/**
 * Concentration Timer Feature
 * Created by gparap (c) 2022
 */

import React from 'react';
import { View, Text } from 'react-native'
import ExitConcentrationButton from '../components/Buttons/exitConcentrationButton';
import Styles from '../theme/styles';

const Timer = ({ startTimer, concentrationTask, concentrationTime }) => {

    //unset the concentration timer
    function setConcentrationTimer() {
        startTimer('');
    }

    return (
        <View>
            <Text style={Styles.textNormal}>Concentrating  on: {concentrationTask} </Text>
            <Text style={Styles.textNormal}>Concentrating for: {concentrationTime}</Text>
            <ExitConcentrationButton text="BACK"
                onPress={setConcentrationTimer} />
        </View>
    )
}

export default Timer;
