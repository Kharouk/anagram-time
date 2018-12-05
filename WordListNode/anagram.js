const fs = require("fs");
let anagramWords = [];
let displayWords = [];

const getWords = () => {
  const words = fs.readFileSync(__dirname + "/wordlist.txt").toString();
  anagramWords = words.split("\n");
};

const mainWord = "kite";

const organiseWord = str => {
  return str
    .toLowerCase()
    .split("")
    .sort()
    .join("")
    .trim();
};

const findAnagramWords = chosenWord => {
  getWords();
  const userInput = organiseWord(chosenWord);
  anagramWords.forEach(word => {
    const sortedWord = organiseWord(word);
    if (sortedWord === userInput) {
      displayWords.push(word);
    }
  });
  console.log(displayWords);
};

findAnagramWords(mainWord);
