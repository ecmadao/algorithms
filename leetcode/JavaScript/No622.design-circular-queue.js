/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Design your implementation of the circular queue. The circular queue is a linear data structure in which the operations are performed based on FIFO (First In First Out) principle and the last position is connected back to the first position to make a circle. It is also called "Ring Buffer".
 * One of the benefits of the circular queue is that we can make use of the spaces in front of the queue. In a normal queue, once the queue becomes full, we cannot insert the next element even if there is a space in front of the queue. But using the circular queue, we can use the space to store new values.
 * Your implementation should support following operations:
 *
 * MyCircularQueue(k): Constructor, set the size of the queue to be k.
 * Front: Get the front item from the queue. If the queue is empty, return -1.
 * Rear: Get the last item from the queue. If the queue is empty, return -1.
 * enQueue(value): Insert an element into the circular queue. Return true if the operation is successful.
 * deQueue(): Delete an element from the circular queue. Return true if the operation is successful.
 * isEmpty(): Checks whether the circular queue is empty or not.
 * isFull(): Checks whether the circular queue is full or not.
 *
 * Example:
 * MyCircularQueue circularQueue = new MyCircularQueue(3); // set the size to be 3
 * circularQueue.enQueue(1);  // return true
 * circularQueue.enQueue(2);  // return true
 * circularQueue.enQueue(3);  // return true
 * circularQueue.enQueue(4);  // return false, the queue is full
 * circularQueue.Rear();  // return 3
 * circularQueue.isFull();  // return true
 * circularQueue.deQueue();  // return true
 * circularQueue.enQueue(4);  // return true
 * circularQueue.Rear();  // return 4
 *
 * Note:
 * All values will be in the range of [0, 1000].
 * The number of operations will be in the range of [1, 1000].
 * Please do not use the built-in Queue library.
 */

var List = function(val) {
  this.val = val
  this.next = null
  this.pre = null
}

/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function(k) {
  this.size = k
  this.curSize = 0
  this.head = null
};

/**
 * Insert an element into the circular queue. Return true if the operation is successful.
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
  if (this.curSize === this.size) return false

  const list = new List(value)
  if (!this.head) {
    this.head = list
  } else {
    const tail = this.head.pre
    tail.next = list
    list.pre = tail
  }
  this.head.pre = list
  this.curSize += 1

  return true
};

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * 注：删首位元素
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
  if (this.curSize === 0) return false

  if (this.curSize === 1) {
    this.head = null
  } else {
    const pre = this.head.pre
    this.head = this.head.next
    this.head.pre = pre
  }
  this.curSize -= 1

  return true
};

/**
 * Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
  if (!this.curSize) return -1
  return this.head.val
};

/**
 * Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
  if (!this.curSize) return -1
  return this.head.pre.val
};

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
  return this.curSize === 0
};

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
  return this.curSize === this.size
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */

var obj = new MyCircularQueue(8)
obj.enQueue(3)
console.log(' ================ 3 ================ ')
console.log(obj.head)
console.log(obj.Front())
console.log(obj.Rear())
obj.enQueue(9)
console.log(' ================ 39 ================ ')
console.log(obj.head)
console.log(obj.Front())
console.log(obj.Rear())
obj.enQueue(5)
console.log(' ================ 395 ================ ')
console.log(obj.head)
console.log(obj.Front())
console.log(obj.Rear())
obj.enQueue(0)
console.log(' ================ 3950 ================ ')
console.log(obj.head)
console.log(obj.Front())
console.log(obj.Rear())

obj.deQueue()
console.log(' ================ 950 ================ ')
obj.deQueue()
console.log(' ================ 50 ================ ')
console.log(obj.Front())
console.log(obj.Rear())

