import React, { Component } from "react";
import { StyleSheet, Text, View, Modal } from "react-native";

import AddNote from "./Shared/Components/AddNote";
import Button from "./Shared/Components/Button";

type Props = {};
export default class App extends Component<Props> {
  state = {
    modalVisible: false
  };
  showModal = () => this.setState({ modalVisible: true });
  hideModal = () => this.setState({ modalVisible: false });

  render() {
    const { modalVisible } = this.state;
    const hasNotes = true;
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <View style={styles.header}>
            <Text style={styles.title}>todo</Text>
            <Button
              btnStyle={styles.addButton}
              btnText={""}
              onPress={this.showModal}
            />
          </View>
        </View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible || !hasNotes}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <AddNote closeModal={this.hideModal} />
        </Modal>
      </View>
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
  innerContainer: {
    flex: 1,
    alignItems: "center",
    alignSelf: "stretch",
    padding: 40
  },
  title: {
    fontSize: 26,
    fontFamily: "Arial"
  },
  header: {
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 0.5,
    borderColor: "grey",
    alignSelf: "stretch",
    marginHorizontal: -40
  },
  addButton: {
    position: "absolute",
    right: 40,
    bottom: -20,
    maxWidth: 45
  }
});
