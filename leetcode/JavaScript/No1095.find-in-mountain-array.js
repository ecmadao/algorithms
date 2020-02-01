/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * You may recall that an array A is a mountain array if and only if:
 * A.length >= 3
 * There exists some i with 0 < i < A.length - 1 such that:
 * - A[0] < A[1] < ... A[i-1] < A[i]
 * - A[i] > A[i+1] > ... > A[A.length - 1]
 *
 * Given a mountain array mountainArr, return the minimum index such that mountainArr.get(index) == target.  If such an index doesn't exist, return -1.
 * You can't access the mountain array directly.  You may only access the array using a MountainArray interface:
 * - MountainArray.get(k) returns the element of the array at index k (0-indexed).
 * - MountainArray.length() returns the length of the array.
 *
 * Submissions making more than 100 calls to MountainArray.get will be judged Wrong Answer.  Also, any solutions that attempt to circumvent the judge will result in disqualification.
 *
 * Example1:
 * Input: array = [1,2,3,4,5,3,1], target = 3
 * Output: 2
 * Explanation: 3 exists in the array, at index=2 and index=5. Return the minimum index, which is 2.
 *
 * Example2:
 * Input: array = [0,1,2,4,2,1], target = 3
 * Output: -1
 * Explanation: 3 does not exist in the array, so we return -1.
 *
 * Note:
 * 1. 3 <= mountain_arr.length() <= 10000
 * 2. 0 <= target <= 10^9
 * 3. 0 <= mountain_arr.get(index) <= 10^9
 *
 * 给你一个 山脉数组 mountainArr，请你返回能够使得 mountainArr.get(index) 等于 target 最小 的下标 index 值。
 * 如果不存在这样的下标 index，就请返回 -1。
 *
 * 所谓山脉数组，即数组 A 假如是一个山脉数组的话，需要满足如下条件：
 * 首先，A.length >= 3
 * 其次，在 0 < i < A.length - 1 条件下，存在 i 使得：
 * A[0] < A[1] < ... A[i-1] < A[i]
 * A[i] > A[i+1] > ... > A[A.length - 1]
 *
 * 你将 不能直接访问该山脉数组，必须通过 MountainArray 接口来获取数据：
 * 1. MountainArray.get(k) - 会返回数组中索引为k 的元素（下标从 0 开始）
 * 2. MountainArray.length() - 会返回该数组的长度
 *
 * 注意：
 * 对 MountainArray.get 发起超过 100 次调用的提交将被视为错误答案
 */

/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
var findInMountainArray = function(target, mountainArr) {
  let i = 0
  let j = mountainArr.length() - 1

  while (i < j) {
    const mid = Math.floor((i + j) / 2)
    const num = mountainArr.get(mid)

    if (num < mountainArr.get(mid + 1)) {
      i = mid + 1
    } else {
      j = mid
    }
  }
  const peak = mountainArr.get(i)
  if (peak === target) return i
  if (peak < target) return -1

  let left = 0
  let right = i - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    const num = mountainArr.get(mid)
    if (num === target) return mid
    if (num < target) left = mid + 1
    if (num > target) right = mid - 1
  }

  left = i + 1
  right = mountainArr.length() - 1
  while (left <= right) {
    const mid = Math.floor((right + left) / 2)
    const num = mountainArr.get(mid)
    if (num === target) return mid
    if (num < target) right = mid - 1
    if (num > target) left = mid + 1
  }

  return -1
}
