/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * We have jobs: difficulty[i] is the difficulty of the ith job, and profit[i] is the profit of the ith job.
 * Now we have some workers. worker[i] is the ability of the ith worker, which means that this worker can only complete a job with difficulty at most worker[i]. 
 * Every worker can be assigned at most one job, but one job can be completed multiple times.
 * For example, if 3 people attempt the same job that pays $1, then the total profit will be $3.  If a worker cannot complete any job, his profit is $0.
 * What is the most profit we can make?
 *
 * Example 1:
 * Input: difficulty = [2,4,6,8,10], profit = [10,20,30,40,50], worker = [4,5,6,7]
 * Output: 100
 * Explanation: Workers are assigned jobs of difficulty [4,4,6,6] and they get profit of [20,20,30,30] seperately.
 *
 * Notes:
 * 1. 1 <= difficulty.length = profit.length <= 10000
 * 2. 1 <= worker.length <= 10000
 * 3. difficulty[i], profit[i], worker[i]  are in range [1, 10^5]
 *
 * 有一些工作：difficulty[i] 表示第 i 个工作的难度，profit[i] 表示第 i 个工作的收益。
 * 现在我们有一些工人。worker[i] 是第 i 个工人的能力，即该工人只能完成难度小于等于 worker[i] 的工作。
 * 每一个工人都最多只能安排一个工作，但是一个工作可以完成多次。
 * 举个例子，如果 3 个工人都尝试完成一份报酬为1的同样工作，那么总收益为 $3。如果一个工人不能完成任何工作，他的收益为 $0 。
 * 我们能得到的最大收益是多少？
 */

/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function(difficulty, profit, worker) {
  const diffs = difficulty.map((d, i) => ({ d, i })).sort((d1, d2) => d1.d - d2.d)
  worker.sort((w1, w2) => w1 - w2)

  let i = 0
  let j = 0
  let totalProfit = 0
  let maxProfit = 0

  while (j < worker.length) {
    const w = worker[j]
    while (i < diffs.length && diffs[i].d <= w) {
      maxProfit = Math.max(maxProfit, profit[diffs[i].i])
      i += 1
    }
    if (i === diffs.length || diffs[i].d > w) i -= 1
    if (i >= 0) totalProfit += maxProfit
    if (i < 0) i = 0
    j += 1
  }

  return totalProfit
}
