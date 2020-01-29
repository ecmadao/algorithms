/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Winter is coming! Your first job during the contest is to design a standard heater with fixed warm radius to warm all the houses.
 * Now, you are given positions of houses and heaters on a horizontal line, find out minimum radius of heaters so that all houses could be covered by those heaters.
 * So, your input will be the positions of houses and heaters seperately, and your expected output will be the minimum radius standard of heaters.
 *
 * Note:
 * 1. Numbers of houses and heaters you are given are non-negative and will not exceed 25000.
 * 2. Positions of houses and heaters you are given are non-negative and will not exceed 10^9.
 * 3. As long as a house is in the heaters' warm radius range, it can be warmed.
 * 4. All the heaters follow your radius standard and the warm radius will the same.
 *
 * Example1:
 * Input: [1,2,3],[2]
 * Output: 1
 * Explanation: The only heater was placed in the position 2, and if we use the radius 1 standard, then all the houses can be warmed.
 *
 * Example2:
 * Input: [1,2,3,4],[1,4]
 * Output: 1
 * Explanation: The two heater was placed in the position 1 and 4. We need to use radius 1 standard, then all the houses can be warmed.
 *
 * 利用二分。注意排序
 */

var searchInsert = function(nums, target) {
  let i = 0
  let j = nums.length - 1

  while (i < j) {
    const mid = Math.floor((i + j) / 2)
    if (nums[mid] === target) return mid

    if (nums[mid] < target) {
      i = mid + 1
    } else {
      j = mid - 1
    }
  }

  const mid = Math.floor((i + j) / 2)
  return nums[mid] < target ? mid + 1 : Math.max(0, mid)
}

/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function(houses, heaters) {
  heaters.sort((h1, h2) => h1 - h2)
  let result = 0

  for (const house of houses) {
    const index = searchInsert(heaters, house)

    const left = index > 0 ? house - heaters[index - 1] : Infinity
    const right = index < heaters.length ? heaters[index] - house : Infinity
    result = Math.max(result, Math.min(left, right))
  }
  return result
}
