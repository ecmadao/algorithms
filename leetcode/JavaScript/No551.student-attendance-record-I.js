/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * You are given a string representing an attendance record for a student. The record only contains the following three characters:
 * 1. 'A' : Absent.
 * 2. 'L' : Late.
 * 3. 'P' : Present.
 * A student could be rewarded if his attendance record doesn't contain more than one 'A' (absent) or more than two continuous 'L' (late).
 * You need to return whether the student could be rewarded according to his attendance record.
 *
 * Example 1:
 * Input: "PPALLP"
 * Output: True
 *
 * Example 2:
 * Input: "PPALLL"
 * Output: False
 *
 * 给定一个字符串来代表一个学生的出勤记录，这个记录仅包含以下三个字符：
 * 1. 'A' : Absent，缺勤
 * 2. 'L' : Late，迟到
 * 3. 'P' : Present，到场
 * 如果一个学生的出勤记录中不超过一个'A'(缺勤)并且不超过两个连续的'L'(迟到),那么这个学生会被奖赏。
 * 你需要根据这个学生的出勤记录判断他是否会被奖赏
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
  let hasA = false
  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === 'L' && s[i] === s[i - 1] && s[i] === s[i - 2]) return false
    if (s[i] === 'A') {
      if (hasA) return false
      hasA = true
    }
  }
  return true
}
