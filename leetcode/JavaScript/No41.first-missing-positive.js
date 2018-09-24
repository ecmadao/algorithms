/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * Given an unsorted integer array, find the first missing positive integer.
 *
 * Example:
 * Given [1,2,0] return 3,
 * and [3,4,-1,1] return 2.
 *
 * Note:
 * Your algorithm should run in O(n) time and uses constant space.
 *
 * 给出一个乱序排列的数组，求出其中缺失的第一个正数
 * 例如，在 [3,4,-1,1] 中，按照从小到大应该是 -1, 1, 3, 4，其中 2缺失
 * 注意，不能创建新数组，算法复杂度为线性 O(n)
 */


/**
 * @param {number[]} nums
 * @return {number}
 *
 * 思路一：
 * 将各个位置上的正数 n，放到比 n 小 1 的位置上，例如
 * [3, 4, -1, 1]，改变位置之后为 [1, -1, 3, 4]，然后只要找到第一个不符合该规则的位置 i 即可
 * i + 1 即是第一个缺失的正整数
 */
var firstMissingPositive = function(nums) {
  var result = nums.length + 1;

  for (var i = 0; i < nums.length; i += 1) {
    while(nums[i] > 0 && nums[i] !== nums[nums[i] - 1] && nums[i] < i + 1) {
      var index = nums[i] - 1;
      var temp = nums[index];
      nums[index] = nums[i];
      nums[i] = temp;
    }
  }

  for (var i = 0; i < nums.length; i += 1) {
    if (nums[i] !== i + 1) {
      result = i + 1;
      break;
    }
  }

  return result;
};

/**
 * @param {number[]} nums
 * @return {number}
 *
 * 思路二：
 * 简单粗暴
 */
const firstMissingPositive2 = (nums) => {
  const set = new Set(nums)
  i = 1
  while (true) {
    if (!set.has(i)) return i;
    i += 1
  }
};
