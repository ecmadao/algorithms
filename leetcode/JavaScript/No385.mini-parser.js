/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a nested list of integers represented as a string, implement a parser to deserialize it.
 * Each element is either an integer, or a list -- whose elements may also be integers or other lists.
 *
 * Note: You may assume that the string is well-formed:
 * 1. String is non-empty.
 * 2. String does not contain white spaces.
 * 3. String contains only digits 0-9, [, - ,, ].
 *
 * Example 1:
 * Given s = "324",
 * You should return a NestedInteger object which contains a single integer 324.
 *
 * Example 2:
 * Given s = "[123,[456,[789]]]",
 *
 * Return a NestedInteger object containing a nested list with 2 elements:
 * 1. An integer containing value 123.
 * 2. A nested list containing two elements:
 *     i.  An integer containing value 456.
 *     ii. A nested list with one element:
 *          a. An integer containing value 789.
 *
 * 给定一个用字符串表示的整数的嵌套列表，实现一个解析它的语法分析器。
 * 列表中的每个元素只可能是整数或整数嵌套列表
 *
 * 提示：你可以假定这些字符串都是格式良好的：
 * 1. 字符串非空
 * 2. 字符串不包含空格
 * 3. 字符串只包含数字0-9, [, - ,, ]
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
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
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
 * @param {string} s
 * @return {NestedInteger}
 */
var deserialize = function(s) {
  let i = 0
  const queue = []

  while (i < s.length) {
    if (s[i] === '[') {
      queue.push(new NestedInteger())
    } else if (s[i] === ']') {
      const last = queue.pop()
      if (!queue.length) return last
      queue[queue.length - 1].add(last)
    } else if (/[0-9\-]/.test(s[i])) {
      let j = i + 1
      while (/[0-9\-]/.test(s[j])) j += 1
      const nestedInteger = new NestedInteger()
      nestedInteger.setInteger(parseInt(s.slice(i, j)))

      if (!queue.length) return nestedInteger
      queue[queue.length - 1].add(nestedInteger)

      i = j - 1
    }
    i += 1
  }
  return queue[0]
}
