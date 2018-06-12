/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given a string S, we can transform every letter individually to be lowercase or uppercase to create another string.
 * Return a list of all possible strings we could create.
 *
 * Example:
 * Input: S = "a1b2"
 * Output: ["a1b2", "a1B2", "A1b2", "A1B2"]
 *
 * Input: S = "3z4"
 * Output: ["3z4", "3Z4"]
 *
 * Input: S = "12345"
 * Output: ["12345"]
 *
 * Note:
 * - S will be a string with length at most 12.
 * - S will consist only of letters or digits.
 */


const isLetter = str => /[A-Za-z]/.test(str);

/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(S) {
  const build = (index, availables) => {
    const s = S[index];
    if (!s) return availables;

    let newAvailables = [];
    if (isLetter(s)) {
      const lower = s.toLowerCase();
      const upper = s.toUpperCase();
      newAvailables = availables.reduce((pre, cur) => {
        pre.push(`${lower}${cur}`, `${upper}${cur}`);
        return pre;
      }, []);
    } else {
      newAvailables = availables.map(available => `${s}${available}`);
    }
    if (index === 0) return newAvailables;
    return build(index - 1, newAvailables);
  };
  return build(S.length - 1, ['']);
};
