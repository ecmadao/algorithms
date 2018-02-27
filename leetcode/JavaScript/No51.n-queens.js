/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.
 * Given an integer n, return all distinct solutions to the n-queens puzzle.
 * Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space respectively.
 *
 * Example:
 * 4-queens puzzle:
 * [
 *    [".Q..",  // Solution 1
 *     "...Q",
 *     "Q...",
 *     "..Q."],
 *    ["..Q.",  // Solution 2
 *     "Q...",
 *     "...Q",
 *     ".Q.."]
 * ]
 *
 * N-皇后问题：在 n * n 的棋盘上摆放 n 个皇后，要求皇后直接无法相互攻击
 * 用数组返回所有可能的解，摆放皇后的地方用 Q 表示，否则用 . 表示
 */

/**
 * 思路：
 * 在国际象棋里，皇后可以沿着横排、数列、对角线进行走动、攻击，且格树不限。
 * 因此，为了能够在 n * n 的棋盘上交叉摆放开 n 皇后且无法相互攻击，则任意两个都不能位于同一行、同一列、同一对角线
 * 总体上，还是使用回溯法，在每行的时候都进行遍历，假设遍历的某个点为皇后位置（通过已有的皇后进行验证，确定该位置对之前的皇后合法，才会假设它是当前行的皇后）
 * 然后继续对下一行遍历并筛选出皇后位置。如果无法得到合法的位置，则回溯到上一次的假设，重新取值
 *
 * （回溯法的思路跟第 37 题 Sudoku solver 基本一致）
 */

var getQueues = function(n, results) {
  var getQueue = function(row, solution, notAvaliableColumn, finishedRowCount) {
    if (row > n) return true;
    var result = false;

    for (var i = 0; i < n; i += 1) {
      if (notAvaliableColumn.has(`c${i}`) || notAvaliableColumn.has(`s${row + i}`) || notAvaliableColumn.has(`d${row - i}`)) continue;
      var notAvaliable = new Set([...notAvaliableColumn]);
      notAvaliable.add(`c${i}`);
      notAvaliable.add(`d${row - i}`);
      notAvaliable.add(`s${row + i}`);
      var qRow = new Array(n).fill('.');
      qRow[i] = 'Q';
      solution = [
        ...solution
      ];
      solution[row - 1] = qRow.join('');
      if (getQueue(row + 1, solution, notAvaliable, finishedRowCount + 1)) {
        if (finishedRowCount >= n) {
          result = true;
          results.push(solution);
          solution = [];
          break;
        }
      } else {
        notAvaliable.delete(`c${i}`);
        notAvaliable.delete(`d${row - i}`);
        notAvaliable.delete(`s${row + i}`);
        solution[row - 1] = [];
      }
    }
    return result;
  };
  return getQueue;
};

/**
* @param {number} n
* @return {string[][]}
*/
var solveNQueens = function(n) {
  if (n === 1) return [['Q']];
  if (n <= 3) return [];
  var results = [];
  var getQueue = getQueues(n, results);
  var notAvaliableColumn = new Set();
  getQueue(1, [], notAvaliableColumn, 1);
  return results;
};