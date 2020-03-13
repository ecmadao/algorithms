/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * On a single threaded CPU, we execute some functions.  Each function has a unique id between 0 and N-1.
 * We store logs in timestamp order that describe when a function is entered or exited.
 * Each log is a string with this format: "{function_id}:{"start" | "end"}:{timestamp}".
 * For example, "0:start:3" means the function with id 0 started at the beginning of timestamp 3.
 * "1:end:2" means the function with id 1 ended at the end of timestamp 2.
 *
 * A function's exclusive time is the number of units of time spent in this function.
 * Note that this does not include any recursive calls to child functions.
 * The CPU is single threaded which means that only one function is being executed at a given time unit.
 * Return the exclusive time of each function, sorted by their function id.
 *
 * Example 1:
 * Input:
 * n = 2
 * logs = ["0:start:0","1:start:2","1:end:5","0:end:6"]
 * Output: [3, 4]
 * Explanation:
 * Function 0 starts at the beginning of time 0, then it executes 2 units of time and reaches the end of time 1.
 * Now function 1 starts at the beginning of time 2, executes 4 units of time and ends at time 5.
 * Function 0 is running again at the beginning of time 6, and also ends at the end of time 6, thus executing for 1 unit of time.
 * So function 0 spends 2 + 1 = 3 units of total time executing, and function 1 spends 4 units of total time executing.
 *
 * Note:
 * 1 <= n <= 100
 * Two functions won't start or end at the same time.
 * Functions will always log when they exit.
 *
 * 给出一个非抢占单线程CPU的 n 个函数运行日志，找到函数的独占时间。
 * 每个函数都有一个唯一的 Id，从 0 到 n-1，函数可能会递归调用或者被其他函数调用。
 * 日志是具有以下格式的字符串：function_id：start_or_end：timestamp。例如："0:start:0" 表示函数 0 从 0 时刻开始运行。"0:end:0" 表示函数 0 在 0 时刻结束。
 * 函数的独占时间定义是在该方法中花费的时间，调用其他函数花费的时间不算该函数的独占时间。你需要根据函数的 Id 有序地返回每个函数的独占时间。
 */

/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function(n, logs) {
  const queue = []
  const res = []

  for (const log of logs) {
    const [fid, tag, time] = log.split(':')
    if (tag === 'end') {
      const [id, start, used] = queue.pop()

      const thistime = Number(time) - start + 1
      res[id] = (res[id] || 0) + (thistime - used)
      if (queue.length) queue[queue.length - 1][2] += thistime
    } else {
      queue.push([Number(fid), Number(time), 0])
    }
  }
  return res
}

