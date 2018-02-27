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

var NUMBER_MAP = {
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z']
};

/**
* @param {string} digits
* @return {string[]}
*/
var letterCombinations = function(digits) {
  var temp = [];
  var combines = [];
  for (var i = 0; i < digits.length; i += 1) {
    var number = digits[i];
    var strs = NUMBER_MAP[number];
    if (!strs) continue;

    temp = [];
    if (!combines.length) {
      combines.push(...strs);
      continue;
    }
    for (var j = 0; j < strs.length; j += 1) {
      var str = strs[j];
      temp.push(...combines.map(item => item + str));
    }
    combines = [...temp];
  }
  return combines;
};