/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * 三合一。描述如何只用一个数组来实现三个栈。
 * 你应该实现 push(stackNum, value)、pop(stackNum)、isEmpty(stackNum)、peek(stackNum) 方法。
 * stackNum 表示栈下标，value 表示压入的值。
 * 构造函数会传入一个 stackSize 参数，代表每个栈的大小。
 *
 * 示例 1:
 * 输入：
 * ["TripleInOne", "push", "push", "pop", "pop", "pop", "isEmpty"]
 * [[1], [0, 1], [0, 2], [0], [0], [0], [0]]
 * 输出：
 * [null, null, null, 1, -1, -1, true]
 * 说明：当栈为空时`pop, peek`返回-1，当栈满时`push`不压入元素。
 *
 * 示例 2:
 * 输入：
 * ["TripleInOne", "push", "push", "push", "pop", "pop", "pop", "peek"]
 * [[2], [0, 1], [0, 2], [0, 3], [0], [0], [0], [0]]
 * 输出：
 * [null, null, null, null, 2, 1, -1, -1]
 */

/**
 * @param {number} stackSize
 */
var TripleInOne = function(stackSize) {
  this.index = [[0, 0, stackSize - 1], [stackSize, stackSize, stackSize * 2 - 1], [stackSize * 2, stackSize * 2, stackSize * 3 - 1]]
  this.stack = Array.from({ length: stackSize * 3 }, (_, i) => -1)
};

/**
* @param {number} stackNum
* @param {number} value
* @return {void}
*/
TripleInOne.prototype.push = function(stackNum, value) {
  const [index, min, max] = this.index[stackNum]
  if (index > max) return

  this.stack[index] = value
  this.index[stackNum] = [index + 1, min, max]
};

/**
* @param {number} stackNum
* @return {number}
*/
TripleInOne.prototype.pop = function(stackNum) {
  const [index, min, max] = this.index[stackNum]
  let res

  if (index === min) {
    res = this.stack[index]
    this.stack[index] = -1
  } else {
    res = this.stack[index - 1]
    this.stack[index - 1] = -1
    this.index[stackNum] = [index - 1, min, max]
  }

  if (res === undefined) res = -1
  return res
};

/**
* @param {number} stackNum
* @return {number}
*/
TripleInOne.prototype.peek = function(stackNum) {
  let [index, min, _] = this.index[stackNum]
  index = index === min ? index : index - 1
  let res = this.stack[index]
  if (res === undefined) res = -1
  return res
};

/**
* @param {number} stackNum
* @return {boolean}
*/
TripleInOne.prototype.isEmpty = function(stackNum) {
  const [index, min, _] = this.index[stackNum]
  return index === min && (this.stack[index] === -1 || this.stack[index] === undefined)
};

/**
* Your TripleInOne object will be instantiated and called as such:
* var obj = new TripleInOne(stackSize)
* obj.push(stackNum,value)
* var param_2 = obj.pop(stackNum)
* var param_3 = obj.peek(stackNum)
* var param_4 = obj.isEmpty(stackNum)
*/