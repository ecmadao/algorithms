/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * We are given hours, a list of the number of hours worked per day for a given employee.
 * A day is considered to be a tiring day if and only if the number of hours worked is (strictly) greater than 8.
 * A well-performing interval is an interval of days for which the number of tiring days is strictly larger than the number of non-tiring days.
 * Return the length of the longest well-performing interval.
 *
 * Example 1:
 * Input: hours = [9,9,6,0,6,6,9]
 * Output: 3
 * Explanation: The longest well-performing interval is [9,9,6].
 *
 * Constraints:
 * 1 <= hours.length <= 10000
 * 0 <= hours[i] <= 16
 *
 * 给你一份工作时间表 hours，上面记录着某一位员工每天的工作小时数。
 * 我们认为当员工一天中的工作小时数大于 8 小时的时候，那么这一天就是「劳累的一天」。
 * 所谓「表现良好的时间段」，意味在这段时间内，「劳累的天数」是严格 大于「不劳累的天数」。
 * 请你返回「表现良好时间段」的最大长度。
 */

/**
 * @param {number[]} hours
 * @return {number}
 */
var longestWPI_1 = function(hours) {
  let max = 0

  const queue = hours.reduce((list, hour) => {
    const num = hour > 8 ? 1 : -1
    list.push(list[list.length - 1] + num)
    return list
  }, [0])

  for (let i = 1; i < queue.length; i += 1) {
    for (let j = 0; j < i - max; j += 1) {
      if (queue[i] - queue[j] > 0) {
        max = Math.max(max, i - j)
        break
      }
    }
  }
  return max
}

/**
 * @param {number[]} hours
 * @return {number}
 * https://leetcode.com/problems/longest-well-performing-interval/discuss/335163/O(N)-Without-Hashmap.-Generalized-ProblemandSolution%3A-Find-Longest-Subarray-With-Sum-greater-K.
 */
var longestWPI_2 = function(hours) {
  const queue = hours.reduce((list, hour) => {
    const num = hour > 8 ? 1 : -1
    list.push(list[list.length - 1] + num)
    return list
  }, [0])

  const stack = [0]
  for (let i = 1; i < queue.length; i += 1) {
    if (queue[i] < queue[stack[stack.length - 1]]) stack.push(i)
  }

  let max = 0
  let i = queue.length - 1
  while (i > max) {
    while (stack.length && queue[i] > queue[stack[stack.length - 1]]) {
      max = Math.max(max, i - stack[stack.length - 1])
      stack.pop()
    }
    i -= 1
  }

  return max
}
