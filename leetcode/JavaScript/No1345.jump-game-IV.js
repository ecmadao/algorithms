/*
 * Difficulty:
 * Hard
 *
 * Desc:
 * Given an array of integers arr, you are initially positioned at the first index of the array.
 * In one step you can jump from index i to index:
 * 1. i + 1 where: i + 1 < arr.length.
 * 2. i - 1 where: i - 1 >= 0.
 * 3. j where: arr[i] == arr[j] and i != j.
 *
 * Return the minimum number of steps to reach the last index of the array.
 * Notice that you can not jump outside of the array at any time.
 *
 * Example 1:
 * Input: arr = [100,-23,-23,404,100,23,23,23,3,404]
 * Output: 3
 * Explanation: You need three jumps from index 0 --> 4 --> 3 --> 9. Note that index 9 is the last index of the array.
 *
 * Example 2:
 * Input: arr = [7]
 * Output: 0
 * Explanation: Start index is the last index. You don't need to jump.
 *
 * Example 3:
 * Input: arr = [7,6,9,6,9,6,9,7]
 * Output: 1
 * Explanation: You can jump directly from index 0 to index 7 which is last index of the array.
 *
 * Example 4:
 * Input: arr = [6,1,9]
 * Output: 2
 *
 * Example 5:
 * Input: arr = [11,22,7,7,7,7,7,7,7,22,13]
 * Output: 3
 *
 * Constraints:
 * 1. 1 <= arr.length <= 5 * 10^4
 * 2. -10^8 <= arr[i] <= 10^8
 *
 * 给你一个整数数组 arr ，你一开始在数组的第一个元素处（下标为 0）。
 * 每一步，你可以从下标 i 跳到下标：
 * 1. i + 1 满足：i + 1 < arr.length
 * 2. i - 1 满足：i - 1 >= 0
 * 3. j 满足：arr[i] == arr[j] 且 i != j
 *
 * 请你返回到达数组最后一个元素的下标处所需的 最少操作次数 。
 * 注意：任何时候你都不能跳到数组外面
 */

/**
 * @param {number[]} arr
 * @return {number}
 *
 * BFS
 */
var minJumps = function(arr) {
  const map = arr.reduce((m, num, i) => {
    if (!m[num]) m[num] = []
    m[num].push(i)
    return m
  }, {})

  let step = 0
  const jumped = new Set([0])
  const queue = [0]

  while (queue.length) {
    let len = queue.length
    while (len) {
      const index = queue.shift()
      if (index === arr.length - 1) return step
      if (index + 1 < arr.length && !jumped.has(index + 1)) {
        queue.push(index + 1)
        jumped.add(index + 1)
      }
      if (index - 1 >= 0 && !jumped.has(index - 1)) {
        queue.push(index - 1)
        jumped.add(index - 1)
      }
      while (map[arr[index]].length) {
        const i = map[arr[index]].pop()
        if (!jumped.has(i)) {
          jumped.add(i)
          queue.push(i)
        }
      }
      len -= 1
    }

    step += 1
  }
  return arr.length
}
