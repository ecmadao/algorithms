/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * Given n non-negative integers representing the histogram's bar height where the width of each bar is 1,
 * find the area of largest rectangle in the histogram.
 *
 * Example:
 * Given heights = [2, 1, 5, 6, 2, 3]
 * Return 10
 *
 * Given heights = [0, 9]
 * Return 9
 *
 * Given heights = [2, 1, 2]
 * Return 3
 *
 * 简而言之：
 * 一个直方图，各个柱子宽度为 1，高度 >= 0
 * 求相邻的柱子所能组成的最大矩形的面积
 */

/**
 * Reference
 *
 * http://www.cnblogs.com/lichen782/p/leetcode_Largest_Rectangle_in_Histogram.html
 * http://fisherlei.blogspot.com/2012/12/leetcode-largest-rectangle-in-histogram.html
 */

/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  heights.push(0)

  const stack = [0]
  let maxArea = 0

  for (let i = 1; i < heights.length; i += 1) {
    // 如果高度递增，则直接把索引放入栈头部
    // 保证栈内的索引对应的高度始终是递增的

    while (stack.length && heights[stack.slice(-1)[0]] > heights[i]) {
      const end = stack.pop()
      maxArea = Math.max(
        maxArea,
        (stack.length ? i - stack.slice(-1)[0] - 1 : i) * heights[end]
      )
    }
    stack.push(i)
  }
  return maxArea
}
