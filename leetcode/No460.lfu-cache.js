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

// TODO: BUGFIX

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
  if (!main.head && !main.tail) {
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
      // console.log(this.mainNodeTmp);
      val = child.val;
  }
  console.log(` ======================= GET ${key}: ${val} ======================= `);
  return val;
};

/** 
* @param {number} key
* @param {number} value
* @return {void}
*/
LFUCache.prototype.put = function(key, value) {
  console.log(` ======================= PUT ${key}: ${value} ====================== `)
  if (!this.capacity) return;
  let child;
  if (this.childNodeTmp.has(key)) {
      child = this.childNodeTmp.get(key);
      child.val = value;
      this.moveChildToTail(child);
  } else {
      if (this.childNodeTmp.size === this.capacity) {
          this.removeHead();
      }

      child = new Node(key, value);
      this.childNodeTmp.set(key, child);
      this.insertChildToTail(child);
  }
  // console.log(this.mainNodeTmp);
  // console.log(this.head);
};

/**
* Your LFUCache object will be instantiated and called as such:
* var obj = Object.create(LFUCache).createNew(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/

let cache;

const operations = ["LFUCache","put","put","put","put","put","get","put","get","get","put","get","put","put","put","get","put","get","get","get","get","put","put","get","get","get","put","put","get","put","get","put","get","get","get","put","put","put","get","put","get","get","put","put","get","put","put","put","put","get","put","put","get","put","put","get","put","put","put","put","put","get","put","put","get","put","get","get","get","put","get","get","put","put","put","put","get","put","put","put","put","get","get","get","put","put","put","get","put","put","put","get","put","put","put","get","get","get","put","put","put","put","get","put","put","put","put","put","put","put"];

const parameters = [[10],[10,13],[3,17],[6,11],[10,5],[9,10],[13],[2,19],[2],[3],[5,25],[8],[9,22],[5,5],[1,30],[11],[9,12],[7],[5],[8],[9],[4,30],[9,3],[9],[10],[10],[6,14],[3,1],[3],[10,11],[8],[2,14],[1],[5],[4],[11,4],[12,24],[5,18],[13],[7,23],[8],[12],[3,27],[2,12],[5],[2,9],[13,4],[8,18],[1,7],[6]];

// [9,29],[8,21],[5],[6,30],[1,12],[10],[4,15],[7,22],[11,26],[8,17],[9,29],[5],[3,4],[11,30],[12],[4,29],[3],[9],[6],[3,4],[1],[10],[3,29],[10,28],[1,20],[11,13],[3],[3,12],[3,8],[10,9],[3,26],[8],[7],[5],[13,17],[2,27],[11,15],[12],[9,19],[2,15],[3,16],[1],[12,17],[9,1],[6,19],[4],[5],[5],[8,1],[11,7],[5,2],[9,28],[1],[2,2],[7,4],[4,22],[7,24],[9,26],[13,28],[11,26]


for (let i = 0; i < parameters.length; i += 1) {
  const operation = operations[i];
  const parameter = parameters[i];
  if (operation === 'LFUCache') cache = new LFUCache(parameter[0]);
  if (operation === 'put') cache.put(parameter[0], parameter[1]);
  if (operation === 'get') cache.get(parameter[0]);
  debugger
}