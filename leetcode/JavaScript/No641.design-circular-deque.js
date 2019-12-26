/*
 * Difficulty:
 * Medium
 *
 * Design your implementation of the circular double-ended queue (deque).
 * Your implementation should support following operations:
 *
 * MyCircularDeque(k): Constructor, set the size of the deque to be k.
 * insertFront(): Adds an item at the front of Deque. Return true if the operation is successful.
 * insertLast(): Adds an item at the rear of Deque. Return true if the operation is successful.
 * deleteFront(): Deletes an item from the front of Deque. Return true if the operation is successful.
 * deleteLast(): Deletes an item from the rear of Deque. Return true if the operation is successful.
 * getFront(): Gets the front item from the Deque. If the deque is empty, return -1.
 * getRear(): Gets the last item from Deque. If the deque is empty, return -1.
 * isEmpty(): Checks whether Deque is empty or not.
 * isFull(): Checks whether Deque is full or not.
 *
 * Example:
 * MyCircularDeque circularDeque = new MycircularDeque(3); // set the size to be 3
 * circularDeque.insertLast(1);			// return true
 * circularDeque.insertLast(2);			// return true
 * circularDeque.insertFront(3);			// return true
 * circularDeque.insertFront(4);			// return false, the queue is full
 * circularDeque.getRear();  			// return 2
 * circularDeque.isFull();				// return true
 * circularDeque.deleteLast();			// return true
 * circularDeque.insertFront(4);			// return true
 * circularDeque.getFront();			// return 4
 *
 * Note:
 * All values will be in the range of [0, 1000].
 * The number of operations will be in the range of [1, 1000].
 * Please do not use the built-in Deque library.
 */


/**
* @param {*} val: number
* @param {*} next: List
*/
var List = function(val, next = null) {
  this.val = val
  this.next = next
  this.pre = null
}

/**
* Initialize your data structure here. Set the size of the deque to be k.
* @param {number} k
*/
var MyCircularDeque = function(k) {
  this.size = k
  this.curSize = 0
  this.head = null
  this.tail = null
};

/**
* Adds an item at the front of Deque. Return true if the operation is successful. 
* @param {number} value
* @return {boolean}
*/
MyCircularDeque.prototype.insertFront = function(value) {
  if (this.curSize === this.size) return false
  const point = new List(value)
  if (!this.head) {
    this.tail = point
  } else {
    point.next = this.head
    this.head.pre = point
  }
  this.head = point
  this.curSize += 1
  return true
};

/**
* Adds an item at the rear of Deque. Return true if the operation is successful. 
* @param {number} value
* @return {boolean}
*/
MyCircularDeque.prototype.insertLast = function(value) {
  if (this.curSize === this.size) return false
  const point = new List(value)
  if (!this.tail) {
    this.head = point
  } else {
    point.pre = this.tail
    this.tail.next = point
  }
  this.tail = point
  this.curSize += 1
  return true
};

/**
* Deletes an item from the front of Deque. Return true if the operation is successful.
* @return {boolean}
*/
MyCircularDeque.prototype.deleteFront = function() {
  if (!this.curSize) return false
  this.head = this.head.next
  if (this.head) this.head.pre = null
  this.curSize -=1

  if (!this.curSize) this.tail = null
  return true
};

/**
* Deletes an item from the rear of Deque. Return true if the operation is successful.
* @return {boolean}
*/
MyCircularDeque.prototype.deleteLast = function() {
  if (!this.curSize) return false
  this.tail = this.tail.pre
  if (this.tail) this.tail.next = null
  this.curSize -=1

  if (!this.curSize) this.head = null
  return true
};

/**
* Get the front item from the deque.
* @return {number}
*/
MyCircularDeque.prototype.getFront = function() {
  return this.head ? this.head.val : -1
};

/**
* Get the last item from the deque.
* @return {number}
*/
MyCircularDeque.prototype.getRear = function() {
  return this.tail ? this.tail.val : -1
};

/**
* Checks whether the circular deque is empty or not.
* @return {boolean}
*/
MyCircularDeque.prototype.isEmpty = function() {
  // return this.queue.length === 0
  return this.curSize === 0
};

/**
* Checks whether the circular deque is full or not.
* @return {boolean}
*/
MyCircularDeque.prototype.isFull = function() {
  // return this.queue.length === this.size
  return this.curSize === this.size
};

/**
* Your MyCircularDeque object will be instantiated and called as such:
* var obj = new MyCircularDeque(k)
* var param_1 = obj.insertFront(value)
* var param_2 = obj.insertLast(value)
* var param_3 = obj.deleteFront()
* var param_4 = obj.deleteLast()
* var param_5 = obj.getFront()
* var param_6 = obj.getRear()
* var param_7 = obj.isEmpty()
* var param_8 = obj.isFull()
*/

var obj = new MyCircularDeque(41)
console.log(obj.insertFront(70))
console.log(obj.insertLast(11))
console.log('=================')
console.log(obj.head)
console.log(obj.tail)
console.log(obj.deleteLast())
console.log('=================')
console.log(obj.head)
console.log(obj.tail)
console.log(obj.deleteFront())
console.log('=================')
console.log(obj.head)
console.log(obj.tail)
console.log(obj.insertFront(49))
console.log(obj.insertLast(27))
console.log(obj.getFront())
console.log('=================')
console.log(obj.head)
console.log(obj.tail)