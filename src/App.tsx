import React from "react";

import "./App.css";
import NavComponent from "./components/Navigation/NavComponent";
import Skills from "./components/Skills/Skills";

import HeaderComponent from "./components/Header/HeaderComponent";

function App() {
  return (
    <div className="App">
      <NavComponent />
      <HeaderComponent title="Front End Developer" name="Michal Stabrawa" />
      <Skills />
    </div>
  );
}

export default App;
