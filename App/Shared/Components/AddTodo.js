import React, { Component } from "react";
import { StyleSheet, Text, View, KeyboardAvoidingView } from "react-native";

import DeviceKit from "../Utils/DeviceKit";
import Button from "./Button";
import InputField from "./InputField";

type Props = {};
export default class AddTodo extends Component<Props> {
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
        <View style={styles.topHalf} />
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
              btnStyle={styles.positionOverLine}
              btnText={"Add item"}
              onPress={() => this.setState({ editMode: true })}
            />
          )}
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
    top: -20,
    minWidth: 120,
    marginHorizontal: 50
  }
});
