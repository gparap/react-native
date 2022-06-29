/**
 * App Styles
 * Created by gparap (c) 2022
 */

import React from "react";
import { StyleSheet, Platform, StatusBar } from "react-native";
import Colors from "./colors";

const Styles = StyleSheet.create({
  //app container style
  containerApp: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingHorizontal: Platform.OS === 'android' ? 24 : 0,
    backgroundColor: Colors.primaryColor,
  },

  //concentration feature container style
  containerConcentration: {
    flex: 1,
    alignSelf: 'center',
  },

  //normal text style
  textNormal: {
    color: Colors.white,
    opacity: 0.77,
    padding: 8,
    fontSize: 16,
  },

  //TextInput style
  textInput: {
    textAlign: 'center',
    borderRadius: 0,
    height: 48,
    backgroundColor: Colors.primaryLight,
  },

  //buttons container style
  containerButton: {
    flexDirection: 'row',
  },

  //buttons style
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 32,
    backgroundColor: Colors.primaryLight,
    borderRadius: 8,
    margin: 4,
  },
});

export default Styles;
