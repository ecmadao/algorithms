/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given a string S of lowercase letters, a duplicate removal consists of choosing two adjacent and equal letters, and removing them.
 * We repeatedly make duplicate removals on S until we no longer can.
 * Return the final string after all such duplicate removals have been made.
 * It is guaranteed the answer is unique.
 *
 * Example 1:
 * Input: "abbaca"
 * Output: "ca"
 * Explanation:
 * For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move.
 * The result of this move is that the string is "aaca", of which only "aa" is possible, so the final string is "ca".
 *
 * Note:
 * 1. 1 <= S.length <= 20000
 * 2. S consists only of English lowercase letters.
 *
 * 给出由小写字母组成的字符串 S，重复项删除操作会选择两个相邻且相同的字母，并删除它们。
 * 在 S 上反复执行重复项删除操作，直到无法继续删除。
 * 在完成所有重复项删除操作后返回最终的字符串。答案保证唯一。
 */

/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates_1 = function(S) {
  const queue = S.split('')
  let i = 0
  while (i < queue.length) {
    if (queue[i] === queue[i + 1]) {
      queue.splice(i, 2)
      i = Math.max(0, i - 1)
    } else {
      i += 1
    }
  }
  return queue.join('')
}

/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates_2 = function(S) {
  const queue = []
  for (const str of S) {
    if (queue.length && queue[queue.length - 1] === str) {
      queue.pop()
    } else {
      queue.push(str)
    }
  }
  return queue.join('')
}
