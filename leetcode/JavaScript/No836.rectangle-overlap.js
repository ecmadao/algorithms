/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * A rectangle is represented as a list [x1, y1, x2, y2], where (x1, y1) are the coordinates of its bottom-left corner, and (x2, y2) are the coordinates of its top-right corner.
 * Two rectangles overlap if the area of their intersection is positive.  To be clear, two rectangles that only touch at the corner or edges do not overlap.
 * Given two (axis-aligned) rectangles, return whether they overlap.
 *
 * Example 1:
 * Input: rec1 = [0,0,2,2], rec2 = [1,1,3,3]
 * Output: true
 *
 * Example 2:
 * Input: rec1 = [0,0,1,1], rec2 = [1,0,2,1]
 * Output: false
 *
 * Notes:
 * 1. Both rectangles rec1 and rec2 are lists of 4 integers.
 * 2. All coordinates in rectangles will be between -10^9 and 10^9.
 *
 * 矩形以列表 [x1, y1, x2, y2] 的形式表示，其中 (x1, y1) 为左下角的坐标，(x2, y2) 是右上角的坐标。
 * 如果相交的面积为正，则称两矩形重叠。需要明确的是，只在角或边接触的两个矩形不构成重叠。
 * 给出两个矩形，判断它们是否重叠并返回结果
 */


const isRangeOverlap = (p1, p2) => {
  return !( p2[0] >= p1[1] || p2[1] <= p1[0])
}

/**
* @param {number[]} rec1
* @param {number[]} rec2
* @return {boolean}
*/
var isRectangleOverlap = function(rec1, rec2) {
  return isRangeOverlap([rec1[0], rec1[2]], [rec2[0], rec2[2]]) && isRangeOverlap([rec1[1], rec1[3]], [rec2[1], rec2[3]])
}
