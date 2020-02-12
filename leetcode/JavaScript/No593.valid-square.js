/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given the coordinates of four points in 2D space, return whether the four points could construct a square.
 * The coordinate (x,y) of a point is represented by an integer array with two integers.
 *
 * Example:
 * Input: p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,1]
 * Output: True
 *
 * Note:
 * 1. All the input integers are in the range [-10000, 10000].
 * 2. A valid square has four equal sides with positive length and four equal angles (90-degree angles).
 * 3. Input points have no order.
 */


const getSlope = (p1, p2) => (p1[1] - p2[1]) / (p1[0] - p2[0])

const getSlope2 = (p1, p2, p3, p4) => ((p1[1] - p2[1]) * (p3[1] - p4[1])) / ((p1[0] - p2[0]) * (p3[0] - p4[0]))

const getLen = (p1, p2) => Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2)

/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
var validSquare = function(p1, p2, p3, p4) {
  const base1 = p1
  const points = [p2, p3, p4]

  for (let i = 0; i < points.length; i += 1) {
    const base2 = points[i]
    const others = points.filter((p, index) => index !== i)
    if (getSlope(base1, base2) === getSlope(...others)) {
      if (getLen(base1, base2) !== getLen(...others)) return false
      let base3 = others[0]
      let base4 = others[1]
      if (getLen(base1, others[0]) > getLen(base1, others[1])) {
        base3 = others[1]
        base4 = others[0]
      }

      const s1 = getSlope(base1, base2)
      const s2 = getSlope(base1, base3)
      const s3 = getSlope(base2, base4)

      if (Math.abs(s1) === Infinity) {
        if (s2 !== 0 || s3 !== 0) return false
      } else if (s1 === 0) {
        if (Math.abs(s2) !== Infinity || Math.abs(s3) !== Infinity) return false
      } else {
        if (getSlope2(base1, base2, base1, base3) !== -1) return false
        if (getSlope2(base1, base2, base2, base4) !== - 1) return false
      }

      if (getLen(base1, base2) !== getLen(base1, base3)) return false
      if (getLen(base1, base2) !== getLen(base2, base4)) return false
      return true
    }
  }
  return false
}

// Test case
// p1: [1,0]
// p2: [-1,0]
// p3: [0,1]
// p4: [0,-1]
