/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Design an Iterator class, which has:
 * 1. A constructor that takes a string characters of sorted distinct lowercase English letters and a number combinationLength as arguments.
 * 2. A function next() that returns the next combination of length combinationLength in lexicographical order.
 * 3. A function hasNext() that returns True if and only if there exists a next combination.
 *
 * Example:
 * CombinationIterator iterator = new CombinationIterator("abc", 2); // creates the iterator.
 * iterator.next(); // returns "ab"
 * iterator.hasNext(); // returns true
 * iterator.next(); // returns "ac"
 * iterator.hasNext(); // returns true
 * iterator.next(); // returns "bc"
 * iterator.hasNext(); // returns false
 *
 * Constraints:
 * 1. 1 <= combinationLength <= characters.length <= 15
 * 2. There will be at most 10^4 function calls per test.
 * 3. It's guaranteed that all calls of the function next are valid
 *
 * 请你设计一个迭代器类，包括以下内容：
 * 1. 一个构造函数，输入参数包括：一个 有序且字符唯一 的字符串 characters（该字符串只包含小写英文字母）和一个数字 combinationLength 。
 * 2. 函数 next() ，按 字典序 返回长度为 combinationLength 的下一个字母组合。
 * 3. 函数 hasNext() ，只有存在长度为 combinationLength 的下一个字母组合时，才返回 True；否则，返回 False
 */

/**
 * @param {string} characters
 * @param {number} combinationLength
 */
var CombinationIterator = function(characters, combinationLength) {
  this.characters = characters
  this.combinationLength = combinationLength
  this.indexes = []
};

CombinationIterator.prototype.generate = function() {
  return this.indexes.map((index) => this.characters[index]).join('')
}

// abcdef
// [0,1,2,3] -> abcd
// [0,1,2,4] -> abce
// [0,1,2,5] -> abcf
// [0,1,3,4] -> abde
// [0,1,3,5] -> abdf
// [0,1,4,5] -> abef
// [0,2,3,4] -> acde
// [0,2,3,5] -> acdf

/**
* @return {string}
*/
CombinationIterator.prototype.next = function() {
  if (!this.indexes.length) {
    this.indexes = Array.from({ length: this.combinationLength }, (_, i) => i)
    return this.generate()
  }

  let i = this.indexes.length - 1
  while (i >= 0) {
    if (i === this.indexes.length - 1 && this.indexes[i] < this.characters.length - 1) {
      break
    } else if (this.indexes[i] + 1 < this.indexes[i + 1]) {
      break
    }
    i -= 1
  }

  let base = this.indexes[i] + 1
  while (i < this.indexes.length) {
    this.indexes[i] = base
    base += 1
    i += 1
  }

  return this.generate()
};

/**
* @return {boolean}
*/
CombinationIterator.prototype.hasNext = function() {
  if (!this.indexes.length) return true

  let i = this.indexes.length - 1
  let index = this.characters.length - 1
  while (i >= 0) {
    if (this.indexes[i] !== index) return true
    i -= 1
    index -= 1
  }
  return false
};

/**
* Your CombinationIterator object will be instantiated and called as such:
* var obj = new CombinationIterator(characters, combinationLength)
* var param_1 = obj.next()
* var param_2 = obj.hasNext()
*/