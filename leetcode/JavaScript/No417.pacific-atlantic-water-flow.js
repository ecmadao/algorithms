/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given an m x n matrix of non-negative integers representing the height of each unit cell in a continent,
 * the "Pacific ocean" touches the left and top edges of the matrix and the "Atlantic ocean" touches the right and bottom edges.
 * Water can only flow in four directions (up, down, left, or right) from a cell to another one with height equal or lower.
 * Find the list of grid coordinates where water can flow to both the Pacific and Atlantic ocean.
 *
 * Note:
 * - The order of returned grid coordinates does not matter.
 * - Both m and n are less than 150.
 *
 * Example:
 * Given the following 5x5 matrix:
  Pacific ~   ~   ~   ~   ~
       ~  1   2   2   3  (5) *
       ~  3   2   3  (4) (4) *
       ~  2   4  (5)  3   1  *
       ~ (6) (7)  1   4   5  *
       ~ (5)  1   1   2   4  *
          *   *   *   *   * Atlantic
 * Return:
 * [[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]] (positions with parentheses in above matrix).
 */

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
const pacificAtlantic = (matrix) => {
  if (!matrix.length || !matrix[0].length) return [];

  const results = [];
  const pacificTmp = [];
  const atlanticTmp = [];
  const maxRow = matrix.length;
  const maxCol = matrix[0].length;

  const checkFlow = (r, c, nexts, height, validator, tmp, container) => {
    if (validator(r, c)) {
      if (!container[r]) container[r] = [];
      container[r][c] = true;
      return true;
    }
    tmp[`${r}-${c}`] = true;

    for (const [nextR, nextC] of nexts) {
      if (nextR < 0 || nextC < 0 || nextR >= maxRow || nextC >= maxCol) continue;
      if (matrix[nextR][nextC] <= height) {
        if (container[nextR] && container[nextR][nextC]) {
          if (!container[r]) container[r] = [];
          container[r][c] = true;
          return true;
        }
        const key = `${nextR}-${nextC}`;
        if (!tmp[key]) {
          tmp[key] = true;
          const result = checkFlow(
            nextR,
            nextC,
            [[nextR - 1, nextC], [nextR + 1, nextC], [nextR, nextC - 1], [nextR, nextC + 1]],
            matrix[nextR][nextC],
            validator,
            tmp,
            container
          );
          if (result) {
            if (!container[r]) container[r] = [];
            container[r][c] = true;
            return true;
          }
        }
      }
    }

    if (!container[r]) container[r] = [];
    container[r][c] = false;
    return false;
  };

  for (let r = 0; r < maxRow; r += 1) {
    pacificTmp[r] = [];
    atlanticTmp[r] = [];
    for (let c = 0; c < maxCol; c += 1) {
      const height = matrix[r][c];
      const checkPacific = checkFlow(
        r,
        c,
        [[r - 1, c], [r + 1, c], [r, c - 1], [r, c + 1]],
        height,
        (r, c) => r <= 0 || c <= 0 || (pacificTmp[r] && pacificTmp[r][c]),
        {},
        pacificTmp
      );

      const checkAtlantic = checkFlow(
        r,
        c,
        [[r - 1, c], [r + 1, c], [r, c - 1], [r, c + 1]],
        height,
        (r, c) => r >= maxRow - 1 || c >= maxCol - 1 || (atlanticTmp[r] && atlanticTmp[r][c]),
        {},
        atlanticTmp
      );

      if (checkPacific && checkAtlantic) {
        results.push([r, c]);
      }
    }
  }
  return results;
};

// Test case
console.log(pacificAtlantic(
  [
    [1, 2, 2, 3, 5],
    [3, 2, 3, 4, 4],
    [2, 4, 5, 3, 1],
    [6, 7, 1, 4, 5],
    [5, 1, 1, 2, 4]
  ]
));
console.log(pacificAtlantic(
  [
    [1,2,3],
    [8,9,4],
    [7,6,5]
  ]
));
