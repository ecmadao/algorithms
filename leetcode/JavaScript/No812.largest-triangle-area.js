/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * You have a list of points in the plane. Return the area of the largest triangle that can be formed by any 3 of the points.
 *
 * Example:
 * Input: points = [[0,0],[0,1],[1,0],[0,2],[2,0]]
 * Output: 2
 * Explanation:
 * The five points are show in the figure below. The red triangle is the largest.
 *
 * Notes:
 * 1. 3 <= points.length <= 50.
 * 2. No points will be duplicated.
 * 3. -50 <= points[i][j] <= 50.
 * 4. Answers within 10^-6 of the true value will be accepted as correct.
 *
 * 给定包含多个点的集合，从其中取三个点组成三角形，返回能组成的最大三角形的面积。
 */


const getLen = (p1, p2) => Math.sqrt(
  Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2)
)

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 *
 * 海伦公式，根据三边求三角形面积
 * https://zh.wikipedia.org/wiki/%E6%B5%B7%E4%BC%A6%E5%85%AC%E5%BC%8F
 */
const getArea = (a, b, c) => {
  const s = (a + b + c) / 2
  return Math.sqrt(s * Math.abs(s - a) * Math.abs(s - b) * Math.abs(s - c))
}

/**
* @param {number[][]} points
* @return {number}
*/
var largestTriangleArea = function(points) {
  let res = 0

  for (let i = 0; i < points.length - 2; i += 1) {
    for (let j = i + 1; j < points.length - 1; j += 1) {
      for (let k = j + 1; k < points.length; k += 1) {
        const a = getLen(points[i], points[j])
        const b = getLen(points[j], points[k])
        const c = getLen(points[k], points[i])
        const area = getArea(a, b, c)

        res = Math.max(res, area)
      }
    }
  }
  return res
}
