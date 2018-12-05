import React, { Component } from "react";
import AnagramWords from "./AnagramWords";

export default class ChosenWord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: "",
      anagramWordsVisible: false
    };
  }

  handleChange = event => {
    this.setState({ word: event.target.value });
  };

  render() {
    return (
      <>
        <div>
          <input type="text" name="word" onChange={this.handleChange} />
        </div>
        <div>
          <AnagramWords userWord={this.state.word} />
        </div>
      </>
    );
  }
}
