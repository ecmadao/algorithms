/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Design a HashSet without using any built-in hash table libraries.
 * To be specific, your design should include these functions:
 * 1. add(value): Insert a value into the HashSet.
 * 2. contains(value) : Return whether the value exists in the HashSet or not.
 * 3. remove(value): Remove a value in the HashSet. If the value does not exist in the HashSet, do nothing.
 *
 * Example:
 * MyHashSet hashSet = new MyHashSet();
 * hashSet.add(1);
 * hashSet.add(2);
 * hashSet.contains(1);    // returns true
 * hashSet.contains(3);    // returns false (not found)
 * hashSet.add(2);
 * hashSet.contains(2);    // returns true
 * hashSet.remove(2);
 * hashSet.contains(2);    // returns false (already removed)
 *
 * Note:
 * 1. All values will be in the range of [0, 1000000].
 * 2. The number of operations will be in the range of [1, 10000].
 * 3. Please do not use the built-in HashSet library.
 *
 * 不使用任何内建的哈希表库设计一个哈希集合
 * 具体地说，你的设计应该包含以下的功能
 * 1. add(value)：向哈希集合中插入一个值。
 * 2. contains(value) ：返回哈希集合中是否存在这个值。
 * 3. remove(value)：将给定值从哈希集合中删除。如果哈希集合中没有这个值，什么也不做
 */

/**
 * Initialize your data structure here.
 */
var MyHashSet = function() {
  this.map = {}
};

/**
* @param {number} key
* @return {void}
*/
MyHashSet.prototype.add = function(key) {
  this.map[key] = key
};

/**
* @param {number} key
* @return {void}
*/
MyHashSet.prototype.remove = function(key) {
  delete this.map[key]
};

/**
* Returns true if this set contains the specified element
* @param {number} key
* @return {boolean}
*/
MyHashSet.prototype.contains = function(key) {
  return this.map[key] !== undefined
};

/**
* Your MyHashSet object will be instantiated and called as such:
* var obj = new MyHashSet()
* obj.add(key)
* obj.remove(key)
* var param_3 = obj.contains(key)
*/