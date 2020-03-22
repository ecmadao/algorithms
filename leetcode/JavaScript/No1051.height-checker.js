/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Students are asked to stand in non-decreasing order of heights for an annual photo.
 * Return the minimum number of students that must move in order for all students to be standing in non-decreasing order of height.
 * Notice that when a group of students is selected they can reorder in any possible way between themselves and the non selected students remain on their seats.
 *
 * Example 1:
 * Input: heights = [1,1,4,2,1,3]
 * Output: 3
 * Explanation:
 * Current array : [1,1,4,2,1,3]
 * Target array  : [1,1,1,2,3,4]
 * On index 2 (0-based) we have 4 vs 1 so we have to move this student.
 * On index 4 (0-based) we have 1 vs 3 so we have to move this student.
 * On index 5 (0-based) we have 3 vs 4 so we have to move this student.
 *
 * Example 2:
 * Input: heights = [5,1,2,3,4]
 * Output: 5
 *
 * Example 3:
 * Input: heights = [1,2,3,4,5]
 * Output: 0
 *
 * Constraints:
 * 1. 1 <= heights.length <= 100
 * 2. 1 <= heights[i] <= 100
 *
 * 学校在拍年度纪念照时，一般要求学生按照 非递减 的高度顺序排列。
 * 请你返回能让所有学生以 非递减 高度排列的最小必要移动人数。
 * 注意，当一组学生被选中时，他们之间可以以任何可能的方式重新排序，而未被选中的学生应该保持不动。
 */

/**
 * @param {number[]} heights
 * @return {number}
 *
 * 排序后比较两数组
 */
var heightChecker_1 = function(heights) {
  const sorted = [...heights].sort((n1, n2) => n1 - n2)
  let i = 0
  let res = 0
  while (i < heights.length) {
    if (heights[i] !== sorted[i]) res += 1
    i += 1
  }
  return res
}

/**
 * @param {number[]} heights
 * @return {number}
 *
 * 不必预先排序
 */
var heightChecker_2 = function(heights) {
  const arr = []
  for (const height of heights) {
    arr[height] = (arr[height] || 0) + 1
  }

  let index = 0
  let res = 0
  for (let i = 1; i < arr.length; i += 1) {
    while (arr[i]) {
      if (heights[index] !== i) res += 1
      arr[i] -= 1
      index += 1
    }
  }
  return res
}
