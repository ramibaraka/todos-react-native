import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Button = ({ onPress, btnText, btnStyle }) => (
  <TouchableOpacity style={[styles.button, btnStyle]} onPress={onPress}>
    <Text style={styles.textStyle}>+</Text>
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
    paddingHorizontal: 17,
    backgroundColor: "black"
  },
  textStyle: {
    color: "white"
  }
});

export default Button;
