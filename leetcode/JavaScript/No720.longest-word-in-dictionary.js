/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given a list of strings words representing an English Dictionary,
 * find the longest word in words that can be built one character at a time by other words in words.
 * If there is more than one possible answer, return the longest word with the smallest lexicographical order.
 * If there is no answer, return the empty string.
 *
 * Example:
 * Input: words = ["w","wo","wor","worl", "world"]
 * Output: "world"
 * Explanation: The word "world" can be built one character at a time by "w", "wo", "wor", and "worl".
 *
 * Input: words = ["a", "banana", "app", "appl", "ap", "apply", "apple"]
 * Output: "apple"
 * Explanation:
 * Both "apply" and "apple" can be built from other words in the dictionary. However, "apple" is lexicographically smaller than "apply".
 *
 * Note:
 * - All the strings in the input will only contain lowercase letters.
 * - The length of words will be in the range [1, 1000].
 * - The length of words[i] will be in the range [1, 30].
 */

function Node(val = '') {
  this.val = val;
  this.child = {};
}

/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
  const head = new Node();
  let node;

  for (const word of words) {
    node = head;
    for (const letter of word) {
      if (!node.child[letter]) node.child[letter] = new Node();
      node = node.child[letter];
    }
    node.val = word;
  }

  let results = [];
  for (const word of words) {
    node = head;
    let result = word;

    for (const letter of word) {
      node = node.child[letter];
      if (!node.val) {
        result = '';
        break;
      }
    }

    if (!results.length || results[0].length < result.length) {
      results = [result];
    } else if (results[0].length === result.length) {
      results.push(result);
    }
  }

  return results.sort()[0] || '';
};
