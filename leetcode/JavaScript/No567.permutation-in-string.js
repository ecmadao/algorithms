/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given two strings s1 and s2, write a function to return true if s2 contains the permutation of s1.
 * In other words, one of the first string's permutations is the substring of the second string.
 *
 * Example:
 * Input:s1 = "ab" s2 = "eidbaooo"
 * Output:True
 * Explanation: s2 contains one permutation of s1 ("ba").
 *w
 * Input:s1= "ab" s2 = "eidboaoo"
 * Output: False
 *
 * Note:
 * - The input strings only contain lower case letters.
 * - The length of both given strings is in range [1, 10,000].
 */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  const set = new Set(s1.split(''));
  const tmp = {};
  for (const letter of s1) {
    tmp[letter] = (tmp[letter] || 0) + 1;
  }

  let start = 0;
  let end = 0;
  let cache = Object.assign({}, tmp);

  while (end < s2.length) {
    const letter = s2[end];
    if (!set.has(letter)) {
      start = end + 1;
      end += 1;
      start = end;
      cache = Object.assign({}, tmp);
      continue;
    }

    if (!cache[letter]) {
      const index = s2.indexOf(letter, start);
      let tmpIndex = start;
      while (tmpIndex < index) {
        cache[s2[tmpIndex]] = (cache[s2[tmpIndex]] || 0) + 1;
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
      return true;
    }
  }
  return false;
};
