import React, { Component } from "react";
import AnagramWords from "./AnagramWords";

export default class ChosenWord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: ""
    };
  }

  handleChange = event => {
    this.setState({ word: event.target.value });
  };

  handleSubmit(event) {}

  render() {
    return (
      <>
        <div>
          <input type="text" name="word" onChange={this.handleChange} />
          <input type="submit" value="Submit" />
          <h3>{this.state.word}</h3>
        </div>
        <div>
          <AnagramWords userWord={this.state.word} />
        </div>
      </>
    );
  }
}
