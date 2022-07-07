/**
 * ToDo List Header
 * Created by gparap (c) 2022
 */

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ToDoListHeader = () => {
  return (
    <View>
      <Text style={styles.text}>My ToDo List: </Text>
    </View>
  )
}

export default ToDoListHeader

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 21,
    padding: 8,
  }
})