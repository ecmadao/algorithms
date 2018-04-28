/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a 2d grid map of '1's (land) and '0's (water), count the number of islands.
 * An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
 * You may assume all four edges of the grid are all surrounded by water.
 *
 * Example:
 * 11110
 * 11010
 * 11000
 * 00000
 * return 1
 *
 * 11000
 * 11000
 * 00100
 * 00011
 * return 3
 */



/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let count = 0;

  if (!grid.length || !grid[0].length) return count;
  const rowLength = grid[0].length;

  const dfs = (i, j) => {
    if (i < 0 || i >= grid.length) return;
    if (j < 0 || j >= rowLength) return;
    if (grid[i][j] !== '1') return;
    grid[i][j] = '-1';

    dfs(i - 1, j);
    dfs(i + 1, j);
    dfs(i, j - 1);
    dfs(i, j + 1);
  };

  for (let i = 0; i < grid.length; i += 1) {
    const row = grid[i];
    for (let j = 0; j < rowLength; j += 1) {
      if (row[j] === '1') {
        count += 1;
        dfs(i, j);
      }
    }
  }

  return count;
};

// Test case
// 3
numIslands(
  [
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1'],
  ]
);
