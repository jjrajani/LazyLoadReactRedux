import React from "react";
import { HashRouter as Router } from "react-router-dom";
import { Nav } from "components/Nav";
import Routes from "./Routes";

import "./styles/main.scss";

const DinovaApp = () => (
  <div className="app">
    <Router>
      <div className="app-content">
        <Nav />
        <Routes />
      </div>
    </Router>
  </div>
);

export default DinovaApp;
