/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given two strings A and B of lowercase letters, return true if and only if we can swap two letters in A so that the result equals B.
 * 
 * Example 1:
 * Input: A = "ab", B = "ba"
 * Output: true
 * 
 * Example 2:
 * Input: A = "ab", B = "ab"
 * Output: false
 * 
 * Example 3:
 * Input: A = "aa", B = "aa"
 * Output: true
 * 
 * Example 4:
 * Input: A = "aaaaaaabc", B = "aaaaaaacb"
 * Output: true
 * 
 * Example 5:
 * Input: A = "", B = "aa"
 * Output: false
 * 
 * Note:
 * 1. 0 <= A.length <= 20000
 * 2. 0 <= B.length <= 20000
 * 3. A and B consist only of lowercase letters.
 * 
 * 给定两个由小写字母构成的字符串 A 和 B ，只要我们可以通过交换 A 中的两个字母得到与 B 相等的结果，就返回 true ；否则返回 false 。
 */

/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {
  const indexes = []
  for (let i = 0; i < A.length; i += 1) {
    if (A[i] !== B[i]) {
      indexes.push(i)
    }
    if (indexes.length > 2) return false
  }
  if (indexes.length === 1) return false
  if (indexes.length === 0) return new Set(A.split('')).size < A.length
  return A[indexes[0]] === B[indexes[1]] && A[indexes[1]] === B[indexes[0]]
};