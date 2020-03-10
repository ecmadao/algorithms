/*
 * Difficulty:
 * Hard
 *
 * Desc:
 * You want to schedule a list of jobs in d days. Jobs are dependent (i.e To work on the i-th job, you have to finish all the jobs j where 0 <= j < i).
 * You have to finish at least one task every day. The difficulty of a job schedule is the sum of difficulties of each day of the d days. The difficulty of a day is the maximum difficulty of a job done in that day.
 * Given an array of integers jobDifficulty and an integer d. The difficulty of the i-th job is jobDifficulty[i].
 * Return the minimum difficulty of a job schedule. If you cannot find a schedule for the jobs return -1.
 *
 * Example 1:
 * Input: jobDifficulty = [6,5,4,3,2,1], d = 2
 * Output: 7
 * Explanation:
 * First day you can finish the first 5 jobs, total difficulty = 6.
 * Second day you can finish the last job, total difficulty = 1.
 * The difficulty of the schedule = 6 + 1 = 7
 *
 * Example 2:
 * Input: jobDifficulty = [9,9,9], d = 4
 * Output: -1
 * Explanation:
 * If you finish a job per day you will still have a free day. you cannot find a schedule for the given jobs.
 *
 * Example 3:
 * Input: jobDifficulty = [1,1,1], d = 3
 * Output: 3
 * Explanation:
 * The schedule is one job per day. total difficulty will be 3.
 *
 * Example 4:
 * Input: jobDifficulty = [7,1,7,1,7,1], d = 3
 * Output: 15
 *
 * Example 5:
 * Input: jobDifficulty = [11,111,22,222,33,333,44,444], d = 6
 * Output: 843
 *
 * Constraints:
 * 1. 1 <= jobDifficulty.length <= 300
 * 2. 0 <= jobDifficulty[i] <= 1000
 * 3. 1 <= d <= 10
 *
 * 你需要制定一份 d 天的工作计划表。工作之间存在依赖，要想执行第 i 项工作，你必须完成全部 j 项工作（ 0 <= j < i）。
 * 你每天 至少 需要完成一项任务。工作计划的总难度是这 d 天每一天的难度之和，而一天的工作难度是当天应该完成工作的最大难度。
 * 给你一个整数数组 jobDifficulty 和一个整数 d，分别代表工作难度和需要计划的天数。第 i 项工作的难度是 jobDifficulty[i]。
 * 返回整个工作计划的 最小难度 。如果无法制定工作计划，则返回 -1
 */

/**
 * @param {number[]} jobDifficulty
 * @param {number} d
 * @return {number}
 */
var minDifficulty_1 = function(jobDifficulty, d) {
  if (jobDifficulty.length < d) return -1

  const cache = {}
  const dfs = (index, count) => {
    if (!count || index >= jobDifficulty.length) return 0
    const key = index * 100 + count
    if (cache[key] !== undefined) return cache[key]

    let min = Infinity
    if (count === 1) {
      min = Math.max(...jobDifficulty.slice(index))
    } else {
      let tmpMax = -Infinity
      for (let i = index; i < jobDifficulty.length - (count - 1); i += 1) {
        tmpMax = Math.max(tmpMax, jobDifficulty[i])
        min = Math.min(min, tmpMax + dfs(i + 1, count - 1))
      }
    }

    cache[key] = min
    return min
  }

  return dfs(0, d)
}

/**
 * @param {number[]} jobDifficulty
 * @param {number} d
 * @return {number}
 */
var minDifficulty_2 = function(jobDifficulty, d) {
  if (jobDifficulty.length < d) return -1

  // 储存区间 [i, j] 内的最大值
  const max = []
  for (let i = 0; i < jobDifficulty.length; i += 1) {
    max[i] = []
    let tmpMax = -Infinity
    for (let j = i; j < jobDifficulty.length; j += 1) {
      tmpMax = Math.max(tmpMax, jobDifficulty[j])
      max[i][j] = tmpMax
    }
  }

  const dp = Array.from({ length: d + 1 }, (_, i) => {
    return Array.from({ length: jobDifficulty.length + 1 }, (_, j) => Infinity)
  })
  dp[0][0] = 0
  for (let i = 1; i <= d; i += 1) {
    for (let j = i; j <= jobDifficulty.length; j += 1) {
      for (let k = i - 1; k < j; k += 1) {
        dp[i][j] = Math.min(
          dp[i][j],
          dp[i - 1][k] + max[k][j - 1]
        )
      }
    }
  }

  return dp[d][jobDifficulty.length]
}
