/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * The i-th person has weight people[i], and each boat can carry a maximum weight of limit.
 * Each boat carries at most 2 people at the same time, provided the sum of the weight of those people is at most limit.
 * Return the minimum number of boats to carry every given person.  (It is guaranteed each person can be carried by a boat.)
 *
 * Example 1:
 * Input: people = [1,2], limit = 3
 * Output: 1
 * Explanation: 1 boat (1, 2)
 *
 * Example 2:
 * Input: people = [3,2,2,1], limit = 3
 * Output: 3
 * Explanation: 3 boats (1, 2), (2) and (3)
 *
 * Example 3:
 * Input: people = [3,5,3,4], limit = 5
 * Output: 4
 * Explanation: 4 boats (3), (3), (4), (5)
 *
 * Note:
 * 1 <= people.length <= 50000
 * 1 <= people[i] <= limit <= 30000
 *
 * 第 i 个人的体重为 people[i]，每艘船可以承载的最大重量为 limit。
 * 每艘船最多可同时载两人，但条件是这些人的重量之和最多为 limit。
 * 返回载到每一个人所需的最小船数。(保证每个人都能被船载)。
 */

/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
  people.sort((p1, p2) => p1 - p2)

  let i = 0
  let j = people.length - 1
  let res = 0

  while (i <= j) {
    if (i === j) {
      res += 1
      break
    }
    if (people[i] + people[j] <= limit) {
      res += 1
      i += 1
      j -= 1
    } else {
      res += 1
      j -= 1
    }
  }
  return res
}
