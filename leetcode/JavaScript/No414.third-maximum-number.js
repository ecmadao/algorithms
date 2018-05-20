/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given a non-empty array of integers, return the third maximum number in this array.
 * If it does not exist, return the maximum number. The time complexity must be in O(n).
 *
 * Example:
 * Input: [3, 2, 1]
 * Output: 1
 * Explanation: The third maximum is 1.
 *
 * Input: [1, 2]
 * Output: 2
 * Explanation: The third maximum does not exist, so the maximum (2) is returned instead.
 *
 * Input: [2, 2, 3, 1]
 * Output: 1
 * Explanation: Note that the third maximum here means the third maximum distinct number.
 * Both numbers with value 2 are both considered as second maximum.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  let l1 = null;
  let l2 = null;
  let l3 = null;
  let tmp = new Set(nums);

  for (const num of tmp.values()) {
    if (!l1 || l1 < num) {
      l3 = l2;
      l2 = l1;
      l1 = num;
      continue;
    }
    if (!l2 || l2 < num) {
      l3 = l2;
      l2 = num;
      continue;
    }
    if (!l3 || l3 < num) l3 = num;
  }
  return l3 !== null ? l3 : l1;
};
