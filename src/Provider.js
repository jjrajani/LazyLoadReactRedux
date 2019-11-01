import React from "react";
import { Provider } from "react-redux";
import STORE from "appStore";
import DinovaApp from "./App";

const DinovaAppStoreProvider = () => (
  <Provider store={STORE}>
    <DinovaApp />
  </Provider>
);

export default DinovaAppStoreProvider;
