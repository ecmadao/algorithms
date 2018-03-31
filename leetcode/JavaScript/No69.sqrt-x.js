/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Implement int sqrt(int x).
 * Compute and return the square root of x.
 *
 * 求最接近 x 的开方的整数（返回的结果的平方要小于等于 x）
 * 考核二分法
 */

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  var max = x;
  var min = 0;
  while(min < max) {
    var center = Math.floor((max + min + 1) / 2);
    if (center * center > x) {
      max = center - 1;
    } else if (center * center <= x) {
      min = center;
    }
  }
  return min;
};
