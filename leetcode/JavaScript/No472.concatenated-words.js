/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a list of words (without duplicates), please write a program that returns all concatenated words in the given list of words.
 * A concatenated word is defined as a string that is comprised entirely of at least two shorter words in the given array.
 *
 * Example:
 * Input: ["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"]
 * Output: ["catsdogcats","dogcatsdog","ratcatdogcat"]
 * Explanation:
 * "catsdogcats" can be concatenated by "cats", "dog" and "cats";
 * "dogcatsdog" can be concatenated by "dog", "cats" and "dog";
 * "ratcatdogcat" can be concatenated by "rat", "cat", "dog" and "cat".
 *
 * Note:
 * 1. The number of elements of the given array will not exceed 10,000
 * 2. The length sum of elements in the given array will not exceed 600,000.
 * 3. All the input string will only include lower case letters.
 * 4. The returned elements order does not matter.
 *
 * 给定一个不含重复单词的列表，编写一个程序，返回给定单词列表中所有的连接词。
 * 连接词的定义为：一个字符串完全是由至少两个给定数组中的单词组成的
 */

/*
 * ==================================== Solution 1 ====================================
 * 动态规划
 */

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findAllConcatenatedWordsInADict_1 = function(words) {
  const dict = new Set(words)
  const cache = {}

  const checkWord = (word) => {
    if (!word) return 0
    const dp = []
    for (let i = 1; i <= word.length; i += 1) {
      dp[i] = cache[word.slice(0, i)]
      if (dp[i] !== undefined) continue

      dp[i] = 0
      for (let j = i - 1; j >= 0; j -= 1) {
        if (!dict.has(word.slice(j, i))) continue
        if (j === 0 && !dp[i]) {
          dp[i] = 1
        } else if (dp[j]) {
          dp[i] = Math.max(dp[i], dp[j] + 1)
        }
        if (dp[i] >= 2) break
      }
      cache[word.slice(0, i)] = dp[i]
    }
    return dp[word.length]
  }

  const result = []
  for (const word of words) {
      const count = checkWord(word)
      if (count >= 2) result.push(word)
  }
  return result
}

/*
 * ==================================== Solution 2 ====================================
 * 前缀字典树
 */

var TreeNode = function(val) {
  this.val = val
  this.stop = false
  this.children = {}
}

const insert = (word, tree) => {
  let node = tree

  for (const str of word) {
    if (!node.children[str]) {
      node.children[str] = new TreeNode(str)
    }
    node = node.children[str]
  }
  node.stop = true
}

const search = (word, index, tree) => {
  if (index >= word.length) return 0
  let node = tree

  let count = -1

  for (let i = index; i < word.length; i += 1) {
    const str = word[i]
    if (!node.children[str]) break
    node = node.children[str]

    if (node.stop) {
      const result = search(word, i + 1, tree)
      if (result !== -1) {
        count = Math.max(count, result + 1)
      }
    }
    if (count >= 2) break
  }
  return count
}

/**
* @param {string[]} words
* @return {string[]}
*/
var findAllConcatenatedWordsInADict_2 = function(words) {
  const tree = new TreeNode(null)

  for (const word of words) {
    insert(word, tree)
  }

  const result = []
  for (const word of words) {
    const count = search(word, 0, tree)
    if (count >= 2) result.push(word)
  }
  return result
}
