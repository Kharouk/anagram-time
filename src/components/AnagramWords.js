import React, { Component } from "react";
var myText = require("../assets/wordlist.txt");

// Global array to push sorted words:
let anagrammedWords = [];

// Component that finds and Displays Anagram Words
export default class AnagramWords extends Component {
  state = {
    anagramVisible: false,
    fetchWords: "",
    loading: true
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
    anagrammedWords = [];
    //Set state variable:
    const words = this.state.fetchWords;
    // Sort User's input:
    const userInput = this.organiseWord(this.props.userWord);

    // Find word anagrams based on input:
    words.forEach(word => {
      const sortedWord = this.organiseWord(word);
      if (sortedWord === userInput) {
        anagrammedWords.push(word);
      }
      this.setState({ anagramVisible: true });
    });
  };

  // Display correct Matches:
  displayAnagramWords = () => {
    const anagrams = anagrammedWords;
    return <p>{anagrams.join(", ")}</p>;
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
