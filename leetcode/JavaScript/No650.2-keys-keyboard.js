/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Initially on a notepad only one character 'A' is present.
 * You can perform two operations on this notepad for each step:
 * 1. Copy All: You can copy all the characters present on the notepad (partial copy is not allowed).
 * 2. Paste: You can paste the characters which are copied last time.
 *
 * Given a number n. You have to get exactly n 'A' on the notepad by performing the minimum number of steps permitted. Output the minimum number of steps to get n 'A'.
 *
 * Example:
 * Input: 3
 * Output: 3
 * Explanation:
 * Intitally, we have one character 'A'.
 * In step 1, we use Copy All operation.
 * In step 2, we use Paste operation to get 'AA'.
 * In step 3, we use Paste operation to get 'AAA'.
 *
 * Note:
 * The n will be in the range [1, 1000].
 *
 * 在页面上初始化了一个字母 A，只能对其进行两种操作：复制和粘贴。且在复制时，只能一次性复制页面上全部字母
 * 求获取到指定个数的字母 A 时所需的操作步数。
 *
 * 该题需要注意找规律：
 * 1. 当字母个数是偶数个时，很容易就通过不断的复制粘贴达到指定数目
 * 2. 当字母个数是奇数个时，需要将其转换为 奇数 + 偶数 的形式
 */


/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function(n) {
  if (n === 1) return 0;
  if (n % 2 === 1) {
    if (n <= 7) return n;
    let i = 1;
    let step = Infinity;
    while (i < n) {
      if (n % i === 0) {
        step = Math.min(step, minSteps(i) + n / i);
      }
      i += 1;
    }
    return step;
  }
  return 2 + minSteps(n / 2);
};

// Test case
// A copy
// AA paste
// AAA paste
console.log(minSteps(3));

// A copy
// AA paste
// AA copy
// AAAA paste
console.log(minSteps(4));

console.log(minSteps(5));

// A copy
// AA paste
// AA copy
// AAAA paste
// AAAAAA paste
console.log(minSteps(6));

console.log(minSteps(7)); // 7

// A copy
// AA paste
// AA copy
// AAAA paste
// AAAA copy
// AAAAAAAA paste
console.log(minSteps(8));

// A copy
// AA paste
// AAA paste
// AAA copy
// AAAAAA paste
// AAAAAAAAA paste
console.log(minSteps(9)); // 6
