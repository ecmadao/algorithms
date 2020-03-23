/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a list of words, each word consists of English lowercase letters.
 * Let's say word1 is a predecessor of word2 if and only if we can add exactly one letter anywhere in word1 to make it equal to word2.  For example, "abc" is a predecessor of "abac".
 * A word chain is a sequence of words [word_1, word_2, ..., word_k] with k >= 1, where word_1 is a predecessor of word_2, word_2 is a predecessor of word_3, and so on.
 * Return the longest possible length of a word chain with words chosen from the given list of words.
 *
 * Example 1:
 * Input: ["a","b","ba","bca","bda","bdca"]
 * Output: 4
 * Explanation: one of the longest word chain is "a","ba","bda","bdca".
 *
 * Note:
 * 1. 1 <= words.length <= 1000
 * 2. 1 <= words[i].length <= 16
 * 3. words[i] only consists of English lowercase letters.
 *
 * 给出一个单词列表，其中每个单词都由小写英文字母组成。
 * 如果我们可以在 word1 的任何地方添加一个字母使其变成 word2，那么我们认为 word1 是 word2 的前身。例如，"abc" 是 "abac" 的前身。
 * 词链是单词 [word_1, word_2, ..., word_k] 组成的序列，k >= 1，其中 word_1 是 word_2 的前身，word_2 是 word_3 的前身，依此类推。
 * 从给定单词列表 words 中选择单词组成词链，返回词链的最长可能长度。
 */

/**
 * @param {string[]} words
 * @return {number}
 *
 * DFS
 */
var longestStrChain_1 = function(words) {
  const map = words.reduce((m, word) => {
    m[word] = (m[word] || 0) + 1
    return m
  }, {})

  const cache = {}
  const dfs = (arr) => {
    if (cache[arr.join('')]) return cache[arr.join('')]
    let len = 1
    for (let i = 0; i <= arr.length; i += 1) {
      for (let j = 97; j <= 122; j += 1) {
        const char = String.fromCharCode(j)
        arr.splice(i, 0, char)
        if (map[arr.join('')]) {
          map[arr.join('')] -= 1
          len = Math.max(len, 1 + dfs(arr))
          map[arr.join('')] += 1
        }
        arr.splice(i, 1)
      }
    }

    cache[arr.join('')] = len
    return len
  }
  return Math.max(
    ...words.map(word => dfs(word.split('')))
  )
}

/**
 * @param {string[]} words
 * @return {number}
 *
 * DP
 */
var longestStrChain_2 = function(words) {
  words.sort((w1, w2) => w1.length - w2.length)

  const cache = {}
  let res = 0

  for (let i = 0; i < words.length; i += 1) {
    const word = words[i]
    if (!cache[word]) cache[word] = 1

    for (let j = 0; j < word.length; j += 1) {
      const newWord = word.slice(0, j) + word.slice(j + 1)
      if (cache[newWord]) {
        cache[word] = Math.max(cache[word], cache[newWord] + 1)
      }
    }
    res = Math.max(res, cache[word])
  }
  return res
};