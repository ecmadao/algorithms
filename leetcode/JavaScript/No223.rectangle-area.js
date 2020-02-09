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


const cal = (A, B, C, D) => Math.abs((C - A) * (D - B))
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
    // 矩形 1：(A, B) -> (C, D)
    // 矩形 2：(E, F) -> (G, H)

  const sum = cal(A, B, C ,D) + cal(E, F, G, H)
  if (B > H || F > D || C < E || G < A) return sum

  return sum - Math.abs(
    (Math.min(C, G) - Math.max(A, E)) * (Math.min(D, H) - Math.max(F, B))
  )
}
