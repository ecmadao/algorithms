/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * We have a list of points on the plane. Find the K closest points to the origin (0, 0).
 * (Here, the distance between two points on a plane is the Euclidean distance.)
 * You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in.)
 *
 * Example 1:
 * Input: points = [[1,3],[-2,2]], K = 1
 * Output: [[-2,2]]
 * Explanation:
 * The distance between (1, 3) and the origin is sqrt(10).
 * The distance between (-2, 2) and the origin is sqrt(8).
 * Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
 * We only want the closest K = 1 points from the origin, so the answer is just [[-2,2]].
 *
 * Example 2:
 * Input: points = [[3,3],[5,-1],[-2,4]], K = 2
 * Output: [[3,3],[-2,4]]
 * (The answer [[-2,4],[3,3]] would also be accepted.)
 *
 * Note:
 * 1. 1 <= K <= points.length <= 10000
 * 2. -10000 < points[i][0] < 10000
 * 3. -10000 < points[i][1] < 10000
 *
 * 我们有一个由平面上的点组成的列表 points。需要从中找出 K 个距离原点 (0, 0) 最近的点。（这里，平面上两点之间的距离是欧几里德距离。）
 * 你可以按任何顺序返回答案。除了点坐标的顺序之外，答案确保是唯一的
 */

/**
 * =================== Solution 1 ===================
 * 最小堆
 */

class Heap {
  constructor(less) {
    this.less = less
    this.queue = []
  }

  push(val) {
    this.queue.push(val)
    this.sortWithFather(this.queue.length)
  }

  sortWithFather(cPos) {
    let fPos = Math.floor(cPos / 2)
    const raw = this.queue[cPos - 1]

    while (cPos > 1 && this.less(raw, this.queue[fPos - 1])) {
      this.queue[cPos - 1] = this.queue[fPos - 1]
      cPos = fPos
      fPos = Math.floor(cPos / 2)
    }

    this.queue[cPos - 1] = raw
  }

  shift() {
    if (!this.queue.length) return null
    if (this.queue.length === 1) return this.queue.pop()

    const result = this.queue.shift()
    this.queue.unshift(this.queue.pop())
    this.sortWithChild(1)

    return result
  }

  sortWithChild(fPos) {
    // 左子节点
    let cPos = fPos * 2
    const raw = this.queue[fPos - 1]

    while (cPos - 1 < this.queue.length) {
      if (cPos < this.queue.length && this.less(this.queue[cPos], this.queue[cPos - 1])) {
        cPos += 1
      }

      if (!this.less(this.queue[cPos - 1], raw)) break
      this.queue[fPos - 1] = this.queue[cPos - 1]
      fPos = cPos
      cPos = fPos * 2
    }

    this.queue[fPos - 1] = raw
  }
}

/**
* @param {number[][]} points
* @param {number} K
* @return {number[][]}
*/
var kClosest_1 = function(points, K) {
  const less = ([a1, b1], [a2, b2]) => (a1 * a1 + b1 * b1) < (a2 * a2 + b2 * b2)
  const heap = new Heap(less)

  for (const point of points) {
    heap.push(point)
  }

  return Array.from({ length: K }, (_, i) => heap.shift())
}

/**
 * =================== Solution 2 ===================
 * 利用快排分区
 */

const compare = (p1, p2) => (p1[0] * p1[0] + p1[1] * p1[1]) - (p2[0] * p2[0] + p2[1] * p2[1])

const partition = (nums, i, j) => {
  const target = i
  const base = nums[target]

  while (i < j) {
    while (j > i && compare(nums[j], base) >= 0) j -= 1
    while (i < j && compare(nums[i], base) <= 0) i += 1

    if (i >= j) break
    const tmp = nums[i]
    nums[i] = nums[j]
    nums[j] = tmp
  }

  nums[target] = nums[i]
  nums[i] = base

  return i
}

/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest_2 = function(points, K) {
  let l = 0
  let r = points.length - 1

  while (l < r) {
    const mid = partition(points, l, r)
    if (mid === K) break
    if (mid < K) {
      l = mid + 1
    } else {
      r = mid - 1
    }
  }

  return points.slice(0, K)
}
