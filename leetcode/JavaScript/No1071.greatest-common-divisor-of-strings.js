/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * For strings S and T, we say "T divides S" if and only if S = T + ... + T  (T concatenated with itself 1 or more times)
 * Return the largest string X such that X divides str1 and X divides str2.
 *
 * Example 1:
 * Input: str1 = "ABCABC", str2 = "ABC"
 * Output: "ABC"
 *
 * Example 2:
 * Input: str1 = "ABABAB", str2 = "ABAB"
 * Output: "AB"
 *
 * Example 3:
 * Input: str1 = "LEET", str2 = "CODE"
 * Output: ""
 *
 * Note:
 * 1 <= str1.length <= 1000
 * 1 <= str2.length <= 1000
 * str1[i] and str2[i] are English uppercase letters.
 *
 * 对于字符串 S 和 T，只有在 S = T + ... + T（T 与自身连接 1 次或多次）时，我们才认定 “T 能除尽 S”。
 * 返回最长字符串 X，要求满足 X 能除尽 str1 且 X 能除尽 str2
 */

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 *
 * 暴力
 */
var gcdOfStrings_1 = function(str1, str2) {
  if (!str1 || !str2) return ''
  const short = str1.length <= str2.length ? str1 : str2
  const long = str2.length >= str1.length ? str2 : str1

  let i = short.length
  while (i >= 1) {
    if (short.length % i !== 0 || long.length % i !== 0) {
      i -= 1
      continue
    }
    const prefix = short.slice(0, i)
    const set1 = new Set(short.split(prefix))
    if (!(set1.size === 1 && set1.has(''))) {
      i -= 1
      continue
    }
    const set2 = new Set(long.split(prefix))
    if (!(set2.size === 1 && set2.has(''))) {
      i -= 1
      continue
    }
    return prefix
  }

  return ''
}

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 *
 * https://leetcode-cn.com/problems/greatest-common-divisor-of-strings/solution/zi-fu-chuan-de-zui-da-gong-yin-zi-by-leetcode-solu/
 * 如果它们有公因子 abc，那么 str1 就是 m 个 abc 的重复，str2 是 n 个 abc 的重复，连起来就是 m + n 个 abc, m + n 个 abc 跟 n + m 个 abc 是一样的。
 * 所以如果 str1 + str2 === str2 + str1 就意味着有解
 */
var gcdOfStrings_2 = function(str1, str2) {
  if (!str1 || !str2) return ''
  if (str1 + str2 !== str2 + str1) return ''

  // 求两数最大公约数
  const gcd = (a, b) => b === 0 ? a : gcd(b, a % b)
  return str1.slice(0, gcd(str1.length, str2.length))
}
