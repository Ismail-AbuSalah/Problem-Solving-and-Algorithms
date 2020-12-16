console.log("Problem Solving Q:18 ");

/*  findFactorial*/

/*  
Given an integer, n, return n! (n factorial)
5! = 5 * 4 * 3 * 2 * 1
*/

<<<<<<< HEAD:Q18/main.js
function factorial(n) {
=======
function findFactorial() {
>>>>>>> 3e19f2896b256bb1e8d86d40171769ea7257cc6e:01_Problem Solving [26 Q]/Q18/main.js
  // YOUR CODE HERE

  if (n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
}

/* 
Examples:
<<<<<<< HEAD:Q18/main.js
factorial(1) // => 1
factorial(3) // => 6
factorial(4) // => 24
*/
=======
findFactorial(1) // => 1
findFactorial(3) // => 6
findFactorial(4) // => 24
*/
>>>>>>> 3e19f2896b256bb1e8d86d40171769ea7257cc6e:01_Problem Solving [26 Q]/Q18/main.js
