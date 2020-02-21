/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a digit string, return all possible letter combinations that the number could represent.
 * A mapping of digit to letters (just like on the telephone buttons) is given below.
 *
 * Example:
 * Input:Digit string "23"
 * Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
 *
 * 输出一串数字组成的 String，返回其在九宫格键盘上所代表字母的全部可能的排列组合
 */

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  }

  const results = []
  if (!digits) return results
  const generate = (index, prefix) => {
    if (index >= digits.length) {
      results.push(prefix)
      return
    }
    for (const letter of map[digits[index]]) {
      generate(index + 1, prefix + letter)
    }
  }
  generate(0, '')
  return results
}
