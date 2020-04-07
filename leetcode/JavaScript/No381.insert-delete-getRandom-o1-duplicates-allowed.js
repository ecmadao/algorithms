/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * Design a data structure that supports all following operations in average O(1) time.
 * 
 * Note: Duplicate elements are allowed.
 * 1. insert(val): Inserts an item val to the collection.
 * 2. remove(val): Removes an item val from the collection if present.
 * 3. getRandom: Returns a random element from current collection of elements. The probability of each element being returned is linearly related to the number of same value the collection contains.
 *
 * Example:
 * // Init an empty collection.
 * RandomizedCollection collection = new RandomizedCollection();
 * 
 * // Inserts 1 to the collection. Returns true as the collection did not contain 1.
 * collection.insert(1);
 * 
 * // Inserts another 1 to the collection. Returns false as the collection contained 1. Collection now contains [1,1].
 * collection.insert(1);
 * 
 * // Inserts 2 to the collection, returns true. Collection now contains [1,1,2].
 * collection.insert(2);
 * 
 * // getRandom should return 1 with the probability 2/3, and returns 2 with the probability 1/3.
 * collection.getRandom();
 * 
 * // Removes 1 from the collection, returns true. Collection now contains [1,2].
 * collection.remove(1);
 * 
 * // getRandom should return 1 and 2 both equally likely.
 * collection.getRandom();
 * 
 * 设计一个支持在平均 时间复杂度 O(1) 下， 执行以下操作的数据结构。
 * 注意: 允许出现重复元素。
 * 1. insert(val)：向集合中插入元素 val。
 * 2. remove(val)：当 val 存在时，从集合中移除一个 val。
 * 3. getRandom：从现有集合中随机获取一个元素。每个元素被返回的概率应该与其在集合中的数量呈线性相关。
 * 
 * 注意时间复杂度是要 O(1)
 */

/**
 * Initialize your data structure here.
 */
var RandomizedCollection = function() {
  this.map = {}
  this.list = []
}

/**
* Inserts a value to the collection. Returns true if the collection did not already contain the specified element. 
* @param {number} val
* @return {boolean}
*/
RandomizedCollection.prototype.insert = function(val) {
  if (!this.map[val]) this.map[val] = new Set()
  this.list.push(val)
  this.map[val].add(this.list.length - 1)
  return this.map[val].size === 1
}

/**
* Removes a value from the collection. Returns true if the collection contained the specified element. 
* @param {number} val
* @return {boolean}
*/
RandomizedCollection.prototype.remove = function(val) {
  if (!this.map[val] || !this.map[val].size || !this.list.length) return false

  // 最后一个值
  const lastVal = this.list[this.list.length - 1]

  if (lastVal === val) {
    this.map[lastVal].delete(this.list.length - 1)
  } else {
    let index = null
    // 要删除的值的 index
    for (const i of this.map[val].values()) {
      index = i
      break
    }
    this.map[val].delete(index)
    this.map[lastVal].delete(this.list.length - 1)
    this.map[lastVal].add(index)

    this.list[index] = lastVal
  }

  this.list.pop()
  return true
}

/**
* Get a random element from the collection.
* @return {number}
*/
RandomizedCollection.prototype.getRandom = function() {
  return this.list[
    Math.floor(Math.random() * this.list.length)
  ]
}

/** 
* Your RandomizedCollection object will be instantiated and called as such:
* var obj = new RandomizedCollection()
* var param_1 = obj.insert(val)
* var param_2 = obj.remove(val)
* var param_3 = obj.getRandom()
*/