import React, { Component } from "react";
var myText = require("../assets/wordlist.txt");

// Component that finds and Displays Anagram Words
export default class AnagramWords extends Component {
  state = {
    anagramVisible: false,
    fetchWords: "",
    loading: true,
    anagrammedWords: []
  };

  organiseWord = str => {
    return str
      .toLowerCase()
      .split("")
      .sort()
      .join("")
      .trim();
  };

  componentDidMount() {
    fetch(myText)
      .then(r => r.text())
      .then(text => {
        this.state.fetchWords = text.split("\n");
      });
  }

  findAnagramWords = () => {
    // Empty out Array:
    this.state.anagrammedWords = [];
    //Set state variable:
    const words = this.state.fetchWords;
    // Sort User's input:
    const userInput = this.organiseWord(this.props.userWord);

    // Find word anagrams based on input:
    words.forEach(word => {
      const sortedWord = this.organiseWord(word);
      if (sortedWord === userInput) {
        this.state.anagrammedWords.push(word);
      }
      this.setState({ anagramVisible: true });
    });
  };

  // Display correct Matches:
  displayAnagramWords = () => {
    return <p>{this.state.anagrammedWords.join(", ")}</p>;
  };

  render() {
    return (
      <div>
        <h1>{this.props.userWord}</h1>
        <button onClick={this.findAnagramWords}>Find Anagrams</button>
        {this.state.anagramVisible && this.displayAnagramWords()}
      </div>
    );
  }
}
