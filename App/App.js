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
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Button btnText={""} onPress={this.showModal} />
        </View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible}
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
    justifyContent: "center",
    alignSelf: "stretch"
  }
});
