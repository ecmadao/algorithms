/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * 给定N个人的出生年份和死亡年份，第i个人的出生年份为birth[i]，死亡年份为death[i]，实现一个方法以计算生存人数最多的年份。
 * 你可以假设所有人都出生于1900年至2000年（含1900和2000）之间。如果一个人在某一年的任意时期都处于生存状态，那么他们应该被纳入那一年的统计中。例如，生于1908年、死于1909年的人应当被列入1908年和1909年的计数。
 * 如果有多个年份生存人数相同且均为最大值，输出其中最小的年份。
 *
 * 示例：
 * 输入：
 * birth = {1900, 1901, 1950}
 * death = {1948, 1951, 2000}
 * 输出： 1901
 *
 * 提示：
 * 1. 0 < birth.length == death.length <= 10000
 * 2. birth[i] <= death[i]
 */


const search = (nums, target) => {
  let i = 0
  let j = nums.length - 1

  while (i <= j) {
    const mid = Math.floor((i + j) / 2)
    if (nums[mid] >= target) {
      j = mid - 1
    } else {
      i = mid + 1
    }
  }
  return i
}

/**
* @param {number[]} birth
* @param {number[]} death
* @return {number}
*/
var maxAliveYear = function(birth, death) {
  birth.sort((i, j) => i - j)
  death.sort((i, j) => i - j)

  let max = 0
  let year = birth[0]

  for (let i = 0; i < birth.length; i += 1) {
    const count = search(death, birth[i])
    if (i + 1 - count > max) {
      max = i + 1 - count
      year = birth[i]
    }
  }

  return year
}
