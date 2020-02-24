/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * The set [1,2,3,…,n] contains a total of n! unique permutations.
 * By listing and labeling all of the permutations in order,
 * We get the following sequence (ie, for n = 3):
 * "123"
 * "132"
 * "213"
 * "231"
 * "312"
 * "321"
 * Given n and k, return the kth permutation sequence.
 *
 * 求 n 个数字全排列（数字从 1 到 n）中的第 k 个排列
 */

/**
 * 思路：
 * 因为要对 n 个数字进行全排列，由排列组合可知，n 个数字共有 n! 个排列
 * 初始化 i = n, 代表第一位，i 每次自减 1，在每一位 i 上，共有 i! 个排列
 * 例如，n = 3 时，初始化 i = 3，即代表首位共有 total = 3 * 2 * 1= 6 种排列方式；
 * 当 i = 2 时，假设第一位已经确定，则第二位有 total = 2 * 1 = 2 种排列方式
 * 而位于每一位时，可以得知有 i 个数字需要排列，每个数字各有 total / i 中排列方式
 * 由此，可以计算出在每一位上时，需要向前跳跃的数目，并由此得知当 result 里前位上应该放置的数字
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation_1 = function(n, k) {
  // 求全排列数目
  var total = 1;
  var obj = { 1: 1 };
  for (var i = 2; i <= n; i += 1) {
    total = total * i;
    obj[i] = i;
  }

  var remainder = k;
  var result = '';
  // 针对每一位上的数字
  for (var i = n; i >= 1; i -= 1) {
    total = total / i;
    var count = Math.floor(remainder / total);
    remainder -= count * total;
    var index = count + (remainder === 0 ? 0 : 1);
    var num = Object.keys(obj)[index === 0 ? 0 : index - 1]
    result += num;
    delete obj[num];
    if (remainder === 0) {
      remainder = total;
    }
  }

  console.log(`result: ${result}`);
  return result;
};

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation_2 = function(n, k) {
  let total = 1
  const cache = new Set()
  for (let i = 1; i <= n; i += 1) { total *= i; cache.add(i) }

  const result = []

  let num = n
  while (k && num > 0) {
    total /= num
    const count = Math.ceil(k / total)
    k -= (count - 1) * total
    num -= 1

    let step = 1
    for (const data of cache.values()) {
      if (step === count) {
        result.push(data)
        break
      }
      step += 1
    }
    cache.delete(result[result.length - 1])
  }

  result.push([...cache.values()][0])
  return result.join('')
}


getPermutation_2(3, 1);
getPermutation_2(3, 2);
getPermutation_2(3, 3);
getPermutation_2(3, 4);
getPermutation_2(3, 5);
getPermutation_2(3, 6);