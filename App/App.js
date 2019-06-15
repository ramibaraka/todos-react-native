import React, { Component } from "react";
import { StyleSheet, Text, View, Modal } from "react-native";

import DeviceKit from "./Shared/Utils/DeviceKit";

import AddNote from "./Shared/Components/AddNote";
import Button from "./Shared/Components/Button";
import NoteList from "./Shared/Components/NoteList";

type Props = {};
export default class App extends Component<Props> {
  state = {
    modalVisible: false
  };
  showModal = () => this.setState({ modalVisible: true });
  hideModal = () => this.setState({ modalVisible: false });

  addNote = note => {
    console.log("NOTE ADDED", note);
  };
  removeNote = note => {
    console.log("NOTE REMOVED", note);
  };

  handleToggleDone = note => {
    console.log("NOTE TOGGLED", note);
  };

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
          <NoteList
            remove={this.removeNote}
            toggleDone={this.handleToggleDone}
            notes={dummyNotes}
          />
        </View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible || !hasNotes}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <AddNote addNote={this.addNote} closeModal={this.hideModal} />
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
    alignSelf: "stretch"
  },
  title: {
    fontSize: 26,
    fontFamily: "Arial"
  },
  header: {
    alignItems: "center",
    padding: 20,
    paddingTop: DeviceKit.isIphoneX() ? 50 : 30,
    borderBottomWidth: 1,
    borderColor: "#e0e0e0",
    alignSelf: "stretch",
    marginHorizontal: 0
  },
  addButton: {
    position: "absolute",
    right: 40,
    bottom: -20,
    maxWidth: 45
  }
});

const dummyNotes = [
  {
    createdAt: new Date(),
    note: "Buy milk",
    id: 0
  },
  {
    createdAt: new Date(),
    note: "Buy milk",
    id: 0
  },
  {
    createdAt: new Date(),
    note: "Buy milk",
    id: 0
  },
  {
    createdAt: new Date(),
    note: "Buy milk",
    id: 0
  },
  {
    createdAt: new Date(),
    note: "Buy milk",
    id: 0
  }
];
