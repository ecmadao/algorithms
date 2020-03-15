/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * There are N children standing in a line. Each child is assigned a rating value.
 * You are giving candies to these children subjected to the following requirements:
 * 1. Each child must have at least one candy.
 * 2. Children with a higher rating get more candies than their neighbors.
 * What is the minimum candies you must give?
 *
 * 已知有一个长度为 N 的数组，代表 N 个孩子，数组内的每个元素代表该孩子的评分。
 * 现在从数组开头开始，依次给每个孩子发糖果。要求如下：
 * 1. 每个孩子至少发一个糖果
 * 2. 有较高得分的孩子，得到的糖果数要比其两边较低分的孩子的多
 * 求最少发出的糖果总数
 */

/**
 * 思路：
 * 这道题比较坑的方面是，假设数组为 ratings = [1, 3, 3, 3, 2, 1]
 * ratings[1] 是一个峰值（如果峰是一个平面，我们认为平面的两端就是峰值）。
 * 因此 childs[1] 获得的糖果数应该大于其左右两边。
 * 而虽然 ratings[2] === ratings[1]，但它不是峰值，所以 childs[2] 最低可降至 1
 * 同理，ratings[3] 又是一个峰值
 *
 * 还有一种情况，ratings = [1, 3, 2, 1]
 * ratings[1] 是全局峰值。从左侧推导的话，childs[0] = 1，则 childs[1] 最少可为 2
 * 但是从右侧推导的时候，childs[3] = 1, childs[2] = 2, 则 childs[1] 最少为 3。
 * 此时应取最大值。
 *
 * 综上，在整个 ratings 中，
 * 当处于上坡（或下坡）时，childs[i] 都比 childs[i - 1] 大（或小）1
 * 当处于局部最小值时，无疑 childs[i] = 1
 * 当处于平稳状态时，childs[i] = 1
 * 当峰值不确定时，取最大值
 */

/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
  if (!ratings.length) return 0;
  if (ratings.length === 1) return 1;

  const tmpCache = {};
  const gotoLeftPeak = (i, tmp) => {
    let left = i - 1;
    while (left >= 0) {
      if (ratings[left] > ratings[left + 1]) {
        tmp[left] = tmp[left]
          ? Math.max(tmp[left], tmp[left + 1] + 1)
          : tmp[left + 1] + 1;
      } else if (ratings[left] === ratings[left + 1]) {
        tmp[left] = tmp[left] || 1;
      } else {
        left += 1;
        break;
      }
      if (left === 0) break;
      left -= 1;
    }
  };

  const gotoRightPeak = (i, tmp) => {
    let right = i + 1;
    while (right <= ratings.length - 1) {
      if (ratings[right] > ratings[right - 1]) {
        tmp[right] = tmp[right]
          ? Math.max(tmp[right], tmp[right - 1] + 1)
          : tmp[right - 1] + 1;
      } else if (ratings[right] === ratings[right - 1]) {
        tmp[right] = tmp[right] || 1;
      } else {
        right -= 1;
        break;
      }
      if (right === ratings.length - 1) break;
      right += 1;
    }
  };

  for (let i = 0; i < ratings.length; i += 1) {
    const rate = ratings[i];
    if (
      (i === 0 && rate <= ratings[i + 1])
      || (i === ratings.length - 1 && ratings[i - 1] >= rate)
      || (rate <= ratings[i + 1] && rate < ratings[i - 1])
    ) {
      if (tmpCache[i] == undefined) {
        tmpCache[i] = 1;
      }
      gotoLeftPeak(i, tmpCache);
      gotoRightPeak(i, tmpCache);
    }
  }
  const sum = Object.keys(tmpCache).reduce((pre, cur) => pre + tmpCache[cur], 0);
  return sum;
};


/**
 * @param {number[]} ratings
 * @return {number}
 *
 * 从头到尾、从尾到头分别遍历 1 次，寻找应该多发的数目
 */
var candy_2 = function(ratings) {
  const diff = Array.from({ length: ratings.length }, (_, i) => 0)

  for (let i = 1; i < ratings.length; i += 1) {
    if (ratings[i] > ratings[i - 1]) diff[i] = diff[i - 1] + 1
  }
  for (let i = ratings.length - 2; i >= 0; i -= 1) {
    if (ratings[i] > ratings[i + 1]) diff[i] = Math.max(diff[i], diff[i + 1] + 1)
  }
  return ratings.length + diff.reduce((n1, n2) => n1 + n2, 0)
}
