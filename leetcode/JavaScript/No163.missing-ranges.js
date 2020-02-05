/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a sorted integer array nums, where the range of elements are in the inclusive range [lower, upper], return its missing ranges.
 *
 * Example:
 * Input: nums = [0, 1, 3, 50, 75], lower = 0 and upper = 99,
 * Output: ["2", "4->49", "51->74", "76->99"]
 *
 * 给定一个排序的整数数组 nums ，其中元素的范围在 闭区间 [lower, upper] 当中，返回不包含在数组中的缺失区间
 */

/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
var findMissingRanges = function(nums, lower, upper) {
  if (!nums.length) return lower === upper ? [`${lower}`] : [`${lower}->${upper}`]

  const results = nums.reduce((list, num, index) => {
    if (index + 1 < nums.length && nums[index + 1] > num + 1) {
      const start = num + 1
      const end = nums[index + 1] - 1
      list.push(start === end ? `${start}` : `${start}->${end}`)
    }
    return list
  }, [])

  if (nums[0] > lower) {
    results.unshift(
      nums[0] - 1 === lower ? `${lower}` : `${lower}->${nums[0] - 1}`
    )
  }

  if (nums[nums.length - 1] < upper) {
    results.push(
      nums[nums.length - 1] + 1 === upper
        ? `${upper}`
        : `${nums[nums.length - 1] + 1}->${upper}`
    )
  }
  return results
}
