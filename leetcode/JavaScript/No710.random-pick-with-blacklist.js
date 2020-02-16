/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * Given a blacklist B containing unique integers from [0, N), write a function to return a uniform random integer from [0, N) which is NOT in B.
 * Optimize it such that it minimizes the call to system’s Math.random().
 *
 * Note:
 * 1. 1 <= N <= 1000000000
 * 2. 0 <= B.length < min(100000, N)
 * 3. [0, N) does NOT include N. See interval notation.
 *
 * Example 1:
 * Input:
 * ["Solution","pick","pick","pick"]
 * [[1,[]],[],[],[]]
 * Output: [null,0,0,0]
 *
 * Example 2:
 * Input:
 * ["Solution","pick","pick","pick"]
 * [[2,[]],[],[],[]]
 * Output: [null,1,1,1]
 *
 * Example 3:
 * Input:
 * ["Solution","pick","pick","pick"]
 * [[3,[1]],[],[],[]]
 * Output: [null,0,0,2]
 *
 * Example 4:
 * Input:
 * ["Solution","pick","pick","pick"]
 * [[4,[2]],[],[],[]]
 * Output: [null,1,3,1]
 * Explanation of Input Syntax:
 * The input is two lists: the subroutines called and their arguments.
 * Solution's constructor has two arguments, N and the blacklist B. pick has no arguments.
 * Arguments are always wrapped with a list, even if there aren't any.
 *
 * 给定一个包含 [0，n ) 中独特的整数的黑名单 B，写一个函数从 [ 0，n ) 中返回一个不在 B 中的随机整数。
 * 对它进行优化使其尽量少调用系统方法 Math.random()
 */

/**
 * @param {number} N
 * @param {number[]} blacklist
 *
 * 和 No519 Random Filp Matrix 一样的思路
 */
var Solution = function(N, blacklist) {
  this.count = N
  this.map = new Map()
  blacklist.sort((i, j) => j - i)

  for (const blackIndex of blacklist) {
    if (blackIndex !== this.count - 1) {
      const last = this.map.get(this.count - 1) || (this.count - 1)
      this.map.set(blackIndex, last)
    }
    this.count -= 1
  }
}

/**
* @return {number}
*/
Solution.prototype.pick = function() {
  const index = Math.floor(Math.random() * this.count)
  return this.map.get(index) || index
};

/**
* Your Solution object will be instantiated and called as such:
* var obj = new Solution(N, blacklist)
* var param_1 = obj.pick()
*/