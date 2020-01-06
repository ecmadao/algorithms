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

/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(S) {
  const result = []

  const permutation = (s, index) => {
    if (index >= s.length) {
      result.push(s)
      return
    }
    for (let i = index; i < s.length; i += 1) {
      if (/[0-9]/.test(s[i])) return permutation(s, i + 1)
      permutation(s, i + 1)
      permutation(`${s.slice(0, i)}${s[index].toUpperCase()}${s.slice(i + 1)}`, i + 1)
      break
    }
  }

  permutation(S.toLowerCase(), 0)
  return result
}

/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation_2 = function(S) {
  let result = ['']

  for (const s of S) {
    const tmp = []
    if (/[a-zA-Z]/.test(s)) {
      for (const r of result) {
        tmp.push(`${r}${s.toLowerCase()}`)
        tmp.push(`${r}${s.toUpperCase()}`)
      }
    } else {
      for (const r of result) {
        tmp.push(`${r}${s}`)
      }
    }
    result = tmp
  }
  return result
}
