/**
 * SpotLight React Native App
 * Created by gparap (c) 2022
 */

import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Platform, StatusBar, Text } from 'react-native';
import Settings from './src/features/concentrationSettings';
import Timer from './src/features/concentrationTimer';
import Styles from './src/theme/styles';

const App = () => {
  const [timer, setTimer] = useState('');
  const [task, setTask] = useState('');
  const [time, setTime] = useState('');

  return (
    <SafeAreaView style={Styles.containerApp}>
      {/* display the settings screen or the timer if it is set with concentration values */}
      {timer === '' ?
        <Settings startTimer={setTimer} concentrationTask={setTask} concentrationTime={setTime} /> :
        <Timer startTimer={setTimer} concentrationTask={task} concentrationTime={time} />}
    </SafeAreaView>
  );
};

export default App;
