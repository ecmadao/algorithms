/*
 * Difficulty:
 * Easy
 *
 * Desc:
 * Write a function to find the longest common prefix string amongst an array of strings.
 *
 * Example:
 * strings -> ['abc', 'ab', 'abced']
 * longest-prefix -> 'ab'
 *
 * strings -> ['', 'ab', 'abced']
 * longest-prefix -> ''
 *
 * 从一些字符串中找到最长的公共前缀
 */

/**
 * @param {*} strs 字符串组成的数组
 * @param {*} i 获取各个字符串指定索引上的元素
 *
 * 首先根据 i 获取各个字符串指定索引上的元素，组成 Array
 * 然后检查其和原数组长度是否相等，如果不等，则说明索引已经超出某些字符串的长度
 * 之后将元素转为 Set，如果各个字符串在 i 上的字母一样，则 set 长度应该为 1
 */
var checkStrs = function(strs, i) {
  var targetStrs = strs.map(str => str[i]).filter(str => str);
  if (targetStrs.length !== strs.length) return false;
  var set = new Set(targetStrs);
  return set.size === 1;
};

/**
* @param {string[]} strs
* @return {string}
*/
var longestCommonPrefix = function(strs) {
  var result = '';
  if (!strs.length) return result;
  var start = strs[0];
  var i = 0;

  while(checkStrs(strs, i)) {
    result += start[i];
    i += 1;
  }

  return result;
};