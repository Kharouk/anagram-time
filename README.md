# Anagram Time!
Losing at Scrabble? Wanting to change up your vocabulary? Check out this Anagram Application!

## Deployed Here:

## Development Process - Tuesday (40 Minutes):
I started the challenge on Tuesday evening, and I focused on three goals. **Do I understand the problem**, **what tech will help me solve it**, **can I get a rough version of it working?**

I have never attempted this kata before, so I had to make sure I understood the problem. My problem-solving process first started with asking myself, can I figure out if two words are anagrams. I had to create the `organise()` script and then compare the words.
```javascript
const word1 = "paste"
const word2 = "tapes"
const organiseWord = str => {
  return str
    .toLowerCase()
    .split("")
    .sort()
    .join("")
    .trim();
};
organiseWord(word1) === organiseWord(word2) // returns true
```
Once I understood the problem and how to solve it, I wondered what tech to use. I am familiar with Python and Ruby, however I wanted to challenge myself. I decided to see if I can solve the problem in JavaScript and React.

However, I understood that solving a problem in languages I'm not fluent in could be time-consuming, so I focused more on creating a rough solution.

To complete my final goal, I had to create an application where a user can provide any array of words to be able to see if they are anagrams. However, I didn't want to focus on how to import that wordlist text file and compare it to 30,000 words. I will start simple. Just six words. I was successful, and after 40 minutes I decided to use my remaining time to figure out if I can import the `wordlist.txt` file. 

## Development Process - Wednesday (30 Minutes):
My focuses in this period were **writing tests**, **refactoring**, and **importing the wordlist** file.

I used Jest and Enzyme for Testing, two testing frameworks I am new to.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
