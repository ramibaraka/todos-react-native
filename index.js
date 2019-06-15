/**
 * @format
 */
import React, { Component } from "react";

import { AppRegistry } from "react-native";
import { connect, Provider } from "react-redux";

import App from "./App/App";
import { name as appName } from "./app.json";
import createStore from "./App/Redux/createStore";

const store = createStore();

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => Root);
