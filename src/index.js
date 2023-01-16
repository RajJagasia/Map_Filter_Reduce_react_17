import emojipedia from "./emojipedia";

var numbers = [3, 56, 2, 48, 5, 10, 9];

//Map -Create a new array by doing something with each item in an array.

// function double(x) {
//   return x * 2;
// }

// const newNumber = numbers.map(double);
// console.log(newNumber);

const newNumber = numbers.map(function (x) {
  return x * 2;
});
console.log(newNumber);

//Map is similar to for each but map is better as we dont need to initailize a new array
//
//
//######################################################################################################## */
//Filter - Create a new array by keeping the items that return true.
const filterNumber = numbers.filter(function (x) {
  return x > 9;
});
console.log(filterNumber);

//######################################################################################################## */

//Reduce - Accumulate a value by doing something to each item in an array.

const reduceNumber = numbers.reduce(function (accumulator, x) {
  accumulator += x;
  return accumulator;
});
console.log(reduceNumber);

//######################################################################################################## */

//Find - find the first item that matches from an array.
const findNumber = numbers.find(function (x) {
  return x > 9;
});
console.log(findNumber);

//######################################################################################################## */

//FindIndex - find the index of the first item that matches.

const findIndexNumber = numbers.findIndex(function (x) {
  return x > 9;
});
console.log(findIndexNumber);

//######################################################################################################## */

const emojiMeaning = emojipedia.map(function (x) {
  return x.meaning.substring(0, 100);
});
console.log(emojiMeaning);
