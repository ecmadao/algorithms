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

/**
* @param {number} n
* @return {number}
*/
var nthUglyNumber_1 = function(n) {
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

    var num = Math.min(num2, num3, num5);
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


/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber_2 = function(n) {
  const ugly = [1, 1, 1]
  const index = [0, 0, 0]

  for (let i = 1; i < n; i += 1) {
    const n1 = ugly[index[0]] * 2
    const n2 = ugly[index[1]] * 3
    const n3 = ugly[index[2]] * 5
    const min = Math.min(n1, n2, n3)

    // 要使用三个并列的if让指针指向一个更大的数，不能用 else if。因为有这种情况：
    // 丑数 6，可能由于丑数 2 乘以 3 产生；也可能由于丑数 3 乘以 2 产生。
    // 丑数 10 = 2 * 5 = 5 * 2
    // 等等
    if (min === n1) {
      index[0] += 1
    }
    if (min === n2) {
      index[1] += 1
    }
    if (min === n3) {
      index[2] += 1
    }
    ugly[i] = min
  }
  return ugly[n - 1]
}
