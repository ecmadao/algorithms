/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * 有个内含单词的超大文本文件，给定任意两个单词，找出在这个文件中这两个单词的最短距离(相隔单词数)。如果寻找过程在这个文件中会重复多次，而每次寻找的单词不同，你能对此优化吗?
 *
 * 示例：
 * 输入：words = ["I","am","a","student","from","a","university","in","a","city"], word1 = "a", word2 = "student"
 * 输出：1
 *
 * 提示：
 * words.length <= 100000
 */

/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var findClosest = function(words, word1, word2) {
  let i = 0
  let j = 0
  let res = Infinity
  const q1 = []
  const q2 = []

  for (let i = 0; i < words.length; i += 1) {
    if (words[i] === word1) {
      q1.push(i)
    } else if (words[i] === word2) {
      q2.push(i)
    }
  }

  while (i < q1.length && j < q2.length) {
    if (q1[i] < q2[j]) {
      while (i + 1 < q1.length && q1[i + 1] < q2[j]) i += 1
      res = Math.min(res, Math.abs(q1[i] - q2[j]))
      i += 1
    } else {
      while (j + 1 < q2.length && q2[j + 1] < q1[i]) j += 1
      res = Math.min(res, Math.abs(q1[i] - q2[j]))
      j += 1
    }
    if (res === 1) break
  }
  return res
}
