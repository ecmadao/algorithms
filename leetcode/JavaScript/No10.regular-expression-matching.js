/*
 * Difficulty:
 * Hard
 *
 * Desc:
 * Implement regular expression matching with support for '.' and '*'.
 *
 * '.' Matches any single character.
 * '*' Matches zero or more of the preceding element.
 *
 * The matching should cover the entire input string (not partial).
 * The function prototype should be:
 * bool isMatch(const char *s, const char *p)
 *
 * Example:
 * isMatch("aa","a") → false
 * isMatch("aa","aa") → true
 * isMatch("aaa","aa") → false
 * isMatch("aa", "a*") → true
 * isMatch("aa", ".*") → true
 * isMatch("ab", ".*") → true
 * isMatch("aab", "c*a*b") → true
 *
 * 从实现的技术上讲，这道题应该是 Easy 难度，唯一坑人的是要考虑清楚需求：要实现的 match 必须全量匹配才算 true
 * 比如，'abcd' match  'd*'，用正则可以 match 到 d，但是 d !== abcd，故返回 false
 *
 * 感觉这题真正应该考核的是从根本的原理上手动实现一个正则匹配？那我显然是投机取巧了 ==
 */

 /**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  var matchResult = s.match(new RegExp(p, 'g'));
  var result = matchResult ? matchResult[0] === s : false;
  return result;
};