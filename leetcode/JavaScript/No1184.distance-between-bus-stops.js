/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * A bus has n stops numbered from 0 to n - 1 that form a circle.
 * We know the distance between all pairs of neighboring stops where distance[i] is the distance between the stops number i and (i + 1) % n.
 * The bus goes along both directions i.e. clockwise and counterclockwise.
 * Return the shortest distance between the given start and destination stops.
 *
 * Example 1:
 * Input: distance = [1,2,3,4], start = 0, destination = 1
 * Output: 1
 * Explanation: Distance between 0 and 1 is 1 or 9, minimum is 1.
 *
 * Example 2:
 * Input: distance = [1,2,3,4], start = 0, destination = 2
 * Output: 3
 * Explanation: Distance between 0 and 2 is 3 or 7, minimum is 3.
 *
 * Example 3:
 * Input: distance = [1,2,3,4], start = 0, destination = 3
 * Output: 4
 * Explanation: Distance between 0 and 3 is 6 or 4, minimum is 4.
 *
 * Constraints:
 * 1. 1 <= n <= 10^4
 * 2. distance.length == n
 * 3. 0 <= start, destination < n
 * 4. 0 <= distance[i] <= 10^4
 *
 * 环形公交路线上有 n 个站，按次序从 0 到 n - 1 进行编号。我们已知每一对相邻公交站之间的距离，distance[i] 表示编号为 i 的车站和编号为 (i + 1) % n 的车站之间的距离。
 * 环线上的公交车都可以按顺时针和逆时针的方向行驶。
 * 返回乘客从出发点 start 到目的地 destination 之间的最短距离
 */

/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function(distance, start, destination) {
  if (start === distance) return 0

  const sum = distance.reduce((list, n) => {
    list.push(n + list[list.length - 1])
    return list
  }, [0])

  const i = start < destination ? start : destination
  const j = start < destination ? destination : start
  return Math.min(
    sum[j] - sum[i],
    (sum[sum.length - 1] - sum[j]) + (sum[i] - sum[0])
  )
}

// [1,2,3,4], 0 -> 2
// [0,1,3,6,10]
// sum[2] - sum[0]
// (sum[sum.length - 1] - sum[2]) + (sum[0] - sum[start])

// [1,2,3,4,5], 1 -> 3
// [0,1,3,6,10,15]
// sum[3] - sum[1] = 6 - 1 = 5
// (sum[sum.length - 1] - sum[3]) + (sum[1] - sum[start]) = 9 + 1 = 10
