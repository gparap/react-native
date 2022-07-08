/**
 * ToDo List React Native App
 * Created by gparap (c) 2022
 */

import React from 'react';
import { Image, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import AddToDoInput from './src/components/AddToDoInput';
import AddToDoButton from './src/components/AddToDoButton';
import ToDoListHeader from './src/components/ToDoListHeader';

var todoListData = [
  {
    id: 1,
    todo: "1st to-do"
  },
  {
    id: 2,
    todo: "2nd to-do"
  },
  {
    id: 3,
    todo: "3rd to-do"
  },
  {
    id: 4,
    todo: "4th to-do"
  },
  {
    id: 5,
    todo: "5th to-do"
  },
];

function test() {

}

const renderItem = ({ item }) => (
  <View style={styles.renderItem}>
    {/* todo item*/}
    <View style={styles.todoItemView}>
      <Text style={styles.todoItemText}>{item.todo}</Text>
    </View>

    {/* trash button */}
    <View style={styles.trashButton}>
      <TouchableOpacity onPress={test}>
        <Image source={require('./src/img/delete_forever.png')} />
      </TouchableOpacity>
    </View>
  </View>
);

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='black' />
      <View style={styles.addView}>
        <AddToDoInput />
        <AddToDoButton />
      </View>
      <ToDoListHeader />
      <FlatList
        data={todoListData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  addView: {
    flexDirection: 'row',
  },
  renderItem: {
    margin: 8, backgroundColor: '#80808080', minWidth: '75%'
  },
  todoItemView: {
    flexDirection: 'row',
  },
  todoItemText: {
    fontSize: 16, padding: 8,
  },
  trashButton: {
    alignItems: 'flex-end',
  },
});
