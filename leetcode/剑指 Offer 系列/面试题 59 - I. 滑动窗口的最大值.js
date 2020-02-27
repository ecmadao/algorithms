/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * 给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。
 *
 * 示例:
 * 输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
 * 输出: [3,3,5,5,6,7]
 *
 * 解释:
 * 滑动窗口的位置                最大值
 * ---------------               -----
 * [1  3  -1] -3  5  3  6  7       3
 *  1 [3  -1  -3] 5  3  6  7       3
 *  1  3 [-1  -3  5] 3  6  7       5
 *  1  3  -1 [-3  5  3] 6  7       5
 *  1  3  -1  -3 [5  3  6] 7       6
 *  1  3  -1  -3  5 [3  6  7]      7
 *
 * 提示：
 * 你可以假设 k 总是有效的，在输入数组不为空的情况下，1 ≤ k ≤ 输入数组的大小。
 */

class Deque {
  constructor() {
    this.deque = []
  }

  peak() {
    return this.deque[0]
  }

  push(val) {
    while (this.deque.length && this.deque.slice(-1)[0] < val) {
      this.deque.pop()
    }
    this.deque.push(val)
  }

  pop(val) {
    if (this.deque.length && this.deque[0] === val) {
      this.deque.shift()
    }
  }
}

/**
* @param {number[]} nums
* @param {number} k
* @return {number[]}
*/
var maxSlidingWindow = function(nums, k) {
  if (!nums.length || !k) return []
  if (k === 1) return nums

  const result = []
  const deque = new Deque()
  for (let i = 0; i < nums.length; i += 1) {
    deque.push(nums[i])
    if (i >= k - 1) {
      deque.pop(nums[i - k])
      result.push(deque.peak())
    }
  }
  return result
}
