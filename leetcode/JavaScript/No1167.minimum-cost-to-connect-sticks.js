/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * You have some sticks with positive integer lengths.
 * You can connect any two sticks of lengths X and Y into one stick by paying a cost of X + Y.
 * You perform this action until there is one stick remaining.
 * Return the minimum cost of connecting all the given sticks into one stick in this way.
 *
 * Example 1:
 * Input: sticks = [2,4,3]
 * Output: 14
 *
 * Example 2:
 * Input: sticks = [1,8,3,5]
 * Output: 30
 *
 * Constraints:
 * 1. 1 <= sticks.length <= 10^4
 * 2. 1 <= sticks[i] <= 10^4
 *
 * 为了装修新房，你需要加工一些长度为正整数的棒材 sticks。
 * 如果要将长度分别为 X 和 Y 的两根棒材连接在一起，你需要支付 X + Y 的费用。 由于施工需要，你必须将所有棒材连接成一根。
 * 返回你把所有棒材 sticks 连成一根所需要的最低费用。注意你可以任意选择棒材连接的顺序
 *
 * 注意：棒材的拼接不一定要按照顺序，因此是个贪心算法问题：每次仅拼接花费最少的两根，然后重新入队列
 */

/**
 * ====================== Solution 1 ======================
 * 最小堆，悲惨超时
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

  size() {
    return this.queue.length
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
 * @param {number[]} sticks
 * @return {number}
 */
var connectSticks_1 = function(sticks) {
  if (sticks.length <= 1) return 0
  if (sticks.length === 2) return sticks.reduce((n, s) => n + s, 0)

  sticks.sort((s1, s2) => s1 - s2)
  const less = (n1, n2) => n1 < n2
  const heap = new Heap(less, sticks)

  let result = 0
  while (heap.size() > 1) {
    const num = heap.shift() + heap.shift()
    result += num
    heap.push(num)
  }

  return result
}

/**
 * ====================== Solution 2 ======================
 * 普通的插入排序，AC
 */

/**
 * @param {number[]} sticks
 * @return {number}
 */
var connectSticks_2 = function(sticks) {
  if (sticks.length <= 1) return 0
  if (sticks.length === 2) return sticks.reduce((n, s) => n + s, 0)

  sticks.sort((s1, s2) => s2 - s1)
  let result = 0

  while (sticks.length > 1) {
    const num = sticks.pop() + sticks.pop()
    result += num

    let i = sticks.length - 1
    while (i >= 0 && sticks[i] < num) i -= 1
    sticks.splice(i + 1, 0, num)
  }

  return result
}

// 1, 3, 5, 8
// 4, 5, 8 (4)
// 9, 8 (4 + 9)
// 17 (4 + 9 + 17)