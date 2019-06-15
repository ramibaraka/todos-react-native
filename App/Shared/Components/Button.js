import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Button = ({ onPress, btnText, btnStyle }) => (
  <TouchableOpacity style={[styles.button, btnStyle]} onPress={onPress}>
    <Text style={styles.plusSign}>+</Text>
    <Text style={styles.textStyle}>{btnText}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 25,
    backgroundColor: "black",
    minWidth: 45
  },
  textStyle: {
    color: "white"
  },
  plusSign: {
    color: "white",
    fontSize: 18
  }
});

export default Button;
