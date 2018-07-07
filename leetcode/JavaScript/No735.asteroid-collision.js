/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * We are given an array asteroids of integers representing asteroids in a row.
 * For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left).
 * Each asteroid moves at the same speed.
 * Find out the state of the asteroids after all collisions.
 * - If two asteroids meet, the smaller one will explode.
 * - If both are the same size, both will explode.
 * - Two asteroids moving in the same direction will never meet.
 *
 * Example:
 * Input:
 * asteroids = [5, 10, -5]
 * Output: [5, 10]
 * Explanation:
 * The 10 and -5 collide resulting in 10.  The 5 and 10 never collide.
 *
 * Input:
 * asteroids = [8, -8]
 * Output: []
 * Explanation:
 * The 8 and -8 collide exploding each other.
 *
 * Input:
 * asteroids = [10, 2, -5]
 * Output: [10]
 * Explanation:
 * The 2 and -5 collide resulting in -5.  The 10 and -5 collide resulting in 10.
 *
 * Input:
 * asteroids = [-2, -1, 1, 2]
 * Output: [-2, -1, 1, 2]
 * Explanation:
 * The -2 and -1 are moving left, while the 1 and 2 are moving right.
 * Asteroids moving the same direction never meet, so no asteroids will meet each other.
 *
 * Note:
 * The length of asteroids will be at most 10000.
 * Each asteroid will be a non-zero integer in the range [-1000, 1000]..
 */

/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
  let i = 0;
  const results = [];
  while (i < asteroids.length) {
    const status = asteroids[i];
    if (status < 0) {
      if (results.length === 0) {
        results.push(status);
      } else {
        while (results.length) {
          const tmp = results.pop();
          if (tmp < 0) {
            results.push(tmp, status);
            break;
          } else if (tmp > -status) {
            results.push(tmp);
            break;
          } else if (tmp === -status) {
            break;
          } else if (!results.length) {
            results.push(status);
            break;
          }
        }
      }
    } else {
      results.push(status);
    }

    i += 1;
  }
  return results;
};
