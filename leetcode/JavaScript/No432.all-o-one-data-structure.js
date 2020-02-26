/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * Implement a data structure supporting the following operations:
 * 1. Inc(Key) - Inserts a new key with value 1. Or increments an existing key by 1. Key is guaranteed to be a non-empty string.
 * 2. Dec(Key) - If Key's value is 1, remove it from the data structure. Otherwise decrements an existing key by 1. If the key does not exist, this function does nothing. Key is guaranteed to be a non-empty string.
 * 3. GetMaxKey() - Returns one of the keys with maximal value. If no element exists, return an empty string "".
 * 4. GetMinKey() - Returns one of the keys with minimal value. If no element exists, return an empty string "".
 *
 * Challenge: Perform all these in O(1) time complexity.
 *
 * 实现一个数据结构支持以下操作：
 * 1. Inc(key) - 插入一个新的值为 1 的 key。或者使一个存在的 key 增加一，保证 key 不为空字符串。
 * 2. Dec(key) - 如果这个 key 的值是 1，那么把他从数据结构中移除掉。否者使一个存在的 key 值减一。如果这个 key 不存在，这个函数不做任何事情。key 保证不为空字符串。
 * 3. GetMaxKey() - 返回 key 中值最大的任意一个。如果没有元素存在，返回一个空字符串""。
 * 4. GetMinKey() - 返回 key 中值最小的任意一个。如果没有元素存在，返回一个空字符串""。
 *
 * 挑战：以 O(1) 的时间复杂度实现所有操作
 *
 * 双向链表 + hashmap
 */


var LinkedNode = function(key, val) {
  this.key = key
  this.val = val
  this.next = null
  this.pre = null
}

/**
* Initialize your data structure here.
*/
var AllOne = function() {
  this.map = new Map()
  this.head = null
  this.tail = null
};

/**
* Inserts a new key <Key> with value 1. Or increments an existing key by 1. 
* @param {string} key
* @return {void}
*/
AllOne.prototype.inc = function(key) {
  const data = this.map.get(key) || new LinkedNode(key, 0)
  data.val += 1

  if (data.val === 1) {
    data.next = this.head
    if (this.head) this.head.pre = data
    this.head = data
  } else if (data.next) {
    // 1 3 5 5 7
    // 1 -> 3 -> 6 -> 5
    let node = data
    while (node.next && data.val > node.next.val) node = node.next

    if (node.val < data.val) {
      if (data === this.head) this.head = data.next

      if (data.pre) data.pre.next = data.next
      data.next.pre = data.pre

      const rawNext = node.next
      node.next = data
      data.pre = node
      data.next = rawNext
      if (rawNext) rawNext.pre = data
      if (!rawNext) this.tail = data
    }
  }

  if (!this.tail) this.tail = data
  this.map.set(key, data)
};

/**
* Decrements an existing key by 1. If Key's value is 1, remove it from the data structure. 
* @param {string} key
* @return {void}
*/
AllOne.prototype.dec = function(key) {
  if (!this.map.has(key)) return
  const data = this.map.get(key)
  data.val -= 1

  if (!data.val) {
    this.map.delete(key)
    if (data.pre) data.pre.next = data.next
    if (data.next) data.next.pre = data.pre

    if (this.head === data) this.head = data.next
    if (this.tail === data) this.tail = data.pre
  } else if (data.pre) {
    // 1 -> 3 -> 5 -> 4 -> 7
    let node = data
    while (node.pre && data.val < node.pre.val) node = node.pre

    if (node.val > data.val) {
      if (this.tail === data) this.tail = data.pre

      if (data.next) data.next.pre = data.pre
      data.pre.next = data.next

      const rawPre = node.pre
      node.pre = data
      data.next = node
      data.pre = rawPre
      if (rawPre) rawPre.next = data
      if (!rawPre) this.head = data
    }

    this.map.set(key, data)
  }
};

/**
* Returns one of the keys with maximal value.
* @return {string}
*/
AllOne.prototype.getMaxKey = function() {
  if (!this.tail) return ''
  return this.tail.key
};

/**
* Returns one of the keys with Minimal value.
* @return {string}
*/
AllOne.prototype.getMinKey = function() {
  if (!this.head) return ''
  return this.head.key
};

/**
* Your AllOne object will be instantiated and called as such:
* var obj = new AllOne()
* obj.inc(key)
* obj.dec(key)
* var param_3 = obj.getMaxKey()
* var param_4 = obj.getMinKey()
*/