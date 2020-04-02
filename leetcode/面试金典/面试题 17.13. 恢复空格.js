/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * 哦，不！你不小心把一个长篇文章中的空格、标点都删掉了，并且大写也弄成了小写。
 * 像句子 "I reset the computer. It still didn’t boot!" 已经变成了 "iresetthecomputeritstilldidntboot"。
 * 在处理标点符号和大小写之前，你得先把它断成词语。当然了，你有一本厚厚的词典 dictionary，不过，有些词没在词典里。
 * 假设文章用 sentence 表示，设计一个算法，把文章断开，要求未识别的字符最少，返回未识别的字符数。
 * 注意：本题相对原题稍作改动，只需返回未识别的字符数
 *
 * 示例：
 * 输入：
 * dictionary = ["looked","just","like","her","brother"]
 * sentence = "jesslookedjustliketimherbrother"
 * 输出： 7
 * 解释： 断句后为"jess looked just like tim her brother"，共7个未识别字符。
 *
 * 提示：
 * 1. 0 <= len(sentence) <= 1000
 * 2. dictionary 中总字符数不超过 150000。
 * 3. 你可以认为 dictionary 和 sentence 中只包含小写字母。
 */

/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {number}
 */
var respace = function(dictionary, sentence) {
  const dp = []
  const set = new Set(dictionary)

  for (let i = 0; i <= sentence.length; i += 1) {
    dp[i] = (dp[i - 1] || 0) + 1
    for (let j = 0; j <= i; j += 1) {
      if (set.has(sentence.slice(j, i))) {
        dp[i] = Math.min(dp[i], dp[j])
      }
    }
  }
  return dp[sentence.length] - 1
}
