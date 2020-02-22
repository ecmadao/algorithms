/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * Given an unsorted integer array, find the first missing positive integer.
 *
 * Example:
 * Given [1,2,0] return 3,
 * and [3,4,-1,1] return 2.
 *
 * Note:
 * Your algorithm should run in O(n) time and uses constant space.
 *
 * 给出一个乱序排列的数组，求出其中缺失的第一个正数
 * 例如，在 [3,4,-1,1] 中，按照从小到大应该是 -1, 1, 3, 4，其中 2缺失
 * 注意，不能创建新数组，算法复杂度为线性 O(n)
 */


/**
 * @param {number[]} nums
 * @return {number}
 *
 * 思路一：
 * 将各个位置上的正数 n，放到比 n 小 1 的位置上，例如
 * [3, 4, -1, 1]，改变位置之后为 [1, -1, 3, 4]，然后只要找到第一个不符合该规则的位置 i 即可
 * i + 1 即是第一个缺失的正整数
 */
var firstMissingPositive_1 = function(nums) {
  for (let i = 0; i < nums.length; i += 1) {
    while (nums[i] > 0 && nums[i] !== i + 1 && nums[i] - 1 < nums.length && nums[i] !== nums[nums[i] - 1]) {
        const tmp = nums[nums[i] - 1]
        nums[nums[i] - 1] = nums[i]
        nums[i] = tmp
    }
  }

  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] !== i + 1) return i + 1
  }
  return nums.length + 1
}

/**
 * @param {number[]} nums
 * @return {number}
 *
 * 思路二：
 * 简单粗暴
 */
const firstMissingPositive_2 = (nums) => {
  const set = new Set(nums)
  i = 1
  while (true) {
    if (!set.has(i)) return i;
    i += 1
  }
};

/**
 * @param {number[]} nums
 * @return {number}
 *
 * 思路三
 * https://leetcode-cn.com/problems/first-missing-positive/solution/que-shi-de-di-yi-ge-zheng-shu-by-leetcode/
 */
var firstMissingPositive_3 = function(nums) {
  let hasOne = false
  for (const num of nums) {
    if (num === 1) {
      hasOne = true
      break
    }
  }
  if (!hasOne) return 1
  if (nums.length === 1) return 2

  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] <= 0 || nums[i] > nums.length) nums[i] = 1
  }

  for (let i = 0; i < nums.length; i += 1) {
    const a = Math.abs(nums[i])

    if (a === nums.length) {
      nums[0] = -Math.abs(nums[0])
    } else {
      nums[a] = -Math.abs(nums[a])
    }
  }

  for (let i = 1; i < nums.length; i += 1) {
    if (nums[i] > 0) return i
  }
  return nums.length + (nums[0] > 0 ? 0 : 1)
}
