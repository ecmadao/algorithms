/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Write a program to find the nth super ugly number.
 * Super ugly numbers are positive numbers whose all prime factors are in the given prime list primes of size k.
 *
 * Example:
 * Input: n = 12, primes = [2,7,13,19]
 * Output: 32
 * Explanation: [1, 2, 4, 7, 8, 13, 14, 16, 19, 26, 28, 32] is the sequence of the first 12 super ugly numbers given primes = [2,7,13,19] of size 4.
 *
 * Note:
 * - 1 is a super ugly number for any given primes.
 * - The given numbers in primes are in ascending order.
 * - 0 < k ≤ 100, 0 < n ≤ 106, 0 < primes[i] < 1000.
 * - The nth super ugly number is guaranteed to fit in a 32-bit signed integer.
 */


/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
const nthSuperUglyNumber = (n, primes) => {
  const queue = [1];
  const indexs = [];
  const tmp = new Set();

  while (queue.length < n) {
    let minIndex = 0;
    let minNum = null;

    for (let i = 0; i < primes.length; i += 1) {
      const prime = primes[i];
      const index = indexs[i] || 0;
      const tmp = queue[index] * prime;
      if (minNum === null || minNum > tmp) {
        minNum = tmp;
        minIndex = i;
      }
    }
    if (!tmp.has(minNum)) {
      queue.push(minNum);
      tmp.add(minNum);
    }
    indexs[minIndex] = (indexs[minIndex] || 0) + 1;
  }
  return queue[n - 1];
};

console.log(nthSuperUglyNumber(12, [2, 7, 13, 19])); // 32
console.log(nthSuperUglyNumber(10, [2, 3, 5])); // 12
console.log(nthSuperUglyNumber(100000, [7,19,29,37,41,47,53,59,61,79,83,89,101,103,109,127,131,137,139,157,167,179,181,199,211,229,233,239,241,251])); // 1092889481

