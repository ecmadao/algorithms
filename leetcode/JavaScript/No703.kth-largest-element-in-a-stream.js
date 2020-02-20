/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Design a class to find the kth largest element in a stream. Note that it is the kth largest element in the sorted order, not the kth distinct element.
 * Your KthLargest class will have a constructor which accepts an integer k and an integer array nums, which contains initial elements from the stream.
 * For each call to the method KthLargest.add, return the element representing the kth largest element in the stream.
 *
 * Example:
 * int k = 3;
 * int[] arr = [4,5,8,2];
 * KthLargest kthLargest = new KthLargest(3, arr);
 * kthLargest.add(3);   // returns 4
 * kthLargest.add(5);   // returns 5
 * kthLargest.add(10);  // returns 5
 * kthLargest.add(9);   // returns 8
 * kthLargest.add(4);   // returns 8
 *
 * Note:
 * You may assume that nums' length ≥ k-1 and k ≥ 1.
 *
 * 设计一个找到数据流中第K大元素的类（class）。注意是排序后的第 K 大元素，不是第 K 个不同的元素。
 * 你的 KthLargest 类需要一个同时接收整数 k 和整数数组nums 的构造器，它包含数据流中的初始元素。
 * 每次调用 KthLargest.add，返回当前数据流中第K大的元素
 */

/*
 * ============================= Solution 1 =============================
 * 二分插入
 */

/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest_1 = function(k, nums) {
  this.k = k
  this.nums = nums.sort((n1, n2) => n1 - n2)
};

KthLargest_1.prototype.searchAndInsert = function(val) {
  let i = 0
  let j = this.nums.length - 1
  let index = null

  if (!this.nums.length || val >= this.nums[j]) {
    this.nums.push(val)
    return
  } else if (val <= this.nums[0]) {
    this.nums.unshift(val)
    return
  }

  while (i <= j) {
    const mid = Math.floor((i + j) / 2)
    if (this.nums[mid] === val) {
      index = mid
      break
    } else if (this.nums[mid] < val) {
      i = mid + 1
    } else {
      j = mid - 1
    }
  }

  if (index === null) index = i
  this.nums.splice(index, 0, val)
}

/**
* @param {number} val
* @return {number}
*/
KthLargest_1.prototype.add = function(val) {
  this.searchAndInsert(val)
  return this.nums[this.nums.length - this.k]
};

/**
* Your KthLargest object will be instantiated and called as such:
* var obj = new KthLargest(k, nums)
* var param_1 = obj.add(val)
*/


/*
 * ============================= Solution 2 =============================
 * 最小堆
 */


class Heap {
  constructor() {
    this.queue = []
  }

  push(val) {
    this.queue.push(val)
    this.sortWithFather(this.queue.length)
  }

  size() {
    return this.queue.length
  }

  shift() {
    if (!this.queue.length) return null
    if (this.queue.length === 1) return this.queue.pop()

    const last = this.queue[this.queue.length - 1]
    this.queue[this.queue.length - 1] = this.queue[0]
    this.queue[0] = last
    const result = this.queue.pop()
    this.sortWithChildren(1)

    return result
  }

  top() {
    return this.queue[0]
  }

  sortWithFather(cPos) {
    let fPos = Math.floor(cPos / 2)
    const target = this.queue[cPos - 1]

    while (cPos > 1 && target < this.queue[fPos - 1]) {
      this.queue[cPos - 1] = this.queue[fPos - 1]
      cPos = fPos
      fPos = Math.floor(cPos / 2)
    }

    this.queue[cPos - 1] = target
  }

  sortWithChildren(fPos) {
    // 左子节点
    let cPos = fPos * 2
    const target = this.queue[fPos - 1]

    while (cPos - 1 < this.queue.length) {
      // 如果存在右子节点，且右子节点小于左子节点
      if (cPos < this.queue.length && this.queue[cPos - 1] > this.queue[cPos]) {
        cPos += 1
      }

      if (this.queue[cPos - 1] >= target) break
      this.queue[fPos - 1] = this.queue[cPos - 1]

      fPos = cPos
      cPos = fPos * 2
    }

    this.queue[fPos - 1] = target
  }
}

/**
* @param {number} k
* @param {number[]} nums
*/
var KthLargest_2 = function(k, nums) {
  this.heap = new Heap()
  this.k = k

  for (let i = 0; i < nums.length; i += 1) {
    if (i < k) {
      this.heap.push(nums[i])
    } else if (i >= k && nums[i] > this.heap.top()) {
      this.heap.queue[0] = nums[i]
      this.heap.sortWithChildren(1)
    }
  }
}

/**
* @param {number} val
* @return {number}
*/
KthLargest_2.prototype.add = function(val) {
  if (this.heap.size() < this.k) {
    this.heap.push(val)
  } else if (val > this.heap.top()) {
    this.heap.queue[0] = val
    this.heap.sortWithChildren(1)
  }
  return this.heap.top()
}

/**
* Your KthLargest object will be instantiated and called as such:
* var obj = new KthLargest(k, nums)
* var param_1 = obj.add(val)
*/