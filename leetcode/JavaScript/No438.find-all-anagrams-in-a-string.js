/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.
 * Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.
 * The order of output does not matter.
 *
 * Example:
 * Input:
 * s: "cbaebabacd" p: "abc"
 * Output:
 * [0, 6]
 * Explanation:
 * The substring with start index = 0 is "cba", which is an anagram of "abc".
 * The substring with start index = 6 is "bac", which is an anagram of "abc".
 *
 * Input:
 * s: "abab" p: "ab"
 * Output:
 * [0, 1, 2]
 * Explanation:
 * The substring with start index = 0 is "ab", which is an anagram of "ab".
 * The substring with start index = 1 is "ba", which is an anagram of "ab".
 * The substring with start index = 2 is "ab", which is an anagram of "ab".
 *
 * 给定一个字符串 s 和一个非空字符串 p，找到 s 中所有是 p 的字母异位词的子串，返回这些子串的起始索引。
 * 字符串只包含小写英文字母，并且字符串 s 和 p 的长度都不超过 20100
 *
 * 说明：
 * 1. 字母异位词指字母相同，但排列不同的字符串。
 * 2. 不考虑答案输出的顺序
 */

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams_1 = function(s, p) {
  const dict = p.split('').reduce((obj, str) => {
    obj[str] = (obj[str] || 0) + 1
    return obj
  }, {})
  const result = []
  let count = p.length
  let tmp = Object.assign({}, dict)

  for (let i = 0; i < s.length; i += 1) {
    if (tmp[s[i]] === undefined) {
      count = p.length
      tmp = Object.assign({}, dict)
    } else if (tmp[s[i]] === 0) {
      count = p.length
      tmp = Object.assign({}, dict)

      let index = i
      while (index >= 0 && tmp[s[index]]) {
        tmp[s[index]] -= 1
        count -= 1
        index -= 1
      }

      if (count === 0) {
        result.push(i - p.length + 1)
      }
    } else {
      tmp[s[i]] -= 1
      count -=1

      if (count === 0) {
        result.push(i - p.length + 1)
      }
    }
  }

  return result
}


/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 *
 * 滑动窗口
 */
var findAnagrams_2 = function(s, p) {
  if (!s || !p) return []

  let total = p.length
  const dict = p.split('').reduce((d, str) => {
    d[str] = (d[str] || 0) + 1
    return d
  }, {})
  const result = []

  let i = 0
  let j = 0
  let cache = Object.assign({}, dict)

  while (j < s.length) {
    if (cache[s[j]] === undefined) {
      j += 1
      i = j
      total = p.length
      cache = Object.assign({}, dict)
      continue
    }

    if (cache[s[j]] === 0) {
      let index = i
      while (s[index] !== s[j]) {
        total += 1
        cache[s[index]] += 1
        index += 1
      }
      total += 1
      cache[s[index]] += 1
      i = index + 1
    }

    cache[s[j]] -= 1
    total -= 1
    j += 1

    if (total === 0) {
      result.push(i)
      total += 1
      cache[s[i]] += 1
      i += 1
    }
  }
  return result
}

// Test case
console.log(findAnagrams_2("cbaebabacd", "abc")); // [0, 6]
console.log(findAnagrams_2("abab", "ab")); // [0, 1, 2]
console.log(findAnagrams_2("abaacbabc", "abc")); // [3, 4, 6]
