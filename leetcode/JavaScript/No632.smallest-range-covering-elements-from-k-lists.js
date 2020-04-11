/*
 * Difficulty:
 * Hard
 *
 * Desc:
 * You have k lists of sorted integers in ascending order.
 * Find the smallest range that includes at least one number from each of the k lists.
 * We define the range [a,b] is smaller than range [c,d] if b-a < d-c or a < c if b-a == d-c.
 * 
 * Example 1:
 * Input: [[4,10,15,24,26], [0,9,12,20], [5,18,22,30]]
 * Output: [20,24]
 * Explanation: 
 * List 1: [4, 10, 15, 24,26], 24 is in range [20,24].
 * List 2: [0, 9, 12, 20], 20 is in range [20,24].
 * List 3: [5, 18, 22, 30], 22 is in range [20,24].
 * 
 * Note:
 * 1. The given list may contain duplicates, so ascending order means >= here.
 * 2. 1 <= k <= 3500
 * 3. -10^5 <= value of elements <= 10^5.
 * 
 * 你有 k 个升序排列的整数数组。找到一个最小区间，使得 k 个列表中的每个列表至少有一个数包含在其中。
 * 我们定义如果 b-a < d-c 或者在 b-a == d-c 时 a < c，则区间 [a,b] 比 [c,d] 小。
 */

/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var smallestRange = function(nums) {
  const arr = []
  const search = (target) => {
    let i = 0
    let j = arr.length - 1
    while (i <= j) {
      const mid = Math.floor((i + j) / 2)
      if (arr[mid][0] === target) return mid
      if (arr[mid][0] < target) {
        i = mid + 1
      } else {
        j = mid - 1
      }
    }
    return i
  }

  for (let i = 0; i < nums.length; i += 1) {
    const index = search(nums[i][0])
    arr.splice(index, 0, [nums[i][0], i, 0])
  }

  let res = [arr[0][0], arr[arr.length - 1][0]]

  while (true) {
    let k = 0
    let target = 0
    while (k + 1 < arr.length && arr[k + 1][0] === arr[k][0]) {
      k += 1
      const item = arr[k]
      if (
        item[2] + 1 < nums[item[1]].length &&
        nums[item[1]][item[2] + 1] < nums[arr[target][1]][arr[target][2] + 1]
      ) {
        target = k
      }
    }
    const [_, i, j] = arr.splice(target, 1)[0]
    if (j + 1 >= nums[i].length) break

    const num = nums[i][j + 1]
    const index = search(num)
    arr.splice(index, 0, [num, i, j + 1])

    if (
      (arr[arr.length - 1][0] - arr[0][0] < res[1]- res[0]) ||
      (arr[arr.length - 1][0] - arr[0][0] === res[1]- res[0] && arr[0][0] < res[0])
    ) {
      res =  [arr[0][0], arr[arr.length - 1][0]]
    }
  }

  return res
}
