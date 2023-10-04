/**
 * Returns coordinates of the corners anti-clockwise from bottom-left (assumes base is horizontal)
 * @param {number} a - the base
 * @param {number} b - the height
 * @param {Object} point - the bottom left point
 * @param {number} point.x - the x coordinate
 * @param {number} point.y - the y coordinate
 * @returns {Object[]} the corners
 */

function getRectangleCorners(a, b, point) {
  // get the bottom right point
  let point1 = {
    x: point.x + a,
    y: point.y,
  };
  // then the top right
  let point2 = {
    x: point1.x,
    y: point1.y + b,
  };
  // then the top left
  let point3 = {
    x: point2.x - a,
    y: point2.y,
  };
  // and return them as an array of points
  return [point, point1, point2, point3];
}

module.exports = getRectangleCorners;

// bottom left> bottom right> top right > top left
