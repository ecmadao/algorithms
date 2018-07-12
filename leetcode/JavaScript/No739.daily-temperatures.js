/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a list of daily temperatures, produce a list that, for each day in the input,
 * tells you how many days you would have to wait until a warmer temperature.
 * If there is no future day for which this is possible, put 0 instead.
 *
 * Example:
 * Given the list temperatures = [73, 74, 75, 71, 69, 72, 76, 73],
 * your output should be [1, 1, 4, 2, 1, 1, 0, 0].
 *
 * Note:
 * The length of temperatures will be in the range [1, 30000].
 * Each temperature will be an integer in the range [30, 100].
 */

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
const dailyTemperatures = (temperatures) => {
  const result = [];
  const stack = [];

  for (let i = 0; i < temperatures.length; i += 1) {
    const temperature = temperatures[i];
    while (stack.length && stack[stack.length - 1].temperature < temperature) {
      const item = stack.pop();
      result[item.index] = i - item.index;
    }
    stack.push({
      index: i,
      temperature
    });
  }
  while (stack.length) {
    const item = stack.pop();
    result[item.index] = 0;
  }
  return result;
};

// Test case
console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
