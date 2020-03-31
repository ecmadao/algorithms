/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * 用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead，
 * 分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，deleteHead 操作返回 -1 )
 *
 * 示例 1：
 * 输入：
 * ["CQueue","appendTail","deleteHead","deleteHead"]
 * [[],[3],[],[]]
 * 输出：[null,null,3,-1]
 *
 * 示例 2：
 * 输入：
 * ["CQueue","deleteHead","appendTail","appendTail","deleteHead","deleteHead"]
 * [[],[],[5],[2],[],[]]
 * 输出：[null,-1,null,null,5,2]
 *
 * 提示：
 * 1. 1 <= values <= 10000
 * 2. 最多会对 appendTail、deleteHead 进行 10000 次调用
 */

var CQueue = function() {
  this.normal = []
  this.reversed = []
};

/**
* @param {number} value
* @return {void}
*/
CQueue.prototype.appendTail = function(value) {
  this.normal.push(value)
};

/**
* @return {number}
*/
CQueue.prototype.deleteHead = function() {
  if (this.reversed.length !== 0) return this.reversed.pop()

  while (this.normal.length) {
    this.reversed.push(this.normal.pop())
  }
  return this.reversed.pop() || -1
};

/**
* Your CQueue object will be instantiated and called as such:
* var obj = new CQueue()
* obj.appendTail(value)
* var param_2 = obj.deleteHead()
*/
