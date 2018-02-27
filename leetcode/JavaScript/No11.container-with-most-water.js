/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.
 *
 * Note:
 * You may not slant the container and n is at least 2.
 *
 * 题意描述：
 * 平面上有若干与y轴平行的线段，这些线段的一个端点一定在 x 轴上，另一个端点一定在第一象限。对于任意两条线段，其都与 x 轴一起形成一个容器，容器可以用来装水，水的高度等于较短侧边的高度。现在问所有容器中容量最大的是多少
 * 即在第一象限有很多点 (i, a[i])，其在 x 轴上的投影是 (i, 0)，
 * 现在求最大的 Math.min(a[i], a[j]) * Math.abs(j - i)
 */

/*
 * 思路描述：
 * 任取两点，其目标值，也就是容量为 Math.min(a[i], a[j]) * Math.abs(j - i)，
 * 即由最短的投影和点在 x 轴映射长度之差来决定
 * 假设我们从两端点开始，即取 i = 0; j = length - 1，求出此时的容量 area
 * 如果左侧投影较短，则左侧向右靠拢去寻找更长的投影；反之右侧向左靠拢去寻找更长的投影
 * 每次向中心靠拢一位，都要计算当前的面积（如果更大则取代之前的最大值），同时进行投影高度比较，以此来确定下一次移动的是哪一方
 */

var getArea = function(height, i, j) {
  return Math.abs(i - j) * Math.min(height[i], height[j]);
};

/**
* @param {number[]} height
* @return {number}
*/
var maxArea = function(height) {
  var i = 0;
  var j = height.length - 1;
  var result = 0;

  while(i < j) {
    var area = getArea(height, i, j);
    if (area > result) {
      result = area;
    }
    if (height[i] < height[j]) {
      i += 1;
    } else {
      j -= 1;
    }
  }
  return result;
};