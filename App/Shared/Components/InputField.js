import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity
} from "react-native";

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
      <Text>+</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "grey",
    borderRadius: 20,
    paddingLeft: 15,
    backgroundColor: "white"
  },
  input: {
    marginLeft: 10,
    height: 45,
    flex: 1
  },
  addButton: {
    padding: 10,
    paddingRight: 15,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default InputField;
