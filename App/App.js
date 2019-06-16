import React, { Component } from "react";
import { StyleSheet, Text, View, Modal } from "react-native";

import { connect } from "react-redux";

import DeviceKit from "./Shared/Utils/DeviceKit";

import AddTodo from "./Shared/Components/AddTodo";
import Button from "./Shared/Components/Button";
import TodoList from "./Shared/Components/TodoList";

import { addTodo, removeTodo, toggleTodo } from "./Redux/todoActions";

class App extends Component {
  state = {
    modalVisible: false,
    id: 0
  };
  showModal = () => this.setState({ modalVisible: true });
  hideModal = () => this.setState({ modalVisible: false });

  addTodo = text => {
    const { dispatch } = this.props;

    if (text !== "") {
      const nextID = this.state.id + 1;
      const todo = {
        text: text,
        id: nextID,
        createdAt: new Date(),
        done: false
      };
      dispatch(addTodo(todo));
      this.setState({ id: nextID }, () => this.hideModal());
    } else {
      alert("Please enter some text");
    }
  };
  removeTodo = id => {
    this.props.dispatch(removeTodo(id));
  };

  handleToggleTodo = id => {
    this.props.dispatch(toggleTodo(id));
  };

  render() {
    const { modalVisible } = this.state;
    const { todos } = this.props;
    const hasTodos = todos && todos.length > 0;

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
          <TodoList
            remove={this.removeTodo}
            toggleDone={this.handleToggleTodo}
            todos={todos}
          />
        </View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible || !hasTodos}
          onRequestClose={() => {
            console.log("Modal closed");
          }}
        >
          <AddTodo addTodo={this.addTodo} closeModal={this.hideModal} />
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

const mapStateToProps = state => ({
  isLoading: state.todoReducer.isLoading,
  todos: state.todoReducer.todos
});

export default connect(mapStateToProps)(App);
