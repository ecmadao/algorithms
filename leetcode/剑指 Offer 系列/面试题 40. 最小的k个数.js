/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * 输入整数数组 arr ，找出其中最小的 k 个数。例如，输入4、5、1、6、2、7、3、8这8个数字，则最小的4个数字是1、2、3、4。
 *
 * 示例 1：
 * 输入：arr = [3,2,1], k = 2
 * 输出：[1,2] 或者 [2,1]
 *
 * 示例 2：
 * 输入：arr = [0,1,2,1], k = 1
 * 输出：[0]
 *
 * 限制：
 * 1. 0 <= k <= arr.length <= 10000
 * 2. 0 <= arr[i] <= 10000
 */


class Heap {
  constructor() {
    this.queue = []
  }

  push(val) {
    this.queue.push(val)
    this.sortWithFather(this.queue.length)
  }

  sortWithFather(cPos) {
    let fPos = Math.floor(cPos / 2)
    const target = this.queue[cPos - 1]

    while (fPos >= 1 && target > this.queue[fPos - 1]) {
      this.queue[cPos - 1] = this.queue[fPos - 1]
      cPos = fPos
      fPos = Math.floor(cPos / 2)
    }
    this.queue[cPos - 1] = target
  }

  sortWithChild(fPos) {
    const target = this.queue[fPos - 1]
    let cPos = fPos * 2

    while (cPos <= this.queue.length) {
      if (cPos < this.queue.length && this.queue[cPos] > this.queue[cPos - 1]) cPos += 1
      if (this.queue[cPos - 1] <= target) break

      this.queue[fPos - 1] = this.queue[cPos - 1]
      fPos = cPos
      cPos = fPos * 2
    }

    this.queue[fPos - 1] = target
  }

  head() {
    return this.queue[0]
  }
}

/**
* @param {number[]} arr
* @param {number} k
* @return {number[]}
*/
var getLeastNumbers = function(arr, k) {
  if (!k) return []
  if (k === arr.length) return arr

  const heap = new Heap()
  for (let i = 0; i < arr.length; i += 1) {
    if (i < k) {
      heap.push(arr[i])
    } else if (arr[i] < heap.head()) {
      heap.queue[0] = arr[i]
      heap.sortWithChild(1)
    }
  }

  return heap.queue
}
