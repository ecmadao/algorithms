/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given an index k, return the kth row of the Pascal's triangle.
 *
 * Example:
 * Given k = 3,
 * Return [1,3,3,1].
 */

var getColumn = function(tmp, index, max) {
  var key = `${index}-${max}`;
  if (tmp[key] !== undefined) return tmp[key];

  var result;
  if (index < 0 || index > max) {
    result = 0;
  } else if (index === 0 || index === max) {
    result = 1;
  } else if (index === 1 || index === max - 1) {
    result = max;
  } else {
    result = getColumn(tmp, index - 1, max - 1) + getColumn(tmp, index, max - 1);
  }
  tmp[key] = result;
  return result;
};

/**
* @param {number} rowIndex
* @return {number[]}
*/
var getRow = function(rowIndex) {
  if (rowIndex === 0) return [1];
  var result = [];
  var tmp = {};
  for (var i = 0; i <= rowIndex; i += 1) {
    result.push(getColumn(tmp, i, rowIndex));
  }
  return result;
};

