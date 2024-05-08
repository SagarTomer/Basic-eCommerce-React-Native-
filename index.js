/**
 * @format
 */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

import React from "react";
import { AppRegistry } from "react-native";
import { Provider } from "react-redux";
import store from "./Redux/store";
import { name as appName } from "./app.json";
import MainApp from "./Redux/MainApp";

const App = () => (
  <Provider store={store}>
    <MainApp />
  </Provider>
);

AppRegistry.registerComponent(appName, () => App);
