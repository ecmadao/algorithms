/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * On a plane there are n points with integer coordinates points[i] = [xi, yi]. Your task is to find the minimum time in seconds to visit all points.
 * You can move according to the next rules:
 * 1. In one second always you can either move vertically, horizontally by one unit or diagonally (it means to move one unit vertically and one unit horizontally in one second).
 * 2. You have to visit the points in the same order as they appear in the array.
 *
 * Example 1:
 * Input: points = [[1,1],[3,4],[-1,0]]
 * Output: 7
 * Explanation: One optimal path is [1,1] -> [2,2] -> [3,3] -> [3,4] -> [2,3] -> [1,2] -> [0,1] -> [-1,0]
 * Time from [1,1] to [3,4] = 3 seconds
 * Time from [3,4] to [-1,0] = 4 seconds
 * Total time = 7 seconds
 *
 * Example 2:
 * Input: points = [[3,2],[-2,2]]
 * Output: 5
 *
 * Constraints:
 * 1. points.length == n
 * 2. 1 <= n <= 100
 * 3. points[i].length == 2
 * 4. -1000 <= points[i][0], points[i][1] <= 1000
 *
 * 平面上有 n 个点，点的位置用整数坐标表示 points[i] = [xi, yi]。请你计算访问所有这些点需要的最小时间（以秒为单位）。
 * 你可以按照下面的规则在平面上移动：
 * 1. 每一秒沿水平或者竖直方向移动一个单位长度，或者跨过对角线（可以看作在一秒内向水平和竖直方向各移动一个单位长度）。
 * 2. 必须按照数组中出现的顺序来访问这些点。
 */

/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
  let res = 0

  for (let i = 0; i < points.length - 1; i += 1) {
    const [x1, y1] = points[i]
    const [x2, y2] = points[i + 1]

    const offsetX = x2 - x1
    const offsetY = y2 - y1

    res += Math.min(
      Math.abs(offsetX), Math.abs(offsetY)
    )

    if (Math.abs(offsetX) <= Math.abs(offsetY)) {
      if (y2 >= y1) {
        res += (y2 - y1 - Math.abs(offsetX))
      } else {
        res += Math.abs(y2 - y1 + Math.abs(offsetX))
      }
    } else {
      if (x2 >= x1) {
        res += (x2 - x1 - Math.abs(offsetY))
      } else {
        res += Math.abs(x2 - x1 + Math.abs(offsetY))
      }
    }
  }
  return res
}
