/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * Follow up for N-Queens problem.
 * Now, instead outputting board configurations, return the total number of distinct solutions
 *
 * 还是 n 皇后问题，只是相对于上一题，这次只需要求出解的数目即可
 */

var getQueues = function(n) {
  var results = 0;

  var getQueue = function(row, notAvaliableColumn, finishedRowCount) {
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
      if (getQueue(row + 1, notAvaliable, finishedRowCount + 1)) {
        if (finishedRowCount >= n) {
          result = true;
          results += 1;
          break;
        }
      } else {
        notAvaliable.delete(`c${i}`);
        notAvaliable.delete(`d${row - i}`);
        notAvaliable.delete(`s${row + i}`);
      }
    }
    return result;
  };
  getQueue(1, new Set(), 1);
  return results;
};

/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
  if (n === 1) return 1;
  if (n <= 3) return 0;
  var results = getQueues(n);
  return results;
};