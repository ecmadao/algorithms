/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * We sampled integers between 0 and 255, and stored the results in an array count:  count[k] is the number of integers we sampled equal to k.
 * Return the minimum, maximum, mean, median, and mode of the sample respectively, as an array of floating point numbers.  The mode is guaranteed to be unique.
 * (Recall that the median of a sample is:
 * The middle element, if the elements of the sample were sorted and the number of elements is odd;
 * The average of the middle two elements, if the elements of the sample were sorted and the number of elements is even.)
 *
 * Example 1:
 * Input: count = [0,1,3,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
 * Output: [1.00000,3.00000,2.37500,2.50000,3.00000]
 *
 * Example 2:
 * Input: count = [0,4,3,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
 * Output: [1.00000,4.00000,2.18182,2.00000,1.00000]
 *
 * Constraints:
 * 1. count.length == 256
 * 2. 1 <= sum(count) <= 10^9
 * 3. The mode of the sample that count represents is unique.
 * 4. Answers within 10^-5 of the true value will be accepted as correct.
 *
 * 我们对 0 到 255 之间的整数进行采样，并将结果存储在数组 count 中：count[k] 就是整数 k 的采样个数。
 * 我们以 浮点数 数组的形式，分别返回样本的最小值、最大值、平均值、中位数和众数。其中，众数是保证唯一的。
 * 我们先来回顾一下中位数的知识：
 * 1. 如果样本中的元素有序，并且元素数量为奇数时，中位数为最中间的那个元素；
 * 2. 如果样本中的元素有序，并且元素数量为偶数时，中位数为中间的两个元素的平均值
 */


// [1, 2, 2, 5]
// [{ total: 1, num: 1 }, { total: 3, num: 2 }, { total: 4, num: 5 }], target = 2

// [1,2,3,3,5]
// [{ total: 1, num: 1 }, { total: 2, num: 2 }, { total: 4, num: 3 }, { total: 5, num: 5 }], target = 3
const search = (nums, target) => {
  let i = 0
  let j = nums.length - 1
  while (i <= j) {
    const mid = Math.floor((i + j) / 2)
    const data = nums[mid]
    if (data.total === target) return mid
    if (data.total > target) {
      j = mid - 1
    } else {
      i = mid + 1
    }
  }
  return i
}

/**
* @param {number[]} count
* @return {number[]}
*/
var sampleStats = function(count) {
  let i = 0
  while (!count[i]) i += 1
  let j = count.length - 1
  while (!count[j]) j -= 1

  const result = [i, j]

  let sum = 0
  let total = 0
  let max = i
  const tmp = []

  for (let index = i; index <= j; index += 1) {
    if (count[index] > count[max]) max = index
    sum += index * count[index]

    if (count[index]) {
      total += count[index]
      tmp.push({ total, num: index })
    }
  }

  let medium
  const half = Math.ceil(total / 2)

  const index = search(tmp, half)
  if (total % 2 === 1) {
    medium = tmp[index].num
  } else {
    if (tmp[index].total === half) {
      medium = (tmp[index].num + tmp[index + 1].num) / 2
    } else {
      medium = tmp[index].num
    }
  }

  result.push(
    sum / total,
    medium,
    max
  )
  return result
}
