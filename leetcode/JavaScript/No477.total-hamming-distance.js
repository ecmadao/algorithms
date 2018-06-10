/**
 * Difficulty:
 * Medium
 * 
 * Desc:
 * The Hamming distance between two integers is the number of positions at which the corresponding bits are different.
 * Now your job is to find the total Hamming distance between all pairs of the given numbers.
 * 
 * Example:
 * Input: 4, 14, 2
 * Output: 6
 * Explanation: In binary representation, the 4 is 0100, 14 is 1110, and 2 is 0010 (just
 * showing the four bits relevant in this case). So the answer will be:
 * HammingDistance(4, 14) + HammingDistance(4, 2) + HammingDistance(14, 2) = 2 + 2 + 2 = 6.
 *
 * Note:
 * - Elements of the given array are in the range of 0 to 10^9
 * - Length of the array will not exceed 10^4.
 */

var hammingDistance = function(x, y) {
  const n = (x ^ y).toString(2);
  let result = 0;
  for (const i of n) {
    if (i === '1') result += 1;
  }
  return result;
};

/**
 * @param {number[]} nums
 * @return {number}
 * 方法一：老实比较法，妥妥超时
 */
var totalHammingDistance_timeout = function(nums) {
  let result = 0;

  const find = (start) => {
    if (start >= nums.length - 1) return;
    const base = nums[start];

    for (let i = start + 1; i < nums.length; i += 1) {
      result += hammingDistance(base, nums[i]);
    }
    find(start + 1);
  };
  find(0);
  return result;
};

/**
 * @param {number[]} nums
 * @return {number}
 * 方法二：
 * 对于给定数组内的每个数字，都依次右移 32 次，每次把移动后的最后一位和 1 进行比较，
 * 即可得知所有数字的某一位上，有多少个 1（m），多少个 0（total - m）
 * 最后按照规则 m * (total - m) 即可获得这一位上的汉明距离
 * 详细解析：
 * https://leetcode.com/problems/total-hamming-distance/discuss/96243/Share-my-O(n)-C++-bitwise-solution-with-thinking-process-and-explanation
 */
var totalHammingDistance = function(nums) {
  let result = 0;

  for (let i = 0; i < 32; i += 1) {
    let bits = 0;
    for (const num of nums) {
      bits += (num >> i) & 1
    }
    result += bits * (nums.length - bits);
  }
  return result;
}
