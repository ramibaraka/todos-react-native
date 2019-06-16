import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity
} from "react-native";

import Icon from "react-native-vector-icons/dist/Ionicons";

const InputField = ({ value, onChangeText, style, add }) => (
  <View style={[styles.container, style]}>
    <TextInput
      autoCorrect={false}
      style={styles.input}
      underlineColorAndroid="transparent"
      onChangeText={onChangeText}
      value={value}
    />
    <TouchableOpacity style={styles.addButton} onPress={add}>
      <Icon size={22} name={"ios-add"} style={styles.add} />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "grey",
    borderRadius: 22.5,
    paddingLeft: 15,
    backgroundColor: "white",
    alignSelf: "stretch",
    marginLeft: 35
  },
  input: {
    marginLeft: 10,
    height: 45,
    flex: 1,
    alignSelf: "stretch"
  },
  addButton: {
    padding: 10,
    paddingRight: 15,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default InputField;
