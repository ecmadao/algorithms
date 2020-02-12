/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * Design and implement a data structure for Least Frequently Used (LFU) cache.
 * It should support the following operations: get and put.
 * get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
 * put(key, value) - Set or insert the value if the key is not already present.
 * When the cache reaches its capacity, it should invalidate the least frequently used item before inserting a new item.
 * For the purpose of this problem, when there is a tie (i.e., two or more keys that have the same frequency),
 * the least recently used key would be evicted.
 *
 * Follow up:
 * Could you do both operations in O(1) time complexity?
 *
 * Example:
 * LFUCache cache = new LFUCache(2);
 * cache.put(1, 1);
 * cache.put(2, 2);
 * cache.get(1);       // returns 1
 * cache.put(3, 3);    // evicts key 2
 * cache.get(2);       // returns -1 (not found)
 * cache.get(3);       // returns 3.
 * cache.put(4, 4);    // evicts key 1.
 * cache.get(1);       // returns -1 (not found)
 * cache.get(3);       // returns 3
 * cache.get(4);       // returns 4
 *
 * 实现 LFU 缓存算法：缓存的数据按照使用次数排列，占满后清除最少使用的缓存
 * 如果有多个数据的使用次数并列最少，则清除最早一次使用的缓存
 * LFUCache: https://en.wikipedia.org/wiki/Least_frequently_used
 */

 /**
  * 思路：
  * 相比较与 LRU Cache，LFU Cache 要更复杂一些。它可以由两层链表组成：
  * 第一层链表，代表各个缓存被调用的次数
  * 第二层链表，则代表有相同调用次数的缓存中，存活的时间。
  * 当缓存数量已满，又要插入新的缓存时，优先删除调用次数最低的缓存
  * 而如果调用次数最低的缓存有多个时，则删除里面存活最久的缓存
  *
  * 需要注意的是，如果 set 时 update 了数据，即 key 已存在，则除了更新 value 以外，其调用次数也要加一！
  * （相当于先 update value 然后 get key）
  */

var Node = function(key, val = null) {
  this.key = key;
  this.val = val;
  this.next = null;
  this.pre = null;

  this.head = null;
  this.tail = null;
  this.fre = 0;
};

/* ================================================================================================================== */

/**
 * @param {number} capacity
 */
var LFUCache = function(capacity) {
  this.capacity = capacity;
  this.head = null;
  this.tail = null;
  this.mainNodeTmp = new Map();
  this.childNodeTmp = new Map();
};

LFUCache.prototype.upgradeChild = function(child) {
  // from current main remove child
  const main = this.mainNodeTmp.get(child.fre);
  if (child.pre) child.pre.next = child.next;
  if (child.next) child.next.pre = child.pre;
  if (main.head.key === child.key) main.head = child.next;
  if (main.tail.key === child.key) main.tail = child.pre;

  // update child
  child.next = null;
  child.pre = null;
  child.fre += 1;

  // insertChildToTail to next main
  this.insertChildToTail(child, main);

  // resetMain
  this.resetMain(main);
};

LFUCache.prototype.insertChildToTail = function(child, preMain = null) {
  // check if next main exist
  // insert child to next main
  let main = this.mainNodeTmp.get(child.fre);
  if (!main) {
    main = new Node(child.fre);
    this.mainNodeTmp.set(child.fre, main);
    this.insertMain(main, preMain);
  }
  if (main.tail) main.tail.next = child;
  child.pre = main.tail;
  main.tail = child;
  if (!main.head) main.head = child;
};

LFUCache.prototype.moveChildToTail = function(child) {
  // from current main, move child to tail
  const main = this.mainNodeTmp.get(child.fre);
  if (main.tail.key !== child.key) {
    if (child.pre) child.pre.next = child.next;
    if (child.next) child.next.pre = child.pre;
    if (main.head.key === child.key) main.head = child.next;

    child.next = null;
    main.tail.next = child;
    child.pre = main.tail;
    main.tail = child;
  }
};

LFUCache.prototype.removeHead = function() {
  // from this.tail remove this.head.head;
  const main = this.head;
  const key = main.head.key;

  if (main.head.next) {
    main.head.next.pre = null;
    main.head = main.head.next;
  } else {
    main.tail = null;
    main.head = null;
    // resetMain
    this.resetMain(main);
  }
  this.childNodeTmp.delete(key);
};

LFUCache.prototype.resetMain = function(main) {
  // check if main has any child
  // if not has child, then remove this main node
  if (!main.head || !main.tail) {
    if (main.pre) main.pre.next = main.next;
    if (main.next) main.next.pre = main.pre;
    if (this.head.key === main.key) this.head = main.next;
    if (this.tail.key === main.key) this.tail = main.pre;
    this.mainNodeTmp.delete(main.key);
  }
};

LFUCache.prototype.insertMain = function(main, preMain) {
  if (!preMain) {
    if (this.head) this.head.pre = main;
    main.next = this.head;
    this.head = main;
    if (!this.tail) this.tail = main;
  } else {
    const next = preMain.next;
    main.pre = preMain;
    main.next = next;
    if (next) next.pre = main;
    preMain.next = main;
    if (preMain.key === this.tail.key) this.tail = main;
  }
};

/**
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function(key) {
  let val = -1;
  if (this.childNodeTmp.has(key)) {
    const child = this.childNodeTmp.get(key);
    this.upgradeChild(child);
    val = child.val;
  }
  return val;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function(key, value) {
  if (!this.capacity) return;
  let child;
  if (this.childNodeTmp.has(key)) {
    child = this.childNodeTmp.get(key);
    child.val = value;
    this.get(key);
  } else {
    if (this.childNodeTmp.size === this.capacity) {
      this.removeHead();
    }
    child = new Node(key, value);
    this.childNodeTmp.set(key, child);
    this.insertChildToTail(child);
  }
};

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = Object.create(LFUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */