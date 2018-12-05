# Anagram Time!
Losing at Scrabble? Wanting to change up your vocabulary? Check out this Anagram Application!

## Deployed Here:
[https://anagrammer-time.surge.sh][1]

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
My focuses in this period were **refactoring**, **testing**, and **importing the wordlist** file.

I had significant trouble importing the Word List into my React application. It was difficult mostly because I tried using File System or `fs` to get it to work. I even created a separate application in this tech test, to get it to work using Node. However, when I tried to translate it to the client-side, it failed. I spent the majority of my time researching a solution, only to come across `fetch` as time was running out.

I was able to import the Word List, and now my application is able to fetch the correct words. Please check out the deployed application [here][1] to test the features.

As I started going over the one-hour limit, I refactored for a bit before I created a separate branch where I continue to work on this challenge. I loved doing it in React however since it was new to me, testing my code took longer than it needed.

I have used both Jest and Enzyme for testing.

## Development Process - Beyond:
I was able to complete the challenge requirements yet I didn't have enough time to fully refactor my code and have all my tests complete. What I would do know is continue refactoring my components. My `AnagramWords` components is becoming a bit long so I want to take out some of the methods, and have them passed to the component. This way, if I had other components that could use them I could easily pass it to them as well. I would also refactor the `ChosenWord` component so `AnagramWords` doesn't depend on it, and rather have the `App` Component render both.

I'd love to also test and mock Fetch. Currently I am using it in my `componentWillMount` and it's setting state. That's a test I'll be working on next.

I also want to work on optimisation when finding the correct anagrams. Currently, there is a delay when the user inputs a word and gets a list back. If I could somehow get that time down, that'll be great.

## Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
Currently testing three components, AnagramWords, ChosenWord, and App.

[1]: https://anagrammer-time.surge.sh
