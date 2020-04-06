/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * Implement FreqStack, a class which simulates the operation of a stack-like data structure.
 *
 * FreqStack has two functions:
 * 1. push(int x), which pushes an integer x onto the stack.
 * 2. pop(), which removes and returns the most frequent element in the stack.
 *
 * If there is a tie for most frequent element, the element closest to the top of the stack is removed and returned.
 *
 * Example 1:
 * Input:
 * ["FreqStack","push","push","push","push","push","push","pop","pop","pop","pop"],
 * [[],[5],[7],[5],[7],[4],[5],[],[],[],[]]
 * Output: [null,null,null,null,null,null,null,5,7,5,4]
 * Explanation:
 * After making six .push operations, the stack is [5,7,5,7,4,5] from bottom to top.  Then:
 * pop() -> returns 5, as 5 is the most frequent.
 * The stack becomes [5,7,5,7,4].
 *
 * pop() -> returns 7, as 5 and 7 is the most frequent, but 7 is closest to the top.
 * The stack becomes [5,7,5,4].
 *
 * pop() -> returns 5.
 * The stack becomes [5,7,4].
 *
 * pop() -> returns 4.
 * The stack becomes [5,7].
 *
 * Note:
 * 1. Calls to FreqStack.push(int x) will be such that 0 <= x <= 10^9.
 * 2. It is guaranteed that FreqStack.pop() won't be called if the stack has zero elements.
 * 3. The total number of FreqStack.push calls will not exceed 10000 in a single test case.
 * 4. The total number of FreqStack.pop calls will not exceed 10000 in a single test case.
 * 5. The total number of FreqStack.push and FreqStack.pop calls will not exceed 150000 across all test cases.
 *
 * 实现 FreqStack，模拟类似栈的数据结构的操作的一个类。
 *
 * FreqStack 有两个函数：
 * 1. push(int x)，将整数 x 推入栈中。
 * 2. pop()，它移除并返回栈中出现最频繁的元素。
 * 如果最频繁的元素不只一个，则移除并返回最接近栈顶的元素。
 */

var FreqStack = function() {
  this.queue = []
  this.count = new Map()
  this.map = new Map()
  this.max = 0
}

/**
* @param {number} x
* @return {void}
*/
FreqStack.prototype.push = function(x) {
  this.queue.push(x)

  const count = (this.count.get(x) || 0) + 1
  this.count.set(x, count)
  this.max = Math.max(this.max, count)

  const set = this.map.get(count) || new Set()
  set.add(x)
  this.map.set(count, set)

  if (count > 1) {
    const pre = this.map.get(count - 1)
    pre.delete(x)
    if (!pre.size) {
      this.map.delete(count - 1)
    } else {
      this.map.set(count - 1, pre)
    }
  }
}

/**
* @return {number}
*/
FreqStack.prototype.pop = function() {
  let i = this.queue.length

  while (i >= 0) {
    const num = this.queue[i]
    const count = this.count.get(num)
    if (count !== this.max) {
      i -= 1
      continue
    }

    const set = this.map.get(count)
    set.delete(num)
    if (!set.size) {
      this.map.delete(count)
      this.max -= 1
    } else {
      this.map.set(count, set)
    }

    if (count - 1 > 0) {
      const pre = this.map.get(count - 1) || new Set()
      pre.add(num)
      this.map.set(count - 1, pre)
      this.count.set(num, count - 1)
    } else {
      this.count.delete(num)
    }

    this.queue.splice(i, 1)
    return num
  }
}

/**
* Your FreqStack object will be instantiated and called as such:
* var obj = new FreqStack()
* obj.push(x)
* var param_2 = obj.pop()
*/