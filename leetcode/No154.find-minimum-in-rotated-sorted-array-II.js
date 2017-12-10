/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * Follow up for "Find Minimum in Rotated Sorted Array":
 * What if duplicates are allowed?
 * Would this affect the run-time complexity? How and why?
 *
 * Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
 * (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).
 * Find the minimum element.
 * The array may contain duplicates.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  const set = new Set(nums);
  const arr = [...set];
  let pre = arr[0];
  let min = null;

  for (let i = 1; i < arr.length; i += 1) {
    const num = arr[i];
    if (pre > num && num < arr[i + 1]) {
      min = num;
      break;
    }
    pre = num;
  }
  if (min === null) {
    min = Math.min(arr[0], arr[arr.length - 1]);
  }
  return min;
};
