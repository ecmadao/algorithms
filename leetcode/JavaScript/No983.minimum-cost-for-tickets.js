/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * In a country popular for train travel, you have planned some train travelling one year in advance.
 * The days of the year that you will travel is given as an array days.  Each day is an integer from 1 to 365.
 * Train tickets are sold in 3 different ways:
 * 1. a 1-day pass is sold for costs[0] dollars;
 * 2. a 7-day pass is sold for costs[1] dollars;
 * 3. a 30-day pass is sold for costs[2] dollars.
 *
 * The passes allow that many days of consecutive travel.
 * For example, if we get a 7-day pass on day 2, then we can travel for 7 days: day 2, 3, 4, 5, 6, 7, and 8.
 * Return the minimum number of dollars you need to travel every day in the given list of days.
 *
 * Example 1:
 * Input: days = [1,4,6,7,8,20], costs = [2,7,15]
 * Output: 11
 * Explanation:
 * For example, here is one way to buy passes that lets you travel your travel plan:
 * On day 1, you bought a 1-day pass for costs[0] = $2, which covered day 1.
 * On day 3, you bought a 7-day pass for costs[1] = $7, which covered days 3, 4, ..., 9.
 * On day 20, you bought a 1-day pass for costs[0] = $2, which covered day 20.
 * In total you spent $11 and covered all the days of your travel.
 *
 * Example 2:
 * Input: days = [1,2,3,4,5,6,7,8,9,10,30,31], costs = [2,7,15]
 * Output: 17
 * Explanation:
 * For example, here is one way to buy passes that lets you travel your travel plan:
 * On day 1, you bought a 30-day pass for costs[2] = $15 which covered days 1, 2, ..., 30.
 * On day 31, you bought a 1-day pass for costs[0] = $2 which covered day 31.
 * In total you spent $17 and covered all the days of your travel.
 *
 * Note:
 * 1. 1 <= days.length <= 365
 * 2. 1 <= days[i] <= 365
 * 3. days is in strictly increasing order.
 * 4. costs.length == 3
 * 5. 1 <= costs[i] <= 1000
 *
 * 在一个火车旅行很受欢迎的国度，你提前一年计划了一些火车旅行。在接下来的一年里，你要旅行的日子将以一个名为 days 的数组给出。每一项是一个从 1 到 365 的整数。
 * 火车票有三种不同的销售方式：
 * 1. 一张为期一天的通行证售价为 costs[0] 美元；
 * 2. 一张为期七天的通行证售价为 costs[1] 美元；
 * 3. 一张为期三十天的通行证售价为 costs[2] 美元。
 *
 * 通行证允许数天无限制的旅行。
 * 例如，如果我们在第 2 天获得一张为期 7 天的通行证，那么我们可以连着旅行 7 天：第 2 天、第 3 天、第 4 天、第 5 天、第 6 天、第 7 天和第 8 天。
 * 返回你想要完成在给定的列表 days 中列出的每一天的旅行所需要的最低消费
 */

/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
  const cache = new Set(days)
  const dp = [0]

  for (let i = 1; i <= days[days.length - 1]; i += 1) {
    if (!cache.has(i)) {
      dp[i] = dp[i - 1]
      continue
    }
    dp[i] = Math.min(
      (dp[i - 1] || 0) + costs[0],
      (dp[i - 7] || 0) + costs[1],
      (dp[i - 30] || 0) + costs[2]
    )
  }
  return dp[days[days.length - 1]]
}
