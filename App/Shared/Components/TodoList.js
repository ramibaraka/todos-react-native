import React, { Component } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";

import TodoListItem from "./TodoListItem";

var _ = require("lodash");
var moment = require("moment");

function groupByDay(todos) {
  let groupedTodos = _.groupBy(todos, todo =>
    moment(todo.createdAt)
      .startOf("day")
      .format()
  );
  return groupedTodos;
}

const TodoList = ({ todos, style, remove, toggleDone }) => {
  let groupedByDay = groupByDay(todos);
  console.log("GROUPED BY DAY\n", groupedByDay);

  return (
    <ScrollView style={[styles.container, style]}>
      {Object.entries(groupedByDay).map((day, index) => {
        return (
          <View key={index}>
            <Text style={styles.date}>
              {moment(day[0]).format("DD MMM YYYY")}
            </Text>
            {day[1].map((todo, todoIndex) => {
              return (
                <TodoListItem
                  remove={remove}
                  toggleDone={toggleDone}
                  key={todoIndex}
                  todo={todo}
                />
              );
            })}
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 30,
    flex: 1,
    width: "100%"
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
  },
  date: {
    fontFamily: "Arial",
    color: "#919191",
    fontSize: 16,
    marginTop: 40
  }
});

export default TodoList;
