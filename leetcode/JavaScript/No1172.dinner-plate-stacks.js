/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * You have an infinite number of stacks arranged in a row and numbered (left to right) from 0, each of the stacks has the same maximum capacity.
 * Implement the DinnerPlates class:
 * 1. DinnerPlates(int capacity) Initializes the object with the maximum capacity of the stacks.
 * 2. void push(int val) pushes the given positive integer val into the leftmost stack with size less than capacity.
 * 3. int pop() returns the value at the top of the rightmost non-empty stack and removes it from that stack, and returns -1 if all stacks are empty.
 * 4. int popAtStack(int index) returns the value at the top of the stack with the given index and removes it from that stack, and returns -1 if the stack with that given index is empty.
 *
 * Example:
 * Input:
 * ["DinnerPlates","push","push","push","push","push","popAtStack","push","push","popAtStack","popAtStack","pop","pop","pop","pop","pop"]
 * [[2],[1],[2],[3],[4],[5],[0],[20],[21],[0],[2],[],[],[],[],[]]
 * Output:
 * [null,null,null,null,null,null,2,null,null,20,21,5,4,3,1,-1]
 *
 * Explanation:
 * DinnerPlates D = DinnerPlates(2);  // Initialize with capacity = 2
 * D.push(1);
 * D.push(2);
 * D.push(3);
 * D.push(4);
 * D.push(5);         // The stacks are now:  2  4
 *                                            1  3  5
 *                                            ﹈ ﹈ ﹈
 * D.popAtStack(0);   // Returns 2.  The stacks are now:     4
 *                                                        1  3  5
 *                                                        ﹈ ﹈ ﹈
 * D.push(20);        // The stacks are now: 20  4
 *                                            1  3  5
 *                                            ﹈ ﹈ ﹈
 * D.push(21);        // The stacks are now: 20  4 21
 *                                            1  3  5
 *                                            ﹈ ﹈ ﹈
 * D.popAtStack(0);   // Returns 20.  The stacks are now:     4 21
 *                                                         1  3  5
 *                                                         ﹈ ﹈ ﹈
 * D.popAtStack(2);   // Returns 21.  The stacks are now:     4
 *                                                         1  3  5
 *                                                         ﹈ ﹈ ﹈
 * D.pop()            // Returns 5.  The stacks are now:      4
 *                                                         1  3
 *                                                         ﹈ ﹈
 * D.pop()            // Returns 4.  The stacks are now:   1  3
 *                                                         ﹈ ﹈
 * D.pop()            // Returns 3.  The stacks are now:   1
 *                                                         ﹈
 * D.pop()            // Returns 1.  There are no stacks.
 * D.pop()            // Returns -1.  There are still no stacks.
 *
 * Constraints:
 * 1. 1 <= capacity <= 20000
 * 2. 1 <= val <= 20000
 * 3. 0 <= index <= 100000
 * 4. At most 200000 calls will be made to push, pop, and popAtStack
 *
 * 我们把无限数量 ∞ 的栈排成一行，按从左到右的次序从 0 开始编号。每个栈的的最大容量 capacity 都相同。
 * 实现一个叫「餐盘」的类 DinnerPlates：
 * 1. DinnerPlates(int capacity) - 给出栈的最大容量 capacity。
 * 2. void push(int val) - 将给出的正整数 val 推入 从左往右第一个 没有满的栈。
 * 3. int pop() - 返回 从右往左第一个 非空栈顶部的值，并将其从栈中删除；如果所有的栈都是空的，请返回 -1。
 * 4. int popAtStack(int index) - 返回编号 index 的栈顶部的值，并将其从栈中删除；如果编号 index 的栈是空的，请返回 -1
 */

/**
 * @param {number} capacity
 */
var DinnerPlates = function(capacity) {
  this.stacks = []
  this.capacity = capacity
  this.next = [0]
  this.elems = []
};

/**
* @param {number} val
* @return {void}
*/
DinnerPlates.prototype.push = function(val) {
  if (!this.capacity) return

  const index = this.next[0] || 0

  if (index === this.stacks.length) this.stacks.push([])
  this.stacks[index].push(val)

  if (this.stacks[index].length === 1) {
    // 第一次
    const pos = this.search(this.elems, index)
    if (this.elems[pos] !== index) this.elems.splice(pos, 0, index)
  }

  if (this.stacks[index].length === this.capacity && this.next.length) {
    this.next.shift()
  }

  if (!this.next.length) this.next.push(this.stacks.length)

  // console.log(` ================ push ${val} ================ `)
  // console.log(JSON.stringify(this.stacks))
  // console.log(`next: [${this.next}]`)
  // console.log(`elems: [${this.elems}]`)
};

DinnerPlates.prototype.search = function(nums, index) {
  let i = 0
  let j = nums.length - 1

  while (i <= j) {
    const mid = Math.floor((i + j) / 2)
    if (nums[mid] === index) return mid
    if (nums[mid] > index) {
      j = mid - 1
    } else {
      i = mid + 1
    }
  }

  return i
}

/**
* @return {number}
*/
DinnerPlates.prototype.pop = function() {
  if (!this.stacks.length) return -1
  if (!this.elems.length) return -1

  const index = this.elems[this.elems.length - 1]
  const result = this.stacks[index].pop()

  if (!this.stacks[index].length) {
    this.elems.pop()
  }

  if (this.stacks[index].length + 1 === this.capacity) {
    // 第一次删除，则开始有剩余容量
    // add index
    const pos = this.search(this.next, index)
    if (this.next[pos] !== index) this.next.splice(pos, 0, index)
  }

  // console.log(` ================ pop ================ `)
  // console.log(JSON.stringify(this.stacks))
  // console.log(`next: [${this.next}]`)
  // console.log(`elems: [${this.elems}]`)

  return result
};

/**
* @param {number} index
* @return {number}
*/
DinnerPlates.prototype.popAtStack = function(index) {
  if (!this.stacks[index] || !this.stacks[index].length) return -1

  const result = this.stacks[index].pop()
  if (!this.stacks[index].length) {
    const pos = this.search(this.elems, index)
    this.elems.splice(pos, 1)
  }

  if (this.stacks[index].length + 1 === this.capacity) {
    // 第一次删除，则开始有剩余容量
    const pos = this.search(this.next, index)
    if (this.next[pos] !== index) this.next.splice(pos, 0, index)
  }

  // console.log(` ================ popAtStack ${index} ================ `)
  // console.log(JSON.stringify(this.stacks))
  // console.log(`next: [${this.next}]`)
  // console.log(`elems: [${this.elems}]`)

  return result
};

/**
* Your DinnerPlates object will be instantiated and called as such:
* var obj = new DinnerPlates(capacity)
* obj.push(val)
* var param_2 = obj.pop()
* var param_3 = obj.popAtStack(index)
*/