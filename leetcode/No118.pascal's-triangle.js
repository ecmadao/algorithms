/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given numRows, generate the first numRows of Pascal's triangle.
 *
 * Example:
 * Given numRows = 5,
 * Return
 * [
 * [1],
 * [1,1],
 * [1,2,1],
 * [1,3,3,1],
 * [1,4,6,4,1]
 * ]
 */

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if (!numRows) return [];
  var results = [[1]];
  for (var i = 1; i < numRows; i += 1) {
    var row = [];
    var arr = results[i - 1];
    for (var j = -1; j < arr.length; j += 1) {
      row.push((arr[j] || 0) + (arr[j + 1] || 0));
    }
    results.push(row);
  }
  return results;
};
