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
  var left = 0;
  var right = nums.length - 1;
  var index = null;

  while (left <= right) {
    var midIndex = Math.floor((left + right) / 2);
    var mid = nums[midIndex];
    if (mid === target) {
      index = midIndex;
      break;
    } else if (mid > target) {
      right = midIndex - 1;
    } else {
      left = midIndex + 1;
    }
  }

  if (index === null) {
    left -= 1;
    var num = nums[left];
    if (num > target) {
      if (left - 1 < 0 || nums[left - 1] < target) {
        index = left;
      }
    } else {
      if (left + 1 > nums.length -1 || nums[left + 1] > target) {
        index = left + 1;
      }
    }
  }

  console.log(index)
  return index;
};

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