/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a non-negative integer n, count all numbers with unique digits, x, where 0 ≤ x < 10^n.
 *
 * Example:
 * Given n = 2, return 91. (The answer should be the total numbers in the range of 0 ≤ x < 100,
 * excluding [11,22,33,44,55,66,77,88,99])
 */

/**
 * @param {number} n
 * @return {number}
 * 找规律 + DP
 * n = 0: [0, 1) -> 1
 * n = 1: [0, 1) + [1, 10) -> 1 + 9 = 10
 * n = 2: [0, 1) + [1, 10) + [10, 100) -> 1 + 9 + 9 * 9 = 91
 * n = 3: [0, 1) + [1, 10) + [10, 100) + [100, 1000) -> 1 + 9 + 9 * 9 + 9 * 9 * 8 = 739
 */

// 199 191 188 181 177 171 ..... 122 121 -> 16
// 119 - 110, 101 -> 11
var countNumbersWithUniqueDigits = function(n) {
  // 10 -> 0 - 10 = tmp[1] = 10
  // 100 -> 11 - 100 + tmp[1] = (90 - 9) + 10
  // 1000 -> 101 - 1000 = 9 * 9 * 8
  //    101 - 200 = (100 - 27 - 1) = 72
  //    201 - 300
  //    301 - 400
  //    401 - 500
  //    501 - 600
  //    601 - 700
  //    701 - 800
  //    801 - 900
  //    901 - 1000

  const tmp = [];
  tmp[0] = 1;
  let index = 1;
  while (index <= n) {
    let count = 9;
    for (let i = 1; i < index; i += 1) {
      count = count * (9 - i + 1);
    }
    tmp[index] = tmp[index - 1] + count;
    index += 1;
  }
  return tmp[n];
};

// Test case
console.log(countNumbersWithUniqueDigits(2)); // 91
console.log(countNumbersWithUniqueDigits(3)); // 739
