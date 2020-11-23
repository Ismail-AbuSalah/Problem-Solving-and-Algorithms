console.log("Problem Solving Q: 10");

/* Times Of Most Freq Char */

/*  
Write a function that returns the number of occurrences of the most frequent character in a sentence.
*/

function answer1(str) {
  const obj = {};
  str.split("").forEach((char) => {
    if (obj[char]) {
      obj[char] = obj[char] + 1;
    } else {
      obj[char] = 1;
    }
  });
  return Math.max(...Object.values(obj));
}

/* 
Examples:
answer1('hello world') // => 3
answer1('hello world lol') // => 5
answer1('hello world lol woooow') // => 7
answer1('hello world lol wow www.com') // => 6
*/
