/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given an integer array arr and a target value target, return the integer value such that when we change all the integers larger than value in the given array to be equal to value,
 * the sum of the array gets as close as possible (in absolute difference) to target.
 * In case of a tie, return the minimum such integer.
 * Notice that the answer is not neccesarilly a number from arr.
 *
 * Example 1:
 * Input: arr = [4,9,3], target = 10
 * Output: 3
 * Explanation: When using 3 arr converts to [3, 3, 3] which sums 9 and that's the optimal answer.
 *
 * Example 2:
 * Input: arr = [2,3,5], target = 10
 * Output: 5
 *
 * Example 3:
 * Input: arr = [60864,25176,27249,21296,20204], target = 56803
 * Output: 11361
 *
 * Constraints:
 * 1. 1 <= arr.length <= 10^4
 * 2. 1 <= arr[i], target <= 10^5
 *
 * 给你一个整数数组 arr 和一个目标值 target ，请你返回一个整数 value ，使得将数组中所有大于 value 的值变成 value 后，数组的和最接近  target （最接近表示两者之差的绝对值最小）。
 * 如果有多种使得和最接近 target 的方案，请你返回这些整数中的最小值。
 * 请注意，答案不一定是 arr 中的数字
 */

/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 * 
 * leetcode 更新了测试用例，下面的方法已经无法通过测试。可以在该方法的基础上进行改造
 */
var findBestValue_abandoned = function(arr, target) {
  arr.sort((n1, n2) => n1 - n2)
  const avg = Math.round(target / arr.length)

  let i = 0
  let j = arr.length - 1
  while (i <= j) {
    const mid = Math.floor((i + j) / 2)
    if (arr[mid] <= avg) {
      i = mid + 1
    } else {
      j = mid - 1
    }
  }

  if (i === 0) return avg
  if (i === arr.length) return arr.pop()

  let left = i - 1
  let sum = 0
  while (left >= 0 && arr[left] === avg) sum += arr[left--]
  if (left < 0) return avg

  while (left >= 0) sum += arr[left--]

  const r1 = Math.floor((target - sum) / (arr.length - i))
  const r2 = Math.ceil((target - sum) / (arr.length - i))
  if (target - (sum + r1 * (arr.length - i)) <= (sum + r2 * (arr.length - i)) - target) return r1
  return r2
}


/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var findBestValue = function(arr, target) {
  arr.sort((n1, n2) => n1 - n2)
  const sumPrefix = [0];
  for (let i = 0; i < arr.length; i += 1) sumPrefix[i + 1] = arr[i] + sumPrefix[i];

  const search = (left, num) => {
    let i = left;
    let j = arr.length - 1;
    
    while (i <= j) {
      const mid = Math.floor((i + j) / 2)
      if (arr[mid] <= num) {
        i = mid + 1
      } else {
        j = mid - 1
      }
    }
    
    return i;
  }
  
  const find = (index, num, avg) => {
    const i = search(index, avg)
    if (i === index) return [avg, avg * (arr.length - index)]

    const sum = sumPrefix[i] - sumPrefix[index];
    const value = findValue(i, num - sum);
    return [value, sum + value * (arr.length - index)]
  }
  
  const findValue = (index, num) => {
    const count = arr.length - index;
    if (count === 1) return Math.min(arr[index], num);

    const avg = Math.floor(num / count);
    const res1 = find(index, num, avg);
    if (num % count === 0) return res1[0]

    const res2 = find(index, num, avg + 1);
    
    if (Math.abs(num - res1[1]) <= Math.abs(num - res2[1])) return res1[0];
    return res2[0];
  }

  return findValue(0, target)
};