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
            {/* header */}
            <Text style={Styles.textHeader}>Concentration</Text>

            {/* concentration info */}
            <Text style={Styles.textNormal}>Concentrating  on: {concentrationTask} </Text>
            <Text style={Styles.textNormal}>Concentrating for: {concentrationTime}</Text>

            {/* stop concentration */}
            <ExitConcentrationButton text="BACK"
                onPress={setConcentrationTimer} />
        </View>
    )
}

export default Timer;
