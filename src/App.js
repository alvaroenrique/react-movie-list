import React from "react";

import Header from "./components/header/index";
import Sidenav from "./components/sidenav/index";
import Body from "./components/body/index";

import "./styles/core.scss";

function App() {
  return (
    <>
      <Header></Header>
      <div className="flex">
        <Sidenav></Sidenav>
        <Body></Body>
      </div>
    </>
  );
}

export default App;
