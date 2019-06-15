import React, { Component } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";

import NoteListItem from "./NoteListItem";

var _ = require("lodash");
var moment = require("moment");

function groupByDay(notes, key = "session_start") {
  let groupedNotes = _.groupBy(notes, note =>
    moment(note["createdAt"], "YYYY/MM/DD")
  );
  return groupedNotes;
}

const NoteList = ({ notes, style, remove, toggleDone }) => {
  let groupedByDay = groupByDay(notes);

  return (
    <ScrollView style={[styles.container, style]}>
      {Object.entries(groupedByDay).map((day, index) => {
        return (
          <View key={index}>
            <Text style={styles.date}>
              {moment(day[0]).format("DD MMM YYYY")}
            </Text>
            {day[1].map((note, noteIndex) => {
              return (
                <NoteListItem
                  remove={remove}
                  toggleDone={toggleDone}
                  key={noteIndex}
                  note={note}
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

export default NoteList;
