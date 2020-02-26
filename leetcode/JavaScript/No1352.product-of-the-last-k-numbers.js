/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Implement the class ProductOfNumbers that supports two methods:
 * 1. add(int num)
 *  - Adds the number num to the back of the current list of numbers.
 * 2. getProduct(int k)
 *  - Returns the product of the last k numbers in the current list.
 *  - You can assume that always the current list has at least k numbers.
 * At any time, the product of any contiguous sequence of numbers will fit into a single 32-bit integer without overflowing.
 *
 * Example:
 * Input
 * ["ProductOfNumbers","add","add","add","add","add","getProduct","getProduct","getProduct","add","getProduct"]
 * [[],[3],[0],[2],[5],[4],[2],[3],[4],[8],[2]]
 * Output
 * [null,null,null,null,null,null,20,40,0,null,32]
 * Explanation
 * ProductOfNumbers productOfNumbers = new ProductOfNumbers();
 * productOfNumbers.add(3);        // [3]
 * productOfNumbers.add(0);        // [3,0]
 * productOfNumbers.add(2);        // [3,0,2]
 * productOfNumbers.add(5);        // [3,0,2,5]
 * productOfNumbers.add(4);        // [3,0,2,5,4]
 * productOfNumbers.getProduct(2); // return 20. The product of the last 2 numbers is 5 * 4 = 20
 * productOfNumbers.getProduct(3); // return 40. The product of the last 3 numbers is 2 * 5 * 4 = 40
 * productOfNumbers.getProduct(4); // return 0. The product of the last 4 numbers is 0 * 2 * 5 * 4 = 0
 * productOfNumbers.add(8);        // [3,0,2,5,4,8]
 * productOfNumbers.getProduct(2); // return 32. The product of the last 2 numbers is 4 * 8 = 32
 *
 * Constraints:
 * 1. There will be at most 40000 operations considering both add and getProduct.
 * 2. 0 <= num <= 100
 * 3. 1 <= k <= 40000
 *
 * 请你实现一个「数字乘积类」ProductOfNumbers，要求支持下述两种方法：
 * 1. add(int num)
 *  - 将数字 num 添加到当前数字列表的最后面。
 * 2. getProduct(int k)
 *  - 返回当前数字列表中，最后 k 个数字的乘积。
 *  - 你可以假设当前列表中始终 至少 包含 k 个数字。
 * 题目数据保证：任何时候，任一连续数字序列的乘积都在 32-bit 整数范围内，不会溢出。
 */

var ProductOfNumbers_1 = function() {
  this.queue = []
};

/**
* @param {number} num
* @return {void}
*/
ProductOfNumbers_1.prototype.add = function(num) {
  let i = 0
  while (i < this.queue.length) {
    this.queue[i] *= num
    i += 1
  }
  this.queue.push(num)
};

/**
* @param {number} k
* @return {number}
*/
ProductOfNumbers_1.prototype.getProduct = function(k) {
  return this.queue[this.queue.length - k]
};

/**
* Your ProductOfNumbers_1 object will be instantiated and called as such:
* var obj = new ProductOfNumbers_1()
* obj.add(num)
* var param_2 = obj.getProduct(k)
*/

// ================================================== Solution 2 ==================================================


var ProductOfNumbers_2 = function() {
  this.len = 0
  this.queue = [1]
};

/**
* @param {number} num
* @return {void}
*/
ProductOfNumbers_2.prototype.add = function(num) {
  if (!num) {
    this.len = 0
  } else {
    this.len += 1
    this.queue[this.len] = num * this.queue[this.len - 1]
  }
};

/**
* @param {number} k
* @return {number}
*/
ProductOfNumbers_2.prototype.getProduct = function(k) {
  if (this.len < k) return 0
  return this.queue[this.len] / this.queue[this.len - k]
};

/**
* Your ProductOfNumbers_2 object will be instantiated and called as such:
* var obj = new ProductOfNumbers_2()
* obj.add(num)
* var param_2 = obj.getProduct(k)
*/
