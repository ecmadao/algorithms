/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a nested list of integers, implement an iterator to flatten it.
 * Each element is either an integer, or a list -- whose elements may also be integers or other lists.
 *
 * Example 1:
 * Input: [[1,1],2,[1,1]]
 * Output: [1,1,2,1,1]
 * Explanation:
 * By calling next repeatedly until hasNext returns false,
 * the order of elements returned by next should be: [1,1,2,1,1].
 *
 * Example 2:
 * Input: [1,[4,[6]]]
 * Output: [1,4,6]
 * Explanation:
 * By calling next repeatedly until hasNext returns false,
 * the order of elements returned by next should be: [1,4,6].
 *
 * 给你一个嵌套的整型列表。请你设计一个迭代器，使其能够遍历这个整型列表中的所有整数。
 * 列表中的每一项或者为一个整数，或者是另一个列表。
 */

/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function(nestedList) {
  this.stack = []
  this.init(nestedList)
};

/**
* @this NestedIterator
* @returns {void}
*/
NestedIterator.prototype.init = function(nestedList) {
  let i = nestedList.length - 1
  while (i >= 0) {
    const nestedInteger = nestedList[i]
    if (nestedInteger) {
      if (
        nestedInteger.isInteger() ||
        (nestedInteger.getList() && nestedInteger.getList().length)
      ) this.stack.push(nestedInteger)
    }
    i -= 1
  }
};

NestedIterator.prototype.check = function(nestedInteger) {
  if (!nestedInteger) return false
  if (nestedInteger.isInteger()) return true

  for (item of nestedInteger.getList()) {
    const check = this.check(item)
    if (check) return true
  }
  return false
}

/**
* @this NestedIterator
* @returns {boolean}
*/
NestedIterator.prototype.hasNext = function() {
  if (!this.stack.length) return false

  while (this.stack.length) {
    const last = this.stack.slice(-1)[0]
    const check = this.check(last)
    if (check) return true
    this.stack.pop()
  }
  return false
};

/**
* @this NestedIterator
* @returns {integer}
*/
NestedIterator.prototype.next = function() {
  while (this.stack.length) {
    const top = this.stack.pop()
    if (top.isInteger()) return top.getInteger()

    const nestedList = top.getList()
    if (nestedList) this.init(nestedList)
  }
  return null
};

/**
* Your NestedIterator will be called like this:
* var i = new NestedIterator(nestedList), a = [];
* while (i.hasNext()) a.push(i.next());
*/