/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * On an NxN chessboard, a knight starts at the r-th row and c-th column and attempts to make exactly K moves.
 * The rows and columns are 0 indexed, so the top-left square is (0, 0), and the bottom-right square is (N-1, N-1).
 * A chess knight has 8 possible moves it can make, as illustrated below.
 * Each move is two squares in a cardinal direction, then one square in an orthogonal direction.
 * Each time the knight is to move, it chooses one of eight possible moves uniformly at random
 * (even if the piece would go off the chessboard) and moves there.
 *
 * The knight continues moving until it has made exactly K moves or has moved off the chessboard.
 * Return the probability that the knight remains on the board after it has stopped moving.
 *
 * Example:
 * Input: 3, 2, 0, 0
 * Output: 0.0625
 * Explanation:
 * There are two moves (to (1,2), (2,1)) that will keep the knight on the board.
 * From each of those positions, there are also two moves that will keep the knight on the board.
 * The total probability the knight stays on the board is 0.0625.
 *
 * Note:
 * - N will be between 1 and 25.
 * - K will be between 0 and 100.
 * - The knight always initially starts on the board.
 */

/**
 * @param {number} N
 * @param {number} K
 * @param {number} r
 * @param {number} c
 * @return {number}
 */
var knightProbability = function(N, K, r, c) {
  if (!K) return 1;

  const isInBoard = (x, y) => x >= 0 && x < N && y >= 0 && y < N;

  const reachPoints = (x, y) => {
    let count = 0;
    if (isInBoard(x - 2, y - 1)) count += 1;
    if (isInBoard(x - 2, y + 1)) count += 1;
    if (isInBoard(x + 2, y - 1)) count += 1;
    if (isInBoard(x + 2, y + 1)) count += 1;
    if (isInBoard(x - 1, y - 2)) count += 1;
    if (isInBoard(x - 1, y + 2)) count += 1;
    if (isInBoard(x + 1, y - 2)) count += 1;
    if (isInBoard(x + 1, y + 2)) count += 1;
    return count;
  };

  const stepTmp = [];

  for (let k = 1; k <= K; k += 1) {
    stepTmp[k] = [];

    for (let i = 0; i < N; i += 1) {
      stepTmp[k][i] = [];

      for (let j = 0; j < N; j += 1) {
        stepTmp[k][i][j] = 0;
        if (k === 1) {
          stepTmp[k][i][j] += reachPoints(i, j);
        } else {
          if (isInBoard(i - 2, j - 1)) stepTmp[k][i][j] += stepTmp[k - 1][i - 2][j - 1];
          if (isInBoard(i - 2, j + 1)) stepTmp[k][i][j] += stepTmp[k - 1][i - 2][j + 1];
          if (isInBoard(i + 2, j - 1)) stepTmp[k][i][j] += stepTmp[k - 1][i + 2][j - 1];
          if (isInBoard(i + 2, j + 1)) stepTmp[k][i][j] += stepTmp[k - 1][i + 2][j + 1];
          if (isInBoard(i - 1, j - 2)) stepTmp[k][i][j] += stepTmp[k - 1][i - 1][j - 2];
          if (isInBoard(i - 1, j + 2)) stepTmp[k][i][j] += stepTmp[k - 1][i - 1][j + 2];
          if (isInBoard(i + 1, j - 2)) stepTmp[k][i][j] += stepTmp[k - 1][i + 1][j - 2];
          if (isInBoard(i + 1, j + 2)) stepTmp[k][i][j] += stepTmp[k - 1][i + 1][j + 2];
        }
      }
    }
  }

  return stepTmp[K][r][c] / Math.pow(8, K);
};

console.log(knightProbability(3, 2, 0, 0)); // 0.0625
console.log(knightProbability(3, 3, 0, 0)); // 0.01562
console.log(knightProbability(10, 13, 5, 3)); // 0.11734
console.log(knightProbability(1, 0, 0, 0)); // 1
console.log(knightProbability(1, 1, 0, 0)); // 0
console.log(knightProbability(8, 30, 6, 4)); // 0.00019052566298333648
