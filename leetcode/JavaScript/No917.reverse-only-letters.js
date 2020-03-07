/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given a string S, return the "reversed" string where all characters that are not a letter stay in the same place,
 * and all letters reverse their positions.
 *
 * Example 1:
 * Input: "ab-cd"
 * Output: "dc-ba"
 *
 * Example 2:
 * Input: "a-bC-dEf-ghIj"
 * Output: "j-Ih-gfE-dCba"
 *
 * Example 3:
 * Input: "Test1ng-Leet=code-Q!"
 * Output: "Qedo1ct-eeLg=ntse-T!"
 *
 * Note:
 * 1. S.length <= 100
 * 2. 33 <= S[i].ASCIIcode <= 122
 * 3. S doesn't contain \ or "
 *
 * 给定一个字符串 S，返回 “反转后的” 字符串，其中不是字母的字符都保留在原地，而所有字母的位置发生反转
 */

/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
  const list = S.split('')
  let i = 0
  let j = list.length - 1

  const isLetter = (str) => {
    const code = str.charCodeAt()
    return (code >= 97 && code <= 122) || (code >= 65 && code <= 90)
  }

  while (i < j) {
    while (i < list.length && !isLetter(list[i])) i += 1
    while (j >= 0 && !isLetter(list[j])) j -= 1
    if (i >= j) break

    const tmp = list[i]
    list[i] = list[j]
    list[j] = tmp
    i += 1
    j -= 1
  }
  return list.join('')
}
