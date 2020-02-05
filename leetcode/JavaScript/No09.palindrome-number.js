/*
 * Difficulty:
 * Easy
 *
 * Desc:
 * Determine whether an integer is a palindrome. Do this without extra space.
 *
 * Hints:
 * Could negative integers be palindromes? (ie, -1)
 * If you are thinking of converting the integer to string, note the restriction of using extra space.
 * You could also try reversing an integer. However, if you have solved the problem "Reverse Integer", you know that the reversed integer might overflow. How would you handle such case?
 * There is a more generic way of solving this problem.
 *
 * Example 1:
 * Input: 121
 * Output: true
 *
 * Example 2:
 * Input: -121
 * Output: false
 * Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
 *
 * Example 3:
 * Input: 10
 * Output: false
 * Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 *
 * Follow up:
 * Coud you solve it without converting the integer to a string?
 * 能不将整数转为字符串来解决这个问题吗？
 *
 * 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数
 * 其本身想考核的一些问题，比如 32 位 int 类型数字最大值等
 */

 /**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) return false

  x = x.toString()
  var i = 0
  var j = x.length - 1

  while(i < j) {
    if(x[i] !== x[j]) return false
    i += 1
    j -= 1
  }
  return true
}


 /**
 * @param {number} x
 * @return {boolean}
 * 对于数字，每次比较其首位和末尾
 * 例如 1221，先比较千位和个位的 1，再比较百位和十位的 2
 */
var isPalindrome_2 = function(x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false

  let divider = 1
  while (Math.floor(x / divider) >= 10) divider *= 10
  while (x) {
    if (Math.floor(x / divider) !== x % 10) return false
    x = Math.floor((x % divider) / 10)
    divider /= 100
  }
  return true
}
