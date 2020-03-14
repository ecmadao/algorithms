/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * 定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，调用 min、push 及 pop 的时间复杂度都是 O(1)。
 *
 * 示例:
 * MinStack minStack = new MinStack();
 * minStack.push(-2);
 * minStack.push(0);
 * minStack.push(-3);
 * minStack.min();   --> 返回 -3.
 * minStack.pop();
 * minStack.top();      --> 返回 0.
 * minStack.min();   --> 返回 -2.
 *
 * 提示：
 * 各函数的调用总次数不超过 20000 次
 * 注意：本题与主站 155 题相同：https://leetcode-cn.com/problems/min-stack/
 */

/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.queue = []
  this.sorted = []
};

MinStack.prototype.search = function(num) {
  let i = 0
  let j = this.sorted.length - 1
  while (i <= j) {
    const mid = Math.floor((i + j) / 2)
    if (this.sorted[mid] === num) return mid
    if (this.sorted[mid] < num) {
      i = mid + 1
    } else {
      j = mid - 1
    }
  }
  return i
}

/**
* @param {number} x
* @return {void}
*/
MinStack.prototype.push = function(x) {
  const index = this.search(x)
  this.sorted.splice(index, 0, x)
  this.queue.push([index, x])
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  const [index, num] = this.queue.pop()
  this.sorted.splice(index, 1)
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  if (!this.queue.length) return null
  return this.queue[this.queue.length - 1][1]
};

/**
* @return {number}
*/
MinStack.prototype.min = function() {
  if (!this.sorted.length) return null
  return this.sorted[0]
};

/**
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(x)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.min()
*/