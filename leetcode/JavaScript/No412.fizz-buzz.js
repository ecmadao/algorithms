/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Write a program that outputs the string representation of numbers from 1 to n.
 * But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”.
 * For numbers which are multiples of both three and five output “FizzBuzz”.
 *
 * Example:
 * n = 15,
 * Return:
 * [
 *  "1",
 *  "2",
 *  "Fizz",
 *  "4",
 *  "Buzz",
 *  "Fizz",
 *  "7",
 *  "8",
 *  "Fizz",
 *  "Buzz",
 *  "11",
 *  "Fizz",
 *  "13",
 *  "14",
 *  "FizzBuzz"
 * ]
 *
 * 写一个程序，输出从 1 到 n 数字的字符串表示。
 * 1. 如果 n 是3的倍数，输出“Fizz”；
 * 2. 如果 n 是5的倍数，输出“Buzz”；
 * 3.如果 n 同时是3和5的倍数，输出 “FizzBuzz”
 */

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  return Array.from({ length: n }, (_, i) => {
    const num = i + 1
    if (num % 15 === 0) {
      return 'FizzBuzz'
    } else if (num % 5 === 0) {
      return 'Buzz'
    } else if (num % 3 === 0) {
      return 'Fizz'
    } else {
      return `${num}`
    }
  })
}
