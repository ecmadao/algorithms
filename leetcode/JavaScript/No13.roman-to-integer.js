/*
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given a roman numeral, convert it to an integer.
 * Input is guaranteed to be within the range from 1 to 3999.
 *
 * Example:
 * roman -> MMMCCCXXXIII
 * num -> 3333
 *
 * 与第 12 题倒过来了，由罗马数字求出 int
 * 比较简单，只要找出罗马数字的规律即可：
 * 从末尾（右端）向左遍历，各个数字的左侧的罗马字母的值，如果小于当前数字，则需要做减法，否则做加法
 */

var ROMAN = {
  M: 1000,
  D: 500,
  C: 100,
  L: 50,
  X: 10,
  V: 5,
  I: 1
};

/**
* @param {string} s
* @return {number}
*/
var romanToInt = function(s) {
  var result = 0;
  var i = s.length - 1;
  while (i >= 0) {
    var string = s[i];
    var num = ROMAN[string];
    result += num;

    var j = i - 1;
    while(j >= 0 && ROMAN[s[j]] < num) {
      result -= ROMAN[s[j]]
      j -= 1;
    }
    i -= i - j;
  }
  console.log(`${s}: ${result}`);
  return result;
};

romanToInt('MDCCC');
romanToInt('MCDXXXVII');
romanToInt('MCD');
romanToInt('MMMCMXCIX');
romanToInt('MMMCCCXXXIII');
romanToInt('M');
romanToInt('MM');
romanToInt('XIX');
romanToInt('I');