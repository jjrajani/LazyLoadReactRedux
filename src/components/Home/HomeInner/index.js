import React from "react";
import "./home_inner.scss";
import LazyHomeInnerTwo from "../HomeInnerTwo/lazy-wrapper";

function HomeInner() {
  return (
    <div id="home_inner">
      <h2>Triple Layer Lazy Load</h2>
      <h4>Level 2</h4>
      <LazyHomeInnerTwo />
    </div>
  );
}

export default HomeInner;
