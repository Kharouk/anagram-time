import React, { Component } from "react";
import "./App.css";
import ChosenWord from "./components/ChosenWord";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Stop! Anagrammer time!</p>
          <ChosenWord />
          <p style={{ fontSize: 13 }}>
            Created for a Tech Test by{" "}
            <a href="https://github.com/kharouk" style={{ color: "inherit" }}>
              Alex Kharouk.
            </a>
          </p>
        </header>
      </div>
    );
  }
}

export default App;
