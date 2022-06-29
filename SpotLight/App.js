/**
 * SpotLight React Native App
 * Created by gparap (c) 2022
 */

import React from 'react';
import { SafeAreaView, StyleSheet, Platform, StatusBar } from 'react-native';
import SpotLight from './src/features/spotlight';
import Styles from './src/theme/styles';

const App = () => {
  return (
    <SafeAreaView style={Styles.containerApp}>
      <SpotLight />
    </SafeAreaView>
  );
};

export default App;
