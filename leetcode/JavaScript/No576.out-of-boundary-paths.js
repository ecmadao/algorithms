/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * There is an m by n grid with a ball.
 * Given the start coordinate (i,j) of the ball,
 * you can move the ball to adjacent cell or cross the grid boundary in four directions (up, down, left, right).
 * However, you can at most move N times. Find out the number of paths to move the ball out of grid boundary.
 * The answer may be very large, return it after mod 109 + 7.
 *
 * Example:
 * Input:m = 2, n = 2, N = 2, i = 0, j = 0
 * Output: 6
 *
 * Input:m = 1, n = 3, N = 3, i = 0, j = 1
 * Output: 12
 *
 * Note:
 * Once you move the ball out of boundary, you cannot move it back.
 * The length and height of the grid is in range [1,50].
 * N is in range [0,50].
 */

/* ============== SOLUTION 1 ============== */

/**
 * @param {number} m
 * @param {number} n
 * @param {number} N
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
var findPaths_1 = function(m, n, N, i, j) {
  const tmp = new Map();
  const MOD = 10**9 + 7;

  const walk = (remain, I, J) => {
    if (I < 0 || I >= m || J < 0 || J >= n) return 1;
    if (remain === 0) return 0;

    const key = `${remain}-${I}-${J}`;
    if (tmp.has(key)) return tmp.get(key);

    const toLeft = walk(remain - 1, I, J - 1);
    const toRight = walk(remain - 1, I, J + 1);
    const toTop = walk(remain - 1, I - 1, J);
    const toBottom = walk(remain - 1, I + 1, J);

    const count = (toLeft + toRight + toTop + toBottom) % MOD;

    tmp.set(key, count);
    return count;
  };
  const result = walk(N, i, j);
  return result;
};

/* ============== SOLUTION 2 ============== */

/**
 * @param {number} m
 * @param {number} n
 * @param {number} N
 * @param {number} i
 * @param {number} j
 * @return {number}
 *
 * 进一步优化速度
 */
var findPaths = function(m, n, N, i, j) {
  const tmp = {};
  const MOD = 10**9 + 7;

  const walk = (remain, I, J) => {
    const key = `${I}-${J}`;
    const item = tmp[key];
    if (item && remain <= item.remain) return item.count;

    if (I < 0 || I >= m || J < 0 || J >= n) {
      tmp[key] = {
        count: 1,
        remain
      };
      return 1;
    }

    if (remain === 0) {
      tmp[key] = {
        count: 0,
        remain
      };
      return 0;
    }

    const toLeft = walk(remain - 1, I, J - 1);
    const toRight = walk(remain - 1, I, J + 1);
    const toTop = walk(remain - 1, I - 1, J);
    const toBottom = walk(remain - 1, I + 1, J);

    const count = (toLeft + toRight + toTop + toBottom) % MOD;

    tmp[key] = {
      count,
      remain
    };
    return count;
  };

  return walk(N, i, j);
};


// Test case
console.log(findPaths(2,2,2,0,0))
console.log(findPaths(1,3,3,0,1))
console.log(findPaths(8,50,23,5,26)) // 914783380
console.log(findPaths(36,5,50,15,3)) // 390153306
