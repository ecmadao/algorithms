/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given two strings S and T, return if they are equal when both are typed into empty text editors.
 * # means a backspace character.
 *
 * Example:
 * Input: S = "ab#c", T = "ad#c"
 * Output: true
 * Explanation: Both S and T become "ac".
 *
 * Input: S = "ab##", T = "c#d#"
 * Output: true
 * Explanation: Both S and T become "".
 *
 * Input: S = "a##c", T = "#a#c"
 * Output: true
 * Explanation: Both S and T become "c".
 *
 * Input: S = "a#c", T = "b"
 * Output: false
 * Explanation: S becomes "c" while T becomes "b".
 *
 * Note:
 * - 1 <= S.length <= 200
 * - 1 <= T.length <= 200
 * - S and T only contain lowercase letters and '#' characters.
 *
 * Follow up:
 * Can you solve it in O(N) time and O(1) space?
 */

/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
  let s = S.length - 1;
  let t = T.length - 1;

  const back = (str, index) => {
    let count = 0;
    let i = index;
    while (i >= 0 && (str[i] === '#' || count)) {
      if (str[i] === '#') {
        count += 1;
      } else {
        count -= 1;
      }
      i -= 1;
    }
    return i;
  }

  while (s >= 0 || t >= 0) {
    s = back(S, s);
    t = back(T, t);
    if (S[s] !== T[t]) return false;
    s -= 1;
    t -= 1;
  }
  return true;
};

// Test case
console.log(backspaceCompare("ab##", "c#d#")); // true
console.log(backspaceCompare("a##c", "#a#c")); // true
console.log(backspaceCompare("ab#c", "ad#c")); // true
console.log(backspaceCompare("a#c", "ac#")); // false
