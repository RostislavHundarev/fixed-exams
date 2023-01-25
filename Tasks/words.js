// Count words in a string


const words = (s) => {
  let numberOfWords = 0;
  let inWord = false;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      inWord = !inWord;
    } else if (!inWord) {
      numberOfWords++;
      inWord = !inWord;
    }
  }
  return numberOfWords;
};

require('../Tests/words.js')(words);
