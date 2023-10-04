/**
 * Works out the hypotenuse of a right-triangle with two shorter sides a and b
 * using Pythagoras' Theorem (https://en.wikipedia.org/wiki/Pythagorean_theorem)
 * @param {number} a - a side length
 * @param {number} b - the other side length
 * @returns {number} the hypotenuse
 */

function triangleHypotenuse(a, b) {
  let A = a * a;
  let B = b * b;
  console.log(B);
  let C = Math.sqrt(A + B);
  return C;
}

triangleHypotenuse(3, 4);
module.exports = triangleHypotenuse;

// Pythag > a^2 = b^2 + c^2
// npm run test:medium

// node .\challenges\medium\triangleHypotenuse.js
