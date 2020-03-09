/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * In an n*n grid, there is a snake that spans 2 cells and starts moving from the top left corner at (0, 0) and (0, 1). The grid has empty cells represented by zeros and blocked cells represented by ones.
 * The snake wants to reach the lower right corner at (n-1, n-2) and (n-1, n-1).
 * In one move the snake can:
 * 1. Move one cell to the right if there are no blocked cells there. This move keeps the horizontal/vertical position of the snake as it is.
 * 2. Move down one cell if there are no blocked cells there. This move keeps the horizontal/vertical position of the snake as it is.
 * 3. Rotate clockwise if it's in a horizontal position and the two cells under it are both empty. In that case the snake moves from (r, c) and (r, c+1) to (r, c) and (r+1, c).
 * 4. Rotate counterclockwise if it's in a vertical position and the two cells to its right are both empty. In that case the snake moves from (r, c) and (r+1, c) to (r, c) and (r, c+1).
 *
 * Return the minimum number of moves to reach the target.
 * If there is no way to reach the target, return -1.
 *
 * Example 1:
 * Input: grid = [[0,0,0,0,0,1],
 *                [1,1,0,0,1,0],
 *                [0,0,0,0,1,1],
 *                [0,0,1,0,1,0],
 *                [0,1,1,0,0,0],
 *                [0,1,1,0,0,0]]
 * Output: 11
 * Explanation:
 * One possible solution is [right, right, rotate clockwise, right, down, down, down, down, rotate counterclockwise, right, down].
 *
 * Example 2:
 * Input: grid = [[0,0,1,1,1,1],
 *                [0,0,0,0,1,1],
 *                [1,1,0,0,0,1],
 *                [1,1,1,0,0,1],
 *                [1,1,1,0,0,1],
 *                [1,1,1,0,0,0]]
 * Output: 9
 *
 * Constraints:
 * 1. 2 <= n <= 100
 * 2. 0 <= grid[i][j] <= 1
 * 3. It is guaranteed that the snake starts at empty cells.
 *
 * 我们在一个 n*n 的网格上构建了新的迷宫地图，蛇的长度为 2，也就是说它会占去两个单元格。蛇会从左上角（(0, 0) 和 (0, 1)）开始移动。我们用 0 表示空单元格，用 1 表示障碍物。蛇需要移动到迷宫的右下角（(n-1, n-2) 和 (n-1, n-1)）。
 * 每次移动，蛇可以这样走：
 * 1. 如果没有障碍，则向右移动一个单元格。并仍然保持身体的水平／竖直状态。
 * 2. 如果没有障碍，则向下移动一个单元格。并仍然保持身体的水平／竖直状态。
 * 3. 如果它处于水平状态并且其下面的两个单元都是空的，就顺时针旋转 90 度。蛇从（(r, c)、(r, c+1)）移动到 （(r, c)、(r+1, c)）。
 * 4. 如果它处于竖直状态并且其右面的两个单元都是空的，就逆时针旋转 90 度。蛇从（(r, c)、(r+1, c)）移动到（(r, c)、(r, c+1)）。
 *
 * 返回蛇抵达目的地所需的最少移动次数。
 * 如果无法到达目的地，请返回 -1
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumMoves = function(grid) {
  const queue = [[[0, 0], [0, 1], '']]
  const N = grid.length
  // 记录蛇头所在的位置。1 表示 蛇在水平的时候蛇头路过的位置，2 表示蛇在垂直的时候蛇头路过的位置
  const vis = Array.from({ length: N }, (_, i) => Array.from({ length: N }))
  let step = 0

  while (queue.length) {
    let len = queue.length
    while (len) {
      const [p1, p2] = queue.shift()
      if (p1[0] === N - 1 && p1[1] === N - 2 && p2[0] === N - 1 && p2[1] === N - 1) return step

      if (p1[0] === p2[0] && p1[1] + 1 === p2[1]) { // 处于水平
        if (p2[1] + 1 < N && grid[p2[0]][p2[1] + 1] === 0 && !(vis[p2[0]][p2[1] + 1] & 1)) {
          // 向右平移
          vis[p2[0]][p2[1] + 1] |= 1
          queue.push([p2, [p2[0], p2[1] + 1]])
        }
        if (p1[0] + 1 < N && grid[p1[0] + 1][p1[1]] === 0 && grid[p2[0] + 1][p2[1]] === 0) {
          // 顺时针转
          if (!(vis[p1[0] + 1][p1[1]] & 2)) {
            vis[p1[0] + 1][p1[1]] |= 2
            queue.push([
              p1,
              [p1[0] + 1, p1[1]],
            ])
          }
          // 向下平移
          if(!(vis[p2[0] + 1][p2[1]] & 1)) {
            vis[p2[0] + 1][p2[1]] |= 1
            queue.push([
              [p1[0] + 1, p1[1]],
              [p2[0] + 1, p2[1]],
            ])
          }
        }
      } else if (p1[1] === p2[1] && p1[0] + 1 === p2[0]) { // 处于垂直
        if (p2[0] + 1 < N && grid[p2[0] + 1][p2[1]] === 0 && !(vis[p2[0] + 1][p2[1]] & 2)) {
          vis[p2[0] + 1][p2[1]] |= 2
          // 向下平移
          queue.push([p2, [p2[0] + 1, p2[1]]])
        }
        if (p1[1] + 1 < N && grid[p1[0]][p1[1] + 1] === 0 && grid[p2[0]][p2[1] + 1] === 0) {
          // 逆时针旋转
          if (!(vis[p1[0]][p1[1] + 1] & 1)) {
            vis[p1[0]][p1[1] + 1] |= 1
            queue.push([
              p1,
              [p1[0], p1[1] + 1]
            ])
          }
          // 向右平移
          if (!(vis[p2[0]][p2[1] + 1] & 2)) {
            vis[p2[0]][p2[1] + 1] |= 2
            queue.push([
              [p1[0], p1[1] + 1],
              [p2[0], p2[1] + 1]
            ])
          }
        }
      }

      len -= 1
    }
    step += 1
  }

  return -1
};