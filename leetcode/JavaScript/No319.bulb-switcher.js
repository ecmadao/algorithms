/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * There are n bulbs that are initially off. You first turn on all the bulbs.
 * Then, you turn off every second bulb. On the third round, you toggle every third bulb (turning on if it's off or turning off if it's on).
 * For the i-th round, you toggle every i bulb. For the n-th round, you only toggle the last bulb. Find how many bulbs are on after n rounds.
 *
 * Example:
 * Input: 3
 * Output: 1
 * Explanation:
 * At first, the three bulbs are [off, off, off].
 * After first round, the three bulbs are [on, on, on].
 * After second round, the three bulbs are [on, off, on].
 * After third round, the three bulbs are [on, off, off].
 * So you should return 1, because there is only one bulb is on.
 *
 * 初始时有 n 个灯泡关闭。
 * 第 1 轮，你打开所有的灯泡。
 * 第 2 轮，每两个灯泡你关闭一次。
 * 第 3 轮，每三个灯泡切换一次开关（如果关闭则开启，如果开启则关闭）。
 * 第 i 轮，每 i 个灯泡切换一次开关。
 * 对于第 n 轮，你只切换最后一个灯泡的开关。
 * 找出 n 轮后有多少个亮着的灯泡。
 */

/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function(n) {
  let res = 0
  for (let i = 1; i <= n; i += 1) {
    if (i <= 3) {
      if (i === 1) res += 1
      continue
    }
    if (Math.sqrt(i) % 1 === 0) res += 1
  }
  return res
};

// [0,0,0,0,0,0,0,0,0,0]
// [1,1,1,1,1,1,1,1,1,1] - 1
// [1,0,1,0,1,0,1,0,1,0] - 2
// [1,0,0,0,1,1,1,0,0,0] - 3
// [1,0,0,1,1,1,1,1,0,0] - 4
// [1,0,0,1,0,1,1,1,0,1] - 5
// [1,0,0,1,0,0,1,1,0,1] - 6
// [1,0,0,1,0,0,0,1,0,1] - 7
// [1,0,0,1,0,0,0,0,0,1] - 8
// [1,0,0,1,0,0,0,0,1,1] - 9
// [1,0,0,1,0,0,0,0,1,0]
