/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Implement the following operations of a stack using queues.
 * - push(x) -- Push element x onto stack.
 * - pop() -- Removes the element on top of the stack.
 * - top() -- Get the top element.
 * - empty() -- Return whether the stack is empty.
 *
 * Notes:
 * - You must use only standard operations of a queue -- which means only push to back, peek/pop from front, size, and is empty operations are valid.
 * - Depending on your language, queue may not be supported natively. You may simulate a queue by using a list or deque (double-ended queue), as long as you use only standard operations of a queue.
 * - You may assume that all operations are valid (for example, no pop or top operations will be called on an empty stack).
 */

var Node = function(val, next) {
  this.val = val || null;
  this.next = next || null;
};

/**
* Initialize your data structure here.
*/
var MyStack = function() {
  this.head = null;
  this.tail = null;
  this.size = 0;
};

/**
* Push element x onto stack.
* @param {number} x
* @return {void}
*/
MyStack.prototype.push = function(x) {
  var node = new Node(x);
  if (!this.head) {
    this.head = node;
    this.tail = node;
  } else {
    node.next = this.head;
    this.head = node;
  }
  this.size += 1;
};

/**
* Removes the element on top of the stack and returns that element.
* @return {number}
*/
MyStack.prototype.pop = function() {
  if (!this.head) {
    return null;
  }
  var node = this.head;
  this.head = this.head.next;
  if (!this.head) this.tail = null;
  this.size -= 1;
  return node.val;
};

/**
* Get the top element.
* @return {number}
*/
MyStack.prototype.top = function() {
  return this.head.val;
};

/**
* Returns whether the stack is empty.
* @return {boolean}
*/
MyStack.prototype.empty = function() {
  return this.size === 0;
};

/**
* Your MyStack object will be instantiated and called as such:
* var obj = Object.create(MyStack).createNew()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.empty()
*/
