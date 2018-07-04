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
  const set = new Set(p.split(''));
  const tmp = {};
  for (const letter of p) {
    tmp[letter] = (tmp[letter] || 0) + 1;
  }

  const result = [];
  let start = 0;
  let end = 0;
  let cache = Object.assign({}, tmp);

  while (end < s.length) {
    const letter = s[end];
    if (!set.has(letter)) {
      start = end + 1;
      end += 1;
      start = end;
      cache = Object.assign({}, tmp);
      continue;
    }

    if (!cache[letter]) {
      const index = s.indexOf(letter, start);
      let tmpIndex = start;
      while (tmpIndex < index) {
        cache[s[tmpIndex]] = (cache[s[tmpIndex]] || 0) + 1;
        tmpIndex += 1;
      }
      start = index + 1;
      end += 1;
    } else {
      cache[letter] -= 1;
      if (!cache[letter]) delete cache[letter];
      end += 1;
    }

    if (Object.keys(cache).length === 0) {
      result.push(end - p.length);
    }
  }
  return result;
};

// Test case
console.log(findAnagrams("cbaebabacd", "abc")); // [0, 6]
console.log(findAnagrams("abab", "ab")); // [0, 1, 2]
console.log(findAnagrams("abaacbabc", "abc")); // [3, 4, 6]