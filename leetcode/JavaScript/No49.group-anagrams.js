/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given an array of strings, group anagrams together.
 *
 * Example:
 * given: ["eat", "tea", "tan", "ate", "nat", "bat"],
 * Return:
 * [
 *    ["ate", "eat","tea"],
 *    ["nat","tan"],
 *    ["bat"]
 * ]
 *
 * Note:
 * All inputs will be in lower-case.
 *
 * 将一个数组中相等的字符串合在一起。只要字符串长度一样且包含的字母也一样也认为是相等的
 */

var getStringKey = function(str) {
  return str.split('').sort((a, b) => a > b).join('');
};

/**
* @param {string[]} strs
* @return {string[][]}
*/
var groupAnagrams = function(strs) {
  var group = {};

  for (var i = 0; i < strs.length; i += 1) {
    var str = strs[i];
    var key = getStringKey(str);
    if (!group[key]) {
      group[key] = [str];
    } else {
      group[key].push(str);
    }
  }
  var results = Object.keys(group).map(key => group[key]);
  return results;
};