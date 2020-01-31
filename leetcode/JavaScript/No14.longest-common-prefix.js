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
* @param {string[]} strs
* @return {string}
*/
var longestCommonPrefix = function(strs) {
  if (!strs.length) return ''

  let i = 0
  while (true) {
    const next = strs.map(str => str[i])
    if (new Set(next).size !== 1) break
    if (next[0] === undefined) break
    i += 1
  }

  return strs[0].slice(0, i)
}
