/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
 * (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).
 * You are given a target value to search. If found in the array return its index, otherwise return -1.
 * You may assume no duplicate exists in the array.
 *
 * 已知一个升序排列的数组，例如 [0, 1, 2, 4, 5, 6, 7]，将它首位连接成为一个环，旋转一定角度以后，从某点切断，
 * 然后成为例如 [4, 5, 6, 7, 0, 1, 2] 的数组。求在这个数组中（[4, 5, 6, 7, 0, 1, 2]）搜索某值找到的索引，没有则返回 -1
 */

/**
 * 思路：
 * 观察可知，将数组连接、旋转、切断之后，新生成的数组由两部分组成：
 * 1. 两部分都是升序排列
 * 2. 一部分的各个值全部大于另一部分的各值
 *
 * 如果我们使用二分查找法，从数组中心开始查找：
 * 1. 如果中间值 mid 小于最右侧的值 right，则右侧升序排列
 *    1. 如果目标值 target 大于 mid 且小于等于 right，则 target 位于 mid 的右侧，
 *        因此，左侧索引 += 1，让 mid 向右侧靠拢
 *    2. 反之，target 位于 mid 左侧，右侧索引 -= 1，让 mid 向左侧靠拢
 * 2. 如果 mid 不小于 right，则左侧的值都大于右侧的值（左侧也是升序排列）
 *    1. 如果 target 小于 mid 且 大于等于 left，则 target 位于 mid 左侧，
 *        因此，右侧索引 -= 1，让 mid 向左靠拢
 *    2. 反之，左侧索引 += 1，让 mid 向右靠拢
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let i = 0
  let j = nums.length - 1

  while (i <= j) {
      const mid = Math.ceil((j + i) / 2)
      if (nums[mid] === target) return mid

      // 检查中间值是否大于目标值
      if (nums[mid] > target) {
        // 中间值 > 目标值，则检查中间值左侧是否递增
        if (nums[mid] >= nums[i]) {
          // 左侧是递增，则检查最左是否 <= 目标值
          if (nums[i] <= target) {
            // 如果左侧最小值小于目标值，则目标值值可能位于区间 [i, mid - 1] 内
            j = mid - 1
          } else {
            // 否则只能在右侧区间 [mid + 1, j] 内
            i = mid + 1
          }
        } else {
          // 左侧不是递增，那么右侧一定是递增，则右侧的值一定大于目标值，不需要检查。
          // 因此目标值只能在区间 [i, mid - 1] 内
          j = mid - 1
        }
      } else {
        // 中间值 < 目标值，检查右侧是否是递增
        if (nums[mid] <= nums[j]) {
          // 右侧是递增，则检查最右是否 >= 目标值
          if (nums[j] >= target) {
            // 如果符合要求，则目标值只能在区间 [mid + 1, j] 内
            i = mid + 1
          } else {
            // 否则就在 [i, mid - 1] 内
            j = mid - 1
          }
        } else {
          // 右侧不是递增，则左侧一定是递增，那么左侧的值一定都小于目标值，不需要检查
          // 因此目标值只能在区间 [mid + 1, j] 内
          i = mid + 1
        }
      }
  }

  return -1
}

console.log(
  search([4,5,6,7,0,1,2], 0)
)
console.log(
  search([4,5,6,7,0,1,2], 3)
)
console.log(
  search([4,5,6,7,0,1], 3)
)
console.log(
  search([4,5,6,7,0,1], 6)
)
console.log(
  search([4,5,6,7,0,1], 4)
)
console.log(
  search([4,5,6,7,0,1], 1)
)
console.log(
  search([4,5,6,7,8,9,1,2,3], 1)
)
