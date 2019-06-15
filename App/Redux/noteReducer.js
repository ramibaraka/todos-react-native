import { Record, List } from "immutable";
import { noteActionTypes } from "./actionTypes";

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
    createdAt: new Date("Wed, 27 July 2016 13:30:00"),
    note: "Buy milk",
    id: 0
  },
  {
    createdAt: new Date("Wed, 27 July 2016 13:30:00"),
    note: "Buy milk",
    id: 0
  }
];

const reducerRecord = Record({
  notes: dummyNotes,
  isLoading: false,
  error: null
});

const initialState = new reducerRecord();

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case noteActionTypes.SHOW_LOADER:
      return state.set("isLoadin", true);
    case noteActionTypes.HIDE_LOADER:
      return state.set("isLoading", false);
    default:
      return state;
  }
};
