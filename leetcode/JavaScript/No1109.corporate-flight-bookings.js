/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * There are n flights, and they are labeled from 1 to n.
 * We have a list of flight bookings. The i-th booking bookings[i] = [i, j, k] means that we booked k seats from flights labeled i to j inclusive.
 * Return an array answer of length n, representing the number of seats booked on each flight in order of their label.
 *
 * Example 1:
 * Input: bookings = [[1,2,10],[2,3,20],[2,5,25]], n = 5
 * Output: [10,55,45,25,25]
 *
 * Constraints:
 * 1. 1 <= bookings.length <= 20000
 * 2. 1 <= bookings[i][0] <= bookings[i][1] <= n <= 20000
 * 3. 1 <= bookings[i][2] <= 10000
 *
 * 这里有 n 个航班，它们分别从 1 到 n 进行编号。
 * 我们这儿有一份航班预订表，表中第 i 条预订记录 bookings[i] = [i, j, k] 意味着我们在从 i 到 j 的每个航班上预订了 k 个座位。
 * 请你返回一个长度为 n 的数组 answer，按航班编号顺序返回每个航班上预订的座位数。
 */

/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 *
 * 暴力解法
 */
var corpFlightBookings_1 = function(bookings, n) {
  const res = Array.from({ length: n }, (_, i) => 0)

  for (let [i, j, k] of bookings) {
    while (i <= j) {
      res[i - 1] += k
      i += 1
    }
  }
  return res
}

/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 *
 * 区间加法问题
 *
 * 思路
 * [1,4,10], [3,5,20], [5,7,30]
 * [10, 10, 10+20, 10+20, 20+30, 30, 30]
 */
var corpFlightBookings_2 = function(bookings, n) {
  const res = Array.from({ length: n }, (_, i) => 0)

  for (const [i, j, k] of bookings) {
    res[i - 1] += k
    if (j < n) res[j] -= k
  }

  for (let i = 1; i < n; i += 1) res[i] += res[i - 1]
  return res
}
