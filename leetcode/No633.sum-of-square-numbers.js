/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given a non-negative integer c,
 * your task is to decide whether there're two integers a and b such that a2 + b2 = c.
 *
 * Example:
 * Input: 5
 * Output: True
 * Explanation: 1 * 1 + 2 * 2 = 5
 *
 * Input: 3
 * Output: False
 */

/**
 * Solution 1: The slow way
 */

/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum_slow = function(c) {
  var max = Math.sqrt(c);
  if (max % 1 === 0) return true;
  for (var i = 1; i < max; i += 1) {
    var square = c - i * i;
    var b = Math.sqrt(square);
    if (b % 1 === 0) return true;
  }
  return false;
};

/**
 * Solution 2: The quicker way
 */

/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
  var max = Math.sqrt(c);
  if (max % 1 === 0) return true;

  var min = 1;
  max = Math.floor(max);
  while(min <= max) {
    var num = max * max + min * min;
    if (num === c) return true;
    if (num < c) {
      min += 1;
    } else {
      max -= 1;
    }
  }
  return false;
};
