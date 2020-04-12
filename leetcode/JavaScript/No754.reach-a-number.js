/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * You are standing at position 0 on an infinite number line. There is a goal at position target.
 * On each move, you can either go left or right. During the n-th move (starting from 1), you take n steps.
 * Return the minimum number of steps required to reach the destination.
 * 
 * Example 1:
 * Input: target = 3
 * Output: 2
 * Explanation:
 * On the first move we step from 0 to 1.
 * On the second step we step from 1 to 3.
 * 
 * Example 2:
 * Input: target = 2
 * Output: 3
 * Explanation:
 * On the first move we step from 0 to 1.
 * On the second move we step  from 1 to -1.
 * On the third move we step from -1 to 2.
 * 
 * Note:
 * target will be a non-zero integer in the range [-10^9, 10^9]
 */

/**
 * @param {number} target
 * @return {number}
 * 
 * Solition 1: BDF, timeout
 */
var reachNumber_1 = function(target) {
  const queue = [[0, 1]]
  while (queue.length) {
    const [pos, step] = queue.shift()
    if (pos === target) return step - 1
    if (pos + step === target || pos - step === target) return step
    queue.push([pos + step, step + 1])
    queue.push([pos - step, step + 1])
  }
}

/**
 * @param {number} target
 * @return {number}
 */
var reachNumber_2 = function(target) {
  let step = 0
  let pos = 0
  target = Math.abs(target)
  while (pos < target || (pos - target) % 2 !== 0) {
    step += 1
    pos += step
  }
  return step
};

// 1 + 2 + 3 + 4 + .... + n

// 0 + 1 + 2 + 3 = 6
// -1, 0, 1, 2, 3, 4, 5, 6  target = 4