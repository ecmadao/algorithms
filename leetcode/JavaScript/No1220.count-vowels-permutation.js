/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * Given an integer n, your task is to count how many strings of length n can be formed under the following rules:
 * 1. Each character is a lower case vowel ('a', 'e', 'i', 'o', 'u')
 * 2. Each vowel 'a' may only be followed by an 'e'.
 * 3. Each vowel 'e' may only be followed by an 'a' or an 'i'.
 * 4. Each vowel 'i' may not be followed by another 'i'.
 * 5. Each vowel 'o' may only be followed by an 'i' or a 'u'.
 * 6. Each vowel 'u' may only be followed by an 'a'.
 *
 * Since the answer may be too large, return it modulo 10^9 + 7.
 *
 * Example 1:
 * Input: n = 1
 * Output: 5
 * Explanation: All possible strings are: "a", "e", "i" , "o" and "u".
 *
 * Example 2:
 * Input: n = 2
 * Output: 10
 * Explanation: All possible strings are: "ae", "ea", "ei", "ia", "ie", "io", "iu", "oi", "ou" and "ua".
 *
 * Example 3:
 * Input: n = 5
 * Output: 68
 *
 * Constraints:
 * 1. 1 <= n <= 2 * 10^4
 *
 * 给你一个整数 n，请你帮忙统计一下我们可以按下述规则形成多少个长度为 n 的字符串：
 * 1. 字符串中的每个字符都应当是小写元音字母（'a', 'e', 'i', 'o', 'u'）
 * 2. 每个元音 'a' 后面都只能跟着 'e'
 * 3. 每个元音 'e' 后面只能跟着 'a' 或者是 'i'
 * 4. 每个元音 'i' 后面 不能 再跟着另一个 'i'
 * 5. 每个元音 'o' 后面只能跟着 'i' 或者是 'u'
 * 6. 每个元音 'u' 后面只能跟着 'a'
 *
 * 由于答案可能会很大，所以请你返回 模 10^9 + 7 之后的结果。
 */

/**
 * @param {number} n
 * @return {number}
 */
var countVowelPermutation = function(n) {
  let dp = [1, 1, 1, 1, 1]
  const base = Math.pow(10, 9) + 7
  const sum = nums => nums.reduce((n1, n2) => n1 + n2, 0)

  for (let i = 1; i < n; i += 1) {
    let tmp = []
    for (let j = 0; j < 5; j += 1) {
      let num
      switch (j) {
        case 0:
          num = dp[1]
          break
        case 1:
          num = dp[0] + dp[2]
          break
        case 2:
          num = sum(dp) - dp[2]
          break
        case 3:
          num = dp[2] + dp[4]
          break
        case 4:
          num = dp[0]
          break
      }
      tmp[j] = num % base
    }
    dp = tmp
  }

  return sum(dp) % base
}
