/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * Median is the middle value in an ordered integer list. If the size of the list is even,
 * there is no middle value. So the median is the mean of the two middle value.
 *
 * Examples:
 * [2,3,4] , the median is 3
 * [2,3], the median is (2 + 3) / 2 = 2.5
 *
 * Given an array nums, there is a sliding window of size k which is moving from the very left of the array to the very right.
 * You can only see the k numbers in the window. Each time the sliding window moves right by one position.
 * Your job is to output the median array for each window in the original array.
 *
 * For example,
 * Given nums = [1,3,-1,-3,5,3,6,7], and k = 3.
 *
 * Window position                Median
 * ---------------               -----
 * [1  3  -1] -3  5  3  6  7       1
 * 1 [3  -1  -3] 5  3  6  7       -1
 * 1  3 [-1  -3  5] 3  6  7       -1
 * 1  3  -1 [-3  5  3] 6  7       3
 * 1  3  -1  -3 [5  3  6] 7       5
 * 1  3  -1  -3  5 [3  6  7]      6
 *
 * Therefore, return the median sliding window as [1,-1,-1,3,5,6].
 *
 * Note:
 * 1. You may assume k is always valid, ie: k is always smaller than input array's size for non-empty array.
 * 2. Answers within 10^-5 of the actual value will be accepted as correct
 *
 * 中位数是有序序列最中间的那个数。如果序列的大小是偶数，则没有最中间的数；此时中位数是最中间的两个数的平均数。
 * 例如：
 * [2,3,4]，中位数是 3
 * [2,3]，中位数是 (2 + 3) / 2 = 2.5
 * 给出一个数组 nums，有一个大小为 k 的窗口从最左端滑动到最右端。
 * 窗口中有 k 个数，每次窗口向右移动 1 位。你的任务是找出每次窗口移动后得到的新窗口中元素的中位数，并输出由它们组成的数组
 */


const searchInsert = (nums, val) => {
  if (!nums.length) return 0
  if (nums[0] >= val) return 0
  if (nums[nums.length - 1] === val) return nums.length - 1
  if (nums[nums.length - 1] < val) return nums.length

  let i = 0
  let j = nums.length - 1

  while (i <= j) {
    const mid = Math.floor((i + j) / 2)
    const num = nums[mid]
    if (num === val) return mid
    if (num < val) {
      i = mid + 1
    } else {
      j = mid - 1
    }
  }
  return i
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 *
 * 二分搜索
 */
var medianSlidingWindow = function(nums, k) {
  const data = []
  const push = (val) => {
    const index = searchInsert(data, val)
    data.splice(index, 0, val)
  }
  const pop = (val) => {
    const index = searchInsert(data, val)
    data.splice(index, 1)
  }
  const medium = () => {
    return data.length % 2 === 0
      ? (data[data.length / 2] + data[data.length / 2 - 1]) / 2
      : data[(data.length - 1) / 2]
  }
  const result = []

  for (let i = 0; i < nums.length; i += 1) {
    push(nums[i])

    if (i >= k - 1) {
      if (i - k >= 0) pop(nums[i - k])
      result.push(medium())
    }
  }
  return result
}
