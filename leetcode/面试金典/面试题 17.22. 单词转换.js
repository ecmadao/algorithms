/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * 给定字典中的两个词，长度相等。写一个方法，把一个词转换成另一个词，但是一次只能改变一个字符。每一步得到的新词都必须能在字典中找到。
 * 编写一个程序，返回一个可能的转换序列。如有多个可能的转换序列，你可以返回任何一个。
 *
 * 示例 1:
 * 输入:
 * beginWord = "hit",
 * endWord = "cog",
 * wordList = ["hot","dot","dog","lot","log","cog"]
 * 输出:
 * ["hit","hot","dot","lot","log","cog"]
 *
 * 示例 2:
 * 输入:
 * beginWord = "hit"
 * endWord = "cog"
 * wordList = ["hot","dot","dog","lot","log"]
 * 输出: []
 * 解释: endWord "cog" 不在字典中，所以不存在符合要求的转换序列。
 */


/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[]}
 */
var findLadders = function(beginWord, endWord, wordList) {
  if (beginWord === endWord) return []

  const letters = []
  const cache = new Set()
  for (const word of wordList) {
    if (word.length !== beginWord.length) continue
    cache.add(word)
    word.split('').reduce((list, letter, index) => {
      if (!list[index]) list[index] = new Set()
      list[index].add(letter)
      return list
    }, letters)
  }
  if (!cache.has(endWord)) return []

  const dfs = (word, queue, used) => {
    queue.push(word)
    if (word === endWord) return [...queue]

    for (let i = 0; i < word.length; i += 1) {
      for (const letter of letters[i].values()) {
        if (letter === word[i]) continue
        const str = word.slice(0, i) + letter + word.slice(i + 1)
        if (!cache.has(str)) continue
        if (used.has(str)) continue
        used.add(str)
        const result = dfs(str, queue, used)
        if (result.length) return result
      }
    }

    queue.pop()

    return []
  }

  return dfs(beginWord, [], new Set())
}
