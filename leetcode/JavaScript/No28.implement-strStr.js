/*
 * Difficulty:
 * Easy
 *
 * Desc:
 * Implement strStr().
 * Returns the index of the first occurrence of needle in haystack,
 * or -1 if needle is not part of haystack.
 *
 * Example:
 * haystack -> 'aaa', needle -> 'aa'
 * result -> 0
 *
 * haystack -> 'b', needle -> 'a'
 * result -> -1
 *
 * 注意审题。要求是 haystack 中完全匹配 needle 的索引
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  var match = new RegExp(needle).exec(haystack);
  return match ? match.index : -1;
};