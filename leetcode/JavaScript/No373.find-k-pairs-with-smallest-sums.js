/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * You are given two integer arrays nums1 and nums2 sorted in ascending order and an integer k.
 * Define a pair (u,v) which consists of one element from the first array and one element from the second array.
 * Find the k pairs (u1,v1),(u2,v2) ...(uk,vk) with the smallest sums.
 *
 * Example 1:
 * Input: nums1 = [1,7,11], nums2 = [2,4,6], k = 3
 * Output: [[1,2],[1,4],[1,6]]
 * Explanation:
 * The first 3 pairs are returned from the sequence:
 * [1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]
 *
 * Example 2:
 * Input: nums1 = [1,1,2], nums2 = [1,2,3], k = 2
 * Output: [1,1],[1,1]
 * Explanation:
 * The first 2 pairs are returned from the sequence:
 * [1,1],[1,1],[1,2],[2,1],[1,2],[2,2],[1,3],[1,3],[2,3]
 *
 * Example 3:
 * Input: nums1 = [1,2], nums2 = [3], k = 3
 * Output: [1,3],[2,3]
 * Explanation: All possible pairs are returned from the sequence: [1,3],[2,3]
 *
 * 给定两个以升序排列的整形数组 nums1 和 nums2, 以及一个整数 k。
 * 定义一对值 (u,v)，其中第一个元素来自 nums1，第二个元素来自 nums2。
 * 找到和最小的 k 对数字 (u1,v1), (u2,v2) ... (uk,vk)
 */

/**
 * =================== Solution 1 ===================
 * 暴力破解
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs_1 = function(nums1, nums2, k) {
  const result = []

  for (const n1 of nums1) {
    for (const n2 of nums2) {
      result.push([n1, n2])
    }
  }

  return result.sort((a1, a2) => a1[0] + a1[1] - a2[0] - a2[1]).slice(0, k)
}

/**
 * =================== Solution 2 ===================
 * 最小堆
 * 记录 nums1 中每个 index 对应于 nums2 中的 index
 * 如果两者和最小，就保留在堆顶
 */

class Heap {
  constructor(less, init) {
    this.less = less
    this.queue = init
  }

  sortWithChildren(pos) {
    const c1 = pos * 2
    if (c1 - 1 >= this.queue.length) return
    if (this.less(this.queue[c1 - 1], this.queue[pos - 1])) {
      const tmp = this.queue[pos - 1]
      this.queue[pos - 1] = this.queue[c1 - 1]
      this.queue[c1 - 1] = tmp
    }

    const c2 = c1 + 1
    if (c2 - 1 >= this.queue.length) return
    if (this.less(this.queue[c2 - 1], this.queue[pos - 1])) {
      const tmp = this.queue[pos - 1]
      this.queue[pos - 1] = this.queue[c2 - 1]
      this.queue[c2 - 1] = tmp
    }

    this.sortWithChildren(c1)
    this.sortWithChildren(c2)
  }

  shift() {
    if (!this.queue.length) return null
    const tail = this.queue.pop()
    if (!this.queue.length) return tail

    const head = this.queue[0]
    this.queue[0] = tail
    this.sortWithChildren(1)
    return head
  }

  push(val) {
    this.queue.push(val)
    this.sortWithFather(this.queue.length)
  }

  sortWithFather(pos) {
    if (pos <= 1) return
    const f = Math.floor(pos / 2)
    if (this.less(this.queue[pos - 1], this.queue[f - 1])) {
      const tmp = this.queue[pos - 1]
      this.queue[pos - 1] = this.queue[f - 1]
      this.queue[f - 1] = tmp
    }
    this.sortWithFather(f)
  }
}

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 *
 * 注意极限情况：
 * 1. nums1 或者 nums2 是空
 * 2. k > nums1.length * nums2.length
*/
var kSmallestPairs_2 = function(nums1, nums2, k) {
  const result = []
  if (!nums2.length || !nums1.length) return result

  const steps = Array.from({ length: nums1.length }, (_, i) => ({ n1: i, n2: 0 }))
  const less = (item1, item2) => {
    return (nums1[item1.n1] + nums2[item1.n2]) < (nums1[item2.n1] + nums2[item2.n2])
  }
  const heap = new Heap(less, steps)

  while (result.length < k) {
    const min = heap.shift()
    if (min === null) break
    result.push([nums1[min.n1], nums2[min.n2]])
    if (result.length === k) break
    if (min.n2 < nums2.length - 1) {
      heap.push({
        n1: min.n1,
        n2: min.n2 + 1
      })
    }
  }

  return result
}

