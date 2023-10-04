/**
 * Find the area of a rectangle given the four corners.
 * The base of the rectangle is assumed to be horizontal.
 * Note: The corners can be given in any order.
 * @param {{ x: number, y: number }[]} points - an array of 4 points, e.g. { x: 3, y: 5 }
 * @return {number} the area
 */

function rectangleAreaFromCoords(points) {
  [A, B, C, D] = points;
  console.log([A, B, C, D]);
  console.log(Math.min(points[1].x));
  console.log(points.length);
  let X = [];
  let Y = [];
  for (let i = 0; i < points.length; i++) {
    console.log(i, X);
    console.log(i, Y);
    X.push(points[i].x);
    Y.push(points[i].y);
    console.log(X);
  }
  let length = Math.max(...X) - Math.min(...X);
  console.log(length);
  let height = Math.max(...Y) - Math.min(...Y);
  console.log(height);
  let area = length * height;

  return area;
}

// Math.min and Math.max. Get highest values. Multiply for area.

rectangleAreaFromCoords([
  { x: 2, y: 3 },
  { x: 4, y: 3 },
  { x: 4, y: 10 },
  { x: 2, y: 10 },
]);
module.exports = rectangleAreaFromCoords;

// npm run test:medium
// node .\challenges\medium\rectangleAreaFromCoords.js
