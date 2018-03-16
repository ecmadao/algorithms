/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given an integer, convert it to a roman numeral.
 * Input is guaranteed to be within the range from 1 to 3999.
 *
 * Example:
 * num -> 3333
 * roman -> MMMCCCXXXIII
 *
 * 把数字转换为罗马数字
 * 罗马数字 Wiki: https://zh.wikipedia.org/wiki/%E7%BD%97%E9%A9%AC%E6%95%B0%E5%AD%97
 * 1 -> I
 * 2 -> II
 * 3 -> III
 * 4 -> IV
 * 5 -> Ⅴ
 * 6 -> VI
 * 7 -> VII
 * 8 -> VIII
 * 9 -> IX
 * 10 -> X
 * 50 -> L
 * 100 -> C
 * 500 -> D
 * 1000 -> M
 *
 * 基本思路：
 * 把数字每一位分别转换为罗马数字，但要注意：
 * 1. 左减数字必须为一位，比如 8 写成 VIII，而非 IIX
 * 2. 右加数字不可连续超过三位，比如 14 写成 XIV，而非 XIIII
 * 3. 左减时不可跨越一个位值。比如，99不可以用 IC（100-1）表示，而是用 XCIX（[100-10]+[10-1]）表示（等同于阿拉伯数字每位数字分别表示）
 */

var ROMAN = [
  {
    text: 'M',
    val: 1000
  },
  {
    text: 'C',
    val: 100,
    sub: 'D'
  },
  {
    text: 'X',
    val: 10,
    sub: 'L'
  },
  {
    text: 'I',
    val: 1,
    sub: 'V'
  }
];

var loopNum = function(num, text) {
  var result = '';
  while(num) {
    result += text;
    num -= 1;
  }
  return result;
};

/**
* @param {number} num
* @return {string}
*/
var intToRoman = function(num) {
  var result = '';
  var number = num;
  for (var i = 0; i < ROMAN.length; i += 1) {
    var roman = ROMAN[i];
    var count = Math.floor(number / roman.val);
    number = number % roman.val;
    if (!roman.sub || count < 4) {
      result += loopNum(count, roman.text);
      continue;
    }
    if (count < 9) {
      if (count === 4) {
        result = result + roman.text + roman.sub;
      } else {
        result = result + roman.sub + loopNum(count - 5, roman.text);
      }
    } else {
      result = result + roman.text + ROMAN[i - 1].text;
    }
  }
  console.log(`${num}: ${result}`);
  return result;
};

intToRoman(1800);
intToRoman(1437);
intToRoman(1400);
intToRoman(3999);
intToRoman(3333);
intToRoman(1000);
intToRoman(2000);
intToRoman(19);
intToRoman(1);