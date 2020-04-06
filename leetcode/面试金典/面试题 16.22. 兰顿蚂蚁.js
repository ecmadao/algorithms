/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * 一只蚂蚁坐在由白色和黑色方格构成的无限网格上。开始时，网格全白，蚂蚁面向右侧。每行走一步，蚂蚁执行以下操作。
 * (1) 如果在白色方格上，则翻转方格的颜色，向右(顺时针)转 90 度，并向前移动一个单位。
 * (2) 如果在黑色方格上，则翻转方格的颜色，向左(逆时针方向)转 90 度，并向前移动一个单位。
 *
 * 编写程序来模拟蚂蚁执行的前 K 个动作，并返回最终的网格。
 * 网格由数组表示，每个元素是一个字符串，代表网格中的一行，
 * 黑色方格由 'X' 表示，白色方格由 '_' 表示，蚂蚁所在的位置由 'L', 'U', 'R', 'D' 表示，
 * 分别表示蚂蚁 左、上、右、下 的朝向。只需要返回能够包含蚂蚁走过的所有方格的最小矩形。
 *
 * 示例 1:
 * 输入: 0
 * 输出: ["R"]
 *
 * 示例 2:
 * 输入: 2
 * 输出:
 * [
 *   "_X",
 *   "LX"
 * ]
 *
 * 示例 3:
 * 输入: 5
 * 输出:
 * [
 *   "_U",
 *   "X_",
 *   "XX"
 * ]
 *
 * 说明：
 * K <= 100000
 */

/**
 * @param {number} K
 * @return {string[]}
 */
var printKMoves = function(K) {
  if (!K) return ['R']

  let status = 'R'
  let i = 0
  let j = 0
  const res = [['_']]

  const getNextStatus = (i, j, status) => {
    let s = status

    const key = res[i][j]
    if (key === '_') {
      res[i][j] = 'X'
      switch (status) {
        case 'R':
          s = 'D'
          i += 1
          break
        case 'L':
          s = 'U'
          i -= 1
          break
        case 'D':
          s = 'L'
          j -= 1
          break
        case 'U':
          s = 'R'
          j += 1
          break
      }
    } else {
      res[i][j] = '_'
      switch (status) {
        case 'R':
          s = 'U'
          i -= 1
          break
        case 'L':
          s = 'D'
          i += 1
          break
        case 'D':
          s = 'R'
          j += 1
          break
        case 'U':
          s = 'L'
          j -= 1
          break
      }
    }

    return [i, j, s]
  }

  while (K > 0) {
    const [ni, nj, ns] = getNextStatus(i, j, status)
    if (ni < 0) {
      res.unshift(
        Array.from({ length: res[0].length }, (_, index) => '_')
      )
    } else if (ni >= res.length) {
      res.push(
        Array.from({ length: res[0].length }, (_, index) => '_')
      )
    }
    if (nj < 0) {
      for (const arr of res) arr.unshift('_')
    } else if (nj >= res[0].length) {
      for (const arr of res) arr.push('_')
    }
    i = Math.max(ni, 0)
    j = Math.max(nj, 0)
    status = ns
    K -= 1
  }

  res[i][j] = status

  return res.map(arr => arr.join(''))
};

// 3 -> ["UX","XX"]
// 4 -> ["XR","XX"]
// 5 -> ["_U","X_","XX"]