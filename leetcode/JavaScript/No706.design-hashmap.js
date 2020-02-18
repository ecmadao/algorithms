/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Design a HashMap without using any built-in hash table libraries.
 * To be specific, your design should include these functions:
 * 1. put(key, value) : Insert a (key, value) pair into the HashMap. If the value already exists in the HashMap, update the value.
 * 2. get(key): Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key.
 * 3. remove(key) : Remove the mapping for the value key if this map contains the mapping for the key.
 *
 * Example:
 * MyHashMap hashMap = new MyHashMap();
 * hashMap.put(1, 1);
 * hashMap.put(2, 2);
 * hashMap.get(1);            // returns 1
 * hashMap.get(3);            // returns -1 (not found)
 * hashMap.put(2, 1);          // update the existing value
 * hashMap.get(2);            // returns 1
 * hashMap.remove(2);          // remove the mapping for 2
 * hashMap.get(2);            // returns -1 (not found)
 *
 * Note:
 * 1. All keys and values will be in the range of [0, 1000000].
 * 2. The number of operations will be in the range of [1, 10000].
 * 3. Please do not use the built-in HashMap library.
 *
 * 不使用任何内建的哈希表库设计一个哈希映射
 * 具体地说，你的设计应该包含以下的功能
 * 1. put(key, value)：向哈希映射中插入(键,值)的数值对。如果键对应的值已经存在，更新这个值。
 * 2. get(key)：返回给定的键所对应的值，如果映射中不包含这个键，返回-1。
 * 3. remove(key)：如果映射中存在这个键，删除这个数值对
 */

/**
 * Initialize your data structure here.
 */
var MyHashMap = function() {
  this.len = 1000000
  this.queue = []
};

/**
* value will always be non-negative.
* @param {number} key
* @param {number} value
* @return {void}
*/
MyHashMap.prototype.put = function(key, value) {
  this.queue[key % this.len] = value
};

/**
* Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key
* @param {number} key
* @return {number}
*/
MyHashMap.prototype.get = function(key) {
  const num = this.queue[key % this.len]
  return num === undefined ? -1 : num
};

/**
* Removes the mapping of the specified value key if this map contains a mapping for the key
* @param {number} key
* @return {void}
*/
MyHashMap.prototype.remove = function(key) {
  this.queue[key % this.len] = -1
};

/**
* Your MyHashMap object will be instantiated and called as such:
* var obj = new MyHashMap()
* obj.put(key,value)
* var param_2 = obj.get(key)
* obj.remove(key)
*/