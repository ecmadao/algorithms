/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a char array representing tasks CPU need to do.
 * It contains capital letters A to Z where different letters represent different tasks.
 * Tasks could be done without original order.
 * Each task could be done in one interval.
 * For each interval, CPU could finish one task or just be idle.
 *
 * However, there is a non-negative cooling interval n that means between two same tasks,
 * there must be at least n intervals that CPU are doing different tasks or just be idle.
 * You need to return the least number of intervals the CPU will take to finish all the given tasks.
 *
 * Example:
 * Input: tasks = ["A","A","A","B","B","B"], n = 2
 * Output: 8
 * Explanation: A -> B -> idle -> A -> B -> idle -> A -> B.
 *
 * Note:
 * 1. The number of tasks is in the range [1, 10000].
 * 2. The integer n is in the range [0, 100].
 *
 * 已知一个任务队列，里面的任务用从 A 到 Z 的大写字母表示。现在依次执行任务，相同的任务之间必须有 n 的间隔，
 * 在这个间隔内，需要执行其他类型的任务，或者直接闲置。要求求出全部任务执行完成所需的最低执行次数（闲置也算一次执行）
 */

/**
 * 思路：
 * 相同的任务之间必须有 n 的任务间隔，则对于 count 个任务，需要执行 count * (n + 1) 次
 * 找出队列中出现次数最多的任务，出现次数为 max
 * 假设有 m 种任务出现次数都是 max，则执行完这 max 个任务后可以消费掉 total = (max - 1) * (n + 1) + m 个任务
 * 其中，提取 m 的原因是，对于每种任务的最后一个任务，已经不需要在意 “必须间隔 n 个任务” 这样的条件
 * 最后，如果 total < tasks.length，则证明间隔 n 很小，那样的话各类任务其实可以连续执行，
 * 而最低执行次数为 tasks.length，因此最终返回 Math.max(tasks.length, total)
 * /

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
  const tmp = {};
  const set = new Set(tasks);
  for (let i = 0; i < tasks.length; i += 1) {
    const task = tasks[i];
    if (tmp[task] === undefined) tmp[task] = 0;
    tmp[task] += 1;
  }

  let max = 0;
  const numTmp = {};
  const keys = Object.keys(tmp);
  for (let i = 0; i < keys.length; i += 1) {
    const num = tmp[keys[i]];
    if (num > max) max = num;
    if (!numTmp[num]) numTmp[num] = 0;
    numTmp[num] += 1;
  }
  const count = (max - 1) * (n + 1) + numTmp[max];
  return Math.max(count, tasks.length);
};
