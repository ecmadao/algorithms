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
 */

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
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

// Test case
console.log(findAnagrams("cbaebabacd", "abc")); // [0, 6]
console.log(findAnagrams("abab", "ab")); // [0, 1, 2]
console.log(findAnagrams("abaacbabc", "abc")); // [3, 4, 6]
