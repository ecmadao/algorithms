/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given an array of integers that is already sorted in ascending order,
 * find two numbers such that they add up to a specific target number.
 * The function twoSum should return indices of the two numbers such that they add up to the target,
 * where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are not zero-based.
 * You may assume that each input would have exactly one solution and you may not use the same element twice.
 *
 * Example:
 * Input: numbers = [2, 7, 11, 15], target=9
 * Output: index1=1, index2=2
 *
 * 第一题 No.1 Two sum 的衍生题，与第一题不同点有：
 * 1. 数组已经按照从小到大排序
 * 2. 索引从 1 开始而不是 0
 */

/**
 * 思路：
 * 本质上讲，这道题和第一题思路基本一样，而且鉴于数组已经是升序排列，则其实更简单
 * 我们只需要创建首位的索引 start = 0，末位的索引 end = length - 1
 * 然后向中间遍历即可：
 * 如果 nums[start] + nums[end] > target，则过大，右侧应向左移；
 * 如果 nums[start] + nums[end] < target，则过小，左侧应向右移；
 * 否则直接返回结果
 */

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  var start = 0;
  var end = numbers.length - 1;

  while(start < end) {
    var sum = numbers[start] + numbers[end];
    if (sum > target) {
      end -= 1;
    } else if (sum < target) {
      start += 1;
    } else {
      return [start + 1, end + 1]
    }
  }
  return [];
};