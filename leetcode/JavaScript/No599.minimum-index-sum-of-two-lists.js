/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Suppose Andy and Doris want to choose a restaurant for dinner, and they both have a list of favorite restaurants represented by strings.
 * You need to help them find out their common interest with the least list index sum.
 * If there is a choice tie between answers, output all of them with no order requirement.
 * You could assume there always exists an answer.
 *
 * Example1:
 * Input:
 * ["Shogun", "Tapioca Express", "Burger King", "KFC"]
 * ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]
 * Output: ["Shogun"]
 * Explanation: The only restaurant they both like is "Shogun".
 *
 * Example2:
 * Input:
 * ["Shogun", "Tapioca Express", "Burger King", "KFC"]
 * ["KFC", "Shogun", "Burger King"]
 * Output: ["Shogun"]
 * Explanation: The restaurant they both like and have the least index sum is "Shogun" with index sum 1 (0+1).
 *
 * Note:
 * 1. The length of both lists will be in the range of [1, 1000].
 * 2. The length of strings in both lists will be in the range of [1, 30].
 * 3. The index is starting from 0 to the list length minus 1.
 * 4. No duplicates in both lists.
 */

/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant_1 = function(list1, list2) {
  const tmp = {};
  let index = 0;
  const result = {};
  let minIndexSum = null;
  while (list1.length || list2.length) {
    if (list1.length) {
      const num1 = list1.shift();
      if (tmp[num1] !== undefined) {
        minIndexSum = index + tmp[num1];
        if (!result[minIndexSum]) result[minIndexSum] = [];
        result[minIndexSum].push(num1);
      } else {
        tmp[num1] = index;
      }
    }
    if (list2.length) {
      const num2 = list2.shift();
      if (tmp[num2] !== undefined) {
        minIndexSum = index + tmp[num2];
        if (!result[minIndexSum]) result[minIndexSum] = [];
        result[minIndexSum].push(num2);
      } else {
        tmp[num2] = index;
      }
    }
    index += 1;
  }
  return result[Object.keys(result)[0]];
};


/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant_1 = function(list1, list2) {
  if (list1[0] === list2[0]) return [list1[0]]
  const map = list1.reduce((c, l, i) => {
    c[l] = i
    return c
  }, {})

  let result = []
  let minIndex = null

  for (let i = 0; i < list2.length; i += 1) {
    if (minIndex !== null && i > minIndex) break
    if (map[list2[i]] !== undefined) {
      if (minIndex === null || minIndex === map[list2[i]] + i) {
        minIndex = map[list2[i]] + i
        result.push(list2[i])
      } else if (minIndex > map[list2[i]] + i) {
        result = [list2[i]]
        minIndex = map[list2[i]] + i
      }
    }
  }
  return result
}
