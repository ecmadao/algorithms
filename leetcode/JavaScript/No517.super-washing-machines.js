/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * You have n super washing machines on a line. Initially, each washing machine has some dresses or is empty.
 * For each move, you could choose any m (1 ≤ m ≤ n) washing machines,
 * and pass one dress of each washing machine to one of its adjacent washing machines at the same time .
 * Given an integer array representing the number of dresses in each washing machine from left to right on the line,
 * you should find the minimum number of moves to make all the washing machines have the same number of dresses.
 * If it is not possible to do it, return -1.
 *
 * Example:
 * Input: [1,0,5]
 * Output: 3
 * Explanation:
 * 1st move:    1     0 <-- 5    =>    1     1     4
 * 2nd move:    1 <-- 1 <-- 4    =>    2     1     3
 * 3rd move:    2     1 <-- 3    =>    2     2     2
 *
 * Input: [0,3,0]
 * Output: 2
 * Explanation:
 * 1st move:    0 <-- 3     0    =>    1     2     0
 * 2nd move:    1     2 --> 0    =>    1     1     1
 *
 * Input: [0,2,0]
 * Output: -1
 * Explanation:
 * It's impossible to make all the three washing machines have the same number of dresses.
 *
 * Note:
 * - The range of n is [1, 10000].
 * - The range of dresses number in a super washing machine is [0, 1e5].
 */

/**
 * @param {number[]} machines
 * @return {number}
 */
var findMinMoves = function(machines) {
  const total = machines.reduce((pre, cur) => pre + cur, 0);
  if (!total) return 0;
  if (total < machines.length || total % machines.length !== 0) return -1;
  const avg = total / machines.length;

  let i = 0;
  let result = 0;
  const queue = [];

  while (i < machines.length) {
    const machine = machines[i];

    if (machine < avg) {
      const need = avg - machine;
      machines[i] = avg;
      machines[i + 1] -= need;
      queue[i + 1] = need;
      result = Math.max(result, queue[i + 1]);
    } else if (machine > avg) {
      const offset = machine - avg;
      queue[i] = (queue[i] || 0) + offset;
      machines[i] = avg;
      machines[i + 1] += offset;
      result = Math.max(result, queue[i]);
    }
    i += 1;
  }

  console.log(result);
  return result;
};

// Test case
findMinMoves([8, 2, 1, 0, 4]); // avg: 3, result: 5
findMinMoves([4, 1, 0, 3]); // avg: 2, result: 2
findMinMoves([1, 0, 5]); // avg: 2, result: 3
findMinMoves([0, 3, 0]); // avg: 1, result: 2
findMinMoves([0, 0, 11, 5]); // avg: 4, result: 8
findMinMoves([5, 11, 0, 0]); // avg: 4, result: 8
findMinMoves([11, 5, 0, 0]); // avg: 4, result: 8
findMinMoves([5, 2, 4, 2, 2]); // 2
findMinMoves([1]); // 0
findMinMoves([0]); // 0
findMinMoves([2, 2, 2]); // 0
findMinMoves([0, 0, 10, 0, 0]); // avg:2, result: 8
findMinMoves([5, 0, 0, 2, 2, 3]); // avg: 2, result: 3
findMinMoves([0, 0, 10, 0, 0, 0, 10, 0, 0, 0]); // 8
