/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a matrix consists of 0 and 1, find the distance of the nearest 0 for each cell.
 * The distance between two adjacent cells is 1.
 *
 * Example:
 * Input:
 * 0 0 0
 * 0 1 0
 * 0 0 0
 *
 * Output:
 * 0 0 0
 * 0 1 0
 * 0 0 0
 *
 * Input:
 * 0 0 0
 * 0 1 0
 * 1 1 1
 *
 * Output:
 * 0 0 0
 * 0 1 0
 * 1 2 1
 *
 * Note:
 * - The number of elements of the given matrix will not exceed 10,000.
 * - There are at least one 0 in the given matrix.
 * - The cells are adjacent in only four directions: up, down, left and right.
 */

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function(matrix) {
  const result = [];
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
  ];
  const maxRowIndex = matrix.length - 1;
  const maxColIndex = matrix[0].length - 1;

  const search = (queue) => {
    while (queue.length) {
      const { r, c, len, from = [] } = queue.shift();

      for (const direction of directions) {
        const rIndex = r + direction[0];
        const cIndex = c + direction[1];

        if (rIndex < 0 || rIndex > maxRowIndex || cIndex < 0 || cIndex > maxColIndex) continue;
        if (rIndex === from[0] && cIndex === from[1]) continue;
        if (matrix[rIndex][cIndex] === 0) return len + 1;
        queue.push({
          r: rIndex,
          c: cIndex,
          len: len + 1,
          from: [r, c]
        });
      }
    }
  };

  for (let r = 0; r <= maxRowIndex; r += 1) {
    const row = matrix[r];
    result[r] = [];

    for (let c = 0; c <= maxColIndex; c += 1) {
      if (row[c] === 0) {
        result[r][c] = 0;
        continue;
      }
      result[r][c] = search([{ r, c, len: 0 }]);
    }
  }
  return result;
};

// Test case
console.log(updateMatrix([
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0]
]))
console.log(updateMatrix([
  [0, 0, 0],
  [0, 1, 0],
  [1, 1, 1]
]));
