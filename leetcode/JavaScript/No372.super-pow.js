/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Your task is to calculate ab mod 1337 where a is a positive integer and b is an extremely large positive integer given in the form of an array.
 *
 * Example 1:
 * Input: a = 2, b = [3]
 * Output: 8
 *
 * Example 2:
 * Input: a = 2, b = [1,0]
 * Output: 1024
 *
 * 你的任务是计算 ab 对 1337 取模，a 是一个正整数，b 是一个非常大的正整数且会以数组形式给出。
 */


const base = 1337

const pow = (x, n) => {
  const num = x % base
  let res = 1
  for (let i = 0; i < n; i += 1) {
    res *= num
    res %= base
  }
  return res
}

/**
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 */
var superPow = function(a, b) {
  if (!b.length) return 1
  const last = b.pop()
  return (pow(a, last) * pow(superPow(a, b), 10)) % 1337
}
