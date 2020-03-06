/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * On a 2D plane, we place stones at some integer coordinate points.  Each coordinate point may have at most one stone.
 * Now, a move consists of removing a stone that shares a column or row with another stone on the grid.
 * What is the largest possible number of moves we can make?
 *
 * Example 1:
 * Input: stones = [[0,0],[0,1],[1,0],[1,2],[2,1],[2,2]]
 * Output: 5
 *
 * Example 2:
 * Input: stones = [[0,0],[0,2],[1,1],[2,0],[2,2]]
 * Output: 3
 *
 * Example 3:
 * Input: stones = [[0,0]]
 * Output: 0
 *
 * Note:
 * 1. 1 <= stones.length <= 1000
 * 2. 0 <= stones[i][j] < 10000
 *
 * 题目大概意思是 每次move会移除一块行或列存在其他石头的石头(一次只移除一块石头，这块石头满足行或列有其他石头) 问最多可以移除多少块
 */


const find = (map, i) => {
  while (map[i] !== i) i = map[i]
  return i
}

const union = (map, i, j) => {
  if (map[i] === undefined) map[i] = i
  if (map[j] === undefined) map[j] = j
  const i1 = find(map, i)
  const i2 = find(map, j)

  map[i1] = i2
}

/**
* @param {number[][]} stones
* @return {number}
*/
var removeStones = function(stones) {
  const map = {}

  // 因为并查集是一维的，所以用 j + 10000 来代替 j
  for (const [i, j] of stones) union(map, i, j + 10000)

  const individual = new Set(
    stones.map(stone => find(map, stone[0]))
  )
  return stones.length - individual.size
}

// [0,0], [0,1], xxxxx
// [1,0], xxxxx, [1,2]
// xxxxx, [2,1], [2,2]

// [0,0], xxxxx, [0,2]
// xxxxx, [1,1], xxxxx
// [2,0], xxxxx, [2,2]

// [[0,1],[1,2],[1,3],[3,3],[2,3],[0,2]]
// xxxxx, [0,1], [0,2], xxxxx
// xxxxx, xxxxx, [1,2], [1,3]
// xxxxx, xxxxx, xxxxx, [2,3]
// xxxxx, xxxxx, xxxxx, [3,3]

// [[0,1],[0,2],[4,3],[2,4],[0,3],[1,1]]

