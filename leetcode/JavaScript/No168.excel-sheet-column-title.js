/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given a positive integer, return its corresponding column title as appear in an Excel sheet.
 *
 * Example:
 * 1 -> A
 * 2 -> B
 * 3 -> C
 * ...
 * 26 -> Z
 * 27 -> AA
 * 28 -> AB
 *
 * 注意两点：
 * 1. 满 26 后，再增加可进一位
 * 2. 数字和大写字母的转换，使用 String.fromCharCode
 */

// 1 -> A
// 2 -> B
// 3 -> C
// ...
// 26 -> Z
// 27 -> AA
// 28 -> AB
// 29 -> AC
// ...
// 52 -> AZ: (52 - 1) / 26 = 1
// 53 -> BA: (53 - 1) / 26 = 2
// 702 -> ZZ: (702 - 1) / 26 = 26
// 703 -> AAA: (703 - 1) / 26 = 27

const number2Letter = number => String.fromCharCode(number + 64);

/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  let loopCount = Math.floor((n - 1) / 26); // 个位向前进了多少次位
  let remainder = n % 26;
  const getLetter = r => r ? number2Letter(r) : 'Z';
  const results = [getLetter(remainder)];

  while (loopCount) {
    remainder = loopCount % 26;
    results.unshift(getLetter(remainder));
    loopCount = Math.floor((loopCount - 1) / 26); // 当前位向前进了多少次位
  }
  return results.join('');
};
