/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * Given an unsorted array,
 * find the maximum difference between the successive elements in its sorted form.
 * Try to solve it in linear time/space.
 * Return 0 if the array contains less than 2 elements.
 * You may assume all elements in the array are non-negative integers
 * and fit in the 32-bit signed integer range.
 *
 *
 * 给一个乱序的数组（由非负数组成），求其顺序排列之后，相邻元素间的最大间隔
 * 使用桶排序 + 插入排序
 */

// 插入排序
const insertion = (arr, num) => {
  let index = null;
  for (let i = arr.length - 1; i >= 0; i -= 1) {
    if (arr[i] >= num) {
      if (i === 0 || arr[i - 1] <= num) {
        index = 0;
        break;
      }
    } else {
      index = i + 1;
      break;
    }
  }
  return [
    ...arr.slice(0, index),
    num,
    ...arr.slice(index)
  ];
};

/**
* @param {number[]} nums
* @return {number}
*/
var maximumGap = function(nums) {
  if (nums.length < 2) return 0;

  const max = Math.max(...nums);
  const min = Math.min(...nums);
  const interval = (max - min) / nums.length;
  const tmp = {};
  let maxSection = 0;

  // 桶排序
  for (let i = 0; i < nums.length; i += 1) {
    const num = nums[i];
    const section = Math.floor((num - min) / interval);
    if (section > maxSection) maxSection = section;
    if (tmp[section] === undefined) {
      tmp[section] = [num];
    } else {
      tmp[section] = insertion(tmp[section], num);
    }
  }

  let pre = null;
  let maxGap = null;
  const sections = Object.keys(tmp);
  for (let i = 0; i < sections.length; i += 1) {
    const section = sections[i];
    const arr = tmp[section];

    for (let j = 0; j < arr.length; j += 1) {
      const num = arr[j];
      if (pre !== null) {
        const gap = num - pre;
        if (maxGap === null || gap > maxGap) maxGap = gap;
      }
      pre = num;
    }
  }
  return maxGap;
};
