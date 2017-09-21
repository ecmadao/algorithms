/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Follow up for "Unique Paths":
 * Now consider if some obstacles are added to the grids. How many unique paths would there be?
 * An obstacle and empty space is marked as 1 and 0 respectively in the grid.
 *
 * Example:
 * There is one obstacle in the middle of a 3x3 grid as illustrated below.
 * [
 *    [0,0,0],
 *    [0,1,0],
 *    [0,0,0]
 * ]
 * The total number of unique paths is 2.
 *
 * 依旧是走棋盘，但棋盘上有些位置会有阻碍（用 1 表示），使得道路不通
 */

/**
 * 和上一题的思路一致，使用动态规划
 * 但要注意特殊位置的问题
 * 当走到障碍处之后，之前积累的路径数情况，且障碍点对其之后的点贡献的路径数为 0
 */

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  var steps = [];
  for (var i = 0; i < obstacleGrid.length; i += 1) {
    var col = obstacleGrid[i];
    for (var j = 0; j < col.length; j += 1) {
      var key = `${i}${j}`;
      if (col[j] === 1) {
        steps[key] = 0;
        continue;
      }
      if (i === 0 && j === 0) {
        steps[key] = 1;
        continue;
      }
      if (i === 0 || j === 0) {
        var preKey = `${i === 0 ? i : i - 1}${j === 0 ? j : j - 1}`;
        steps[key] = steps[preKey];
        continue;
      }
      steps[key] = steps[`${i}${j - 1}`] + steps[`${i - 1}${j}`];
    }
  }
  return steps[`${obstacleGrid.length - 1}${obstacleGrid[0].length - 1}`];
};

console.log(uniquePathsWithObstacles([ [ 0 ] ]));
console.log(uniquePathsWithObstacles(
  [
    [0,0,0],
    [0,1,0],
    [0,0,0]
  ]
));