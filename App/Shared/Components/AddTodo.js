import React, { Component } from "react";
import { StyleSheet, Text, View, KeyboardAvoidingView } from "react-native";

import DeviceKit from "../Utils/DeviceKit";
import Button from "./Button";
import InputField from "./InputField";

var moment = require("moment");

export default class AddTodo extends Component {
  state = {
    editMode: false,
    text: ""
  };

  render() {
    const { addTodo } = this.props;
    const { text } = this.state;

    return (
      <KeyboardAvoidingView
        behavior={DeviceKit.isIOS() ? "padding" : null}
        style={styles.container}
      >
        <View style={styles.topHalf}>
          <Text style={styles.title}>todo</Text>
          <Text style={styles.date}>
            {moment(new Date()).format("dddd DD MMM YYYY")}
          </Text>
        </View>
        <View style={styles.bottomHalf}>
          {this.state.editMode ? (
            <InputField
              add={() => addTodo(text)}
              style={styles.positionOverLine}
              value={this.state.text}
              onChangeText={text => this.setState({ text })}
            />
          ) : (
            <Button
              btnStyle={[styles.positionOverLine, styles.button]}
              btnText={"Add item"}
              onPress={() => this.setState({ editMode: true })}
            />
          )}
          <Text style={styles.caption}>
            What do you want to do today? {"\n"}
            Start adding items to your to-do list.
          </Text>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  topHalf: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch"
  },
  bottomHalf: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(244,244,244,1)",
    alignSelf: "stretch",
    padding: 20
  },
  positionOverLine: {
    position: "absolute",
    top: -20
  },
  button: {
    minWidth: 120
  },
  title: {
    fontSize: 26,
    padding: 10
  },
  date: {
    color: "grey"
  },
  caption: {
    color: "grey",
    textAlign: "center"
  }
});
