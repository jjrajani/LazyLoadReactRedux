import React from "react";
import ReactDOM from "react-dom";
import DinovaAppStoreProvider from "./Provider";

const renderApp = () => {
  const wrapper = document.getElementById("root");
  //// TODO: Wrapper error handler?
  wrapper ? ReactDOM.render(<DinovaAppStoreProvider />, wrapper) : false;
};

document.addEventListener("DOMContentLoaded", function() {
  renderApp();

  if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("./App", renderApp);
  }
});
