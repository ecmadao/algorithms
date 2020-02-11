/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * Given strings S and T, find the minimum (contiguous) substring W of S, so that T is a subsequence of W.
 * If there is no such window in S that covers all characters in T, return the empty string "".
 * If there are multiple such minimum-length windows, return the one with the left-most starting index.
 *
 * Example 1:
 * Input:
 * S = "abcdebdde", T = "bde"
 * Output: "bcde"
 * Explanation:
 * 1. "bcde" is the answer because it occurs before "bdde" which has the same length.
 * 2. "deb" is not a smaller window because the elements of T in the window must occur in order.
 *
 * Note:
 * 1. All the strings in the input will only contain lowercase letters.
 * 2. The length of S will be in the range [1, 20000].
 * 3. The length of T will be in the range [1, 100]
 *
 * 给定字符串 S and T，找出 S 中最短的（连续）子串 W ，使得 T 是 W 的 子序列 。
 * 如果 S 中没有窗口可以包含 T 中的所有字符，返回空字符串 ""。如果有不止一个最短长度的窗口，返回开始位置最靠左的那个
 */

/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
var minWindow = function(S, T) {
  let s = 0
  let t = 0
  let result = ''
  if (T.length > S.length) return result

  while (s < S.length) {
    if (S[s] === T[t]) {
      t += 1

      if (t === T.length) {
        let i = s
        let j = t - 1
        let nextStart = null

        while (j >= 0 && i >= 0) {
          if (S[i] === T[j]) {
            j -= 1
          }
          if (S[i] === T[0] && j >= 0) nextStart = i
          i -= 1
        }
        i += 1
        if (!result || s - i + 1 < result.length) result = S.slice(i, s + 1)
        t = 0
        s = nextStart === null ? i + 1 : nextStart
      }
    }
    s += 1
  }

  return result
}

