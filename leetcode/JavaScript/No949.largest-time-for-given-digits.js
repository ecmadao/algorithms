/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given an array of 4 digits, return the largest 24 hour time that can be made.
 * The smallest 24 hour time is 00:00, and the largest is 23:59.
 * Starting from 00:00, a time is larger if more time has elapsed since midnight.
 * 
 * Return the answer as a string of length 5.  If no valid time can be made, return an empty string.
 *
 * Example 1:
 * Input: [1,2,3,4]
 * Output: "23:41"
 * 
 * Example 2:
 * Input: [5,5,5,5]
 * Output: ""
 * 
 * Note:
 * 1. A.length == 4
 * 2. 0 <= A[i] <= 9
 * 
 * 给定一个由 4 位数字组成的数组，返回可以设置的符合 24 小时制的最大时间。
 * 最小的 24 小时制时间是 00:00，而最大的是 23:59。从 00:00 （午夜）开始算起，过得越久，时间越大。
 * 以长度为 5 的字符串返回答案。如果不能确定有效时间，则返回空字符串。
 */

/**
 * @param {number[]} A
 * @return {string}
 */
var largestTimeFromDigits = function(A) {
  let ans = -1
  for (let i = 0; i < 4; i += 1) {
    if (A[i] > 2) continue
    for (let j = 0; j < 4; j += 1) {
      if ((A[i] === 2 && A[j] > 3) || j === i) continue
      
      for (let k = 0; k < 4; k += 1) {
        if (A[k] > 5 || k === i || k === j) continue
        
        const l = 6 - i - j - k
        const hours = 10 * A[i] + A[j]
        const mins = 10 * A[k] + A[l]
        if (hours < 24 && mins < 60) {
          ans = Math.max(ans, hours * 60 + mins)
        }
      }
    }
  }
  if (ans < 0) return ''
  const h = `${Math.floor(ans / 60)}`
  const m = `${ans % 60}`
  return `${h.length < 2 ? `0${h}` : h}:${m.length < 2 ? `0${m}` : m}`
}
