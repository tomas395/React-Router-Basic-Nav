import React from "react";
import "./App.css";
import { Navigation } from "./components";
import { BrowserRouter as Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Route exact path="/"></Route>
      <Route path="/about"></Route>
      <Route path="/contact"></Route>
    </div>
  );
};

export default App;
