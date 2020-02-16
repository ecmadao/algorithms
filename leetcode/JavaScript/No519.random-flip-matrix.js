/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * You are given the number of rows n_rows and number of columns n_cols of a 2D binary matrix where all values are initially 0.
 * Write a function flip which chooses a 0 value uniformly at random, changes it to 1, and then returns the position [row.id, col.id] of that value.
 * Also, write a function reset which sets all values back to 0. Try to minimize the number of calls to system's Math.random() and optimize the time and space complexity.
 *
 * Note:
 * 1. 1 <= n_rows, n_cols <= 10000
 * 2. 0 <= row.id < n_rows and 0 <= col.id < n_cols
 * 3. flip will not be called when the matrix has no 0 values left.
 * 4. the total number of calls to flip and reset will not exceed 1000.
 *
 * Example 1:
 * Input:
 * ["Solution","flip","flip","flip","flip"]
 * [[2,3],[],[],[],[]]
 * Output: [null,[0,1],[1,2],[1,0],[1,1]]
 *
 * Example 2:
 * Input:
 * ["Solution","flip","flip","reset","flip"]
 * [[1,2],[],[],[],[]]
 * Output: [null,[0,0],[0,1],null,[0,0]]
 *
 * Explanation of Input Syntax:
 * The input is two lists: the subroutines called and their arguments.
 * Solution's constructor has two arguments, n_rows and n_cols. flip and reset have no arguments.
 * Arguments are always wrapped with a list, even if there aren't any.
 *
 * 题中给出一个 n 行 n 列的二维矩阵 (n_rows,n_cols)，且所有值被初始化为 0。
 * 要求编写一个 flip 函数，均匀随机的将矩阵中的 0 变为 1，并返回该值的位置下标 [row_id,col_id]；同样编写一个 reset 函数，将所有的值都重新置为 0。
 * 尽量最少调用随机函数 Math.random()，并且优化时间和空间复杂度
 */

/*
 * ====================== Solution 1 ======================
 * 1. 矩阵坐标和一维数组映射
 * 2. 记录了被翻转的坐标
 *
 * 缺陷：
 * random 调用次数越多，约容易重复调用（被翻转的越来越多）
 */

/**
 * @param {number} n_rows
 * @param {number} n_cols
 */
var Solution_1 = function(n_rows, n_cols) {
  this.r = n_rows
  this.c = n_cols
  this.len = n_rows * n_cols
  this.fliped = new Set()
};

/**
* @return {number[]}
*/
Solution_1.prototype.flip = function() {
  if (this.fliped.size === this.len) return []
  while (true) {
    const random = Math.floor(Math.random() * this.len)
    if (!this.fliped.has(random)) {
      this.fliped.add(random)
      return [
        Math.floor(random / this.c),
        random % this.c
      ]
    }
  }
};

/**
* @return {void}
*/
Solution_1.prototype.reset = function() {
  this.fliped = new Set()
};

/*
 * ====================== Solution 2 ======================
 * 1. 矩阵坐标和一维数组映射
 * 2. 映射之后，例如 [0,1,2,3,4,5,6,7,8] 对应了 3 * 3 矩阵
 * 3. 此时可用长度为 9
 *
 * 第一次翻转，从 [0, 9) 索引中随机选取 index，例如 index = 3, num = 3，代表矩阵中的 [1, 0]
 * 将该元素和一维数组中，最后一个可用位置交替，则为 [0,1,2,8,4,5,6,7,3]
 * 然后可用长度 - 1 ，即 8
 *
 * 第二次翻转，从 [0, 8) 索引中随机选取 index，假设还是 index = 3，此时 num = 8，代表矩阵中的 [2, 2]
 * 将该元素和一维数组中，最后一个可用位置交替，则为 [0,1,2,7,4,5,6,8,3]
 * 然后可用长度 - 1 ，即 7
 *
 * 这样，就能使得当矩阵中有 k 个 0（即进行了 k 次翻转后）时，[0 .. k - 1] 映射到矩阵中的 0，而 [k ..] 映射到矩阵中的 1
 *
 * 整体和 No710 Random Pick with Blacklist 一样的思路
 */


/**
* Your Solution object will be instantiated and called as such:
* var obj = new Solution(n_rows, n_cols)
* var param_1 = obj.flip()
* obj.reset()
*/

/**
 * @param {number} n_rows
 * @param {number} n_cols
 */
var Solution_2 = function(n_rows, n_cols) {
  this.r = n_rows
  this.c = n_cols
  this.total = n_rows * n_cols

  this.map = new Map()
};

/**
* @return {number[]}
*/
Solution_2.prototype.flip = function() {
  if (!this.total) return []

  const index = Math.floor(Math.random() * this.total)
  const random = this.map.get(index) || index

  const num = this.map.get(this.total - 1) || (this.total - 1)
  this.map.set(this.total - 1, random)
  this.map.set(index, num)
  this.total -= 1

  return [Math.floor(random / this.c), random % this.c]
};

/**
* @return {void}
*/
Solution_2.prototype.reset = function() {
  this.total = this.r * this.c
  this.map = new Map()
};

/**
* Your Solution object will be instantiated and called as such:
* var obj = new Solution(n_rows, n_cols)
* var param_1 = obj.flip()
* obj.reset()
*/