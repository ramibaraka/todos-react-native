import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/dist/Ionicons";

const Button = ({ onPress, btnText, btnStyle }) => (
  <TouchableOpacity style={[styles.button, btnStyle]} onPress={onPress}>
    <Icon size={22} name={"ios-add"} style={styles.icon} />
    {btnText ? <Text style={styles.textStyle}>{btnText}</Text> : null}
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
    minWidth: 45,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.44,
    shadowRadius: 5.32,
    elevation: 16
  },
  textStyle: {
    color: "white",
    marginLeft: 10
  },
  icon: {
    color: "white"
  }
});

export default Button;
