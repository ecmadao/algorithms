/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Implement the following operations of a queue using stacks.
 * - push(x) -- Push element x to the back of queue.
 * - pop() -- Removes the element from in front of queue.
 * - peek() -- Get the front element.
 * - empty() -- Return whether the queue is empty.
 *
 * Note:
 * - You must use only standard operations of a stack -- which means only push to top, peek/pop from top, size, and is empty operations are valid.
 * - Depending on your language, stack may not be supported natively. You may simulate a stack by using a list or deque (double-ended queue), as long as you use only standard operations of a stack.
 * - You may assume that all operations are valid (for example, no pop or peek operations will be called on an empty queue).
 */

var Node = function(val, next) {
  this.val = val || null;
  this.next = next || null;
};

/**
* Initialize your data structure here.
*/
var MyQueue = function() {
  this.head = null;
  this.tail = null;
  this.size = 0;
};

/**
* Push element x to the back of queue.
* @param {number} x
* @return {void}
*/
MyQueue.prototype.push = function(x) {
  var node = new Node(x);
  if (!this.head) {
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    this.tail = node;
  }
  this.size += 1;
};

/**
* Removes the element from in front of queue and returns that element.
* @return {number}
*/
MyQueue.prototype.pop = function() {
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
* Get the front element.
* @return {number}
*/
MyQueue.prototype.peek = function() {
  return this.head.val;
};

/**
* Returns whether the queue is empty.
* @return {boolean}
*/
MyQueue.prototype.empty = function() {
  return this.size === 0;
};

/**
* Your MyQueue object will be instantiated and called as such:
* var obj = Object.create(MyQueue).createNew()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.peek()
* var param_4 = obj.empty()
*/