/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a string s, partition s such that every substring of the partition is a palindrome.
 * Return all possible palindrome partitioning of s.
 *
 * Example:
 * Given s = "aab",
 * Return
 * [
 *  ["aa","b"],
 *  ["a","a","b"]
 * ]
 */

const isPalindrome = (s) => {
  if (s.length <= 1) return true;
  let i = 0;
  let j = s.length - 1;

  while (i < j) {
    if (s[i] !== s[j]) return false;
    i += 1;
    j -= 1;
  }
  return true;
};

/**
* @param {string} s
* @return {string[][]}
*/
var partition = function(s) {
  const results = [];
  const findStrPartition = (str, arr = []) => {
    for (let i = 0; i < str.length; i += 1) {
      const string = str.slice(0, i + 1);
      if (isPalindrome(string)) {
        arr.push(string);
        const last = str.slice(i + 1);
        if (!last) {
          results.push([...arr]);
          arr.pop();
        } else {
          findStrPartition(last, arr);
          arr.pop();
        }
      }
    }
  };
  findStrPartition(s, []);
  return results;
};
