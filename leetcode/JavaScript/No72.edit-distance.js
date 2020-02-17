/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * Given two words word1 and word2, find the minimum number of operations required to convert word1 to word2.
 * You have the following 3 operations permitted on a word:
 * 1. Insert a character
 * 2. Delete a character
 * 3. Replace a character
 *
 * Example:
 * Input: word1 = "horse", word2 = "ros"
 * Output:
 * Explanation:
 * horse -> rorse (replace 'h' with 'r')
 * rorse -> rose (remove 'r')
 * rose -> ros (remove 'e')
 *
 * Input: word1 = "intention", word2 = "execution"
 * Output: 5
 * Explanation:
 * intention -> inention (remove 't')
 * inention -> enention (replace 'i' with 'e')
 * enention -> exention (replace 'n' with 'x')
 * exention -> exection (replace 'n' with 'c')
 * exection -> execution (insert 'u')
 *
 * Wiki:
 * 编辑距离：https://zh.wikipedia.org/wiki/%E7%B7%A8%E8%BC%AF%E8%B7%9D%E9%9B%A2
 * 莱文斯坦距离：https://zh.wikipedia.org/wiki/%E8%90%8A%E6%96%87%E6%96%AF%E5%9D%A6%E8%B7%9D%E9%9B%A2
 *
 * 详解一道腾讯面试题：编辑距离
 * https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247484484&amp;idx=1&amp;sn=74594297022c84952162a68b7f739133&source=41#wechat_redirect
 */

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  // 如果 word1, word2 某个为空，则编辑距离一定是非空字符的长度
  const dp = Array.from({ length: word1.length + 1 }, (v, i) => {
    return Array.from({ length: word2.length + 1 }, (_, j) => {
      if (j === 0) return i
      if (i === 0) return j
      return Infinity
    })
  })

  for (let i = 1; i <= word1.length; i += 1) {
    for (let j = 1; j <= word2.length; j += 1) {
      const w1 = word1[i - 1]
      const w2 = word2[j - 1]

      if (w1 === w2) {
        dp[i][j] = dp[i - 1][j - 1]
      } else {
        dp[i][j] = Math.min(
          dp[i][j],
          dp[i - 1][j] + 1, // 删除当前字符
          dp[i][j - 1] + 1, // 插入一个新字符
          dp[i - 1][j - 1] + 1 // 替换当前字符
        )
      }
    }
  }

  return dp[word1.length][word2.length]
}
