/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given a non-empty array of non-negative integers nums,
 * the degree of this array is defined as the maximum frequency of any one of its elements.
 * Your task is to find the smallest possible length of a (contiguous) subarray of nums,
 * that has the same degree as nums.
 *
 * Example:
 * Input: [1, 2, 2, 3, 1]
 * Output: 2
 * Explanation:
 * The input array has a degree of 2 because both elements 1 and 2 appear twice.
 * Of the subarrays that have the same degree:
 * [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
 * The shortest length is 2. So return 2.
 *
 * Input: [1,2,2,3,1,4,2]
 * Output: 6
 *
 * Note:
 * nums.length will be between 1 and 50,000.
 * nums[i] will be an integer between 0 and 49,999.
 */

/**
 * 思路：
 * 已知数组的等级（degree）是该数组内的最大频次（某元素重复出现的最多的次数）
 * 例如，[1, 2, 2, 2, 1, 3] 的 degree 是 3，因为最大频次为 3（2 出现了 3 次）
 * 先要求求出该数组内的最短连续子数组，要求子数组和父数组有一样的 degree
 *
 * 初看可能比较繁琐，但实际上可以转换概念为：求出重复次数最多的数字，返回该数字所占的数组的长度
 * 注意处理有多个元素频次一样的情况。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
  let tmp = {
    [nums[0]]: {
      count: 1,
      indexs: [0]
    }
  };
  let curMaxDegreeNum = nums[0];

  const getLength = (num) => {
    const { indexs } = tmp[num];
    return indexs[indexs.length - 1] + 1 - indexs[0];
  };

  for (let i = 1; i < nums.length; i += 1) {
    const num = nums[i];
    if (!tmp[num]) {
      tmp[num] = {
        count: 1,
        indexs: [i]
      };
    } else {
      tmp[num].count += 1;
      tmp[num].indexs.push(i);

      if (tmp[num].count > tmp[curMaxDegreeNum].count) {
        curMaxDegreeNum = num;
      }
      if (tmp[num].count === tmp[curMaxDegreeNum].count) {
        if (getLength(num) < getLength(curMaxDegreeNum)) {
          curMaxDegreeNum = num;
        }
      }
    }
  }

  return getLength(curMaxDegreeNum);
};