/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given an array w of positive integers, where w[i] describes the weight of index i, write a function pickIndex which randomly picks an index in proportion to its weight.
 *
 * Note:
 * 1. 1 <= w.length <= 10000
 * 2. 1 <= w[i] <= 10^5
 * 3. pickIndex will be called at most 10000 times.
 *
 * Example 1:
 * Input:
 * ["Solution","pickIndex"]
 * [[[1]],[]]
 * Output: [null,0]
 *
 * Example 2:
 * Input:
 * ["Solution","pickIndex","pickIndex","pickIndex","pickIndex","pickIndex"]
 * [[[1,3]],[],[],[],[],[]]
 * Output: [null,0,1,1,1,0]
 *
 * Explanation of Input Syntax:
 * The input is two lists: the subroutines called and their arguments.
 * Solution's constructor has one argument, the array w. pickIndex has no arguments.
 * Arguments are always wrapped with a list, even if there aren't any.
 *
 * 给定一个正整数数组 w ，其中 w[i] 代表位置 i 的权重，请写一个函数 pickIndex ，它可以随机地获取位置 i，选取位置 i 的概率与 w[i] 成正比。
 * 说明:
 * 1. 1 <= w.length <= 10000
 * 2. 1 <= w[i] <= 10^5
 * 3. pickIndex 将被调用不超过 10000 次
 */

/**
 * @param {number[]} w
 */
var Solution = function(w) {
  this.prefix = w.reduce((list, num) => {
    list.push((list[list.length - 1] || 0) + num)
    return list
  }, [])
  this.w = w
}

Solution.prototype.search = function(num) {
  let i = 0
  let j = this.prefix.length - 1
  while (i <= j) {
    const mid = Math.floor((i + j) / 2)
    if (this.prefix[mid] === num) return mid
    if (this.prefix[mid] < num) {
      i = mid + 1
    } else {
      j = mid - 1
    }
  }

  return i
}

/**
* @return {number}
*/
Solution.prototype.pickIndex = function() {
  if (this.w.length === 1) return 0
  const random = Math.floor(Math.random() * this.prefix[this.prefix.length - 1] + 1)

  return this.search(random)
}

/**
* Your Solution object will be instantiated and called as such:
* var obj = new Solution(w)
* var param_1 = obj.pickIndex()
*/