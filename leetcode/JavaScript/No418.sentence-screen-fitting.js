/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a rows x cols screen and a sentence represented by a list of non-empty words, find how many times the given sentence can be fitted on the screen.
 *
 * Note:
 * 1. A word cannot be split into two lines.
 * 2. The order of words in the sentence must remain unchanged.
 * 3. Two consecutive words in a line must be separated by a single space.
 * 4. Total words in the sentence won't exceed 100.
 * 5. Length of each word is greater than 0 and won't exceed 10.
 * 6. 1 ≤ rows, cols ≤ 20,000.
 *
 * Example 1:
 * Input:
 * rows = 2, cols = 8, sentence = ["hello", "world"]
 * Output:
 * 1
 * Explanation:
 * hello---
 * world---
 * The character '-' signifies an empty space on the screen.
 *
 * Example 2:
 * Input:
 * rows = 3, cols = 6, sentence = ["a", "bcd", "e"]
 * Output:
 * 2
 * Explanation:
 * a-bcd-
 * e-a---
 * bcd-e-
 * The character '-' signifies an empty space on the screen.
 *
 * Example 3:
 * Input:
 * rows = 4, cols = 5, sentence = ["I", "had", "apple", "pie"]
 * Output:
 * 1
 * Explanation:
 * I-had
 * apple
 * pie-I
 * had--
 * The character '-' signifies an empty space on the screen.
 *
 * 给你一个 rows x cols 的屏幕和一个用 非空 的单词列表组成的句子，请你计算出给定句子可以在屏幕上完整显示的次数。
 * 注意：
 * 1. 一个单词不能拆分成两行。
 * 2. 单词在句子中的顺序必须保持不变。
 * 3. 在一行中 的两个连续单词必须用一个空格符分隔。
 * 4. 句子中的单词总量不会超过 100。
 * 5. 每个单词的长度大于 0 且不会超过 10。
 * 6. 1 ≤ rows, cols ≤ 20,000
 */

/**
 * @param {string[]} sentence
 * @param {number} rows
 * @param {number} cols
 * @return {number}
 */
var wordsTyping = function(sentence, rows, cols) {
  const dp = []
  let count = 0

  for (let i = 0; i < rows; i += 1) {
    let wordIndex = dp[i - 1] || 0

    let colIndex = 0
    while (colIndex + sentence[wordIndex].length <= cols) {
      colIndex += sentence[wordIndex].length + 1
      wordIndex += 1
      if (wordIndex >= sentence.length) {
        count += 1
        wordIndex = 0
      }
    }
    dp[i] = wordIndex
  }

  return count
}
