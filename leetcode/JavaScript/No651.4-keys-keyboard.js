/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Imagine you have a special keyboard with the following keys:
 * 1. Key 1: (A): Print one 'A' on screen.
 * 2. Key 2: (Ctrl-A): Select the whole screen.
 * 3. Key 3: (Ctrl-C): Copy selection to buffer.
 * 4. Key 4: (Ctrl-V): Print buffer on screen appending it after what has already been printed.
 *
 * Now, you can only press the keyboard for N times (with the above four keys), find out the maximum numbers of 'A' you can print on screen.
 *
 * Example 1:
 * Input: N = 3
 * Output: 3
 * Explanation:
 * We can at most get 3 A's on screen by pressing following key sequence:
 * A, A, A
 *
 * Example 2:
 * Input: N = 7
 * Output: 9
 * Explanation:
 * We can at most get 9 A's on screen by pressing following key sequence:
 * A, A, A, Ctrl A, Ctrl C, Ctrl V, Ctrl V
 *
 * Note:
 * 1. 1 <= N <= 50
 * 2. Answers will be in the range of 32-bit signed integer
 *
 * 假设你有一个特殊的键盘包含下面的按键：
 * 1. Key 1: (A)：在屏幕上打印一个 'A'。
 * 2. Key 2: (Ctrl-A)：选中整个屏幕。
 * 3. Key 3: (Ctrl-C)：复制选中区域到缓冲区。
 * 4. Key 4: (Ctrl-V)：将缓冲区内容输出到上次输入的结束位置，并显示在屏幕上。
 * 现在，你只可以按键 N 次（使用上述四种按键），请问屏幕上最多可以显示几个 'A'呢
 */

/**
 * @param {number} N
 * @return {number}
 * https://mp.weixin.qq.com/s/DeanOw0acBNU1ZoI4cE8nw
 */
var maxA = function(N) {
  const dp = [0]

  for (let n = 1; n <= N; n += 1) {
    dp[n] = dp[n - 1] + 1

    for (let i = 2; i < n; i += 1) {
      dp[n] = Math.max(dp[n], dp[i - 2] * (n - i + 1))
    }
  }
  return dp[N]
}
