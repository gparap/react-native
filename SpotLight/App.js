/**
 * SpotLight React Native App
 * Created by gparap (c) 2022
 */

import React from 'react';
import { SafeAreaView, StyleSheet, Platform, StatusBar } from 'react-native';
import SpotLight from './src/features/spotlight';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SpotLight />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingHorizontal: Platform.OS === 'android' ? 24 : 0,
    backgroundColor: '#6A40CC', //primary 500
  },
});

export default App;
