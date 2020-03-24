/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * A string S of lowercase letters is given. Then, we may make any number of moves.
 * In each move, we choose one of the first K letters (starting from the left), remove it, and place it at the end of the string.
 * Return the lexicographically smallest string we could have after any number of moves.
 *
 * Example 1:
 * Input: S = "cba", K = 1
 * Output: "acb"
 * Explanation:
 * In the first move, we move the 1st character ("c") to the end, obtaining the string "bac".
 * In the second move, we move the 1st character ("b") to the end, obtaining the final result "acb".
 *
 * Example 2:
 * Input: S = "baaca", K = 3
 * Output: "aaabc"
 * Explanation:
 * In the first move, we move the 1st character ("b") to the end, obtaining the string "aacab".
 * In the second move, we move the 3rd character ("c") to the end, obtaining the final result "aaabc".
 *
 * Note:
 * 1. 1 <= K <= S.length <= 1000
 * 2. S consists of lowercase letters only.
 *
 * 给出了一个由小写字母组成的字符串 S。然后，我们可以进行任意次数的移动。
 * 在每次移动中，我们选择前 K 个字母中的一个（从左侧开始），将其从原位置移除，并放置在字符串的末尾。
 * 返回我们在任意次数的移动之后可以拥有的按字典顺序排列的最小字符串。
 */

/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var orderlyQueue = function(S, K) {
  const arr = S.split('')
  if (K > 1) return arr.sort().join('')

  let i = 0
  let min = S
  while (i < arr.length) {
    arr.push(arr.shift())
    if (min > arr.join('')) min = arr.join('')
    i += 1
  }
  return min
}
