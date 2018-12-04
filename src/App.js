import React, { Component } from "react";
import "./App.css";
import ChosenWord from "./components/ChosenWord";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Stop! Anagram time!</p>
          <ChosenWord />
        </header>
      </div>
    );
  }
}

export default App;
