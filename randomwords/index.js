const randomWords = require('random-words');
const{palindrome,countVowels} = require('./fun');
const words = randomWords(5);
const chalk = require('chalk');
const boxen = require('boxen');

words.forEach((word,index)=> {
   const isPlaindrome = palindrome(word);
   const vowelscount = countVowels(word);
   const output  = boxen(`word ${index + 1} -> ${word} -> vowelsCount:${vowelscount} -> isPalindrome: ${isPlaindrome}`);
   console.log(isPlaindrome ? chalk.green(output) : chalk.red(output))
});