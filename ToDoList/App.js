/**
 * ToDo List React Native App
 * Created by gparap (c) 2022
 */

import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import AddToDoInput from './src/components/AddToDoInput';
import AddToDoButton from './src/components/AddToDoButton';
import ToDoListHeader from './src/components/ToDoListHeader';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='black' />
      <View style={styles.view}>
        <AddToDoInput />
        <AddToDoButton />
      </View>
      <ToDoListHeader />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view: {
    flexDirection: 'row',
  }
});
