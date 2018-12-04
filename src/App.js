import React, { Component } from "react";
import "./App.css";

const organise = str => {
  return str
    .toLowerCase()
    .split("")
    .sort()
    .join("")
    .trim();
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Stop! Anagram time!</p>
        </header>
      </div>
    );
  }
}

export default App;
