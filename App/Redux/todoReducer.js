import { Record, List } from "immutable";
import { todoActionTypes } from "./actionTypes";

const reducerRecord = Record({
  todos: [],
  isLoading: false,
  error: null
});

const initialState = new reducerRecord();

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case todoActionTypes.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.todo]
      };
    case todoActionTypes.TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.id ? { ...todo, done: !todo.done } : todo
        )
      };

    case todoActionTypes.REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id)
      };
    default:
      return state;
  }
};
