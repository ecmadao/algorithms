/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
 * push(x) -- Push element x onto stack.
 * pop() -- Removes the element on top of the stack.
 * top() -- Get the top element.
 * getMin() -- Retrieve the minimum element in the stack.
 *
 * Example:
 * MinStack minStack = new MinStack();
 * minStack.push(-2);
 * minStack.push(0);
 * minStack.push(-3);
 * minStack.getMin();   --> Returns -3.
 * minStack.pop();
 * minStack.top();      --> Returns 0.
 * minStack.getMin();   --> Returns -2.
 */

/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.min = null;
  this.datas = [];
};

/**
* @param {number} x
* @return {void}
*/
MinStack.prototype.push = function(x) {
  this.datas.push(x);
  if (this.min === null || x < this.min) this.min = x;
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  const num = this.datas.pop();
  if (num === this.min) {
    this.min = null;
    this.min = this.getMin();
  }
  return num;
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  return this.datas[this.datas.length - 1];
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
  if (this.min !== null) return this.min;
  for (let i = 0; i < this.datas.length; i += 1) {
    const num = this.datas[i];
    if (this.min === null || num < this.min) this.min = num;
  }
  return this.min;
};

/**
* Your MinStack object will be instantiated and called as such:
* var obj = Object.create(MinStack).createNew()
* obj.push(x)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/