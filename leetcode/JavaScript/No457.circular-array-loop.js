/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * You are given a circular array nums of positive and negative integers.
 * If a number k at an index is positive, then move forward k steps. Conversely, if it's negative (-k), move backward k steps.
 * Since the array is circular, you may assume that the last element's next element is the first element, and the first element's previous element is the last element.
 * Determine if there is a loop (or a cycle) in nums. A cycle must start and end at the same index and the cycle's length > 1.
 * Furthermore, movements in a cycle must all follow a single direction. In other words, a cycle must not consist of both forward and backward movements.
 *
 * Example 1:
 * Input: [2,-1,1,2,2]
 * Output: true
 * Explanation:
 * There is a cycle, from index 0 -> 2 -> 3 -> 0. The cycle's length is 3.
 *
 * Example 2:
 * Input: [-1,2]
 * Output: false
 * Explanation:
 * The movement from index 1 -> 1 -> 1 ... is not a cycle, because the cycle's length is 1. By definition the cycle's length must be greater than 1.
 *
 * Example 3:
 * Input: [-2,1,-1,-2,-2]
 * Output: false
 * Explanation:
 * The movement from index 1 -> 2 -> 1 -> ... is not a cycle, because movement from index 1 -> 2 is a forward movement,
 * but movement from index 2 -> 1 is a backward movement. All movements in a cycle must follow a single direction.
 *
 * Note:
 * 1. -1000 ≤ nums[i] ≤ 1000
 * 2. nums[i] ≠ 0
 * 3. 1 ≤ nums.length ≤ 5000
 *
 * Follow up:
 * Could you solve it in O(n) time complexity and O(1) extra space complexity?
 *
 * 给定一个含有正整数和负整数的环形数组 nums。
 * 如果某个索引中的数 k 为正数，则向前移动 k 个索引。相反，如果是负数 (-k)，则向后移动 k 个索引。
 * 因为数组是环形的，所以可以假设最后一个元素的下一个元素是第一个元素，而第一个元素的前一个元素是最后一个元素。
 * 确定 nums 中是否存在循环（或周期）。循环必须在相同的索引处开始和结束并且循环长度 > 1。
 * 此外，一个循环中的所有运动都必须沿着同一方向进行。换句话说，一个循环中不能同时包括向前的运动和向后的运动。
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 *
 * 基本思路：
 * 针对每一位 raw 上的元素，都根据规则进行向前或向后的跳跃。如果：
 * 1. 跳跃方向和初始方向不一样，即 nums[raw] * nums[i] < 0，则当前 raw 位上不存在环
 * 2. 跳跃后发现是已经走过的元素，则：
 * 2.1 如果是这次遍历走过的元素，则存在环，直接返回 true
 * 2.2 如果是之前遍历走过的元素，则证明继续下去也没有环，则当前 raw 位上不存在环，break
 */
var circularArrayLoop = function(nums) {
  const getIndex = (num) => {
    if (num >= 0) return num % nums.length
    return num % nums.length + nums.length
  }

  // flag 用于标记已经遍历过的元素
  // 需要递增，是为了检测出是当前遍历还是之前的遍历
  let flag = 1001
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] < -1000 || nums[i] > 1000) continue

    const num = nums[i]
    const curFlag = flag

    let j = i
    let pre = i
    let reverse = false

    while (nums[j] >= -1000 && nums[j] <= 1000) {
      if (nums[j] * num < 0) {
        reverse = true
        break
      }

      const n = nums[j]
      nums[j] = curFlag
      pre = j
      j = getIndex(j + n)
    }

    if (!reverse && nums[j] === curFlag && pre !== j) return true

    flag += 1
  }
  return false
}

