/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Find the total area covered by two rectilinear rectangles in a 2D plane.
 * Each rectangle is defined by its bottom left corner and top right corner as shown in the figure.
 *
 * Example:
 * Input: -3, 0, 3, 4, 0, -1, 9, 2
 * Output: 45
 *
 * Note:
 * Assume that the total area is never beyond the maximum possible value of int.
 */

/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function(A, B, C, D, E, F, G, H) {
  const area1 = (C - A) * (D - B);
  const area2 = (G - E) * (H - F);
  let tmpArea = 0;

  if (C <= E || A >= G || B >= H || D <= F) {
    tmpArea = 0;
  } else {
    tmpArea = (Math.min(C, G) - Math.max(A, E)) * (Math.min(D, H) - Math.max(B, F));
  }
  return area1 + area2 - tmpArea;
};
