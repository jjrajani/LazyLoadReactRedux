import React from "react";
import "./home.scss";
import LazyHomeInner from "./HomeInner/lazy-wrapper";

function Home() {
  return (
    <div id="home">
      <h2>Triple Layer Lazy Load</h2>
      <h4>Level 1</h4>
      <LazyHomeInner />
    </div>
  );
}

export default Home;
