/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * A conveyor belt has packages that must be shipped from one port to another within D days.
 * The i-th package on the conveyor belt has a weight of weights[i].
 * Each day, we load the ship with packages on the conveyor belt (in the order given by weights). We may not load more weight than the maximum weight capacity of the ship.
 * Return the least weight capacity of the ship that will result in all the packages on the conveyor belt being shipped within D days.
 *
 * Example 1:
 * Input: weights = [1,2,3,4,5,6,7,8,9,10], D = 5
 * Output: 15
 * Explanation:
 * A ship capacity of 15 is the minimum to ship all the packages in 5 days like this:
 * 1st day: 1, 2, 3, 4, 5
 * 2nd day: 6, 7
 * 3rd day: 8
 * 4th day: 9
 * 5th day: 10
 * Note that the cargo must be shipped in the order given, so using a ship of capacity 14 and splitting the packages into parts like (2, 3, 4, 5), (1, 6, 7), (8), (9), (10) is not allowed. 
 *
 * Example 2:
 * Input: weights = [3,2,2,4,1,4], D = 3
 * Output: 6
 * Explanation:
 * A ship capacity of 6 is the minimum to ship all the packages in 3 days like this:
 * 1st day: 3, 2
 * 2nd day: 2, 4
 * 3rd day: 1, 4
 *
 * Example 3:
 * Input: weights = [1,2,3,1,1], D = 4
 * Output: 3
 * Explanation:
 * 1st day: 1
 * 2nd day: 2
 * 3rd day: 3
 * 4th day: 1, 1
 *
 * Note:
 * 1 <= D <= weights.length <= 50000
 * 1 <= weights[i] <= 500
 *
 * 传送带上的包裹必须在 D 天内从一个港口运送到另一个港口。
 * 传送带上的第 i 个包裹的重量为 weights[i]。每一天，我们都会按给出重量的顺序往传送带上装载包裹。我们装载的重量不会超过船的最大运载重量。
 * 返回能在 D 天内将传送带上的所有包裹送达的船的最低运载能力。
 */

/**
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 *
 * 二分搜索，timeout
 */
var shipWithinDays_1 = function(weights, D) {
  let max = 0
  const sum = weights.reduce((list, weight) => {
    max = Math.max(max, weight)
    list.push(weight + list[list.length - 1])
    return list
  }, [0])

  let minCapacity = Math.max(
    max,
    Math.ceil(sum[sum.length - 1] / D)
  )

  const search = (start, end, target, base) => {
    let i = start
    let j = end
    while (i <= j) {
      const mid = Math.floor((i + j) / 2)
      const num = sum[mid] - base
      if (num > target) {
        j -= 1
      } else {
        i += 1
      }
    }
    return i
  }

  while (minCapacity < sum[sum.length - 1]) {
    let i = 1
    let d = D
    while (d && i < sum.length) {
      const j = search(i, sum.length - 1, minCapacity, sum[i - 1])
      if (i === j) break
      i = j
      d -= 1
    }
    if (d >= 0 && i >= sum.length) return minCapacity
    minCapacity += 1
  }
  return minCapacity
}

/**
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 *
 * 暴力搜索
 */
var shipWithinDays_2 = function(weights, D) {
  const sum = weights.reduce((list, weight) => {
    list.push(weight + list[list.length - 1])
    return list
  }, [0])

  let minCapacity = Math.ceil(sum[sum.length - 1] / D)

  while (minCapacity < sum[sum.length - 1]) {
    let i = 1
    let d = D
    while (d && i < sum.length) {
      if (sum[i] - sum[i - 1] > minCapacity) break
      const base = sum[i - 1]
      while (sum[i] - base <= minCapacity) i += 1
      d -= 1
    }
    if (d >= 0 && i >= sum.length) return minCapacity
    minCapacity += 1
  }
  return minCapacity
}
