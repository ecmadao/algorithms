/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Some people will make friend requests. The list of their ages is given and ages[i] is the age of the ith person.
 * Person A will NOT friend request person B (B != A) if any of the following conditions are true:
 * 1. age[B] <= 0.5 * age[A] + 7
 * 2. age[B] > age[A]
 * 3. age[B] > 100 && age[A] < 100
 * Otherwise, A will friend request B.
 *
 * Note that if A requests B, B does not necessarily request A.
 * Also, people will not friend request themselves.
 * How many total friend requests are made?
 *
 * Example 1:
 * Input: [16,16]
 * Output: 2
 * Explanation: 2 people friend request each other.
 *
 * Example 2:
 * Input: [16,17,18]
 * Output: 2
 * Explanation: Friend requests are made 17 -> 16, 18 -> 17.
 *
 * Example 3:
 * Input: [20,30,100,110,120]
 * Output: 3
 * Explanation: Friend requests are made 110 -> 100, 120 -> 110, 120 -> 100.
 *
 * Notes:
 * 1. 1 <= ages.length <= 20000.
 * 2. 1 <= ages[i] <= 120.
 *
 * 人们会互相发送好友请求，现在给定一个包含有他们年龄的数组，ages[i] 表示第 i 个人的年龄。
 * 当满足以下条件时，A 不能给 B（A、B不为同一人）发送好友请求：
 * 1. age[B] <= 0.5 * age[A] + 7
 * 2. age[B] > age[A]
 * 3. age[B] > 100 && age[A] < 100
 * 否则，A 可以给 B 发送好友请求。
 *
 * 注意如果 A 向 B 发出了请求，不等于 B 也一定会向 A 发出请求。而且，人们不会给自己发送好友请求。
 * 求总共会发出多少份好友请求?
 */

/**
 * @param {number[]} ages
 * @return {number}
 */
var numFriendRequests_1 = function(ages) {
  ages.sort((age1, age2) => age2 - age1)

  let i = 0
  let count = 0
  while (i < ages.length - 1) {
    const age = ages[i]

    let j = i + 1
    while (j < ages.length) {
      if (ages[j] <= age * 0.5 + 7) break
      j += 1
    }
    const num = j - i - 1
    count += num

    while (i < ages.length && ages[i] === ages[i + 1]) { i += 1; count += num }
    i += 1
  }
  return count
}

/**
 * @param {number[]} ages
 * @return {number}
 */
var numFriendRequests_2 = function(ages) {
  let max = -Infinity
  let min = Infinity

  const dict = ages.reduce((map, age) => {
    max = Math.max(age, max)
    min = Math.min(age, min)
    map[age] = (map[age] || 0) + 1
    return map
  }, {})

  let count = 0
  for (let age = max; age >= min; age -= 1) {
    if (!dict[age]) continue
    if (age > 0.5 * age + 7) count += dict[age] * (dict[age] - 1)

    let i = age - 1
    while (i > 0.5 * age + 7 && i >= min) {
      if (dict[i]) count += (dict[i] * dict[age])
      i -= 1
    }
  }
  return count
}
