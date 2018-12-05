import React, { Component } from "react";

// Template to find find words:
const words = ["pates", "peats", "septa", "spate", "tapes", "tepas", "pizza"];

// Global array to push sorted words:
let anagrammedWords = [];

// Global method to figure out if words are similar
const organiseWord = str => {
  return str
    .toLowerCase()
    .split("")
    .sort()
    .join("")
    .trim();
};

// Component that finds and Displays Anagram Words
export default class AnagramWords extends Component {
  state = {
    anagramVisible: false
  };

  findAnagramWords = () => {
    // Empty out Array:
    anagrammedWords = [];

    const userInput = organiseWord(this.props.userWord);
    words.forEach(word => {
      const sortedWord = organiseWord(word);
      if (sortedWord === userInput) {
        anagrammedWords.push(word);
      }
      this.setState({ anagramVisible: true });
    });
  };

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
