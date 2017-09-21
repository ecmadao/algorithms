/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * You are a product manager and currently leading a team to develop a new product.
 * Unfortunately, the latest version of your product fails the quality check.
 * Since each version is developed based on the previous version, all the versions after a bad version are also bad.
 * Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one,
 * which causes all the following ones to be bad.
 * You are given an API bool isBadVersion(version) which will return whether version is bad.
 * Implement a function to find the first bad version. You should minimize the number of calls to the API.
 *
 * 说白了就是给定一个从小到大每次递增 1 的数组，其最大值为 n。从某个数字开始为不好的数，且一旦出现了不好的数，
 * 则数组之后的数字都是不好的。
 * 例如，数组 [1, 2, 3, 4, 5]，3 是不好的数，则 3，4，5 都是不好的数。求第一个出现的不好的数
 * （已提供一个函数 isBadVersion，代入数字即可判断是否是不好的数）
 */

/**
 * 思路：
 * 二分法
 */

/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

// [1., 2]
// start = 0, end = 1, mid = (1 - 0) / 2 + 0 -> 1
// start = 0, end = 0, mid = 0

// [1, 2, 3, 4, 5, 6, 7, 8., 9., 10., 11.]
// start = 0; end = 10; mid = (10 - 0) / 2 + 0 -> 5
// start = 6, end = 10, mid = (9 - 6) / 2 + 6 -> 8
// start = 6, end = 7
// start = 9, end = 9, mid = (9 - 9) / 2 + 8 => 9
/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    var start = 0;
    var end = n - 1;
    var result = 0;
    while(true) {
      var mid = Math.ceil((end - start) / 2) + start;
      var isBad = isBadVersion(mid + 1);
      if (!isBad) {
        start = mid + 1;
      } else {
        result = mid + 1;
        end = mid - 1;
      }
      if (start > end) {
        result = isBad ? mid + 1 : result;
        break;
      }
    }
    return result;
  };
};