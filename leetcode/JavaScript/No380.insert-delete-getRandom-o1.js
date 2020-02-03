/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Design a data structure that supports all following operations in average O(1) time.
 * insert(val): Inserts an item val to the set if not already present.
 * remove(val): Removes an item val from the set if present.
 * getRandom: Returns a random element from current set of elements.
 * Each element must have the same probability of being returned.
 *
 * Example:
 * // Init an empty set.
 * RandomizedSet randomSet = new RandomizedSet();
 * // Inserts 1 to the set. Returns true as 1 was inserted successfully.
 * randomSet.insert(1);
 * // Returns false as 2 does not exist in the set.
 * randomSet.remove(2);
 * // Inserts 2 to the set, returns true. Set now contains [1,2].
 * randomSet.insert(2);
 *  // getRandom should return either 1 or 2 randomly.
 * randomSet.getRandom();
 * // Removes 1 from the set, returns true. Set now contains [2].
 * randomSet.remove(1);
 * // 2 was already in the set, so return false.
 * randomSet.insert(2);
 * // Since 2 is the only number in the set, getRandom always return 2.
 * randomSet.getRandom();
 * 
 * 设计一个支持在平均 时间复杂度 O(1) 下，执行以下操作的数据结构。
 * 1. insert(val)：当元素 val 不存在时，向集合中插入该项。
 * 2. remove(val)：元素 val 存在时，从集合中移除该项。
 * 3. getRandom：随机返回现有集合中的一项。每个元素应该有相同的概率被返回
 * 
 * 注意时间复杂度是要 O(1)
 */

/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
  this.map = new Map()
  this.list = []
};

/**
* Inserts a value to the set. Returns true if the set did not already contain the specified element. 
* @param {number} val
* @return {boolean}
*/
RandomizedSet.prototype.insert = function(val) {
  if (this.map.has(val)) return false
  this.list.push(val)
  this.map.set(val, this.list.length - 1)
  return true
};

/**
* Removes a value from the set. Returns true if the set contained the specified element. 
* @param {number} val
* @return {boolean}
*/
RandomizedSet.prototype.remove = function(val) {
  if (!this.map.has(val)) return false

  const index = this.map.get(val)
  const lastVal = this.list[this.list.length - 1]
  this.map.set(lastVal, index)
  this.list[index] = lastVal

  this.map.delete(val)
  this.list.pop()
  return true
};

/**
* Get a random element from the set.
* @return {number}
*/
RandomizedSet.prototype.getRandom = function() {
  return this.list[
    Math.floor(Math.random() * this.list.length)
  ]
};

/** 
* Your RandomizedSet object will be instantiated and called as such:
* var obj = new RandomizedSet()
* var param_1 = obj.insert(val)
* var param_2 = obj.remove(val)
* var param_3 = obj.getRandom()
*/

/**
 * 题目很简单，使用 Set 即可
 * 但 getRandom 其实引申出了一个话题：
 * JavaScript 中，Math.random() 生成的是一个伪随机数
 * 怎么才能真正的生成一个随机数？
 *
 * https://stackoverflow.com/questions/12673691/true-or-better-random-numbers-with-javascript
 * https://stackoverflow.com/questions/424292/seedable-javascript-random-number-generator
 */
