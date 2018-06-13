/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a string and a string dictionary, find the longest string in the dictionary that can be formed by deleting some characters of the given string.
 * If there are more than one possible results, return the longest word with the smallest lexicographical order. If there is no possible result, return the empty string.
 *
 * Example:
 * Input:
 * s = "abpcplea", d = ["ale","apple","monkey","plea"]
 * Output: "apple"
 *
 * Input:
 * s = "abpcplea", d = ["a","b","c"]
 * Output: "a"
 *
 * Note:
 * - All the strings in the input will only contain lower-case letters.
 * - The size of the dictionary won't exceed 1,000.
 * - The length of all the strings in the input won't exceed 1,000.
 */

const check = (raw, target) => {
  if (target.length === 1) {
    return new RegExp(target).test(raw);
  }

  if (raw.length > target.length) return false;
  let rawStart = 0;
  let targetStart = 0;

  while (rawStart < raw.length && targetStart < target.length) {
    if (target[targetStart] === raw[rawStart]) {
      targetStart += 1;
      rawStart += 1;
    } else {
      targetStart += 1;
    }
  }
  return rawStart === raw.length;
};

var findLongestWord = function(s, d) {
  d.sort((a, b) => {
    if (a.length > b.length) {
      return -1;
    } else if (a.length === b.length) {
      return a < b ? -1 : 1;
    }
    return 1;
  });

  for (const word of d) {
    if (check(word, s)) return word;
  }
  return '';
}

// Test case
console.log(findLongestWord('abpcplea', ["abe", "ale","apple","monkey","plea"]));
console.log(findLongestWord('abpcplea', ["a","b","c"]));
console.log(findLongestWord("bab", ["ba","ab","a","b"]));
