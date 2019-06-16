import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/dist/Ionicons";

import OnOff from "./OnOff";

export default class TodoListItem extends Component<Props> {
  render() {
    const { toggleDone, todo, remove } = this.props;

    return (
      <View style={styles.container}>
        <OnOff active={todo.done} onPress={() => toggleDone(todo.id)} />
        <View style={styles.textContainer}>
          <Text
            style={[
              styles.title,
              {
                textDecorationLine: todo.done ? "line-through" : null
              }
            ]}
          >
            {todo.text}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.removeButton}
          onPress={() => remove(todo.id)}
        >
          <Icon size={32} name={"ios-add"} style={styles.icon} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    alignSelf: "stretch",
    flexDirection: "row",
    paddingTop: 10,
    flex: 1
  },
  textContainer: {
    borderBottomWidth: 1,
    borderColor: "#e0e0e0",
    paddingVertical: 25,
    flex: 1,
    alignSelf: "stretch"
  },
  title: {
    fontFamily: "Arial",
    fontSize: 18
  },
  removeButton: {
    borderBottomWidth: 1,
    borderColor: "#e0e0e0",
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center"
  },
  icon: {
    paddingHorizontal: 40,
    color: "grey",
    transform: [{ rotate: "45deg" }]
  }
});
