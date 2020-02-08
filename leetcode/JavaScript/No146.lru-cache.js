/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * Design and implement a data structure for Least Recently Used (LRU) cache.
 * It should support the following operations: get and put.
 * get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
 * put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.
 *
 * Follow up:
 * Could you do both operations in O(1) time complexity?
 *
 * Example:
 * LRUCache cache = new LRUCache(2);
 * cache.put(1, 1);
 * cache.put(2, 2);
 * cache.get(1);       // returns 1
 * cache.put(3, 3);    // evicts key 2
 * cache.get(2);       // returns -1 (not found)
 * cache.put(4, 4);    // evicts key 1
 * cache.get(1);       // returns -1 (not found)
 * cache.get(3);       // returns 3
 * cache.get(4);       // returns 4
 *
 * LRU Cache: Last Recent Used, 最近一次最少使用的缓存会被清除
 * 编写一个 LRU Cache 算法：https://en.wikipedia.org/wiki/Cache_replacement_policies#LRU
 * 对于 LRUCache 而言，缓存的数据是按照使用的频繁程度来排序的，内部通过一个链表来存排序后的对象，
 * 以及一个 Map 快速索引：
 * 1. 新插入，或者调用一个缓存时，该缓存被激活，认为是最频繁使用的，放在链表尾部
 * 2. 缓存满了之后，删除链表头部的缓存
 */

var ListNode = function(key, val, pre = null) {
  this.val = val;
  this.key = key;
  this.next = null;
  this.pre = null
};

/**
* @param {number} capacity
*/
var LRUCache = function(capacity) {
  this.tmp = new Map();
  this.capacity = capacity;
  this.head = null;
  this.tail = null;
};

LRUCache.prototype._moveToTail = function(node) {
  if (node.key !== this.tail.key) {
    if (this.head.key === node.key) {
      this.head = this.head.next;
      this.head.pre = null;
    }
    if (node.pre) node.pre.next = node.next;
    if (node.next) node.next.pre = node.pre;
    this.tail.next = node;
    node.pre = this.tail;
    this.tail = node;
  }
};

LRUCache.prototype._resetHead = function() {
  this.tmp.delete(this.head.key);
  this.head = this.head.next;
  if (this.head) this.head.pre = null;
};

LRUCache.prototype._resetTail = function(tail) {
  tail.pre = this.tail;
  if (this.tail) this.tail.next = tail;
  this.tail = tail;
  if (!this.head) this.head = tail;
};

/**
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function(key) {
  if (!this.tmp.has(key)) return -1;
  const node = this.tmp.get(key);
  this._moveToTail(node);
  return node.val;
};

/**
* @param {number} key
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function(key, value) {
  if (this.tmp.has(key)) {
    const node = this.tmp.get(key);
    node.val = value;
    this._moveToTail(node);
  } else {
    const tail = new ListNode(key, value);
    this._resetTail(tail);
    this.tmp.set(key, tail);

    if (this.tmp.size > this.capacity) {
      this._resetHead();
    }
  }
};

/**
* Your LRUCache object will be instantiated and called as such:
* var obj = Object.create(LRUCache).createNew(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/


/**
 * ======================= solution 2 =======================
 * 利用 Map 特性:
 * 1. 会维持插入顺序
 * 2. 遍历时是迭代器
 * /
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.size = capacity
  this.cache = new Map()
};

/**
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function(key) {
  const val = this.cache.get(key)
  if (!val) return -1
  this.cache.delete(key)
  this.cache.set(key, val)
  return val
};

/**
* @param {number} key
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function(key, value) {
  if (this.cache.has(key)) {
    this.cache.delete(key)
  } else if (this.cache.size >= this.size) {
    for (const k of this.cache.keys()) {
      this.cache.delete(k)
      break
    }
  }

  this.cache.set(key, value)
};

/**
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/