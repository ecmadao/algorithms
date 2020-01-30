/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given an input string , reverse the string word by word.
 *
 * Example:
 * Input:  ["t","h","e"," ","s","k","y"," ","i","s"," ","b","l","u","e"]
 * Output: ["b","l","u","e"," ","i","s"," ","s","k","y"," ","t","h","e"]
 *
 * Note:
 * 1. A word is defined as a sequence of non-space characters.
 * 2. The input string does not contain leading or trailing spaces.
 * 3. The words are always separated by a single space.
 *
 * Follow up:
 * Could you do it in-place without allocating extra space?
 *
 * 注意是原地翻转
 */

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseWords_1 = function(s) {
  let j = 0
  let insertIndex = s.length

  while (j < insertIndex) {
    if (s[j] !== ' ') {
      j += 1
      continue
    }

    const strs = s.splice(0, j)
    insertIndex -= strs.length
    s.splice(insertIndex, 0, ...strs)

    const space = s.splice(0, 1)
    insertIndex -= 1
    s.splice(insertIndex, 0, ...space)

    j = 0
  }
}

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseWords_2 = function(s) {
  s.reverse()

  const reverse = (i, j) => {
    while (i < j) {
      const tmp = s[i]
      s[i] = s[j]
      s[j] = tmp
      i += 1
      j -= 1
    }
  }

  let i = 0
  let j = 0
  while (j < s.length) {
    if (j + 1 === s.length || s[j + 1] === ' ') {
      reverse(i, j)
      i = j + 1
    } else if (s[j] === ' ') {
      i = j + 1
    }
    j += 1
  }
}

reverseWords_2(
  ["t", "h", "e", " ", "s", "k", "y", " ", "i", "s", " ", "b", "l", "u", "e"]
)
