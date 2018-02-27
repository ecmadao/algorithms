/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Write a program to find the n-th ugly number.
 * Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.
 *
 * Example:
 * 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 is the sequence of the first 10 ugly numbers.
 *
 * Note:
 * 1 is typically treated as an ugly number, and n does not exceed 1690.
 *
 * Hints:
 * 1. The naive approach is to call isUgly for every number until you reach the nth one.
 *    Most numbers are not ugly. Try to focus your effort on generating only the ugly ones.
 * 2. An ugly number must be multiplied by either 2, 3, or 5 from a smaller ugly number.
 * 3. The key is how to maintain the order of the ugly numbers.
 *    Try a similar approach of merging from three sorted lists: L1, L2, and L3.
 * 4. Assume you have Uk, the kth ugly number. Then Uk+1 must be Min(L1 * 2, L2 * 3, L3 * 5).
 */

var min = function(a, b, c) {
  var tmp = a < b ? a : b;
  return tmp < c ? tmp : c;
};

/**
* @param {number} n
* @return {number}
*/
var nthUglyNumber = function(n) {
  var index2 = 0;
  var index3 = 0;
  var index5 = 0;

  var index = 1;
  var queue = [1];

  while (queue.length < n) {
    var num2 = queue[index2] * 2;
    var num3 = queue[index3] * 3;
    var num5 = queue[index5] * 5;
    var num;

    var num = min(num2, num3, num5);
    if (num === num2) {
      index2 += 1;
    } else if (num === num3) {
      index3 += 1;
    } else {
      index5 += 1;
    }
    if (num !== queue[index - 1]) {
      queue[index] = num;
      index += 1;
    }
  }
  return queue[n - 1];
};
