/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * Design a Skiplist without using any built-in libraries.
 * A Skiplist is a data structure that takes O(log(n)) time to add, erase and search.
 * Comparing with treap and red-black tree which has the same function and performance, the code length of Skiplist can be comparatively short and the idea behind Skiplists are just simple linked lists.
 *
 * You can see there are many layers in the Skiplist.
 * Each layer is a sorted linked list. With the help of the top layers, add , erase and search can be faster than O(n).
 * It can be proven that the average time complexity for each operation is O(log(n)) and space complexity is O(n).
 * To be specific, your design should include these functions:
 * 1. bool search(int target) : Return whether the target exists in the Skiplist or not.
 * 2. void add(int num): Insert a value into the SkipList.
 * 3. bool erase(int num): Remove a value in the Skiplist.
 *    - If num does not exist in the Skiplist, do nothing and return false.
 *    - If there exists multiple num values, removing any one of them is fine.
 *
 * See more about Skiplist : https://en.wikipedia.org/wiki/Skip_list
 * Note that duplicates may exist in the Skiplist, your code needs to handle this situation.
 *
 * Example:
 * Skiplist skiplist = new Skiplist();
 * skiplist.add(1);
 * skiplist.add(2);
 * skiplist.add(3);
 * skiplist.search(0);   // return false.
 * skiplist.add(4);
 * skiplist.search(1);   // return true.
 * skiplist.erase(0);    // return false, 0 is not in skiplist.
 * skiplist.erase(1);    // return true.
 * skiplist.search(1);   // return false, 1 has already been erased.
 *
 * Constraints:
 * 1. 0 <= num, target <= 20000
 * 2. At most 50000 calls will be made to search, add, and erase.
 *
 * 不使用任何库函数，设计一个跳表。
 * 跳表是在 O(log(n)) 时间内完成增加、删除、搜索操作的数据结构。
 * 跳表相比于树堆与红黑树，其功能与性能相当，并且跳表的代码长度相较下更短，其设计思想与链表相似。
 * 跳表中有很多层，每一层是一个短的链表。在第一层的作用下，增加、删除和搜索操作的时间复杂度不超过 O(n)。
 * 跳表的每一个操作的平均时间复杂度是 O(log(n))，空间复杂度是 O(n)。
 *
 * 在本题中，你的设计应该要包含这些函数：
 * 1. bool search(int target) : 返回target是否存在于跳表中。
 * 2. void add(int num): 插入一个元素到跳表。
 * 3. bool erase(int num): 在跳表中删除一个值，如果 num 不存在，直接返回false. 如果存在多个 num ，删除其中任意一个即可。
 *
 * 注意，跳表中可能存在多个相同的值，你的代码需要处理这种情况
 */

var Node = function(val) {
  this.val = val
  this.next = null
  this.prev = null
  this.down = null
}

var Skiplist = function() {
  this.level = 10
  this.head = null
};

Skiplist.prototype.find = function(target) {
  let node = this.head
  let result = null
  while (node) {
    if (node.val === target) {
      result = node
      break
    } else if (node.val < target) {
      while (node.next && node.val < target) node = node.next
      if (node.val !== target) node = node.down
    } else {
      while (node.prev && node.val > target) node = node.prev
      if (node.val !== target) node = node.down
    }
  }

  return result
}

/**
* @param {number} target
* @return {boolean}
*/
Skiplist.prototype.search = function(target) {
  const result = this.find(target)
  return result !== null
};

/**
* @param {number} num
* @return {void}
*/
Skiplist.prototype.add = function(num) {
  let node = this.head
  const stack = []
  while (node) {
    if (node.val <= num) {
      while (node.next && node.val <= num) node = node.next
    } else {
      while (node.prev && node.val >= num) node = node.prev
    }
    stack.push(node)
    node = node.down
  }

  let down = null
  let level = 1
  while (level === 1 || (Math.random() < 0.25 && level <= this.level)) {
    const newNode = new Node(num)
    newNode.down = down
    down = newNode
    if (stack.length) {
      node = stack.pop()

      if (node.val <= num) {
        const rawNext = node.next
        node.next = newNode
        newNode.prev = node
        newNode.next = rawNext
        if (rawNext) rawNext.prev = newNode
      } else {
        const rawPrev = node.prev
        node.prev = newNode
        newNode.next = node
        newNode.prev = rawPrev
        if (rawPrev) rawPrev.next = newNode
      }
    } else {
      this.head = newNode
      break
    }
    level += 1
  }

  // console.log(' ================================ ')
  // const nums = []
  // let test = this.head
  // let l = 1
  // while (test) {
  //     const cache = []
  //     while (test.prev) test = test.prev
  //     while (test.next) { cache.push(test.val); test = test.next }
  //     cache.push(test.val)
  //     console.log(`level: ${l}, nums [${cache}]`)
  //     nums.push(cache)
  //     test = test.down
  //     l += 1
  // }
  // console.log(`after add: ${num}, ${JSON.stringify(nums)}`)
};

/**
* @param {number} num
* @return {boolean}
*/
Skiplist.prototype.erase = function(num) {
  let node = this.find(num)
  if (!node) return false

  const isHead = node === this.head
  if (isHead) this.head = null

  while (node) {
    const prev = node.prev
    const next = node.next
    if (prev) prev.next = next
    if (next) next.prev = prev
    if (!this.head) this.head = prev || next
    node = node.down
  }

  return true
};

/**
* Your Skiplist object will be instantiated and called as such:
* var obj = new Skiplist()
* var param_1 = obj.search(target)
* obj.add(num)
* var param_3 = obj.erase(num)
*/
