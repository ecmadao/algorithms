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
      if (
        notAvaliableColumn.has(`c${i}`)
        || notAvaliableColumn.has(`s${row + i}`)
        || notAvaliableColumn.has(`d${row - i}`)
      ) continue;
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


/* ===================================== SOLUTION 2 ======================================= */

/**
 * 思路：
 * 创建一个长度为 n 的列表，列表内每一位上的数字，代表该列的皇后所应该放置的位置。
 * 因为任意两个皇后不能排在同一排，因此，该列表应该是 [0..(n - 1)]，即列表内元素在该闭区间内，且没有重复元素
 * 我们可以从初始化的 [0,1,2..(n-1)] 列表出发，求其全排列，在全排列的过程中，直接筛选剔除掉不符合题意的值
 * （任意两个元素位于对角线上的全排列应该被剔除）
 */

const inTheDiagonal = (point1, point2) =>
  Math.abs(point1.r - point2.r) === Math.abs(point1.c - point2.c);

// 保证要插入的元素和列表中的每个元素都不在对角线上
const checkValidate = (num, array) =>
  array.every((n, i) => !inTheDiagonal({ c: i + 1, r: n }, { c: 0, r: num }));

const permute = (set) => {
  if (set.size === 1) return [[[...set.values()][0]]];

  const result = [];
  const values = [...set.values()];
  for (const val of values) {
    set.delete(val);
    const nextSet = new Set([...set]);
    const arrays = permute(nextSet);
    for (const array of arrays) {
      if (checkValidate(num, array)) {
        array.unshift(num);
        result.push(array);
      }
    }
    set.add(val);
  }

  return result;
};


/**
* @param {number} n
* @return {string[][]}
* 全排列法
*/
const totalNQueens_permutation = (n) => {
  const baseArray = [];
  for (let i = 0; i < n; i += 1) {
    baseArray.push(i);
  }
  const solutions = permute(new Set(baseArray));
  return solutions.length;
};
