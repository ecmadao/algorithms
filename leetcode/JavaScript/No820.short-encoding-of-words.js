/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a list of words, we may encode it by writing a reference string S and a list of indexes A.
 * For example, if the list of words is ["time", "me", "bell"], we can write it as S = "time#bell#" and indexes = [0, 2, 5].
 * Then for each index, we will recover the word by reading from the reference string from that index until we reach a "#" character.
 * What is the length of the shortest reference string S possible that encodes the given words?
 *
 * Example:
 * Input: words = ["time", "me", "bell"]
 * Output: 10
 * Explanation: S = "time#bell#" and indexes = [0, 2, 5].
 *
 * Note:
 * 1. 1 <= words.length <= 2000.
 * 2. 1 <= words[i].length <= 7.
 * 3. Each word has only lowercase letters.
 *
 * 给定一个单词列表，我们将这个列表编码成一个索引字符串 S 与一个索引列表 A。
 * 例如，如果这个列表是 ["time", "me", "bell"]，我们就可以将其表示为 S = "time#bell#" 和 indexes = [0, 2, 5]。
 * 对于每一个索引，我们可以通过从字符串 S 中索引的位置开始读取字符串，直到 "#" 结束，来恢复我们之前的单词列表。
 * 那么成功对给定单词列表进行编码的最小字符串长度是多少呢？
 */


/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function(words) {
  const tree = {}
  const queue = new Set()

  for (let i = 0; i < words.length; i += 1) {
    const word = words[i]
    let node = tree

    for (let j = word.length - 1; j >= 0; j -= 1) {
      if (!node[word[j]]) node[word[j]] = { count: 0 }
      node = node[word[j]]
      node.count += 1
    }
    if (node.count === 1) node.count = 0
    node.word = word
    queue.add(node)
  }

  let res = 0
  for (const node of queue.values()) {
    if (!node.count) res += (node.word.length + 1)
  }
  return res
}
