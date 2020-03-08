/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * 给定一个字符串，编写一个函数判定其是否为某个回文串的排列之一。
 * 回文串是指正反两个方向都一样的单词或短语。排列是指字母的重新排列。
 * 回文串不一定是字典当中的单词。
 *
 * 示例1：
 * 输入："tactcoa"
 * 输出：true（排列有"tacocat"、"atcocta"，等等）
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
  let odd = 0
  const map = {}
  for (const str of s) {
    map[str] = (map[str] || 0) + 1
  }
  for (const count of Object.values(map)) {
    if (count % 2 === 1) {
      if (odd) return false
      odd += 1
    }
  }
  return true
}
