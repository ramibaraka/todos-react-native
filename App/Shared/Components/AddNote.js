import React, { Component } from "react";
import { StyleSheet, Text, View, KeyboardAvoidingView } from "react-native";

import Button from "./Button";
import InputField from "./InputField";

type Props = {};
export default class AddNote extends Component<Props> {

  state = {
    editMode: false,
    note: ""
  };

  addNote = () => {

  }

  render() {
    const {closeModal} = this.props
    
    return (
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.topHalf} />
        <View style={styles.bottomHalf}>
        {this.state.editMode ? (
          <Button
          btnStyle={styles.positionOverLine}
          btnText={"Add item"}
          onPress={closeModal}
        />
        ) : (
          <InputField add={this.addNote} style={styles.positionOverLine} value={this.state.note} onChangeText={(text) => this.setState({note: text})} />
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
    left: 25,
    right: 25
  }
});