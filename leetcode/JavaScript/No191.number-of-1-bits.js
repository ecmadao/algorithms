/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Write a function that takes an unsigned integer and returns the number of '1' bits
 * it has (also known as the Hamming weight: https://en.wikipedia.org/wiki/Hamming_weight).
 *
 * Example:
 * Input: 11
 * Output: 3
 * Explanation: Integer 11 has binary representation 00000000000000000000000000001011
 *
 * Input: 128
 * Output: 1
 * Explanation: Integer 128 has binary representation 00000000000000000000000010000000
 */

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  let result = 0;
  while (n > 0) {
    const remind = n % 2;
    if (remind === 1) result += 1;
    n = Math.floor(n / 2);
  }
  return result;
};

// Test case

console.log(hammingWeight(11)); // 3
console.log(hammingWeight(128)); // 1
console.log(hammingWeight(255)); // 8