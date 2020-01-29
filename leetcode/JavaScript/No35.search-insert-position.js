/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given a sorted array and a target value, return the index if the target is found.
 * If not, return the index where it would be if it were inserted in order.
 * You may assume no duplicates in the array.
 *
 * Example:
 * [1,3,5,6], 5 → 2
 * [1,3,5,6], 2 → 1
 * [1,3,5,6], 7 → 4
 * [1,3,5,6], 0 → 0
 * [1], 0 → 0
 *
 * 给一个升序排列的数组和目标值，如果目标值存在于数组中，则返回其索引；否则返回目标值可以插入的位置
 */

/**
 * 思路：
 * 还是二分法。先查找目标值，如果不存在，则在最后的索引两侧查找可以插入的位置
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let i = 0
  let j = nums.length - 1

  while (i < j) {
    const mid = Math.floor((i + j) / 2)
    if (nums[mid] === target) return mid

    if (nums[mid] < target) {
      i = mid + 1
    } else {
      j = mid - 1
    }
  }

  const mid = Math.floor((i + j) / 2)
  return nums[mid] < target ? mid + 1 : Math.max(0, mid)
}

searchInsert([1,3,5,6], 5);
searchInsert([1,3,5,6], 2);
searchInsert([1,3,5,6], 7);
searchInsert([1,3,5,6], 0);
searchInsert([1], 0);

const insert = (arr, val) => {
  const index = searchInsert(arr, val);
  const r = arr.slice(0, index);
  r.push(val);
  return r.concat(arr.slice(index));
};

console.log(insert([1,3,5,6], 5));
console.log(insert([1,3,5,6], 2));
console.log(insert([1,3,5,6], 7));
console.log(insert([1,3,5,6], 0));
console.log(insert([1], 0));