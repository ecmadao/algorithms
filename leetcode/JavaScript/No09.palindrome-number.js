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
 * 判断数字是否回文
 * 相当无聊的题目，而且其本身想考核的一些问题，比如 32 位 int 类型数字最大值等，在 js 面前没有意义（js 是 64 位浮点类型）
 */

 /**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  x = x.toString();
  if (x[0] === '-') {
    return false;
  }

  var i = 0;
  var j = x.length - 1;
  var result = true;

  while(i < j) {
    if(x[i] !== x[j]){
      result = false;
    }
    i += 1;
    j -= 1;
  }
  return result;
};